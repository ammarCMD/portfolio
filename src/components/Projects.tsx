"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PROJECTS } from "@/data/portfolioData";
import { 
  FolderGit2, 
  ArrowRight, 
  Sparkles, 
  Filter 
} from "lucide-react";
import { GithubIcon } from "./SocialIcons";

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

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
    <section id="projects" className="py-24 bg-deDark-950 border-b border-slate-800/80 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-xs font-mono uppercase tracking-widest">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Production-Oriented Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineered Data Platforms & Pipelines
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-sans">
            Real data engineering architectures demonstrating Medallion lakehouse tiers, Kimball dimensional 
            modeling, distributed PySpark processing, and automated quality validation. Click any project to explore its full technical case study.
          </p>
        </div>

        {/* Filter Badges Bar */}
        <div className="mb-10">
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

        {/* Projects Grid: Compact Cards with Small Detail and Direct Dedicated Page Link */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:shadow-2xl hover:shadow-sky-500/10 ${
                project.featured
                  ? "bg-deDark-900/90 border-slate-700 hover:border-sky-500/50"
                  : "bg-deDark-900/50 border-slate-800/80 hover:border-slate-700 hover:bg-deDark-900/80"
              }`}
            >
              {/* Card Body */}
              <div className="p-5 sm:p-6 space-y-3.5">
                {/* Domain & Featured Badges */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded bg-slate-950 text-sky-400 border border-slate-800 font-semibold">
                    {project.domain}
                  </span>
                  {project.featured && (
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center gap-1 font-semibold">
                      <Sparkles className="w-3 h-3" />
                      Featured
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <div>
                  <Link
                    href={`/projects/${project.id}`}
                    className="group-hover:text-sky-300 transition-colors"
                  >
                    <h3 className="text-lg font-bold text-white tracking-tight font-sans line-clamp-2 leading-snug">
                      {project.shortTitle}
                    </h3>
                  </Link>
                  <p className="text-xs text-slate-400 font-sans mt-1 line-clamp-2">
                    {project.subtitle}
                  </p>
                </div>

                {/* Pipeline Chain */}
                <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800/80 font-mono text-[11px] text-slate-300 truncate">
                  <span className="text-sky-400 font-semibold text-[10px] uppercase mr-1.5">Stack:</span>
                  {project.architectureSummary}
                </div>

                {/* Technologies Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950 text-slate-300 border border-slate-800/80"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-slate-950 text-slate-500 border border-slate-800/80">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer: Direct Link to Dedicated Page & GitHub */}
              <div className="p-3.5 px-5 sm:px-6 bg-slate-950/70 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 group-hover:text-sky-300 font-mono transition-colors"
                >
                  <span>Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                      title="View Verified GitHub Code"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <Link
                    href={`/projects/${project.id}`}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-600 transition-all"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
