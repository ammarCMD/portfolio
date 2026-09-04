"use client";

import React from "react";
import { FABRIC_COMPONENTS } from "@/data/portfolioData";
import { 
  Sparkles, 
  Layers, 
  Database, 
  HardDrive, 
  Cpu, 
  BarChart3, 
  Workflow, 
  ArrowRight,
  CheckCircle2,
  Zap
} from "lucide-react";

export default function FabricSection() {
  const componentIcons: Record<string, React.ReactNode> = {
    "OneLake": <HardDrive className="w-5 h-5 text-sky-400" />,
    "Fabric Lakehouse": <Cpu className="w-5 h-5 text-amber-400" />,
    "Fabric Data Warehouse": <Layers className="w-5 h-5 text-emerald-400" />,
    "Fabric Pipelines": <Workflow className="w-5 h-5 text-cyan-400" />,
    "Power BI Direct Lake": <BarChart3 className="w-5 h-5 text-purple-400" />
  };

  return (
    <section id="fabric" className="py-24 bg-deDark-900/40 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Next-Generation Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Modern Data Platform — Microsoft Fabric
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-sans">
            Developing practical, hands-on expertise with Microsoft Fabric&apos;s unified SaaS data ecosystem. 
            Understanding the structural harmony between OneLake, Lakehouse Spark compute, T-SQL Warehouses, and Direct Lake BI.
          </p>
        </div>

        {/* Unified Fabric Pipeline Chain Card */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-deDark-950 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
            <div>
              <div className="text-xs font-mono uppercase text-cyan-400 font-bold tracking-wider">
                End-to-End Microsoft Fabric Architecture Flow
              </div>
              <div className="text-sm text-slate-300 font-sans mt-0.5">
                Zero data duplication across the enterprise lifecycle
              </div>
            </div>
            <span className="text-xs font-mono px-2.5 py-1 rounded bg-sky-950/80 text-sky-400 border border-sky-800">
              Open Delta Format
            </span>
          </div>

          <div className="overflow-x-auto pb-2">
            <div className="min-w-[760px] flex items-center justify-between gap-2 text-center">
              <div className="flex-1 p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Input</div>
                <div className="text-xs font-bold text-white">Data Sources</div>
                <div className="text-[10px] text-slate-400 font-mono">APIs / Databases / CSV</div>
              </div>

              <ArrowRight className="w-4 h-4 text-sky-400 shrink-0" />

              <div className="flex-1 p-3 rounded-xl bg-slate-900 border border-sky-500/40 space-y-1">
                <div className="text-[10px] font-mono text-sky-400 uppercase">Ingest</div>
                <div className="text-xs font-bold text-white">Fabric Pipeline</div>
                <div className="text-[10px] text-slate-400 font-mono">Data Factory Ingestion</div>
              </div>

              <ArrowRight className="w-4 h-4 text-sky-400 shrink-0" />

              <div className="flex-1 p-3 rounded-xl bg-sky-950/60 border border-sky-500/60 space-y-1 shadow-lg">
                <div className="text-[10px] font-mono text-sky-300 uppercase font-bold">Storage</div>
                <div className="text-xs font-bold text-white">OneLake</div>
                <div className="text-[10px] text-sky-300 font-mono">Single Logical Lake</div>
              </div>

              <ArrowRight className="w-4 h-4 text-amber-400 shrink-0" />

              <div className="flex-1 p-3 rounded-xl bg-slate-900 border border-amber-500/40 space-y-1">
                <div className="text-[10px] font-mono text-amber-400 uppercase">Transform</div>
                <div className="text-xs font-bold text-white">Fabric Lakehouse</div>
                <div className="text-[10px] text-slate-400 font-mono">PySpark & Medallion</div>
              </div>

              <ArrowRight className="w-4 h-4 text-emerald-400 shrink-0" />

              <div className="flex-1 p-3 rounded-xl bg-slate-900 border border-emerald-500/40 space-y-1">
                <div className="text-[10px] font-mono text-emerald-400 uppercase">Model</div>
                <div className="text-xs font-bold text-white">Fabric Warehouse</div>
                <div className="text-[10px] text-slate-400 font-mono">Curated T-SQL Star Schema</div>
              </div>

              <ArrowRight className="w-4 h-4 text-purple-400 shrink-0" />

              <div className="flex-1 p-3 rounded-xl bg-slate-900 border border-purple-500/40 space-y-1">
                <div className="text-[10px] font-mono text-purple-400 uppercase">Consume</div>
                <div className="text-xs font-bold text-white">Power BI</div>
                <div className="text-[10px] text-slate-400 font-mono">Direct Lake Semantic Model</div>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Component Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FABRIC_COMPONENTS.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-deDark-950 border border-slate-800/80 hover:border-cyan-500/40 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-slate-700 transition-colors">
                    {componentIcons[item.title] || <Database className="w-5 h-5 text-cyan-400" />}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-cyan-300 border border-slate-800">
                    {item.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs font-mono text-slate-400 mt-0.5">
                    {item.role}
                  </div>
                </div>

                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-cyan-400/90 italic bg-slate-900/40 p-2.5 rounded-lg border border-slate-800/50">
                &ldquo;{item.analogy}&rdquo;
              </div>
            </div>
          ))}

          {/* Key Insight Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-sky-950/30 via-slate-900 to-deDark-950 border border-sky-800/40 shadow-xl flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-sky-400 font-bold uppercase">
                <Zap className="w-4 h-4 text-sky-400" />
                <span>Architectural Understanding</span>
              </div>
              <h3 className="text-base font-bold text-white">
                Why Fabric Matters in My Stack
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Rather than treating Fabric as a checklist item, I understand its true architectural value: 
                unifying disparate pipelines, lake storage, and relational warehouses on a single copy of 
                open Delta data, completely eliminating the need for scheduled ETL copies between layers.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-2 text-xs font-mono text-emerald-400">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Direct Lake Mode & OneLake Integration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
