import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { RevealText } from "@/components/animations/RevealText";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Experiences",
  description:
    "Safaris, luxury cruises, culinary journeys, wellness retreats, and private expeditions — curated for exceptional travellers.",
};

const experiences = [
  {
    id: "safari",
    title: "Private Safari",
    tagline: "Witness life in its rawest form",
    description:
      "Exclusive conservancy access, master guides, and camps that blend absolute comfort with wilderness immersion. We work with three master guides in Africa — none of whom take more than 8 guests.",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&q=85",
    tags: ["Africa", "Wildlife", "Photography"],
  },
  {
    id: "yacht",
    title: "Private Yacht Charter",
    tagline: "The horizon as your itinerary",
    description:
      "From the Greek Islands to French Polynesia, we arrange crewed private yacht charters with bespoke daily routing. Your captain, your pace, your sea.",
    image:
      "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1200&q=85",
    tags: ["Mediterranean", "Oceania", "Luxury"],
  },
  {
    id: "culinary",
    title: "Culinary Journeys",
    tagline: "Eat the world — without the tourist menu",
    description:
      "Private access to Michelin-starred kitchens, back-road truffle hunters, coastal fish markets at dawn, and family tables that have never hosted a tourist.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=85",
    tags: ["Food", "Culture", "Italy", "Japan"],
  },
  {
    id: "wellness",
    title: "Wellness Retreats",
    tagline: "Rest is also a journey",
    description:
      "Ayurvedic immersions in Kerala, Six Senses meditation programs in Portugal, private onsen villas in Hakone. Restorative travel for minds that need to be still.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=85",
    tags: ["Wellness", "Asia", "Europe"],
  },
  {
    id: "expedition",
    title: "Expedition & Adventure",
    tagline: "The places that require effort to reach",
    description:
      "Patagonian trekking, Arctic / Antarctic expeditions, Himalayan foothills, Mongolian steppes. For travellers who believe the greatest views are earned.",
    image:
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=85",
    tags: ["Adventure", "Trekking", "Polar"],
  },
  {
    id: "cultural",
    title: "Deep Cultural Immersion",
    tagline: "Not a visitor — a temporary local",
    description:
      "Private monastery stays, ceremonial access in Japan and India, after-hours museum tours, living with Berber families in the Atlas Mountains.",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=85",
    tags: ["Culture", "History", "Japan", "India"],
  },
];

export default function ExperiencesPage() {
  return (
    <>
      {/* Header */}
      <div className="pt-40 pb-20 bg-obsidian">
        <Container>
          <RevealText
            as="p"
            className="font-body text-xs tracking-[0.35em] uppercase text-gold mb-5"
          >
            The Spectrum of Travel
          </RevealText>
          <RevealText
            as="h1"
            className="font-display text-display-xl text-parchment-100 mb-6"
            variant="clip"
            delay={0.1}
          >
            Experiences That
            <br />
            <em className="text-gradient-gold not-italic">
              Define a Lifetime.
            </em>
          </RevealText>
          <RevealText delay={0.2}>
            <p className="font-body text-base text-parchment-200/50 max-w-xl leading-relaxed">
              We specialise in six categories of extraordinary experience. Each
              is available as a standalone journey or woven into a broader
              itinerary.
            </p>
          </RevealText>
        </Container>
      </div>

      {/* Experiences list */}
      <main className="bg-obsidian border-t border-white/5">
        {experiences.map((exp, i) => (
          <section
            key={exp.id}
            className={`section-padding border-b border-white/5 ${
              i % 2 === 0 ? "bg-obsidian" : "bg-obsidian-900"
            }`}
            aria-labelledby={`${exp.id}-heading`}
          >
            <Container>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  i % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Text */}
                <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                  <RevealText
                    as="p"
                    className="font-body text-xs tracking-[0.25em] uppercase text-gold mb-4"
                  >
                    {exp.tags.join(" · ")}
                  </RevealText>
                  <RevealText
                    as="h2"
                    id={`${exp.id}-heading`}
                    className="font-display text-display-lg text-parchment-100 mb-3"
                    variant="clip"
                    delay={0.1}
                  >
                    {exp.title}
                  </RevealText>
                  <RevealText
                    as="p"
                    className="font-display text-lg text-gradient-gold italic mb-6"
                    delay={0.15}
                  >
                    {exp.tagline}
                  </RevealText>
                  <RevealText
                    as="p"
                    className="font-body text-sm text-parchment-200/60 leading-relaxed mb-8"
                    delay={0.2}
                  >
                    {exp.description}
                  </RevealText>
                  <RevealText delay={0.25}>
                    <Button href="/contact" variant="gold" size="md">
                      Enquire About This Experience
                    </Button>
                  </RevealText>
                </div>

                {/* Image */}
                <div
                  className={`relative overflow-hidden aspect-[4/3] ${
                    i % 2 !== 0 ? "lg:order-1" : ""
                  }`}
                >
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover hover:scale-105 transition-transform duration-700 will-change-transform"
                  />
                </div>
              </div>
            </Container>
          </section>
        ))}
      </main>
    </>
  );
}
