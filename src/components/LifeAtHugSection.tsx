"use client";

import React from "react";
import Image from "next/image";
import { 
  Building2, 
  Users, 
  Trophy, 
  Headphones, 
  Rocket, 
  FlaskConical 
} from "lucide-react";

const LIFE_FACETS = [
  { icon: <Building2 className="w-5 h-5 text-[#FF9A00]" />, label: "Campus life" },
  { icon: <Users className="w-5 h-5 text-[#FF9A00]" />, label: "Clubs & communities" },
  { icon: <Trophy className="w-5 h-5 text-[#FF9A00]" />, label: "Sports" },
  { icon: <Headphones className="w-5 h-5 text-[#FF9A00]" />, label: "Student support" },
  { icon: <Rocket className="w-5 h-5 text-[#FF9A00]" />, label: "Hostel accommodation" },
  { icon: <FlaskConical className="w-5 h-5 text-[#FF9A00]" />, label: "Learning spaces" },
];

export default function LifeAtHugSection() {
  return (
    <section id="life" className="py-14 sm:py-18 bg-[#fbf8f2] border-b border-[#ede7db]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Photo with "Belong" Orange Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-xs sm:max-w-sm h-80 sm:h-[420px] rounded-2xl overflow-hidden shadow-lg border-4 border-white">
              <Image
                src="/hug/slider/hug2.jpg"
                alt="Huda University campus"
                fill
                className="object-cover"
              />

              {/* Callout Box: Warm Orange #FF9A00 */}
              <div className="absolute bottom-0 right-0 bg-[#FF9A00] text-white p-4 sm:p-5 rounded-tl-2xl max-w-[200px] shadow-lg">
                <h4 className="text-lg sm:text-xl font-extrabold text-white leading-none mb-1">
                  Belong
                </h4>
                <p className="text-[11px] text-white/95 font-medium leading-snug">
                  Find your people, your rhythm and your place.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Content & 2x3 Grid */}
          <div className="lg:col-span-7 space-y-5">
            <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-[#019934]">
              Life at HUG
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
              University is more than a classroom.
            </h2>

            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-lg">
              A comfortable and convenient learning environment at Eastern Bypass, Sokoto Road, Gusau.
            </p>

            {/* 2x3 Grid with Warm Orange Icons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
              {LIFE_FACETS.map((facet, idx) => (
                <div
                  key={idx}
                  className="bg-white/80 hover:bg-white border border-[#e8e4dc] p-3.5 rounded-xl transition-all shadow-sm hover:shadow-md flex flex-col items-start justify-between min-h-[80px] group"
                >
                  <div className="mb-1.5 group-hover:scale-110 transition-transform">
                    {facet.icon}
                  </div>
                  <span className="text-xs font-bold text-gray-800 group-hover:text-[#019934] transition-colors">
                    {facet.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
