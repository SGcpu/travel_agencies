"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import { Button } from "@/components/ui/Button";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const imgWrapRef = useRef<HTMLDivElement>(null);
  const contentWrapRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Overlay fade out → reveals hero image
      tl.to(overlayRef.current, {
        scaleY: 0,
        transformOrigin: "top",
        duration: 1.4,
      })
        .fromTo(
          headlineRef.current,
          { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 },
          { clipPath: "inset(0% 0% 0% 0%)", opacity: 1, duration: 1.1 },
          "-=0.5",
        )
        .fromTo(
          subRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.9 },
          "-=0.4",
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.4",
        );

      // ── Scroll-exit: image breathes in, content drifts away ────────────
      gsap.fromTo(
        imgWrapRef.current,
        { scale: 1 },
        {
          scale: 1.09,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        },
      );
      gsap.fromTo(
        contentWrapRef.current,
        { opacity: 1, y: 0 },
        {
          opacity: 0,
          y: -55,
          ease: "power2.in",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "60% top",
            scrub: true,
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  const scrollToNext = () => {
    const next = document.getElementById("destinations-section");
    next?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen min-h-[600px] flex items-end overflow-hidden"
      aria-label="Hero — Cinematic travel introduction"
    >
      {/* Hero image */}
      <div ref={imgWrapRef} className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=2400&q=90"
          alt="Amalfi Coast cliffs descending into the Tyrrhenian Sea"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/60 to-transparent" />
      </div>

      {/* Wipe overlay — animates off on load */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-obsidian z-10 origin-top"
        aria-hidden="true"
      />

      {/* Content */}
      <div
        ref={contentWrapRef}
        className="relative z-20 container-luxury pb-20 lg:pb-28 w-full"
      >
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="font-body text-xs tracking-[0.35em] uppercase text-gold mb-6">
            Bespoke Luxury Travel
          </p>

          {/* Headline — clip reveal */}
          <h1
            ref={headlineRef}
            className="font-display text-display-2xl text-parchment-100 mb-6 leading-none"
            style={{ clipPath: "inset(100% 0% 0% 0%)" }}
          >
            The World,
            <br />
            <em className="text-gradient-gold not-italic">
              Without Compromise.
            </em>
          </h1>

          {/* Sub */}
          <p
            ref={subRef}
            className="font-body text-base lg:text-lg text-parchment-200/70 leading-relaxed max-w-md mb-10"
            style={{ opacity: 0 }}
          >
            Private itineraries. Extraordinary places. Experiences that change
            the way you see the world — and yourself.
          </p>

          {/* CTAs */}
          <div
            ref={ctaRef}
            className="flex flex-wrap items-center gap-4"
            style={{ opacity: 0 }}
          >
            <Button href="/destinations" variant="primary" size="lg">
              Explore Destinations
            </Button>
            <Button href="/contact" variant="gold" size="lg">
              Start Planning
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        aria-label="Scroll to destinations"
        className="absolute bottom-8 right-8 z-20 flex flex-col items-center gap-2 text-parchment-200/40 hover:text-gold transition-colors duration-300 group"
      >
        <span className="font-body text-[10px] tracking-[0.2em] uppercase rotate-90">
          Scroll
        </span>
        <ArrowDown
          size={16}
          className="group-hover:translate-y-1 transition-transform"
        />
      </button>
    </section>
  );
}
