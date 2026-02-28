import { getFeaturedDestinations } from "@/lib/data/destinations";
import { DestinationCard } from "@/components/ui/DestinationCard";
import { Button } from "@/components/ui/Button";
import { RevealText } from "@/components/animations/RevealText";
import { Container } from "@/components/ui/Container";

// RSC — data fetched server-side, no client bundle overhead
export function DestinationsGrid() {
  const featured = getFeaturedDestinations();

  return (
    <section
      id="destinations-section"
      className="section-padding bg-obsidian"
      aria-labelledby="destinations-heading"
    >
      <Container>
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <RevealText
              as="p"
              className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4"
            >
              Curated Journeys
            </RevealText>
            <RevealText
              as="h2"
              id="destinations-heading"
              className="font-display text-display-lg text-parchment-100"
              variant="clip"
              delay={0.1}
            >
              Where Will Your
              <br />
              <em className="text-gradient-gold not-italic">Story Begin?</em>
            </RevealText>
          </div>

          <RevealText delay={0.2}>
            <p className="font-body text-sm text-parchment-200/50 max-w-xs leading-relaxed">
              Each journey is architected from scratch — never templated, never
              repeated.
            </p>
          </RevealText>
        </div>

        {/* Grid — asymmetric layout: large + 3 small */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {featured.slice(0, 1).map((d, i) => (
            // First card is taller on desktop
            <div key={d.id} className="lg:row-span-2 lg:col-span-1">
              <DestinationCard destination={d} index={i} />
            </div>
          ))}
          {featured.slice(1, 4).map((d, i) => (
            <div key={d.id}>
              <DestinationCard destination={d} index={i + 1} />
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="flex justify-center mt-14">
          <Button href="/destinations" variant="outline" size="lg">
            View All Destinations
          </Button>
        </div>
      </Container>
    </section>
  );
}
