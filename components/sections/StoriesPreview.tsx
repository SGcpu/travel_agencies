import Link from "next/link";
import Image from "next/image";
import { stories } from "@/lib/data/stories";
import { Container } from "@/components/ui/Container";
import { RevealText } from "@/components/animations/RevealText";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";

// RSC — no client JS needed
export function StoriesPreview() {
  const preview = stories.slice(0, 3);

  return (
    <section
      className="section-padding bg-obsidian border-t border-white/5"
      aria-labelledby="stories-heading"
    >
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <RevealText
              as="p"
              className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4"
            >
              Field Notes
            </RevealText>
            <RevealText
              as="h2"
              id="stories-heading"
              className="font-display text-display-lg text-parchment-100"
              variant="clip"
              delay={0.1}
            >
              Stories From
              <br />
              <em className="text-gradient-gold not-italic">The Journey</em>
            </RevealText>
          </div>
          <RevealText delay={0.2}>
            <Button href="/stories" variant="outline" size="md">
              All Stories
            </Button>
          </RevealText>
        </div>

        {/* Stories grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {preview.map((story, i) => (
            <Link
              key={story.id}
              href={`/stories/${story.slug}`}
              className="group flex flex-col gap-4 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian rounded-sm"
              aria-label={`Read: ${story.title}`}
            >
              {/* Cover image */}
              <div className="relative overflow-hidden aspect-[16/10]">
                <Image
                  src={story.coverImage}
                  alt={story.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />
              </div>

              {/* Meta */}
              <div className="flex items-center gap-3">
                <Badge variant="outline">{story.destination}</Badge>
                <span className="font-body text-[10px] tracking-widest uppercase text-parchment/30">
                  {story.readTime} min read
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display text-xl text-parchment-100 leading-tight group-hover:text-gold transition-colors duration-200">
                {story.title}
              </h3>

              <p className="font-body text-sm text-parchment-200/50 leading-relaxed line-clamp-2 flex-1">
                {story.excerpt}
              </p>

              {/* Author + read arrow */}
              <div className="flex items-center justify-between pt-2 border-t border-white/5">
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
    </section>
  );
}
