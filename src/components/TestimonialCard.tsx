export default function TestimonialCard({
  t,
}: {
  t: { name: string; location: string; spell: string; text: string };
}) {
  return (
    <figure className="card flex h-full flex-col p-7">
      <div className="mb-4 flex gap-1 text-gold" aria-label="5 star rating">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>
      <blockquote className="font-display flex-1 text-xl italic leading-relaxed text-ink/90">
        “{t.text}”
      </blockquote>
      <figcaption className="mt-6 border-t border-line pt-4 text-sm">
        <span className="font-semibold text-ink">{t.name}</span>
        <span className="text-ink-muted"> · {t.location}</span>
        <span className="mt-1 block text-xs uppercase tracking-[0.18em] text-gold">{t.spell}</span>
      </figcaption>
    </figure>
  );
}
