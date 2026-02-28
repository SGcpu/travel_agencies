"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { RevealText } from "@/components/animations/RevealText";

gsap.registerPlugin(ScrollTrigger);

// ─── Fleet data ───────────────────────────────────────────────────────────────

const FLEET = [
  {
    id: "volvo-b11r",
    name: "Volvo B11R Multi-Axle",
    category: "Luxury Coach",
    capacity: "30 – 45 seats",
    ideal: "Group circuits, corporate charters, pilgrimage convoys",
    features: [
      "Reclining airline-style seats",
      "Individual USB charging & A/C vents",
      "PA system with noise-isolated cabin",
      "Hydraulic luggage bays",
      "Onboard attendant",
    ],
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=900&q=85",
    badge: "Group Charter",
  },
  {
    id: "toyota-innova",
    name: "Toyota Innova Crysta",
    category: "Premium MPV",
    capacity: "6 – 7 passengers",
    ideal: "Private family touring, airport transfers, city-to-city",
    features: [
      "Captain-style captain seats",
      "Ventilated cabin with individual controls",
      "Professional uniformed driver",
      "Emergency roadside support line",
      "Child seat on request",
    ],
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=85",
    badge: "Private MPV",
  },
  {
    id: "mahindra-marazzo",
    name: "Mahindra Marazzo",
    category: "Premium MPV",
    capacity: "7 – 8 passengers",
    ideal: "Extended families, corporate groups, multi-stop city touring",
    features: [
      "Shark-fin inspired roofline with panoramic visibility",
      "NVH-insulated cabin (quieter than segment average)",
      "Fold-flat third row",
      "Rear cooling vents",
      "Livery or unmarked options",
    ],
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=900&q=85",
    badge: "Quiet Ride",
  },
  {
    id: "tempo-traveller",
    name: "Tempo Traveller De Luxe",
    category: "Mid-Size Group",
    capacity: "12 – 17 passengers",
    ideal:
      "Weddings, small group circuits, resort transfers from tier-2 cities",
    features: [
      "Push-back cushioned recliner seats",
      "Overhead hand luggage racks",
      "Music system with Bluetooth",
      "Full-length windows",
      "Roof-mount A/C with dual zones",
    ],
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85",
    badge: "Mid-Size Group",
  },
] as const;

// ─── Component ────────────────────────────────────────────────────────────────

export function FleetSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".fleet-card");

      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            delay: i * 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        );
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-obsidian-900 border-t border-white/5"
      aria-labelledby="fleet-heading"
    >
      <Container>
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <RevealText
            as="p"
            className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-5"
          >
            Our Fleet
          </RevealText>
          <RevealText
            as="h2"
            id="fleet-heading"
            className="font-display text-display-lg text-parchment-100 mb-5"
            variant="clip"
            delay={0.1}
          >
            Vehicles Built for
            <br />
            <em className="text-gradient-gold not-italic">
              India&apos;s Roads.
            </em>
          </RevealText>
          <RevealText delay={0.2}>
            <p className="font-body text-sm text-parchment-200/50 max-w-lg leading-relaxed">
              Every vehicle in our fleet is professionally maintained, driven by
              verified chauffeurs, and selected against one criterion: the
              comfort of a long Indian highway.
            </p>
          </RevealText>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FLEET.map((vehicle) => (
            <article
              key={vehicle.id}
              className="fleet-card group relative flex flex-col bg-obsidian border border-white/8
                         overflow-hidden hover:border-gold/30 transition-colors duration-500"
              aria-label={vehicle.name}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700
                             will-change-transform"
                />
                {/* Badge */}
                <span
                  className="absolute top-3 left-3 font-body text-[0.6rem] tracking-[0.3em]
                               uppercase text-obsidian bg-gold px-3 py-1"
                >
                  {vehicle.badge}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-6">
                <p className="font-body text-[0.6rem] tracking-[0.3em] uppercase text-gold mb-2">
                  {vehicle.category}
                </p>
                <h3 className="font-display text-lg text-parchment-100 mb-1 leading-tight">
                  {vehicle.name}
                </h3>
                <p className="font-body text-xs text-gold/80 mb-4">
                  {vehicle.capacity}
                </p>
                <p className="font-body text-xs text-parchment-200/50 leading-relaxed mb-5">
                  <span className="text-parchment-200/30 uppercase tracking-wider text-[0.55rem] block mb-1">
                    Ideal for
                  </span>
                  {vehicle.ideal}
                </p>

                {/* features */}
                <ul className="mt-auto space-y-1.5" aria-label="Features">
                  {vehicle.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2 font-body text-xs text-parchment-200/45"
                    >
                      <span
                        className="inline-block mt-[0.35em] w-1 h-1 rounded-full bg-gold/50 shrink-0"
                        aria-hidden="true"
                      />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* Footnote */}
        <p className="font-body text-xs text-parchment-200/30 mt-10 text-center tracking-wide">
          All vehicles are GPS-tracked · Drivers verified & uniformed ·
          Available for hourly, day, and multi-day charter
        </p>
      </Container>
    </section>
  );
}
