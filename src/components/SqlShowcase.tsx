"use client";

import React, { useState } from "react";
import { SQL_SHOWCASE } from "@/data/portfolioData";
import { 
  Code2, 
  Copy, 
  Check, 
  CheckCircle2, 
  Zap
} from "lucide-react";

export default function SqlShowcase() {
  const [selectedSnippetId, setSelectedSnippetId] = useState<string>("window-functions");
  const [copied, setCopied] = useState(false);

  const activeSnippet =
    SQL_SHOWCASE.find((s) => s.id === selectedSnippetId) || SQL_SHOWCASE[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sqlCompetencies = [
    "Complex Window Functions (ROW_NUMBER, RANK, DENSE_RANK, LAG, LEAD)",
    "Modular Chained CTEs (Common Table Expressions)",
    "Incremental Loading & SCD Type 2 Atomic MERGE",
    "Outer, Cross & Anti-Joins with NULLIF/COALESCE",
    "Kimball Star Schema Fact & Dimension DDL",
    "Query Plan Analysis & Clustered Columnstore Indexes",
    "Stored Procedures, Triggers & Transactional Views",
    "Data Cleansing, Casting & Regex Normalization"
  ];

  return (
    <section id="sql" className="py-24 bg-deDark-950 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-xs font-mono uppercase tracking-widest">
            <Code2 className="w-3.5 h-3.5" />
            <span>Primary Technical Specialization</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            SQL & Dimensional Data Modeling
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-sans">
            SQL is my strongest foundation. I write performant, clean, production-grade SQL for 
            analytical pipelines, incremental loads, window functions, and Kimball dimensional models.
          </p>
        </div>

        {/* Competency Checklist Bar */}
        <div className="mb-12 p-5 rounded-2xl bg-deDark-900/80 border border-slate-800 shadow-xl">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-mono uppercase font-bold text-slate-200">
                Core SQL Capabilities & Techniques
              </span>
            </div>
            <span className="text-[11px] font-mono text-sky-400">
              Battle-Tested Patterns
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {sqlCompetencies.map((comp, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 text-xs font-mono text-slate-300 p-2 rounded-lg bg-slate-950/70 border border-slate-800/60"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{comp}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Query Showcase Console */}
        <div className="bg-deDark-900 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-xl">
          {/* Top Selector Bar */}
          <div className="flex items-center justify-between p-4 px-6 border-b border-slate-800 bg-slate-950/80 flex-wrap gap-3">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
              {SQL_SHOWCASE.map((snippet) => {
                const isSelected = snippet.id === activeSnippet.id;
                return (
                  <button
                    key={snippet.id}
                    type="button"
                    onClick={() => setSelectedSnippetId(snippet.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors whitespace-nowrap ${
                      isSelected
                        ? "bg-sky-500/20 text-sky-300 border border-sky-500/40 font-semibold"
                        : "text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-transparent"
                    }`}
                  >
                    {snippet.title}
                  </button>
                );
              })}
            </div>

            {/* Copy Button */}
            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 transition-colors shrink-0"
              title="Copy SQL Code"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>Copy Code</span>
                </>
              )}
            </button>
          </div>

          {/* Context & Explanation Header */}
          <div className="p-6 border-b border-slate-800 bg-deDark-950/70 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase px-2 py-0.5 rounded bg-sky-950 text-sky-400 border border-sky-800">
                  {activeSnippet.category}
                </span>
                <span className="text-sm font-bold text-white font-sans">
                  {activeSnippet.title}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                {activeSnippet.description}
              </p>
            </div>

            <div className="lg:col-span-4 p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1 text-xs font-mono">
              <div className="text-[10px] uppercase text-sky-400 font-bold">
                Real-World Business Application
              </div>
              <div className="text-slate-300 text-[11px] leading-relaxed">
                {activeSnippet.businessContext}
              </div>
            </div>
          </div>

          {/* Code Viewer */}
          <div className="p-6 bg-[#070b14] overflow-x-auto">
            <pre className="font-mono text-xs sm:text-sm leading-relaxed text-slate-200">
              <code>{activeSnippet.code}</code>
            </pre>
          </div>

          {/* Terminal Footer */}
          <div className="p-3 px-6 bg-slate-950 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Target Engine: SQL Server / Azure Synapse / Databricks SQL / PostgreSQL</span>
            </div>
            <div className="text-slate-500">ANSI / T-SQL Compliant</div>
          </div>
        </div>
      </div>
    </section>
  );
}
