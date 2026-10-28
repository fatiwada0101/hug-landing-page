"use client";

import React, { useState, useMemo } from "react";
import { 
  FACULTIES, 
  PROGRAMS, 
  Program 
} from "@/data/programs";
import { 
  Search, 
  Code, 
  ShieldCheck, 
  Cpu, 
  Fingerprint, 
  FlaskConical, 
  Microscope, 
  Flame, 
  HeartPulse, 
  Activity, 
  ClipboardList, 
  Calculator, 
  TrendingUp, 
  Scale, 
  Building2, 
  Receipt,
  ArrowRight,
  Sparkles,
  BookOpen,
  GraduationCap
} from "lucide-react";

interface ProgramExplorerProps {
  onOpenApply: (programId: string) => void;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  Code: <Code className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
  Fingerprint: <Fingerprint className="w-5 h-5" />,
  FlaskConical: <FlaskConical className="w-5 h-5" />,
  Microscope: <Microscope className="w-5 h-5" />,
  Flame: <Flame className="w-5 h-5" />,
  HeartPulse: <HeartPulse className="w-5 h-5" />,
  Activity: <Activity className="w-5 h-5" />,
  ClipboardList: <ClipboardList className="w-5 h-5" />,
  Calculator: <Calculator className="w-5 h-5" />,
  TrendingUp: <TrendingUp className="w-5 h-5" />,
  Scale: <Scale className="w-5 h-5" />,
  Building2: <Building2 className="w-5 h-5" />,
  Receipt: <Receipt className="w-5 h-5" />,
};

export default function ProgramExplorer({ onOpenApply }: ProgramExplorerProps) {
  const [selectedFaculty, setSelectedFaculty] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPrograms = useMemo(() => {
    return PROGRAMS.filter((program) => {
      const matchesFaculty =
        selectedFaculty === "all" ||
        (selectedFaculty === "science-computing" &&
          program.faculty === "Faculty of Science and Computing") ||
        (selectedFaculty === "allied-health" &&
          program.faculty === "Faculty of Allied Health Sciences") ||
        (selectedFaculty === "management-social" &&
          program.faculty === "Faculty of Management and Social Sciences");

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        program.name.toLowerCase().includes(q) ||
        program.description.toLowerCase().includes(q) ||
        program.careers.some((c) => c.toLowerCase().includes(q)) ||
        program.facultyShort.toLowerCase().includes(q);

      return matchesFaculty && matchesSearch;
    });
  }, [selectedFaculty, searchQuery]);

  return (
    <section id="programs" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative Ivy Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#002147_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 text-hug-green-700 bg-hug-green-100/70 border border-hug-green-200/80 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Programmes Catalogue</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-hug-navy-950">
            Disciplines Engineered for the Modern World
          </h2>

          <p className="text-gray-600 text-base sm:text-lg">
            Choose from 15+ fully accredited undergraduate degree programmes designed in compliance with the NUC Core Curriculum and Minimum Academic Standards (CCMAS).
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="bg-white p-4 rounded-2xl shadow-md border border-gray-200/80 mb-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Faculty Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            {FACULTIES.map((fac) => (
              <button
                key={fac.id}
                onClick={() => setSelectedFaculty(fac.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  selectedFaculty === fac.id
                    ? "bg-hug-navy-900 text-white shadow-sm"
                    : "bg-slate-100 hover:bg-slate-200 text-gray-700"
                }`}
              >
                {fac.name} ({fac.count})
              </button>
            ))}
          </div>

          {/* Live Search Field */}
          <div className="relative min-w-[260px] md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search major, career, or subject..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-hug-navy-900 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex justify-between items-center text-xs text-gray-500 mb-6 px-1">
          <span>Showing <strong>{filteredPrograms.length}</strong> accredited degree programmes</span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="text-hug-green-700 hover:underline font-semibold"
            >
              Clear search filter
            </button>
          )}
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
            >
              <div className="p-6">
                {/* Header Tag */}
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-hug-navy-50 text-hug-navy-900 rounded-xl group-hover:bg-hug-green-700 group-hover:text-white transition-colors duration-300">
                    {ICON_MAP[program.iconName] || <BookOpen className="w-5 h-5" />}
                  </div>

                  <div className="flex items-center space-x-2">
                    {program.isFeatured && (
                      <span className="bg-amber-100 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center">
                        <Sparkles className="w-3 h-3 mr-0.5 text-amber-600" />
                        Featured
                      </span>
                    )}
                    <span className="bg-slate-100 text-gray-700 text-[11px] font-bold px-2.5 py-0.5 rounded-md">
                      {program.duration}
                    </span>
                  </div>
                </div>

                {/* Faculty label */}
                <span className="text-[11px] font-bold uppercase tracking-wider text-hug-green-700">
                  {program.facultyShort}
                </span>

                {/* Degree & Major Title */}
                <h3 className="text-xl font-serif font-bold text-hug-navy-950 mt-1 mb-2 group-hover:text-hug-green-800 transition-colors">
                  {program.degree} {program.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-xs leading-relaxed mb-4">
                  {program.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 mb-4">
                  <div className="text-[11px] font-bold uppercase text-gray-400 tracking-wider">
                    Core Specialisations:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {program.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="bg-slate-50 text-slate-700 text-[10px] font-medium px-2 py-0.5 rounded-md border border-slate-200"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* UTME Requirements */}
                <div className="bg-slate-50/70 p-3 rounded-xl border border-slate-100 text-[11px] space-y-1">
                  <span className="font-semibold text-hug-navy-900">UTME Subjects: </span>
                  <span className="text-gray-600">{program.utmeSubjects.join(", ")}</span>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="px-6 py-4 bg-gray-50/80 border-t border-gray-100 flex items-center justify-between">
                <div className="text-[11px] text-gray-500">
                  Career: <strong className="text-gray-700">{program.careers[0]}</strong>
                </div>

                <button
                  onClick={() => onOpenApply(program.id)}
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-hug-navy-900 group-hover:text-hug-green-700 transition-colors"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty Search State */}
        {filteredPrograms.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-200 p-8">
            <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-gray-800">No degree programmes match &ldquo;{searchQuery}&rdquo;</h4>
            <p className="text-xs text-gray-500 mt-1 max-w-md mx-auto">
              Please check your spelling or switch to &ldquo;All Programmes&rdquo; to browse all 15 degree offerings.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedFaculty("all");
              }}
              className="mt-4 px-4 py-2 bg-hug-navy-900 text-white rounded-xl text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

