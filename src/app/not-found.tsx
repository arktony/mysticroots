import Link from "next/link";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center pt-24 text-center">
      <p className="eyebrow mb-4">404</p>
      <h1 className="font-display text-5xl text-ink">This path leads nowhere.</h1>
      <p className="mt-4 max-w-md text-ink-muted">The page you are looking for has moved or never existed.</p>
      <Link href="/" className="btn btn-gold mt-8">Return home</Link>
    </Container>
  );
}
