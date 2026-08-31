import { Link } from "@tanstack/react-router";

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const isLight = tone === "light";

  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Alpha STEM Academy — home">
      <span
        className={
          isLight
            ? "grid size-10 shrink-0 place-items-center rounded-xl bg-background font-display text-lg font-semibold text-foreground"
            : "grid size-10 shrink-0 place-items-center rounded-xl bg-foreground font-display text-lg font-semibold text-background"
        }
      >
        A
      </span>
      <span className="block">
        <span
          className={`block font-display text-sm font-semibold uppercase leading-none tracking-[0.14em] ${
            isLight ? "text-background" : "text-foreground"
          }`}
        >
          Alpha STEM Academy
        </span>
        <span
          className={`mt-1 block font-mono text-[10px] leading-none ${
            isLight ? "text-background/60" : "text-muted-foreground"
          }`}
        >
          Where Learning Becomes Capability.
        </span>
      </span>
    </Link>
  );
}
