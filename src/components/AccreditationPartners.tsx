"use client";

import React from "react";
import { ShieldCheck, Award, CheckCircle2 } from "lucide-react";

const BODIES = [
  {
    name: "National Universities Commission (NUC)",
    description: "Statutory Licensing & Full Program Accreditation",
    tag: "Federal Regulatory Body",
  },
  {
    name: "Federal Ministry of Education (FME)",
    description: "Institutional Approval for Tertiary Operations",
    tag: "Government Charter",
  },
  {
    name: "Joint Admissions & Matriculation Board (JAMB)",
    description: "Official CAPS Matriculation & Screening Verification",
    tag: "National Tertiary Testing",
  },
  {
    name: "National Information Technology Dev. Agency (NITDA)",
    description: "Digital Standards, IT Frameworks & Cybersecurity",
    tag: "Digital Economy Partner",
  },
  {
    name: "Nigerian Communications Commission (NCC)",
    description: "Broadband Spectrum & ICT Infrastructure",
    tag: "Telecoms & Fiber Partner",
  },
  {
    name: "Nursing & Midwifery Council of Nigeria (NMCN)",
    description: "Professional Clinical Benchmarks & Indexing",
    tag: "Health Professional Board",
  },
];

export default function AccreditationPartners() {
  return (
    <section className="py-16 bg-white border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <div className="inline-flex items-center space-x-1.5 text-hug-green-700 text-xs font-bold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" />
            <span>Accreditation, Licensure & Affiliations</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-hug-navy-950">
            Backed by Federal Statutory Authorities
          </h3>
          <p className="text-xs sm:text-sm text-gray-600">
            Every degree program offered at HUG is certified in full alignment with national benchmarks and international best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BODIES.map((body, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-hug-green-600 hover:shadow-md transition-all flex items-start space-x-4 group"
            >
              <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-hug-navy-900 group-hover:bg-hug-green-700 group-hover:text-white transition-colors shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-hug-green-800">
                  {body.tag}
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-hug-navy-950">
                  {body.name}
                </h4>
                <p className="text-[11px] text-gray-500 leading-snug">
                  {body.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

