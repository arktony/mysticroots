import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import FaqList from "@/components/FaqList";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers about spell casting, distance work, timing, cost, privacy and booking at Mystic Roots Healing.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Questions"
        title="Everything people ask before they book."
        text="If your question is not here, send it on WhatsApp. You will get a straight answer."
        image="/images/incense-cones.jpg"
      />
      <Container className="max-w-3xl">
        <FaqList />
      </Container>
      <CtaBand title="Still have a question?" text="Message us directly. Every question is welcome and every answer is honest." />
    </>
  );
}
