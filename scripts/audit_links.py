#!/usr/bin/env python3
"""Audit rendered site navigation, footer links, and primary CTA destinations."""
from __future__ import annotations

import argparse
import sys
from urllib.parse import urljoin, urlparse

import requests
from bs4 import BeautifulSoup

ROUTES = ("/", "/about", "/programs", "/alpha-plus", "/contact", "/privacy", "/terms")
EXPECTED_CTA_PATHS = {
    "Explore Our Programs": "/programs",
    "Explore Programs": "/programs",
    "Start Learning": "/contact",
    "Enquire About Admission": "/contact",
    "Explore Alpha+ Programmes": "/alpha-plus",
    "Partner With Us": "/contact",
    "Speak With Us": "/contact",
    "Enquire Now": "/contact",
}


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--base-url", default="http://localhost:8080")
    args = parser.parse_args()
    base = args.base_url.rstrip("/")
    errors: list[str] = []
    checks = 0
    with requests.Session() as session:
        for route in ROUTES:
            page_url = urljoin(base + "/", route.lstrip("/"))
            try:
                response = session.get(page_url, timeout=20)
                response.raise_for_status()
            except requests.RequestException as exc:
                errors.append(f"{route}: page could not be loaded ({exc})")
                continue
            soup = BeautifulSoup(response.text, "html.parser")
            ids = {node.get("id") for node in soup.select("[id]")}
            links = soup.select("header a[href], footer a[href], main a[href]")
            for link in links:
                href = (link.get("href") or "").strip()
                label = " ".join(link.stripped_strings) or link.get("aria-label", "(icon link)")
                if not href or href == "#":
                    errors.append(f"{route}: {label!r} has no destination")
                    continue
                resolved = urlparse(urljoin(page_url, href))
                if resolved.scheme not in ("http", "https"):
                    if resolved.scheme not in ("mailto", "tel"):
                        errors.append(f"{route}: {label!r} uses unsupported link {href!r}")
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
                    target = urljoin(page_url, href)
                    try:
                        target_response = session.get(target, timeout=20)
                        target_response.raise_for_status()
                        target_ids = {node.get("id") for node in BeautifulSoup(target_response.text, "html.parser").select("[id]")}
                    except requests.RequestException as exc:
                        errors.append(f"{route}: {label!r} fragment {href!r} could not load ({exc})")
                        continue
                    checks += 1
                    if resolved.fragment not in target_ids:
                        errors.append(f"{route}: {label!r} points to missing section #{resolved.fragment} on {resolved.path}")

            for anchor in soup.select("main a"):
                label = " ".join(anchor.stripped_strings)
                expected = EXPECTED_CTA_PATHS.get(label)
                if expected:
                    actual = urlparse(urljoin(page_url, anchor.get("href", ""))).path
                    checks += 1
                    if actual != expected:
                        errors.append(f"{route}: CTA {label!r} should resolve to {expected}, not {actual}")

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
