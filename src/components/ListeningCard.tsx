import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { WhatsAppIcon } from "./Footer";
import { whatsappLink } from "@/lib/site";

export default function ListeningCard() {
  return (
    <section className="py-12">
      <Container>
        <div className="card grid overflow-hidden lg:grid-cols-12">
          <div className="relative min-h-[18rem] lg:col-span-5">
            <Image src="/images/listening-window.jpg" alt="" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-surface" />
          </div>
          <div className="p-8 sm:p-10 lg:col-span-7 lg:p-14">
            <p className="eyebrow mb-4">A Listening Ear</p>
            <h2 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
              Sometimes you do not need a spell.
              <br />
              <span className="gold-text italic font-normal">You need someone to talk to.</span>
            </h2>
            <p className="mt-5 max-w-xl text-ink-muted">
              Private companion calls and chats with Elder Mafosa for anyone who is lonely, grieving,
              far from home, or simply needs to be heard. Not therapy, not a hotline. Real company, in
              confidence.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href={whatsappLink("Hello, I would like to book a Listening Ear call.")} target="_blank" rel="noopener" className="btn btn-whatsapp">
                <WhatsAppIcon /> Book a call
              </a>
              <Link href="/listening" className="btn btn-ghost">
                How it works
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
