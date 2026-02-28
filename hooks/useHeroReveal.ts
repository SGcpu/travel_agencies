"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * useHeroReveal
 *
 * Owns the entire Hero GSAP lifecycle:
 * 1. Curtain wipe (clip-path top→bottom removes the obsidian overlay)
 * 2. Ken Burns continuous slow zoom on the background image
 * 3. Word-mask reveal — each .hero-word animates from y:115% to y:0%
 * 4. Eyebrow — clip-path slides in from the left (inset right edge collapses)
 * 5. Sub-copy — clip-path reveals bottom-to-top
 * 6. CTA — polygon clip that unfurls from the left
 * 7. Scroll scrub parallax:
 *    - Image: additional slight scale → create depth
 *    - Content block: drifts slower than scroll → cinematic float
 *    - Headline words: lift faster than body → foreground separation
 */
export function useHeroReveal(prefersReduced: boolean) {
  const containerRef  = useRef<HTMLDivElement>(null);
  const imgWrapRef    = useRef<HTMLDivElement>(null);
  const overlayRef    = useRef<HTMLDivElement>(null);
  const eyebrowRef    = useRef<HTMLParagraphElement>(null);
  const headlineRef   = useRef<HTMLHeadingElement>(null);
  const subRef        = useRef<HTMLParagraphElement>(null);
  const ctaRef        = useRef<HTMLDivElement>(null);
  const contentRef    = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (prefersReduced || !containerRef.current) return;

    const ctx = gsap.context(() => {

      // ── 0. Initial states ────────────────────────────────────────────────
      // Overlay — will wipe upward off-screen
      gsap.set(overlayRef.current, {
        clipPath: "inset(0% 0% 0% 0%)",
      });

      // Eyebrow — wipes in from left
      gsap.set(eyebrowRef.current, {
        clipPath: "inset(0% 100% 0% 0%)",
      });

      // Each masked word starts below its overflow container
      gsap.set(".hero-word", { y: "115%" });

      // Sub-copy clips up from the bottom
      gsap.set(subRef.current, {
        clipPath: "inset(0% 0% 100% 0%)",
      });

      // CTA starts invisible via polygon — collapses to a line then unfurls
      gsap.set(ctaRef.current, {
        clipPath: "polygon(0% 50%, 0% 50%, 0% 50%, 0% 50%)",
        opacity: 1,
      });

      // Scroll hint below initial view
      gsap.set(scrollHintRef.current, { opacity: 0, y: 12 });

      // ── 1. Ken Burns — continuous background breathe ────────────────────
      // Starts at scale 1.0 → grows imperceptibly to 1.08 over 24s, yoyo loops
      gsap.fromTo(
        imgWrapRef.current,
        { scale: 1.0 },
        {
          scale: 1.08,
          duration: 24,
          ease: "none",
          repeat: -1,
          yoyo: true,
        }
      );

      // ── 2. Page-load entry timeline ──────────────────────────────────────
      const tl = gsap.timeline({
        defaults: { ease: "power4.out" },
        delay: 0.15,
      });

      // Wipe the curtain upward off the screen
      tl.to(overlayRef.current, {
        clipPath: "inset(0% 0% 100% 0%)",
        duration: 1.35,
        ease: "power3.inOut",
      })

      // Eyebrow slides in from left (inset right edge collapses to 0)
      .to(eyebrowRef.current, {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 0.9,
        ease: "power3.out",
      }, "-=0.55")

      // Headline words rise from below their mask containers
      .to(".hero-word", {
        y: "0%",
        stagger: 0.065,
        duration: 1.05,
        ease: "power4.out",
      }, "-=0.65")

      // Sub-copy reveals upward
      .to(subRef.current, {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 0.85,
        ease: "power3.out",
      }, "-=0.4")

      // CTA unfurls — polygon expands from left edge outward
      .to(ctaRef.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 0.75,
        ease: "power3.out",
      }, "-=0.3")

      // Scroll hint drifts in last
      .to(scrollHintRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      }, "-=0.1");

      // ── 3. Scroll scrub — parallax depth separation ──────────────────────
      const st = {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.4,
      };

      // Image scale breathes further in as user scrolls (exits fast)
      gsap.to(imgWrapRef.current, {
        scale: "+=0.12",
        ease: "none",
        scrollTrigger: { ...st, scrub: 2 },
      });

      // Content block drifts upward slower than viewport
      // (creates illusion of floating over the background)
      gsap.to(contentRef.current, {
        y: -70,
        ease: "none",
        scrollTrigger: { ...st, end: "80% top" },
      });

      // Headline specifically — faster than sub/cta → foreground depth
      gsap.to(headlineRef.current, {
        y: -30,
        ease: "none",
        scrollTrigger: { ...st, end: "80% top", scrub: 1 },
      });

      // Fade out the whole content block once scrolled well away
      gsap.to(contentRef.current, {
        opacity: 0,
        ease: "power2.in",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "20% top",
          end: "75% top",
          scrub: 1.2,
        },
      });

    }, containerRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  return {
    containerRef,
    imgWrapRef,
    overlayRef,
    eyebrowRef,
    headlineRef,
    subRef,
    ctaRef,
    contentRef,
    scrollHintRef,
  };
}
