"use client";

import { useState } from "react";
import { MapPin, Navigation, Calendar, Users, Search } from "lucide-react";

export function BookingWidget() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [seats, setSeats] = useState("1");

  return (
    /* Wrapper: pushes the card to straddle the hero/white-section boundary */
    <div className="relative z-20 container-site -mt-[3.5rem] md:-mt-[4rem] mb-0">
      <div
        className="w-full bg-white rounded-2xl shadow-[0_8px_48px_rgba(0,0,0,0.14)]
                   border border-gray-100 overflow-hidden"
      >
        <div className="flex flex-col md:flex-row items-stretch">
          {/* From */}
          <WidgetField
            icon={<MapPin size={16} className="text-[#F06535]" />}
            label="From"
          >
            <input
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              placeholder="Departure city"
              className="w-full text-sm font-medium text-gray-800 placeholder:text-gray-400
                         outline-none bg-transparent"
            />
          </WidgetField>

          <Divider />

          {/* To */}
          <WidgetField
            icon={<Navigation size={16} className="text-[#F06535]" />}
            label="To"
          >
            <input
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder="Destination city"
              className="w-full text-sm font-medium text-gray-800 placeholder:text-gray-400
                         outline-none bg-transparent"
            />
          </WidgetField>

          <Divider />

          {/* When */}
          <WidgetField
            icon={<Calendar size={16} className="text-[#F06535]" />}
            label="When"
          >
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full text-sm font-medium text-gray-800 outline-none bg-transparent
                         [color-scheme:light] cursor-pointer"
              min={new Date().toISOString().split("T")[0]}
            />
          </WidgetField>

          <Divider />

          {/* Seats */}
          <WidgetField
            icon={<Users size={16} className="text-[#F06535]" />}
            label="Seats"
          >
            <select
              value={seats}
              onChange={(e) => setSeats(e.target.value)}
              className="w-full text-sm font-medium text-gray-800 outline-none bg-transparent cursor-pointer"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 12, 17, 25, 32, 40, 45].map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? "Seat" : "Seats"}
                </option>
              ))}
            </select>
          </WidgetField>

          {/* Submit */}
          <button
            className="flex items-center justify-center gap-2 m-3 px-7 py-4 rounded-xl
                       bg-[#F06535] text-white font-bold text-sm tracking-wide
                       hover:bg-[#d4511f] transition-colors duration-200
                       shadow-[0_4px_18px_rgba(240,101,53,0.35)]
                       focus-visible:outline-2 focus-visible:outline-[#F06535]
                       shrink-0 whitespace-nowrap"
            aria-label="Search available buses"
          >
            <Search size={15} />
            Search Buses
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Sub-components ─────────────────────────────────────────── */

function WidgetField({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 flex-1 px-5 py-4 min-w-0">
      <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-orange-50">
        {icon}
      </span>
      <div className="flex flex-col gap-0.5 min-w-0 flex-1">
        <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400">
          {label}
        </span>
        {children}
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div
      className="hidden md:block self-stretch w-px bg-gray-100 my-3"
      aria-hidden="true"
    />
  );
}
