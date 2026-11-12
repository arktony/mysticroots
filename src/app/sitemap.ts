import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { categories, allSpells } from "@/lib/spells";
import { posts } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const statics = ["", "/spells", "/how-it-works", "/about", "/testimonials", "/faq", "/blog", "/contact"];
  return [
    ...statics.map((p) => ({ url: `${site.url}${p}`, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.8 })),
    ...categories.map((c) => ({ url: `${site.url}/spells/${c.slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...allSpells.map((s) => ({ url: `${site.url}/spells/${s.category.slug}/${s.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...posts.map((p) => ({ url: `${site.url}/blog/${p.slug}`, lastModified: p.date, changeFrequency: "yearly" as const, priority: 0.5 })),
  ];
}
