"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface LearningAndResearchProps {
  onOpenApply: () => void;
}

export default function LearningAndResearch({ onOpenApply }: LearningAndResearchProps) {
  return (
    <section id="research" className="py-14 sm:py-18 bg-[#01250e] text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Photo */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md h-64 sm:h-80 md:h-[360px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="/hug/slider/hug3.jpg"
                alt="Huda University learning environment"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-6 space-y-4">
            <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-[#FF9A00]">
              Learning &amp; Research
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Learn from people solving real problems.
            </h2>

            <p className="text-emerald-100/80 text-xs sm:text-sm leading-relaxed">
              Our vision is to contribute to society through education, learning and research at the highest international level of excellence.
            </p>

            <div className="space-y-2.5 pt-1 text-xs text-emerald-100/90">
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF9A00] shrink-0" />
                <span>Education, learning and research.</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF9A00] shrink-0" />
                <span>Partnerships beyond the university campus.</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF9A00] shrink-0" />
                <span>Community development at regional, national and global levels.</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenApply}
                className="inline-flex items-center space-x-2 bg-[#FF9A00] hover:bg-[#e07d00] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md transition-all group"
              >
                <span>Explore programmes</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
