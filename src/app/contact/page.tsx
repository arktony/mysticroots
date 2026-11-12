import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { WhatsAppIcon } from "@/components/Footer";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Contact",
  description: "Reach Mystic Roots Healing on WhatsApp, by phone or through the private contact form.",
  path: "/contact",
  image: "/images/crystal-purple.jpg",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Begin with a private conversation."
        text="WhatsApp is fastest. The form works too, and everything you share stays between us."
        image="/images/crystal-purple.jpg"
      />
      <Container className="grid gap-12 lg:grid-cols-12">
        <div className="space-y-5 lg:col-span-5">
          <a href={whatsappLink()} target="_blank" rel="noopener" className="card flex items-center gap-5 p-6">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#25d366] text-[#06250f]">
              <WhatsAppIcon className="h-6 w-6" />
            </span>
            <span>
              <span className="eyebrow block">WhatsApp</span>
              <span className="font-display block text-2xl text-ink">{site.contact.whatsappDisplay}</span>
            </span>
          </a>
          <a href={`tel:${site.contact.phone}`} className="card flex items-center gap-5 p-6">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold/50 text-gold">☏</span>
            <span>
              <span className="eyebrow block">Call</span>
              <span className="font-display block text-2xl text-ink">{site.contact.phoneDisplay}</span>
            </span>
          </a>
          <a href={`mailto:${site.contact.email}`} className="card flex items-center gap-5 p-6">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold/50 text-gold">✉</span>
            <span>
              <span className="eyebrow block">Email</span>
              <span className="font-display block break-all text-2xl text-ink">{site.contact.email}</span>
            </span>
          </a>
          <div className="card p-6 text-sm leading-relaxed text-ink-muted">
            <p className="eyebrow mb-2">Hours & location</p>
            <p>{site.contact.hours}</p>
            <p className="mt-1">{site.caster.location}. Distance consultations worldwide.</p>
          </div>
        </div>
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </Container>
    </>
  );
}
