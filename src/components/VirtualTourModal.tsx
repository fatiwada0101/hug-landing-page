"use client";

import React, { useState } from "react";
import { X, MapPin, Compass, Play, ChevronLeft, ChevronRight, ShieldCheck, Sparkles } from "lucide-react";
import Image from "next/image";

interface VirtualTourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TOUR_SPOTS = [
  {
    id: "ict-labs",
    title: "High-Performance Computing & Cyber Lab",
    faculty: "Faculty of Science and Computing",
    description: "Equipped with gigabit fiber, isolated defensive cybersecurity pods, server racks, and AI workstations for practical software development.",
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=1200&auto=format&fit=crop",
    features: ["Dedicated Cyber Threat Range", "1Gbps Fiber Backbone", "Linux & Cloud Virtualisation"],
  },
  {
    id: "nursing-wards",
    title: "Clinical Nursing & Allied Health Simulation",
    faculty: "Faculty of Allied Health Sciences",
    description: "State-of-the-art clinical skills simulation unit mirroring an ICU, with anatomical training models, emergency crash carts, and telemetry monitors.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop",
    features: ["High-Fidelity Patient Mannequins", "Sterile Surgical Practicum Suite", "Triage & Vital Signs Station"],
  },
  {
    id: "elibrary",
    title: "Digital E-Library & Knowledge Commons",
    faculty: "University Central Services",
    description: "Centrally air-conditioned academic hub housing over 500,000 digital journals, collaborative study alcoves, and terminal research access.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200&auto=format&fit=crop",
    features: ["Direct Access to IEEE & ScienceDirect", "Quiet Graduate Research Carrels", "24/7 Solar Power Backup"],
  },
  {
    id: "hostels",
    title: "Secure On-Campus Student Residence Halls",
    faculty: "Student Affairs Division",
    description: "Comfortable, serene, fully serviced student rooms equipped with en-suite conveniences, reading tables, 24/7 security wardens, and solar lighting.",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1200&auto=format&fit=crop",
    features: ["Guaranteed 24/7 Hybrid Power", "CCTV Protected Perimeter", "Dedicated Common Rooms & Wi-Fi"],
  },
  {
    id: "sports-complex",
    title: "Athletics Arena & Recreation Complex",
    faculty: "Campus Life & Wellness",
    description: "Multipurpose sports grounds fostering holistic student wellness, inter-faculty football tournaments, basketball, and fitness activities.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
    features: ["Standard Football Pitch", "Basketball & Volleyball Courts", "Indoor Games Pavilion"],
  },
];

export default function VirtualTourModal({ isOpen, onClose }: VirtualTourModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  const current = TOUR_SPOTS[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TOUR_SPOTS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TOUR_SPOTS.length) % TOUR_SPOTS.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden transform transition-all flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-hug-navy-950 via-hug-navy-900 to-hug-green-950 text-white p-5 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-hug-gold-500/20 border border-hug-gold-400/40 rounded-xl">
              <Compass className="w-5 h-5 text-hug-gold-400 animate-spin-slow" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-hug-gold-300">
                Gusau Campus Interactive Exploration
              </span>
              <h2 className="text-xl font-serif font-bold text-white">Huda University Virtual Experience</h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-all"
            aria-label="Close virtual tour"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Media Window */}
        <div className="relative w-full h-80 sm:h-96 bg-gray-900 shrink-0">
          <Image
            src={current.image}
            alt={current.title}
            fill
            className="object-cover opacity-90 transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Navigation Controls */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/75 text-white backdrop-blur-sm transition-all"
            aria-label="Previous facility"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/75 text-white backdrop-blur-sm transition-all"
            aria-label="Next facility"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Overlay info */}
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="inline-block bg-hug-gold-500 text-hug-navy-950 font-bold text-xs uppercase px-2.5 py-1 rounded-md mb-1.5">
              {current.faculty}
            </span>
            <h3 className="text-2xl font-serif font-bold text-white drop-shadow-md">
              {current.title}
            </h3>
          </div>
        </div>

        {/* Details & Thumbnail Selector */}
        <div className="p-6 overflow-y-auto space-y-4">
          <p className="text-sm text-gray-700 leading-relaxed">
            {current.description}
          </p>

          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-hug-navy-900">
              Key Facility Standards & Certifications:
            </h4>
            <div className="flex flex-wrap gap-2">
              {current.features.map((feat, i) => (
                <span
                  key={i}
                  className="inline-flex items-center space-x-1.5 text-xs bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1.5 rounded-full font-medium"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{feat}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Location Spot Selector */}
          <div className="pt-2 border-t border-gray-100">
            <span className="text-xs font-semibold text-gray-500 block mb-2">Explore Campus Locations:</span>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {TOUR_SPOTS.map((spot, idx) => (
                <button
                  key={spot.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`p-2.5 rounded-xl text-left border text-xs transition-all ${
                    currentIndex === idx
                      ? "border-hug-navy-900 bg-hug-navy-50 font-bold text-hug-navy-900 ring-2 ring-hug-navy-900/20"
                      : "border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-600"
                  }`}
                >
                  <div className="line-clamp-1">{spot.title}</div>
                  <div className="text-[10px] text-gray-400 mt-0.5">{spot.faculty.split(" ")[0]}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 border-t border-gray-100 px-6 py-3.5 flex items-center justify-between text-xs text-gray-600 shrink-0">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-hug-green-700" />
            <span>Campus Location: Eastern Bypass Road, Sokoto Road, Gusau, Zamfara State, Nigeria</span>
          </div>
          <span className="font-semibold text-hug-navy-900">Facility {currentIndex + 1} of {TOUR_SPOTS.length}</span>
        </div>
      </div>
    </div>
  );
}

