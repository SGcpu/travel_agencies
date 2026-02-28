import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { RevealText } from "@/components/animations/RevealText";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Experiences",
  description:
    "Heritage palace stays, tiger safaris, Ayurvedic retreats, sacred pilgrimages, Himalayan expeditions, and royal culinary journeys — curated across India for exceptional travellers.",
};

const experiences = [
  {
    id: "heritage-stays",
    title: "Heritage Palace Stays",
    tagline: "Sleep where emperors once ruled",
    description:
      "Rajasthan's palace hotels are not hotels — they are functioning aristocratic residences that have been quietly hosting guests for decades. We arrange heritage suites at Umaid Bhawan, the Taj Lake Palace, and three privately-owned haveli estates not listed on any booking platform.",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200&q=85",
    tags: ["Rajasthan", "Heritage", "Architecture"],
  },
  {
    id: "wildlife-safari",
    title: "Wildlife Safaris",
    tagline: "India's wilderness, without the crowds",
    description:
      "Pre-dawn Ranthambore gypsies before the gates open to the public. Private elephant corridors in Corbett. Walking safaris with Baiga guides in Kanha's buffer zone. We work with three naturalists in India — none of whom take more than six guests.",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&q=85",
    tags: ["Wildlife", "Tiger", "Nature"],
  },
  {
    id: "ayurvedic-wellness",
    title: "Ayurvedic Wellness Retreats",
    tagline: "5,000 years of medicine. Your week off.",
    description:
      "Authentic Panchakarma programmes in Kerala's backwater clinics — not spa hotels playing at Ayurveda, but physician-directed detox retreats with 21-day protocols. We also arrange private Yoga and pranayama immersions in Mysore with lineage teachers.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=85",
    tags: ["Wellness", "Kerala", "Ayurveda"],
  },
  {
    id: "culinary-journeys",
    title: "Royal Culinary Journeys",
    tagline: "Eat India — without the tourist menu",
    description:
      "Private access to the royal kitchen of a Jaipur thakur family, a spice-trading heritage house in Kochi's fort district, and a 4 a.m. Banaras street food walk with the city's most respected chaiwala. India's greatest food is not in restaurants.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=85",
    tags: ["Food", "Street Food", "Culture"],
  },
  {
    id: "sacred-circuit",
    title: "Sacred Pilgrimage Circuit",
    tagline: "India's spiritual geography, privately witnessed",
    description:
      "Pre-dawn access to the Dashashwamedh Aarti on a private boat. Dawn puja at Tirupati without the queue. A private audience with a senior priest at the Jagannath temple. Sacred India is not inaccessible — it merely requires the right introductions.",
    image:
      "https://images.unsplash.com/photo-1561361058-c24e022efd17?w=1200&q=85",
    tags: ["Varanasi", "Spirituality", "Culture"],
  },
  {
    id: "himalayan-expedition",
    title: "Himalayan Expeditions",
    tagline: "The places that require effort to reach",
    description:
      "Spiti Valley in its brief snow-free window. Ladakh on a Royal Enfield following the Manali-Leh Highway alone. Nanda Devi base camp on a private permit. For travellers who believe the Himalayas belong to the people willing to show up for them.",
    image:
      "https://images.unsplash.com/photo-1605649041964-06d8b6523c9e?w=1200&q=85",
    tags: ["Himalaya", "Ladakh", "Trekking"],
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
              Six categories of extraordinary Indian experience. Each is
              available as a standalone journey or woven into a broader
              itinerary across the subcontinent.
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
