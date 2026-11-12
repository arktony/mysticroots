export default function SectionHeading({
  eyebrow,
  title,
  text,
  align = "center",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  text?: string;
  align?: "center" | "left";
}) {
  const a = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${a}`}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="font-display text-4xl font-medium leading-[1.1] text-ink sm:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">{text}</p>}
    </div>
  );
}
