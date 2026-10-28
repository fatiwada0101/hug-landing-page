"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const WELCOME_PARAGRAPHS = [
  "I am thrilled to use this medium to welcome  scholars, students and stakeholders on educational journey, who are desirous in identifying with Huda University, Gusau - where the future begins and quality education is, certainly, assured.",
  "We are committed to providing the needed essentials of life, which is not only limited to sound educational well-being, but acquisition of skills and discipline. These are essential qualities to make our products stand the test of time, enriched with competitive prowess.",
  "Huda University Gusau assures scholars and students alike, a conducive atmosphere of learning and teaching, as well as meaningful research, for community development. Be rest assured that Huda University is a place where yearnings and aspirations of life are achieved, by dint of hard work and dedication. Huda is for all.",
];

export default function ViceChancellorWelcome() {
  const [expanded, setExpanded] = useState(false);
  return (
    <section id="vc" aria-labelledby="vc-heading" className="py-14 sm:py-18 bg-[#fbf8f2] border-t border-b border-[#ede7db]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 sm:w-72 h-80 sm:h-96 rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-slate-100">
              <Image src="/hug/team/registrar.jpg" alt="Prof. Mohammed Zubairu, Vice-Chancellor" fill sizes="(max-width: 640px) 256px, 288px" className="object-cover object-top"/>
              <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/95 p-1 shadow-md">
                <Image src="/hug/favicon.png" alt="HUG Crest" width={34} height={34} className="object-contain"/>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-4 lg:pt-3">
            <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-[#019934]">Vice-Chancellor&apos;s Welcome</p>
            <h2 id="vc-heading" className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 leading-snug tracking-tight">Welcome to Huda University Gusau</h2>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{WELCOME_PARAGRAPHS[0]}</p>
            <div id="vc-full-message" hidden={!expanded} className="space-y-4">
              {WELCOME_PARAGRAPHS.slice(1).map(paragraph => <p key={paragraph} className="text-gray-600 text-xs sm:text-sm leading-relaxed">{paragraph}</p>)}
            </div>
            <button aria-expanded={expanded} aria-controls="vc-full-message" onClick={() => setExpanded(value => !value)} className="inline-flex min-h-11 items-center gap-2 rounded-lg text-xs sm:text-sm font-bold text-[#087344] hover:text-[#034a2f] transition-colors">
              {expanded ? "Read less" : "Read more"}<ChevronDown aria-hidden="true" className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`}/>
            </button>
            <div className="pt-3 border-t border-[#e7e1d5]">
              <p className="font-extrabold text-gray-900 text-sm sm:text-base">Prof. Mohammed Zubairu</p>
              <p className="text-xs text-gray-500 font-medium mt-1">B.Sc, MBA, M.Sc, PhD · Vice-Chancellor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
