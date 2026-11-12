import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/lib/spells";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/spells/${category.slug}`}
      className="card group relative block min-h-[22rem] overflow-hidden"
    >
      <Image
        src={category.image}
        alt={category.name}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-75"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-7">
        <span className="font-display block text-4xl text-gold-bright">{category.symbol}</span>
        <h3 className="font-display mt-3 text-3xl text-ink">{category.name}</h3>
        <p className="mt-2 text-sm text-ink-muted">{category.tagline}</p>
        <p className="mt-4 text-xs uppercase tracking-[0.22em] text-gold">
          {category.spells.length} spells →
        </p>
      </div>
    </Link>
  );
}
