"use client";

import React from "react";
import Image from "next/image";
import { UNIVERSITY_NEWS, UPCOMING_EVENTS } from "@/data/news";
import { Calendar, ArrowRight, Clock, MapPin } from "lucide-react";

export default function BulletinAndNews() {
  const mainNews = UNIVERSITY_NEWS[0];
  const sideNews = UNIVERSITY_NEWS.slice(1, 4);

  return (
    <section id="news" className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#0b4d2c]">
              HUG Bulletin &amp; News
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              What&apos;s happening at HUG.
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Explore the latest institutional milestones, events, and campus developments.
            </p>
          </div>

          <a
            href="https://hug.edu.ng"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm font-bold text-[#0b4d2c] hover:underline flex items-center"
          >
            <span>View All Announcements</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Lead Story */}
          <div className="lg:col-span-7 bg-[#fbf8f2] border border-[#ede7db] rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between group">
            <div className="relative h-64 sm:h-80 w-full overflow-hidden">
              <Image
                src={mainNews.image}
                alt={mainNews.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-[#0b4d2c] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                {mainNews.category}
              </div>
            </div>

            <div className="p-6 space-y-3">
              <div className="text-xs text-gray-400">
                {mainNews.date} · {mainNews.readTime}
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 group-hover:text-[#0b4d2c] transition-colors">
                {mainNews.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {mainNews.summary}
              </p>
            </div>
          </div>

          {/* Side News & Events Calendar */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
              Recent Dispatches
            </div>

            {sideNews.map((news) => (
              <div
                key={news.id}
                className="bg-[#fbf8f2] border border-[#ede7db] rounded-xl p-4 flex gap-4 hover:border-[#c4933f] transition-all group"
              >
                <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-[#0b4d2c] uppercase">
                    {news.category}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-[#0b4d2c] transition-colors line-clamp-2">
                    {news.title}
                  </h4>
                  <div className="text-[10px] text-gray-400">{news.date}</div>
                </div>
              </div>
            ))}

            {/* Events Calendar Box */}
            <div className="bg-[#064e3b] text-white rounded-xl p-5 space-y-3 shadow-md">
              <div className="flex items-center justify-between border-b border-emerald-800 pb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#c4933f]">
                  Academic Calendar Dates
                </span>
                <Calendar className="w-4 h-4 text-emerald-300" />
              </div>

              <div className="space-y-2 text-xs">
                {UPCOMING_EVENTS.map((evt) => (
                  <div key={evt.id} className="flex items-center space-x-3 py-1">
                    <div className="bg-[#c4933f] text-[#064e3b] font-extrabold px-2 py-1 rounded text-center min-w-[42px]">
                      <div className="text-xs leading-none">{evt.dateDay}</div>
                      <div className="text-[9px] uppercase">{evt.dateMonth}</div>
                    </div>
                    <div className="line-clamp-1 font-medium text-emerald-100">
                      {evt.title}
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

