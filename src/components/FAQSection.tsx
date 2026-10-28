"use client";

import React, { useState } from "react";
import { FAQS, FAQItem } from "@/data/faqs";
import { HelpCircle, ChevronDown, Phone, Mail } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 text-hug-navy-900 bg-hug-navy-100/70 border border-hug-navy-200/80 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
            <HelpCircle className="w-4 h-4 text-hug-green-700" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-hug-navy-950">
            Admissions, Campus & Academic Queries
          </h2>

          <p className="text-gray-600 text-sm sm:text-base">
            Find immediate clarity regarding requirements, transfer guidelines, tuition payment structures, and campus residential life.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-200/80 shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-slate-50/60 transition-colors"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-hug-green-700 bg-hug-green-50 px-2 py-0.5 rounded">
                      {faq.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-hug-navy-950">
                      {faq.question}
                    </h3>
                  </div>

                  <div className={`p-2 rounded-full bg-slate-100 text-gray-500 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 bg-hug-navy-900 text-white" : ""}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4 bg-slate-50/30 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm font-bold text-hug-navy-950">Still Have Admissions Questions?</h4>
            <p className="text-xs text-gray-500">Our academic counseling officers are on standby to guide you.</p>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href="tel:+2348066696069"
              className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-xl bg-hug-green-50 text-hug-green-800 hover:bg-hug-green-100 text-xs font-bold transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Helpline</span>
            </a>

            <a
              href="mailto:info@hug.edu.ng"
              className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-xl bg-hug-navy-900 text-white hover:bg-hug-navy-950 text-xs font-bold transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email Admissions</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

