import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getDestinationBySlug, destinations } from "@/lib/data/destinations";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { RevealText } from "@/components/animations/RevealText";
import { ParallaxImage } from "@/components/animations/ParallaxImage";
import { formatPrice } from "@/lib/utils";
import {
  MapPin,
  Clock,
  Calendar,
  DollarSign,
  Check,
  ArrowLeft,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) return {};

  return {
    title: destination.name,
    description: destination.description,
    openGraph: {
      title: `${destination.name} | Aura Voyages`,
      description: destination.description,
      images: [{ url: destination.heroImage, width: 1200, height: 630 }],
    },
    other: {
      "application/ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "TouristDestination",
        name: destination.name,
        description: destination.description,
        touristType: ["Luxury", "Private"],
        geo: {
          "@type": "GeoCoordinates",
        },
      }),
    },
  };
}

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[500px] flex items-end overflow-hidden">
        <ParallaxImage
          src={destination.heroImage}
          alt={`${destination.name} — ${destination.tagline}`}
          intensity={25}
          className="absolute inset-0"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent" />

        {/* Back link */}
        <div className="absolute top-24 left-0 right-0 z-10">
          <Container>
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 font-body text-xs tracking-widest uppercase text-parchment/40 hover:text-gold transition-colors"
              aria-label="Back to all destinations"
            >
              <ArrowLeft size={14} />
              All Destinations
            </Link>
          </Container>
        </div>

        <Container className="relative z-10 pb-16">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <Badge variant="gold">{destination.region}</Badge>
            <Badge variant="outline">{destination.country}</Badge>
          </div>
          <h1 className="font-display text-display-xl text-parchment-100 mb-3">
            {destination.name}
          </h1>
          <p className="font-display text-xl text-gradient-gold italic mb-0">
            {destination.tagline}
          </p>
        </Container>
      </section>

      {/* Quick facts bar */}
      <div className="bg-obsidian-900 border-b border-white/5">
        <Container>
          <div className="flex flex-wrap items-center gap-6 lg:gap-10 py-5">
            {[
              { icon: Clock, label: "Duration", value: destination.duration },
              {
                icon: Calendar,
                label: "Best Time",
                value: destination.bestTimeToVisit,
              },
              {
                icon: DollarSign,
                label: "From",
                value: formatPrice(destination.priceFrom),
              },
              { icon: MapPin, label: "Region", value: destination.region },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3">
                <Icon size={15} className="text-gold/50 flex-shrink-0" />
                <div>
                  <span className="font-body text-[10px] tracking-widest uppercase text-parchment/30 block">
                    {label}
                  </span>
                  <span className="font-body text-sm text-parchment-100">
                    {value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <main className="section-padding bg-obsidian">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-16">
              {/* Description */}
              <div>
                <RevealText
                  as="p"
                  className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-5"
                >
                  The Experience
                </RevealText>
                <RevealText
                  as="p"
                  className="font-body text-base lg:text-lg text-parchment-200/70 leading-relaxed"
                  variant="line"
                  delay={0.1}
                >
                  {destination.longDescription}
                </RevealText>
              </div>

              {/* Highlights */}
              <div>
                <RevealText
                  as="h2"
                  className="font-display text-display-md text-parchment-100 mb-8"
                  variant="line"
                >
                  Signature Moments
                </RevealText>
                <ul className="space-y-4">
                  {destination.highlights.map((h, i) => (
                    <RevealText
                      as="li"
                      key={i}
                      className="flex items-start gap-4 font-body text-sm text-parchment-200/70"
                      delay={i * 0.06}
                    >
                      <Check
                        size={15}
                        className="text-gold mt-0.5 flex-shrink-0"
                      />
                      {h}
                    </RevealText>
                  ))}
                </ul>
              </div>

              {/* Gallery */}
              <div>
                <RevealText
                  as="h2"
                  className="font-display text-display-md text-parchment-100 mb-8"
                >
                  Gallery
                </RevealText>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {destination.galleryImages.map((src, i) => (
                    <div
                      key={i}
                      className="relative overflow-hidden aspect-square"
                    >
                      <Image
                        src={src}
                        alt={`${destination.name} gallery image ${i + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Itinerary */}
              <div>
                <RevealText
                  as="h2"
                  className="font-display text-display-md text-parchment-100 mb-8"
                >
                  Day by Day
                </RevealText>
                <div className="space-y-6">
                  {destination.itinerary.map((day) => (
                    <RevealText
                      as="div"
                      key={day.day}
                      className="flex gap-6 group"
                      delay={0.05}
                    >
                      <div className="flex-shrink-0 w-12 text-right">
                        <span className="font-body text-xs tracking-[0.2em] text-gold/50 uppercase">
                          Day {day.day}
                        </span>
                      </div>
                      <div className="flex-1 pb-6 border-b border-white/5 last:border-0">
                        <h3 className="font-display text-lg text-parchment-100 mb-2">
                          {day.title}
                        </h3>
                        <p className="font-body text-sm text-parchment-200/55 leading-relaxed">
                          {day.description}
                        </p>
                      </div>
                    </RevealText>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar — sticky booking prompt */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-1">
                {/* Price card */}
                <div className="border border-gold/20 p-8 bg-obsidian-900">
                  <p className="font-body text-xs tracking-[0.25em] uppercase text-parchment/40 mb-2">
                    Private Journey From
                  </p>
                  <p className="font-display text-4xl text-gold-light mb-1">
                    {formatPrice(destination.priceFrom)}
                  </p>
                  <p className="font-body text-xs text-parchment/30 mb-8">
                    per person, based on two travellers
                  </p>

                  <Button
                    href={`/contact?destination=${destination.slug}`}
                    variant="primary"
                    size="lg"
                    className="w-full justify-center"
                  >
                    Request This Journey
                  </Button>

                  <p className="font-body text-[10px] text-center text-parchment/25 mt-4">
                    No payment required. We&apos;ll reach out within 24 hours.
                  </p>
                </div>

                {/* Includes */}
                <div className="border border-white/5 p-8 bg-obsidian-900 mt-1">
                  <h3 className="font-body text-xs tracking-[0.25em] uppercase text-gold mb-5">
                    What&apos;s Included
                  </h3>
                  <ul className="space-y-3">
                    {destination.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 font-body text-xs text-parchment-200/55"
                      >
                        <Check
                          size={12}
                          className="text-gold mt-0.5 flex-shrink-0"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Accommodation */}
                <div className="border border-white/5 p-8 bg-obsidian-900 mt-1">
                  <h3 className="font-body text-xs tracking-[0.25em] uppercase text-gold mb-3">
                    Accommodation
                  </h3>
                  <p className="font-body text-xs text-parchment-200/55 leading-relaxed">
                    {destination.accommodation}
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </main>
    </>
  );
}
