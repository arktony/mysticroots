import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import TestimonialCard from "@/components/TestimonialCard";
import CtaBand from "@/components/CtaBand";
import { testimonials } from "@/lib/content";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Words from clients of Mystic Roots Healing, shared with permission.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="In their words"
        title="Stories from people who reached out."
        text="Shared with permission. Names and identifying details are changed to protect privacy. Every situation is different and results vary."
        image="/images/candles-glow.jpg"
      />
      <Container>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
      </Container>
      <CtaBand title="Ready to write your own story?" />
    </>
  );
}
