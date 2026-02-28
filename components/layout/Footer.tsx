import Link from "next/link";
import { Instagram, Linkedin, Facebook } from "lucide-react";

const footerLinks = {
  Destinations: [
    { label: "Amalfi Coast", href: "/destinations/amalfi-coast-italy" },
    { label: "Maldives", href: "/destinations/maldives-private-atoll" },
    { label: "Patagonia", href: "/destinations/patagonia-expedition" },
    { label: "Kyoto & Beyond", href: "/destinations/kyoto-ryokan-japan" },
    { label: "All Destinations", href: "/destinations" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Philosophy", href: "/about#philosophy" },
    { label: "Travel Stories", href: "/stories" },
    { label: "Press", href: "/press" },
  ],
  "Plan Your Trip": [
    { label: "How It Works", href: "/about#process" },
    { label: "Start Planning", href: "/contact" },
    { label: "FAQs", href: "/faq" },
    { label: "Sustainability", href: "/sustainability" },
  ],
};

const social = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
];

export function Footer() {
  return (
    <footer
      className="bg-obsidian-900 border-t border-gold-subtle"
      aria-label="Site footer"
    >
      <div className="container-luxury py-16 lg:py-24">
        {/* Top row */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex flex-col leading-none mb-6">
              <span className="font-display text-3xl tracking-tight text-parchment-100">
                AURA
              </span>
              <span className="font-body text-[10px] tracking-[0.35em] uppercase text-gold-light opacity-80 -mt-1">
                Voyages
              </span>
            </Link>

            <p className="font-body text-sm text-parchment-200/60 leading-relaxed max-w-xs">
              Bespoke luxury journeys for the discerning explorer. We craft
              private, transformative travel experiences in the world&apos;s
              most extraordinary places.
            </p>

            <div className="flex items-center gap-4 mt-8">
              {social.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 border border-white/10 flex items-center justify-center text-parchment-200/50 hover:text-gold hover:border-gold transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="lg:col-span-1">
              <h3 className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-5">
                {heading}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-body text-sm text-parchment-200/60 hover:text-parchment-100 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-parchment-200/30">
            © {new Date().getFullYear()} Aura Voyages. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {[
              { label: "Privacy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
              { label: "Cookies", href: "/cookies" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-body text-xs text-parchment-200/30 hover:text-parchment-200/60 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
