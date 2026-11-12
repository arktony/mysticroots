import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import FaqList from "@/components/FaqList";
import { steps } from "@/lib/content";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "From your first message to the casting and follow-up: how a private consultation and distance spell casting works at Mystic Roots Healing.",
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="The process"
        title="Private, honest, and the same wherever you are in the world."
        text="You never need to travel. Here is exactly what happens from the moment you reach out."
        image="/images/tarot-palo-santo.jpg"
      />
      <Container className="max-w-4xl">
        <ol className="relative space-y-10 before:absolute before:left-6 before:top-4 before:bottom-4 before:w-px before:bg-gradient-to-b before:from-gold/0 before:via-gold/50 before:to-gold/0 sm:before:left-10">
          {steps.map((s) => (
            <li key={s.n} className="relative flex gap-7 sm:gap-10">
              <span className="font-display relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold/50 bg-bg text-lg text-gold sm:h-20 sm:w-20 sm:text-2xl">
                {s.n}
              </span>
              <div className="card flex-1 p-7">
                <h2 className="font-display text-3xl text-ink">{s.title}</h2>
                <p className="mt-3 leading-relaxed text-ink-muted">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>

      <section className="py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-line">
            <Image src="/images/moon-clouds.jpg" alt="Full moon through clouds" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div>
            <p className="eyebrow mb-4">Distance casting</p>
            <h2 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
              Oceans do not weaken the work.
            </h2>
            <div className="prose-mystic mt-6">
              <p>
                Most of our clients live abroad. Distance casting uses your full name, your date of
                birth and, where it helps, a photograph. The casting happens here, at the right
                phase of the moon, exactly as it would if you were present.
              </p>
              <p>
                You receive a message when the work is complete, guidance on what to do next, and
                follow-up as things unfold. Many clients feel a shift the same day.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Container className="max-w-3xl pb-6">
        <h2 className="font-display mb-8 text-center text-4xl text-ink">Before you book</h2>
        <FaqList limit={6} />
      </Container>
      <CtaBand />
    </>
  );
}
