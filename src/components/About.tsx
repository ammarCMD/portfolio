"use client";

import React from "react";
import { PERSONAL_INFO, CORE_STRENGTHS } from "@/data/portfolioData";
import { 
  Database, 
  Workflow, 
  Layers, 
  ShieldCheck, 
  Server, 
  Sparkles, 
  CheckCircle2,
  Code2
} from "lucide-react";

export default function About() {
  const iconMap: Record<string, React.ReactNode> = {
    "SQL & Query Optimization": <Code2 className="w-5 h-5 text-sky-400" />,
    "End-to-End Data Lifecycle": <Workflow className="w-5 h-5 text-emerald-400" />,
    "Microsoft Azure Ecosystem": <Database className="w-5 h-5 text-sky-400" />,
    "Databricks & Apache Spark": <Sparkles className="w-5 h-5 text-amber-400" />,
    "Microsoft Fabric & OneLake": <Layers className="w-5 h-5 text-cyan-400" />,
    "Hybrid Data Engineering": <Server className="w-5 h-5 text-indigo-400" />,
    "Dimensional Data Modeling": <Layers className="w-5 h-5 text-teal-400" />,
    "Quality & Governance": <ShieldCheck className="w-5 h-5 text-emerald-400" />
  };

  return (
    <section id="about" className="py-24 bg-deDark-950 border-b border-slate-800/80 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-xs font-mono uppercase tracking-widest">
            <Database className="w-3.5 h-3.5" />
            <span>Professional Profile & Engineering Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Reliable Data Systems
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-sans">
            A practical, hands-on perspective built on disciplined SQL engineering, automated data quality, 
            and modern cloud lakehouse architectures.
          </p>
        </div>

        {/* Narrative & Stats Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          {/* Narrative Paragraphs */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-base leading-relaxed bg-deDark-900/60 p-6 sm:p-8 rounded-2xl border border-slate-800/80 shadow-xl">
            <h3 className="text-xl font-bold text-white tracking-tight font-sans flex items-center gap-2">
              <span>About Ammar</span>
              <span className="text-xs font-mono text-sky-400 font-normal px-2 py-0.5 rounded bg-sky-950/60 border border-sky-800/60">
                Data Engineer
              </span>
            </h3>

            {PERSONAL_INFO.fullBio.map((paragraph, index) => (
              <p key={index} className="text-slate-300">
                {paragraph}
              </p>
            ))}

            <div className="pt-4 border-t border-slate-800/80">
              <div className="text-sm font-semibold text-slate-200 mb-2 font-mono">
                Key Engineering Tenet:
              </div>
              <p className="text-sm italic text-sky-300/90 bg-sky-950/30 p-3 rounded-lg border border-sky-900/40">
                &ldquo;Data without validated schemas and clear dimensional modeling creates misleading dashboards. 
                My focus is engineering robust, self-healing pipelines that make business metrics unshakeable.&rdquo;
              </p>
            </div>
          </div>

          {/* Stats & Key Highlights Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PERSONAL_INFO.stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-deDark-900/80 p-5 rounded-xl border border-slate-800/80 hover:border-sky-500/30 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-2xl font-extrabold text-white group-hover:text-sky-300 transition-colors font-sans">
                    {stat.value}
                  </div>
                </div>
                <div className="text-xs text-slate-400 mt-3 pt-3 border-t border-slate-800/60 font-mono">
                  {stat.detail}
                </div>
              </div>
            ))}

            {/* Quick credibility checklist card */}
            <div className="sm:col-span-2 bg-gradient-to-br from-slate-900 to-deDark-900 p-5 rounded-xl border border-slate-800/90 shadow-lg">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center justify-between">
                <span>Verified Engineering Breadth</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              </div>
              <ul className="space-y-2 text-xs font-mono text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Kimball Star & Snowflake dimensional modeling expertise</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Medallion Architecture (Bronze → Silver → Gold) implementation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>PySpark distributed data transformations & partition tuning</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Bridge experience across on-prem RDBMS and cloud lakehouses</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 8 Core Differentiator Cards */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-white">
              Core Technical Differentiators
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              What sets my technical profile apart in practical data engineering workflows
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {CORE_STRENGTHS.map((strength, index) => (
              <div
                key={index}
                className="bg-deDark-900/50 hover:bg-deDark-900/90 p-5 rounded-xl border border-slate-800/70 hover:border-sky-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 group-hover:border-slate-700 transition-colors">
                      {iconMap[strength.title] || <Database className="w-5 h-5 text-sky-400" />}
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-sky-400 border border-slate-800">
                      {strength.badge}
                    </span>
                  </div>
                  <h4 className="text-base font-semibold text-white group-hover:text-sky-300 transition-colors mb-2">
                    {strength.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {strength.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
