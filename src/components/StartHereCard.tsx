"use client";

import { useState } from "react";
import { ArrowRight, BookOpen, GraduationCap, Headphones, Landmark, Search } from "lucide-react";

interface StartHereCardProps { onOpenPortal: () => void; onOpenApply: () => void; onSearch: (query: string) => void; }
const quickLinks = [
  { title: "About HUG", description: "Our university, mission and people", href: "/#about", icon: Landmark },
  { title: "Programmes", description: "Find your undergraduate degree", href: "/#programmes", icon: BookOpen },
  { title: "Admissions", description: "Your next steps to joining Huda", href: "/#admissions", icon: GraduationCap },
  { title: "Contact & Support", description: "Speak with our university team", href: "/#contact", icon: Headphones },
];
export default function StartHereCard({ onSearch }: StartHereCardProps) {
  const [query, setQuery] = useState("");
  return <section id="start" aria-labelledby="start-heading" className="relative z-30 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12 mb-8 sm:mb-12">
    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-[0_16px_60px_-20px_rgba(4,45,28,0.22)] border border-[#e4eae5] p-5 sm:p-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 mb-6">
        <div className="shrink-0"><p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#14814d] mb-2">Start your journey</p><h2 id="start-heading" className="text-xl sm:text-2xl font-extrabold text-[#153e2c] tracking-tight">How can we help you?</h2></div>
        <form onSubmit={event => { event.preventDefault(); onSearch(query.trim()); document.getElementById("programmes")?.scrollIntoView({ behavior: "smooth" }); }} role="search" className="relative w-full md:max-w-md">
          <label htmlFor="programme-search" className="sr-only">Search undergraduate programmes</label><Search aria-hidden="true" className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6c7d71]"/>
          <input id="programme-search" type="search" placeholder="Search programmes…" value={query} onChange={event => setQuery(event.target.value)} className="w-full bg-[#f6f8f5] border border-[#e2e8e1] rounded-xl py-3.5 pl-11 pr-24 text-sm text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#16814d]/30 focus:border-[#16814d]"/>
          <button className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-lg bg-[#07623e] hover:bg-[#03452b] text-white px-4 py-2 text-xs font-bold transition-colors">Search</button>
        </form>
      </div>
      <nav aria-label="University quick links" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-[#e9eee8] pt-5 gap-2 sm:gap-3">
        {quickLinks.map(link => <a key={link.title} href={link.href} className="group flex items-center gap-3 p-3 sm:p-4 rounded-xl hover:bg-[#f0f6ef] transition-colors"><span className="rounded-xl bg-[#edf5ed] p-2.5 text-[#087344] group-hover:bg-[#087344] group-hover:text-white transition-colors"><link.icon aria-hidden="true" className="w-5 h-5"/></span><span className="flex-1"><span className="block text-[13px] font-extrabold text-[#153e2c]">{link.title}</span><span className="block mt-1 text-[11px] leading-relaxed text-[#768076]">{link.description}</span></span><ArrowRight aria-hidden="true" className="w-4 h-4 text-[#8a9a8c] shrink-0 group-hover:translate-x-1 group-hover:text-[#087344] transition-transform"/></a>)}
      </nav>
    </div>
  </section>;
}
