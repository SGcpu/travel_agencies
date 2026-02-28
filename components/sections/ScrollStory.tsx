"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

// ─── Static Data ────────────────────────────────────────────────────────────

const QUOTE_WORDS = [
  "The",
  "world",
  "does",
  "not",
  "give",
  "its",
  "secrets",
  "to",
  "the",
  "hurried.",
];

const STRIPS = [
  {
    name: "Morocco",
    tagline: "Ancient medinas. Infinite mystery.",
    image:
      "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=900&q=80",
  },
  {
    name: "Kyoto",
    tagline: "Where silence holds its breath.",
    image:
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=900&q=80",
  },
  {
    name: "Maldives",
    tagline: "The earth's last blue dream.",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=900&q=80",
  },
];

const STATS = [
  { value: "18+", label: "Years of Craft" },
  { value: "94%", label: "Return Clients" },
  { value: "60+", label: "Destinations" },
  { value: "1,200+", label: "Journeys Designed" },
];

// ─── Component ───────────────────────────────────────────────────────────────

export function ScrollStory() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced || !wrapRef.current || !stickyRef.current) return;

    const ctx = gsap.context(() => {
      // ──────────────────────────────────────────────────────────────────────
      // 1. SET ALL INITIAL STATES
      // ──────────────────────────────────────────────────────────────────────
      gsap.set(".ss-word", { y: "115%", opacity: 0 });
      gsap.set(".ss-line", { scaleX: 0 });
      gsap.set(".ss-sub", { opacity: 0, y: 16 });

      gsap.set([".ss-s2", ".ss-s3", ".ss-s4", ".ss-s5"], { opacity: 0 });

      // Scene 2
      gsap.set(".ss-img-2", { clipPath: "circle(0% at 50% 60%)", scale: 1.35 });
      gsap.set(".ss-num", { x: -120, opacity: 0 });
      gsap.set(".ss-dest-h", { y: 90, opacity: 0 });
      gsap.set(".ss-dest-sub", { y: 30, opacity: 0 });

      // Scene 3
      gsap.set(".ss-strip-0", { y: "100%" });
      gsap.set(".ss-strip-1", { y: "100%" });
      gsap.set(".ss-strip-2", { y: "100%" });
      gsap.set(".ss-s3-label", { y: 24, opacity: 0 });
      gsap.set(".ss-s3-foot", { y: 16, opacity: 0 });

      // Scene 4
      gsap.set(".ss-s4-img", { scale: 1.18 });
      gsap.set(".ss-s4-tag", { opacity: 0, letterSpacing: "0.55em" });
      gsap.set(".ss-stat", { y: 50, opacity: 0 });
      gsap.set(".ss-s4-q", { y: 24, opacity: 0 });
      gsap.set(".ss-s4-qa", { opacity: 0 });

      // Scene 5
      gsap.set(".ss-s5-img", { scale: 1.12 });
      gsap.set(".ss-s5-eye", { opacity: 0, y: 20 });
      gsap.set(".ss-s5-h", {
        opacity: 0,
        y: 70,
        clipPath: "inset(100% 0 0 0)",
      });
      gsap.set(".ss-s5-btn", { opacity: 0, scale: 0.88 });

      // ──────────────────────────────────────────────────────────────────────
      // 2. BUILD PAUSED SCRUB TIMELINE
      // ──────────────────────────────────────────────────────────────────────
      const tl = gsap.timeline({ paused: true });

      // ── SCENE 1 · Opening Quote ───────────────────────────────────────────
      tl.to(".ss-word", {
        y: "0%",
        opacity: 1,
        stagger: 0.09,
        duration: 0.75,
        ease: "power3.out",
      })
        .to(
          ".ss-line",
          { scaleX: 1, duration: 0.9, ease: "power2.inOut" },
          "-=0.25",
        )
        .to(".ss-sub", { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
        .to({}, { duration: 0.9 }) // hold
        .to(".ss-s1", { opacity: 0, duration: 0.55, ease: "power2.in" })

        // ── SCENE 2 · Destination Explosion ───────────────────────────────────
        .to(".ss-s2", { opacity: 1, duration: 0.01 }, "<+=0.25")
        .to(
          ".ss-img-2",
          {
            clipPath: "circle(160% at 50% 60%)",
            scale: 1,
            duration: 1.7,
            ease: "power4.inOut",
          },
          "<",
        )
        .to(
          ".ss-num",
          { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
          "-=1.1",
        )
        .to(
          ".ss-dest-h",
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.7",
        )
        .to(".ss-dest-sub", { y: 0, opacity: 1, duration: 0.7 }, "-=0.4")
        .to({}, { duration: 0.7 })
        .to(".ss-s2", {
          opacity: 0,
          scale: 1.04,
          duration: 0.6,
          ease: "power2.in",
        })

        // ── SCENE 3 · Three Strips ─────────────────────────────────────────────
        .to(".ss-s3", { opacity: 1, duration: 0.01 }, "<+=0.15")
        .to(".ss-strip-0", { y: "0%", duration: 1.3, ease: "power4.out" }, "<")
        .to(
          ".ss-strip-1",
          { y: "0%", duration: 1.3, ease: "power4.out" },
          "<+=0.14",
        )
        .to(
          ".ss-strip-2",
          { y: "0%", duration: 1.3, ease: "power4.out" },
          "<+=0.14",
        )
        .to(
          ".ss-s3-label",
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.65,
            ease: "power3.out",
          },
          "-=0.55",
        )
        .to(".ss-s3-foot", { y: 0, opacity: 1, duration: 0.5 }, "-=0.2")
        .to({}, { duration: 0.65 })
        .to(".ss-s3", { opacity: 0, duration: 0.5, ease: "power2.in" })

        // ── SCENE 4 · Trust & Authority ───────────────────────────────────────
        .to(".ss-s4", { opacity: 1, duration: 0.01 }, "<+=0.2")
        .to(
          ".ss-s4-img",
          {
            scale: 1,
            duration: 1.6,
            ease: "power2.out",
          },
          "<",
        )
        .to(
          ".ss-s4-tag",
          {
            opacity: 1,
            letterSpacing: "0.22em",
            duration: 0.85,
            ease: "power2.out",
          },
          "-=1.2",
        )
        .to(
          ".ss-stat",
          {
            y: 0,
            opacity: 1,
            stagger: 0.14,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .to(".ss-s4-q", { y: 0, opacity: 1, duration: 0.65 }, "-=0.15")
        .to(".ss-s4-qa", { opacity: 1, duration: 0.5 }, "-=0.1")
        .to({}, { duration: 0.55 })
        .to(".ss-s4", { opacity: 0, duration: 0.5, ease: "power2.in" })

        // ── SCENE 5 · The Call ─────────────────────────────────────────────────
        .to(".ss-s5", { opacity: 1, duration: 0.55 }, "<+=0.2")
        .to(".ss-s5-img", { scale: 1, duration: 2.5, ease: "none" }, "<")
        .to(".ss-s5-eye", { opacity: 1, y: 0, duration: 0.55 }, "-=2")
        .to(
          ".ss-s5-h",
          {
            opacity: 1,
            y: 0,
            clipPath: "inset(0% 0 0 0)",
            duration: 1.1,
            ease: "power4.out",
          },
          "-=0.35",
        )
        .to(
          ".ss-s5-btn",
          {
            opacity: 1,
            scale: 1,
            duration: 0.75,
            ease: "back.out(1.7)",
          },
          "-=0.3",
        );

      // ──────────────────────────────────────────────────────────────────────
      // 3. SCROLL → TIMELINE DRIVER
      // ──────────────────────────────────────────────────────────────────────
      ScrollTrigger.create({
        trigger: wrapRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.8,
        onUpdate: (self) => {
          tl.progress(self.progress);
        },
      });

      // ──────────────────────────────────────────────────────────────────────
      // 4. PROGRESS DOTS
      // ──────────────────────────────────────────────────────────────────────
      ScrollTrigger.create({
        trigger: wrapRef.current,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          const p = self.progress;
          const active =
            p < 0.19 ? 0 : p < 0.37 ? 1 : p < 0.58 ? 2 : p < 0.78 ? 3 : 4;
          document
            .querySelectorAll<HTMLElement>(".ss-dot")
            .forEach((dot, i) => {
              dot.style.opacity = i === active ? "1" : "0.25";
              dot.style.transform = i === active ? "scale(1.8)" : "scale(1)";
              dot.style.background = i === active ? "var(--color-gold)" : "";
            });
        },
      });
    }, wrapRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  // ── Reduced-motion static fallback ─────────────────────────────────────────
  if (prefersReduced) {
    return (
      <section className="py-32 bg-obsidian text-center px-8">
        <p className="font-display text-4xl md:text-6xl text-parchment max-w-3xl mx-auto leading-snug">
          The world does not give its secrets to the hurried.
        </p>
        <p className="font-body text-parchment-200/50 text-sm tracking-[0.3em] uppercase mt-8">
          Since 2006 · Luxury Travel Architects
        </p>
        <Link
          href="/contact"
          className="inline-block mt-12 px-12 py-4 border border-gold text-gold
                     font-body text-sm tracking-[0.2em] uppercase
                     hover:bg-gold hover:text-obsidian transition-colors duration-500"
        >
          Begin the Conversation
        </Link>
      </section>
    );
  }

  // ── Scroll-story markup ─────────────────────────────────────────────────────
  return (
    <div
      ref={wrapRef}
      style={{ height: "600vh" }}
      className="relative"
      aria-label="Our story — scroll to explore"
    >
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen overflow-hidden bg-obsidian"
      >
        {/* ── Progress Dots ─────────────────────────────────────────────── */}
        <div
          className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-50
                     flex flex-col gap-3"
          aria-hidden="true"
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="ss-dot w-1.5 h-1.5 rounded-full bg-parchment-100/25
                         transition-all duration-400"
            />
          ))}
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            SCENE 1 — Opening Quote
        ════════════════════════════════════════════════════════════════ */}
        <div
          className="ss-s1 absolute inset-0 z-10
                     flex items-center justify-center"
        >
          {/* Subtle noise texture */}
          <div className="noise-overlay absolute inset-0 pointer-events-none opacity-40" />

          <div className="relative text-center px-8 max-w-4xl">
            {/* Quote — words split for stagger */}
            <div
              className="flex flex-wrap justify-center leading-tight
                         font-display text-4xl sm:text-5xl lg:text-6xl
                         text-parchment-100"
              style={{ gap: "0.35em 0.5em" }}
              aria-label="The world does not give its secrets to the hurried."
            >
              {QUOTE_WORDS.map((word, i) => (
                <span key={i} className="overflow-hidden inline-block">
                  <span className="ss-word inline-block">{word}</span>
                </span>
              ))}
            </div>

            {/* Gold rule */}
            <div
              className="ss-line h-px bg-gold mx-auto mt-10 w-24 origin-left"
              aria-hidden="true"
            />

            {/* Sub-line */}
            <p
              className="ss-sub font-body text-xs tracking-[0.35em] uppercase
                          text-parchment-200/45 mt-6"
            >
              Since&nbsp;2006 &nbsp;·&nbsp; Luxury Travel Architects
            </p>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            SCENE 2 — Destination Explosion
        ════════════════════════════════════════════════════════════════ */}
        <div className="ss-s2 absolute inset-0 z-20">
          {/* Background image — circle clip-path reveal */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="ss-img-2 w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1920&q=80"
            alt="Patagonia wilderness"
          />

          {/* Gradient */}
          <div
            className="absolute inset-0 bg-gradient-to-t
                          from-obsidian/85 via-obsidian/15 to-transparent"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r
                          from-obsidian/60 to-transparent"
          />

          {/* Content */}
          <div className="absolute bottom-16 left-8 md:left-16 lg:left-24">
            {/* Ghost number */}
            <div className="overflow-hidden">
              <span
                className="ss-num font-display select-none
                           text-[10rem] sm:text-[13rem] lg:text-[16rem]
                           leading-none text-parchment/[0.07] block"
              >
                01
              </span>
            </div>

            {/* Destination name */}
            <h2
              className="ss-dest-h font-display
                         text-5xl sm:text-7xl lg:text-8xl
                         text-parchment-100 leading-none
                         -mt-14 sm:-mt-20 lg:-mt-28 relative z-10"
            >
              Patagonia
            </h2>

            {/* Tagline */}
            <p
              className="ss-dest-sub font-body text-parchment-200/55
                          text-base md:text-lg tracking-wider mt-4"
            >
              Where the land ends and adventure begins
            </p>

            {/* Thin rule */}
            <div
              className="w-16 h-px bg-gold mt-6 opacity-60"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            SCENE 3 — Three Destination Strips
        ════════════════════════════════════════════════════════════════ */}
        <div className="ss-s3 absolute inset-0 z-30 flex">
          {STRIPS.map((strip, i) => (
            <div
              key={i}
              className={`ss-strip-${i} relative flex-1 overflow-hidden`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={strip.image}
                alt={strip.name}
                className="w-full h-full object-cover scale-[1.08]"
              />
              {/* Dark tint */}
              <div className="absolute inset-0 bg-obsidian/55" />
              {/* Hover shimmer */}
              <div
                className="absolute inset-0 bg-gradient-to-b
                              from-transparent to-obsidian/70"
              />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-7 md:p-10">
                <h3
                  className="ss-s3-label font-display
                               text-2xl md:text-4xl text-parchment-100"
                >
                  {strip.name}
                </h3>
                <p
                  className="ss-s3-label font-body text-xs md:text-sm
                              text-parchment-200/45 mt-2 tracking-wide"
                >
                  {strip.tagline}
                </p>
              </div>

              {/* Divider */}
              {i < 2 && (
                <div
                  className="absolute right-0 top-0 bottom-0 w-px bg-parchment/10"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}

          {/* Bottom count bar */}
          <div
            className="ss-s3-foot absolute bottom-7 left-1/2 -translate-x-1/2
                       text-center pointer-events-none"
          >
            <p
              className="font-body text-[10px] tracking-[0.35em] uppercase
                          text-parchment-200/35"
            >
              60+ Destinations &nbsp;·&nbsp; Six Continents &nbsp;·&nbsp; One
              Standard: Extraordinary
            </p>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            SCENE 4 — Trust & Authority
        ════════════════════════════════════════════════════════════════ */}
        <div className="ss-s4 absolute inset-0 z-20">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="ss-s4-img w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&q=80"
            alt="Golden hour safari, Maasai Mara"
          />
          <div className="absolute inset-0 bg-obsidian/55" />
          <div
            className="absolute inset-0 bg-gradient-to-b
                          from-obsidian/30 via-transparent to-obsidian/70"
          />

          {/* Centre content */}
          <div
            className="absolute inset-0 flex flex-col items-center
                          justify-center text-center px-8"
          >
            <p
              className="ss-s4-tag font-body text-[10px] text-gold
                         uppercase mb-12 md:mb-16"
              style={{ letterSpacing: "0.55em" }}
            >
              We Don&apos;t Sell Trips. We Architect Transformations.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 mb-14 md:mb-18">
              {STATS.map((stat, i) => (
                <div key={i} className="ss-stat text-center">
                  <div className="font-display text-4xl md:text-5xl text-parchment-100">
                    {stat.value}
                  </div>
                  <div
                    className="font-body text-[10px] tracking-[0.18em] uppercase
                                  text-parchment-200/45 mt-2"
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Client quote */}
            <blockquote>
              <p
                className="ss-s4-q font-display text-xl md:text-2xl lg:text-3xl
                            text-parchment/75 max-w-2xl italic leading-relaxed"
              >
                &ldquo;They didn&apos;t just plan our trip. They changed how we
                see the world.&rdquo;
              </p>
              <footer
                className="ss-s4-qa font-body text-[10px] tracking-[0.25em]
                                 uppercase text-gold/60 mt-4"
              >
                — Alexandra Harrington, New York
              </footer>
            </blockquote>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            SCENE 5 — The Call to Journey
        ════════════════════════════════════════════════════════════════ */}
        <div className="ss-s5 absolute inset-0 z-20">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="ss-s5-img w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1505832018823-50331d70d237?w=1920&q=80"
            alt="Dawn breaking over the ocean horizon"
          />
          <div className="absolute inset-0 bg-obsidian/60" />

          {/* Content */}
          <div
            className="absolute inset-0 flex flex-col items-center
                          justify-center text-center px-8"
          >
            <p
              className="ss-s5-eye font-body text-[10px] tracking-[0.45em]
                          uppercase text-gold mb-8 md:mb-10"
            >
              Your Story Begins Here
            </p>

            <h2
              className="ss-s5-h font-display
                         text-5xl sm:text-6xl md:text-7xl lg:text-8xl
                         text-parchment-100 leading-none max-w-5xl"
            >
              Where Will Your
              <br />
              <em className="text-gradient-gold not-italic">Story Begin?</em>
            </h2>

            <Link
              href="/contact"
              className="ss-s5-btn mt-14 inline-block px-14 py-5
                         border border-gold text-gold
                         font-body text-sm tracking-[0.22em] uppercase
                         hover:bg-gold hover:text-obsidian
                         transition-colors duration-500"
            >
              Begin the Conversation
            </Link>
          </div>
        </div>

        {/* ── Scene label (bottom-left breadcrumb) ──────────────────────── */}
        <div
          className="absolute bottom-8 left-8 md:left-12 z-50
                     font-body text-[9px] tracking-[0.3em] uppercase
                     text-parchment-200/20 pointer-events-none"
          aria-hidden="true"
        >
          Aura&nbsp;Voyages &nbsp;·&nbsp; Our&nbsp;Story
        </div>
      </div>
    </div>
  );
}
