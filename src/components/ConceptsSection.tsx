"use client";

import React, { useState } from "react";
import { CONCEPTS } from "@/data/portfolioData";
import { 
  BookOpen, 
  Layers, 
  Workflow, 
  ShieldCheck, 
  Database, 
  Cpu, 
  CheckCircle2, 
  ArrowRight,
  Scale
} from "lucide-react";

export default function ConceptsSection() {
  const [activeConceptId, setActiveConceptId] = useState<string>("etl-vs-elt");

  const activeConcept = CONCEPTS.find((c) => c.id === activeConceptId) || CONCEPTS[0];

  const conceptIcons: Record<string, React.ReactNode> = {
    "etl-vs-elt": <Workflow className="w-4 h-4 text-sky-400" />,
    "batch-vs-incremental": <Cpu className="w-4 h-4 text-amber-400" />,
    "medallion-architecture": <Layers className="w-4 h-4 text-teal-400" />,
    "star-vs-snowflake": <Database className="w-4 h-4 text-indigo-400" />,
    "data-quality-gates": <ShieldCheck className="w-4 h-4 text-emerald-400" />,
    "partitioning-distributed": <Cpu className="w-4 h-4 text-purple-400" />,
  };

  return (
    <section id="concepts" className="py-24 bg-deDark-900/40 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-xs font-mono uppercase tracking-widest">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Engineering Principles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Data Engineering Concepts & Paradigms
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-sans">
            Demonstrating a solid conceptual understanding of the trade-offs, architecture decisions, 
            and design patterns behind modern data platforms.
          </p>
        </div>

        {/* 2-Column Interactive Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Concept List Selector */}
          <div className="lg:col-span-5 space-y-2.5">
            {CONCEPTS.map((concept) => {
              const isSelected = concept.id === activeConcept.id;
              return (
                <button
                  key={concept.id}
                  type="button"
                  onClick={() => setActiveConceptId(concept.id)}
                  className={`w-full p-4 rounded-xl border text-left transition-all flex items-start justify-between gap-3 ${
                    isSelected
                      ? "bg-deDark-950 border-sky-400/80 shadow-lg shadow-sky-500/10 ring-1 ring-sky-400/40"
                      : "bg-deDark-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/50"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 shrink-0 mt-0.5">
                      {conceptIcons[concept.id] || <Database className="w-4 h-4 text-sky-400" />}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-sky-400 uppercase tracking-wider">
                          {concept.category}
                        </span>
                      </div>
                      <h3
                        className={`text-sm font-bold font-sans mt-0.5 ${
                          isSelected ? "text-white" : "text-slate-300"
                        }`}
                      >
                        {concept.title}
                      </h3>
                      <p className="text-xs text-slate-400 line-clamp-2 mt-1 font-sans">
                        {concept.summary}
                      </p>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 mt-2 shrink-0 transition-transform ${
                      isSelected ? "text-sky-400 translate-x-1" : "text-slate-600"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Concept Deep Dive */}
          <div className="lg:col-span-7 bg-deDark-950 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-2xl space-y-6 relative overflow-hidden backdrop-blur-xl">
            {/* Header */}
            <div className="border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-wider mb-1">
                <span>Domain Focus: {activeConcept.category}</span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {activeConcept.title}
              </h3>
              <p className="text-sm text-slate-300 font-sans leading-relaxed mt-2">
                {activeConcept.summary}
              </p>
            </div>

            {/* Core Breakdown Points */}
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase text-slate-400">
                Architectural Breakdown:
              </div>
              <div className="space-y-2.5">
                {activeConcept.details.map((point, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300 font-sans leading-relaxed flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Engineering Trade-Off Box */}
            <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-800/40 space-y-1.5">
              <div className="text-xs font-mono uppercase text-amber-400 flex items-center gap-2 font-bold">
                <Scale className="w-4 h-4 text-amber-400" />
                <span>The Engineering Trade-Off</span>
              </div>
              <p className="text-xs sm:text-sm text-amber-200/90 font-mono leading-relaxed">
                {activeConcept.engineeringTradeoff}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
