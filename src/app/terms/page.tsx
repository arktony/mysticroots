import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import LegalPage, { type LegalSection } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Terms of Service",
  description: "The terms on which Mystic Roots Healing provides consultations, spell casting and traditional healing services.",
  path: "/terms",
  image: "/images/candles-black.jpg",
});

const sections: LegalSection[] = [
  {
    heading: "Who we are and what these terms cover",
    paragraphs: [
      `These terms apply to the website ${site.url.replace("https://", "")} and to every consultation, spell casting, reading, remedy and related service (together, the "Services") provided by ${site.name} ("we", "us"). By using the website or booking a Service you agree to these terms. If you do not agree, please do not use the website or the Services.`,
    ],
  },
  {
    heading: "You must be 18 or over",
    paragraphs: [
      "The Services are available only to adults aged 18 and over. By contacting us or booking a Service you confirm that you are at least 18 years old. Where a Service concerns a child, for example family or education work, the request must come from a parent or legal guardian.",
    ],
  },
  {
    heading: "Nature of the Services",
    paragraphs: [
      "Our Services are traditional spiritual and cultural practices. They are provided for spiritual, cultural and entertainment purposes. They are not scientifically proven and we make no claim that they are.",
      "Nothing we provide is medical, psychological, legal or financial advice, and nothing we provide replaces the care of a qualified doctor, counsellor, lawyer or financial adviser. Herbal remedies are offered for general wellbeing and are not a diagnosis or a treatment for any disease. You must continue any treatment prescribed by a medical professional, and you should tell your doctor about any remedy you take. Court case and justice work does not replace legal representation. Addiction work does not replace treatment or counselling. A Listening Ear is a companionship service: a private conversation with someone who listens. It is not counselling, therapy, medical care or a crisis line, and the person you speak with is not a licensed mental health professional. If you or someone else is in immediate danger, contact your local emergency services.",
    ],
  },
  {
    heading: "No guaranteed outcomes",
    paragraphs: [
      "Every situation involves free will, circumstance and people we do not control. For that reason we do not and cannot guarantee any particular result, outcome or timeframe. Timeframes shown on the website are typical experiences shared by past clients, not promises. What we commit to is a genuine Service carried out with care, full attention to your situation, and honest guidance throughout.",
    ],
  },
  {
    heading: "Consultations, quotes and payment",
    paragraphs: [
      "Every Service begins with a consultation. After the consultation you will receive a clear quote. No work begins until you have accepted the quote and payment has been made as agreed. Prices depend on the type of work and the materials and time it requires.",
      "Payment methods and currency are confirmed at the time of the quote. You are responsible for any transfer fees or exchange costs charged by your bank or payment provider. We will never ask you for passwords, PINs or card security codes.",
    ],
  },
  {
    heading: "Cancellations and refunds",
    paragraphs: [
      "If you cancel before any materials have been prepared or work has begun, you will receive a full refund of any amount paid. Once materials have been prepared or the work has begun, the fee is non-refundable because the time and materials cannot be recovered. Because results cannot be guaranteed, the absence of a particular outcome is not grounds for a refund. If you believe we have made an error, contact us and we will look into it honestly.",
    ],
  },
  {
    heading: "Your responsibilities",
    paragraphs: ["When you use the Services you agree that you will:"],
    bullets: [
      "Give truthful and complete information about yourself and your situation.",
      "Not ask for work intended to physically harm, defraud or unlawfully control another person. We refuse such requests.",
      "Not use any Service, or anything we provide, for an unlawful purpose.",
      "Follow any instructions we give you about remedies, charms or practices, and ask if anything is unclear.",
      "Respect our time and privacy as we respect yours.",
    ],
  },
  {
    heading: "Confidentiality",
    paragraphs: [
      "Everything you share with us in a consultation is treated as confidential. We do not share your name, situation or contact details with anyone, except where the law requires it or where we believe someone is at serious risk of harm. Our Privacy Policy explains in detail how we handle your information.",
    ],
  },
  {
    heading: "Testimonials",
    paragraphs: [
      "Testimonials on the website are shared with the permission of the people who gave them, with names and identifying details changed. They describe individual experiences and are not a promise of what will happen for you. If you give us a testimonial, you agree that we may publish it in anonymised form, and you can ask us to remove it at any time.",
    ],
  },
  {
    heading: "Website content and intellectual property",
    paragraphs: [
      "The text, design and layout of this website belong to us or our licensors. Photography is used under licence from its creators. You may read and share links to the website freely, but you may not copy, republish or sell its content without our written permission.",
      "The website is provided as it is. We try to keep it accurate and available but we do not promise that it will always be free of errors or interruptions.",
    ],
  },
  {
    heading: "Limitation of liability",
    paragraphs: [
      "To the fullest extent permitted by law, we are not liable for any loss, damage, injury or expense arising from your use of the website or the Services, from reliance on anything we say or provide, or from any decision you make as a result. Where liability cannot be excluded by law, it is limited to the amount you paid for the Service concerned. Nothing in these terms limits liability for fraud or for death or personal injury caused by our negligence.",
    ],
  },
  {
    heading: "Changes to these terms",
    paragraphs: [
      "We may update these terms from time to time. The date at the top shows when they were last changed. Changes apply to Services booked after that date. If a change is significant we will do our best to tell existing clients.",
    ],
  },
  {
    heading: "Governing law",
    paragraphs: [
      `These terms are governed by the laws of Uganda. Any dispute will be handled first through honest conversation between us and, if that fails, by the courts of Uganda. If you live elsewhere, you may also have rights under the consumer laws of your own country, and nothing here takes those away.`,
    ],
  },
  {
    heading: "Contact",
    paragraphs: [
      `Questions about these terms can be sent to ${site.contact.email} or by WhatsApp on ${site.contact.whatsappDisplay}.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      updated="12 November 2026"
      intro="Plain terms for how we work together. Please read them before booking a consultation. If anything is unclear, ask us and we will explain."
      sections={sections}
    />
  );
}
