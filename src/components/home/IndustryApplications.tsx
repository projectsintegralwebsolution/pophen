"use client";

import Image from "next/image";
import {
  ArrowRight,
  Cpu,
  BatteryCharging,
  Server,
  Sun,
  Layers,
  Stethoscope,
  ShieldCheck,
} from "lucide-react";
import { INDUSTRIES_DATA, IndustryItem } from "@/data/industries";
import { useEnquiryModal } from "@/context/EnquiryModalContext";

export function IndustryApplications() {
  const { openEnquiryModal } = useEnquiryModal();

  const getIndustryIcon = (id: string) => {
    switch (id) {
      case "semiconductor":
        return <Cpu className="w-5 h-5 text-pophen-cyan" />;
      case "battery":
        return <BatteryCharging className="w-5 h-5 text-pophen-cyan" />;
      case "data-centre":
        return <Server className="w-5 h-5 text-pophen-cyan" />;
      case "solar-cell":
        return <Sun className="w-5 h-5 text-pophen-cyan" />;
      case "hi-tech":
        return <Layers className="w-5 h-5 text-pophen-cyan" />;
      case "medical-devices":
        return <Stethoscope className="w-5 h-5 text-pophen-cyan" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-pophen-cyan" />;
    }
  };

  return (
    <section id="industries" className="py-20 lg:py-28 bg-pophen-navy-950 text-white relative overflow-hidden">
      {/* Background Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-pophen-blue/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pophen-blue/20 text-pophen-cyan text-xs font-bold uppercase tracking-wider border border-pophen-cyan/30">
            TARGET INDUSTRY SEGMENTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Cleanroom &amp; Dryroom Solutions for Critical Industries
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Meeting stringent regulatory requirements, ultra-low dew point tolerances, and particle cleanliness classifications across Semiconductor, Battery, Data Centre, Solar Cell, Hi-Tech, and Medical Device manufacturing.
          </p>
        </div>

        {/* 6 Industry Cards Grid (2 columns on lg, 1 column on mobile/tablet) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {INDUSTRIES_DATA.map((industry: IndustryItem) => (
            <div
              key={industry.id}
              className="bg-pophen-navy/70 rounded-2xl overflow-hidden border border-white/10 hover:border-pophen-cyan/40 shadow-xl transition-all duration-300 flex flex-col md:flex-row group hover:-translate-y-1"
            >
              {/* Card Image Half */}
              <div className="relative md:w-5/12 h-60 md:h-auto overflow-hidden flex-shrink-0">
                <Image
                  src={industry.image}
                  alt={`${industry.name} Cleanroom & Controlled Environment Solutions`}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 30vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-pophen-navy-950/85 via-pophen-navy-950/40 to-transparent" />

                {/* Industry Floating Icon */}
                <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-pophen-navy-950/90 text-white backdrop-blur-md border border-white/20 shadow-lg">
                  {getIndustryIcon(industry.id)}
                </div>
              </div>

              {/* Card Content Half */}
              <div className="p-6 md:w-7/12 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white group-hover:text-pophen-cyan transition-colors">
                      {industry.name}
                    </h3>
                  </div>
                  <p className="text-xs font-semibold text-pophen-cyan">
                    {industry.tagline}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {industry.description}
                  </p>
                </div>

                {/* Key Controlled Parameters */}
                <div className="space-y-1.5 pt-3 border-t border-white/10">
                  <span className="text-[13px] font-bold uppercase tracking-wider text-slate-400">
                    Contamination Control Standards:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {industry.standards.map((std, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center text-[13px] px-2.5 py-0.5 rounded-md bg-white/10 border border-white/10 text-slate-200 font-medium"
                      >
                        {std}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => openEnquiryModal(`${industry.name} Cleanroom Solution`)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-pophen-cyan hover:text-white transition-colors group/btn"
                  >
                    <span>Request Application Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
