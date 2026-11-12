import Image from "next/image";
import Link from "next/link";
import type { Spell, Category } from "@/lib/spells";

export default function SpellCard({ spell, category }: { spell: Spell; category: Category }) {
  return (
    <Link href={`/spells/${category.slug}/${spell.slug}`} className="card group block overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={spell.image}
          alt={spell.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-gold/40 bg-bg/60 px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-gold backdrop-blur">
          {category.name}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-display text-2xl text-ink group-hover:text-gold-bright transition-colors">
          {spell.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">{spell.short}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold">
          Learn more <span className="transition-transform group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}
