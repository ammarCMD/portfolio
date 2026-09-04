import React from "react";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/data/portfolioData";
import { 
  ArrowLeft, 
  ExternalLink, 
  Database, 
  Workflow, 
  ShieldCheck, 
  BarChart3, 
  Layers, 
  CheckCircle2, 
  Sparkles,
  AlertCircle
} from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const project = PROJECTS.find((p) => p.id === params.id);
  if (!project) {
    return {
      title: "Project Not Found | Ammar Portfolio",
    };
  }

  return {
    title: `${project.shortTitle} | Ammar Data Engineering Case Study`,
    description: project.subtitle,
    openGraph: {
      title: `${project.title} - Data Engineering Architecture`,
      description: project.subtitle,
    },
  };
}

export default function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const project = PROJECTS.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  const currentIndex = PROJECTS.findIndex((p) => p.id === params.id);
  const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : null;
  const nextProject = currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-deDark-950 text-slate-100 selection:bg-sky-500/30 selection:text-sky-200">
      {/* Top Sticky Navigation */}
      <header className="sticky top-0 z-40 bg-deDark-950/85 backdrop-blur-md border-b border-slate-800/80 py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <a
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-slate-300 hover:text-sky-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </a>

          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono uppercase px-2.5 py-1 rounded bg-slate-900 text-sky-400 border border-slate-800 font-semibold">
              {project.domain}
            </span>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-12">
        {/* Hero Banner */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono uppercase px-2.5 py-0.5 rounded bg-sky-950 text-sky-400 border border-sky-800 font-semibold">
              {project.domain}
            </span>
            {project.featured && (
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center gap-1 font-semibold">
                <Sparkles className="w-3 h-3" />
                Primary Engineering Showcase
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-sans max-w-3xl">
            {project.subtitle}
          </p>

          {/* Architecture Chain Box */}
          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
            <div className="text-[10px] font-mono uppercase text-sky-400 font-bold tracking-wider">
              Architecture Pipeline Chain:
            </div>
            <div className="text-xs sm:text-sm font-mono text-slate-200 overflow-x-auto">
              {project.architectureSummary}
            </div>
          </div>

          {/* Tech Pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900 text-sky-300 border border-slate-800"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Section 1: Business Problem & Engineered Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-6 sm:p-7 rounded-2xl bg-deDark-900/70 border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-rose-400 font-bold uppercase">
              <span className="w-2 h-2 rounded-full bg-rose-400"></span>
              <span>The Operational Challenge</span>
            </div>
            <h2 className="text-lg font-bold text-white font-sans">
              Business Context & Pain Points
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
              {project.businessProblem}
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-deDark-900/70 border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>The Technical Solution</span>
            </div>
            <h2 className="text-lg font-bold text-white font-sans">
              Engineered Architecture Overview
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
              {project.solutionOverview}
            </p>
          </div>
        </div>

        {/* Section 2: Sequential Data Flow Stages */}
        <div className="p-6 sm:p-8 rounded-2xl bg-deDark-900 border border-slate-800 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <div className="text-xs font-mono uppercase text-sky-400 font-bold">
                Pipeline Lifecycle
              </div>
              <h2 className="text-xl font-bold text-white font-sans">
                Sequential Data Flow & Transformations
              </h2>
            </div>
            <Workflow className="w-5 h-5 text-sky-400" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.dataFlowSteps.map((flow) => (
              <div
                key={flow.step}
                className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-6 h-6 rounded bg-sky-950 text-sky-400 border border-sky-800 flex items-center justify-center font-mono font-bold text-xs">
                      {flow.step}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                      {flow.tech}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-white font-sans">
                    {flow.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-sans mt-1">
                    {flow.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Dimensional Data Modeling */}
        <div className="p-6 sm:p-8 rounded-2xl bg-deDark-900 border border-slate-800 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <div className="text-xs font-mono uppercase text-emerald-400 font-bold">
                Kimball Methodology
              </div>
              <h2 className="text-xl font-bold text-white font-sans">
                Dimensional Model & Schema Design
              </h2>
            </div>
            <Database className="w-5 h-5 text-emerald-400" />
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <div className="text-xs font-mono font-bold text-white">
              {project.dataModelInfo.type}
            </div>
            <p className="text-xs text-slate-300 font-sans">
              {project.dataModelInfo.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Fact Tables */}
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="text-xs font-mono uppercase text-emerald-400 font-bold flex items-center gap-1.5">
                <Database className="w-4 h-4" />
                <span>Fact Tables (Measures & Grain)</span>
              </div>
              <ul className="space-y-2">
                {project.dataModelInfo.facts.map((fact, idx) => (
                  <li
                    key={idx}
                    className="p-3 rounded-lg bg-slate-900 text-xs font-mono text-slate-200 border border-slate-800"
                  >
                    {fact}
                  </li>
                ))}
              </ul>
            </div>

            {/* Dimension Tables */}
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="text-xs font-mono uppercase text-sky-400 font-bold flex items-center gap-1.5">
                <Layers className="w-4 h-4" />
                <span>Dimension Tables (Context & Hierarchies)</span>
              </div>
              <ul className="space-y-2">
                {project.dataModelInfo.dimensions.map((dim, idx) => (
                  <li
                    key={idx}
                    className="p-3 rounded-lg bg-slate-900 text-xs font-mono text-slate-200 border border-slate-800"
                  >
                    {dim}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Section 4: Ingestion Design & Automated Quality Gates */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-6 sm:p-7 rounded-2xl bg-deDark-900 border border-slate-800 space-y-4">
            <div className="text-xs font-mono uppercase text-sky-400 font-bold">
              Ingestion & Transformation
            </div>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300 font-sans">
              <div>
                <span className="font-semibold text-white block mb-1">Ingestion Strategy:</span>
                <p className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300">
                  {project.pipelineDesign.ingestion}
                </p>
              </div>
              <div>
                <span className="font-semibold text-white block mb-1">Transformation Engine:</span>
                <p className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300">
                  {project.pipelineDesign.transformation}
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-deDark-900 border border-slate-800 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-emerald-400 font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Automated Quality Gates</span>
            </div>
            <div className="space-y-2">
              {project.pipelineDesign.qualityChecks.map((check, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-900/40 text-xs font-mono text-emerald-200 flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{check}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 5: Analytics KPIs & Business Measures */}
        <div className="p-6 sm:p-8 rounded-2xl bg-deDark-900 border border-slate-800 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <div className="text-xs font-mono uppercase text-purple-400 font-bold">
                Analytical Consumption
              </div>
              <h2 className="text-xl font-bold text-white font-sans">
                Power BI KPIs & Decision Support Metrics
              </h2>
            </div>
            <BarChart3 className="w-5 h-5 text-purple-400" />
          </div>

          <div className="space-y-3">
            <div className="text-xs font-mono uppercase text-emerald-400 font-semibold">
              Implemented Business Measures:
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.analyticsInfo.implementedAnalytics.map((kpi, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-200 flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{kpi}</span>
                </div>
              ))}
            </div>
          </div>

          {project.analyticsInfo.plannedAnalytics.length > 0 && (
            <div className="space-y-3 pt-3 border-t border-slate-800">
              <div className="text-xs font-mono uppercase text-amber-400 font-semibold">
                Planned Analytics Roadmap (Distinguished Factual Representation):
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.analyticsInfo.plannedAnalytics.map((kpi, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs font-mono text-slate-400 flex items-start gap-2.5"
                  >
                    <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{kpi}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Section 6: Engineering Decisions & What This Demonstrates */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-6 sm:p-7 rounded-2xl bg-deDark-900 border border-slate-800 space-y-4">
            <div className="text-xs font-mono uppercase text-sky-400 font-bold">
              Engineering Decisions
            </div>
            <div className="space-y-2.5">
              {project.engineeringDecisions.map((dec, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 leading-relaxed"
                >
                  <span className="text-sky-400 font-bold">Decision {idx + 1}: </span>
                  {dec}
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-deDark-900 border border-slate-800 space-y-4">
            <div className="text-xs font-mono uppercase text-teal-400 font-bold">
              What This Demonstrates
            </div>
            <div className="space-y-2.5">
              {project.whatThisDemonstrates.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation between projects */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          {prevProject ? (
            <a
              href={`/projects/${prevProject.id}`}
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous: {prevProject.shortTitle}</span>
            </a>
          ) : <div />}

          <a
            href="/#projects"
            className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 transition-colors"
          >
            All 6 Projects
          </a>

          {nextProject ? (
            <a
              href={`/projects/${nextProject.id}`}
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <span>Next: {nextProject.shortTitle}</span>
              <span className="text-sky-400">→</span>
            </a>
          ) : <div />}
        </div>
      </main>
    </div>
  );
}
