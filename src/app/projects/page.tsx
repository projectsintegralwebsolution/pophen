"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Globe2,
  Calendar,
  Layers,
  MapPin,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building,
} from "lucide-react";
import { InnerPageLayout } from "@/components/layout/InnerPageLayout";
import { PageBanner } from "@/components/ui/PageBanner";
import { BROCHURE_PROJECTS, ProjectReference } from "@/data/brochureData";
import { EnquirySection } from "@/components/home/EnquirySection";

export default function ProjectsPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("All");

  const industries = [
    "All",
    "Semiconductor",
    "Battery Manufacturing",
    "Solar Cell / Renewable Energy",
  ];

  const filteredProjects =
    selectedIndustry === "All"
      ? BROCHURE_PROJECTS
      : BROCHURE_PROJECTS.filter((p) => p.industry.includes(selectedIndustry));

  return (
    <InnerPageLayout>
      {/* 1. Page Banner */}
      <PageBanner
        title="Global Cleanroom Project References"
        subtitle="Explore POPHEN's international track record delivering multi-thousand square meter cleanrooms and dryrooms for Tier-1 semiconductor fabs, EV battery gigafactories, and solar photovoltaic lines."
        badge="PROVEN INTERNATIONAL TRACK RECORD"
        image="/images/cleanroom-walls-hallway-D4ZV_xh8.webp"
        breadcrumbs={[{ label: "Global Projects" }]}
      />

      {/* 2. Filter & Project Cards Section */}
      <section className="py-14 lg:py-20 bg-white text-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-pophen-blue">
                INTERNATIONAL CASE STUDIES
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-pophen-navy tracking-tight mt-1">
                Delivered Facilities Across India, Europe, and Asia
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Showing {filteredProjects.length} landmark projects executed with verified architectural system delivery.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {industries.map((ind) => {
                const isActive = selectedIndustry === ind;
                return (
                  <button
                    key={ind}
                    type="button"
                    onClick={() => setSelectedIndustry(ind)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      isActive
                        ? "bg-pophen-blue text-white shadow-md"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {ind}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Project Cards Grid (2 cols on desktop) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project: ProjectReference) => (
              <div
                key={project.id}
                className="rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:-translate-y-1"
              >
                {/* Top Image Showcase with Overlay Badge */}
                <div className="relative h-64 w-full bg-slate-900 overflow-hidden flex-shrink-0">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00172e]/85 via-[#00172e]/30 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-md bg-[#00172e]/90 text-white text-xs font-bold backdrop-blur-md border border-white/10 shadow-md">
                      {project.industry}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-[#0077be] text-white text-xs font-bold shadow-md">
                      {project.cleanliness}
                    </span>
                  </div>

                  {/* Bottom Image Info */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs text-pophen-cyan font-semibold">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{project.location}, {project.country}</span>
                      </div>
                      <h3 className="text-xl font-extrabold text-white mt-0.5">
                        {project.name}
                      </h3>
                    </div>
                    <div className="text-right flex-shrink-0 pl-2">
                      <div className="text-xs text-slate-300 font-semibold">{project.year}</div>
                      <div className="text-sm font-bold text-pophen-cyan">{project.area}</div>
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-100">
                      <span>Client: <strong className="text-pophen-navy">{project.client}</strong></span>
                      <span>Execution Year: <strong className="text-pophen-navy">{project.year}</strong></span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Systems Installed Box */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-pophen-navy flex items-center gap-1.5">
                      <Layers className="w-4 h-4 text-pophen-blue" />
                      <span>POPHEN Scope &amp; Systems Delivered:</span>
                    </div>
                    <ul className="space-y-1 text-xs text-slate-700">
                      {project.systemsUsed.map((sys, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-pophen-blue flex-shrink-0 mt-0.5" />
                          <span>{sys}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Action */}
                  <div className="pt-2 flex items-center justify-between">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-pophen-blue hover:text-pophen-navy transition-colors"
                    >
                      <span>Inquire About Similar Scale Projects</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. In-Page Enquiry */}
      <EnquirySection />
    </InnerPageLayout>
  );
}
