import Link from "next/link";

export default function Breadcrumbs({ items }: { items: { href?: string; label: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.2em] text-ink-muted">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="hover:text-gold-bright">Home</Link>
        </li>
        {items.map((it) => (
          <li key={it.label} className="flex items-center gap-2">
            <span className="text-gold/60">/</span>
            {it.href ? (
              <Link href={it.href} className="hover:text-gold-bright">{it.label}</Link>
            ) : (
              <span className="text-gold">{it.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
