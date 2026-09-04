"use client";

import React, { useState } from "react";
import { 
  Workflow, 
  Layers, 
  Database, 
  Cpu, 
  HardDrive, 
  BarChart3, 
  GitBranch, 
  ShieldCheck, 
  Sparkles,
  ArrowRight
} from "lucide-react";

export default function ArchitectureSection() {
  const [selectedDiagram, setSelectedDiagram] = useState<
    "healthcare" | "flight" | "local" | "fabric"
  >("healthcare");

  return (
    <section id="architecture" className="py-24 bg-deDark-900/50 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-xs font-mono uppercase tracking-widest">
            <Workflow className="w-3.5 h-3.5" />
            <span>Cloud & Distributed System Diagrams</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Architecture Blueprints
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-sans">
            Clean architectural specifications modeling ingestion, Medallion lakehouse zones, 
            distributed compute orchestration, and enterprise consumption.
          </p>
        </div>

        {/* Diagram Switcher Tabs */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2">
          <div className="inline-flex p-1.5 rounded-xl bg-deDark-950 border border-slate-800 gap-1.5 shadow-inner">
            {[
              { id: "healthcare", label: "Healthcare Lakehouse", sub: "Azure Medallion" },
              { id: "flight", label: "Flight Data Platform", sub: "Partitioned Lakehouse" },
              { id: "local", label: "Local Enterprise ETL", sub: "Spark + Airflow + Docker" },
              { id: "fabric", label: "Microsoft Fabric", sub: "Unified OneLake Platform" },
            ].map((tab) => {
              const isSelected = selectedDiagram === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedDiagram(tab.id as "healthcare" | "flight" | "local" | "fabric")}
                  className={`px-4 py-2.5 rounded-lg text-xs font-mono transition-all flex flex-col items-center ${
                    isSelected
                      ? "bg-sky-500 text-slate-950 font-bold shadow-md shadow-sky-500/20"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
                  }`}
                >
                  <span className="font-semibold text-xs">{tab.label}</span>
                  <span className={`text-[10px] ${isSelected ? "text-slate-900/80" : "text-slate-500"}`}>
                    {tab.sub}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* DIAGRAM DISPLAY CONTAINER */}
        <div className="bg-deDark-950 rounded-2xl border border-slate-800 shadow-2xl p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden">
          {/* Subtle grid backdrop */}
          <div className="absolute inset-0 bg-grid-de opacity-40 pointer-events-none" />

          {/* DIAGRAM 1: HEALTHCARE ENTERPRISE LAKEHOUSE */}
          {selectedDiagram === "healthcare" && (
            <div className="space-y-8 relative">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span>Healthcare Enterprise Lakehouse</span>
                    <span className="text-xs font-mono text-sky-400 font-normal px-2 py-0.5 rounded bg-sky-950 border border-sky-800">
                      Azure & Databricks
                    </span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 font-mono mt-1">
                    Multi-tier Medallion architecture ingesting clinical feeds into ADLS Gen2, 
                    cleansing in Databricks, and serving through Synapse & Power BI.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 px-3 py-1.5 rounded-lg border border-emerald-800/50">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Privacy & Security Compliant Patterns</span>
                </div>
              </div>

              {/* Visual Node Diagram (SVG & Styled Flex Flow) */}
              <div className="overflow-x-auto py-6">
                <div className="min-w-[860px] flex items-center justify-between gap-3">
                  {/* Node 1: Sources */}
                  <div className="w-36 p-3.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-center space-y-1.5 shadow-lg">
                    <div className="w-8 h-8 mx-auto rounded-lg bg-indigo-950 text-indigo-400 flex items-center justify-center border border-indigo-800">
                      <Database className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-bold text-white">Clinical Sources</div>
                    <div className="text-[10px] text-slate-400 font-mono">Oracle / PL/SQL, EHR Feeds, Triage Logs</div>
                  </div>

                  {/* Flow Arrow */}
                  <div className="text-slate-500 font-mono text-xs flex flex-col items-center">
                    <span>ADF Batch</span>
                    <ArrowRight className="w-4 h-4 text-sky-400" />
                  </div>

                  {/* Node 2: Ingestion & ADLS Gen2 */}
                  <div className="w-40 p-3.5 rounded-xl bg-slate-900/90 border border-sky-500/40 text-center space-y-1.5 shadow-lg">
                    <div className="w-8 h-8 mx-auto rounded-lg bg-sky-950 text-sky-400 flex items-center justify-center border border-sky-800">
                      <HardDrive className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-bold text-white">ADLS Gen2 Landing</div>
                    <div className="text-[10px] text-sky-300 font-mono">Azure Data Lake Storage (Hierarchical)</div>
                  </div>

                  {/* Flow Arrow */}
                  <div className="text-slate-500 font-mono text-xs flex flex-col items-center">
                    <span>Bronze Load</span>
                    <ArrowRight className="w-4 h-4 text-amber-400" />
                  </div>

                  {/* Node 3: Medallion in Databricks */}
                  <div className="w-56 p-4 rounded-xl bg-deDark-900 border border-amber-500/50 text-center space-y-2 shadow-xl ring-1 ring-amber-500/20">
                    <div className="w-8 h-8 mx-auto rounded-lg bg-amber-950 text-amber-400 flex items-center justify-center border border-amber-800">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-bold text-white">Azure Databricks (PySpark)</div>
                    <div className="grid grid-cols-3 gap-1 text-[9px] font-mono pt-1">
                      <span className="bg-amber-950/60 text-amber-300 p-1 rounded border border-amber-800/50">
                        Bronze Raw
                      </span>
                      <span className="bg-slate-800 text-slate-200 p-1 rounded border border-slate-700">
                        Silver Clean
                      </span>
                      <span className="bg-emerald-950/60 text-emerald-300 p-1 rounded border border-emerald-800/50">
                        Gold Model
                      </span>
                    </div>
                  </div>

                  {/* Flow Arrow */}
                  <div className="text-slate-500 font-mono text-xs flex flex-col items-center">
                    <span>Curated Load</span>
                    <ArrowRight className="w-4 h-4 text-emerald-400" />
                  </div>

                  {/* Node 4: Synapse */}
                  <div className="w-40 p-3.5 rounded-xl bg-slate-900/90 border border-emerald-500/40 text-center space-y-1.5 shadow-lg">
                    <div className="w-8 h-8 mx-auto rounded-lg bg-emerald-950 text-emerald-400 flex items-center justify-center border border-emerald-800">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-bold text-white">Synapse Analytics</div>
                    <div className="text-[10px] text-emerald-300 font-mono">Dedicated SQL Pool (Star Schema Facts)</div>
                  </div>

                  {/* Flow Arrow */}
                  <div className="text-slate-500 font-mono text-xs flex flex-col items-center">
                    <span>DAX Semantic</span>
                    <ArrowRight className="w-4 h-4 text-purple-400" />
                  </div>

                  {/* Node 5: Power BI */}
                  <div className="w-36 p-3.5 rounded-xl bg-slate-900/90 border border-purple-500/40 text-center space-y-1.5 shadow-lg">
                    <div className="w-8 h-8 mx-auto rounded-lg bg-purple-950 text-purple-400 flex items-center justify-center border border-purple-800">
                      <BarChart3 className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-bold text-white">Power BI</div>
                    <div className="text-[10px] text-purple-300 font-mono">100+ KPIs & Clinical Dashboards</div>
                  </div>
                </div>
              </div>

              {/* Architectural Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
                <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800 space-y-1">
                  <div className="text-xs font-bold text-sky-400 font-mono">Ingestion & Security</div>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    Automated ADF pipelines utilize Azure Key Vault for connection secrets and Managed Identities 
                    to ensure zero hardcoded database credentials.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800 space-y-1">
                  <div className="text-xs font-bold text-amber-400 font-mono">Medallion Delta Processing</div>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    PySpark jobs enforce strict schema rules, remove duplicates, and apply business logic 
                    transitioning Bronze Delta tables to curated Gold dimensional aggregates.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800 space-y-1">
                  <div className="text-xs font-bold text-emerald-400 font-mono">Analytical Serving</div>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    Synapse Analytics hosts Kimball star schemas with clustered columnstore indexes, 
                    feeding Power BI for sub-second report response across millions of clinical events.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* DIAGRAM 2: FLIGHT DATA PLATFORM */}
          {selectedDiagram === "flight" && (
            <div className="space-y-8 relative">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span>Flight Data Engineering & Analytics Platform</span>
                    <span className="text-xs font-mono text-cyan-400 font-normal px-2 py-0.5 rounded bg-cyan-950 border border-cyan-800">
                      Partitioned Lakehouse
                    </span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 font-mono mt-1">
                    Bureau of Transportation Statistics On-Time Performance datasets processed through 
                    high-throughput Spark jobs, partitioned Delta Lake, and Microsoft Fabric.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-sky-400 bg-sky-950/40 px-3 py-1.5 rounded-lg border border-sky-800/50">
                  <HardDrive className="w-4 h-4" />
                  <span>Partition Pruning Optimized</span>
                </div>
              </div>

              {/* Visual Flow */}
              <div className="overflow-x-auto py-6">
                <div className="min-w-[860px] flex items-center justify-between gap-3">
                  <div className="w-36 p-3.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-center space-y-1.5 shadow-lg">
                    <div className="w-8 h-8 mx-auto rounded-lg bg-blue-950 text-blue-400 flex items-center justify-center border border-blue-800">
                      <HardDrive className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-bold text-white">DOT Flight CSVs</div>
                    <div className="text-[10px] text-slate-400 font-mono">Monthly Multi-GB Files, Carrier Logs</div>
                  </div>

                  <div className="text-slate-500 font-mono text-xs flex flex-col items-center">
                    <span>ADF Copy</span>
                    <ArrowRight className="w-4 h-4 text-sky-400" />
                  </div>

                  <div className="w-40 p-3.5 rounded-xl bg-slate-900/90 border border-sky-500/40 text-center space-y-1.5 shadow-lg">
                    <div className="w-8 h-8 mx-auto rounded-lg bg-sky-950 text-sky-400 flex items-center justify-center border border-sky-800">
                      <HardDrive className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-bold text-white">ADLS Landing / Raw</div>
                    <div className="text-[10px] text-sky-300 font-mono">Partitioned Directories (/Year/Month)</div>
                  </div>

                  <div className="text-slate-500 font-mono text-xs flex flex-col items-center">
                    <span>Spark Ingest</span>
                    <ArrowRight className="w-4 h-4 text-amber-400" />
                  </div>

                  <div className="w-56 p-4 rounded-xl bg-deDark-900 border border-cyan-500/50 text-center space-y-2 shadow-xl ring-1 ring-cyan-500/20">
                    <div className="w-8 h-8 mx-auto rounded-lg bg-cyan-950 text-cyan-400 flex items-center justify-center border border-cyan-800">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-bold text-white">Databricks & PySpark</div>
                    <div className="text-[10px] text-slate-300 font-mono">
                      Timestamp standardization, taxi calculation, military time parsing
                    </div>
                  </div>

                  <div className="text-slate-500 font-mono text-xs flex flex-col items-center">
                    <span>Delta Sync</span>
                    <ArrowRight className="w-4 h-4 text-emerald-400" />
                  </div>

                  <div className="w-40 p-3.5 rounded-xl bg-slate-900/90 border border-emerald-500/40 text-center space-y-1.5 shadow-lg">
                    <div className="w-8 h-8 mx-auto rounded-lg bg-emerald-950 text-emerald-400 flex items-center justify-center border border-emerald-800">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-bold text-white">Fabric Lakehouse</div>
                    <div className="text-[10px] text-emerald-300 font-mono">FactFlightLeg & Role-Playing Airports</div>
                  </div>

                  <div className="text-slate-500 font-mono text-xs flex flex-col items-center">
                    <span>Direct Lake</span>
                    <ArrowRight className="w-4 h-4 text-purple-400" />
                  </div>

                  <div className="w-36 p-3.5 rounded-xl bg-slate-900/90 border border-purple-500/40 text-center space-y-1.5 shadow-lg">
                    <div className="w-8 h-8 mx-auto rounded-lg bg-purple-950 text-purple-400 flex items-center justify-center border border-purple-800">
                      <BarChart3 className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-bold text-white">Power BI Direct Lake</div>
                    <div className="text-[10px] text-purple-300 font-mono">Carrier Delays & Route Analytics</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
                <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800 space-y-1">
                  <div className="text-xs font-bold text-cyan-400 font-mono">Partitioning Strategy</div>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    Data partitioned by Year and Quarter avoids the small-file problem while giving queries 
                    instant partition-pruning speedup over multi-million row historical datasets.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800 space-y-1">
                  <div className="text-xs font-bold text-amber-400 font-mono">Distributed PySpark Cleansing</div>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    Handles corner cases in airline feeds: 2400 midnight timestamps, cancelled flight nulls, 
                    and joins against master airport dictionary coordinates.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800 space-y-1">
                  <div className="text-xs font-bold text-purple-400 font-mono">Role-Playing Star Schema</div>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    Kimball star schema treats DimAirport as a conformed role-playing dimension for both origin 
                    and destination, enabling seamless carrier delay comparisons in Power BI.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* DIAGRAM 3: LOCAL ENTERPRISE ETL */}
          {selectedDiagram === "local" && (
            <div className="space-y-8 relative">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span>Local Enterprise ETL & Data Pipeline Platform</span>
                    <span className="text-xs font-mono text-emerald-400 font-normal px-2 py-0.5 rounded bg-emerald-950 border border-emerald-800">
                      Standalone Cluster & CI/CD
                    </span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 font-mono mt-1">
                    Distributed computing without cloud black-boxes: Docker Compose running Spark Master, 
                    Spark Workers, Apache Airflow, PostgreSQL, and Jenkins CI/CD.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 bg-amber-950/40 px-3 py-1.5 rounded-lg border border-amber-800/50">
                  <Cpu className="w-4 h-4" />
                  <span>1 Master + 2 Spark Workers</span>
                </div>
              </div>

              {/* Visual Flow */}
              <div className="overflow-x-auto py-6">
                <div className="min-w-[860px] flex items-center justify-between gap-3">
                  <div className="w-36 p-3.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-center space-y-1.5 shadow-lg">
                    <div className="w-8 h-8 mx-auto rounded-lg bg-orange-950 text-orange-400 flex items-center justify-center border border-orange-800">
                      <GitBranch className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-bold text-white">GitLab & Jenkins</div>
                    <div className="text-[10px] text-slate-400 font-mono">CI/CD Tests, DAG Code Linting, Deploy</div>
                  </div>

                  <div className="text-slate-500 font-mono text-xs flex flex-col items-center">
                    <span>Automated Trigger</span>
                    <ArrowRight className="w-4 h-4 text-sky-400" />
                  </div>

                  <div className="w-44 p-3.5 rounded-xl bg-slate-900/90 border border-sky-500/40 text-center space-y-1.5 shadow-lg">
                    <div className="w-8 h-8 mx-auto rounded-lg bg-sky-950 text-sky-400 flex items-center justify-center border border-sky-800">
                      <Workflow className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-bold text-white">Apache Airflow</div>
                    <div className="text-[10px] text-sky-300 font-mono">Scheduler, FileSensors & DAG Orchestration</div>
                  </div>

                  <div className="text-slate-500 font-mono text-xs flex flex-col items-center">
                    <span>spark-submit</span>
                    <ArrowRight className="w-4 h-4 text-amber-400" />
                  </div>

                  <div className="w-56 p-4 rounded-xl bg-deDark-900 border border-amber-500/50 text-center space-y-2 shadow-xl ring-1 ring-amber-500/20">
                    <div className="w-8 h-8 mx-auto rounded-lg bg-amber-950 text-amber-400 flex items-center justify-center border border-amber-800">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-bold text-white">Spark Standalone Cluster</div>
                    <div className="text-[10px] text-slate-300 font-mono">
                      1 Spark Master + 2 Workers parallelizing data transformations
                    </div>
                  </div>

                  <div className="text-slate-500 font-mono text-xs flex flex-col items-center">
                    <span>JDBC Upsert</span>
                    <ArrowRight className="w-4 h-4 text-emerald-400" />
                  </div>

                  <div className="w-44 p-3.5 rounded-xl bg-slate-900/90 border border-emerald-500/40 text-center space-y-1.5 shadow-lg">
                    <div className="w-8 h-8 mx-auto rounded-lg bg-emerald-950 text-emerald-400 flex items-center justify-center border border-emerald-800">
                      <Database className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-bold text-white">PostgreSQL DW</div>
                    <div className="text-[10px] text-emerald-300 font-mono">B-Tree Indexes & ON CONFLICT Upserts</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
                <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800 space-y-1">
                  <div className="text-xs font-bold text-sky-400 font-mono">Docker Network Isolation</div>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    Docker Compose bridges Airflow, Spark Master, and PostgreSQL with configured static hostnames, 
                    mirroring multi-node production infrastructure locally.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800 space-y-1">
                  <div className="text-xs font-bold text-amber-400 font-mono">Distributed Cluster Mechanics</div>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    Master schedules stages across worker executors, demonstrating memory tuning, core allocation, 
                    and shuffle partition management.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800 space-y-1">
                  <div className="text-xs font-bold text-emerald-400 font-mono">Idempotent Pipeline Design</div>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    PostgreSQL upsert procedures guarantee that re-running DAG schedules after temporary failures 
                    does not introduce duplicate records or broken keys.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* DIAGRAM 4: MICROSOFT FABRIC */}
          {selectedDiagram === "fabric" && (
            <div className="space-y-8 relative">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span>Modern Data Platform — Microsoft Fabric</span>
                    <span className="text-xs font-mono text-sky-400 font-normal px-2 py-0.5 rounded bg-sky-950 border border-sky-800">
                      Unified SaaS Architecture
                    </span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 font-mono mt-1">
                    The relationship between OneLake, Lakehouse, Data Warehouse, Fabric Pipelines, 
                    and Power BI Direct Lake mode.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 bg-cyan-950/40 px-3 py-1.5 rounded-lg border border-cyan-800/50">
                  <Sparkles className="w-4 h-4" />
                  <span>Zero-Copy Direct Lake</span>
                </div>
              </div>

              {/* Visual Flow */}
              <div className="overflow-x-auto py-6">
                <div className="min-w-[860px] flex items-center justify-between gap-3">
                  <div className="w-36 p-3.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-center space-y-1.5 shadow-lg">
                    <div className="w-8 h-8 mx-auto rounded-lg bg-blue-950 text-blue-400 flex items-center justify-center border border-blue-800">
                      <Database className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-bold text-white">Data Sources</div>
                    <div className="text-[10px] text-slate-400 font-mono">SQL, REST, CRM, Files</div>
                  </div>

                  <div className="text-slate-500 font-mono text-xs flex flex-col items-center">
                    <span>Fabric Pipeline</span>
                    <ArrowRight className="w-4 h-4 text-sky-400" />
                  </div>

                  <div className="w-44 p-3.5 rounded-xl bg-sky-950/40 border border-sky-500/50 text-center space-y-1.5 shadow-lg">
                    <div className="w-8 h-8 mx-auto rounded-lg bg-sky-900 text-sky-300 flex items-center justify-center border border-sky-700">
                      <HardDrive className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-bold text-white">OneLake Storage</div>
                    <div className="text-[10px] text-sky-300 font-mono">Single Unified SaaS Lake (Delta Parquet)</div>
                  </div>

                  <div className="text-slate-500 font-mono text-xs flex flex-col items-center">
                    <span>Spark Transform</span>
                    <ArrowRight className="w-4 h-4 text-amber-400" />
                  </div>

                  <div className="w-48 p-4 rounded-xl bg-deDark-900 border border-amber-500/50 text-center space-y-1.5 shadow-xl">
                    <div className="w-8 h-8 mx-auto rounded-lg bg-amber-950 text-amber-400 flex items-center justify-center border border-amber-800">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-bold text-white">Fabric Lakehouse</div>
                    <div className="text-[10px] text-amber-300 font-mono">PySpark / Delta Lake (Bronze & Silver)</div>
                  </div>

                  <div className="text-slate-500 font-mono text-xs flex flex-col items-center">
                    <span>T-SQL Serving</span>
                    <ArrowRight className="w-4 h-4 text-emerald-400" />
                  </div>

                  <div className="w-48 p-4 rounded-xl bg-deDark-900 border border-emerald-500/50 text-center space-y-1.5 shadow-xl">
                    <div className="w-8 h-8 mx-auto rounded-lg bg-emerald-950 text-emerald-400 flex items-center justify-center border border-emerald-800">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-bold text-white">Fabric Warehouse</div>
                    <div className="text-[10px] text-emerald-300 font-mono">ACID T-SQL Curated Star Schema (Gold)</div>
                  </div>

                  <div className="text-slate-500 font-mono text-xs flex flex-col items-center">
                    <span>Direct Lake</span>
                    <ArrowRight className="w-4 h-4 text-purple-400" />
                  </div>

                  <div className="w-36 p-3.5 rounded-xl bg-slate-900/90 border border-purple-500/40 text-center space-y-1.5 shadow-lg">
                    <div className="w-8 h-8 mx-auto rounded-lg bg-purple-950 text-purple-400 flex items-center justify-center border border-purple-800">
                      <BarChart3 className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-bold text-white">Power BI Direct Lake</div>
                    <div className="text-[10px] text-purple-300 font-mono">Zero-Latency In-Memory VertiPaq</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
                <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800 space-y-1">
                  <div className="text-xs font-bold text-sky-400 font-mono">OneLake Centralization</div>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    Eliminates data duplication. Both Spark engines and SQL query endpoints read the exact same 
                    Delta Parquet files using OneLake shortcuts.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800 space-y-1">
                  <div className="text-xs font-bold text-emerald-400 font-mono">Lakehouse vs Warehouse Harmony</div>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    Lakehouse provides flexible PySpark compute for messy transformations, while the Warehouse 
                    provides strict T-SQL relational modeling for certified business consumption.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800 space-y-1">
                  <div className="text-xs font-bold text-purple-400 font-mono">Direct Lake Advantage</div>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    Power BI loads Parquet straight into memory without scheduled data refresh cycles, giving 
                    the speed of Import mode with the real-time freshness of DirectQuery.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
