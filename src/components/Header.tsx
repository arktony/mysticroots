"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Container from "./Container";
import Logo from "./Logo";
import { nav, whatsappLink } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-bg/85 backdrop-blur-md border-b border-line"
          : "bg-transparent"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm tracking-wide transition-colors hover:text-gold-bright ${
                  active ? "text-gold" : "text-ink-muted"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden lg:block">
          <a href={whatsappLink()} target="_blank" rel="noopener" className="btn btn-gold">
            Book a Consultation
          </a>
        </div>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-full border border-line lg:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-px w-5 bg-ink transition-all ${
                open ? "top-2 rotate-45" : ""
              }`}
            />
            <span className={`absolute left-0 top-2 h-px w-5 bg-ink transition-all ${open ? "opacity-0" : ""}`} />
            <span
              className={`absolute left-0 top-4 h-px w-5 bg-ink transition-all ${
                open ? "top-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </Container>
      {open && (
        <div className="border-t border-line bg-bg/95 backdrop-blur-md lg:hidden">
          <Container className="flex flex-col py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-line/60 py-4 font-display text-2xl text-ink"
              >
                {item.label}
              </Link>
            ))}
            <a href={whatsappLink()} target="_blank" rel="noopener" className="btn btn-gold mt-5">
              Book a Consultation
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
