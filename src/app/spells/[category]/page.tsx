import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SpellCard from "@/components/SpellCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import Steps from "@/components/Steps";
import { categories, getCategory } from "@/lib/spells";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/spells/[category]">): Promise<Metadata> {
  const { category } = await params;
  const c = getCategory(category);
  if (!c) return {};
  return { title: c.slug === "healing" ? c.name : `${c.name} Spells`, description: c.description };
}

export default async function CategoryPage({ params }: PageProps<"/spells/[category]">) {
  const { category } = await params;
  const c = getCategory(category);
  if (!c) notFound();

  return (
    <>
      <PageHero
        eyebrow={`${c.symbol} ${c.name}`}
        title={c.tagline}
        text={c.description}
        image={c.image}
        crumbs={<Breadcrumbs items={[{ href: "/spells", label: "Spells" }, { label: c.name }]} />}
      />
      <Container>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {c.spells.map((s) => (
            <SpellCard key={s.slug} spell={s} category={c} />
          ))}
        </div>
      </Container>
      <section className="py-24">
        <Container>
          <p className="eyebrow mb-4 text-center">How it works</p>
          <h2 className="font-display mb-12 text-center text-4xl text-ink">From first message to casting</h2>
          <Steps compact />
        </Container>
      </section>
      <CtaBand message={`Hello, I would like a consultation about ${c.name.toLowerCase()} spells.`} />
    </>
  );
}
