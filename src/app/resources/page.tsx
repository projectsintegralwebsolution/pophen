import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  Download,
  ShieldCheck,
  CheckCircle2,
  FileCheck,
  ArrowRight,
  Layers,
  Sparkles,
} from "lucide-react";
import { InnerPageLayout } from "@/components/layout/InnerPageLayout";
import { PageBanner } from "@/components/ui/PageBanner";
import { EnquirySection } from "@/components/home/EnquirySection";

export const metadata: Metadata = {
  title: "Technical Resource Centre | Datasheets & Certifications | POPHEN",
  description:
    "Access approved POPHEN technical datasheets, FM4882 certificate references, TÜV load test summaries, and cleanroom wall/ceiling architectural specifications.",
  openGraph: {
    title: "Technical Resource Centre | POPHEN Cleanroom Systems",
    description:
      "Download official cleanroom technical specifications, testing summaries, and architectural system guidelines.",
  },
};

export default function ResourcesPage() {
  const resources = [
    {
      title: "POPHEN Corporate Cleanroom Architectural Solutions Brochure",
      category: "Corporate Brochure",
      format: "PDF",
      size: "6.8 MB",
      desc: "Complete 34-page corporate overview covering semiconductor, renewable energy, EV battery dryrooms, certified product systems, and global project references.",
      href: "/contact",
    },
    {
      title: "FM Approvals (FM4882) Certificate of Compliance Summary",
      category: "Certification Dossier",
      format: "PDF",
      size: "1.4 MB",
      desc: "Third-party audit summary confirming Class 1 cleanroom wall and ceiling material compliance under FM4882 standards.",
      href: "/contact",
    },
    {
      title: "TÜV SÜD Structural Load Test Report Summary (CK2000)",
      category: "Testing Report",
      format: "PDF",
      size: "2.1 MB",
      desc: "Uniform and concentrated point-load test results verifying the highest load-bearing capacity for CK2000 walkable ceiling grid profiles.",
      href: "/contact",
    },
    {
      title: "Intertek Air Tightness & Panel/Door Leakage Test Report",
      category: "Testing Report",
      format: "PDF",
      size: "1.9 MB",
      desc: "Certified pressure boundary leakage report verifying minimal air infiltration across C50 wall joints and hermetic cleanroom door drop seals.",
      href: "/contact",
    },
    {
      title: "Analab Organic Outgassing (VOC) Test Summary",
      category: "Testing Report",
      format: "PDF",
      size: "1.2 MB",
      desc: "GC/MS analysis report demonstrating zero siloxane and ultra-low VOC emissions for POPHEN silicon-free cleanroom coatings.",
      href: "/contact",
    },
    {
      title: "R-Series Removable Wall System Architectural Specification",
      category: "Product Datasheet",
      format: "PDF",
      size: "2.4 MB",
      desc: "Technical data sheet detailing 50/75/100mm removable panel profiles, A1/M0 fire resistance, and rockwool / aluminum honeycomb infill.",
      href: "/products/r-series",
    },
    {
      title: "C-Series Caulking Wall System Technical Specification",
      category: "Product Datasheet",
      format: "PDF",
      size: "2.2 MB",
      desc: "Engineering specifications for space-saving caulking partitions deployed in Tata Electronics OSAT and Tesla Gigafactory.",
      href: "/products/c-series",
    },
    {
      title: "CK2000 Walkable Ceiling Grid System Engineering Guide",
      category: "Product Datasheet",
      format: "PDF",
      size: "3.2 MB",
      desc: "Comprehensive suspension, FFU integration, and load capacity guide for heavy-duty walkable aluminum cleanroom ceilings.",
      href: "/products/ck2000-walkable",
    },
    {
      title: "Ready-for-Equipment (RFE) Fast-Track Execution Guide",
      category: "Execution Methodology",
      format: "PDF",
      size: "1.8 MB",
      desc: "Methodology whitepaper on modular zoning, two-week look-ahead scheduling, and staggered handover for early semiconductor tool move-in.",
      href: "/expertise",
    },
  ];

  return (
    <InnerPageLayout>
      {/* 1. Page Banner */}
      <PageBanner
        title="Technical Resource Centre"
        subtitle="Access official engineering brochures, third-party test report summaries, product datasheets, and architectural specifications."
        badge="DOCUMENTATION &amp; SPECIFICATIONS"
        image="/images/cleanroom-systems-interior-Z8QHFfaO.webp"
        breadcrumbs={[{ label: "Technical Resources" }]}
      />

      {/* 2. Resources Grid */}
      <section className="py-14 lg:py-20 bg-white text-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-pophen-blue">
              VERIFIED ENGINEERING LIBRARY
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-pophen-navy tracking-tight mt-1">
              Download Technical Documentation
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              All documents reflect verified laboratory test reports and approved company engineering standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((res, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md bg-blue-50 text-pophen-blue text-[11px] font-bold">
                      {res.category}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500">
                      {res.format} • {res.size}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-pophen-navy group-hover:text-pophen-blue transition-colors leading-snug">
                    {res.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {res.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={res.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-pophen-blue hover:text-pophen-navy transition-colors"
                  >
                    <span>Request / View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <FileText className="w-4 h-4 text-slate-400 group-hover:text-pophen-blue transition-colors" />
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
