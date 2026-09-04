"use client";

import React, { useState } from "react";
import { PIPELINE_STAGES } from "@/data/portfolioData";
import { 
  Workflow, 
  Database, 
  HardDrive, 
  Cpu, 
  Layers, 
  Activity, 
  BarChart3, 
  ShieldCheck, 
  FileCode,
  CheckCircle2,
  ChevronRight
} from "lucide-react";

export default function PipelineVisualizer() {
  const [selectedStageId, setSelectedStageId] = useState<string>("source");

  const stageIcons: Record<string, React.ReactNode> = {
    source: <Database className="w-5 h-5" />,
    ingest: <Workflow className="w-5 h-5" />,
    store: <HardDrive className="w-5 h-5" />,
    transform: <Cpu className="w-5 h-5" />,
    model: <Layers className="w-5 h-5" />,
    serve: <Activity className="w-5 h-5" />,
    analyze: <BarChart3 className="w-5 h-5" />
  };

  const activeStage = PIPELINE_STAGES.find((s) => s.id === selectedStageId) || PIPELINE_STAGES[0];

  return (
    <section id="pipeline" className="py-24 bg-deDark-900/40 border-b border-slate-800/80 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-xs font-mono uppercase tracking-widest">
            <Workflow className="w-3.5 h-3.5" />
            <span>Interactive Data Lifecycle</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            End-to-End Data Pipeline Architecture
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-sans">
            From raw, uncurated enterprise transactions to governed dimensional models and decision-making BI. 
            Click any stage to inspect the engineering implementation and technologies.
          </p>
        </div>

        {/* Pipeline Stage Bar */}
        <div className="mb-10 overflow-x-auto pb-4 pt-2">
          <div className="flex items-center min-w-[760px] lg:min-w-full justify-between gap-1 sm:gap-2">
            {PIPELINE_STAGES.map((stage, idx) => {
              const isSelected = stage.id === activeStage.id;
              return (
                <React.Fragment key={stage.id}>
                  {/* Stage Button */}
                  <button
                    type="button"
                    onClick={() => setSelectedStageId(stage.id)}
                    onMouseEnter={() => setSelectedStageId(stage.id)}
                    className={`flex-1 flex flex-col items-center p-3 sm:p-4 rounded-xl border transition-all duration-200 text-left focus:outline-none ${
                      isSelected
                        ? "bg-deDark-850 border-sky-400/70 shadow-lg shadow-sky-500/10 ring-1 ring-sky-400/50"
                        : "bg-deDark-950/70 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60"
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-2">
                      <span
                        className={`text-[10px] font-mono font-bold ${
                          isSelected ? "text-sky-400" : "text-slate-500"
                        }`}
                      >
                        {stage.number}
                      </span>
                      <div
                        className={`p-1.5 rounded-lg ${
                          isSelected
                            ? "bg-sky-500/20 text-sky-300"
                            : "bg-slate-900 text-slate-400"
                        }`}
                      >
                        {stageIcons[stage.id]}
                      </div>
                    </div>

                    <div className="w-full">
                      <div
                        className={`text-xs sm:text-sm font-bold tracking-wider font-mono ${
                          isSelected ? "text-white" : "text-slate-300"
                        }`}
                      >
                        {stage.name}
                      </div>
                      <div className="text-[10px] text-slate-400 font-sans truncate">
                        {stage.badge}
                      </div>
                    </div>

                    {/* Active Bottom Indicator */}
                    <div
                      className={`w-full h-1 rounded-full mt-3 transition-colors ${
                        isSelected ? "bg-gradient-to-r from-sky-400 to-teal-400" : "bg-transparent"
                      }`}
                    />
                  </button>

                  {/* Connector Arrow */}
                  {idx < PIPELINE_STAGES.length - 1 && (
                    <div className="text-slate-600 px-0.5 shrink-0 hidden sm:block">
                      <ChevronRight className="w-4 h-4 text-slate-600" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Active Stage Inspector Panel */}
        <div className="bg-deDark-900/90 rounded-2xl border border-slate-800 shadow-2xl p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden">
          {/* Accent border bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-teal-400 to-indigo-500" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Stage Title & Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl sm:text-3xl font-mono font-extrabold text-sky-400">
                  STAGE {activeStage.number}
                </span>
                <span className="text-slate-600 font-mono text-xl">/</span>
                <span className="text-xl sm:text-2xl font-extrabold text-white font-mono tracking-wide">
                  {activeStage.name}
                </span>
                <span className="text-xs font-mono uppercase px-2.5 py-1 rounded bg-slate-800 text-sky-300 border border-slate-700">
                  {activeStage.badge}
                </span>
              </div>

              <div>
                <h3 className="text-base font-semibold text-slate-200 mb-1">
                  Primary Role in Lifecycle
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                  {activeStage.role}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                <div className="text-xs font-mono uppercase text-slate-400 flex items-center gap-2">
                  <FileCode className="w-3.5 h-3.5 text-sky-400" />
                  <span>Engineering Methodology & Execution</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeStage.details}
                </p>
              </div>

              {/* Quality Gate Checkpoint */}
              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-800/40 space-y-1.5">
                <div className="text-xs font-mono uppercase text-emerald-400 flex items-center gap-2 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Data Quality & Integrity Checkpoint</span>
                </div>
                <p className="text-xs sm:text-sm text-emerald-200/90 font-mono">
                  {activeStage.qualityGate}
                </p>
              </div>
            </div>

            {/* Right: Technologies & Data Formats Breakdown */}
            <div className="lg:col-span-5 space-y-6">
              {/* Technologies Used */}
              <div className="bg-slate-950/80 p-5 rounded-xl border border-slate-800/80 space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center justify-between">
                  <span>Technologies & Frameworks</span>
                  <span className="text-[10px] text-sky-400 font-bold">PROVEN STACK</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeStage.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-900 border border-slate-700/80 text-slate-200 flex items-center gap-1.5 shadow-sm"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Data Formats & Protocols */}
              <div className="bg-slate-950/80 p-5 rounded-xl border border-slate-800/80 space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Data Formats & Storage Paradigms
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeStage.formats.map((fmt) => (
                    <span
                      key={fmt}
                      className="px-2.5 py-1 rounded text-xs font-mono bg-sky-950/40 border border-sky-800/50 text-sky-300"
                    >
                      {fmt}
                    </span>
                  ))}
                </div>
              </div>

              {/* Architectural Relationship Note */}
              <div className="p-4 rounded-xl bg-deDark-850/80 border border-slate-800 text-xs text-slate-400 font-mono leading-relaxed">
                <span className="text-sky-400 font-semibold">Continuous Lineage: </span>
                Every stage maintains upstream traceability. Ingestion logs capture source timestamps, 
                Medallion tiers enforce schema compliance, and dimensional models surface certified business definitions.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
