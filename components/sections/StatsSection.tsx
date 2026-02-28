"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/ui/Container";
import { useReducedMotion } from "@/hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 18, suffix: "+", label: "Years of Craft" },
  { value: 94, suffix: "%", label: "Return Clients" },
  { value: 60, suffix: "+", label: "Destinations" },
  { value: 1200, suffix: "+", label: "Journeys Curated" },
];

function StatItem({
  value,
  suffix,
  label,
  prefersReduced,
}: {
  value: number;
  suffix: string;
  label: string;
  prefersReduced: boolean;
}) {
  const numRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = numRef.current;
    if (!el || prefersReduced) return;

    const ctx = gsap.context(() => {
      const counter = { val: 0 };
      gsap.to(counter, {
        val: value,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        onUpdate: function () {
          el.textContent = Math.round(counter.val).toString();
        },
      });
    });

    return () => ctx.revert();
  }, [value, prefersReduced]);

  return (
    <div className="text-center lg:text-left">
      <div className="font-display text-5xl lg:text-6xl text-parchment-100 mb-2 flex items-baseline gap-1 justify-center lg:justify-start">
        <span ref={numRef}>{prefersReduced ? value : 0}</span>
        <span className="text-gold">{suffix}</span>
      </div>
      <p className="font-body text-xs tracking-[0.2em] uppercase text-parchment-200/50">
        {label}
      </p>
    </div>
  );
}

export function StatsSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      className="section-padding border-t border-white/5 bg-obsidian"
      aria-label="Agency statistics"
    >
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat) => (
            <StatItem
              key={stat.label}
              {...stat}
              prefersReduced={prefersReduced}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
