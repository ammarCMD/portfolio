"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { 
  ArrowRight, 
  FileDown, 
  Database, 
  Layers, 
  Terminal,
  Activity,
  Cpu,
  MapPin
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export default function Hero() {
  const coreTech = [
    { name: "SQL", highlight: true, category: "Core Foundation" },
    { name: "Python", highlight: true, category: "ETL & Scripting" },
    { name: "Azure (ADF/ADLS)", highlight: false, category: "Cloud Ingestion" },
    { name: "Databricks", highlight: false, category: "Lakehouse" },
    { name: "Apache Spark / PySpark", highlight: true, category: "Distributed Compute" },
    { name: "Microsoft Fabric", highlight: true, category: "OneLake & Warehouse" },
    { name: "Power BI & DAX", highlight: false, category: "Semantic Analytics" }
  ];

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-de border-b border-slate-800/80"
    >
      {/* Subtle radial ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-radial-gradient pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* System Status & Location Pills */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-sm backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[11px] font-mono uppercase tracking-widest text-slate-300">
                  Data Engineering Systems • Open to Opportunities
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-sm backdrop-blur-md text-[11px] font-mono text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <div className="flex items-baseline gap-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-sans">
                  {PERSONAL_INFO.name}
                </h1>
                <span className="text-xl sm:text-2xl font-mono text-sky-400 font-semibold">
                  / DE
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-200 tracking-tight">
                {PERSONAL_INFO.role}
              </h2>

              <p className="text-lg sm:text-xl font-medium text-sky-400/90 tracking-wide font-mono">
                {PERSONAL_INFO.tagline}
              </p>
            </div>

            {/* Concise Value Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-sans">
              Specializing in turning raw, disordered business data into reliable, scalable pipelines, 
              dimensional models, and analytics-ready lakehouse platforms. Strong SQL foundation with hands-on 
              experience in <span className="text-slate-100 font-semibold">Azure</span>, <span className="text-slate-100 font-semibold">Databricks</span>, <span className="text-slate-100 font-semibold">Apache Spark</span>, and <span className="text-slate-100 font-semibold">Microsoft Fabric</span>.
            </p>

            {/* Core Tech Stack Badges */}
            <div className="pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                Core Technologies & Query Engines
              </div>
              <div className="flex flex-wrap gap-2">
                {coreTech.map((tech) => (
                  <span
                    key={tech.name}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono transition-colors ${
                      tech.highlight
                        ? "bg-sky-950/80 text-sky-300 border border-sky-500/40 font-semibold"
                        : "bg-slate-900/90 text-slate-300 border border-slate-800"
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400/70"></span>
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Action CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-slate-950 bg-gradient-to-r from-sky-400 to-teal-400 hover:from-sky-300 hover:to-teal-300 shadow-md shadow-sky-500/20 transition-all font-sans"
              >
                <span>View Engineered Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.links.resume}
                download="Ammar_Data_Engineer_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium font-mono text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 transition-all hover:text-white"
              >
                <FileDown className="w-4 h-4 text-sky-400" />
                <span>Download Resume</span>
              </a>

              <a
                href={PERSONAL_INFO.links.githubProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-3 rounded-lg text-sm font-medium text-slate-300 bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all hover:text-white"
                title="View GitHub Profile (ammarCMD)"
              >
                <GithubIcon className="w-4 h-4" />
                <span className="hidden sm:inline">GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-3 rounded-lg text-sm font-medium text-slate-300 bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all hover:text-white"
                title="Connect on LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4 text-sky-400" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Live Data Architecture Telemetry Card */}
          <div className="lg:col-span-5">
            <div className="rounded-xl bg-deDark-900/90 border border-slate-800/90 shadow-2xl p-5 sm:p-6 backdrop-blur-xl relative overflow-hidden">
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 text-xs font-mono text-slate-400">
                    pipeline_orchestrator.py
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  HEALTHY
                </span>
              </div>

              {/* Architecture Flow Simulator */}
              <div className="space-y-3 font-mono text-xs">
                {/* Step 1 */}
                <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/70 flex items-start justify-between">
                  <div className="flex items-start gap-2.5">
                    <Database className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-slate-200 font-semibold">Raw Ingestion & Landing</div>
                      <div className="text-[11px] text-slate-400">ADF → ADLS Gen2 / OneLake</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-emerald-400 bg-emerald-950/40 px-1.5 py-0.5 rounded">
                    Validated
                  </span>
                </div>

                {/* Step 2 */}
                <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/70 flex items-start justify-between">
                  <div className="flex items-start gap-2.5">
                    <Cpu className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-slate-200 font-semibold">Medallion Transformation</div>
                      <div className="text-[11px] text-slate-400">Bronze → Silver Cleansed (PySpark)</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-sky-400 bg-sky-950/40 px-1.5 py-0.5 rounded">
                    Delta ACID
                  </span>
                </div>

                {/* Step 3 */}
                <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/70 flex items-start justify-between">
                  <div className="flex items-start gap-2.5">
                    <Layers className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-slate-200 font-semibold">Dimensional Modeling (Gold)</div>
                      <div className="text-[11px] text-slate-400">Star Schema Facts & Dimensions</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-emerald-400 bg-emerald-950/40 px-1.5 py-0.5 rounded">
                    Conformed
                  </span>
                </div>

                {/* Step 4 */}
                <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/70 flex items-start justify-between">
                  <div className="flex items-start gap-2.5">
                    <Activity className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-slate-200 font-semibold">Serving & Consumption</div>
                      <div className="text-[11px] text-slate-400">Synapse / Fabric WH → Power BI</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-purple-400 bg-purple-950/40 px-1.5 py-0.5 rounded">
                    Direct Lake
                  </span>
                </div>
              </div>

              {/* Telemetry Stats Grid */}
              <div className="mt-4 pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-3 font-mono">
                <div className="bg-slate-950/40 p-2.5 rounded border border-slate-800/50">
                  <div className="text-[10px] text-slate-400 uppercase">Core Language</div>
                  <div className="text-sm font-bold text-sky-300">SQL & PySpark</div>
                </div>
                <div className="bg-slate-950/40 p-2.5 rounded border border-slate-800/50">
                  <div className="text-[10px] text-slate-400 uppercase">Architecture</div>
                  <div className="text-sm font-bold text-emerald-300">Medallion / Lakehouse</div>
                </div>
              </div>

              {/* Terminal-styled prompt message */}
              <div className="mt-3 flex items-center gap-2 text-[11px] font-mono text-slate-400 bg-slate-950/80 p-2 rounded border border-slate-800/60">
                <Terminal className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span className="truncate">
                  data_pipeline: 6 projects configured • 0 schema errors
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
