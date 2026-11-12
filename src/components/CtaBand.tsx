import Container from "./Container";
import HeroBackdrop from "./HeroBackdrop";
import { WhatsAppIcon } from "./Footer";
import { site, whatsappLink } from "@/lib/site";

export default function CtaBand({
  title = "Your situation deserves a private conversation.",
  text = "Tell us what you are facing. You will receive honest guidance on whether spell work can help, and a clear quote before anything begins.",
  message,
}: {
  title?: string;
  text?: string;
  message?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden py-24">
      <HeroBackdrop image="/images/candles-black.jpg" opacity={0.45} fade="both" overlay="bg-gradient-to-r from-bg via-bg/80 to-bg/50" />
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="eyebrow mb-4">Begin today</p>
          <h2 className="font-display text-4xl leading-tight text-ink sm:text-5xl">{title}</h2>
          <p className="mt-5 max-w-xl text-ink-muted">{text}</p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
          <a href={whatsappLink(message)} target="_blank" rel="noopener" className="btn btn-whatsapp">
            <WhatsAppIcon /> WhatsApp {site.contact.whatsappDisplay}
          </a>
          <a href={`tel:${site.contact.phone}`} className="btn btn-ghost">
            Call now
          </a>
        </div>
      </Container>
    </section>
  );
}
