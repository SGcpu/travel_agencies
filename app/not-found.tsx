import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-obsidian">
      <Container size="narrow" className="text-center py-24">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-6">
          404
        </p>
        <h1 className="font-display text-display-lg text-parchment-100 mb-6">
          This Destination
          <br />
          <em className="text-gradient-gold not-italic">Doesn&apos;t Exist.</em>
        </h1>
        <p className="font-body text-sm text-parchment/45 mb-10 leading-relaxed">
          The page you&apos;re looking for has moved or never existed. Let us
          guide you somewhere extraordinary instead.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="/" variant="primary" size="lg">
            Return Home
          </Button>
          <Button href="/destinations" variant="outline" size="lg">
            Explore Destinations
          </Button>
        </div>
      </Container>
    </main>
  );
}
