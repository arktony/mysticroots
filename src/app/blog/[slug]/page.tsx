import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import HeroBackdrop from "@/components/HeroBackdrop";
import { getPost, posts } from "@/lib/content";
import JsonLd from "@/components/JsonLd";
import { pageMeta, articleLd, breadcrumbLd } from "@/lib/seo";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return pageMeta({ title: p.title, description: p.excerpt, path: `/blog/${p.slug}`, image: p.image, type: "article" });
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();

  return (
    <>
      <JsonLd data={[articleLd(p), breadcrumbLd([{ name: "Blog", path: "/blog" }, { name: p.title, path: `/blog/${p.slug}` }])]} />
      <section className="relative isolate overflow-hidden pt-32 pb-16 sm:pt-40">
        <HeroBackdrop image={p.image} priority />
        <Container className="max-w-3xl">
          <Breadcrumbs items={[{ href: "/blog", label: "Blog" }, { label: p.title }]} />
          <time className="mt-8 block text-xs uppercase tracking-[0.2em] text-gold">
            {new Date(p.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
          </time>
          <h1 className="font-display mt-4 text-4xl font-medium leading-[1.08] text-ink sm:text-5xl md:text-6xl">
            {p.title}
          </h1>
        </Container>
      </section>
      <Container className="prose-mystic max-w-3xl">
        {p.body.map((para, i) =>
          para.startsWith("## ") ? (
            <h2 key={i}>{para.replace("## ", "")}</h2>
          ) : (
            <p key={i}>{para}</p>
          )
        )}
      </Container>
      <CtaBand />
    </>
  );
}
