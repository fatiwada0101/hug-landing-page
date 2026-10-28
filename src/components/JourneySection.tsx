"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface JourneySectionProps {
  onOpenPortal: () => void;
}

const JOURNEY_STEPS = [
  { num: "01", title: "Discover", desc: "Find your degree major." },
  { num: "02", title: "Apply", desc: "Submit screening online." },
  { num: "03", title: "Admitted", desc: "Receive provisional letter." },
  { num: "04", title: "Learn", desc: "Pursue your chosen programme." },
  { num: "05", title: "Build", desc: "Hands-on projects & skills." },
  { num: "06", title: "Graduate", desc: "Complete your degree." },
  { num: "07", title: "Lead", desc: "Step into global industry." },
];

export default function JourneySection({ onOpenPortal }: JourneySectionProps) {
  return (
    <section id="journey" className="py-14 sm:py-18 fudma-dot-grid text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2 max-w-lg">
            <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF9A00]">
              Your Journey
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
              From your first application to graduation.
            </h2>
          </div>

          <p className="text-emerald-100/90 text-xs sm:text-sm max-w-sm sm:text-right">
            Every step is clear and supported from day one.
          </p>
        </div>

        {/* 7 Timeline Steps */}
        <div className="pt-4 border-t border-white/20">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {JOURNEY_STEPS.map((step, idx) => (
              <div key={idx} className="space-y-1 group">
                <div className="text-lg sm:text-xl font-extrabold text-[#FF9A00]">
                  {step.num}
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#FF9A00] transition-colors">
                  {step.title}
                </h3>
                <p className="text-[11px] text-emerald-100/80 leading-snug">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button: Warm Orange #FF9A00 */}
        <div className="pt-2">
          <button
            onClick={onOpenPortal}
            className="inline-flex items-center space-x-2 bg-[#FF9A00] hover:bg-[#e07d00] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md transition-all group"
          >
            <span>Proceed to your portal</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
