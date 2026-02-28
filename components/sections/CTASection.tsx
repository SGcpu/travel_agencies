import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { RevealText } from "@/components/animations/RevealText";

export function CTASection() {
  return (
    <section className="relative overflow-hidden" aria-labelledby="cta-heading">
      {/* Full-bleed background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=2000&q=85"
          alt="Aerial view of a pristine turquoise lagoon"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-obsidian/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-transparent to-obsidian" />
      </div>

      <div className="relative z-10 section-padding container-luxury text-center">
        <RevealText
          as="p"
          className="font-body text-xs tracking-[0.35em] uppercase text-gold mb-6"
        >
          Your Journey Awaits
        </RevealText>

        <RevealText
          as="h2"
          id="cta-heading"
          className="font-display text-display-xl text-parchment-100 mb-6 max-w-2xl mx-auto"
          variant="clip"
          delay={0.1}
        >
          Every Remarkable Journey
          <br />
          <em className="text-gradient-gold not-italic">
            Begins With a Conversation.
          </em>
        </RevealText>

        <RevealText delay={0.2}>
          <p className="font-body text-base text-parchment-200/60 max-w-lg mx-auto mb-12 leading-relaxed">
            Tell us where your instincts point. We&apos;ll craft a journey that
            exceeds even what you imagined.
          </p>
        </RevealText>

        <RevealText delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Begin Your Journey
            </Button>
            <Button href="/about" variant="ghost" size="lg">
              Our Philosophy
            </Button>
          </div>
        </RevealText>

        {/* Trust signal strip */}
        <RevealText
          delay={0.4}
          className="mt-16 pt-10 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 lg:gap-12"
        >
          {[
            "Condé Nast Traveller — Top 50 Agencies",
            "Forbes Travel Guide Partner",
            "ILTM Cannes Member",
          ].map((signal) => (
            <span
              key={signal}
              className="font-body text-xs tracking-widest uppercase text-parchment/25"
            >
              {signal}
            </span>
          ))}
        </RevealText>
      </div>
    </section>
  );
}
