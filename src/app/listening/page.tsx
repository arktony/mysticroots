import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { WhatsAppIcon } from "@/components/Footer";
import { site, whatsappLink } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import { serviceLd, faqLd, breadcrumbLd } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "A Listening Ear",
  description: "Someone to talk to, in confidence. Private companion calls and chats with Elder Mafosa for anyone who is lonely, grieving or simply needs to be heard.",
  path: "/listening",
  image: "/images/listening-window.jpg",
});

const msg = "Hello, I would like to book a Listening Ear call.";

const options = [
  {
    name: "A single call",
    length: "30 or 60 minutes",
    text: "One private conversation, by voice or by WhatsApp chat, at a time that suits you. Talk about anything or nothing in particular.",
  },
  {
    name: "A standing call",
    length: "Weekly, same day and time",
    text: "A regular voice to look forward to. Many people find that knowing someone will call on Sunday evening changes the whole week.",
  },
  {
    name: "Chat only",
    length: "An hour of messages",
    text: "For those who would rather write than speak. An hour of unhurried back and forth on WhatsApp, at your pace.",
  },
];

const expect = [
  { t: "You will be heard", d: "No rushing, no judging, no fixing unless you ask for it. The time is yours." },
  { t: "It stays between us", d: "Nothing you say is shared with anyone. The same confidentiality as every other service here." },
  { t: "No pressure", d: "If something comes up that a reading or spell work could help with, Elder Mafosa will say so once. The choice is always yours." },
  { t: "Real company", d: "This is not a script or a service desk. It is one person giving another their full attention." },
];

const faqs = [
  {
    q: "Is this counselling or therapy?",
    a: "No. It is companionship: a kind, private conversation with someone who listens. If you need professional mental health care, please seek it, and feel free to keep talking to us alongside it.",
  },
  {
    q: "What do people talk about?",
    a: "Everything. A partner who passed away. Children who live far away. A quiet house. Worries about money or health. Memories. Some people just want to describe their day to someone who is interested.",
  },
  {
    q: "What does it cost?",
    a: "Calls are priced by length and confirmed on WhatsApp before you book, with payment before the call. Standing weekly calls are offered at a reduced rate.",
  },
  {
    q: "When are calls available?",
    a: `${site.contact.hours}. If you message outside those hours, you will receive a reply when we open.`,
  },
  {
    q: "Can I call for someone else?",
    a: "Yes. Many calls are booked by sons and daughters for a parent who lives alone. We will arrange a first short call so the person can decide for themselves if they would like to continue.",
  },
];

export default function ListeningPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceLd({
            name: "A Listening Ear",
            description: metadata.description as string,
            path: "/listening/",
            image: "/images/listening-window.jpg",
            category: "Companionship call",
          }),
          faqLd(faqs),
          breadcrumbLd([{ name: "A Listening Ear", path: "/listening" }]),
        ]}
      />
      <PageHero
        eyebrow="A Listening Ear"
        title="Someone to talk to, in confidence."
        text="Loneliness is not a weakness. It is what happens when there is no one to tell. A Listening Ear is a private call or chat with Elder Mafosa for anyone who needs to be heard."
        image="/images/listening-window.jpg"
      >
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href={whatsappLink(msg)} target="_blank" rel="noopener" className="btn btn-whatsapp">
            <WhatsAppIcon /> Book a call on WhatsApp
          </a>
          <a href={`tel:${site.contact.phone}`} className="btn btn-ghost">
            Call {site.contact.phoneDisplay}
          </a>
        </div>
      </PageHero>

      <Container className="grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line">
            <Image src="/images/listening-cup.jpg" alt="Hands warming around a cup" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
          </div>
        </div>
        <div className="prose-mystic lg:col-span-7">
          <h2>Why we offer this</h2>
          <p>
            Over the years, many of the people who reached out for a spell or a reading did not really
            need either. They needed to say something out loud to a person who would listen. A widow
            whose children call once a month. A young man in a foreign city. A mother whose house went
            quiet when the last child left.
          </p>
          <p>
            A Listening Ear is for them, and for you. It is not a hotline and it is not therapy. It is
            unhurried company from someone who has sat with people in their hardest and quietest
            moments for more than {site.caster.experienceYears} years.
          </p>
          <p className="rounded-xl border border-line bg-surface/60 p-5 text-sm">
            <strong>If you are in danger or thinking of harming yourself</strong>, please contact your
            local emergency services or a crisis line in your country right now. This is not an
            emergency service, and you deserve immediate help.
          </p>
        </div>
      </Container>

      <section className="py-24">
        <Container>
          <p className="eyebrow mb-4 text-center">How you can book</p>
          <h2 className="font-display mb-12 text-center text-4xl text-ink sm:text-5xl">Three ways to talk</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {options.map((o) => (
              <div key={o.name} className="card flex flex-col p-7">
                <p className="eyebrow">{o.length}</p>
                <h3 className="font-display mt-3 text-3xl text-ink">{o.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">{o.text}</p>
                <a href={whatsappLink(`Hello, I would like to book ${o.name.toLowerCase()} with A Listening Ear.`)} target="_blank" rel="noopener" className="btn btn-ghost mt-6">
                  Ask about this
                </a>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-ink-muted">
            Prices are confirmed on WhatsApp before you book. Payment is made before the call.
          </p>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <p className="eyebrow mb-4 text-center">What to expect</p>
          <h2 className="font-display mb-12 text-center text-4xl text-ink sm:text-5xl">Four quiet promises</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {expect.map((v, i) => (
              <div key={v.t} className="card p-7">
                <span className="font-display text-4xl gold-text">0{i + 1}</span>
                <h3 className="font-display mt-4 text-2xl text-ink">{v.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{v.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Container className="max-w-3xl pb-10">
        <h2 className="font-display mb-8 text-center text-4xl text-ink">Questions people ask</h2>
        <div className="divide-y divide-line border-y border-line">
          {faqs.map((f, i) => (
            <details key={f.q} className="group" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left">
                <span className="font-display text-2xl text-ink">{f.q}</span>
                <span className="chev grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-gold">⌄</span>
              </summary>
              <p className="pb-7 pr-12 leading-relaxed text-ink-muted">{f.a}</p>
            </details>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-ink-muted">
          Looking for spell work or a reading instead? <Link href="/spells" className="text-gold hover:text-gold-bright">See all services</Link>.
        </p>
      </Container>

      <CtaBand
        title="You do not have to carry it alone."
        text="Send a message whenever you are ready. A first short call is enough to see whether this is for you."
        message={msg}
      />
    </>
  );
}
