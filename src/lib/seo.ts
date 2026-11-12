import type { Metadata } from "next";
import { site } from "./site";

const abs = (path: string) => `${site.url}${path.startsWith("/") ? path : `/${path}`}`;

/** Build consistent page metadata with a canonical URL and social card. */
export function pageMeta({
  title,
  description,
  path,
  image = "/images/hero-hand-candle.jpg",
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
}): Metadata {
  const canonical = path === "/" ? "/" : `${path.replace(/\/$/, "")}/`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type,
      url: canonical,
      title,
      description,
      siteName: site.name,
      locale: "en_GB",
      images: [{ url: image, width: 1600, height: 1067, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export const organizationLd = {
  "@type": "Organization",
  "@id": `${site.url}/#organization`,
  name: site.name,
  url: site.url,
  logo: abs("/icon.svg"),
  email: site.contact.email,
  telephone: site.contact.phone,
  address: { "@type": "PostalAddress", addressLocality: "Kampala", addressCountry: "UG" },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: site.contact.phone,
      contactType: "customer service",
      availableLanguage: ["English"],
      areaServed: "Worldwide",
    },
  ],
};

export const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.name,
  description: site.description,
  publisher: { "@id": `${site.url}/#organization` },
  inLanguage: "en",
};

export const localBusinessLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${site.url}/#business`,
  name: site.name,
  description: site.description,
  url: site.url,
  image: abs("/images/hero-hand-candle.jpg"),
  telephone: site.contact.phone,
  email: site.contact.email,
  address: { "@type": "PostalAddress", addressLocality: "Kampala", addressCountry: "UG" },
  areaServed: "Worldwide",
  priceRange: "$$",
  openingHours: "Mo-Su 08:00-22:00",
  founder: { "@type": "Person", name: site.caster.name, jobTitle: site.caster.title },
  sameAs: Object.values(site.social).filter((u) => u && u !== "#"),
};

export const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${site.url}/about/#person`,
  name: site.caster.name,
  jobTitle: site.caster.title,
  description: `${site.caster.title} with over ${site.caster.experienceYears} years of practice, based in ${site.caster.location}.`,
  url: abs("/about/"),
  image: abs("/images/caster-candles.jpg"),
  worksFor: { "@id": `${site.url}/#organization` },
  address: { "@type": "PostalAddress", addressLocality: "Kampala", addressCountry: "UG" },
};

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.path === "/" ? "/" : `${it.path.replace(/\/$/, "")}/`),
    })),
  };
}

export function serviceLd({
  name,
  description,
  path,
  image,
  category,
}: {
  name: string;
  description: string;
  path: string;
  image: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${abs(path)}#service`,
    name,
    description,
    serviceType: category,
    url: abs(path),
    image: abs(image),
    provider: { "@id": `${site.url}/#organization` },
    areaServed: "Worldwide",
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: abs("/contact/"),
      servicePhone: { "@type": "ContactPoint", telephone: site.contact.phone, contactType: "customer service" },
    },
  };
}

export function itemListLd(name: string, items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, url: abs(it.path) })),
  };
}

export function faqLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function articleLd(p: { title: string; excerpt: string; slug: string; date: string; image: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: p.title,
    description: p.excerpt,
    image: abs(p.image),
    datePublished: p.date,
    dateModified: p.date,
    url: abs(`/blog/${p.slug}/`),
    mainEntityOfPage: abs(`/blog/${p.slug}/`),
    author: { "@type": "Person", name: site.caster.name, url: abs("/about/") },
    publisher: { "@id": `${site.url}/#organization` },
    inLanguage: "en",
  };
}
