import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { ScrollStory } from "@/components/sections/ScrollStory";
import { DestinationsGrid } from "@/components/sections/DestinationsGrid";
import { StatsSection } from "@/components/sections/StatsSection";
import { StoriesPreview } from "@/components/sections/StoriesPreview";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Aura Voyages — Cinematic Luxury Travel",
  description:
    "Bespoke luxury travel experiences for the discerning explorer. Private villas, expert guides, and journeys that transform.",
  openGraph: {
    title: "Aura Voyages — Cinematic Luxury Travel",
    description:
      "Bespoke luxury travel experiences for the discerning explorer.",
    images: ["/og-image.jpg"],
  },
};

// Emotional arc: Wonder (Hero) → Discovery (Destinations) →
//   Trust (Stats) → Desire (Stories) → Trust (Testimonials) → Action (CTA)
export default function HomePage() {
  return (
    <>
      {/* ACT I — WONDER: Full-bleed cinematic capture */}
      <HeroSection />

      {/* NARRATIVE BRIDGE: Scroll-driven storytelling — 5 scenes, 600vh */}
      {/* Wonder → Quote → Destination explosion → World scope → Trust → Call */}
      <ScrollStory />

      {/* ACT II — DISCOVERY: Featured destinations */}
      <DestinationsGrid />

      {/* AUTHORITY INTERLUDE: Agency credentials through numbers */}
      <StatsSection />

      {/* ACT II.b — DESIRE: Narrative travel stories spark aspiration */}
      <StoriesPreview />

      {/* TRUST LAYER: Real client voices reduce conversion friction */}
      <TestimonialsSection />

      {/* ACT III — ACTION: Invitation to begin */}
      <CTASection />
    </>
  );
}
