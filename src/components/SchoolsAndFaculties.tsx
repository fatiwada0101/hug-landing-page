"use client";

import React, { useState } from "react";
import { PROGRAMS, FACULTIES } from "@/data/programs";
import { ArrowRight } from "lucide-react";

interface SchoolsAndFacultiesProps {
  onOpenApply: (programId: string) => void;
  searchFilter?: string;
}

export default function SchoolsAndFaculties({ onOpenApply, searchFilter = "" }: SchoolsAndFacultiesProps) {
  const [selectedFaculty, setSelectedFaculty] = useState<string>("all");

  const filteredPrograms = PROGRAMS.filter((p) => {
    const matchesFaculty =
      selectedFaculty === "all" ||
      (selectedFaculty === "science-computing" && p.faculty === "Faculty of Science and Computing") ||
      (selectedFaculty === "allied-health" && p.faculty === "Faculty of Allied Health Sciences") ||
      (selectedFaculty === "management-social" && p.faculty === "Faculty of Management and Social Sciences");

    const effectiveSearch = searchFilter.toLowerCase().trim();
    const matchesSearch =
      !effectiveSearch ||
      p.name.toLowerCase().includes(effectiveSearch) ||
      p.facultyShort.toLowerCase().includes(effectiveSearch) ||
      p.careers.some((c) => c.toLowerCase().includes(effectiveSearch));

    return matchesFaculty && matchesSearch;
  });

  return (
    <section id="programmes" className="py-14 sm:py-18 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div className="space-y-1.5 max-w-xl">
            <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-[#019934]">
              Schools &amp; Faculties
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
              15 undergraduate programmes.
            </h2>
          </div>

          <span className="text-xs text-gray-500 font-medium">
            Showing {filteredPrograms.length} courses
          </span>
        </div>

        {/* Filter Pills Bar */}
        <div className="flex flex-wrap gap-2 border-b border-gray-100 pb-3">
          {FACULTIES.map((fac) => (
            <button
              key={fac.id}
              onClick={() => setSelectedFaculty(fac.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedFaculty === fac.id
                  ? "bg-[#019934] text-white shadow-sm"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              {fac.name} ({fac.count})
            </button>
          ))}
        </div>

        {filteredPrograms.length === 0 && <p role="status" className="text-sm text-gray-600 bg-[#fbf8f2] border border-[#ede7db] rounded-2xl p-5">No programmes match your search. Try another term or select All Programmes.</p>}
        {/* Programmes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredPrograms.map((prog) => (
            <div
              key={prog.id}
              className="bg-[#fbf8f2] border border-[#ede7db] rounded-2xl p-5 flex flex-col justify-between hover:shadow-md hover:border-[#019934] transition-all group"
            >
              <div className="space-y-2.5">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#019934] bg-emerald-100/70 px-2 py-0.5 rounded">
                    {prog.facultyShort}
                  </span>
                  
                </div>

                <h3 className="text-base sm:text-lg font-extrabold text-gray-900 group-hover:text-[#019934] transition-colors leading-snug">
                  {prog.degree} {prog.name}
                </h3>

                <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                  {prog.description}
                </p>

                <div className="text-[11px] text-gray-500 pt-1">
                  {prog.faculty}
                </div>
              </div>

              <div className="pt-4 mt-3 border-t border-[#ede7db] flex items-center justify-between">
                <a
                  href="https://portal.hug.edu.ng"
                  className="inline-flex items-center space-x-1 text-xs font-bold text-[#019934] group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Apply now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                {prog.isFeatured && (
                  <span className="text-[10px] font-bold text-[#FF9A00] bg-amber-50 border border-amber-200/80 px-2 py-0.5 rounded-full">
                    Featured
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

