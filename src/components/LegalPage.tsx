import Container from "./Container";

export type LegalSection = { heading: string; paragraphs: string[]; bullets?: string[] };

export default function LegalPage({
  eyebrow,
  title,
  updated,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <section className="pt-36 pb-12 sm:pt-44">
        <Container className="max-w-3xl">
          <p className="eyebrow mb-5">{eyebrow}</p>
          <h1 className="font-display text-5xl font-medium leading-[1.05] text-ink sm:text-6xl">{title}</h1>
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-ink-muted">Last updated {updated}</p>
          <p className="mt-8 text-lg leading-relaxed text-ink-muted">{intro}</p>
        </Container>
      </section>
      <Container className="max-w-3xl">
        <div className="hairline mb-10" />
        <div className="prose-mystic">
          {sections.map((s, i) => (
            <section key={s.heading} id={`s${i + 1}`}>
              <h2>
                <span className="mr-3 text-gold">{String(i + 1).padStart(2, "0")}</span>
                {s.heading}
              </h2>
              {s.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
              {s.bullets && (
                <ul>
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </Container>
    </>
  );
}
