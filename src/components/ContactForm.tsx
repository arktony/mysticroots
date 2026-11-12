"use client";

import { useState } from "react";
import { categories } from "@/lib/spells";
import Link from "next/link";
import { whatsappLink } from "@/lib/site";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", country: "", topic: "", message: "" });
  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello, my name is ${form.name}${form.country ? ` from ${form.country}` : ""}.\nI am reaching out about: ${form.topic || "a consultation"}.\n\n${form.message}`;
    window.open(whatsappLink(text), "_blank", "noopener");
  };

  const field =
    "w-full rounded-xl border border-line bg-surface/60 px-4 py-3.5 text-ink placeholder:text-ink-muted/60 outline-none transition focus:border-gold";

  return (
    <form onSubmit={submit} className="card p-7 sm:p-9">
      <p className="eyebrow mb-3">Private enquiry</p>
      <h2 className="font-display text-3xl text-ink">Tell us what you are facing</h2>
      <p className="mt-2 text-sm text-ink-muted">
        This form opens WhatsApp with your message ready to send, so nothing is stored on this website.
      </p>
      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-2 block text-ink-muted">Your name</span>
          <input required className={field} value={form.name} onChange={update("name")} placeholder="First name is fine" />
        </label>
        <label className="block text-sm">
          <span className="mb-2 block text-ink-muted">Country</span>
          <input className={field} value={form.country} onChange={update("country")} placeholder="Where you are" />
        </label>
        <label className="block text-sm sm:col-span-2">
          <span className="mb-2 block text-ink-muted">What is this about?</span>
          <select className={field} value={form.topic} onChange={update("topic")}>
            <option value="">Choose a path</option>
            {categories.map((c) => (
              <option key={c.slug} value={c.name}>{c.name}</option>
            ))}
            <option value="Something else">Something else</option>
          </select>
        </label>
        <label className="block text-sm sm:col-span-2">
          <span className="mb-2 block text-ink-muted">Your situation</span>
          <textarea required rows={6} className={field} value={form.message} onChange={update("message")} placeholder="Share as much or as little as you like." />
        </label>
      </div>
      <button type="submit" className="btn btn-gold mt-7 w-full sm:w-auto">
        Send via WhatsApp
      </button>
      <p className="mt-4 text-xs text-ink-muted/80">
        By sending you confirm you are 18 or over and agree to our{" "}
        <Link href="/terms" className="underline hover:text-gold-bright">Terms of Service</Link> and{" "}
        <Link href="/privacy" className="underline hover:text-gold-bright">Privacy Policy</Link>.
      </p>
    </form>
  );
}
