import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";
import { categories } from "@/lib/spells";
import { nav, site, whatsappLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-line bg-surface/40">
      <div className="hairline absolute inset-x-0 top-0" />
      <Container className="grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-muted">
            {site.tagline} Private consultations and distance casting for clients across the
            world.
          </p>
          <a href={whatsappLink()} target="_blank" rel="noopener" className="btn btn-whatsapp mt-6">
            <WhatsAppIcon /> Chat on WhatsApp
          </a>
        </div>
        <div className="md:col-span-3">
          <h4 className="eyebrow mb-5">Spells & Healing</h4>
          <ul className="space-y-3 text-sm">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/spells/${c.slug}`} className="text-ink-muted hover:text-gold-bright">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <h4 className="eyebrow mb-5">Explore</h4>
          <ul className="space-y-3 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-ink-muted hover:text-gold-bright">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <h4 className="eyebrow mb-5">Contact</h4>
          <ul className="space-y-3 text-sm text-ink-muted">
            <li>{site.caster.location}</li>
            <li>
              <a href={`tel:${site.contact.phone}`} className="hover:text-gold-bright">
                {site.contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.contact.email}`} className="hover:text-gold-bright">
                {site.contact.email}
              </a>
            </li>
            <li>{site.contact.hours}</li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-line">
        <Container className="flex flex-col gap-4 py-6 text-xs text-ink-muted/80 md:flex-row md:items-center md:justify-between">
          <p className="max-w-3xl leading-relaxed">
            Disclaimer: Traditional spiritual services are offered for spiritual and entertainment
            purposes. Results vary from person to person and are not scientifically verified.
            This is not a substitute for medical, legal or financial advice. Services are for
            adults aged 18 and over.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 whitespace-nowrap">
            <Link href="/terms" className="hover:text-gold-bright">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-gold-bright">Privacy Policy</Link>
            <span>© 2026 {site.name}. All rights reserved.</span>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22c5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2m0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 4.54 0 8.24 3.7 8.24 8.24 0 4.54-3.69 8.24-8.23 8.24m4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28" />
    </svg>
  );
}
