import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Mystic Roots Healing collects, uses, stores and protects the personal information you share with us.",
};

const sections: LegalSection[] = [
  {
    heading: "Our promise",
    paragraphs: [
      "People come to us with the most private matters of their lives. Protecting that trust is part of the work. This policy explains what information we collect, why, how long we keep it, and the choices you have. It applies to this website and to every consultation and Service we provide.",
      `The person responsible for your information is ${site.name}, ${site.caster.location}, reachable at ${site.contact.email}.`,
    ],
  },
  {
    heading: "What this website collects",
    paragraphs: [
      "The website itself is a set of static pages. It does not have user accounts, does not set tracking cookies and does not run advertising or analytics scripts. The contact form does not send anything to us or store anything on the website. When you press send, it opens WhatsApp on your own device with your message ready, and you decide whether to send it.",
      "The website is hosted by GitHub Pages. Like any web host, GitHub may record technical information such as your IP address, browser type and the pages requested in its server logs for security and operational purposes. That information is governed by GitHub's own privacy statement. We do not receive personal information from those logs.",
      "Fonts are loaded through Next.js font optimisation and served from our own domain, so no request is made to Google when you visit.",
    ],
  },
  {
    heading: "What we collect when you contact us",
    paragraphs: ["When you message, call or consult with us, we may receive and keep:"],
    bullets: [
      "Your name, phone number, WhatsApp profile and, if you give it, your email address and country.",
      "Details of your situation and what you hope to change, in your own words.",
      "Information needed for the work, which may include your date of birth, the names and dates of birth of people involved, and photographs you choose to send.",
      "Records of our conversations, quotes and payments. Listening Ear calls are not recorded.",
    ],
  },
  {
    heading: "Sensitive information",
    paragraphs: [
      "The nature of our Services means you may share information about your health, relationships, family, beliefs, legal matters or a loved one's addiction. We treat all of it as sensitive. We collect it only because you choose to share it and because it is needed to provide the Service you ask for. By sharing it you consent to us using it for that purpose. You can withdraw that consent at any time by asking us to delete it, though we may then be unable to continue the Service.",
      "Where you share information about another person, for example a partner, child or relative, you confirm that you are entitled to do so. We use it only for the Service you have requested and never contact that person without your knowledge.",
    ],
  },
  {
    heading: "How we use your information",
    paragraphs: ["We use the information you give us only to:"],
    bullets: [
      "Hold a consultation and understand your situation.",
      "Prepare and carry out the Service you have asked for.",
      "Send you quotes, confirmations, guidance and follow-up.",
      "Keep a record of payments as the law requires.",
      "Respond to your questions or complaints.",
    ],
  },
  {
    heading: "What we never do",
    paragraphs: [],
    bullets: [
      "We never sell, rent or trade your information.",
      "We never share your name or situation with other clients or with anyone named in your situation.",
      "We never publish a testimonial that identifies you without your clear permission.",
      "We never add you to marketing lists or send unsolicited messages after your Service is complete.",
    ],
  },
  {
    heading: "Who else sees your information",
    paragraphs: [
      "Our conversations happen over WhatsApp, phone or email, so the providers of those services, such as Meta for WhatsApp and your telephone or email provider, process your messages under their own privacy policies. WhatsApp messages are end-to-end encrypted in transit. Payment providers process your payment details under their own policies; we do not see your card numbers.",
      "Apart from those providers, we do not share your information with anyone, unless the law requires it or we believe someone is at serious and immediate risk of harm.",
    ],
  },
  {
    heading: "How long we keep it",
    paragraphs: [
      "We keep consultation notes and messages for as long as needed to complete your Service and provide follow-up, and for up to 12 months afterwards in case you return. Payment records are kept for as long as tax and accounting law requires. Photographs and personal items are used only for the work and are deleted or returned when it is complete, unless you ask us to keep them for continued work. You can ask us to delete your information sooner at any time.",
    ],
  },
  {
    heading: "How we protect it",
    paragraphs: [
      "Your information is kept on devices protected by passcodes and encryption and is accessible only to the people who need it to serve you. We do not store client information on this website or on shared computers. No method of communication or storage is perfectly secure, so please take care with what you send and from which device.",
    ],
  },
  {
    heading: "Your rights and choices",
    paragraphs: ["Wherever you live, you can:"],
    bullets: [
      "Ask what information we hold about you and receive a copy.",
      "Ask us to correct anything that is wrong.",
      "Ask us to delete your information. We will do so unless the law requires us to keep part of it, such as payment records.",
      "Withdraw your consent to our use of sensitive information at any time.",
      "Complain to the data protection authority in your country if you believe we have handled your information badly. In Uganda that is the Personal Data Protection Office.",
    ],
  },
  {
    heading: "Children",
    paragraphs: [
      "Our Services are for adults aged 18 and over. We do not knowingly collect information directly from children. Where a parent or guardian consults us about a child, the information about the child is handled with the same care as all sensitive information and used only for that Service.",
    ],
  },
  {
    heading: "International clients",
    paragraphs: [
      `Most of our clients live outside Uganda. By contacting us you understand that your information will be received and handled in Uganda, where data protection law may differ from your own country's. We apply the protections in this policy to every client regardless of where they live.`,
    ],
  },
  {
    heading: "Changes to this policy",
    paragraphs: [
      "We may update this policy from time to time. The date at the top shows when it was last changed. If a change affects how we handle information you have already given us, we will tell you.",
    ],
  },
  {
    heading: "Contact",
    paragraphs: [
      `To exercise any of your rights, or to ask a question about privacy, write to ${site.contact.email} or message ${site.contact.whatsappDisplay} on WhatsApp.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="12 November 2026"
      intro="What we collect, why, how long we keep it, and the choices you have. Written in plain words because privacy is part of the care we owe you."
      sections={sections}
    />
  );
}
