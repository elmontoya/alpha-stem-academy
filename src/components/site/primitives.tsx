import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { SpaceSticker } from "./SpaceSticker";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-16 lg:py-24 ${className}`}>
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function GlassCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`glass-panel rounded-2xl p-6 ${className}`}>{children}</div>
  );
}

export function PrimaryLink({
  to,
  children,
}: {
  to: string;
  children: ReactNode;
}) {
  return (
    <Link
      to={to}
      className="inline-block rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
    >
      {children}
    </Link>
  );
}

export function SecondaryLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="inline-block rounded-full border border-border bg-surface/60 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-surface"
    >
      {children}
    </Link>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="relative py-14 lg:py-20">
      <div className="relative">
        <div className="absolute right-0 top-0 hidden lg:block">
          <SpaceSticker kind="astronaut" className="w-24" />
        </div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="rise mt-5 max-w-[26ch] font-display text-4xl font-semibold leading-[1.05] lg:text-6xl">
          {title}
        </h1>
        <p className="rise mt-6 max-w-[62ch] text-lg text-pretty text-muted-foreground [animation-delay:120ms]">
          {intro}
        </p>
      </div>
    </section>
  );
}

export function EnquiryCta({
  title = "Ready to begin the conversation?",
  body = "Tell us about your learner and we'll map a personalised path together.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="py-8 pb-20">
      <div className="glass-panel relative overflow-hidden rounded-[28px] p-10 text-center lg:p-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/60 to-transparent"
        />
        <h2 className="mx-auto max-w-[24ch] font-display text-3xl font-semibold lg:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-[52ch] text-pretty text-muted-foreground">{body}</p>
        <div className="mt-8">
          <PrimaryLink to="/contact">Enquire Now</PrimaryLink>
        </div>
      </div>
    </section>
  );
}
