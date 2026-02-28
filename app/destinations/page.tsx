import type { Metadata } from "next";
import { destinations } from "@/lib/data/destinations";
import { DestinationCard } from "@/components/ui/DestinationCard";
import { Container } from "@/components/ui/Container";
import { RevealText } from "@/components/animations/RevealText";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Explore our curated collection of extraordinary Indian journeys — from the palaces of Rajasthan to the backwaters of Kerala, the high passes of Ladakh, and the ghats of Varanasi.",
  openGraph: {
    title: "Destinations | Aura Voyages",
    description: "Discover the world's most extraordinary private journeys.",
  },
};

const regions = [
  "All",
  "North India",
  "South India",
  "Himalayan",
  "Coastal",
  "East India",
  "Central India",
] as const;

export default async function DestinationsPage({
  searchParams,
}: {
  searchParams: Promise<{ region?: string }>;
}) {
  const { region } = await searchParams;
  const activeRegion = region ?? "All";

  const filtered =
    activeRegion === "All"
      ? destinations
      : destinations.filter((d) => d.region === activeRegion);

  return (
    <>
      {/* Page header */}
      <div className="relative pt-40 pb-20 bg-obsidian overflow-hidden">
        {/* Decorative line */}
        <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        <Container>
          <RevealText
            as="p"
            className="font-body text-xs tracking-[0.35em] uppercase text-gold mb-5"
          >
            Our Portfolio
          </RevealText>
          <RevealText
            as="h1"
            className="font-display text-display-xl text-parchment-100 mb-6"
            variant="clip"
            delay={0.1}
          >
            Every Destination,
            <br />
            <em className="text-gradient-gold not-italic">
              Chosen With Intent.
            </em>
          </RevealText>
          <RevealText delay={0.2}>
            <p className="font-body text-base text-parchment-200/50 max-w-xl leading-relaxed">
              We don&apos;t work with every destination on the map. We work
              deeply with the ones that earn their place in a remarkable life.
            </p>
          </RevealText>
        </Container>
      </div>

      {/* Filter bar */}
      <div className="sticky top-20 z-30 bg-glass border-b border-white/5 py-4">
        <Container>
          <nav
            aria-label="Filter destinations by region"
            className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1"
          >
            {regions.map((region) => (
              <a
                key={region}
                href={
                  region === "All"
                    ? "/destinations"
                    : `/destinations?region=${region}`
                }
                className={`flex-shrink-0 font-body text-xs tracking-[0.15em] uppercase px-4 py-2 border transition-all duration-200 ${
                  activeRegion === region
                    ? "border-gold text-gold bg-gold/10"
                    : "border-white/10 text-parchment/40 hover:border-gold/40 hover:text-parchment/70"
                }`}
                aria-current={activeRegion === region ? "page" : undefined}
              >
                {region}
              </a>
            ))}
          </nav>
        </Container>
      </div>

      {/* Destinations grid */}
      <main className="section-padding bg-obsidian">
        <Container>
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="font-display text-xl text-parchment/40">
                No destinations found for this region yet.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((destination, i) => (
                <DestinationCard
                  key={destination.id}
                  destination={destination}
                  index={i}
                />
              ))}
            </div>
          )}
        </Container>
      </main>
    </>
  );
}
