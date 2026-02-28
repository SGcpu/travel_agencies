import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { stories } from "@/lib/data/stories";
import { Container } from "@/components/ui/Container";
import { RevealText } from "@/components/animations/RevealText";
import { Badge } from "@/components/ui/Badge";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Travel Stories",
  description:
    "First-hand accounts from the field — dawn at Fushimi Inari, the Great Migration crossing, sleeping under Patagonian stars.",
};

export default function StoriesPage() {
  return (
    <>
      {/* Header */}
      <div className="relative pt-40 pb-20 bg-obsidian">
        <Container>
          <RevealText
            as="p"
            className="font-body text-xs tracking-[0.35em] uppercase text-gold mb-5"
          >
            Field Notes
          </RevealText>
          <RevealText
            as="h1"
            className="font-display text-display-xl text-parchment-100 mb-6"
            variant="clip"
            delay={0.1}
          >
            Stories From
            <br />
            <em className="text-gradient-gold not-italic">The Journey</em>
          </RevealText>
          <RevealText delay={0.2}>
            <p className="font-body text-base text-parchment-200/50 max-w-lg leading-relaxed">
              First-hand accounts written by our travellers and guides. These
              are not itineraries — they are memories made prose.
            </p>
          </RevealText>
        </Container>
      </div>

      {/* Stories list */}
      <main className="section-padding bg-obsidian border-t border-white/5">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story) => (
              <Link
                key={story.id}
                href={`/stories/${story.slug}`}
                className="group flex flex-col gap-5 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian"
                aria-label={`Read: ${story.title}`}
              >
                {/* Cover */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <Image
                    src={story.coverImage}
                    alt={story.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/50 to-transparent" />
                </div>

                {/* Tags */}
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge variant="gold">{story.destination}</Badge>
                  <span className="font-body text-[10px] tracking-widest uppercase text-parchment/30">
                    {story.readTime} min
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h2 className="font-display text-xl text-parchment-100 group-hover:text-gold transition-colors duration-200 mb-2">
                    {story.title}
                  </h2>
                  <p className="font-display text-base text-parchment/40 italic">
                    {story.subtitle}
                  </p>
                </div>

                <p className="font-body text-sm text-parchment-200/50 leading-relaxed line-clamp-3 flex-1">
                  {story.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="relative w-7 h-7 rounded-full overflow-hidden">
                      <Image
                        src={story.authorAvatar}
                        alt={story.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="font-body text-xs text-parchment/40">
                      {story.author}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={15}
                    className="text-gold/40 group-hover:text-gold transition-colors"
                  />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </main>
    </>
  );
}
