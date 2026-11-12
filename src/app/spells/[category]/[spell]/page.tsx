import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import SpellCard from "@/components/SpellCard";
import CtaBand from "@/components/CtaBand";
import FaqList from "@/components/FaqList";
import HeroBackdrop from "@/components/HeroBackdrop";
import { WhatsAppIcon } from "@/components/Footer";
import { allSpells, getCategory, getSpell } from "@/lib/spells";
import { site, whatsappLink } from "@/lib/site";

export function generateStaticParams() {
  return allSpells.map((s) => ({ category: s.category.slug, spell: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/spells/[category]/[spell]">): Promise<Metadata> {
  const { category, spell } = await params;
  const s = getSpell(category, spell);
  if (!s) return {};
  return { title: s.name, description: s.short, openGraph: { images: [s.image] } };
}

export default async function SpellPage({ params }: PageProps<"/spells/[category]/[spell]">) {
  const { category, spell } = await params;
  const c = getCategory(category);
  const s = getSpell(category, spell);
  if (!c || !s) notFound();
  const related = c.spells.filter((x) => x.slug !== s.slug).slice(0, 3);
  const msg = `Hello, I would like a private consultation about the ${s.name} spell.`;

  return (
    <>
      <section className="relative isolate overflow-hidden pt-32 pb-16 sm:pt-40">
        <HeroBackdrop image={s.image} priority />
        <Container>
          <Breadcrumbs
            items={[
              { href: "/spells", label: "Spells" },
              { href: `/spells/${c.slug}`, label: c.name },
              { label: s.name },
            ]}
          />
          <h1 className="font-display mt-8 max-w-4xl text-5xl font-medium leading-[1.05] text-ink sm:text-6xl md:text-7xl">
            {s.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-muted">{s.short}</p>
        </Container>
      </section>

      <Container className="grid gap-14 pb-10 lg:grid-cols-12">
        <article className="lg:col-span-7">
          <div className="prose-mystic">
            <p className="text-lg text-ink!">{s.intro}</p>
            <h2>This casting helps with</h2>
            <ul>
              {s.helpsWith.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <h2>What happens</h2>
            <ol className="space-y-5">
              {s.process.map((p, i) => (
                <li key={p} className="flex gap-5">
                  <span className="font-display shrink-0 text-3xl gold-text">0{i + 1}</span>
                  <span className="pt-1 leading-relaxed text-ink-muted">{p}</span>
                </li>
              ))}
            </ol>
            <h2>Timeframe</h2>
            <p>{s.timeframe}</p>
            <p>
              Results vary with every situation, and no honest practitioner promises an outcome.
              What you can count on is a genuine casting, full attention, and truthful guidance
              from the first message to the last.
            </p>
          </div>
        </article>

        <aside className="lg:col-span-4 lg:col-start-9">
          <div className="card sticky top-28 p-7">
            <p className="eyebrow mb-3">Begin privately</p>
            <h3 className="font-display text-3xl text-ink">Talk to {site.caster.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              Share your situation in confidence. You will hear honestly whether this casting is
              right for you and receive a clear quote before anything begins.
            </p>
            <a href={whatsappLink(msg)} target="_blank" rel="noopener" className="btn btn-whatsapp mt-6 w-full">
              <WhatsAppIcon /> WhatsApp consultation
            </a>
            <a href={`tel:${site.contact.phone}`} className="btn btn-ghost mt-3 w-full">
              Call {site.contact.phoneDisplay}
            </a>
            <ul className="mt-6 space-y-2 text-xs uppercase tracking-[0.18em] text-ink-muted">
              <li>✦ Distance casting available</li>
              <li>✦ Strictly confidential</li>
              <li>✦ Adults 18+ only</li>
            </ul>
          </div>
        </aside>
      </Container>

      <section className="py-20">
        <Container>
          <div className="mb-10 flex items-end justify-between">
            <h2 className="font-display text-4xl text-ink">More {c.name.toLowerCase()} castings</h2>
            <Link href={`/spells/${c.slug}`} className="text-xs uppercase tracking-[0.2em] text-gold hover:text-gold-bright">
              View all →
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <SpellCard key={r.slug} spell={r} category={c} />
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-10">
        <Container className="max-w-3xl">
          <h2 className="font-display mb-8 text-center text-4xl text-ink">Common questions</h2>
          <FaqList limit={4} />
        </Container>
      </section>

      <CtaBand message={msg} />
    </>
  );
}
