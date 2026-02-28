"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown, Bus, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Our Fleet", href: "/destinations", hasDropdown: true },
  { label: "Pages", href: "#", hasDropdown: true },
  { label: "Experiences", href: "/experiences" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const prevScrollY = useRef(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 60);
      setHidden(currentY > 120 && currentY > prevScrollY.current);
      prevScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        animate={{ y: hidden && !mobileOpen ? -100 : 0 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-glass-white shadow-[0_2px_24px_rgba(0,0,0,0.08)] border-b border-gray-100"
            : "bg-transparent",
        )}
        role="banner"
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-[72px] lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5"
              aria-label="JKTT India — Home"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#F06535]">
                <Bus size={20} className="text-white" strokeWidth={2.2} />
              </span>
              <span
                className={cn(
                  "text-xl font-extrabold tracking-tight transition-colors",
                  scrolled ? "text-gray-900" : "text-white",
                )}
              >
                <span className="text-[#F06535]">JKTT</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav
              aria-label="Main navigation"
              className="hidden lg:flex items-center gap-7"
            >
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "inline-flex items-center gap-1 text-sm font-semibold transition-colors duration-200 relative group",
                    scrolled
                      ? "text-gray-700 hover:text-[#F06535]"
                      : "text-white/90 hover:text-white",
                    pathname === item.href && "text-[#F06535]",
                  )}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown
                      size={14}
                      className="opacity-60 group-hover:rotate-180 transition-transform duration-200"
                    />
                  )}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-0.5 bg-[#F06535] transition-all duration-300",
                      pathname === item.href
                        ? "w-full"
                        : "w-0 group-hover:w-full",
                    )}
                  />
                </Link>
              ))}
            </nav>

            {/* Right CTA */}
            <div className="hidden lg:flex">
              <Link
                href="/contact"
                className="flex flex-col items-center px-6 py-2.5 rounded-lg bg-[#F06535] text-white
                           hover:bg-[#d4511f] transition-colors duration-200
                           shadow-[0_4px_18px_rgba(240,101,53,0.35)]"
              >
                <span className="flex items-center gap-1.5 text-sm font-bold tracking-wide">
                  <Phone size={14} /> Contact Us Now
                </span>
                <span className="text-[10px] text-white/80 font-normal mt-0.5">
                  +91 98765 43210
                </span>
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors",
                scrolled
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-white/10",
              )}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden bg-white border-t border-gray-100 shadow-lg"
            >
              <nav className="container-site py-4 flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.label + "m"}
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold transition-colors",
                      pathname === item.href
                        ? "bg-orange-50 text-[#F06535]"
                        : "text-gray-700 hover:bg-gray-50 hover:text-[#F06535]",
                    )}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown size={14} className="opacity-50" />
                    )}
                  </Link>
                ))}
                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-[#F06535] text-white font-bold text-sm"
                  >
                    <Phone size={14} /> Contact Us Now
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
