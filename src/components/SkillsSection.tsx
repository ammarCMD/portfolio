"use client";

import React, { useState } from "react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import { 
  Code2, 
  Layers, 
  Database, 
  Sparkles, 
  Workflow, 
  Wrench, 
  Cloud
} from "lucide-react";

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categoryIcons: Record<string, React.ReactNode> = {
    "Programming & Querying": <Code2 className="w-4 h-4 text-sky-400" />,
    "Data Engineering & Architecture": <Workflow className="w-4 h-4 text-emerald-400" />,
    "Microsoft Azure": <Cloud className="w-4 h-4 text-blue-400" />,
    "Microsoft Fabric": <Sparkles className="w-4 h-4 text-cyan-400" />,
    "Big Data & Distributed Compute": <Layers className="w-4 h-4 text-amber-400" />,
    "Relational & Enterprise Databases": <Database className="w-4 h-4 text-indigo-400" />,
    "Orchestration & DevOps": <Workflow className="w-4 h-4 text-orange-400" />,
    "Analytics & Business Intelligence": <BarChartIcon className="w-4 h-4 text-purple-400" />,
    "AWS & Tools": <Wrench className="w-4 h-4 text-teal-400" />
  };

  function BarChartIcon({ className }: { className?: string }) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    );
  }

  const displayedCategories = selectedCategory === "All"
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="py-24 bg-deDark-950 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-xs font-mono uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5" />
            <span>Categorized Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Stack & Engineering Toolkit
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-sans">
            Grouped logically by domain instead of an unstructured list. SQL is highlighted as my 
            primary foundation, complemented by distributed processing and modern cloud platforms.
          </p>
        </div>

        {/* Category Quick Filter */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-2">
          <div className="inline-flex p-1 rounded-xl bg-deDark-900 border border-slate-800 gap-1">
            <button
              type="button"
              onClick={() => setSelectedCategory("All")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                selectedCategory === "All"
                  ? "bg-sky-500 text-slate-950 font-bold"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              All Categories ({SKILL_CATEGORIES.length})
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.category}
                type="button"
                onClick={() => setSelectedCategory(cat.category)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors whitespace-nowrap hidden md:inline-block ${
                  selectedCategory === cat.category
                    ? "bg-sky-500 text-slate-950 font-bold"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {cat.category.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((group) => (
            <div
              key={group.category}
              className="p-6 rounded-2xl bg-deDark-900/70 border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col justify-between group shadow-lg"
            >
              <div className="space-y-4">
                {/* Category Title */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                      {categoryIcons[group.category] || <Database className="w-4 h-4 text-sky-400" />}
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                        {group.category}
                      </h3>
                      <p className="text-[11px] text-slate-400 font-sans">
                        {group.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-2">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`p-2.5 rounded-xl border transition-all text-xs font-mono flex flex-col justify-center ${
                        skill.isHighlight
                          ? "bg-slate-950 border-sky-500/40 text-slate-100 shadow-sm"
                          : "bg-slate-950/60 border-slate-800/80 text-slate-300"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              skill.isHighlight ? "bg-sky-400" : "bg-slate-600"
                            }`}
                          />
                          <span className={skill.isHighlight ? "font-bold text-white" : "font-normal"}>
                            {skill.name}
                          </span>
                        </div>
                        {skill.isHighlight && (
                          <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-sky-950 text-sky-400 border border-sky-800 font-semibold">
                            Core
                          </span>
                        )}
                      </div>
                      {skill.note && (
                        <div className="text-[10px] text-slate-400 mt-1 pl-3.5 font-sans leading-tight">
                          {skill.note}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Badge */}
              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>{group.skills.length} competencies listed</span>
                <span className="text-sky-400">Validated In Projects</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
