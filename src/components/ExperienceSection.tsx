"use client";

import React from "react";
import { EXPERIENCE_TIMELINE } from "@/data/portfolioData";
import { 
  Briefcase, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck
} from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-deDark-900/40 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-xs font-mono uppercase tracking-widest">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Career History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Experience & Focus
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-sans">
            Honest, grounded career record reflecting hands-on work with ETL processes, relational databases, 
            dimensional data warehousing, and cloud lakehouse development.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto space-y-8">
          {EXPERIENCE_TIMELINE.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-deDark-950 border border-slate-800 shadow-2xl relative overflow-hidden backdrop-blur-xl"
            >
              {/* Left Accent Bar */}
              <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-gradient-to-b from-sky-400 to-teal-400" />

              <div className="space-y-6">
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">
                        {item.role}
                      </h3>
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-sky-950 text-sky-400 border border-sky-800 font-semibold">
                        Current Role
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm text-sky-300 font-mono mt-1">
                      {item.positioning}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 self-start sm:self-center">
                    <Calendar className="w-3.5 h-3.5 text-sky-400" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Scope & Responsibilities Narrative */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                  {item.summary}
                </p>

                {/* Core Responsibilities Bullet Points */}
                <div className="space-y-2.5">
                  <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                    Demonstrated Engineering Work:
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {item.achievements.map((ach, aIdx) => (
                      <div
                        key={aIdx}
                        className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-200 font-sans leading-relaxed flex items-start gap-2.5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-400 mr-2">Environment:</span>
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded text-xs font-mono bg-slate-900 text-sky-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Authenticity Pledge Card */}
          <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800/80 text-center text-xs text-slate-400 font-mono flex flex-col sm:flex-row items-center justify-center gap-3">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              Committed to authentic, verifiable representation. All projects, schemas, and pipelines 
              are reflective of real hands-on technical execution.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
