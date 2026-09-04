"use client";

import React from "react";
import { 
  Cloud, 
  ShieldCheck, 
  Key, 
  Lock
} from "lucide-react";

export default function CloudSecuritySection() {
  const azureServices = [
    { name: "Azure Data Factory (ADF)", role: "Orchestration & Ingestion", desc: "Building parameterized copy activities, tumbling window triggers, and data quality alert pipelines." },
    { name: "Azure Databricks", role: "Distributed Compute", desc: "Developing PySpark transformation notebooks, configuring cluster pools, and managing Delta Lake ACID tables." },
    { name: "ADLS Gen2", role: "Hierarchical Lake Storage", desc: "Organizing multi-hop Medallion zones (Bronze, Silver, Gold) with structured directory partitioning." },
    { name: "Azure Synapse Analytics", role: "Analytical Serving", desc: "Managing dedicated SQL pools, staging dimensions, and tuning clustered columnstore query performance." },
    { name: "Azure Key Vault", role: "Secrets & Credentials", desc: "Centralizing database passwords, API tokens, and connection strings without hardcoding." },
    { name: "Azure Blob Storage", role: "Unstructured Object Store", desc: "Landing raw landing feeds, transient log dumps, and external archive datasets." }
  ];

  const securityPractices = [
    {
      title: "System-Assigned Managed Identity",
      badge: "Zero-Secret Auth",
      desc: "Allowing Azure Data Factory to read and write directly to ADLS Gen2 storage accounts without storing or cycling access keys in pipeline definitions."
    },
    {
      title: "Role-Based Access Control (RBAC)",
      badge: "Least Privilege",
      desc: "Assigning granular permissions (e.g. Storage Blob Data Contributor vs Reader) to compute instances and service principals to limit exposure."
    },
    {
      title: "Secrets Decoupling via Key Vault",
      badge: "Credential Hygiene",
      desc: "Referencing connection strings via `@activity('Web').output` or Linked Services pointing to Key Vault secret URIs to prevent credential leakage."
    },
    {
      title: "Data Privacy & Governance Mindset",
      badge: "Auditability",
      desc: "Designing pipelines with healthcare and financial privacy in mind: pseudonymizing identifiers, separating staging zones, and maintaining full audit trails."
    }
  ];

  return (
    <section className="py-24 bg-deDark-950 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-blue-400 text-xs font-mono uppercase tracking-widest">
            <Cloud className="w-3.5 h-3.5" />
            <span>Enterprise Cloud Foundations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Microsoft Azure & Secure Data Access Patterns
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-sans">
            Hands-on Azure data engineering experience with growing expertise in modern cloud data platforms. 
            Prioritizing secure secrets management, identity-based authentication, and least-privilege governance.
          </p>
        </div>

        {/* Azure Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {azureServices.map((svc) => (
            <div
              key={svc.name}
              className="p-5 rounded-xl bg-deDark-900/80 border border-slate-800 hover:border-blue-500/40 transition-all flex flex-col justify-between shadow-lg group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white group-hover:text-blue-300 transition-colors">
                    {svc.name}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-blue-400 border border-slate-800">
                    {svc.role}
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  {svc.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Security & Access Patterns */}
        <div className="bg-deDark-900/60 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-emerald-400 font-bold mb-4 pb-3 border-b border-slate-800">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Cloud Security & Access Control Practices</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {securityPractices.map((sec, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-xs sm:text-sm font-bold text-white font-sans flex items-center gap-2">
                    <Lock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{sec.title}</span>
                  </h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800/60 font-semibold">
                    {sec.badge}
                  </span>
                </div>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  {sec.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <Key className="w-3.5 h-3.5 text-blue-400" />
              <span>Realistic Positioning: Hands-on implementation of enterprise security patterns without exaggerated senior claims.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
