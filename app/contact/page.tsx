import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { RevealText } from "@/components/animations/RevealText";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Start Planning",
  description:
    "Begin your bespoke journey with Aura Voyages. Tell us where your instincts point — we'll build the rest.",
};

interface Props {
  searchParams: Promise<{ destination?: string }>;
}

export default async function ContactPage({ searchParams }: Props) {
  const { destination } = await searchParams;

  return (
    <>
      {/* Page header */}
      <div className="pt-40 pb-16 bg-obsidian border-b border-white/5">
        <Container>
          <RevealText
            as="p"
            className="font-body text-xs tracking-[0.35em] uppercase text-gold mb-5"
          >
            Begin Your Journey
          </RevealText>
          <RevealText
            as="h1"
            className="font-display text-display-xl text-parchment-100 mb-6"
            variant="clip"
            delay={0.1}
          >
            Let&apos;s Build
            <br />
            <em className="text-gradient-gold not-italic">
              Something Remarkable.
            </em>
          </RevealText>
          <RevealText delay={0.2}>
            <p className="font-body text-base text-parchment-200/50 max-w-xl leading-relaxed">
              Every extraordinary journey begins with a conversation. Tell us
              what you&apos;re looking for — there are no wrong answers and no
              limits.
            </p>
          </RevealText>
        </Container>
      </div>

      <main className="section-padding bg-obsidian">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-12">
              {/* Contact details */}
              <div>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-6">
                  Direct Contact
                </p>
                <div className="space-y-5">
                  <a
                    href="mailto:hello@auravoyages.com"
                    className="flex items-center gap-4 group"
                    aria-label="Email us at hello@auravoyages.com"
                  >
                    <div className="w-9 h-9 border border-white/10 flex items-center justify-center text-parchment/30 group-hover:border-gold group-hover:text-gold transition-colors">
                      <Mail size={14} />
                    </div>
                    <span className="font-body text-sm text-parchment-200/60 group-hover:text-parchment-100 transition-colors">
                      hello@auravoyages.com
                    </span>
                  </a>

                  <a
                    href="tel:+12125550190"
                    className="flex items-center gap-4 group"
                    aria-label="Call us at +1 212 555 0190"
                  >
                    <div className="w-9 h-9 border border-white/10 flex items-center justify-center text-parchment/30 group-hover:border-gold group-hover:text-gold transition-colors">
                      <Phone size={14} />
                    </div>
                    <span className="font-body text-sm text-parchment-200/60 group-hover:text-parchment-100 transition-colors">
                      +1 212 555 0190
                    </span>
                  </a>

                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 border border-white/10 flex items-center justify-center text-parchment/20">
                      <MapPin size={14} />
                    </div>
                    <span className="font-body text-sm text-parchment-200/40">
                      New York · London · Singapore
                    </span>
                  </div>
                </div>
              </div>

              {/* Response promise */}
              <div className="border border-white/5 p-6">
                <p className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-4">
                  Our Promise
                </p>
                <ul className="space-y-3 font-body text-sm text-parchment/45 leading-relaxed">
                  <li>→ Personal response within 24 hours</li>
                  <li>→ No call centres, no automated replies</li>
                  <li>→ Your dedicated planner handles everything</li>
                  <li>→ No obligation until you say yes</li>
                </ul>
              </div>

              {/* Trust signals */}
              <div>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-5">
                  Recognition
                </p>
                <div className="space-y-3">
                  {[
                    "Condé Nast Traveller — Top 50 Agencies 2025",
                    "Forbes Travel Guide Partner",
                    "ILTM Cannes Member Since 2010",
                    "ASTA Verified Travel Advisor",
                  ].map((signal) => (
                    <p
                      key={signal}
                      className="font-body text-xs text-parchment/30 border-l border-gold/20 pl-3"
                    >
                      {signal}
                    </p>
                  ))}
                </div>
              </div>
            </aside>

            {/* Form */}
            <div className="lg:col-span-2">
              <InquiryForm defaultDestination={destination} />
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
