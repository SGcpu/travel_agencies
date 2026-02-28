import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

const FEATURES = [
  { title: "Professional Drivers", desc: "Uniformed, GPS-trained, verified" },
  { title: "Clean Modern Fleet", desc: "AC serviced before every journey" },
  { title: "Real-Time Tracking", desc: "Live GPS on all vehicles" },
  { title: "24/7 Support", desc: "Dedicated road assistance line" },
];

export function AboutSection() {
  return (
    <section
      className="section-padding bg-white overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-14 lg:gap-20 items-center">
          {/* ── Left: Text ─────────────────────────────────── */}
          <div>
            {/* Sub-header */}
            <p className="inline-flex items-center gap-2 text-[#F06535] font-bold text-xs tracking-[0.25em] uppercase mb-4">
              <span className="inline-block w-6 h-0.5 bg-[#F06535]" />
              About JKTT
            </p>

            {/* H2 */}
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-gray-900 leading-[1.12] mb-6"
            >
              More Than 25 Years We Provide{" "}
              <span className="text-[#F06535]">JKTT</span> Service Across India
            </h2>

            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-md">
              From corporate conference transfers to cross-state wedding
              convoys, our fleet of Volvo coaches, Innova Crystas, and Tempo
              Travellers has carried over 2,640 satisfied families across every
              Indian highway since 2000.
            </p>

            {/* 2×2 feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {FEATURES.map((f) => (
                <div key={f.title} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-[#F06535] mt-0.5 shrink-0"
                  />
                  <div>
                    <p className="text-sm font-bold text-gray-800">{f.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg
                         bg-[#F06535] text-white font-bold text-sm tracking-wide
                         hover:bg-[#d4511f] transition-colors duration-200
                         shadow-[0_4px_18px_rgba(240,101,53,0.30)]"
            >
              More About Us →
            </Link>
          </div>

          {/* ── Right: Overlapping images ───────────────────── */}
          <div className="relative h-[440px] sm:h-[520px] lg:h-[580px]">
            {/* Main tall image */}
            <div className="absolute top-0 left-0 right-16 bottom-0 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=900&q=85"
                alt="Indian travelers boarding a luxury charter bus"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-center"
              />
            </div>

            {/* Secondary square image — bottom-right overlap */}
            <div
              className="absolute bottom-0 right-0 w-44 h-44 sm:w-52 sm:h-52
                         rounded-2xl overflow-hidden border-4 border-white shadow-xl z-10"
            >
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=85"
                alt="Professional bus driver"
                fill
                sizes="208px"
                className="object-cover object-center"
              />
            </div>

            {/* Floating badge — bottom-left */}
            <div
              className="absolute bottom-8 left-6 z-20 bg-white rounded-xl
                         shadow-[0_8px_32px_rgba(0,0,0,0.15)] px-5 py-4
                         flex items-center gap-3"
            >
              <span
                className="flex items-center justify-center w-12 h-12 rounded-xl
                           bg-[#F06535] text-white font-extrabold text-lg leading-none shrink-0"
              >
                25+
              </span>
              <div>
                <p className="font-extrabold text-gray-900 text-sm leading-tight">
                  Years
                </p>
                <p className="text-xs text-gray-500 mt-0.5">of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
