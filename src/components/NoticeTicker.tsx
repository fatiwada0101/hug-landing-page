"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function NoticeTicker() {
  return (
    <div className="bg-[#f6f0e4] text-[#725c31] py-2.5 px-4 sm:px-6 lg:px-8 border-b border-[#e9dfcb] text-xs">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-start sm:items-center gap-2.5 text-left min-w-0">
          {/* ADMISSIONS White Pill */}
          <span className="bg-[#e9ddc1] text-[#725c31] font-black uppercase text-[10px] tracking-wider px-2.5 py-0.5 rounded-full shadow-sm shrink-0">
            Admissions
          </span>

          <span className="text-[#725c31] text-xs font-medium leading-relaxed">
            Applications for the 2026/2027 academic session begin on 15 May 2026.{" "}
            <a
              href="https://portal.hug.edu.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-bold hover:text-[#123d29] transition-colors ml-1"
            >
              Apply now
            </a>
          </span>
        </div>

        <a
          href="https://portal.hug.edu.ng"
              target="_blank"
              rel="noopener noreferrer"
          className="shrink-0 hidden md:inline-flex items-center space-x-1 font-bold text-[11px] uppercase tracking-wider text-[#725c31] hover:text-[#123d29] transition-colors"
        >
          <span>Start Application</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}

