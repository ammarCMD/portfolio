"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { 
  Send, 
  Mail, 
  FileDown, 
  Copy, 
  Check, 
  ExternalLink,
  Phone,
  MapPin
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.links.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 bg-deDark-950 border-b border-slate-800/80 relative scroll-mt-20">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-sky-500/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-xs font-mono uppercase tracking-widest">
            <Send className="w-3.5 h-3.5" />
            <span>Connect & Collaborate</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Have a Data Problem? Let&apos;s Talk.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto">
            I&apos;m interested in opportunities where I can build reliable data pipelines, work with 
            modern cloud data platforms (Azure, Databricks, Microsoft Fabric), write optimized SQL, and 
            solve real-world data engineering challenges.
          </p>
        </div>

        {/* Contact Cards Grid: Email, Phone/Location, LinkedIn, GitHub */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {/* Email Card with Copy Feature */}
          <div className="p-6 rounded-2xl bg-deDark-950 border border-slate-800 hover:border-sky-500/40 transition-all flex flex-col justify-between text-center space-y-3 shadow-xl">
            <div className="w-10 h-10 mx-auto rounded-xl bg-sky-950 text-sky-400 flex items-center justify-center border border-sky-800/80">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-slate-400 uppercase">Direct Email</div>
              <a
                href={`mailto:${PERSONAL_INFO.links.email}`}
                className="text-xs font-mono font-bold text-white hover:text-sky-300 transition-colors mt-1 block truncate"
                title={PERSONAL_INFO.links.email}
              >
                {PERSONAL_INFO.links.email}
              </a>
            </div>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="w-full py-2 rounded-lg text-xs font-mono font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 flex items-center justify-center gap-1.5 transition-colors"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>

          {/* Phone & Location Card */}
          <div className="p-6 rounded-2xl bg-deDark-950 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between text-center space-y-3 shadow-xl">
            <div className="w-10 h-10 mx-auto rounded-xl bg-emerald-950 text-emerald-400 flex items-center justify-center border border-emerald-800/80">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-slate-400 uppercase">Phone & Location</div>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="text-xs font-mono font-bold text-white hover:text-emerald-300 transition-colors mt-1 block"
              >
                {PERSONAL_INFO.phoneDisplay}
              </a>
              <div className="flex items-center justify-center gap-1 text-[11px] font-mono text-slate-400 mt-1">
                <MapPin className="w-3 h-3 text-sky-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="w-full py-2 rounded-lg text-xs font-mono font-semibold bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-700/80 flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>Call / WhatsApp</span>
            </a>
          </div>

          {/* LinkedIn Card */}
          <a
            href={PERSONAL_INFO.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-deDark-950 border border-slate-800 hover:border-sky-500/40 transition-all flex flex-col justify-between text-center space-y-3 shadow-xl group"
          >
            <div className="w-10 h-10 mx-auto rounded-xl bg-blue-950 text-blue-400 flex items-center justify-center border border-blue-800/80 group-hover:scale-105 transition-transform">
              <LinkedinIcon className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-slate-400 uppercase">LinkedIn Profile</div>
              <div className="text-xs font-mono font-bold text-white mt-1 group-hover:text-sky-300 transition-colors">
                iammarrasheed
              </div>
            </div>
            <div className="w-full py-2 rounded-lg text-xs font-mono font-semibold bg-slate-900 group-hover:bg-slate-800 text-sky-400 border border-slate-700/80 flex items-center justify-center gap-1.5">
              <span>Connect</span>
              <ExternalLink className="w-3 h-3" />
            </div>
          </a>

          {/* GitHub Card */}
          <a
            href={PERSONAL_INFO.links.githubProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-deDark-950 border border-slate-800 hover:border-sky-500/40 transition-all flex flex-col justify-between text-center space-y-3 shadow-xl group"
          >
            <div className="w-10 h-10 mx-auto rounded-xl bg-slate-900 text-slate-200 flex items-center justify-center border border-slate-700 group-hover:scale-105 transition-transform">
              <GithubIcon className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-slate-400 uppercase">GitHub Profile</div>
              <div className="text-xs font-mono font-bold text-white mt-1 group-hover:text-sky-300 transition-colors">
                ammarCMD
              </div>
            </div>
            <div className="w-full py-2 rounded-lg text-xs font-mono font-semibold bg-slate-900 group-hover:bg-slate-800 text-slate-200 border border-slate-700/80 flex items-center justify-center gap-1.5">
              <span>View Profile</span>
              <ExternalLink className="w-3 h-3" />
            </div>
          </a>
        </div>

        {/* Big Action Bar */}
        <div className="max-w-2xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-sky-950/50 via-slate-900 to-teal-950/50 border border-sky-800/50 text-center space-y-4 shadow-2xl">
          <div className="text-xs font-mono uppercase text-sky-300 tracking-wider font-bold">
            Curriculum Vitae & Technical Summary
          </div>
          <p className="text-xs sm:text-sm text-slate-300 font-sans">
            Looking for detailed technical credentials, project breakdowns, and full methodology?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            <a
              href={PERSONAL_INFO.links.resume}
              download="Ammar_Rasheed_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-sky-400 to-teal-400 hover:from-sky-300 hover:to-teal-300 transition-all shadow-md font-sans"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Full Resume (PDF)</span>
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.links.email}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-mono text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 transition-colors"
            >
              <Mail className="w-4 h-4 text-sky-400" />
              <span>Email Me Directly</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
