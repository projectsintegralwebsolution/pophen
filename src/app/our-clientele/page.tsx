"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Building2,
  CheckCircle2,
  Cpu,
  Zap,
  Sun,
  Microchip,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { InnerPageLayout } from "@/components/layout/InnerPageLayout";
import { PageBanner } from "@/components/ui/PageBanner";
import { CLIENTELE_DATA, ClientItem } from "@/data/brochureData";
import { EnquirySection } from "@/components/home/EnquirySection";

export default function OurClientelePage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "Semiconductor & Wafer Fabs",
    "EV Battery & Energy Storage",
    "Solar & Renewable Cells",
    "High-Tech & Electronics",
    "Academia & Research",
  ];

  const filteredClients =
    activeCategory === "All"
      ? CLIENTELE_DATA
      : CLIENTELE_DATA.filter((client) => client.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Semiconductor & Wafer Fabs":
        return <Cpu className="w-3.5 h-3.5 text-pophen-blue" />;
      case "EV Battery & Energy Storage":
        return <Zap className="w-3.5 h-3.5 text-amber-500" />;
      case "Solar & Renewable Cells":
        return <Sun className="w-3.5 h-3.5 text-orange-500" />;
      case "Academia & Research":
        return <GraduationCap className="w-3.5 h-3.5 text-purple-500" />;
      default:
        return <Building2 className="w-3.5 h-3.5 text-pophen-cyan" />;
    }
  };

  return (
    <InnerPageLayout>
      {/* 1. Page Banner */}
      <PageBanner
        title="Our Clientele"
        subtitle="Trusted by leading companies across industries for advanced cleanroom architectural systems and solutions."
        badge="GLOBAL CLIENT PORTFOLIO"
        image="/images/hero-banner-inspect-v2.png"
        breadcrumbs={[{ label: "Our Clientele" }]}
      />

      {/* 2. Client Logo Gallery Section */}
      <section className="py-14 lg:py-20 bg-slate-50 text-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header & Filter Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-pophen-blue">
                INTERNATIONAL INDUSTRIAL TRACK RECORD
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-pophen-navy tracking-tight mt-1">
                World-Class Enterprises Served by POPHEN
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                Demonstrated experience engineering, manufacturing, and delivering modular cleanroom architectural envelopes for industry leaders worldwide.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      isActive
                        ? "bg-pophen-blue text-white shadow-md shadow-pophen-blue/20"
                        : "bg-white text-slate-700 hover:bg-slate-200/80 border border-slate-200/80"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Client Logos Grid: 5–6 per row on Desktop, 3–4 on Tablet, 2 on Mobile */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-5">
            {filteredClients.map((client: ClientItem) => (
              <div
                key={client.id}
                className="bg-white rounded-xl border border-slate-200 hover:border-pophen-blue/40 shadow-xs hover:shadow-lg transition-all duration-300 p-4 flex flex-col justify-between group hover:-translate-y-1"
              >
                {/* Logo Area */}
                <div className="relative h-20 w-full flex items-center justify-center p-2 mb-2 bg-slate-50/60 rounded-lg group-hover:bg-white transition-colors">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      fill
                      className="object-contain p-1 group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    />
                  </div>
                </div>

                {/* Client Meta */}
                <div className="text-center pt-1 border-t border-slate-100 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs font-bold text-pophen-navy group-hover:text-pophen-blue transition-colors line-clamp-1">
                      {client.name}
                    </h3>
                    <div className="flex items-center justify-center gap-1 mt-1">
                      {getCategoryIcon(client.category)}
                      <span className="text-[10.5px] font-medium text-slate-500 truncate max-w-[130px]">
                        {client.category.split("&")[0].trim()}
                      </span>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-500 line-clamp-2 mt-2 leading-snug">
                    {client.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-slate-500">
            Showing {filteredClients.length} of {CLIENTELE_DATA.length} verified client installations &amp; project partnerships.
          </div>
        </div>
      </section>

      {/* 3. Building Partnerships Through Engineering Excellence */}
      <section className="py-16 lg:py-24 bg-white text-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left 7 cols: Content */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-pophen-blue">
                  COLLABORATIVE VALUE CREATION
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-pophen-navy tracking-tight mt-1">
                  Building Partnerships Through Engineering Excellence
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                POPHEN works with companies across advanced manufacturing and technology-driven industries, supporting their cleanroom architectural system requirements from initial concept engineering through fabrication, fast-track delivery, and final validation.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-lg bg-pophen-blue/10 flex items-center justify-center flex-shrink-0 text-pophen-blue mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-pophen-navy">
                      Front-End &amp; Back-End Semiconductor Fabs
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Rigorous compliance with SEMATECH airborne molecular outgassing criteria (VOC tested by Analab) and silicon-free paint formulations for photolithography and wafer testing lines.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-lg bg-pophen-blue/10 flex items-center justify-center flex-shrink-0 text-pophen-blue mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-pophen-navy">
                      Gigawatt Battery Dryroom Envelopes
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Sustaining extreme dry room dew points down to -50°C and -60°C with hermetic caulking systems, heavy-duty D-GRID plenum ceilings, and zero moisture transmission.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-lg bg-pophen-blue/10 flex items-center justify-center flex-shrink-0 text-pophen-blue mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-pophen-navy">
                      TÜV SÜD &amp; FM4882 Safety Assurance
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Heavy-duty walkable ceiling systems supporting 150 kg point loads and 250 kg/m² uniform loads, certified under FM4882 fire safety standards for high capital-value factories.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-pophen-blue hover:bg-pophen-blue-hover text-white text-xs sm:text-sm font-bold shadow-md shadow-pophen-blue/20 transition-all"
                >
                  <span>Explore Project Case Studies</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-semibold transition-all"
                >
                  <span>Discuss Your Project Requirements</span>
                </Link>
              </div>
            </div>

            {/* Right 5 cols: Image & Key Metrics */}
            <div className="lg:col-span-5 space-y-5">
              <div className="relative h-80 rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900">
                <Image
                  src="/images/cleanroom-systems-interior-Z8QHFfaO.webp"
                  alt="POPHEN Cleanroom Architectural System Installation"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 450px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00172e]/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="text-xs font-bold uppercase tracking-widest text-pophen-cyan">
                    Tata Electronics OSAT Facility (Assam)
                  </div>
                  <div className="text-sm font-semibold text-slate-200 mt-0.5">
                    35,000 m² Semiconductor Cleanroom Envelope
                  </div>
                </div>
              </div>

              {/* Stat Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-2xl font-extrabold text-pophen-navy">340,000 m²</div>
                  <div className="text-xs text-slate-600 mt-1">Largest single gigafactory envelope (CATL Debrecen)</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-2xl font-extrabold text-pophen-navy">30–120 Min</div>
                  <div className="text-xs text-slate-600 mt-1">FM4882 certified fire resistance rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Consultation Inquiry Section */}
      <EnquirySection />
    </InnerPageLayout>
  );
}
