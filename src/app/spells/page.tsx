import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import CategoryCard from "@/components/CategoryCard";
import SpellCard from "@/components/SpellCard";
import CtaBand from "@/components/CtaBand";
import { categories } from "@/lib/spells";

export const metadata: Metadata = {
  title: "Spells",
  description:
    "Love, protection, money and success spells cast with traditional roots and prayer. Private consultations and distance casting worldwide.",
};

export default function SpellsPage() {
  return (
    <>
      <PageHero
        eyebrow="The spells"
        title="Eight paths. One honest conversation to begin."
        text="Love, family, protection, money, justice, education, success and healing. Every service below is prepared for one person and one situation."
        image="/images/candles-glow.jpg"
      />
      <Container>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <CategoryCard key={c.slug} category={c} />
          ))}
        </div>
      </Container>
      {categories.map((c) => (
        <section key={c.slug} id={c.slug} className="scroll-mt-28 py-20">
          <Container>
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="eyebrow mb-3">
                  <span className="mr-2">{c.symbol}</span>
                  {c.name}
                </p>
                <h2 className="font-display text-4xl text-ink">{c.tagline}</h2>
              </div>
              <p className="max-w-md text-sm text-ink-muted">{c.description}</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {c.spells.map((s) => (
                <SpellCard key={s.slug} spell={s} category={c} />
              ))}
            </div>
          </Container>
        </section>
      ))}
      <CtaBand />
    </>
  );
}
