import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Award,
  FileCheck,
  Flame,
  ArrowRight,
  Download,
  AlertCircle,
  Building,
  Check,
} from "lucide-react";
import { InnerPageLayout } from "@/components/layout/InnerPageLayout";
import { PageBanner } from "@/components/ui/PageBanner";
import { BROCHURE_CERTIFICATIONS } from "@/data/brochureData";
import { EnquirySection } from "@/components/home/EnquirySection";

export const metadata: Metadata = {
  title: "Certifications & Compliance | FM Approvals, TÜV SÜD & Intertek | POPHEN",
  description:
    "POPHEN cleanroom systems are tested and certified by FM Approvals (FM4882), TÜV SÜD (uniform and concentrated load tests), Intertek (airtightness), Analab (low outgassing), and SGS.",
  openGraph: {
    title: "Certifications & Compliance | POPHEN Cleanroom Systems",
    description:
      "Explore international fire ratings, load testing certificates, and airtightness reports verifying POPHEN's cleanroom wall and ceiling systems.",
  },
};

export default function CertificationsPage() {
  const qualityPillars = [
    {
      title: "Material Purity & Traceability",
      desc: "Every batch of pre-painted galvanized iron (PPGI), aluminum alloy extrusions, and rockwool / aluminum honeycomb cores is tested for density, adhesion, and zero VOC outgassing.",
    },
    {
      title: "Precision Roll-Forming & Tolerances",
      desc: "Panels are manufactured on automated continuous roll-forming lines with diagonal and straightness tolerances within ±0.5mm, ensuring true airtight assembly.",
    },
    {
      title: "FM4882 Fire & Smoke Safety",
      desc: "Tested under FM Approvals Standard 4882 for cleanroom wall and ceiling assemblies, certifying minimal smoke propagation without sprinkler dependency in interstitial plenums.",
    },
    {
      title: "TÜV SÜD Structural Load Integrity",
      desc: "Ceiling grid extrusions and die-cast fire sprinkler connectors undergo rigorous destructive uniform and point load testing to guarantee maintenance worker safety.",
    },
  ];

  return (
    <InnerPageLayout>
      {/* 1. Page Banner */}
      <PageBanner
        title="Certifications, Testing &amp; Quality Compliance"
        subtitle="Independent third-party laboratory test reports and international compliance certificates verifying POPHEN's structural load capacity, fire resistance, airtightness, and zero outgassing."
        badge="THIRD-PARTY VERIFIED PERFORMANCE"
        image="/images/cleanroom-targets-CgQy0Dmj.webp"
        breadcrumbs={[{ label: "Certifications" }]}
        actions={
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#cert-cards"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs sm:text-sm font-bold bg-[#00a2e8] hover:bg-[#0091d1] text-white shadow-lg transition-all"
            >
              <span>Explore Certification Reports</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm transition-all"
            >
              <span>Technical Resource Centre</span>
            </Link>
          </div>
        }
      />

      {/* 2. Overview Section */}
      <section className="py-16 lg:py-20 bg-white text-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-pophen-blue">
              CERTIFIED ENGINEERING STANDARDS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-pophen-navy tracking-tight">
              International Safety &amp; Quality Compliance
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              In advanced semiconductor wafer fabs, high-density battery dryrooms, and pharmaceutical aseptic processing suites, unverified materials present catastrophic risks of fire spread, outgassing poisoning, or structural deflection failure.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              POPHEN systems undergo rigorous independent testing by leading global verification agencies including <strong>FM Approvals (USA)</strong>, <strong>TÜV SÜD (Germany)</strong>, <strong>Intertek</strong>, <strong>SGS</strong>, and <strong>Analabs Technologies</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Detailed Certification Cards Grid */}
      <section id="cert-cards" className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-pophen-blue">
              AUDITED TEST REPORTS &amp; APPROVALS
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-pophen-navy tracking-tight">
              Official Certification &amp; Testing Portfolio
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Each certificate is tied to specific material formulations and structural profiles tested in accredited laboratory test chambers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BROCHURE_CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top Badge */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-pophen-blue text-xs font-bold border border-blue-100">
                      {cert.badge}
                    </span>
                    <Award className="w-5 h-5 text-pophen-blue" />
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-pophen-navy leading-tight">
                      {cert.name}
                    </h4>
                    <div className="text-xs text-slate-500 font-semibold mt-1">
                      {cert.authority}
                    </div>
                  </div>

                  {/* Report details */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1.5">
                    <div>
                      <span className="font-bold text-pophen-navy block">Report / Certificate Ref:</span>
                      <span className="text-slate-600">{cert.certificateNumber}</span>
                    </div>
                    <div>
                      <span className="font-bold text-pophen-navy block">Test Scope:</span>
                      <span className="text-slate-600">{cert.scope}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Applicable Products */}
                  <div className="pt-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                      Applicable POPHEN Systems:
                    </span>
                    <ul className="space-y-1 text-xs text-slate-700">
                      {cert.applicableProducts.slice(0, 3).map((prod, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-pophen-blue flex-shrink-0 mt-0.5" />
                          <span className="truncate">{prod}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-pophen-blue hover:text-pophen-navy transition-colors"
                  >
                    <span>Request Verified Test Dossier</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Quality Commitment Pillars */}
      <section className="py-16 lg:py-24 bg-[#001428] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-pophen-cyan">
              ZERO-DEFECT POLICY
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              POPHEN Quality Assurance Commitment
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              From raw sheet steel inspection to final cleanroom air boundary smoke testing, our QA/QC protocols eliminate contamination risks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#001d3d] border border-slate-800 shadow-md flex flex-col justify-between space-y-3"
              >
                <div className="w-9 h-9 rounded-xl bg-pophen-cyan/20 text-pophen-cyan flex items-center justify-center font-bold text-sm">
                  0{idx + 1}
                </div>
                <h4 className="text-base font-bold text-white">
                  {pillar.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {pillar.desc}
                </p>
                <div className="pt-2 text-[11px] font-semibold text-pophen-cyan">
                  ISO 9001 / ISO 14644 Assured
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
