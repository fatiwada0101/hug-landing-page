"use client";

import React from "react";
import { 
  ShieldCheck, 
  Activity, 
  Flame, 
  Lightbulb, 
  ExternalLink, 
  ArrowRight, 
  FlaskConical, 
  Cpu, 
  FileText 
} from "lucide-react";

const RESEARCH_CLUSTERS = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-hug-green-700" />,
    cluster: "Cyber Defense & Critical Infrastructure Protection",
    faculty: "Faculty of Science and Computing",
    description: "Investigating emerging threats in decentralized finance, biometric vulnerabilities, and resilient operational technology architectures for the public sector.",
    projects: ["Sahel Cyber Threat Intel Feed", "Automated Malware Analysis Pod", "Forensic Biometrics Verification"],
  },
  {
    icon: <Activity className="w-6 h-6 text-rose-600" />,
    cluster: "Community Health & Epidemiological Surveillance",
    faculty: "Faculty of Allied Health Sciences",
    description: "Pioneering field research in maternal-child health metrics, antimicrobial resistance in regional clinics, and digital health records deployment.",
    projects: ["Zamfara Rural Health Data Index", "Maternal Tele-Care Protocol", "Waterborne Disease Early Warning"],
  },
  {
    icon: <Flame className="w-6 h-6 text-amber-600" />,
    cluster: "Petrochemical Synthesis & Environmental Chemistry",
    faculty: "Faculty of Science and Computing",
    description: "Developing novel catalytic processes for hydrocarbons, bioremediation of crude oil-impacted soils, and renewable biomass briquetting.",
    projects: ["Low-Cost Soil Remediation", "Green Hydrocarbon Catalysis", "Industrial Waste Recycling"],
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-hug-gold-600" />,
    cluster: "Fintech, Fiscal Policy & Enterprise Incubation",
    faculty: "Faculty of Management and Social Sciences",
    description: "Fostering student-led digital software ventures, micro-taxation frameworks for informal economies, and conflict transformation strategies.",
    projects: ["Student Innovation Sandbox", "SME Tax Compliance Toolkit", "Community Peacebuilding Seminars"],
  },
];

export default function ResearchAndInnovation() {
  return (
    <section id="research" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 text-hug-navy-900 bg-hug-navy-50 border border-hug-navy-100 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
            <FlaskConical className="w-4 h-4 text-hug-green-700" />
            <span>Research, Innovation & Incubation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-hug-navy-950">
            Translational Research with Real-World Impact
          </h2>

          <p className="text-gray-600 text-base sm:text-lg">
            Huda University prioritizes applied inquiry that addresses critical national imperatives in cybersecurity, public health, energy, and civic governance.
          </p>
        </div>

        {/* 4 Research Clusters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {RESEARCH_CLUSTERS.map((cluster, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200/80 rounded-2xl p-7 hover:border-hug-navy-900 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-200/80 group-hover:scale-110 transition-transform">
                    {cluster.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-hug-navy-900 bg-white border border-slate-200 px-2.5 py-1 rounded-full">
                    {cluster.faculty.split(" ")[2]} Focus
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-hug-navy-950 mb-2 group-hover:text-hug-green-800 transition-colors">
                  {cluster.cluster}
                </h3>

                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {cluster.description}
                </p>

                <div className="space-y-1.5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                    Active Projects & Deliverables:
                  </div>
                  <ul className="space-y-1 text-xs text-gray-700">
                    {cluster.projects.map((proj, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-hug-green-600" />
                        <span>{proj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs">
                <span className="text-gray-500">Student & Faculty Collaboration</span>
                <span className="font-bold text-hug-navy-900 group-hover:text-hug-green-700 flex items-center">
                  <span>Explore Publications</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Call for Papers & Collaboration Banner */}
        <div className="bg-gradient-to-r from-hug-navy-950 to-hug-navy-900 text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-hug-gold-500/20">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-hug-gold-400 font-bold font-crest">
              Academic Collaboration & Vacancies
            </span>
            <h4 className="text-xl sm:text-2xl font-serif font-bold text-white">
              VACANCY: Internal & External Advertisement for Academic Staff Positions
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Distinguished professors, senior lecturers, and postdoctoral researchers are invited to join our expanding academic departments.
            </p>
          </div>

          <a
            href="mailto:info@hug.edu.ng"
            className="inline-flex items-center space-x-2 bg-hug-gold-500 hover:bg-hug-gold-400 text-hug-navy-950 font-bold px-6 py-3.5 rounded-xl shadow-md text-xs sm:text-sm shrink-0 transition-all"
          >
            <FileText className="w-4 h-4 text-hug-navy-950" />
            <span>Submit Academic CV / Inquiries</span>
          </a>
        </div>
      </div>
    </section>
  );
}

