"use client";

import Link from "next/link";
import {
  Bus,
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  Phone,
  Mail,
  MapPin,
  Send,
} from "lucide-react";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Our Fleet", href: "/destinations" },
  { label: "Experiences", href: "/experiences" },
  { label: "About Us", href: "/about" },
  { label: "Stories", href: "/stories" },
  { label: "Contact", href: "/contact" },
];

const SOCIALS = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-gray-400" aria-label="Site footer">
      <div className="container-site pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/8">
          {/* Col 1 - Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#F06535]">
                <Bus size={18} className="text-white" strokeWidth={2.2} />
              </span>
              <span className="text-xl font-extrabold tracking-tight text-white">
                Bus<span className="text-[#F06535]">Charter</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 mb-6 max-w-[220px]">
              India&apos;s trusted charter operator since 2000. Luxury coaches,
              premium MPVs, and group vehicles across every Indian highway.
            </p>
            <div className="flex gap-3">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-gray-400 hover:bg-[#F06535] hover:text-white hover:border-[#F06535] transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 - Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm mb-5 tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-gray-400 hover:text-[#F06535] transition-colors duration-200 hover:translate-x-1 inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 h-0.5 bg-[#F06535] transition-all duration-200 rounded" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 - Contact */}
          <div>
            <h3 className="text-white font-bold text-sm mb-5 tracking-wide">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-[#F06535] mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-0.5">
                    Phone
                  </p>
                  <a
                    href="tel:+919876543210"
                    className="text-sm text-gray-300 hover:text-[#F06535] transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-[#F06535] mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-0.5">
                    Email
                  </p>
                  <a
                    href="mailto:hello@JKTT.in"
                    className="text-sm text-gray-300 hover:text-[#F06535] transition-colors"
                  >
                    hello@JKTT.in
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[#F06535] mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-0.5">
                    Address
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    14, Transport Nagar,
                    <br />
                    New Delhi — 110020
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 4 - Newsletter */}
          <div>
            <h3 className="text-white font-bold text-sm mb-2 tracking-wide">
              Newsletter
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed mb-4">
              Get deal alerts, seasonal promo codes, and new route launches
              directly in your inbox.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-2"
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-lg bg-white/6 border border-white/10 text-sm text-white placeholder:text-gray-500 outline-none focus:border-[#F06535] transition-colors"
                aria-label="Email address for newsletter"
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-[#F06535] text-white font-bold text-sm hover:bg-[#d4511f] transition-colors duration-200"
              >
                <Send size={14} /> Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} JKTT India. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" },
              { label: "Cookie Policy", href: "/cookies" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-gray-300 transition-colors"
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
