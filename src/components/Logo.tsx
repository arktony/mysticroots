import Link from "next/link";
import { site } from "@/lib/site";

export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-3">
      <span className="relative grid h-10 w-10 place-items-center rounded-full border border-gold/50 bg-surface">
        <svg viewBox="0 0 40 40" className="h-7 w-7" fill="none" aria-hidden>
          <circle cx="20" cy="20" r="14" stroke="url(#g)" strokeWidth="1.2" />
          <path d="M20 6c-6 6-6 22 0 28" stroke="url(#g)" strokeWidth="1.2" />
          <path d="M20 6c6 6 6 22 0 28" stroke="url(#g)" strokeWidth="1.2" />
          <circle cx="20" cy="20" r="2.4" fill="#e6cc85" />
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="40" y2="40">
              <stop stopColor="#e6cc85" />
              <stop offset="1" stopColor="#c9a85c" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      {!compact && (
        <span className="leading-tight">
          <span className="font-display block text-xl font-semibold tracking-wide text-ink">
            {site.shortName}
          </span>
          <span className="eyebrow block text-[0.6rem] tracking-[0.3em]">Healing</span>
        </span>
      )}
    </Link>
  );
}
