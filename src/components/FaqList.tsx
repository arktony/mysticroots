import { faqs } from "@/lib/content";

export default function FaqList({ limit }: { limit?: number }) {
  const list = limit ? faqs.slice(0, limit) : faqs;
  return (
    <div className="divide-y divide-line border-y border-line">
      {list.map((f, i) => (
        <details key={f.q} className="group" open={i === 0}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left">
            <span className="font-display text-2xl text-ink">{f.q}</span>
            <span className="chev grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-gold">
              ⌄
            </span>
          </summary>
          <p className="pb-7 pr-12 leading-relaxed text-ink-muted">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
