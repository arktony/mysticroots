import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import CategoryCard from "@/components/CategoryCard";
import SpellCard from "@/components/SpellCard";
import Steps from "@/components/Steps";
import TestimonialCard from "@/components/TestimonialCard";
import FaqList from "@/components/FaqList";
import CtaBand from "@/components/CtaBand";
import { WhatsAppIcon } from "@/components/Footer";
import HeroBackdrop from "@/components/HeroBackdrop";
import { categories, featuredSpells } from "@/lib/spells";
import { testimonials } from "@/lib/content";
import { site, whatsappLink } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-24">
        <Image
          src="/images/hero-hand-candle.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-bg/70" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(11,10,20,0.2),rgba(11,10,20,0.85)_75%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-72 bg-gradient-to-t from-bg to-transparent" />
        <Container className="py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow rise mb-6">Traditional spell casting · Distance work worldwide</p>
            <h1 className="font-display rise rise-delay-1 text-5xl font-medium leading-[1.02] text-ink sm:text-6xl md:text-7xl lg:text-8xl">
              Where ancient roots
              <br />
              <span className="gold-text italic font-normal">meet your story.</span>
            </h1>
            <p className="rise rise-delay-2 mx-auto mt-7 max-w-xl text-lg leading-relaxed text-ink-muted">
              Love that has drifted. Luck that has turned. Shadows that follow you. For over{" "}
              {site.caster.experienceYears} years, {site.caster.name} has cast with the roots, herbs
              and prayers of tradition for people facing exactly what you face now.
            </p>
            <div className="rise rise-delay-3 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href={whatsappLink()} target="_blank" rel="noopener" className="btn btn-whatsapp">
                <WhatsAppIcon /> Private WhatsApp Consultation
              </a>
              <Link href="/spells" className="btn btn-ghost">
                Explore the spells
              </Link>
            </div>
            <ul className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em] text-ink-muted/80">
              <li className="flex items-center gap-2"><Dot /> Strictly confidential</li>
              <li className="flex items-center gap-2"><Dot /> Clear quote before work begins</li>
              <li className="flex items-center gap-2"><Dot /> Clients in 30+ countries</li>
            </ul>
          </div>
        </Container>
      </section>

      {/* Categories */}
      <section className="py-24">
        <Container>
          <SectionHeading
            eyebrow="Eight paths"
            title={<>Every casting begins with <em className="gold-text not-italic">your</em> need.</>}
            text="From love and family to justice, education and healing. Choose the path closest to what you are facing."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <CategoryCard key={c.slug} category={c} />
            ))}
          </div>
        </Container>
      </section>

      {/* About strip */}
      <section className="py-12">
        <Container className="grid items-center gap-12 lg:grid-cols-12">
          <div className="relative lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line">
              <Image
                src="/images/caster-candles.jpg"
                alt={`${site.caster.name} preparing a casting`}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="card absolute -bottom-6 -right-4 hidden w-56 p-5 sm:block">
              <p className="font-display text-5xl gold-text">{site.caster.experienceYears}+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-ink-muted">
                years of practice
              </p>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="eyebrow mb-4">About {site.caster.name}</p>
            <h2 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
              A lineage of healers. A practice built on trust.
            </h2>
            <div className="prose-mystic mt-6">
              <p>
                {site.caster.name} was raised in a family where the old ways were never lost.
                The roots, the herbs, the readings, and the prayers were passed down hand to hand,
                and are used today exactly as they were taught.
              </p>
              <p>
                What sets this practice apart is honesty. You will be told plainly whether spell
                work can help you, what it involves, and what it will cost. Nothing begins until
                you are ready.
              </p>
            </div>
            <Link href="/about" className="btn btn-ghost mt-6">
              Read the full story
            </Link>
          </div>
        </Container>
      </section>

      {/* Featured spells */}
      <section className="py-24">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              align="left"
              eyebrow="Most requested"
              title="Castings people come to us for."
            />
            <Link href="/spells" className="btn btn-ghost self-start md:self-auto">
              View all spells
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredSpells.map((s) => (
              <SpellCard key={s.slug} spell={s} category={s.category} />
            ))}
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="relative isolate overflow-hidden py-24">
        <HeroBackdrop image="/images/cards-candle.jpg" opacity={0.3} fade="both" overlay="bg-gradient-to-b from-bg/60 via-bg/80 to-bg/60" />
        <Container>
          <SectionHeading
            eyebrow="How it works"
            title="Simple, private, and honest from the first message."
            text="You never have to travel. Most of our clients are abroad, and distance casting carries the same care as a visit in person."
          />
          <div className="mt-14">
            <Steps compact />
          </div>
          <div className="mt-10 text-center">
            <Link href="/how-it-works" className="btn btn-ghost">
              See the full process
            </Link>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <Container>
          <SectionHeading
            eyebrow="In their words"
            title="Stories from people who reached out."
            text="Shared with permission. Names and details are changed to protect privacy."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.slice(0, 3).map((t) => (
              <TestimonialCard key={t.name} t={t} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/testimonials" className="btn btn-ghost">
              More testimonials
            </Link>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              align="left"
              eyebrow="Questions"
              title="What people ask before they book."
            />
            <Link href="/faq" className="btn btn-ghost mt-8">
              All questions
            </Link>
          </div>
          <div className="lg:col-span-8">
            <FaqList limit={5} />
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}

function Dot() {
  return <span className="flicker inline-block h-1.5 w-1.5 rounded-full bg-gold" />;
}
