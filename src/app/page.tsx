import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PipelineVisualizer from "@/components/PipelineVisualizer";
import Projects from "@/components/Projects";
import ArchitectureSection from "@/components/ArchitectureSection";
import SqlShowcase from "@/components/SqlShowcase";
import FabricSection from "@/components/FabricSection";
import CloudSecuritySection from "@/components/CloudSecuritySection";
import AnalyticsSection from "@/components/AnalyticsSection";
import SkillsSection from "@/components/SkillsSection";
import ConceptsSection from "@/components/ConceptsSection";
import OnPremSection from "@/components/OnPremSection";
import DevOpsSection from "@/components/DevOpsSection";
import ExperienceSection from "@/components/ExperienceSection";
import GitHubSection from "@/components/GitHubSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-deDark-950 text-slate-100 flex flex-col selection:bg-sky-500/30 selection:text-sky-200">
      {/* Sticky Navigation */}
      <Navbar />

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Professional Summary & Core Strengths */}
      <About />

      {/* 3. Interactive Data Engineering Pipeline Visualizer */}
      <PipelineVisualizer />

      {/* 4. Featured & Filterable Projects Showcase with Case Studies */}
      <Projects />

      {/* 5. Cloud & Distributed Architecture Diagrams */}
      <ArchitectureSection />

      {/* 6. SQL & Dimensional Data Modeling Showcase */}
      <SqlShowcase />

      {/* 7. Modern Data Platform — Microsoft Fabric Journey */}
      <FabricSection />

      {/* 8. Microsoft Azure & Cloud Security Access Patterns */}
      <CloudSecuritySection />

      {/* 9. Analytics & Power BI Semantic Modeling */}
      <AnalyticsSection />

      {/* 10. Categorized Technical Skills */}
      <SkillsSection />

      {/* 11. Data Engineering Concepts & Design Trade-Offs */}
      <ConceptsSection />

      {/* 12. On-Premises & Hybrid Data Engineering */}
      <OnPremSection />

      {/* 13. DevOps & Engineering Practices */}
      <DevOpsSection />

      {/* 14. Professional Experience Timeline */}
      <ExperienceSection />

      {/* 15. Featured GitHub Showcase */}
      <GitHubSection />

      {/* 16. Contact & Final CTA */}
      <ContactSection />

      {/* 17. Footer */}
      <Footer />
    </main>
  );
}
