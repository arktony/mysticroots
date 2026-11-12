import Image from "next/image";

/** Full-bleed background image with a dark overlay that fades into the page background. */
export default function HeroBackdrop({
  image,
  priority = false,
  opacity = 1,
  fade = "bottom",
  overlay = "bg-gradient-to-b from-bg/75 via-bg/85 to-bg",
}: {
  image: string;
  priority?: boolean;
  opacity?: number;
  fade?: "bottom" | "both" | "none";
  overlay?: string;
}) {
  const mask =
    fade === "both"
      ? "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)"
      : fade === "bottom"
        ? "linear-gradient(to bottom, black 55%, transparent)"
        : undefined;
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10"
      style={mask ? { maskImage: mask, WebkitMaskImage: mask } : undefined}
    >
      <Image src={image} alt="" fill priority={priority} sizes="100vw" className="object-cover" style={{ opacity }} />
      <div className={`absolute inset-0 ${overlay}`} />
    </div>
  );
}
