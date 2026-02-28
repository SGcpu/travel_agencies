import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { RevealText } from "@/components/animations/RevealText";
import { ParallaxImage } from "@/components/animations/ParallaxImage";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "We are Aura Voyages — 18 years of bespoke luxury travel curation. Every journey is personal, private, and unrepeatable.",
};

const values = [
  {
    number: "01",
    title: "Uncompromising Curation",
    body: "We visit every property, vet every guide, eat at every table we recommend. If we haven't experienced it, we don't sell it.",
  },
  {
    number: "02",
    title: "Radical Privacy",
    body: "Your journey is yours alone. We never reuse itineraries, and we never share client details — with anyone, for any reason.",
  },
  {
    number: "03",
    title: "Access Beyond Access",
    body: "Two decades of relationships open doors — private collections, after-hours temples, invitation-only events — that simply aren't available to independent travellers.",
  },
  {
    number: "04",
    title: "Sustainable by Design",
    body: "We work exclusively with operators who demonstrate genuine conservation practices. Luxury and responsibility are not in conflict.",
  },
];

const team = [
  {
    name: "Helena Marsh",
    role: "Founder & Creative Director",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=85&fit=crop",
    bio: "25 years in luxury travel. Former Condé Nast Traveller editor. Has visited 94 countries.",
  },
  {
    name: "David Osei",
    role: "Africa & Expedition Director",
    image:
      "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=600&q=85&fit=crop",
    bio: "Born in Accra. Has led over 400 safari expeditions across 12 African countries.",
  },
  {
    name: "Clara Fontaine",
    role: "Americas & Adventure Director",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&q=85&fit=crop",
    bio: "Former Patagonia expedition guide. Specialist in polar, mountain, and wilderness travel.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[500px] flex items-end overflow-hidden">
        <ParallaxImage
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=2000&q=85"
          alt="A traveller standing on a mountain ridge at sunset"
          intensity={20}
          className="absolute inset-0"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent" />
        <Container className="relative z-10 pb-20">
          <RevealText
            as="p"
            className="font-body text-xs tracking-[0.35em] uppercase text-gold mb-5"
          >
            About Aura Voyages
          </RevealText>
          <h1 className="font-display text-display-xl text-parchment-100 max-w-2xl">
            We Believe Travel Is the
            <br />
            <em className="text-gradient-gold not-italic">
              Greatest Art Form.
            </em>
          </h1>
        </Container>
      </section>

      {/* Story */}
      <section
        className="section-padding bg-obsidian"
        id="philosophy"
        aria-label="Our philosophy"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <RevealText
                as="p"
                className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-6"
              >
                Founded 2007
              </RevealText>
              <RevealText
                as="h2"
                className="font-display text-display-lg text-parchment-100 mb-8"
                variant="clip"
                delay={0.1}
              >
                Eighteen Years.
                <br />
                One Standard.
              </RevealText>
              <div className="space-y-5 font-body text-base text-parchment-200/65 leading-relaxed">
                <RevealText as="p" delay={0.15}>
                  Aura Voyages was founded on a single conviction: that the best
                  travel experiences in the world are designed, not discovered.
                  They require knowledge, relationships, and an obsessive
                  attention to the invisible details that compose a perfect day.
                </RevealText>
                <RevealText as="p" delay={0.2}>
                  We are a small agency by design. Our client list is capped at
                  150 active relationships. Every journey is built from scratch
                  by a single dedicated planner who knows you — not a template,
                  not a sales team.
                </RevealText>
                <RevealText as="p" delay={0.25}>
                  The result is a travel experience with the feel of something
                  privately arranged by someone who has spent a lifetime in
                  these places. Because it is.
                </RevealText>
              </div>
            </div>

            {/* Side image */}
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=85"
                alt="Amalfi Coast — one of our signature destinations"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Gold frame */}
              <div className="absolute inset-4 border border-gold/20 pointer-events-none" />
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section
        className="section-padding bg-obsidian border-t border-white/5"
        aria-label="Our values"
      >
        <Container>
          <RevealText
            as="h2"
            className="font-display text-display-lg text-parchment-100 mb-16 text-center"
            variant="clip"
          >
            How We Work
          </RevealText>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {values.map((value, i) => (
              <RevealText
                as="div"
                key={value.number}
                className="flex gap-6"
                delay={i * 0.08}
              >
                <span className="font-body text-xs tracking-widest text-gold/30 uppercase flex-shrink-0 pt-1">
                  {value.number}
                </span>
                <div>
                  <h3 className="font-display text-xl text-parchment-100 mb-3">
                    {value.title}
                  </h3>
                  <p className="font-body text-sm text-parchment-200/55 leading-relaxed">
                    {value.body}
                  </p>
                </div>
              </RevealText>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section
        className="section-padding bg-obsidian-900 border-t border-white/5"
        id="process"
        aria-label="Our planning process"
      >
        <Container size="narrow">
          <RevealText
            as="h2"
            className="font-display text-display-lg text-parchment-100 mb-4 text-center"
            variant="clip"
          >
            How It Works
          </RevealText>
          <RevealText className="text-center mb-16">
            <p className="font-body text-sm text-parchment/40 max-w-md mx-auto">
              From first conversation to final transfer — our process is
              designed to be effortless for you.
            </p>
          </RevealText>

          <div className="space-y-0">
            {[
              {
                step: "01",
                title: "The Conversation",
                body: "A 45-minute call with your dedicated planner. No forms, no questionnaires. Just conversation about places, pace, and what you want travel to feel like.",
              },
              {
                step: "02",
                title: "The Proposal",
                body: "Within 72 hours, we present one bespoke proposal — not three options, one considered recommendation built specifically for you.",
              },
              {
                step: "03",
                title: "The Refinement",
                body: "We work together to refine every detail until the itinerary is exactly right. This is collaboration, not a transaction.",
              },
              {
                step: "04",
                title: "The Journey",
                body: "You travel with total peace of mind. Your planner is available 24/7. Every arrangement is confirmed, every contingency planned for.",
              },
            ].map((step, i) => (
              <RevealText
                as="div"
                key={step.step}
                className="flex gap-8 py-10 border-b border-white/5 last:border-0"
                delay={i * 0.08}
              >
                <span className="font-body text-[10px] tracking-[0.2em] text-gold/40 uppercase flex-shrink-0 w-8 pt-1">
                  {step.step}
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-display-md text-parchment-100 mb-3">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-parchment-200/55 leading-relaxed max-w-lg">
                    {step.body}
                  </p>
                </div>
              </RevealText>
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
      <section
        className="section-padding bg-obsidian border-t border-white/5"
        aria-label="Our team"
      >
        <Container>
          <RevealText
            as="h2"
            className="font-display text-display-lg text-parchment-100 mb-16 text-center"
            variant="clip"
          >
            The People Behind
            <br />
            <em className="text-gradient-gold not-italic">Your Journey</em>
          </RevealText>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <RevealText as="div" key={member.name} delay={i * 0.1}>
                <div className="relative overflow-hidden aspect-[3/4] mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 to-transparent" />
                </div>
                <p className="font-display text-xl text-parchment-100 mb-1">
                  {member.name}
                </p>
                <p className="font-body text-xs tracking-[0.15em] uppercase text-gold mb-3">
                  {member.role}
                </p>
                <p className="font-body text-sm text-parchment/45 leading-relaxed">
                  {member.bio}
                </p>
              </RevealText>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="section-padding bg-obsidian-900 border-t border-white/5 text-center">
        <Container size="narrow">
          <RevealText
            as="h2"
            className="font-display text-display-lg text-parchment-100 mb-6"
            variant="clip"
          >
            Ready to Begin?
          </RevealText>
          <RevealText delay={0.1}>
            <p className="font-body text-sm text-parchment/45 mb-10 leading-relaxed">
              Your journey starts with a conversation. No obligation, no
              pressure. Just two people talking about extraordinary places.
            </p>
          </RevealText>
          <RevealText delay={0.2}>
            <Button href="/contact" variant="primary" size="lg">
              Start the Conversation
            </Button>
          </RevealText>
        </Container>
      </section>
    </>
  );
}
