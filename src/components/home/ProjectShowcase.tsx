"use client";

import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck, Building, Sparkles } from "lucide-react";
import { useEnquiryModal } from "@/context/EnquiryModalContext";

export function ProjectShowcase() {
  const { openEnquiryModal } = useEnquiryModal();

  const galleryItems = [
    {
      id: "gal-1",
      title: "Modular Cleanroom Envelope Installation",
      sector: "Pharmaceutical Grade B Facility",
      image: "/images/activity2-CDpLlqGO.webp",
      specs: "50mm Flush Wall Panels • Walk-on Ceilings",
    },
    {
      id: "gal-2",
      title: "Clean Air Recirculation & Ceiling Grid",
      sector: "Semiconductor Fab Integration",
      image: "/images/activity3-DHLpvUU3.webp",
      specs: "FFU Heavy-duty Suspension • Antistatic Finish",
    },
    {
      id: "gal-3",
      title: "Airlock & Interlocking Doorways",
      sector: "Biotechnology Research Laboratory",
      image: "/images/activity4-3RM3aurZ.webp",
      specs: "Hermetic Cleanroom Doors • Flush Glazing",
    },
    {
      id: "gal-4",
      title: "Sanitary Coving & Clean Corridor Erection",
      sector: "Medical Device Assembly Suite",
      image: "/images/activity5-CguuR2hv.webp",
      specs: "Concealed Splines • Silicone Sealed Joints",
    },
  ];

  return (
    <section id="showcase" className="py-20 lg:py-28 bg-pophen-navy-950 text-white relative overflow-hidden">
      {/* Background Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-pophen-blue/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pophen-blue/20 text-pophen-cyan text-xs font-bold uppercase tracking-wider border border-pophen-cyan/30">
              PROJECT SHOWCASE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Cleanroom Installations Across Industries
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Engineered architectural installations across leading pharmaceutical, semiconductor, and biotechnology manufacturing facilities.
            </p>
          </div>

          <div className="flex-shrink-0">
            <button
              type="button"
              onClick={() => openEnquiryModal("Project Showcase Inquiries")}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold bg-pophen-blue hover:bg-pophen-blue-hover text-white transition-all shadow-md group focus:outline-none focus:ring-2 focus:ring-pophen-cyan"
            >
              <span>Discuss Project Scope</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Gallery Grid + Feature Highlight Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* 4 Gallery Cards (8 cols on lg) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="bg-pophen-navy/80 rounded-2xl overflow-hidden border border-white/10 hover:border-pophen-cyan/40 shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
              >
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pophen-navy/90 via-pophen-navy/18 to-transparent" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-pophen-cyan text-[14px] font-semibold border border-white/10">
                    {item.sector}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-pophen-cyan transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 mt-1">
                      {item.specs}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[14px] text-slate-400">
                    <span>Verified Installation</span>
                    <span className="text-pophen-cyan font-medium">Turnkey Scope</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Highlight Card (4 cols on lg): "Building Controlled Environments for a Better Tomorrow" */}
          <div className="lg:col-span-4 bg-gradient-to-br from-pophen-navy via-pophen-navy-900 to-[#0c1f38] rounded-2xl p-6 sm:p-7 border border-white/15 shadow-2xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-pophen-blue/20 border border-pophen-blue/30 text-pophen-cyan text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>POPHEN COMMITMENT</span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                  Building Controlled Environments for a Better Tomorrow
                </h3>
                <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
                  Every cleanroom we support is engineered to preserve the integrity of life-saving medicines, precision microchips, and clean energy storage technologies.
                </p>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-white/10">
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-pophen-cyan flex-shrink-0 mt-0.5" />
                  <span>100% Hermetic Wall &amp; Ceiling Airtight Joints</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-pophen-cyan flex-shrink-0 mt-0.5" />
                  <span>ISO Class 1 to Class 8 Controlled Environments</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-pophen-cyan flex-shrink-0 mt-0.5" />
                  <span>Non-shedding Antistatic &amp; Chemical Resistance</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-pophen-cyan flex-shrink-0 mt-0.5" />
                  <span>Comprehensive DQ/IQ/OQ Validation Support</span>
                </div>
              </div>

              {/* Inset Technical Panel: Engineered for Critical Environments + Cleanroom Schematic */}
              <div className="rounded-xl bg-white/[0.04] border border-white/10 p-3.5 sm:p-4 space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-1 rounded-md bg-pophen-cyan/15 text-pophen-cyan border border-pophen-cyan/25">
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[14px] font-bold uppercase tracking-wider text-pophen-cyan">
                      Engineered for Critical Environments
                    </span>
                  </div>
                  <span className="text-[12px] font-mono text-slate-400 px-1.5 py-0.5 rounded bg-white/5 border border-white/10">
                    CAD SPEC
                  </span>
                </div>

                {/* Technical Cleanroom Architectural Line Schematic */}
                <div className="relative h-20 w-full rounded-lg bg-[#001224]/90 border border-white/10 p-2 flex items-center justify-center overflow-hidden">
                  <svg
                    viewBox="0 0 300 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full text-pophen-cyan"
                    aria-hidden="true"
                  >
                    {/* Background Subtle Grid Lines */}
                    <line x1="0" y1="18" x2="300" y2="18" stroke="currentColor" strokeOpacity="0.1" strokeDasharray="2 2" />
                    <line x1="0" y1="36" x2="300" y2="36" stroke="currentColor" strokeOpacity="0.1" strokeDasharray="2 2" />
                    <line x1="0" y1="54" x2="300" y2="54" stroke="currentColor" strokeOpacity="0.1" strokeDasharray="2 2" />

                    {/* Ceiling Suspension Grid */}
                    <line x1="20" y1="10" x2="280" y2="10" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.8" />
                    <line x1="75" y1="2" x2="75" y2="10" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.6" />
                    <line x1="150" y1="2" x2="150" y2="10" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.6" />
                    <line x1="225" y1="2" x2="225" y2="10" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.6" />

                    {/* Laminar Flow Direction Indicators (HEPA Filter Airflow) */}
                    <path d="M135 14 L135 24 M135 24 L133 21 M135 24 L137 21" stroke="#38bdf8" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.8" />
                    <path d="M150 14 L150 26 M150 26 L148 23 M150 26 L152 23" stroke="#38bdf8" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.8" />
                    <path d="M165 14 L165 24 M165 24 L163 21 M165 24 L167 21" stroke="#38bdf8" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.8" />

                    {/* Modular Wall Panel Left */}
                    <rect x="25" y="16" width="65" height="42" rx="1.5" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.7" fill="#001a33" fillOpacity="0.5" />
                    <line x1="30" y1="22" x2="85" y2="22" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.3" strokeDasharray="2 2" />
                    <line x1="30" y1="36" x2="85" y2="36" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.3" strokeDasharray="2 2" />

                    {/* Spline Gasket Joint (Airtight Interlock) */}
                    <rect x="92" y="16" width="4" height="42" rx="0.5" fill="#38bdf8" fillOpacity="0.7" />

                    {/* Flush Vision Double-Glazed Window Unit */}
                    <rect x="98" y="16" width="104" height="42" rx="1.5" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.8" fill="#001a33" fillOpacity="0.6" />
                    <rect x="106" y="21" width="88" height="32" rx="1" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="3 1" fill="#002447" fillOpacity="0.4" />
                    <circle cx="150" cy="37" r="2" fill="#38bdf8" fillOpacity="0.8" />

                    {/* Spline Gasket Joint Right */}
                    <rect x="204" y="16" width="4" height="42" rx="0.5" fill="#38bdf8" fillOpacity="0.7" />

                    {/* Modular Wall Panel Right */}
                    <rect x="210" y="16" width="65" height="42" rx="1.5" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.7" fill="#001a33" fillOpacity="0.5" />
                    <line x1="215" y1="22" x2="270" y2="22" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.3" strokeDasharray="2 2" />
                    <line x1="215" y1="36" x2="270" y2="36" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.3" strokeDasharray="2 2" />

                    {/* Dimension Baseline & Ticks */}
                    <line x1="25" y1="64" x2="275" y2="64" stroke="#64748b" strokeWidth="0.8" strokeOpacity="0.5" />
                    <line x1="25" y1="61" x2="25" y2="67" stroke="#64748b" strokeWidth="0.8" strokeOpacity="0.5" />
                    <line x1="275" y1="61" x2="275" y2="67" stroke="#64748b" strokeWidth="0.8" strokeOpacity="0.5" />
                    <text x="150" y="67" fill="#94a3b8" fontSize="7" fontFamily="monospace" textAnchor="middle" letterSpacing="0.5">MODULAR CLEANROOM ENVELOPE (50–100mm)</text>
                  </svg>
                </div>

                <p className="text-[14px] text-slate-300 leading-snug">
                  Precision modular envelope architecture maintaining certified contamination boundaries and airtight pressure differentials.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10">
              <button
                type="button"
                onClick={() => openEnquiryModal("Turnkey Cleanroom Project")}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider bg-pophen-blue hover:bg-pophen-blue-hover text-white shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-pophen-cyan"
              >
                <span>Request Project Proposal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
