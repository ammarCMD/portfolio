"use client";

import React, { useState } from "react";
import { 
  BarChart3, 
  CheckCircle2, 
  Sparkles
} from "lucide-react";

export default function AnalyticsSection() {
  const [activeDomain, setActiveDomain] = useState<"healthcare" | "flight" | "sales" | "ops">("healthcare");

  const domains = [
    {
      id: "healthcare",
      label: "Healthcare Analytics",
      sub: "IHHN & Clinical Operations",
      kpis: [
        { name: "Average Length of Stay (ALOS)", measure: "AVERAGEX(FactAdmission, DATEDIFF(AdmissionDate, DischargeDate, DAY))", purpose: "Tracks bed turnover and inpatient capacity planning" },
        { name: "Door-to-Doctor Time", measure: "CALCULATE(AVERAGE(FactTriage[WaitMinutes]), FactTriage[Acuity] IN {1, 2})", purpose: "Measures emergency department response velocity" },
        { name: "Bed Occupancy Rate", measure: "DIVIDE(COUNTROWS(FactCurrentInpatients), [TotalLicensedBeds], 0)", purpose: "Monitors hospital load and surge constraints" },
        { name: "Triage Acuity Distribution", measure: "COUNTROWS(FactTriage) / CALCULATE(COUNTROWS(FactTriage), ALL(DimTriage))", purpose: "Analyzes patient acuity mix and staffing requirements" }
      ],
      description: "Surface 100+ clinical and operational KPIs from the curated Synapse / Databricks Gold tables into Power BI executive dashboards."
    },
    {
      id: "flight",
      label: "Flight Performance",
      sub: "DOT Aviation Metrics",
      kpis: [
        { name: "On-Time Arrival % (A14)", measure: "DIVIDE(COUNTROWS(FILTER(FactFlight, FactFlight[ArrDelay] <= 14)), COUNTROWS(FactFlight), 0)", purpose: "Standard DOT aviation performance benchmark" },
        { name: "Average Departure Delay", measure: "AVERAGEX(FILTER(FactFlight, FactFlight[DepDelay] > 0), FactFlight[DepDelay])", purpose: "Identifies systemic hub airport congestion" },
        { name: "Cancellation Rate by Cause", measure: "DIVIDE(COUNTROWS(FILTER(FactFlight, FactFlight[IsCancelled] = 1)), [TotalScheduled], 0)", purpose: "Pinpoints weather vs carrier mechanical cancellations" },
        { name: "Hub Turnaround Efficiency", measure: "AVERAGE(FactFlight[TaxiInMinutes]) + AVERAGE(FactFlight[TaxiOutMinutes])", purpose: "Optimizes airport gate utilization and ground delays" }
      ],
      description: "Direct Lake connectivity to OneLake Delta tables providing airline and airport route delay analytics without data duplication."
    },
    {
      id: "sales",
      label: "Enterprise Sales",
      sub: "Retail Revenue & Margins",
      kpis: [
        { name: "Gross Margin %", measure: "DIVIDE([Total Net Sales] - [Total Cost], [Total Net Sales], 0)", purpose: "Measures profitability across product lines" },
        { name: "Year-over-Year (YoY) Growth", measure: "VAR PriorYear = CALCULATE([Total Net Sales], SAMEPERIODLASTYEAR(DimDate[Date])) RETURN DIVIDE([Total Net Sales] - PriorYear, PriorYear, 0)", purpose: "Time-intelligence trend analysis" },
        { name: "Customer Segment Contribution", measure: "DIVIDE([Total Net Sales], CALCULATE([Total Net Sales], ALL(DimCustomer[Segment])))", purpose: "Identifies high-value enterprise accounts" },
        { name: "Inventory Stockout Risk", measure: "DIVIDE([CurrentStockOnHand], [AverageDailySalesRate], 0)", purpose: "Days of inventory remaining before replenishment" }
      ],
      description: "Kimball star schema semantic model with single-direction 1-to-many relationships and high-performance DAX time-intelligence."
    },
    {
      id: "ops",
      label: "Operational Analytics",
      sub: "Pipeline & Data Auditing",
      kpis: [
        { name: "Pipeline SLA Compliance", measure: "DIVIDE(COUNTROWS(FILTER(FactPipelineRuns, FactPipelineRuns[Duration] <= [TargetSLA])), COUNTROWS(FactPipelineRuns))", purpose: "Tracks data delivery reliability for downstream consumers" },
        { name: "Data Quality Pass Rate", measure: "DIVIDE([ValidatedCleanRecords], [TotalExtractedRecords], 0)", purpose: "Audits Bronze to Silver cleansing effectiveness" },
        { name: "Ingestion Volume Drift", measure: "DIVIDE([TodayBatchRows] - [7DayAvgRows], [7DayAvgRows], 0)", purpose: "Detects anomalous source extraction spikes or drops" },
        { name: "Storage Cost Efficiency", measure: "DIVIDE([CompressedDeltaBytes], [RawSourceBytes], 0)", purpose: "Evaluates Parquet Snappy compression ratios" }
      ],
      description: "Internal telemetry dashboards tracking pipeline runtime, row count reconciliations, and data quality health across clusters."
    }
  ];

  const currentDomain = domains.find((d) => d.id === activeDomain) || domains[0];

  return (
    <section className="py-24 bg-deDark-900/40 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-purple-400 text-xs font-mono uppercase tracking-widest">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Consumption & Business Value Layer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Analytics & Power BI Semantic Modeling
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-sans">
            Power BI is the final analytical consumption layer of the data engineering pipeline. 
            I design Kimball semantic models, author performant DAX measures, and structure certified metrics.
          </p>
        </div>

        {/* Domain Switcher */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2">
          <div className="inline-flex p-1.5 rounded-xl bg-deDark-950 border border-slate-800 gap-1.5 shadow-inner">
            {domains.map((dom) => {
              const isSelected = activeDomain === dom.id;
              return (
                <button
                  key={dom.id}
                  type="button"
                  onClick={() => setActiveDomain(dom.id as "healthcare" | "flight" | "sales" | "ops")}
                  className={`px-4 py-2 rounded-lg text-xs font-mono transition-all flex flex-col items-center ${
                    isSelected
                      ? "bg-purple-500 text-slate-950 font-bold shadow-md shadow-purple-500/20"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
                  }`}
                >
                  <span>{dom.label}</span>
                  <span className={`text-[10px] ${isSelected ? "text-slate-900/80" : "text-slate-500"}`}>
                    {dom.sub}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Domain Display Card */}
        <div className="bg-deDark-950 rounded-2xl border border-slate-800 shadow-2xl p-6 sm:p-8 relative overflow-hidden backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase px-2 py-0.5 rounded bg-purple-950 text-purple-400 border border-purple-800 font-semibold">
                  Semantic Layer
                </span>
                <span className="text-sm font-bold text-white font-sans">
                  {currentDomain.label}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-sans mt-1">
                {currentDomain.description}
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-purple-300 bg-purple-950/40 px-3 py-1.5 rounded-lg border border-purple-800/50 self-start sm:self-center">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>DAX & Star Schema Certified</span>
            </div>
          </div>

          {/* 4 KPIs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentDomain.kpis.map((kpi, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-white font-sans">
                      {kpi.name}
                    </span>
                    <span className="text-[10px] font-mono text-purple-400 px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800">
                      DAX Metric
                    </span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800/80 font-mono text-[11px] text-purple-300 overflow-x-auto">
                    <code>{kpi.measure}</code>
                  </div>
                </div>
                <div className="text-[11px] text-slate-400 font-sans pt-1">
                  <span className="text-slate-300 font-semibold">Business Outcome: </span>
                  {kpi.purpose}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Callout */}
          <div className="mt-6 pt-5 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Power Query (M) for ETL parameterization • Single-direction star schema filter rules</span>
            </div>
            <div className="text-purple-400 font-bold">
              Direct Lake & Import Modes Supported
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
