import type { Metadata } from "next";
import {
  Plus_Jakarta_Sans,
  Cormorant_Garamond,
  DM_Serif_Display,
} from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/animations/SmoothScroll";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
  preload: true,
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
  preload: false,
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://auravoyages.com"),
  title: {
    default: "Aura Voyages — Cinematic Luxury Travel",
    template: "%s | Aura Voyages",
  },
  description:
    "Bespoke luxury travel experiences for the discerning explorer. Private villas, expert guides, and journeys that transform. Amalfi Coast, Maldives, Patagonia, Kenya, Japan, Morocco.",
  keywords: [
    "luxury travel",
    "bespoke travel",
    "private tours",
    "luxury safari",
    "high-end travel agency",
    "premium travel",
    "exclusive destinations",
  ],
  authors: [{ name: "Aura Voyages" }],
  creator: "Aura Voyages",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://auravoyages.com",
    siteName: "Aura Voyages",
    title: "Aura Voyages — Cinematic Luxury Travel",
    description:
      "Bespoke luxury travel experiences for the discerning explorer.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aura Voyages — Cinematic Luxury Travel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aura Voyages — Cinematic Luxury Travel",
    description:
      "Bespoke luxury travel experiences for the discerning explorer.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${cormorant.variable} ${dmSerif.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              name: "Aura Voyages",
              url: "https://auravoyages.com",
              description:
                "Bespoke luxury travel experiences for the discerning explorer.",
              areaServed: "Worldwide",
              priceRange: "$$$",
              telephone: "+1-212-555-0190",
              email: "hello@auravoyages.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "New York",
                addressRegion: "NY",
                addressCountry: "US",
              },
            }),
          }}
        />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
