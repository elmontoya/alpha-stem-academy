#!/usr/bin/env python3
"""Audit rendered site navigation, footer links, and primary CTA destinations."""
from __future__ import annotations

import argparse
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.error import URLError
from urllib.parse import urljoin, urlparse
from urllib.request import urlopen

ROUTE_FILES = Path(__file__).resolve().parents[1] / "src" / "routes"
ROUTES = tuple(
    "/" if route.stem == "index" else f"/{route.stem.replace('.', '/') }"
    for route in sorted(ROUTE_FILES.glob("*.tsx"))
    if route.stem != "__root" and not route.stem.startswith("api.")
)
EXPECTED_CTA_DESTINATIONS = {
    "Explore Our Programs": ("/programs", ""),
    "Explore Programs": ("/programs", ""),
    "Start Learning": ("/contact", ""),
    "Enquire About Admission": ("/contact", ""),
    "Discover Alpha+": ("/alpha-plus", ""),
    "Explore Alpha+ Programmes": ("/alpha-plus", "financial-literacy"),
    "Partner With Us": ("/contact", ""),
    "Speak With Us": ("/contact", ""),
    "Enquire Now": ("/contact", ""),
}
EXPECTED_NAV_DESTINATIONS = {
    "Home": "/",
    "About": "/about",
    "Programs": "/programs",
    "Alpha+": "/alpha-plus",
    "Contact": "/contact",
    "Enquire Now": "/contact",
    "Privacy Policy": "/privacy",
    "Terms & Conditions": "/terms",
}
EXPECTED_PROGRAM_DESTINATIONS = {
    "K–12 Virtual School": ("/programs", "k12"),
    "Core Academic Programmes": ("/programs", "academics"),
    "The Alpha Learning Model": ("/programs", "learning-model"),
    "Financial Literacy": ("/alpha-plus", "financial-literacy"),
    "Languages": ("/alpha-plus", "nigerian-languages"),
    "School Coding Clubs": ("/alpha-plus", "coding-clubs"),
    "Exam Preparation": ("/alpha-plus", "exam-prep"),
}
EXPECTED_HEADER_LABELS = frozenset(EXPECTED_NAV_DESTINATIONS) - {
    "Privacy Policy",
    "Terms & Conditions",
}
EXPECTED_FOOTER_LABELS = (
    set(EXPECTED_NAV_DESTINATIONS)
    | set(EXPECTED_PROGRAM_DESTINATIONS)
    | {"Instagram — @alphastemacademy_"}
)


class PageLinks(HTMLParser):
    """Collect anchors and IDs from rendered page regions without dependencies."""

    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.stack: list[str] = []
        self.ids: set[str] = set()
        self.links: list[dict[str, str | bool]] = []
        self.anchor: dict[str, str | bool] | None = None

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attributes = dict(attrs)
        if attributes.get("id"):
            self.ids.add(attributes["id"] or "")
        if tag == "a":
            self.anchor = {
                "href": attributes.get("href") or "",
                "label": attributes.get("aria-label") or "",
                "region": next((item for item in reversed(self.stack) if item in ("header", "footer", "main")), ""),
            }
        if tag not in {"area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"}:
            self.stack.append(tag)

    def handle_data(self, data: str) -> None:
        if self.anchor is not None:
            self.anchor["label"] = str(self.anchor["label"]) + data

    def handle_endtag(self, tag: str) -> None:
        if tag == "a" and self.anchor is not None:
            self.links.append(self.anchor)
            self.anchor = None
        if tag in self.stack:
            self.stack = self.stack[: len(self.stack) - 1 - self.stack[::-1].index(tag)]


def fetch_page(url: str) -> tuple[str, str]:
    with urlopen(url, timeout=20) as response:
        return response.geturl(), response.read().decode("utf-8", errors="replace")


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--base-url", default="http://localhost:8080")
    args = parser.parse_args()
    base = args.base_url.rstrip("/")
    errors: list[str] = []
    checks = 0
    page_data: dict[str, PageLinks] = {}
    final_urls: dict[str, str] = {}
    for route in ROUTES:
        page_url = urljoin(base + "/", route.lstrip("/"))
        try:
            final_url, markup = fetch_page(page_url)
        except (URLError, TimeoutError, OSError) as exc:
            errors.append(f"{route}: page could not be loaded ({exc})")
            continue
        parser = PageLinks()
        parser.feed(markup)
        page_data[route] = parser
        final_urls[route] = final_url
        if urlparse(final_url).path.rstrip("/") != route.rstrip("/"):
            errors.append(f"{route}: page redirected to unexpected destination {urlparse(final_url).path!r}")

    for route, parser in page_data.items():
        page_url = final_urls[route]
        header_labels = {
            " ".join(str(link["label"]).split())
            for link in parser.links
            if link["region"] == "header"
        }
        footer_labels = {
            " ".join(str(link["label"]).split())
            for link in parser.links
            if link["region"] == "footer"
        }
        for missing in sorted(EXPECTED_HEADER_LABELS - header_labels):
            errors.append(f"{route}: expected navigation item {missing!r} is missing")
        for missing in sorted(EXPECTED_FOOTER_LABELS - footer_labels):
            errors.append(f"{route}: expected footer link {missing!r} is missing")
        for link in parser.links:
            region = str(link["region"])
            if not region:
                continue
            href = str(link["href"]).strip()
            label = " ".join(str(link["label"]).split()) or "(icon link)"
            if not href or href == "#":
                errors.append(f"{route}: {label!r} has no destination")
                continue
            resolved = urlparse(urljoin(page_url, href))
            if region in ("header", "footer"):
                expected_path = EXPECTED_NAV_DESTINATIONS.get(label)
                expected_fragment = ""
                if region == "footer" and label in EXPECTED_PROGRAM_DESTINATIONS:
                    expected_path, expected_fragment = EXPECTED_PROGRAM_DESTINATIONS[label]
                if label in EXPECTED_NAV_DESTINATIONS or (region == "footer" and label in EXPECTED_PROGRAM_DESTINATIONS):
                    checks += 1
                    if (resolved.path, resolved.fragment) != (expected_path, expected_fragment):
                        errors.append(
                            f"{route}: {region} link {label!r} should resolve to "
                            f"{expected_path}#{expected_fragment}, not {resolved.path}#{resolved.fragment}"
                        )
            if resolved.scheme not in ("http", "https"):
                if resolved.scheme not in ("mailto", "tel") or not resolved.path:
                    errors.append(f"{route}: {label!r} uses invalid link {href!r}")
                else:
                    checks += 1
                continue
            if resolved.netloc != urlparse(base).netloc:
                checks += 1
                continue
            if resolved.path not in ROUTES:
                errors.append(f"{route}: {label!r} points to unknown route {resolved.path!r}")
                continue
            checks += 1
            if resolved.fragment:
                target_parser = page_data.get(resolved.path)
                if target_parser is None:
                    errors.append(f"{route}: {label!r} target page {resolved.path!r} did not load")
                    continue
                checks += 1
                if resolved.fragment not in target_parser.ids:
                    errors.append(f"{route}: {label!r} points to missing section #{resolved.fragment} on {resolved.path}")

            if region == "main":
                expected = EXPECTED_CTA_DESTINATIONS.get(label)
                if expected:
                    checks += 1
                    if (resolved.path, resolved.fragment) != expected:
                        errors.append(
                            f"{route}: CTA {label!r} should resolve to {expected[0]}"
                            f"#{expected[1]}, not {resolved.path}#{resolved.fragment}"
                        )

    if errors:
        print("Link and CTA audit FAILED:")
        for error in errors:
            print(f"- {error}")
        print(f"{checks} destination checks completed; {len(errors)} issue(s).")
        return 1
    print(f"Link and CTA audit passed: {checks} destinations checked across {len(ROUTES)} pages.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
