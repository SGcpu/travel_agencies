import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { formatPrice } from "@/lib/utils";
import type { Destination } from "@/types";
import { ArrowUpRight } from "lucide-react";

interface DestinationCardProps {
  destination: Destination;
  index?: number;
}

export function DestinationCard({
  destination,
  index = 0,
}: DestinationCardProps) {
  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className="group relative flex flex-col overflow-hidden focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian"
      aria-label={`Explore ${destination.name} — from ${formatPrice(destination.priceFrom)}`}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[3/4]">
        <Image
          src={destination.heroImage}
          alt={`${destination.name} — ${destination.tagline}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform"
        />
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/20 to-transparent" />

        {/* Index number — cinematic detail */}
        <span
          className="absolute top-5 right-5 font-body text-[11px] tracking-[0.2em] text-parchment/30"
          aria-hidden="true"
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Tags */}
        <div className="absolute top-5 left-5 flex flex-wrap gap-1.5">
          <Badge variant="gold">{destination.region}</Badge>
        </div>

        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="font-body text-[10px] tracking-[0.25em] text-gold uppercase mb-2">
            {destination.country}
          </p>
          <h3 className="font-display text-2xl text-parchment-100 leading-tight mb-1">
            {destination.name}
          </h3>
          <p className="font-body text-sm text-parchment-200/60 line-clamp-2 mb-4">
            {destination.tagline}
          </p>

          {/* Footer row */}
          <div className="flex items-center justify-between">
            <div>
              <span className="font-body text-[10px] text-parchment/40 tracking-widest uppercase block">
                From
              </span>
              <span className="font-display text-lg text-gold-light">
                {formatPrice(destination.priceFrom)}
              </span>
            </div>
            <span className="w-9 h-9 border border-gold/30 flex items-center justify-center text-gold/60 group-hover:bg-gold group-hover:text-obsidian group-hover:border-gold transition-all duration-300">
              <ArrowUpRight size={15} />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
