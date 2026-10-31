"use client";

import Image from "next/image";
import {
  ArrowRight,
  ClipboardCheck,
  Compass,
  Cog,
  Wrench,
  ShieldCheck,
} from "lucide-react";
import { useEnquiryModal } from "@/context/EnquiryModalContext";

export function ProcessSection() {
  const { openEnquiryModal } = useEnquiryModal();

  const steps = [
    {
      num: "01",
      title: "Consultation & Requirement Analysis",
      desc: "Understand cleanroom requirements, industry standards and project objectives.",
      icon: <ClipboardCheck className="w-5 h-5 text-pophen-blue" />,
    },
    {
      num: "02",
      title: "Design & Engineering",
      desc: "Develop customised cleanroom layouts and technical solutions.",
      icon: <Compass className="w-5 h-5 text-pophen-blue" />,
    },
    {
      num: "03",
      title: "Manufacturing & Supply",
      desc: "Manufacture and supply precision-engineered cleanroom components and systems.",
      icon: <Cog className="w-5 h-5 text-pophen-blue" />,
    },
    {
      num: "04",
      title: "Installation & Integration",
      desc: "Support installation and integration of cleanroom architectural systems.",
      icon: <Wrench className="w-5 h-5 text-pophen-blue" />,
    },
    {
      num: "05",
      title: "Testing & Handover",
      desc: "Complete quality checks, verification and project handover according to project scope.",
      icon: <ShieldCheck className="w-5 h-5 text-pophen-blue" />,
    },
  ];

  return (
    <section
      id="process"
      className="py-16 lg:py-20 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Top-Right "Our Services" Button */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 lg:mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-pophen-blue block mb-1.5">
              OUR PROCESS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-pophen-navy tracking-tight">
              From Design to Turnkey Execution
            </h2>
          </div>

          <div className="flex-shrink-0">
            <button
              type="button"
              onClick={() => openEnquiryModal("Cleanroom Engineering Services")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-pophen-blue bg-white hover:bg-pophen-blue/5 border border-pophen-blue/40 transition-all shadow-2xs group focus:outline-none focus:ring-2 focus:ring-pophen-cyan"
            >
              <span>Our Services</span>
              <ArrowRight className="w-4 h-4 text-pophen-blue group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Main Content Grid: 5-Step Horizontal Timeline (Left) + Feature Card (Right) */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-8 items-center">
          {/* Left: Five-Step Process Timeline (7 cols on xl) */}
          <div className="xl:col-span-7">
            {/* Desktop & Tablet Horizontal Timeline (md and up) */}
            <div className="hidden md:grid md:grid-cols-5 gap-3 lg:gap-4 items-start">
              {steps.map((step, index) => (
                <div
                  key={step.num}
                  className="flex flex-col items-center text-center relative group"
                >
                  {/* Thin Connecting Arrow Between Steps */}
                  {index < steps.length - 1 && (
                    <div
                      className="hidden md:flex items-center justify-center absolute top-7 -right-2 lg:-right-3 translate-x-1/2 -translate-y-1/2 z-10 text-pophen-blue/70 pointer-events-none"
                      aria-hidden="true"
                    >
                      <ArrowRight className="w-4 h-4 stroke-[2]" />
                    </div>
                  )}

                  {/* Circular Blue-Outline Icon */}
                  <div className="w-14 h-14 rounded-full bg-[#eef7fc] border-2 border-pophen-blue flex items-center justify-center shadow-2xs group-hover:bg-pophen-blue/15 transition-colors">
                    <div className="w-8 h-8 rounded-lg border border-pophen-blue/30 bg-white flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>

                  {/* Step Number */}
                  <span className="text-xs font-semibold text-slate-400 mt-3 mb-1">
                    {step.num}
                  </span>

                  {/* Process Title */}
                  <h3 className="text-xs sm:text-sm font-extrabold text-pophen-navy leading-snug mb-1.5 px-1">
                    {step.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-[14px] text-slate-600 leading-relaxed px-1">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Mobile Vertical Step-by-Step Layout (< md) */}
            <div className="md:hidden space-y-5">
              {steps.map((step, index) => (
                <div key={step.num} className="flex items-start gap-4 relative">
                  {/* Vertical connector line */}
                  {index < steps.length - 1 && (
                    <div
                      className="absolute left-7 top-14 bottom-[-20px] w-0.5 bg-pophen-blue/25 -translate-x-1/2"
                      aria-hidden="true"
                    />
                  )}

                  {/* Circular Blue-Outline Icon */}
                  <div className="w-14 h-14 rounded-full bg-[#eef7fc] border-2 border-pophen-blue flex items-center justify-center flex-shrink-0 relative z-10">
                    <div className="w-8 h-8 rounded-lg border border-pophen-blue/30 bg-white flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>

                  {/* Step Text Content */}
                  <div className="pt-0.5">
                    <span className="text-xs font-semibold text-pophen-blue block">
                      Step {step.num}
                    </span>
                    <h3 className="text-sm font-extrabold text-pophen-navy leading-snug mt-0.5">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mt-1">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Feature Card (5 cols on xl) */}
          <div className="xl:col-span-5">
            <div className="bg-slate-50/80 rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center gap-5">
              {/* Left Image inside Feature Card */}
              <div className="relative w-full sm:w-44 h-48 sm:h-48 rounded-xl overflow-hidden flex-shrink-0 border border-slate-200/80 shadow-2xs">
                <Image
                  src="/images/cleanroom-walls-hallway-D4ZV_xh8.webp"
                  alt="POPHEN Cleanroom Facility Corridor"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, 180px"
                />
              </div>

              {/* Right Text Content inside Feature Card */}
              <div className="space-y-3 text-left flex-1">
                <h3 className="text-base sm:text-lg font-extrabold text-pophen-navy leading-snug">
                  A Structured Approach for Project Success
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  From initial consultation to final delivery, POPHEN focuses on precision engineering, reliable manufacturing and quality-driven cleanroom solutions.
                </p>
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={() => openEnquiryModal("Turnkey Project Consultation")}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold bg-pophen-blue hover:bg-pophen-blue-hover text-white shadow-sm hover:shadow transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-pophen-cyan"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
