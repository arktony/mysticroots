import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import CtaBand from "@/components/CtaBand";
import HeroBackdrop from "@/components/HeroBackdrop";
import { site } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import { personLd, breadcrumbLd } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: `About ${site.caster.name}`,
  description: `Meet ${site.caster.name}, ${site.caster.title.toLowerCase()} at Mystic Roots Healing, and learn the values behind every casting.`,
  path: "/about",
  image: "/images/caster-candles.jpg",
});

const values = [
  { t: "Honesty first", d: "You will be told plainly whether spell work can help, what it involves, and what it costs." },
  { t: "Tradition kept whole", d: "Roots, herbs, candles and prayer used exactly as they were handed down." },
  { t: "Your privacy is sacred", d: "Nothing you share leaves the consultation. Ever." },
  { t: "Do no harm", d: "Work meant to injure another person is not taken on." },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[personLd, breadcrumbLd([{ name: "About", path: "/about" }])]} />
      <section className="relative isolate overflow-hidden pt-36 pb-16 sm:pt-44">
        <HeroBackdrop image="/images/candle-tray.jpg" priority />
        <Container className="grid items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-5">About</p>
            <h1 className="font-display text-5xl font-medium leading-[1.05] text-ink sm:text-6xl md:text-7xl">
              {site.caster.name}
            </h1>
            <p className="mt-4 text-lg text-gold">{site.caster.title}</p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
              Born into a family of healers in {site.caster.location.split(",")[0]}, and practising
              for more than {site.caster.experienceYears} years for clients across the world.
            </p>
          </div>
        </Container>
      </section>

      <Container className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line">
            <Image src="/images/caster-candles.jpg" alt={site.caster.name} fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
          </div>
        </div>
        <div className="prose-mystic lg:col-span-7">
          <h2>The roots of the practice</h2>
          <p>
            {site.caster.name} did not choose this work. It was there from childhood, in a grandmother
            who was visited at dawn by people with troubles no clinic or court could solve, and in the
            quiet lessons that followed: which root for which ailment, which prayer for which night,
            how to read what a person does not say.
          </p>
          <p>
            Those lessons became a calling. Over the years the practice grew from a village doorstep to
            clients in more than thirty countries, most of them reached through distance casting. The
            methods have not changed. The care has not changed. Only the reach has.
          </p>
          <h2>What you can expect</h2>
          <p>
            A consultation here is a conversation, not a sales pitch. You will be heard. You will be
            told the truth about what spell work can and cannot do for your situation. And if you
            decide to go ahead, you will know the cost before anything begins.
          </p>
          <p>
            Every casting is done personally, at the right phase of the moon, with the full attention
            your situation deserves. Follow-up is part of the work, not an extra.
          </p>
          <h2>Who we help</h2>
          <p>
            People whose love has drifted. People shadowed by misfortune they cannot explain. Traders
            and professionals whose doors have gone quiet. Students, job seekers, and anyone facing a
            moment where fortune matters. If that is you, you are welcome here.
          </p>
          <Link href="/spells" className="btn btn-gold mt-4">Explore the spells</Link>
        </div>
      </Container>

      <section className="py-24">
        <Container>
          <p className="eyebrow mb-4 text-center">What guides the work</p>
          <h2 className="font-display mb-12 text-center text-4xl text-ink sm:text-5xl">Four promises</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div key={v.t} className="card p-7">
                <span className="font-display text-4xl gold-text">0{i + 1}</span>
                <h3 className="font-display mt-4 text-2xl text-ink">{v.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{v.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
