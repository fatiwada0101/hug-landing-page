"use client";

import React, { useState } from "react";
import { X, GraduationCap, UserCheck, BookOpen, Shield, ExternalLink, Lock } from "lucide-react";

interface PortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: "student" | "applicant" | "staff" | "library";
}

export default function PortalModal({ isOpen, onClose, defaultTab = "student" }: PortalModalProps) {
  const [activeTab, setActiveTab] = useState<"student" | "applicant" | "staff" | "library">(defaultTab);
  const [matricNumber, setMatricNumber] = useState("");
  const [password, setPassword] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Banner: Primary #019934 */}
        <div className="bg-[#019934] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-all"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center space-x-3 mb-1">
            <div className="p-2 bg-white/10 rounded-xl">
              <Shield className="w-5 h-5 text-[#FF9A00]" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-emerald-100 font-bold block">
                Official Access
              </span>
              <h2 className="text-xl font-extrabold text-white">HUG Central Portals Gateway</h2>
            </div>
          </div>
          <p className="text-xs text-emerald-100 mt-1">
            Sign-on access for students, applicants, and faculty members.
          </p>
        </div>

        {/* Portal Tabs */}
        <div className="flex border-b border-gray-200 bg-gray-50/80 px-4 pt-2">
          <button
            onClick={() => setActiveTab("student")}
            className={`flex items-center space-x-1.5 px-3 py-2.5 text-xs font-bold border-b-2 transition-all ${
              activeTab === "student"
                ? "border-[#019934] text-[#019934] bg-white rounded-t-lg"
                : "border-transparent text-gray-500 hover:text-gray-900"
            }`}
          >
            <GraduationCap className="w-4 h-4 text-[#019934]" />
            <span>Student</span>
          </button>
          
          <button
            onClick={() => setActiveTab("applicant")}
            className={`flex items-center space-x-1.5 px-3 py-2.5 text-xs font-bold border-b-2 transition-all ${
              activeTab === "applicant"
                ? "border-[#019934] text-[#019934] bg-white rounded-t-lg"
                : "border-transparent text-gray-500 hover:text-gray-900"
            }`}
          >
            <UserCheck className="w-4 h-4 text-[#FF9A00]" />
            <span>Admissions</span>
          </button>

          <button
            onClick={() => setActiveTab("staff")}
            className={`flex items-center space-x-1.5 px-3 py-2.5 text-xs font-bold border-b-2 transition-all ${
              activeTab === "staff"
                ? "border-[#019934] text-[#019934] bg-white rounded-t-lg"
                : "border-transparent text-gray-500 hover:text-gray-900"
            }`}
          >
            <Lock className="w-4 h-4 text-gray-700" />
            <span>Staff / LMS</span>
          </button>

          <button
            onClick={() => setActiveTab("library")}
            className={`flex items-center space-x-1.5 px-3 py-2.5 text-xs font-bold border-b-2 transition-all ${
              activeTab === "library"
                ? "border-[#019934] text-[#019934] bg-white rounded-t-lg"
                : "border-transparent text-gray-500 hover:text-gray-900"
            }`}
          >
            <BookOpen className="w-4 h-4 text-[#019934]" />
            <span>E-Library</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5">
          {activeTab === "student" && (
            <div className="space-y-3.5">
              <div className="space-y-2.5">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                    Matric / JAMB Reg Number
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. HUG/2026/SC/0149"
                    value={matricNumber}
                    onChange={(e) => setMatricNumber(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#019934]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#019934]"
                  />
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <a
                  href="https://portal.hug.edu.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center space-x-1.5 bg-[#019934] hover:bg-[#026624] text-white font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm shadow-sm transition-all"
                >
                  <span>Launch Student Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#FF9A00]" />
                </a>
              </div>
            </div>
          )}

          {activeTab === "applicant" && (
            <div className="space-y-3">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-900">
                <strong>2026/2027 Admissions Active:</strong> Applications begin on 15 May 2026. Visit the admission portal for requirements.
              </div>
              <a
                href="https://portal.hug.edu.ng"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 bg-[#FF9A00] hover:bg-[#e07d00] text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm shadow-sm"
              >
                <span>Open Admissions Portal</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}

          {activeTab === "staff" && (
            <div className="space-y-3">
              <p className="text-xs text-gray-600">
                Staff institutional portal for grades, courses, and faculty admin.
              </p>
              <a
                href="https://portal.hug.edu.ng"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 bg-[#019934] hover:bg-[#026624] text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm shadow-sm"
              >
                <Lock className="w-4 h-4 text-[#FF9A00]" />
                <span>Faculty Authentication</span>
              </a>
            </div>
          )}

          {activeTab === "library" && (
            <div className="space-y-3">
              <p className="text-xs text-gray-600">
                Access over 500,000+ digital journals and academic research databases.
              </p>
              <a
                href="/library"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 bg-[#019934] hover:bg-[#026624] text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm shadow-sm"
              >
                <BookOpen className="w-4 h-4 text-[#FF9A00]" />
                <span>Connect to Digital Library</span>
              </a>
            </div>
          )}
        </div>

        <div className="bg-gray-50 border-t border-gray-100 px-5 py-2.5 text-xs text-gray-500 flex justify-between">
          <span>Support: <a href="mailto:info@hug.edu.ng" className="text-[#019934] font-semibold">info@hug.edu.ng</a></span>
          <span className="text-gray-400">SSL Encrypted</span>
        </div>
      </div>
    </div>
  );
}
