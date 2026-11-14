// Central site configuration. Replace the placeholder values below with the real
// caster name, location, contact details and experience line before launch.
export const site = {
  name: "Mystic Roots Healing",
  shortName: "Mystic Roots",
  tagline: "Ancient spell casting, rooted in tradition.",
  description:
    "Mystic Roots Healing offers traditional spell casting and healing for love, family, protection, money, justice, education and success. Private consultations, distance casting worldwide.",
  url: "https://mysticrootshealing.org",
  caster: {
    name: "Elder Mafosa",
    title: "Traditional Spell Caster & Spiritual Guide",
    location: "", // intentionally blank: the site does not state a base location
    experienceYears: 20, // placeholder, use a truthful number
  },
  contact: {
    whatsapp: "+256785789142",
    whatsappDisplay: "+256 785 789 142",
    phone: "+256785789142",
    phoneDisplay: "+256 785 789 142",
    email: "clientcare@mysticrootshealing.org",
    hours: "Available 7 days a week. Replies within a few hours.",
  },
  // Paste the verification codes from Google Search Console and Bing Webmaster Tools here.
  verification: {
    google: "",
    bing: "",
  },
  social: {
    facebook: "#",
    instagram: "#",
    tiktok: "#",
  },
};

export const whatsappLink = (message?: string) => {
  const text = encodeURIComponent(
    message ?? "Hello, I would like a private consultation about a spell."
  );
  return `https://wa.me/${site.contact.whatsapp.replace(/\D/g, "")}?text=${text}`;
};

export const nav = [
  { href: "/spells", label: "Spells" },
  { href: "/listening", label: "Listening Ear" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];
