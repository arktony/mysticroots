import Container from "./Container";
import HeroBackdrop from "./HeroBackdrop";

export default function PageHero({
  eyebrow,
  title,
  text,
  image,
  crumbs,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  text?: string;
  image: string;
  crumbs?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <HeroBackdrop image={image} priority />
      <Container className="max-w-3xl text-center">
        {crumbs && <div className="mb-8 flex justify-center">{crumbs}</div>}
        {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
        <h1 className="font-display text-5xl font-medium leading-[1.05] text-ink sm:text-6xl md:text-7xl">
          {title}
        </h1>
        {text && <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">{text}</p>}
        {children && <div className="mt-9">{children}</div>}
      </Container>
    </section>
  );
}
