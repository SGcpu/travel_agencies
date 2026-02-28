"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxImageProps {
  src: string;
  alt: string;
  /** How far (%) the image travels relative to the scroll distance. 20 = subtle, 40 = dramatic */
  intensity?: number;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
}

export function ParallaxImage({
  src,
  alt,
  intensity = 20,
  className,
  imageClassName,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: ParallaxImageProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const wrap = wrapRef.current;
    const img = imgRef.current;
    if (!wrap || !img || prefersReduced) return;

    const ctx = gsap.context(() => {
      // Scale the inner image slightly so parallax doesn't reveal edges
      gsap.set(img, { scale: 1 + intensity / 80 });

      gsap.to(img, {
        yPercent: -intensity,
        ease: "none",
        scrollTrigger: {
          trigger: wrap,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, [intensity, prefersReduced]);

  return (
    <div ref={wrapRef} className={cn("relative overflow-hidden", className)}>
      <div ref={imgRef} className="absolute inset-0 will-change-transform">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn("object-cover", imageClassName)}
        />
      </div>
    </div>
  );
}
