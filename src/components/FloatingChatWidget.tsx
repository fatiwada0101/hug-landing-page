"use client";

import React, { useState } from "react";
import { MessageCircle, X, Send, Phone, Mail, Sparkles } from "lucide-react";

interface FloatingChatWidgetProps {
  onOpenApply: () => void;
  onOpenPortal: () => void;
}

export default function FloatingChatWidget({ onOpenApply, onOpenPortal }: FloatingChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <>
      {/* Floating Launcher Button (as seen in bottom right of all screenshots) */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center space-x-2">
        {!isOpen && (
          <div className="bg-white text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg border border-gray-100 hidden sm:flex items-center space-x-1 animate-bounce">
            <span className="text-[#0b4d2c] font-bold">We Are Here!</span>
            <span>👋</span>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 rounded-full bg-[#0b4d2c] hover:bg-[#064e3b] text-white shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-500/30"
          aria-label="Open Admissions and Support Chat"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <>
              <MessageCircle className="w-7 h-7 text-white fill-white" />
              {/* Notification Pill "1" as seen in screenshots */}
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[11px] font-bold rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                1
              </span>
            </>
          )}
        </button>
      </div>

      {/* Chat Drawer / Modal */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-fadeIn flex flex-col">
          {/* Header */}
          <div className="bg-[#0b4d2c] text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-emerald-700/60 flex items-center justify-center font-bold text-sm">
                HUG
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">HUG Admissions Help Desk</h4>
                <div className="flex items-center space-x-1.5 text-[11px] text-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Online · Typically replies in seconds</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="p-4 bg-[#fbf8f2] space-y-3 max-h-72 overflow-y-auto text-xs">
            <div className="bg-white p-3 rounded-xl rounded-tl-none shadow-sm border border-gray-200/80 text-gray-800 space-y-1.5">
              <p className="font-semibold text-[#0b4d2c]">Hello and welcome to Huda University Gusau! 👋</p>
              <p className="text-gray-600">
                Are you looking to apply for the <strong>2026/2027 Academic Session</strong>, check your JAMB cut-off score, or access the student portal?
              </p>
            </div>

            {/* Quick Prompt Options */}
            <div className="space-y-1.5 pt-1">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenApply();
                }}
                className="w-full text-left p-2.5 rounded-lg bg-white hover:bg-emerald-50 border border-gray-200 text-gray-800 font-semibold transition-colors flex items-center justify-between group"
              >
                <span>Apply for 2026/27 Admission</span>
                <span className="text-[#0b4d2c] group-hover:translate-x-1 transition-transform">→</span>
              </button>

              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenPortal();
                }}
                className="w-full text-left p-2.5 rounded-lg bg-white hover:bg-emerald-50 border border-gray-200 text-gray-800 font-semibold transition-colors flex items-center justify-between group"
              >
                <span>Access Student ePortal</span>
                <span className="text-[#0b4d2c] group-hover:translate-x-1 transition-transform">→</span>
              </button>

              <a
                href="https://wa.me/2348066696069?text=Hello%20Huda%20University%20Admissions%20Desk,%20I%20need%20assistance%20with%20admissions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-left p-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-colors flex items-center justify-between"
              >
                <span>Chat with Counselor on WhatsApp</span>
                <span>💬</span>
              </a>
            </div>
          </div>

          {/* Quick Contact Footer */}
          <div className="p-3 bg-white border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
            <span className="flex items-center">
              <Phone className="w-3 h-3 mr-1 text-[#0b4d2c]" />
              +234 806 669 6069
            </span>
            <span className="flex items-center">
              <Mail className="w-3 h-3 mr-1 text-[#0b4d2c]" />
              info@hug.edu.ng
            </span>
          </div>
        </div>
      )}
    </>
  );
}

