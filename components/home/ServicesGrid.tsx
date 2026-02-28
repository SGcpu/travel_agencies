import Link from "next/link";
import {
  Building2,
  Tag,
  Music2,
  Plane,
  Landmark,
  GraduationCap,
} from "lucide-react";

const SERVICES = [
  {
    icon: Building2,
    title: "Corporate Transfers",
    desc: "Office commutes, offsite conferences, and employee shuttle programmes with dedicated fleets.",
  },
  {
    icon: Tag,
    title: "Discount & Promo",
    desc: "Seasonal deals and group booking discounts. Save up to 30% on advance charter bookings.",
    highlight: true,
  },
  {
    icon: Music2,
    title: "Wedding Convoys",
    desc: "Decorated Volvo coaches and Innova fleets for baraat processions and guest transfers.",
  },
  {
    icon: Plane,
    title: "Airport Transfers",
    desc: "Meet-and-greet airport pickups for groups, with flight-tracking and zero waiting charges.",
  },
  {
    icon: Landmark,
    title: "Pilgrimage Tours",
    desc: "Char Dham, Vaishno Devi, Tirupati — fully supported multi-day pilgrimage packages.",
  },
  {
    icon: GraduationCap,
    title: "School Excursions",
    desc: "Safe, insured, AC coaches for student day trips with verified drivers and attendant staff.",
  },
];

export function ServicesGrid() {
  return (
    <section
      className="section-padding bg-[#f8f8f8]"
      aria-labelledby="services-heading"
    >
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="inline-flex items-center gap-2 text-[#F06535] font-bold text-xs tracking-[0.25em] uppercase mb-3">
            <span className="inline-block w-6 h-0.5 bg-[#F06535]" />
            Our Services
            <span className="inline-block w-6 h-0.5 bg-[#F06535]" />
          </p>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight"
          >
            We Provide Best Services For{" "}
            <span className="text-[#F06535]">You</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(({ icon: Icon, title, desc, highlight }) => (
            <article
              key={title}
              className={`group relative rounded-2xl p-7 flex flex-col gap-4
                          transition-all duration-300 ${
                            highlight
                              ? "bg-[#F06535] text-white shadow-[0_8px_32px_rgba(240,101,53,0.35)]"
                              : "bg-white border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1"
                          }`}
            >
              {/* Icon */}
              <div
                className={`flex items-center justify-center w-12 h-12 rounded-xl
                            ${highlight ? "bg-white/20" : "bg-orange-50"}`}
              >
                <Icon
                  size={22}
                  className={highlight ? "text-white" : "text-[#F06535]"}
                />
              </div>

              <div className="flex-1">
                <h3
                  className={`text-base font-extrabold mb-2 ${
                    highlight ? "text-white" : "text-gray-900"
                  }`}
                >
                  {title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    highlight ? "text-white/80" : "text-gray-500"
                  }`}
                >
                  {desc}
                </p>
              </div>

              <Link
                href="/contact"
                className={`inline-flex items-center gap-1 text-xs font-bold transition-colors ${
                  highlight
                    ? "text-white underline underline-offset-2 hover:no-underline"
                    : "text-[#F06535] hover:text-[#d4511f]"
                }`}
              >
                Learn More →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
