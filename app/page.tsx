import type { Metadata } from "next";
import { HomeHero } from "@/components/home/HomeHero";
import { BookingWidget } from "@/components/home/BookingWidget";
import { AboutSection } from "@/components/home/AboutSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { AppPromo } from "@/components/home/AppPromo";
import { BusCollection } from "@/components/home/BusCollection";
import { HomeTestimonials } from "@/components/home/HomeTestimonials";

export const metadata: Metadata = {
  title: "JKTT India — Premium JKTT & Group Travel",
  description:
    "India's most trusted JKTT service. Volvo coaches, Innova Crystas, and Tempo Travellers with professional drivers across Rajasthan, Kerala, Ladakh, Goa, and every Indian highway.",
  openGraph: {
    title: "JKTT India — Premium JKTT & Group Travel",
    description:
      "Luxury coaches and group vehicles across India. Book your charter today.",
    images: ["/og-image.jpg"],
  },
};

export default function HomePage() {
  return (
    <main>
      {/* 1. Hero — full-bleed bus + headline */}
      <HomeHero />

      {/* 2. Booking widget — straddles hero/content boundary */}
      <BookingWidget />

      {/* 3. White breathing-room spacer above About */}
      <div className="h-20 sm:h-28 bg-white" aria-hidden="true" />

      {/* 4. About Us — split asymmetrical */}
      <AboutSection />

      {/* 5. Why Choose Us — dark contrast with animated counters */}
      <WhyChooseUs />

      {/* 6. Services Grid — 3-col with orange highlight card */}
      <ServicesGrid />

      {/* 7. App Promo — split black/white */}
      <AppPromo />

      {/* 8. Bus Collection — 3-col fleet cards */}
      <BusCollection />

      {/* 9. Testimonials — dark parallax with overlapping cards */}
      <HomeTestimonials />
    </main>
  );
}
