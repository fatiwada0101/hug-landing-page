"use client";

import React from "react";
import Image from "next/image";
import { UNIVERSITY_NEWS, UPCOMING_EVENTS } from "@/data/news";
import { Newspaper, Calendar, ArrowRight, Clock, MapPin, Sparkles } from "lucide-react";

export default function NewsAndEvents() {
  const featured = UNIVERSITY_NEWS[0];
  const secondaryNews = UNIVERSITY_NEWS.slice(1, 4);

  return (
    <section id="news" className="py-20 bg-slate-50 relative overflow-hidden border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 text-hug-navy-900 bg-hug-navy-100/70 border border-hug-navy-200/80 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
              <Newspaper className="w-4 h-4 text-hug-green-700" />
              <span>HUG Gazette & Events</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-hug-navy-950">
              Campus Dispatches & Milestones
            </h2>

            <p className="text-gray-600 text-sm sm:text-base max-w-2xl">
              Stay up to speed with the latest academic announcements, research publications, campus developments, and community engagements.
            </p>
          </div>

          <a
            href="https://hug.edu.ng"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm font-bold text-hug-navy-900 hover:text-hug-green-700 flex items-center self-start md:self-auto"
          >
            <span>Read All University Dispatches</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>

        {/* Harvard Gazette Style Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Editorial Feature */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-200/80 flex flex-col justify-between group">
            <div className="relative h-72 sm:h-96 w-full overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="bg-hug-green-700 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                  {featured.category}
                </span>
              </div>
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <div className="flex items-center space-x-3 text-xs text-slate-300 mb-1">
                  <span>{featured.date}</span>
                  <span>•</span>
                  <span className="flex items-center">
                    <Clock className="w-3.5 h-3.5 mr-1" />
                    {featured.readTime}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white group-hover:text-hug-gold-300 transition-colors">
                  {featured.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <p className="text-gray-600 text-sm leading-relaxed">
                {featured.summary}
              </p>
              <div className="pt-2 flex items-center justify-between text-xs font-bold text-hug-navy-900 border-t border-gray-100">
                <span className="text-gray-400">Office of Information & Protocol</span>
                <span className="group-hover:text-hug-green-700 flex items-center">
                  <span>Read Full Milestone Coverage</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </div>

          {/* Secondary News & Upcoming Calendar Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            {/* Secondary Stories */}
            <div className="space-y-4">
              {secondaryNews.map((news) => (
                <div
                  key={news.id}
                  className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-sm hover:shadow-md transition-all flex gap-4 group"
                >
                  <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-wider text-hug-green-700 mb-1">
                        <span>{news.category}</span>
                        <span className="text-gray-300">•</span>
                        <span className="text-gray-400">{news.date.split(",")[0]}</span>
                      </div>
                      <h4 className="text-sm font-serif font-bold text-hug-navy-950 group-hover:text-hug-green-800 transition-colors line-clamp-2">
                        {news.title}
                      </h4>
                    </div>
                    <div className="text-[11px] font-bold text-hug-navy-900 flex items-center mt-2">
                      <span>Read Story</span>
                      <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Upcoming Academic Dates / Events Card */}
            <div className="bg-gradient-to-br from-hug-navy-950 to-hug-navy-900 text-white rounded-3xl p-6 shadow-xl border border-white/10 space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-hug-gold-400" />
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                    Upcoming Academic Dates
                  </h4>
                </div>
                <span className="text-[10px] text-hug-gold-300 font-semibold">2026 Calendar</span>
              </div>

              <div className="space-y-3">
                {UPCOMING_EVENTS.map((evt) => (
                  <div
                    key={evt.id}
                    className="flex items-center space-x-4 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    {/* Date Block */}
                    <div className="bg-hug-gold-500 text-hug-navy-950 rounded-xl p-2.5 text-center min-w-[50px] shrink-0">
                      <div className="text-lg font-bold leading-none">{evt.dateDay}</div>
                      <div className="text-[10px] font-extrabold tracking-wider">{evt.dateMonth}</div>
                    </div>

                    <div className="space-y-0.5">
                      <div className="text-xs font-bold text-white line-clamp-1">
                        {evt.title}
                      </div>
                      <div className="flex items-center text-[11px] text-slate-300 space-x-2">
                        <span>{evt.time}</span>
                        <span>•</span>
                        <span className="text-slate-400 flex items-center">
                          <MapPin className="w-3 h-3 mr-0.5" />
                          {evt.location}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

