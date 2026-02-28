"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface RevealTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** "words" splits text into word spans; "line" fades the whole block */
  variant?: "words" | "line" | "clip";
  as?: keyof React.JSX.IntrinsicElements;
  id?: string;
  role?: string;
  "aria-label"?: string;
}

export function RevealText({
  children,
  className,
  delay = 0,
  variant = "line",
  as: Tag = "div",
  id,
  role,
  "aria-label": ariaLabel,
}: RevealTextProps) {
  const ref = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReduced) return;

    const ctx = gsap.context(() => {
      if (variant === "clip") {
        // Clip reveal from bottom — most dramatic, used for hero headlines
        gsap.fromTo(
          el,
          { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            opacity: 1,
            duration: 1.1,
            delay,
            ease: "power4.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          },
        );
      } else if (variant === "words") {
        // Staggered word reveal
        const text = el.textContent ?? "";
        const words = text.split(" ");
        el.innerHTML = words
          .map(
            (w) =>
              `<span class="inline-block overflow-hidden"><span class="inline-block">${w}</span></span>`,
          )
          .join(" ");
        const spans = el.querySelectorAll("span > span");
        gsap.fromTo(
          spans,
          { y: "100%", opacity: 0 },
          {
            y: "0%",
            opacity: 1,
            duration: 0.8,
            delay,
            stagger: 0.04,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          },
        );
      } else {
        // Simple fade-up line
        gsap.fromTo(
          el,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          },
        );
      }
    });

    return () => ctx.revert();
  }, [delay, variant, prefersReduced]);

  const Component = Tag as React.ElementType;

  return (
    <Component
      ref={ref}
      className={cn(className)}
      id={id}
      role={role}
      aria-label={ariaLabel}
    >
      {children}
    </Component>
  );
}
