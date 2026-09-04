"use client";

import React from "react";
import { 
  GitBranch, 
  Terminal, 
  CheckCircle2
} from "lucide-react";

export default function DevOpsSection() {
  const practices = [
    {
      title: "Docker & Containerized Clusters",
      badge: "Environment Parity",
      desc: "Spinning up isolated multi-container environments with Docker Compose (Spark Master, Spark Workers, Airflow Scheduler, PostgreSQL) ensuring code behaves identically everywhere."
    },
    {
      title: "Modular Python Project Structure",
      badge: "Clean Architecture",
      desc: "Structuring data pipelines into modular packages with clean separation of extractors, transformers, database loaders, and schema validation utilities."
    },
    {
      title: "CI/CD with GitLab & Jenkins",
      badge: "Automated Deployment",
      desc: "Automated pipelines that run flake8 linting, Black formatting checks, and pytest unit tests on Spark transformation logic before DAG deployment."
    },
    {
      title: "Airflow DAG Orchestration",
      badge: "Workflow Automation",
      desc: "Writing code-as-configuration DAGs with custom operators, automated failure retry policies, SLA timeout monitors, and task sensor dependencies."
    },
    {
      title: "Git Version Control Best Practices",
      badge: "Collaboration",
      desc: "Disciplined feature branching, descriptive semantic commit messages, pull request reviews, and environment separation (`dev`, `staging`, `prod`)."
    },
    {
      title: "Configuration & Secrets Hygiene",
      badge: "Config Isolation",
      desc: "Using `.env` configurations and cloud parameter stores rather than hardcoded connection strings or database paths."
    }
  ];

  return (
    <section className="py-24 bg-deDark-900/40 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-orange-400 text-xs font-mono uppercase tracking-widest">
            <GitBranch className="w-3.5 h-3.5" />
            <span>Software Craftsmanship</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            DevOps & Engineering Practices in Data Systems
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-sans">
            How software engineering discipline complements data engineering: version control, 
            containerization, automated CI/CD testing, and modular pipeline design.
          </p>
        </div>

        {/* Practices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practices.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-deDark-950 border border-slate-800 hover:border-orange-500/40 transition-all flex flex-col justify-between shadow-xl group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-orange-950 text-orange-400 border border-orange-800/60 font-semibold">
                    {item.badge}
                  </span>
                  <Terminal className="w-4 h-4 text-slate-500 group-hover:text-orange-400 transition-colors" />
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-orange-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-2 text-xs font-mono text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Production Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
