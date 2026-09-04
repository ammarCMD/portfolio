"use client";

import React from "react";
import { ON_PREM_ADVANTAGES } from "@/data/portfolioData";
import { 
  Server, 
  Database, 
  Code2, 
  GitMerge, 
  Zap
} from "lucide-react";

export default function OnPremSection() {
  const iconMap: Record<string, React.ReactNode> = {
    database: <Database className="w-5 h-5 text-indigo-400" />,
    code: <Code2 className="w-5 h-5 text-sky-400" />,
    "git-merge": <GitMerge className="w-5 h-5 text-emerald-400" />,
    zap: <Zap className="w-5 h-5 text-amber-400" />
  };

  const databases = [
    { name: "SQL Server", detail: "T-SQL, Stored Procedures, Views, SSMS" },
    { name: "Oracle Database", detail: "PL/SQL, Packages, Cursors, Triggers" },
    { name: "PostgreSQL", detail: "Schema Design, Upserts, Indexing, DBeaver" },
    { name: "MySQL", detail: "Relational Queries, Joins, Normalization" }
  ];

  return (
    <section className="py-24 bg-deDark-950 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-xs font-mono uppercase tracking-widest">
            <Server className="w-3.5 h-3.5" />
            <span>Hybrid Versatility</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            On-Premises Data Engineering & Hybrid Agility
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-sans">
            My experience is not limited to cloud abstractions. I have extensive hands-on proficiency with 
            traditional relational database engines, procedural SQL development, and on-premises data architectures.
          </p>
        </div>

        {/* Database Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {databases.map((db) => (
            <div
              key={db.name}
              className="p-5 rounded-xl bg-deDark-900/80 border border-slate-800 hover:border-indigo-500/40 transition-colors shadow-lg"
            >
              <div className="flex items-center gap-2 mb-2">
                <Database className="w-4 h-4 text-indigo-400" />
                <h3 className="text-base font-bold text-white">{db.name}</h3>
              </div>
              <p className="text-xs text-slate-400 font-mono">
                {db.detail}
              </p>
            </div>
          ))}
        </div>

        {/* 4 Strategic Advantages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ON_PREM_ADVANTAGES.map((adv, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-deDark-900/50 border border-slate-800/80 hover:border-slate-700 transition-all flex items-start gap-4 shadow-md"
            >
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 shrink-0">
                {iconMap[adv.icon] || <Server className="w-5 h-5 text-indigo-400" />}
              </div>
              <div className="space-y-1.5">
                <h4 className="text-base font-bold text-white">
                  {adv.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                  {adv.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Hybrid Bridge Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-slate-900 to-sky-950/40 border border-indigo-800/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-xs font-mono uppercase text-indigo-300 font-bold">
              The Hybrid Advantage
            </div>
            <div className="text-base font-bold text-white">
              Bridging Enterprise Legacy Databases to Cloud Lakehouses
            </div>
            <p className="text-xs text-slate-300 max-w-2xl font-sans">
              Understanding table indexes, execution plans, and procedural PL/SQL enables me to design 
              safer, more efficient extraction pipelines when migrating enterprise systems to Azure ADLS Gen2 and Databricks.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-950 text-indigo-300 border border-indigo-800/60 font-semibold">
              SSMS & DBeaver Native
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
