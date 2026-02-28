"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/data/testimonials";
import { Container } from "@/components/ui/Container";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  const prev = () =>
    setActive((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((i) => (i + 1) % testimonials.length);

  return (
    <section
      className="section-padding bg-obsidian-900 border-t border-white/5 relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Background quote mark */}
      <div
        className="absolute -top-8 -left-4 opacity-[0.03] pointer-events-none select-none"
        aria-hidden="true"
      >
        <Quote size={300} />
      </div>

      <Container size="narrow">
        <div className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Client Voices
          </p>
          <h2
            id="testimonials-heading"
            className="font-display text-display-lg text-parchment-100"
          >
            Journeys That
            <br />
            <em className="text-gradient-gold not-italic">
              Speak For Themselves
            </em>
          </h2>
        </div>

        {/* Testimonial carousel */}
        <div className="relative min-h-[280px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-center"
            >
              {/* Stars */}
              <div
                className="flex items-center justify-center gap-1 mb-8"
                aria-label={`${current.rating} out of 5 stars`}
              >
                {Array.from({ length: current.rating }).map((_, i) => (
                  <span
                    key={i}
                    className="text-gold text-sm"
                    aria-hidden="true"
                  >
                    ★
                  </span>
                ))}
              </div>

              <blockquote>
                <p className="font-display text-xl lg:text-2xl text-parchment-100 leading-relaxed italic mb-10">
                  &ldquo;{current.quote}&rdquo;
                </p>
              </blockquote>

              {/* Author */}
              <div className="flex flex-col items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gold/20">
                  <Image
                    src={current.avatar}
                    alt={current.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <p className="font-display text-base text-parchment-100">
                    {current.name}
                  </p>
                  <p className="font-body text-xs text-parchment/40 tracking-widest uppercase">
                    {current.location} · {current.destination}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-10 h-10 border border-white/10 flex items-center justify-center text-parchment/40 hover:text-gold hover:border-gold transition-colors"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dots */}
          <div
            className="flex gap-2"
            role="tablist"
            aria-label="Testimonial navigation"
          >
            {testimonials.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === active}
                aria-label={`Testimonial ${i + 1}`}
                onClick={() => setActive(i)}
                className={`h-px transition-all duration-300 ${
                  i === active ? "w-8 bg-gold" : "w-4 bg-parchment/20"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next testimonial"
            className="w-10 h-10 border border-white/10 flex items-center justify-center text-parchment/40 hover:text-gold hover:border-gold transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </Container>
    </section>
  );
}
