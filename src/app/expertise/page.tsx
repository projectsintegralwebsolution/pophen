import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Clock,
  Compass,
  ArrowRight,
  Sparkles,
  Layers,
  Cpu,
  Flame,
  Check,
} from "lucide-react";
import { InnerPageLayout } from "@/components/layout/InnerPageLayout";
import { PageBanner } from "@/components/ui/PageBanner";
import { FAST_TRACK_METHODOLOGY } from "@/data/brochureData";
import { EnquirySection } from "@/components/home/EnquirySection";

export const metadata: Metadata = {
  title: "Engineering Expertise & Fast-Track Execution | POPHEN",
  description:
    "Discover POPHEN's Ready-for-Equipment (RFE) execution methodology, modular zoning, 2-week look-ahead scheduling, and clean build protocols for fast-track cleanrooms.",
  openGraph: {
    title: "Engineering Expertise & Fast-Track Execution | POPHEN",
    description:
      "Learn how POPHEN accelerates tool move-in dates through early material ordering, modular zoning, and schedule crashing.",
  },
};

export default function ExpertisePage() {
  const rfeRequirements = [
    "Ceiling grid and wall envelope 100% installed and sealed",
    "Make-up Air Units (MAU) running continuously providing cooling & dehumidification",
    "Heavy-duty anti-static raised flooring fully installed and grounded",
    "Cleanroom architectural shell verified airtight (Intertek certified)",
    "Strict clean build gowning and particulate containment protocols implemented",
    "NEBB cleanroom qualification completed at At-Rest state for early tool move-in",
  ];

  const engineeringCapabilities = [
    {
      title: "Cleanroom Architectural System Engineering",
      desc: "Comprehensive 3D BIM coordination, interface clash detection, and finite element load analysis for heavy-duty walkable ceilings and high-bay demountable walls.",
      icon: <Compass className="w-5 h-5 text-pophen-cyan" />,
    },
    {
      title: "Low-Dew-Point Vapor-Barrier Engineering",
      desc: "Specialized envelope detailing for battery dryrooms maintaining continuous dew points down to -60°C without thermal bridging or moisture penetration.",
      icon: <Sparkles className="w-5 h-5 text-pophen-cyan" />,
    },
    {
      title: "Acoustic & Vibration Damping Plenums",
      desc: "Structural ceiling grids and independent vibration isolators engineered to isolate sensitive photolithography steppers from MEP mechanical resonance.",
      icon: <Layers className="w-5 h-5 text-pophen-cyan" />,
    },
    {
      title: "Airborne Molecular Contamination (AMC) Control",
      desc: "Silicon-free coating specifications tested by Analab to prevent siloxane outgassing in sub-7nm semiconductor front-end foundries.",
      icon: <Cpu className="w-5 h-5 text-pophen-cyan" />,
    },
  ];

  return (
    <InnerPageLayout>
      {/* 1. Page Banner */}
      <PageBanner
        title="Engineering Expertise &amp; Fast-Track Execution"
        subtitle="Accelerating project schedules through proven Ready-for-Equipment (RFE) methodologies, modular zoning, and international semiconductor execution leadership."
        badge="EXYTE EPC METHODOLOGY &amp; FAST-TRACK"
        image="/images/cleanroom-isometric-3d.jpg"
        breadcrumbs={[{ label: "Engineering Expertise" }]}
        actions={
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#rfe-section"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs sm:text-sm font-bold bg-[#00a2e8] hover:bg-[#0091d1] text-white shadow-lg transition-all"
            >
              <span>Explore RFE Milestone Protocol</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm transition-all"
            >
              <span>View Executed Case Studies</span>
            </Link>
          </div>
        }
      />

      {/* 2. Engineering Capabilities Overview */}
      <section className="py-16 lg:py-24 bg-white text-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-pophen-blue">
              SYSTEMS ENGINEERING
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-pophen-navy tracking-tight">
              Technical Solutions Beyond Simple Material Supply
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              POPHEN operates as an integrated technical solutions partner. We review complete cleanroom drawings, identify value-engineered optimizations, and eliminate on-site trade conflicts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {engineeringCapabilities.map((cap, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div className="w-10 h-10 rounded-xl bg-pophen-navy text-pophen-cyan flex items-center justify-center">
                  {cap.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-pophen-navy">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200/80 text-xs font-semibold text-pophen-blue">
                  Certified Architecture
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Ready-for-Equipment (RFE) & Speed to Move In Tools */}
      <section id="rfe-section" className="py-16 lg:py-24 bg-[#001428] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left 6 cols: RFE Explanations */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pophen-cyan/20 text-pophen-cyan text-xs font-bold uppercase tracking-wider border border-pophen-cyan/30">
                <Clock className="w-3.5 h-3.5" />
                <span>SPEED TO MOVE IN FIRST PRODUCTION TOOLS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                How POPHEN Enables Early Tool Move-In (RFE)
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                In multi-billion dollar semiconductor fabs and battery gigafactories, waiting for 100% facility completion before introducing process equipment delays revenue by months.
              </p>

              <div className="p-6 rounded-2xl bg-[#001d3d] border border-slate-800 space-y-3">
                <div className="text-sm font-extrabold text-pophen-cyan uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-pophen-cyan" />
                  <span>RFE Milestone Criteria:</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-200">
                  {rfeRequirements.map((req, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-pophen-cyan flex-shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-xs text-slate-400">
                * NEBB certification is executed at <strong>At-Rest</strong> state (pre-NEBB verification done at As-Built) to facilitate early tool hook-up without waiting for overall facility handover.
              </p>
            </div>

            {/* Right 6 cols: Modular Zoning Visual Card */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-7 rounded-2xl bg-white text-slate-800 shadow-xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h3 className="text-base font-bold text-pophen-navy">
                    Modular Zoning System in Fast-Track Projects
                  </h3>
                  <span className="px-2.5 py-1 rounded-md bg-blue-50 text-pophen-blue text-xs font-bold">
                    Schedule Crashing
                  </span>
                </div>

                <div className="relative h-56 w-full rounded-xl overflow-hidden bg-slate-900">
                  <Image
                    src="/images/cleanroom-walls-detail-CJABaUMG.webp"
                    alt="Cleanroom Modular Zoning"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white text-xs">
                    <span className="font-bold text-pophen-cyan block">Level 1 Zone A Handover</span>
                    Filter leakage test and cleanliness class certification completed for early tool move-in
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="font-bold text-pophen-navy block">Priority Area Zonation:</span>
                    <span className="text-slate-600">Clear zone split for staged tool delivery</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="font-bold text-pophen-navy block">2-Shift Execution:</span>
                    <span className="text-slate-600">Double shifts deployed for schedule catch-up</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 10-Step Fast-Track Project Execution Timeline */}
      <section className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-pophen-blue">
              STEP-BY-STEP WORKFLOW
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-pophen-navy tracking-tight">
              10-Stage Fast-Track Execution Methodology
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Based on over 70 combined years of German EPC cleanroom project planning implemented across Malaysia, India, Europe, and China.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FAST_TRACK_METHODOLOGY.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-pophen-blue font-extrabold text-base flex items-center justify-center flex-shrink-0 border border-blue-100">
                  {step.step}
                </div>
                <div className="space-y-1.5 flex-1">
                  <h3 className="text-base font-bold text-pophen-navy">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. In-Page Enquiry */}
      <EnquirySection />
    </InnerPageLayout>
  );
}
