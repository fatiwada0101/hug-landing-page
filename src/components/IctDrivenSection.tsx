"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface IctDrivenSectionProps {
  onOpenPortal: () => void;
  onOpenApply: () => void;
}

const CAROUSEL_SLIDES = [
  {
    image: "/hug/slider/m2.jpeg",
    tag: "BULLETIN",
    title: "THE MAIDEN MATRICULATION CEREMONY AT HUDA UNIVERSITY GUSAU",
  },
  {
    image: "/hug/slider/m1.jpeg",
    tag: "ACADEMIC MILESTONE",
    title: "HUDA UNIVERSITY MATRICULATES 311 PIONEER STUDENTS IN HISTORIC CEREMONY",
  },
  {
    image: "/hug/slider/hug1.jpg",
    tag: "UNIVERSITY LICENSURE",
    title: "NUC AND FEDERAL MINISTRY OF EDUCATION APPROVAL — 15 MAY 2023",
  },
];

export default function IctDrivenSection({ onOpenPortal, onOpenApply }: IctDrivenSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
  };

  const slide = CAROUSEL_SLIDES[currentSlide];

  return (
    <section id="licensure" className="py-14 sm:py-18 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-[#019934]">
              Zamfara State · Established 2023
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight leading-[1.15]">
              Built on Godliness, Academic Excellence and Civic Responsibility.
            </h2>

            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Huda University Gusau received operational approval from the National Universities Commission and Federal Ministry of Education on 15 May 2023.
            </p>

            <div className="pt-2 flex items-center space-x-3">
              <button
                onClick={onOpenPortal}
                className="bg-[#019934] hover:bg-[#026624] text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-sm transition-all"
              >
                Student Portal
              </button>

              <button
                onClick={onOpenApply}
                className="bg-white hover:bg-emerald-50 border border-gray-200 text-[#019934] font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Column: Card Slider */}
          <div className="lg:col-span-6 space-y-3">
            <div className="relative h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden shadow-lg border border-gray-100 group">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FF9A00] block">
                  {slide.tag}
                </span>
                <h3 className="text-base sm:text-lg font-extrabold text-white leading-snug">
                  {slide.title}
                </h3>
              </div>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center space-x-1.5">
                {CAROUSEL_SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1 rounded-full transition-all ${
                      currentSlide === idx ? "w-6 bg-[#019934]" : "w-2 bg-gray-300"
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={prevSlide}
                  className="w-7 h-7 rounded-full border border-gray-300 hover:border-gray-500 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-7 h-7 rounded-full border border-gray-300 hover:border-gray-500 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
