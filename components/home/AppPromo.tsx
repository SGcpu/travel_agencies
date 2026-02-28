import Image from "next/image";
import Link from "next/link";
import { Smartphone } from "lucide-react";

export function AppPromo() {
  return (
    <section className="bg-white overflow-hidden" aria-label="App promotion">
      {/* Split container */}
      <div className="relative min-h-[380px] sm:min-h-[440px]">
        {/* Right black box */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[55%] bg-[#111111]" />

        {/* Content */}
        <div className="relative z-10 container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 py-16 lg:py-20">
            {/* Phone mockups — left side, floating over split boundary */}
            <div className="relative flex justify-center items-end h-64 sm:h-80 lg:h-[360px]">
              {/* Back phone */}
              <div
                className="absolute left-[10%] sm:left-[15%] bottom-0 w-[120px] sm:w-[145px]
                            rounded-[2rem] overflow-hidden shadow-2xl
                            rotate-[-8deg] translate-y-4 border-4 border-white/30"
              >
                <Image
                  src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=300&q=80"
                  alt="App screen"
                  width={145}
                  height={295}
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Front phone */}
              <div
                className="relative w-[130px] sm:w-[155px] rounded-[2rem] overflow-hidden
                            shadow-[0_20px_60px_rgba(0,0,0,0.35)] border-4 border-white/40 z-10"
              >
                <Image
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&q=80"
                  alt="App screen booking"
                  width={155}
                  height={318}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Text — right (over black box) */}
            <div className="lg:py-6">
              <p className="inline-flex items-center gap-2 text-[#F06535] font-bold text-xs tracking-[0.25em] uppercase mb-4">
                <span className="inline-block w-6 h-0.5 bg-[#F06535]" />
                Mobile App
              </p>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-[1.12] mb-4">
                Find A JKTT <span className="text-[#F06535]">Near You</span>{" "}
                With Our App
              </h2>

              <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md">
                Search routes, compare seats, track your bus live, and book in
                under 60 seconds. Available on iOS and Android.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="#"
                  className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white/10
                             border border-white/20 hover:bg-white/15 transition-colors"
                >
                  <Smartphone size={20} className="text-white" />
                  <div>
                    <p className="text-[9px] text-white/60 uppercase tracking-wider">
                      Download on
                    </p>
                    <p className="text-white font-bold text-sm">App Store</p>
                  </div>
                </Link>

                <Link
                  href="#"
                  className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white/10
                             border border-white/20 hover:bg-white/15 transition-colors"
                >
                  <Smartphone size={20} className="text-white" />
                  <div>
                    <p className="text-[9px] text-white/60 uppercase tracking-wider">
                      Get it on
                    </p>
                    <p className="text-white font-bold text-sm">Google Play</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
