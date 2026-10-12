import { Link } from "@tanstack/react-router";

import logoDark from "@/assets/alpha-stem-logo.png.asset.json";
import logoLight from "@/assets/alpha-stem-logo-light.png.asset.json";

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const isLight = tone === "light";

  return (
    <Link
      to="/"
      className="flex items-center gap-3"
      aria-label="Alpha STEM Academy — home"
    >
      <img
        src={isLight ? logoLight.url : logoDark.url}
        alt="Alpha STEM Academy"
        width={296}
        height={139}
        className="h-11 w-auto sm:h-12"
      />
      <span
        className={`font-display text-[10px] font-semibold leading-tight sm:text-[11px] ${
          isLight ? "text-cloud-white/75" : "text-muted-foreground"
        }`}
      >
        Where Learning
        <br />
        Becomes Capability.
      </span>
    </Link>
  );
}
