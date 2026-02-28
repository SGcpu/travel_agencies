import Image from "next/image";
import { Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Arjun Malhotra",
    location: "Mumbai",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=85&fit=crop",
    text: "The Volvo coach for our company offsite was spotless, air-conditioned, and on time to the minute. The driver was professional and knew the Pune highway well. Will use again.",
    rating: 5,
  },
  {
    name: "Priya Singhania",
    location: "New Delhi",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=85&fit=crop",
    text: "We booked a 40-seater for our family wedding baraat. The bus was beautifully coordinated, and the attendant managed everything without a single complaint. Our guests are still talking about it.",
    rating: 5,
  },
  {
    name: "Vikram Sharma",
    location: "Chennai",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=85&fit=crop",
    text: "Booked Innova Crystas for an airport pick-up of 18 guests. All three vehicles arrived simultaneously, 20 minutes early. The live-tracking app is a game changer.",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} className="fill-[#F06535] text-[#F06535]" />
      ))}
    </div>
  );
}

export function HomeTestimonials() {
  return (
    <section
      className="relative bg-white pb-8"
      aria-labelledby="testimonials-heading"
    >
      {/* Dark parallax band */}
      <div className="relative h-[340px] sm:h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1566836610593-62a64888a216?w=2000&q=80"
            alt="Indian mountain highway"
            fill
            sizes="100vw"
            className="object-cover object-center"
            style={{ transform: "scale(1.08)" }}
          />
          <div className="absolute inset-0 bg-[#111111]/70" />
        </div>

        {/* Centred headline */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <p className="inline-flex items-center gap-2 text-[#F06535] font-bold text-xs tracking-[0.25em] uppercase mb-3">
            <span className="inline-block w-6 h-0.5 bg-[#F06535]" />
            Testimonials
            <span className="inline-block w-6 h-0.5 bg-[#F06535]" />
          </p>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl font-extrabold text-white leading-tight max-w-xl"
          >
            What Our <span className="text-[#F06535]">Customers</span> Say
          </h2>
        </div>
      </div>

      {/* Review cards — overlap the bottom of the parallax band */}
      <div className="container-site -mt-20 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((r) => (
            <div
              key={r.name}
              className="bg-white rounded-2xl p-6 shadow-[0_8px_40px_rgba(0,0,0,0.12)]
                         border border-gray-100 flex flex-col gap-4"
            >
              <Stars count={r.rating} />

              <p className="text-gray-600 text-sm leading-relaxed flex-1">
                &ldquo;{r.text}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={r.avatar}
                    alt={r.name}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{r.name}</p>
                  <p className="text-xs text-gray-400">{r.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
