import astronaut from "@/assets/space-astronaut.webp";
import planet from "@/assets/space-planet.webp";
import rocket from "@/assets/space-rocket.webp";

const artwork = {
  astronaut: { src: astronaut, alt: "" },
  planet: { src: planet, alt: "" },
  rocket: { src: rocket, alt: "" },
} as const;

export function SpaceSticker({
  kind,
  className = "",
}: {
  kind: keyof typeof artwork;
  className?: string;
}) {
  const image = artwork[kind];

  return (
    <img
      src={image.src}
      alt={image.alt}
      aria-hidden="true"
      loading="lazy"
      decoding="async"
      className={`pointer-events-none select-none space-float ${className}`}
    />
  );
}