import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { posts } from "@/lib/content";

export const metadata: Metadata = pageMeta({
  title: "Blog",
  description: "Guidance on spell work, protection, timing and tradition from Mystic Roots Healing.",
  path: "/blog",
  image: "/images/cards-candle.jpg",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Journal"
        title="Notes from the practice."
        text="Guidance, tradition and plain answers for people walking a difficult road."
        image="/images/cards-candle.jpg"
      />
      <Container>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="card group block overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={p.image} alt="" fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
              </div>
              <div className="p-6">
                <time className="text-xs uppercase tracking-[0.2em] text-gold">
                  {new Date(p.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                </time>
                <h2 className="font-display mt-3 text-2xl text-ink group-hover:text-gold-bright">{p.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
      <CtaBand />
    </>
  );
}
