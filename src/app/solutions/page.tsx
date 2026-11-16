import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Award,
  Globe2,
  Flame,
  Layers,
  ArrowRight,
  Clock,
  Sparkles,
  Compass,
  Cpu,
  Building,
} from "lucide-react";
import { InnerPageLayout } from "@/components/layout/InnerPageLayout";
import { PageBanner } from "@/components/ui/PageBanner";
import { EnquirySection } from "@/components/home/EnquirySection";

export const metadata: Metadata = {
  title: "Turnkey Cleanroom Architectural Solutions & Why Choose POPHEN",
  description:
    "Discover why global cleanroom contractors choose POPHEN for semiconductor foundries, EV battery dryrooms, and renewable energy manufacturing facilities.",
  openGraph: {
    title: "Turnkey Cleanroom Solutions | POPHEN",
    description:
      "Integrated architectural cleanroom systems from design review, modular prefabrication, to Ready-for-Equipment (RFE) handover.",
  },
};

export default function SolutionsPage() {
  const whyChoosePoints = [
    {
      title: "International Project Footprint",
      desc: "Proven execution across India (Tata OSAT, Premier Energies), Europe (CATL Hungary, ACC France, Northvolt Sweden), and Asia (Intel, Infineon, Texas Instruments).",
      icon: <Globe2 className="w-5 h-5 text-pophen-cyan" />,
    },
    {
      title: "FM4882 & TÜV SÜD Certified Systems",
      desc: "Full range of wall panels and ceiling grids carry certified FM Approvals for fire and smoke safety, plus TÜV structural load verification.",
      icon: <Award className="w-5 h-5 text-pophen-cyan" />,
    },
    {
      title: "Ready-for-Equipment (RFE) Fast-Track Execution",
      desc: "Proprietary modular zoning and early clean build protocols accelerate tool move-in dates, allowing clients to generate revenue weeks earlier.",
      icon: <Clock className="w-5 h-5 text-pophen-cyan" />,
    },
    {
      title: "Extensive Wall & Ceiling System Configurations",
      desc: "From 6mm pasted cladding to 130mm heavy-duty walkable ceilings, caulked partitions, and stud-less modular systems tailored to exact facility heights.",
      icon: <Layers className="w-5 h-5 text-pophen-cyan" />,
    },
    {
      title: "Specialized Battery Dryroom Dual-Capability",
      desc: "Vapor-tight hermetic envelopes capable of sustaining continuous ultra-low dew points (≤ -50°C to -60°C) for EV battery cell assembly lines.",
      icon: <Sparkles className="w-5 h-5 text-pophen-cyan" />,
    },
    {
      title: "Exyte EPC Leadership & Senior Project Management",
      desc: "Executive project sponsorship led by Joel William with over 13 years of German EPC cleanroom project management in Singapore and Malaysia.",
      icon: <Compass className="w-5 h-5 text-pophen-cyan" />,
    },
  ];

  return (
    <InnerPageLayout>
      {/* 1. Page Banner */}
      <PageBanner
        title="Why Choose POPHEN | Turnkey Cleanroom Solutions"
        subtitle="Engineering excellence, proven international project references, and certified high-performance modular envelopes for mission-critical industrial manufacturing."
        badge="ENGINEERING INTEGRATION"
        image="/images/cleanroom-walls-detail-CJABaUMG.webp"
        breadcrumbs={[{ label: "Solutions" }]}
        actions={
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs sm:text-sm font-bold bg-[#00a2e8] hover:bg-[#0091d1] text-white shadow-lg transition-all"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm transition-all"
            >
              <span>Global Projects</span>
            </Link>
          </div>
        }
      />

      {/* 2. Core Value Proposition Grid */}
      <section className="py-16 lg:py-24 bg-white text-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-pophen-blue">
              PROVEN VALUE DRIVERS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-pophen-navy tracking-tight">
              Why Global Facility Owners Choose POPHEN
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We bridge the gap between architectural materials manufacturing and on-site engineering execution, eliminating contractor friction and project delays.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoosePoints.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-pophen-navy text-pophen-cyan flex items-center justify-center shadow-md">
                  {item.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-pophen-navy">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200/80 text-xs font-semibold text-pophen-blue">
                  POPHEN Differentiator
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
