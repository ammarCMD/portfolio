"use client";

import React, { useState } from "react";
import { Project } from "@/data/portfolioData";
import { 
  X, 
  Layers, 
  Workflow, 
  Database, 
  ShieldCheck, 
  BarChart3, 
  Lightbulb, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles,
  AlertCircle
} from "lucide-react";
import { GithubIcon } from "./SocialIcons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<
    "overview" | "architecture" | "model" | "pipeline" | "analytics" | "decisions"
  >("overview");

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-5xl bg-deDark-950 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-slate-800 bg-deDark-900/90 shrink-0">
          <div className="space-y-1.5 pr-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-mono uppercase px-2.5 py-0.5 rounded bg-sky-950/80 text-sky-400 border border-sky-800/60 font-semibold">
                {project.domain}
              </span>
              <span className="text-[11px] font-mono uppercase px-2.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                Technical Case Study
              </span>
              {project.featured && (
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Featured Platform
                </span>
              )}
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-sans">
              {project.title}
            </h2>

            <p className="text-xs sm:text-sm text-slate-400 font-mono">
              {project.subtitle}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors shrink-0"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center gap-2 px-6 py-2.5 border-b border-slate-800/80 bg-slate-950/60 overflow-x-auto shrink-0 font-mono text-xs">
          {[
            { id: "overview", label: "Overview & Problem", icon: <Lightbulb className="w-3.5 h-3.5" /> },
            { id: "architecture", label: "Architecture Flow", icon: <Workflow className="w-3.5 h-3.5" /> },
            { id: "model", label: "Dimensional Model", icon: <Database className="w-3.5 h-3.5" /> },
            { id: "pipeline", label: "Ingestion & Quality", icon: <ShieldCheck className="w-3.5 h-3.5" /> },
            { id: "analytics", label: "Analytics & KPIs", icon: <BarChart3 className="w-3.5 h-3.5" /> },
            { id: "decisions", label: "Engineering Decisions", icon: <Layers className="w-3.5 h-3.5" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as "overview" | "architecture" | "model" | "pipeline" | "analytics" | "decisions")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? "bg-sky-500/20 text-sky-300 border border-sky-500/40 font-semibold"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Modal Body Content (Scrollable) */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          {/* TAB 1: OVERVIEW */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-white mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                  <span>The Business & Operational Problem</span>
                </h3>
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 leading-relaxed">
                  {project.businessProblem}
                </div>
              </div>

              <div>
                <h3 className="text-base font-semibold text-white mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>Engineered Solution Overview</span>
                </h3>
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 leading-relaxed">
                  {project.solutionOverview}
                </div>
              </div>

              <div>
                <h3 className="text-base font-semibold text-white mb-3">
                  Key Technical Capabilities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.keyCapabilities.map((cap, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-950 border border-slate-800/80"
                    >
                      <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                      <span className="text-xs text-slate-300 font-mono">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-base font-semibold text-white mb-2">
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded text-xs font-mono bg-slate-900 text-sky-300 border border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ARCHITECTURE & DATA FLOW */}
          {activeTab === "architecture" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-white mb-2">
                  Architecture Pipeline Chain
                </h3>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-sky-300 font-mono text-xs leading-relaxed overflow-x-auto">
                  {project.architectureSummary}
                </div>
              </div>

              <div>
                <h3 className="text-base font-semibold text-white mb-3">
                  Sequential Data Flow Stages
                </h3>
                <div className="space-y-3">
                  {project.dataFlowSteps.map((flow, i) => (
                    <div
                      key={i}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl bg-slate-900/50 border border-slate-800 gap-3"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-lg bg-sky-950 text-sky-400 border border-sky-800/70 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                          {flow.step}
                        </span>
                        <div>
                          <div className="font-semibold text-slate-200 text-sm">{flow.title}</div>
                          <div className="text-xs text-slate-400 font-sans">{flow.desc}</div>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-sky-300 px-2.5 py-1 rounded bg-slate-950 border border-slate-800 self-start sm:self-center">
                        {flow.tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: DIMENSIONAL MODEL */}
          {activeTab === "model" && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-deDark-900/80 border border-slate-800">
                <div className="text-xs font-mono uppercase text-sky-400 font-bold mb-1">
                  Model Architecture Pattern
                </div>
                <div className="text-base font-bold text-white mb-2">
                  {project.dataModelInfo.type}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                  {project.dataModelInfo.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Facts */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-1.5">
                    <Database className="w-4 h-4" />
                    <span>Fact Tables (Measures & Grain)</span>
                  </div>
                  <ul className="space-y-2">
                    {project.dataModelInfo.facts.map((fact, i) => (
                      <li
                        key={i}
                        className="text-xs font-mono p-2.5 rounded bg-slate-900/90 border border-slate-800/80 text-slate-200"
                      >
                        {fact}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Dimensions */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-sky-400 font-bold flex items-center gap-1.5">
                    <Layers className="w-4 h-4" />
                    <span>Dimension Tables (Context & Hierarchies)</span>
                  </div>
                  <ul className="space-y-2">
                    {project.dataModelInfo.dimensions.map((dim, i) => (
                      <li
                        key={i}
                        className="text-xs font-mono p-2.5 rounded bg-slate-900/90 border border-slate-800/80 text-slate-200"
                      >
                        {dim}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: PIPELINE DESIGN & DATA QUALITY GATES */}
          {activeTab === "pipeline" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-white mb-2">
                  Ingestion Pattern & Watermarking
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  {project.pipelineDesign.ingestion}
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-white mb-2">
                  Transformation & Cleansing Logic
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  {project.pipelineDesign.transformation}
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-white mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Automated Data Quality Checkpoints</span>
                </h3>
                <div className="space-y-2">
                  {project.pipelineDesign.qualityChecks.map((check, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-3 rounded-lg bg-emerald-950/20 border border-emerald-900/40 text-emerald-200 text-xs font-mono"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{check}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: ANALYTICS & KPIS */}
          {activeTab === "analytics" && (
            <div className="space-y-6">
              {project.analyticsInfo.kpisCount && (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-purple-950/60 border border-purple-800/50 text-purple-300 font-mono text-xs">
                  <BarChart3 className="w-4 h-4" />
                  <span>Supports {project.analyticsInfo.kpisCount} across business units</span>
                </div>
              )}

              {/* Implemented Analytics */}
              <div>
                <h3 className="text-base font-semibold text-emerald-400 mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Implemented Analytics & Visual Measures</span>
                </h3>
                <div className="space-y-2">
                  {project.analyticsInfo.implementedAnalytics.map((kpi, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-200 text-xs font-mono flex items-start gap-2.5"
                    >
                      <span className="text-emerald-400 font-bold shrink-0">✓</span>
                      <span>{kpi}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Planned Analytics (Honest Distinction) */}
              {project.analyticsInfo.plannedAnalytics.length > 0 && (
                <div>
                  <h3 className="text-base font-semibold text-slate-400 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-400" />
                    <span>Potential & Planned Analytics Roadmap</span>
                  </h3>
                  <div className="space-y-2">
                    {project.analyticsInfo.plannedAnalytics.map((kpi, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-lg bg-slate-950 border border-slate-800/70 text-slate-400 text-xs font-mono flex items-start gap-2.5"
                      >
                        <span className="text-amber-400 font-bold shrink-0">→</span>
                        <span>{kpi}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 6: ENGINEERING DECISIONS & WHAT THIS DEMONSTRATES */}
          {activeTab === "decisions" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-white mb-3">
                  Key Engineering Decisions & Trade-Offs
                </h3>
                <div className="space-y-3">
                  {project.engineeringDecisions.map((dec, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 text-xs text-slate-300 font-mono leading-relaxed"
                    >
                      <span className="text-sky-400 font-bold">Decision {i + 1}: </span>
                      {dec}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-base font-semibold text-white mb-3">
                  What This Demonstrates To Technical Interviewers
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.whatThisDemonstrates.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer with Actions */}
        <div className="flex items-center justify-between p-4 px-6 border-t border-slate-800 bg-deDark-900/90 shrink-0">
          <div className="text-xs text-slate-400 font-mono">
            Category: <span className="text-slate-200">{project.categories.slice(0, 3).join(", ")}</span>
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View on GitHub</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            )}

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg text-xs font-semibold text-slate-900 bg-slate-200 hover:bg-white transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
