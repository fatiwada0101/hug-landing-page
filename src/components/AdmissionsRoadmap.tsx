"use client";

import React, { useState } from "react";
import { 
  FileCheck2, 
  UserCheck, 
  CreditCard, 
  GraduationCap, 
  ArrowRight, 
  HelpCircle, 
  Phone, 
  CheckCircle2, 
  Sparkles,
  Calculator
} from "lucide-react";

interface AdmissionsRoadmapProps {
  onOpenApply: () => void;
}

const STEPS = [
  {
    step: "01",
    title: "Confirm UTME Score / JAMB CAPS",
    description: "Ensure you scored 140 or above in the 2026 UTME. If HUG was not your first choice, simply effect a 'Change of Institution' to Huda University Gusau on JAMB CAPS.",
    tag: "Prerequisite",
  },
  {
    step: "02",
    title: "Online Screening Registration",
    description: "Create an applicant account on portal.hug.edu.ng. Complete candidate profile, select your preferred faculty and major, and upload scanned credentials.",
    tag: "5-10 Minutes",
  },
  {
    step: "03",
    title: "Departmental Screening & Offer",
    description: "The University Admissions Board reviews candidate credentials against faculty criteria. Successful applicants receive instant provisional admission letters.",
    tag: "Within 48 Hours",
  },
  {
    step: "04",
    title: "Acceptance & Hostel Booking",
    description: "Pay the acceptance fee, secure your air-conditioned on-campus hostel accommodation, complete medical documentation, and prepare for matriculation.",
    tag: "Welcome to HUG",
  },
];

export default function AdmissionsRoadmap({ onOpenApply }: AdmissionsRoadmapProps) {
  const [activeFacultyFee, setActiveFacultyFee] = useState<"computing" | "nursing" | "management">("computing");

  const feeData = {
    computing: {
      faculty: "Faculty of Science & Computing",
      programs: "B.Sc. Cyber Security, Software Eng, Computer Sci",
      tuitionPerSemester: "Affordable & Flexible",
      details: ["Includes High-Speed Computer Lab Access", "Free Digital E-Library Subscription", "Flexible 2-Installment Plan per session"],
    },
    nursing: {
      faculty: "Faculty of Allied Health Sciences",
      programs: "B.NSc. Nursing Science, Public Health",
      tuitionPerSemester: "Clinical Practicum Inclusive",
      details: ["Includes Clinical Hospital Rotation Kits", "NMCN Indexing & Simulation Ward Access", "Split Semester Installments Accepted"],
    },
    management: {
      faculty: "Faculty of Management & Social Sciences",
      programs: "B.Sc. Accounting, Economics, Peace Studies",
      tuitionPerSemester: "Subsidized Institutional Rate",
      details: ["Includes ICAN/ACCA Foundation Workshops", "Full Academic Materials Support", "Generous Merit Scholarships Available"],
    },
  };

  return (
    <section id="admissions" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 text-hug-navy-900 bg-hug-navy-50 border border-hug-navy-100 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
            <GraduationCap className="w-4 h-4 text-hug-green-700" />
            <span>Admissions Procedure</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-hug-navy-950">
            Four Simple Steps to Join HUG
          </h2>

          <p className="text-gray-600 text-base sm:text-lg">
            Our admissions process is completely transparent, streamlined, and designed to support candidates and parents every step of the way.
          </p>
        </div>

        {/* 4 Steps Horizontal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {STEPS.map((s, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 relative flex flex-col justify-between hover:border-hug-green-600 hover:shadow-lg transition-all duration-300 group"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-3xl font-serif font-extrabold text-hug-navy-900/30 group-hover:text-hug-green-700 transition-colors">
                    {s.step}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-hug-navy-800 bg-white border border-gray-200 px-2 py-0.5 rounded-full">
                    {s.tag}
                  </span>
                </div>

                <h3 className="text-lg font-serif font-bold text-hug-navy-950 mb-2">
                  {s.title}
                </h3>

                <p className="text-gray-600 text-xs leading-relaxed">
                  {s.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-200 flex items-center text-[11px] font-bold text-hug-green-800">
                <span>Step {s.step} Completed</span>
                <CheckCircle2 className="w-3.5 h-3.5 ml-1 text-hug-green-600" />
              </div>
            </div>
          ))}
        </div>

        {/* Tuition & Financial Transparency Card */}
        <div className="bg-gradient-to-r from-hug-navy-950 via-hug-navy-900 to-hug-green-950 rounded-3xl p-8 sm:p-10 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-hug-gold-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center space-x-2 text-hug-gold-300 text-xs uppercase font-bold tracking-widest">
                <Calculator className="w-4 h-4" />
                <span>Financial Transparency & Installment Options</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Affordable World-Class Higher Education
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                At Huda University Gusau, quality university education is structured to remain accessible. Parents and self-sponsored candidates enjoy flexible 2-to-3 installment payment options per academic session, with zero hidden charges.
              </p>

              {/* Faculty Selector Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                <button
                  onClick={() => setActiveFacultyFee("computing")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeFacultyFee === "computing"
                      ? "bg-hug-gold-500 text-hug-navy-950"
                      : "bg-white/10 hover:bg-white/20 text-slate-200"
                  }`}
                >
                  Science & Computing
                </button>
                <button
                  onClick={() => setActiveFacultyFee("nursing")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeFacultyFee === "nursing"
                      ? "bg-hug-gold-500 text-hug-navy-950"
                      : "bg-white/10 hover:bg-white/20 text-slate-200"
                  }`}
                >
                  Allied Health (Nursing)
                </button>
                <button
                  onClick={() => setActiveFacultyFee("management")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeFacultyFee === "management"
                      ? "bg-hug-gold-500 text-hug-navy-950"
                      : "bg-white/10 hover:bg-white/20 text-slate-200"
                  }`}
                >
                  Management & Social
                </button>
              </div>

              {/* Selected Fee Breakdown */}
              <div className="bg-white/10 border border-white/15 p-4 rounded-xl space-y-2 text-xs">
                <div className="font-bold text-hug-gold-300 text-sm">
                  {feeData[activeFacultyFee].faculty}
                </div>
                <div className="text-slate-200">
                  {feeData[activeFacultyFee].programs}
                </div>
                <ul className="space-y-1 text-slate-300 list-disc list-inside pt-1">
                  {feeData[activeFacultyFee].details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quick Action Column */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-7 text-hug-navy-950 shadow-xl space-y-4">
              <h4 className="text-lg font-serif font-bold text-hug-navy-950">
                Ready to Begin Your Application?
              </h4>
              <p className="text-xs text-gray-600">
                Submit your credentials directly through our streamlined portal in under 10 minutes.
              </p>

              <button
                onClick={onOpenApply}
                className="w-full flex items-center justify-center space-x-2 bg-hug-green-700 hover:bg-hug-green-800 text-white font-bold py-3.5 px-4 rounded-xl shadow-md transition-all text-sm group"
              >
                <span>Launch 2026/27 Admission Form</span>
                <ArrowRight className="w-4 h-4 text-hug-gold-300 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <span className="flex items-center">
                  <Phone className="w-3.5 h-3.5 text-hug-green-600 mr-1" />
                  +234 806 669 6069
                </span>
                <a
                  href="mailto:info@hug.edu.ng"
                  className="text-hug-navy-900 font-semibold hover:underline"
                >
                  info@hug.edu.ng
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

