"use client";

import React, { useState, useEffect } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { 
  Database, 
  Menu, 
  X, 
  FileDown, 
  Send
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [
        "hero",
        "about",
        "pipeline",
        "projects",
        "architecture",
        "sql",
        "fabric",
        "skills",
        "concepts",
        "experience",
        "contact"
      ];

      const scrollPosition = window.scrollY + 180;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "/#about", id: "about" },
    { label: "Pipeline", href: "/#pipeline", id: "pipeline" },
    { label: "Projects", href: "/#projects", id: "projects" },
    { label: "Architecture", href: "/#architecture", id: "architecture" },
    { label: "SQL & Modeling", href: "/#sql", id: "sql" },
    { label: "Fabric", href: "/#fabric", id: "fabric" },
    { label: "Skills", href: "/#skills", id: "skills" },
    { label: "Experience", href: "/#experience", id: "experience" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-deDark-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="/#hero"
          className="group flex items-center gap-2.5 text-slate-100 transition-colors"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-sky-500/20 to-teal-500/10 border border-sky-500/30 flex items-center justify-center group-hover:border-sky-400/60 transition-colors">
            <Database className="w-4 h-4 text-sky-400 group-hover:text-sky-300" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 font-mono text-sm font-semibold tracking-wider text-slate-200 group-hover:text-white">
              <span>{PERSONAL_INFO.name}</span>
              <span className="text-sky-400 font-bold">.data</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
              Junior Data Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-sky-500/20 text-sky-300 border border-sky-500/40 shadow-sm shadow-sky-500/10"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={PERSONAL_INFO.links.resume}
            download="Ammar_Data_Engineer_Resume.pdf"
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium font-mono text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-all"
            title="Download Resume PDF"
          >
            <FileDown className="w-3.5 h-3.5 text-sky-400" />
            <span>Resume</span>
          </a>

          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-sky-400 to-teal-400 hover:from-sky-300 hover:to-teal-300 rounded-lg shadow-sm shadow-sky-500/20 hover:shadow-sky-500/40 transition-all font-sans"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Let&apos;s Talk</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-deDark-950/98 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 mt-3 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 text-xs font-medium rounded-lg transition-all ${
                  activeSection === link.id
                    ? "bg-sky-500/20 text-sky-300 border border-sky-500/30"
                    : "text-slate-300 hover:bg-slate-900 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-2">
            <a
              href={PERSONAL_INFO.links.resume}
              download="Ammar_Data_Engineer_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-mono font-medium text-slate-300 bg-slate-900 border border-slate-800 rounded-lg"
            >
              <FileDown className="w-4 h-4 text-sky-400" />
              <span>Download Resume PDF</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-sky-400 to-teal-400 rounded-lg"
            >
              <Send className="w-4 h-4" />
              <span>Contact Me / Let&apos;s Talk</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
