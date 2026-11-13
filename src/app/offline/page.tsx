import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "You are offline",
  robots: { index: false, follow: false },
};

export default function OfflinePage() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center pt-24 text-center">
      <p className="eyebrow mb-4">Offline</p>
      <h1 className="font-display text-5xl text-ink">The connection has gone quiet.</h1>
      <p className="mt-4 max-w-md text-ink-muted">
        You are not connected to the internet right now. Pages you have already visited are still
        available, and everything will update as soon as you are back online.
      </p>
      <Link href="/" className="btn btn-gold mt-8">Try the home page</Link>
    </Container>
  );
}
