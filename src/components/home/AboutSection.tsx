"use client";

import Image from "next/image";
import { ArrowRight, CheckCircle2, Shield, Layers, Award, Cog, Sparkles } from "lucide-react";
import { useEnquiryModal } from "@/context/EnquiryModalContext";

export function AboutSection() {
  const { openEnquiryModal } = useEnquiryModal();

  const performanceFeatures = [
    { num: "01", name: "Walls", desc: "Modular flush wall panels with PIR/Honeycomb infill" },
    { num: "02", name: "Ceilings", desc: "Walk-on & non-walk-on cleanroom ceiling systems" },
    { num: "03", name: "Doors", desc: "Hermetically sealed cleanroom doors with interlocking" },
    { num: "04", name: "Windows", desc: "Double-glazed flush vision panels with desiccants" },
    { num: "05", name: "Partitions", desc: "Modular demountable partition systems for flexibility" },
    { num: "06", name: "Integrated Systems", desc: "Complete turnkey architectural envelope" },
  ];

  const credentials = [
    { title: "Quality Engineering", desc: "ISO 14644 & GMP Compliant" },
    { title: "Customised Designs", desc: "50mm to 100mm Modular Cores" },
    { title: "Reliable Performance", desc: "Airtight & Chemical Resistant" },
    { title: "Project Support", desc: "Turnkey Architecture & Supply" },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column (4 cols on lg): Copy & Mission */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pophen-blue/10 text-pophen-blue text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-pophen-blue" />
                <span>ABOUT POPHEN</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-pophen-navy tracking-tight leading-[1.2]">
                Precision Cleanroom Solutions, Engineered for a Cleaner Tomorrow
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                POPHEN specialises in the development, engineering, and supply of high-performance cleanroom architectural systems. We design modular wall panels, walk-on ceilings, airtight doors, and double-glazed vision panels tailored to demanding contamination-controlled facilities.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Our modular cleanroom systems are manufactured with strict adherence to ISO 14644 and GMP standards, providing pharmaceutical, semiconductor, biotechnology, and advanced battery facilities with structural integrity, acoustic performance, and chemical resistance.
              </p>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => openEnquiryModal("Cleanroom Engineering Consultation")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold bg-pophen-navy hover:bg-pophen-blue text-white shadow-md hover:shadow-lg transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-pophen-cyan"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4 text-pophen-cyan group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Center Column (5 cols on lg): Cleanroom Hero Photo + Credentials Strip */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-industrial h-full min-h-[380px] lg:min-h-[460px] group">
              <Image
                src="/images/about-cleanroom-hero-CfcjiI0h.webp"
                alt="Pophen Cleanroom Engineering Inspection"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pophen-navy-950/76 via-pophen-navy/18 to-transparent" />

              {/* Floating Top Badge */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-pophen-navy-950/90 text-white backdrop-blur-md border border-white/20 shadow-md">
                <Shield className="w-4 h-4 text-pophen-cyan" />
                <span className="text-xs font-semibold tracking-wide">ISO 14644 &amp; GMP Standard</span>
              </div>

              {/* Floating Bottom Credentials Strip */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/40 shadow-xl">
                <div className="grid grid-cols-2 gap-3 text-left">
                  {credentials.map((cred, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-pophen-blue mt-1.5 flex-shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-pophen-navy leading-tight">
                          {cred.title}
                        </div>
                        <div className="text-[13px] text-slate-500 mt-0.5 leading-tight">
                          {cred.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (3 cols on lg): Editorial Sidebar "BUILT FOR PERFORMANCE" */}
          <div className="lg:col-span-3 flex flex-col justify-between bg-slate-50 rounded-2xl border border-slate-200/90 p-5 shadow-sm">
            <div>
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-slate-200">
                <span className="text-xs font-extrabold uppercase tracking-widest text-pophen-navy">
                  BUILT FOR PERFORMANCE
                </span>
                <Layers className="w-4 h-4 text-pophen-blue" />
              </div>

              {/* 6 Structured Items */}
              <div className="space-y-3">
                {performanceFeatures.map((item) => (
                  <div
                    key={item.num}
                    className="p-2.5 rounded-lg bg-white border border-slate-100 hover:border-pophen-blue/40 hover:shadow-xs transition-all duration-200"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[14px] font-bold text-pophen-blue">
                        {item.num}.
                      </span>
                      <span className="text-xs font-bold text-pophen-navy">
                        {item.name}
                      </span>
                    </div>
                    <p className="text-[14px] text-slate-500 mt-0.5 leading-tight pl-5">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Door Image Thumbnail at Bottom of Sidebar */}
            <div className="mt-4 pt-3.5 border-t border-slate-200">
              <div className="relative h-24 w-full rounded-xl overflow-hidden border border-slate-200 shadow-inner group">
                <Image
                  src="/images/cleanroom-another-doors-BJnydDlw.webp"
                  alt="Modular Cleanroom Door System"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 1024px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/54 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2 text-[13px] font-bold text-white tracking-wide uppercase bg-black/40 px-2 py-0.5 rounded backdrop-blur-xs">
                  Cleanroom Door System
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
