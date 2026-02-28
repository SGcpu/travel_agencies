import Image from "next/image";
import Link from "next/link";
import { Check, X as XMark } from "lucide-react";

const FLEET = [
  {
    name: "Toyota Innova Crysta",
    type: "Premium MPV",
    price: "₹4,500",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=85",
    specs: [
      { label: "Capacity", value: "6–7 pax", ok: true },
      { label: "WiFi", value: "On request", ok: false },
      { label: "AC", value: "Dual zone", ok: true },
      { label: "GPS Tracked", value: "Yes", ok: true },
      { label: "Luggage", value: "3 bags", ok: true },
      { label: "Driver", value: "Uniformed", ok: true },
    ],
  },
  {
    name: "Tempo Traveller Deluxe",
    type: "Mid-Size Group",
    price: "₹9,000",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=85",
    specs: [
      { label: "Capacity", value: "12–17 pax", ok: true },
      { label: "WiFi", value: "Hotspot", ok: true },
      { label: "AC", value: "Dual-zone roof", ok: true },
      { label: "GPS Tracked", value: "Yes", ok: true },
      { label: "Luggage", value: "6 bags", ok: true },
      { label: "Driver", value: "Uniformed", ok: true },
    ],
  },
  {
    name: "Volvo B11R Multi-Axle",
    type: "Luxury Coach",
    price: "₹22,000",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=85",
    specs: [
      { label: "Capacity", value: "30–45 pax", ok: true },
      { label: "WiFi", value: "Onboard", ok: true },
      { label: "AC", value: "Full cabin", ok: true },
      { label: "GPS Tracked", value: "Yes", ok: true },
      { label: "Luggage", value: "Hydraulic bays", ok: true },
      { label: "Attendant", value: "Included", ok: true },
    ],
  },
];

export function BusCollection() {
  return (
    <section
      className="section-padding bg-white"
      aria-labelledby="fleet-heading"
    >
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="inline-flex items-center gap-2 text-[#F06535] font-bold text-xs tracking-[0.25em] uppercase mb-3">
            <span className="inline-block w-6 h-0.5 bg-[#F06535]" />
            Our Fleet
            <span className="inline-block w-6 h-0.5 bg-[#F06535]" />
          </p>
          <h2
            id="fleet-heading"
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight"
          >
            Our <span className="text-[#F06535]">Bus Collection</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {FLEET.map((bus) => (
            <article
              key={bus.name}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden
                         shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={bus.image}
                  alt={bus.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Type badge */}
                <span
                  className="absolute top-3 left-3 bg-[#F06535] text-white text-[10px] font-bold
                                  tracking-wide uppercase px-2.5 py-1 rounded-full"
                >
                  {bus.type}
                </span>
              </div>

              {/* Body */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-extrabold text-gray-900 text-base leading-tight">
                    {bus.name}
                  </h3>
                  <div className="text-right shrink-0 ml-2">
                    <p className="text-[10px] text-gray-400 font-medium">
                      From
                    </p>
                    <p className="text-[#F06535] font-extrabold text-base">
                      {bus.price}
                      <span className="text-xs font-normal text-gray-400">
                        /day
                      </span>
                    </p>
                  </div>
                </div>

                {/* Specs grid */}
                <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 mb-5">
                  {bus.specs.map((spec) => (
                    <div key={spec.label} className="flex items-center gap-1.5">
                      {spec.ok ? (
                        <Check
                          size={12}
                          className="text-[#F06535] shrink-0"
                          strokeWidth={3}
                        />
                      ) : (
                        <XMark
                          size={12}
                          className="text-gray-300 shrink-0"
                          strokeWidth={3}
                        />
                      )}
                      <span className="text-[11px] text-gray-500">
                        <span className="font-semibold text-gray-700">
                          {spec.label}:
                        </span>{" "}
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl
                             bg-[#F06535] text-white font-bold text-sm
                             hover:bg-[#d4511f] transition-colors duration-200"
                >
                  Book Now →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
