import { steps } from "@/lib/content";

export default function Steps({ compact = false }: { compact?: boolean }) {
  const list = compact ? steps.filter((_, i) => i !== 2) : steps;
  return (
    <ol className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {list.map((s) => (
        <li key={s.n} className="card p-7">
          <span className="font-display text-5xl font-light gold-text">{s.n}</span>
          <h3 className="font-display mt-4 text-2xl text-ink">{s.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">{s.text}</p>
        </li>
      ))}
    </ol>
  );
}
