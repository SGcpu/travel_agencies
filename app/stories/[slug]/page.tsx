import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getStoryBySlug, stories } from "@/lib/data/stories";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) return {};
  return {
    title: story.title,
    description: story.excerpt,
    openGraph: {
      title: `${story.title} | Aura Voyages`,
      description: story.excerpt,
      images: [{ url: story.coverImage, width: 1400, height: 900 }],
    },
  };
}

export default async function StoryPage({ params }: Props) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[450px] flex items-end overflow-hidden">
        <Image
          src={story.coverImage}
          alt={story.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />

        {/* Back nav */}
        <div className="absolute top-24 left-0 right-0 z-10">
          <Container>
            <Link
              href="/stories"
              className="inline-flex items-center gap-2 font-body text-xs tracking-widest uppercase text-parchment/40 hover:text-gold transition-colors"
              aria-label="Back to all stories"
            >
              <ArrowLeft size={14} />
              All Stories
            </Link>
          </Container>
        </div>

        {/* Hero content */}
        <Container className="relative z-10 pb-16">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Badge variant="gold">{story.destination}</Badge>
            {story.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="font-display text-display-lg text-parchment-100 mb-3">
            {story.title}
          </h1>
          <p className="font-display text-xl text-parchment/50 italic">
            {story.subtitle}
          </p>
        </Container>
      </section>

      {/* Author + meta bar */}
      <div className="bg-obsidian-900 border-b border-white/5">
        <Container>
          <div className="flex flex-wrap items-center gap-6 py-5">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gold/20">
                <Image
                  src={story.authorAvatar}
                  alt={story.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-display text-sm text-parchment-100">
                  {story.author}
                </p>
                <p className="font-body text-[10px] tracking-widest uppercase text-parchment/30">
                  Writer
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-parchment/30">
              <Clock size={13} />
              <span className="font-body text-xs">
                {story.readTime} min read
              </span>
            </div>
            <div className="flex items-center gap-2 text-parchment/30">
              <Calendar size={13} />
              <span className="font-body text-xs">
                {new Date(story.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        </Container>
      </div>

      {/* Article body */}
      <article className="section-padding bg-obsidian" aria-label={story.title}>
        <Container size="narrow">
          {/* Lead excerpt */}
          <p className="font-display text-xl lg:text-2xl text-parchment-100/80 italic leading-relaxed border-l-2 border-gold pl-6 mb-12">
            {story.excerpt}
          </p>

          {/* Story content */}
          <div className="prose-story font-body text-base lg:text-lg text-parchment-200/65 leading-[1.85] space-y-6">
            {story.content
              .trim()
              .split("\n\n")
              .map((para, i) => (
                <p key={i}>{para.trim()}</p>
              ))}
          </div>

          {/* CTA */}
          <div className="mt-16 pt-12 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="font-display text-lg text-parchment-100 mb-1">
                Inspired by {story.destination}?
              </p>
              <p className="font-body text-sm text-parchment/40">
                We&apos;ll build your private version of this journey.
              </p>
            </div>
            <Button
              href={`/contact?destination=${story.destination.toLowerCase().replace(/\s/g, "-")}`}
              variant="gold"
              size="md"
            >
              Plan This Journey
            </Button>
          </div>
        </Container>
      </article>
    </>
  );
}
