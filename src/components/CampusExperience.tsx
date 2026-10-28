"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Compass, Sparkles, MapPin, CheckCircle, ArrowRight } from "lucide-react";

interface CampusExperienceProps {
  onOpenTour: () => void;
}

const FACILITIES = [
  {
    id: "computing",
    title: "High-Performance Computing & Cyber Lab",
    category: "Science & Technology",
    description: "Equipped with state-of-the-art enterprise server racks, isolated red-team/blue-team cyber defense terminals, and gigabit fiber internet.",
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=1200&auto=format&fit=crop",
    stats: "60+ Dedicated Workstations",
  },
  {
    id: "nursing",
    title: "Clinical Nursing & Healthcare Simulation Unit",
    category: "Allied Health Sciences",
    description: "Mirrors an acute hospital ward with telemetry monitors, high-fidelity anatomical mannequins, and clinical triage stations.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop",
    stats: "Teaching Hospital Standard",
  },
  {
    id: "library",
    title: "University Central E-Library Commons",
    category: "Academic Infrastructure",
    description: "Fully digitalized knowledge center providing 24/7 access to over 500,000 global journals, quiet study cubicles, and seminar rooms.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200&auto=format&fit=crop",
    stats: "500,000+ E-Resources",
  },
  {
    id: "hostel",
    title: "On-Campus Gated Student Halls of Residence",
    category: "Student Living",
    description: "Comfortable, serene hostel living with round-the-clock solar electricity, uninterrupted water supply, and strict warden surveillance.",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1200&auto=format&fit=crop",
    stats: "24/7 Solar Powered",
  },
  {
    id: "sports",
    title: "Athletics Arena & Recreation Complex",
    category: "Campus Life & Wellness",
    description: "Multipurpose sports grounds fostering team spirit, inter-faculty sports festivals, basketball, football, and physical wellness.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
    stats: "Multipurpose Pitches",
  },
];

export default function CampusExperience({ onOpenTour }: CampusExperienceProps) {
  const [activeTab, setActiveTab] = useState(0);
  const current = FACILITIES[activeTab];

  return (
    <section id="campus" className="py-20 bg-slate-50 relative overflow-hidden border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-hug-green-700 bg-hug-green-100/70 border border-hug-green-200/80 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
              <Compass className="w-4 h-4" />
              <span>Campus Life & Infrastructure</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-hug-navy-950">
              A World-Class Ecosystem in Gusau
            </h2>

            <p className="text-gray-600 text-sm sm:text-base">
              Explore our peaceful, green, purpose-built campus along Eastern Bypass Road, designed to stimulate intellectual curiosity and foster community.
            </p>
          </div>

          <button
            onClick={onOpenTour}
            className="inline-flex items-center space-x-2 bg-hug-navy-900 hover:bg-hug-navy-950 text-white font-bold px-6 py-3.5 rounded-xl shadow-md text-xs sm:text-sm self-start md:self-auto group transition-all"
          >
            <Compass className="w-4 h-4 text-hug-gold-400 group-hover:rotate-45 transition-transform" />
            <span>Launch 360° Interactive Tour</span>
          </button>
        </div>

        {/* Tab Buttons */}
        <div className="flex overflow-x-auto pb-2 scrollbar-none gap-2 mb-8">
          {FACILITIES.map((fac, idx) => (
            <button
              key={fac.id}
              onClick={() => setActiveTab(idx)}
              className={`whitespace-nowrap px-4 py-3 rounded-xl text-xs font-bold transition-all ${
                activeTab === idx
                  ? "bg-hug-navy-900 text-white shadow-md ring-2 ring-hug-navy-900/20"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"
              }`}
            >
              {fac.title.split("&")[0]}
            </button>
          ))}
        </div>

        {/* Spotlight Showcase Feature */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-200/80 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Image */}
          <div className="lg:col-span-7 relative h-80 sm:h-96 lg:h-[480px]">
            <Image
              src={current.image}
              alt={current.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="bg-hug-gold-500 text-hug-navy-950 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                {current.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-2">
                {current.title}
              </h3>
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-hug-green-700">
                  Facility Spotlight
                </span>
                <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold px-3 py-1 rounded-full">
                  {current.stats}
                </span>
              </div>

              <h4 className="text-2xl font-serif font-bold text-hug-navy-950">
                {current.title}
              </h4>

              <p className="text-gray-600 text-sm leading-relaxed">
                {current.description}
              </p>

              <div className="space-y-2 pt-2 text-xs text-gray-700">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>24/7 Uninterrupted Hybrid Power Grid</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Monitored High-Speed Fiber Internet Connection</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Full Accreditation by Regulatory Bodies</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
              <div className="flex items-center text-xs text-gray-500">
                <MapPin className="w-3.5 h-3.5 mr-1 text-hug-green-700" />
                <span>Eastern Bypass Rd, Gusau</span>
              </div>

              <button
                onClick={onOpenTour}
                className="text-xs font-bold text-hug-navy-900 hover:text-hug-green-700 flex items-center"
              >
                <span>Tour This Facility</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

