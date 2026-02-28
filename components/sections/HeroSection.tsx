"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Calendar, Users, ArrowDown, ArrowRight } from "lucide-react";
import { useHeroReveal } from "@/hooks/useHeroReveal";
import { useReducedMotion } from "@/hooks/useReducedMotion";

// ── Word-mask helper ───────────────────────────────────────────────────────────
// Each word is wrapped in overflow:hidden so .hero-word can slide up
// from below the baseline without revealing surrounding content.
function MaskedWords({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <>
      {text.split(" ").map((word, i) => (
        <span
          key={i}
          className="overflow-hidden inline-block pb-[0.12em] mr-[0.22em] last:mr-0 align-bottom"
        >
          <span
            className={`hero-word inline-block ${className ?? ""}`}
            aria-hidden="true"
          >
            {word}
          </span>
        </span>
      ))}
    </>
  );
}

// ── Booking widget Framer Motion variants ─────────────────────────────────
const bookingVariants = {
  hidden: { y: 72, opacity: 0, scale: 0.97 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 95,
      damping: 15,
      delay: 2.0,
    },
  },
};

const fieldVariants = {
  hidden: { opacity: 0, x: -14 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 22,
      delay: 2.25 + i * 0.1,
    },
  }),
};

// ── Component ─────────────────────────────────────────────────────────────────
export function HeroSection() {
  const prefersReduced = useReducedMotion();
  const {
    containerRef,
    imgWrapRef,
    overlayRef,
    eyebrowRef,
    headlineRef,
    subRef,
    ctaRef,
    contentRef,
    scrollHintRef,
  } = useHeroReveal(prefersReduced);

  return (
    // Not overflow-hidden so the booking widget can overlap the next section
    <section
      ref={containerRef}
      className="relative w-full min-h-[100svh] flex flex-col justify-end"
      aria-label="Hero — Cinematic luxury travel introduction"
    >
      {/* ── Layer 1: Background image (Ken Burns + scroll scale) ────────── */}
      <div
        ref={imgWrapRef}
        className="absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <Image
          src="https://images.unsplash.com/photo-1477587458883-47145ed94245?w=2400&q=90"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          style={{ willChange: "transform" }}
        />
        {/* Cinematic dual gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(10,10,15,0.95) 0%, rgba(10,10,15,0.40) 42%, transparent 72%), " +
              "linear-gradient(to right, rgba(10,10,15,0.68) 0%, rgba(10,10,15,0.12) 55%, transparent 100%)",
          }}
        />
        {/* Corner vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, transparent 58%, rgba(10,10,15,0.50) 100%)",
          }}
        />
      </div>

      {/* ── Curtain overlay: clips upward off-screen on load ─────────── */}
      <div
        ref={overlayRef}
        className="absolute inset-0 z-20 bg-obsidian pointer-events-none"
        aria-hidden="true"
        style={{ clipPath: "inset(0% 0% 0% 0%)" }}
      />

      {/* ── Layer 3: Foreground content ─────────────────────────── */}
      <div
        ref={contentRef}
        className="relative z-30 w-full container-luxury pb-40 lg:pb-52"
        style={{ willChange: "transform" }}
      >
        <div className="max-w-[54rem]">
          {/* Eyebrow — clips in from the left */}
          <p
            ref={eyebrowRef}
            className="font-body text-[0.65rem] tracking-[0.45em] uppercase
                       text-gold mb-7 flex items-center gap-3"
            style={{ clipPath: "inset(0% 100% 0% 0%)" }}
          >
            <span
              className="inline-block w-8 h-px bg-gold"
              aria-hidden="true"
            />
            Bespoke Luxury Travel · Est. 2006
          </p>

          {/* Headline — word mask reveal */}
          <h1
            ref={headlineRef}
            className="font-display text-display-2xl text-parchment-100 leading-none mb-8"
            aria-label="India, Without Compromise."
            style={{ willChange: "transform" }}
          >
            <span className="block">
              <MaskedWords text="India," />
            </span>
            <span className="block mt-1">
              {["Without", "Compromise."].map((word, i) => (
                <span
                  key={i}
                  className="overflow-hidden inline-block pb-[0.12em] mr-[0.22em] last:mr-0 align-bottom"
                >
                  <span
                    className="hero-word inline-block text-gradient-gold"
                    aria-hidden="true"
                  >
                    {word}
                  </span>
                </span>
              ))}
            </span>
          </h1>

          {/* Sub-copy — clips upward */}
          <p
            ref={subRef}
            className="font-body text-base lg:text-lg text-parchment-200/65
                       leading-relaxed max-w-[28rem] mb-10"
            style={{ clipPath: "inset(0% 0% 100% 0%)" }}
          >
            Private itineraries through India's most extraordinary landscapes.
            Rajasthan palaces. Kerala backwaters. Ladakh high passes.
          </p>

          {/* CTAs — polygon unfurl */}
          <div
            ref={ctaRef}
            className="flex flex-wrap items-center gap-4"
            style={{ clipPath: "polygon(0% 50%, 0% 50%, 0% 50%, 0% 50%)" }}
          >
            <Link
              href="/destinations"
              className="group inline-flex items-center gap-3 bg-gold text-obsidian
                         font-body text-sm tracking-[0.22em] uppercase px-8 py-4
                         hover:bg-gold-light transition-colors duration-400"
            >
              Explore Destinations
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 border border-gold/60 text-gold
                         font-body text-sm tracking-[0.22em] uppercase px-8 py-4
                         hover:border-gold hover:bg-gold/10 transition-all duration-400"
            >
              Start Planning
            </Link>
          </div>
        </div>
      </div>

      {/* ── Booking Widget: Framer Motion spring snap ─────────────── */}
      <motion.div
        variants={bookingVariants}
        initial={prefersReduced ? "visible" : "hidden"}
        animate="visible"
        className="absolute bottom-0 translate-y-[45%] left-0 right-0
                   z-40 container-luxury pointer-events-none"
        aria-label="Quick journey planner"
      >
        <div
          className="pointer-events-auto
                     bg-obsidian/95 backdrop-blur-md
                     border border-white/[0.07]
                     grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_auto]
                     divide-y md:divide-y-0 md:divide-x divide-white/[0.07]"
          style={{
            boxShadow:
              "0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(201,168,76,0.08)",
          }}
        >
          {(
            [
              {
                icon: MapPin,
                label: "Destination",
                placeholder: "Where would you like to go?",
              },
              {
                icon: Calendar,
                label: "Travel Dates",
                placeholder: "When are you travelling?",
              },
              {
                icon: Users,
                label: "Travellers",
                placeholder: "How many guests?",
              },
            ] as const
          ).map(({ icon: Icon, label, placeholder }, i) => (
            <motion.div
              key={label}
              custom={i}
              variants={fieldVariants}
              initial={prefersReduced ? "visible" : "hidden"}
              animate="visible"
              className="flex items-center gap-4 px-6 py-5 group cursor-pointer
                         hover:bg-white/[0.03] transition-colors duration-300"
            >
              <Icon
                size={16}
                className="text-gold shrink-0"
                aria-hidden="true"
              />
              <div className="min-w-0">
                <p
                  className="font-body text-[9px] tracking-[0.3em] uppercase
                              text-parchment-200/35 mb-1"
                >
                  {label}
                </p>
                <p
                  className="font-body text-sm text-parchment-200/60
                              group-hover:text-parchment transition-colors duration-300 truncate"
                >
                  {placeholder}
                </p>
              </div>
            </motion.div>
          ))}

          {/* CTA */}
          <motion.div
            custom={3}
            variants={fieldVariants}
            initial={prefersReduced ? "visible" : "hidden"}
            animate="visible"
          >
            <Link
              href="/contact"
              className="flex items-center justify-center gap-3 h-full
                         bg-gold text-obsidian px-8 py-5
                         font-body text-sm tracking-[0.22em] uppercase
                         hover:bg-gold-light transition-colors duration-300"
            >
              Plan Journey
              <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Scroll hint ───────────────────────────────────────── */}
      <button
        ref={scrollHintRef}
        onClick={() =>
          document
            .getElementById("scroll-story")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        aria-label="Scroll to explore"
        className="absolute bottom-8 right-8 md:right-12 z-30
                   flex flex-col items-center gap-2
                   text-parchment-200/30 hover:text-gold
                   transition-colors duration-400 group"
        style={{ opacity: 0 }}
      >
        <span
          className="font-body text-[9px] tracking-[0.35em] uppercase"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll
        </span>
        <ArrowDown
          size={14}
          className="group-hover:translate-y-1 transition-transform duration-300"
        />
      </button>
    </section>
  );
}
