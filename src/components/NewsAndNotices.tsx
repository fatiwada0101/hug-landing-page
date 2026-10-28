"use client";

import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface NewsAndNoticesProps {
  onOpenApply: () => void;
}

export default function NewsAndNotices({ onOpenApply }: NewsAndNoticesProps) {
  return (
    <section id="news" className="py-14 sm:py-18 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div className="space-y-1.5">
            <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-[#019934]">
              News &amp; Notices
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
              What&apos;s happening at HUG
            </h2>
          </div>

          <a
            href="/#news"
            className="text-xs sm:text-sm font-bold text-[#019934] hover:underline flex items-center self-start sm:self-auto"
          >
            <span>View all news</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>

        <details className="bg-[#fbf8f2] border border-[#ede7db] rounded-2xl p-5 text-xs sm:text-sm text-gray-600 leading-relaxed"><summary className="cursor-pointer font-extrabold text-gray-900">Maiden matriculation: 311 students and our first Chancellor</summary><div className="pt-4 space-y-3"><p>The ceremony was attended by former Chief of Army Staff Gen. Aliyu Muhammad Gusau, former Minister of State for Education Alh. Bello Usman Tafidan Gusau, and Ambassador Adamu Daura. The Emir of Zazzau, His Highness Amb. Ahmad Nuhu Bamalli, was installed as the first Chancellor, accompanied by the traditional rulers of the Zazzau Emirate Council.</p><p>Zamfara State’s Governor was represented by the Commissioner of Education, Science and Technology, Mal. Wadatau Madawaki. The Emir of Gusau, HRH Alh. (Dr.) Ibrahim Bello OFR, joined politicians, academics, traditional rulers and other dignitaries.</p></div></details>
        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Warm Orange Notice Card (#FF9A00) */}
          <div className="lg:col-span-6 bg-[#FF9A00] text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-md relative overflow-hidden">
            <div className="space-y-4 relative z-10">
              <span className="inline-block bg-white text-[#FF9A00] text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                Admissions
              </span>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                Application for admission, 2026/2027
              </h3>

              <p className="text-white/95 text-xs sm:text-sm leading-relaxed max-w-md">
                Online applications for the 2026/2027 academic session begin on 15 May 2026. Prospective applicants can visit the university admission portal.
              </p>
            </div>

            <div className="pt-6 relative z-10">
              <button
                onClick={onOpenApply}
                className="inline-flex items-center space-x-1.5 font-extrabold text-xs sm:text-sm text-white hover:text-amber-100 transition-colors group"
              >
                <span>Read the notice</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Numbered Bulletin Cards */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-3">
            {/* Bulletin Card 01 */}
            <div className="bg-white border border-gray-200/90 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all flex items-start space-x-5 group">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#019934] shrink-0 pt-0.5">
                01
              </div>
              <div className="space-y-1.5 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    University licensure · 15 May 2023
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#019934] transition-colors" />
                </div>
                <h4 className="text-xs sm:text-sm font-extrabold text-gray-900 group-hover:text-[#019934] transition-colors leading-snug">
                  NUC and Federal Ministry of Education issue operational approval to Huda University Gusau
                </h4>
              </div>
            </div>

            {/* Bulletin Card 02 */}
            <div className="bg-white border border-gray-200/90 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all flex items-start space-x-5 group">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#019934] shrink-0 pt-0.5">
                02
              </div>
              <div className="space-y-1.5 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    University news
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#019934] transition-colors" />
                </div>
                <h4 className="text-xs sm:text-sm font-extrabold text-gray-900 group-hover:text-[#019934] transition-colors leading-snug">
                  Huda University matriculates 311 students at its maiden matriculation ceremony
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
