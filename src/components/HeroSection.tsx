"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, MapPin, Pause, Play } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { HEADER_SLIDES } from "@/data/university";
interface HeroSectionProps { onOpenApply: () => void; onOpenPortal: () => void; }
export default function HeroSection({ onOpenApply }: HeroSectionProps) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => {
      setReducedMotion(preference.matches);
      if (preference.matches) setPaused(true);
    };
    const updateVisibility = () => setPageVisible(document.visibilityState === "visible");
    updatePreference();
    updateVisibility();
    preference.addEventListener("change", updatePreference);
    document.addEventListener("visibilitychange", updateVisibility);
    return () => {
      preference.removeEventListener("change", updatePreference);
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  useEffect(() => {
    if (paused || !pageVisible) return;
    const timer = window.setInterval(() => {
      setSlideIndex(index => (index + 1) % HEADER_SLIDES.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [paused, pageVisible, slideIndex]);

  const slide = HEADER_SLIDES[slideIndex];
  return <section id="home" aria-labelledby="hero-heading" aria-roledescription="carousel" className="relative isolate bg-[#052f21] text-white overflow-hidden">
    <div className="absolute inset-0 -z-20 lg:left-[28%]" aria-hidden="true">
      <Image src={HEADER_SLIDES[(slideIndex + 1) % HEADER_SLIDES.length].image} alt="" fill loading="eager" sizes="(max-width: 1024px) 100vw, 75vw" className="invisible pointer-events-none object-cover"/>
      <AnimatePresence initial={false}>
        <motion.div key={slide.image} className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reducedMotion ? 0 : 1.2, ease: "easeInOut" }}>
          <motion.div className="absolute inset-0" initial={{ scale: reducedMotion ? 1 : 1.04 }} animate={{ scale: 1 }} transition={{ duration: reducedMotion ? 0 : 7, ease: "linear" }}>
            <Image src={slide.image} alt="" fill priority={slideIndex === 0} loading="eager" sizes="(max-width: 1024px) 100vw, 75vw" className="object-cover object-center"/>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
    <div className="absolute inset-0 -z-10 hero-overlay"/>
    <div className="absolute inset-0 -z-10 hero-atmosphere pointer-events-none"/>
    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-14 pb-40 sm:pt-20 sm:pb-40 lg:pt-24 lg:pb-32 w-full min-h-[600px] lg:min-h-[660px] flex items-center">
      <div className="max-w-xl space-y-7">
        <div className="flex items-center gap-3 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-[#e7ce99]"><span className="h-px w-8 bg-[#d5ac5e]"/>Huda University Gusau</div>
        <h1 id="hero-heading" className="text-[42px] sm:text-6xl lg:text-[72px] font-extrabold tracking-[-0.045em] leading-[1.05]">Where the<br/>future <span className="text-[#e5bc71]">begins.</span></h1>
        <p className="text-sm sm:text-base leading-[1.85] text-[#d1e1d7] max-w-md">Build your future at Huda University Gusau. Explore undergraduate study across Science &amp; Computing, Allied Health, and Management &amp; Social Sciences.</p>
        <div className="flex flex-col sm:flex-row gap-3 pt-1"><a href="/#programmes" className="inline-flex items-center justify-center gap-5 rounded-xl bg-[#edb65b] hover:bg-[#f6c774] text-[#163b29] px-6 py-4 text-sm font-extrabold shadow-lg shadow-black/10 transition-colors">Explore programmes<ArrowRight aria-hidden="true" className="w-4 h-4"/></a><a href="https://portal.hug.edu.ng" className="inline-flex items-center justify-center gap-5 rounded-xl border border-white/30 bg-white/[0.04] hover:bg-white/10 text-white px-6 py-4 text-sm font-semibold backdrop-blur-sm transition-colors">Apply to Huda<ArrowUpRight aria-hidden="true" className="w-4 h-4"/></a></div>
        <div className="flex items-center gap-2 text-[11px] text-[#abc6b6] pt-1"><MapPin aria-hidden="true" className="w-3.5 h-3.5 shrink-0"/>Gusau, Zamfara State · Nigeria<span className="mx-1 text-white/30">/</span>Established 2023</div>
      </div>
    </div>
    <div className="absolute bottom-16 sm:bottom-20 right-5 sm:right-8 lg:right-12 left-5 sm:left-auto sm:max-w-sm flex items-end justify-end gap-5">
      <div className="hidden lg:block text-right max-w-[220px]"><p className="text-[9px] uppercase font-bold tracking-[0.18em] text-[#e5bc71] mb-1.5">In focus · Huda in pictures</p><p className="text-xs font-semibold leading-relaxed text-white/90">{slide.title}</p></div>
      <div className="flex items-center gap-3 rounded-full bg-[#052f21]/65 border border-white/20 backdrop-blur-md p-1.5"><button aria-label="Previous header image" onClick={() => setSlideIndex(index => (index - 1 + HEADER_SLIDES.length) % HEADER_SLIDES.length)} className="rounded-full p-2 hover:bg-white/15"><ChevronLeft aria-hidden="true" className="w-4 h-4"/></button><span aria-live={paused ? "polite" : "off"} className="text-[11px] font-semibold tabular-nums min-w-10 text-center">{String(slideIndex + 1).padStart(2,"0")} <span className="text-white/45">/ {HEADER_SLIDES.length}</span></span><button aria-label="Next header image" onClick={() => setSlideIndex(index => (index + 1) % HEADER_SLIDES.length)} className="rounded-full p-2 hover:bg-white/15"><ChevronRight aria-hidden="true" className="w-4 h-4"/></button><span className="h-4 w-px bg-white/20"/><button aria-label={paused ? "Play header slideshow" : "Pause header slideshow"} onClick={() => setPaused(value => !value)} className="rounded-full p-2 hover:bg-white/15">{paused ? <Play aria-hidden="true" className="w-4 h-4"/> : <Pause aria-hidden="true" className="w-4 h-4"/>}</button></div>
    </div>
  </section>;
}

