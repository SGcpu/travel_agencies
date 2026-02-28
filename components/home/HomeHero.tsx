"use client";

import Link from "next/link";
import Image from "next/image";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

const FADE_UP = { hidden: { opacity: 0, y: 36 }, show: { opacity: 1, y: 0 } };
const ease = "easeOut";

export function HomeHero() {
  return (
    <section
      className="relative min-h-[88vh] flex flex-col items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=2000&q=85"
          alt="Luxury Volvo charter bus on Indian highway"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,10,20,0.65) 0%, rgba(10,10,20,0.45) 50%, rgba(10,10,20,0.72) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-site w-full flex flex-col items-center text-center pt-32 pb-40 md:pb-48">
        {/* Badge */}
        <motion.span
          variants={FADE_UP}
          initial="hidden"
          animate="show"
          transition={{ delay: 0, duration: 0.6, ease }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                     bg-white/10 backdrop-blur-sm border border-white/20
                     text-white text-xs font-semibold tracking-widest uppercase mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#F06535] animate-pulse" />
          India&apos;s Premier Charter Service
        </motion.span>

        {/* H1 */}
        <motion.h1
          variants={FADE_UP}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.15, duration: 0.7, ease }}
          className="font-extrabold text-white text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem]
                     leading-[1.1] max-w-4xl tracking-tight mb-7"
        >
          We Are Best <span className="text-[#F06535]">JKTT</span>
          <br className="hidden sm:block" /> Service In The World
        </motion.h1>

        {/* Sub-heading */}
        <motion.p
          variants={FADE_UP}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.3, duration: 0.7, ease }}
          className="text-white/75 text-base md:text-lg max-w-xl leading-relaxed mb-10"
        >
          Luxury coaches, premium MPVs, and group traveller cruisers — all with
          professional drivers, AC, and GPS tracking across every Indian
          highway.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={FADE_UP}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.45, duration: 0.7, ease }}
          className="flex items-center gap-4 flex-wrap justify-center"
        >
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-full bg-[#F06535] text-white font-bold text-sm
                       tracking-wide shadow-[0_6px_24px_rgba(240,101,53,0.45)]
                       hover:bg-[#d4511f] transition-all duration-200
                       focus-visible:outline-2 focus-visible:outline-white"
          >
            Get Started →
          </Link>

          <button
            className="flex items-center gap-3 text-white font-semibold text-sm
                       hover:text-[#F06535] transition-colors duration-200 group"
            aria-label="Watch video"
          >
            <span
              className="flex items-center justify-center w-12 h-12 rounded-full
                         bg-white/15 backdrop-blur border border-white/25
                         group-hover:bg-[#F06535] group-hover:border-[#F06535]
                         transition-all duration-200"
            >
              <Play size={16} className="translate-x-0.5" />
            </span>
            Watch How It Works
          </button>
        </motion.div>
      </div>
    </section>
  );
}
