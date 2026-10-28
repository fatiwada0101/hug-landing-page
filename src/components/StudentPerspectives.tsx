"use client";

import React from "react";

const TESTIMONIALS = [
  {
    bg: "bg-[#019934] text-white",
    quoteColor: "text-white/40",
    quote: "I acknowledge the effort behind this major development for the state and the region.",
    avatarBg: "bg-white text-[#019934]",
    initial: "A",
    name: "Ahmad Longman Gusau",
    faculty: "Visitor",
  },
  {
    bg: "bg-[#FF9A00] text-white",
    quoteColor: "text-white/40",
    quote: "An excellent development preparing high-quality graduates to address global challenges.",
    avatarBg: "bg-[#019934] text-white",
    initial: "S",
    name: "Sara Maigona",
    faculty: "Student",
  },
  {
    bg: "bg-white text-gray-900 border border-gray-200/90 shadow-sm",
    quoteColor: "text-gray-300",
    quote: "Highly commendable development.",
    avatarBg: "bg-[#FF9A00] text-white",
    initial: "Z",
    name: "Almustapha Abdullahi",
    faculty: "Principal Developer",
  },
];

export default function StudentPerspectives() {
  return (
    <section className="py-14 sm:py-18 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-[#019934]">
            Community Perspectives
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Meet the people shaping HUG.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className={`${item.bg} rounded-2xl p-6 flex flex-col justify-between min-h-[220px] shadow-sm hover:shadow-md transition-all`}
            >
              <div className="space-y-3">
                <div className={`text-2xl font-serif font-black ${item.quoteColor} leading-none`}>
                  &ldquo;&ldquo;
                </div>
                <p className="text-sm sm:text-base font-bold leading-snug">
                  {item.quote}
                </p>
              </div>

              <div className="pt-5 flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-full ${item.avatarBg} font-black text-xs flex items-center justify-center shrink-0 shadow-sm`}>
                  <img src="/hug/testimonials/pic.jpg" alt="" className="w-full h-full rounded-full object-cover"/>
                </div>
                <div>
                  <div className="text-xs font-extrabold leading-tight">
                    {item.name}
                  </div>
                  <div className="text-[11px] opacity-80 leading-tight">
                    {item.faculty}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
