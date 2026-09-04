"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { 
  ExternalLink, 
  CheckCircle2
} from "lucide-react";
import { GithubIcon } from "./SocialIcons";

export default function GitHubSection() {
  return (
    <section className="py-24 bg-deDark-950 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-xs font-mono uppercase tracking-widest">
            <GithubIcon className="w-3.5 h-3.5" />
            <span>Open Source & Code Quality</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured GitHub Repositories
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-sans">
            Reviewing clean repository structure, modular ETL code, PySpark streaming transforms, 
            and data engineering project architecture.
          </p>
        </div>

        {/* Featured Repo Spotlight Card */}
        <div className="max-w-4xl mx-auto">
          <div className="p-7 sm:p-9 rounded-2xl bg-deDark-900 border border-slate-800 hover:border-sky-500/40 shadow-2xl transition-all relative overflow-hidden backdrop-blur-xl group">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-sky-400">
                  <GithubIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-sky-400 font-bold uppercase">
                      Featured Repository
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-sky-300 transition-colors font-mono">
                    finguard_streaming_project
                  </h3>
                </div>
              </div>

              <a
                href={PERSONAL_INFO.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-semibold text-slate-950 bg-gradient-to-r from-sky-400 to-teal-400 hover:from-sky-300 hover:to-teal-300 transition-all shadow-md self-start sm:self-center"
              >
                <span>View on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Description */}
            <div className="py-5 space-y-4">
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                A streaming data engineering project engineered around real-time financial transaction event ingestion, 
                Bronze to Silver Medallion architecture, PySpark schema parsing, and continuous data quality validation gates.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-300 flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Streaming-oriented data engineering patterns</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-300 flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Medallion Bronze/Silver segregation & Delta store</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-300 flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Automated payload parsing & currency validation</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-300 flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Modular Python architecture & reproducible envs</span>
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                  <span>Python / PySpark</span>
                </span>
                <span className="text-slate-600">•</span>
                <span>Streaming Ingestion</span>
                <span className="text-slate-600">•</span>
                <span>Medallion Architecture</span>
              </div>

              <a
                href={PERSONAL_INFO.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:text-sky-300 flex items-center gap-1 text-xs font-semibold"
              >
                <span>Explore Source Tree</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
