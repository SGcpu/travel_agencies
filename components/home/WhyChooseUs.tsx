"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { Bus, Users, MapPin, Clock } from "lucide-react";

const STATS = [
  { icon: Bus, value: 25, suffix: "+", label: "Buses Ready" },
  { icon: Users, value: 2640, suffix: "+", label: "Satisfied Customers" },
  { icon: MapPin, value: 180, suffix: "+", label: "Routes Covered" },
  { icon: Clock, value: 18, suffix: " yrs", label: "Industry Experience" },
];

function AnimatedCounter({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const startTime = performance.now();
          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function WhyChooseUs() {
  return (
    <section
      className="relative bg-[#111111] overflow-hidden"
      aria-labelledby="why-heading"
      style={{
        paddingTop: "clamp(4rem,10vw,7rem)",
        paddingBottom: "clamp(4rem,10vw,7rem)",
      }}
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Left: Image with orange overlay card ─────────── */}
          <div className="relative h-[420px] sm:h-[500px] lg:h-[540px]">
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=85"
                alt="Indian couple planning their trip"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Orange overlay card at bottom-left */}
            <div
              className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-[280px]
                         z-10 bg-[#F06535] rounded-xl p-5"
            >
              <p className="font-extrabold text-white text-lg leading-tight mb-1">
                We Provide Best Bus For You
              </p>
              <p className="text-white/80 text-xs mb-3 leading-relaxed">
                Comfort, safety, and punctuality on every route.
              </p>
              <Link
                href="/destinations"
                className="inline-flex items-center gap-1.5 text-white font-bold text-xs
                           underline underline-offset-2 hover:no-underline transition-all"
              >
                View Products →
              </Link>
            </div>
          </div>

          {/* ── Right: Stats ────────────────────────────────── */}
          <div>
            <p className="inline-flex items-center gap-2 text-[#F06535] font-bold text-xs tracking-[0.25em] uppercase mb-4">
              <span className="inline-block w-6 h-0.5 bg-[#F06535]" />
              Why Choose Us
            </p>

            <h2
              id="why-heading"
              className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-white
                         leading-[1.12] mb-6"
            >
              Your Journey, Our{" "}
              <span className="text-[#F06535]">Responsibility</span>
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-md">
              Every departure is tracked. Every driver is verified. Every
              vehicle is serviced. We don&apos;t move until everything is ready
              — because your trip depends on it.
            </p>

            {/* Counter grid */}
            <div className="grid grid-cols-2 gap-6">
              {STATS.map(({ icon: Icon, value, suffix, label }) => (
                <div
                  key={label}
                  className="bg-white/5 border border-white/8 rounded-xl p-5
                             hover:bg-white/8 transition-colors duration-300"
                >
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-lg
                                  bg-[#F06535]/15 mb-3"
                  >
                    <Icon size={20} className="text-[#F06535]" />
                  </div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-white mb-1">
                    <AnimatedCounter target={value} suffix={suffix} />
                  </p>
                  <p className="text-xs text-gray-400 font-medium">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
