import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Youtube } from "lucide-react";

import { Logo } from "./Logo";
import { contact, navItems, programItems, telHref } from "./nav-items";

const socials = [
  {
    label: "Instagram — @alphastemacademy_",
    Icon: Instagram,
    href: "https://www.instagram.com/alphastemacademy_/",
  },
];

export function Footer() {
  return (
    <footer className="cosmic-footer border-t border-border bg-midnight-blue text-foreground">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo tone="light" />
            <p className="mt-5 max-w-[40ch] text-sm text-pretty text-muted-foreground">
              A 100% virtual STEM institution focused on personalised learning, innovation
              and human-capability development.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ label, Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="label-mono text-muted-foreground">Navigate</p>
            <ul className="mt-4 space-y-3 text-sm">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="label-mono text-muted-foreground">Programs</p>
            <ul className="mt-4 space-y-3 text-sm">
              {programItems.map((p) => (
                <li key={p.title}>
                  <Link
                    to={p.to}
                    hash={p.hash}
                    className="text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="mt-6 label-mono text-muted-foreground">Contact</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="break-all text-foreground/80 transition-colors hover:text-foreground"
                >
                  {contact.email}
                </a>
              </li>
              {contact.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={telHref(phone)}
                    className="text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Alpha STEM Academy. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs">
            <Link
              to="/privacy"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
