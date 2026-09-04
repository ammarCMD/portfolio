"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Database, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-deDark-950 border-t border-slate-800/80 py-12 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-sky-400">
              <Database className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-white tracking-wider">
                {PERSONAL_INFO.name} <span className="text-sky-400">/ Junior Data Engineer</span>
              </div>
              <div className="text-[11px] text-slate-500 font-sans">
                {PERSONAL_INFO.tagline}
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#pipeline" className="hover:text-white transition-colors">Pipeline</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#architecture" className="hover:text-white transition-colors">Architecture</a>
            <a href="#sql" className="hover:text-white transition-colors">SQL & Modeling</a>
            <a href="#fabric" className="hover:text-white transition-colors">Microsoft Fabric</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5 text-sky-400" />
            <span>Top</span>
          </button>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>All Systems Operational • Islamabad, Pakistan • Modern Lakehouse Standards</span>
          </div>

          <div>
            Built with Next.js, TypeScript & Tailwind CSS • © {new Date().getFullYear()} {PERSONAL_INFO.name}
          </div>
        </div>
      </div>
    </footer>
  );
}
