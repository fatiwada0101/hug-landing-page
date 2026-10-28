"use client";

import React from "react";
import { 
  CalendarCheck2, 
  Cpu, 
  ShieldCheck, 
  Award, 
  Zap, 
  Users, 
  CheckCircle,
  Sparkles
} from "lucide-react";

const ADVANTAGES = [
  {
    icon: <CalendarCheck2 className="w-6 h-6 text-hug-green-700" />,
    title: "100% Strike-Free Calendar",
    description: "Your academic calendar is protected. Graduate precisely in 4 years (or 5 years for Nursing) with zero industrial strikes or institutional shutdowns.",
    badge: "Predictable Timeline",
  },
  {
    icon: <Cpu className="w-6 h-6 text-hug-navy-800" />,
    title: "Ultra-Modern Tech & Science Labs",
    description: "Hands-on training in isolated cyber threat simulation environments, molecular biology incubators, and high-fidelity clinical nursing mannequins.",
    badge: "Industry-Ready Skills",
  },
  {
    icon: <Zap className="w-6 h-6 text-hug-gold-600" />,
    title: "24/7 Solar & Hybrid Campus Power",
    description: "Round-the-clock uninterrupted electricity powering research labs, lecture halls, and student residence hostels alongside high-speed campus Wi-Fi.",
    badge: "Continuous Learning",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-hug-green-700" />,
    title: "Secure Gated Residential Campus",
    description: "Perimeter CCTV security, vetted hostel wardens, on-site campus health clinic, and serene residential quarters situated along Eastern Bypass, Gusau.",
    badge: "Peace of Mind",
  },
  {
    icon: <Users className="w-6 h-6 text-hug-navy-800" />,
    title: "1:12 Faculty-to-Student Mentorship",
    description: "Small seminar sizes where professors mentor undergraduates individually for capstone research, national competitions, and career placement.",
    badge: "Personalised Care",
  },
  {
    icon: <Award className="w-6 h-6 text-hug-gold-600" />,
    title: "Merit Scholarships & Flexible Fees",
    description: "Tuition fee payments structured in manageable semester installments, with merit scholarship schemes for top JAMB scorers and women in STEM.",
    badge: "Inclusive Access",
  },
];

export default function WhyChooseHUG() {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Oxford Ivy Dark Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#c5a059_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 text-hug-gold-400 bg-hug-gold-500/10 border border-hug-gold-400/30 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The HUG Advantage</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
            Designed for Academic Distinction
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            We bridge the gap between theoretical knowledge and real-world industrial impact, creating an optimal environment for future leaders.
          </p>
        </div>

        {/* 6 Grid Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ADVANTAGES.map((adv, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 hover:border-hug-gold-500/50 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-start mb-5">
                  <div className="p-3 bg-white/10 rounded-xl group-hover:bg-hug-gold-500 group-hover:text-hug-navy-950 transition-colors">
                    {adv.icon}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-hug-gold-400 bg-hug-gold-500/15 border border-hug-gold-500/30 px-2.5 py-1 rounded-full">
                    {adv.badge}
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-white mb-2.5 group-hover:text-hug-gold-300 transition-colors">
                  {adv.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {adv.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center text-xs text-slate-400 group-hover:text-white transition-colors">
                <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 shrink-0" />
                <span>Statutory Compliance Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

