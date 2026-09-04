"use client";

import React, { useState } from "react";
import { PROJECTS, Project } from "@/data/portfolioData";
import ProjectModal from "./ProjectModal";
import { 
  FolderGit2, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Filter
} from "lucide-react";
import { GithubIcon } from "./SocialIcons";

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const filters = [
    "All",
    "Azure",
    "Databricks",
    "Spark",
    "Microsoft Fabric",
    "SQL",
    "Python",
    "Power BI",
    "Data Warehouse",
    "Lakehouse",
    "ETL",
    "Healthcare",
    "Analytics"
  ];

  const filteredProjects = selectedFilter === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.categories.includes(selectedFilter));

  return (
    <section id="projects" className="py-24 bg-deDark-950 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-xs font-mono uppercase tracking-widest">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Production-Oriented Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineered Data Platforms & Pipelines
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-sans">
            Real data engineering architectures demonstrating Medallion lakehouse tiers, Kimball dimensional 
            modeling, distributed PySpark processing, and automated quality validation.
          </p>
        </div>

        {/* Filter Badges Bar */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3 text-xs font-mono text-slate-400">
            <Filter className="w-3.5 h-3.5 text-sky-400" />
            <span>Filter By Technology & Domain:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => {
              const isSelected = selectedFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-150 ${
                    isSelected
                      ? "bg-sky-500 text-slate-950 font-bold shadow-md shadow-sky-500/20"
                      : "bg-deDark-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800/80 border border-slate-800"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden group ${
                project.featured
                  ? "bg-deDark-900/90 border-slate-700/80 hover:border-sky-500/50 shadow-xl shadow-black/40"
                  : "bg-deDark-900/60 border-slate-800/80 hover:border-slate-700 hover:bg-deDark-900/80"
              }`}
            >
              {/* Card Top / Header */}
              <div className="p-6 sm:p-7 space-y-4">
                {/* Domain & Featured Badges */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono uppercase px-2.5 py-1 rounded bg-slate-950 text-sky-400 border border-slate-800 font-semibold">
                    {project.domain}
                  </span>
                  {project.featured && (
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center gap-1 font-semibold">
                      <Sparkles className="w-3 h-3" />
                      Primary Showcase
                    </span>
                  )}
                </div>

                {/* Project Title & Subtitle */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-sky-300 transition-colors tracking-tight font-sans">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 font-mono mt-1">
                    {project.subtitle}
                  </p>
                </div>

                {/* Architecture Chain Pill */}
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 text-[11px] font-mono text-slate-300 space-y-1">
                  <div className="text-[10px] uppercase text-sky-400 font-bold tracking-wider">
                    Pipeline Architecture:
                  </div>
                  <div className="truncate text-slate-300">
                    {project.architectureSummary}
                  </div>
                </div>

                {/* Business Challenge Preview */}
                <div className="text-xs text-slate-300 leading-relaxed font-sans line-clamp-3">
                  <span className="font-semibold text-slate-200">The Problem: </span>
                  {project.businessProblem}
                </div>

                {/* Engineering Highlights */}
                <div className="space-y-1.5 pt-2">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    Key Engineering Contributions:
                  </div>
                  <ul className="space-y-1.5">
                    {project.engineeringWork.slice(0, 3).map((work, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-slate-300 font-sans flex items-start gap-2"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{work}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Pills */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 6 && (
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950 text-slate-500 border border-slate-800">
                      +{project.technologies.length - 6} more
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-4 px-6 sm:px-7 bg-slate-950/70 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setActiveProjectModal(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 font-mono transition-colors"
                >
                  <span>Explore Deep Dive & Schema</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                      title="View Verified GitHub Code"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={() => setActiveProjectModal(project)}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-600 transition-all"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Technical Case Study Modal */}
      {activeProjectModal && (
        <ProjectModal
          project={activeProjectModal}
          onClose={() => setActiveProjectModal(null)}
        />
      )}
    </section>
  );
}
