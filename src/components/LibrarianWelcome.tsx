"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, Clock3 } from "lucide-react";

export default function LibrarianWelcome() {
  const [expanded, setExpanded] = useState(false);
  return (
    <section id="librarian-welcome" aria-labelledby="librarian-heading" className="py-14 sm:py-18 bg-[#fbf8f2] border-b border-[#ede7db]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-4 max-w-sm w-full mx-auto">
          <div className="relative aspect-[756/788] rounded-2xl overflow-hidden border-4 border-white shadow-[0_12px_40px_-16px_rgba(4,45,28,.2)]">
            <Image src="/hug/library/librarian.png" alt="Maryam Saleh, University Librarian at Huda University Gusau" fill sizes="(max-width: 1024px) 90vw, 33vw" className="object-cover object-top"/>
          </div>
          <div className="pt-4 text-center">
            <p className="font-extrabold text-[#153e2c]">Maryam Saleh</p>
            <p className="text-xs text-[#71806e] mt-1">University Librarian</p>
          </div>
        </div>
        <div className="lg:col-span-8 space-y-5">
          <p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-[#14814d]">Librarian’s Welcome Note</p>
          <h2 id="librarian-heading" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#153e2c] leading-tight">Welcome to Huda University Library.</h2>
          <p className="text-sm text-[#68776b] leading-relaxed">Dear our esteemed readers and researchers, it is my pleasure to welcome you to Library, Huda University Gusau. We are committed towards providing the needed essential and fundamental knowledge and information for research and lifelong learning.</p>
          <div id="librarian-full-message" hidden={!expanded} className="space-y-4 text-sm text-[#68776b] leading-relaxed">
            <p>The Library resources and services are geared toward meeting the information needs of faculty members, students and researchers.</p>
            <p>The University Library is a hybrid of print and e-resources with facilitating conditions for patrons to have access to variety of information resources and services.  The Library Staff are always working hard to ensure that our patrons are provided with diverse access to variety of resources and services.</p>
            <p>Thank you.</p>
          </div>
          <button onClick={() => setExpanded(value => !value)} aria-expanded={expanded} aria-controls="librarian-full-message" className="inline-flex items-center gap-2 min-h-11 text-xs font-bold text-[#087344]">
            {expanded ? "Read less" : "Read more"}<ChevronDown aria-hidden="true" className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`}/>
          </button>
          <div className="rounded-2xl bg-white border border-[#e2e8db] p-5 sm:p-6">
            <h3 className="flex items-center gap-2.5 text-sm font-extrabold text-[#153e2c] mb-4"><Clock3 aria-hidden="true" className="w-4 h-4 text-[#14814d]"/>Library Opening Hours</h3>
            <p className="text-xs sm:text-sm text-[#68776b] leading-relaxed">The Library is opened from 8:00am – 9:00pm on Mondays to Fridays, and 9:00am – 4:00pm on Saturdays.  The Library remains closed on Sundays and public holidays.</p>
            <p className="text-xs text-[#71806e] leading-relaxed mt-4 pt-4 border-t border-[#edf0e7]">NB: The library website (e-library) is opened and reachable round the clock and throughout globe.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
