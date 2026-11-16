"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  ShieldCheck,
  Download,
  Eye,
  CheckCircle2,
  ExternalLink,
  Flame,
  Award,
  Maximize2,
  FileCheck,
  Building2,
  ArrowRight,
} from "lucide-react";
import { InnerPageLayout } from "@/components/layout/InnerPageLayout";
import { PageBanner } from "@/components/ui/PageBanner";
import { VERIFIED_CERTIFICATIONS, VerifiedDocument } from "@/data/brochureData";
import { DocumentModal } from "@/components/certifications/DocumentModal";
import { EnquirySection } from "@/components/home/EnquirySection";

export default function ProductCertificationsPage() {
  const [selectedDoc, setSelectedDoc] = useState<VerifiedDocument | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenDoc = (doc: VerifiedDocument) => {
    setSelectedDoc(doc);
    setModalOpen(true);
  };

  return (
    <InnerPageLayout>
      {/* 1. Page Banner */}
      <PageBanner
        title="Product Certifications"
        subtitle="Quality assurance, product testing and compliance documentation for cleanroom architectural systems."
        badge="INDEPENDENT ACCREDITED VALIDATION"
        image="/images/hero-banner-cleanroom-inspect.png"
        breadcrumbs={[{ label: "Product Certifications" }]}
      />

      {/* 2. Certification Introduction */}
      <section className="py-14 lg:py-18 bg-white text-slate-800 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-pophen-blue">
              THIRD-PARTY ACCREDITATION &amp; COMPLIANCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-pophen-navy tracking-tight">
              Rigorous Quality Verification for Controlled Environments
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              In advanced semiconductor fabrication, lithium-ion battery dryrooms, and pharmaceutical sterile processing, cleanroom architectural systems are subjected to extreme operational demands. Product testing, independent fire verification, outgassing characterization, and structural load testing ensure contamination containment and regulatory approval throughout the facility lifecycle.
            </p>
          </div>

          {/* Key Compliance Drivers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-pophen-blue/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-pophen-blue/10 flex items-center justify-center text-pophen-blue mb-4">
                <Flame className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-pophen-navy">FM4882 Fire Safety</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Evaluated under ANSI/FM 4882 standard for cleanroom materials with Fire Grade A1/M0, non-combustible core materials, and 30 to 120 minutes certified fire endurance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-pophen-blue/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-pophen-blue/10 flex items-center justify-center text-pophen-blue mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-pophen-navy">Analab VOC &amp; Outgassing</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Dynamic Headspace GC/MS thermal desorption analysis verifying silicone-free coatings and ultra-low organic condensable outgassing compliant with 300mm wafer standards.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-pophen-blue/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-pophen-blue/10 flex items-center justify-center text-pophen-blue mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-pophen-navy">TÜV SÜD Structural Load</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Concentrated point load testing (150 kg) and uniform service load testing (250 kg/m²) for heavy-duty walkable ceilings, eliminating external catwalks in mechanical plenums.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Document Gallery */}
      <section className="py-16 lg:py-24 bg-slate-50 text-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-pophen-blue">
                OFFICIAL TESTING REPORTS &amp; CERTIFICATES
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-pophen-navy tracking-tight mt-1">
                Verified Product Certificates &amp; Testing Reports
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                Review genuine testing certificates and reports provided by POPHEN. Click &ldquo;View Document&rdquo; for full high-resolution inspection or &ldquo;Download PDF&rdquo; for the official document file.
              </p>
            </div>

            <a
              href="/documents/pophen-product-certifications-verified.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-pophen-blue text-xs font-bold text-pophen-navy hover:text-pophen-blue transition-all shadow-xs flex-shrink-0"
            >
              <Download className="w-4 h-4 text-pophen-blue" />
              <span>Download Complete Dossier (PDF)</span>
            </a>
          </div>

          {/* Document Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VERIFIED_CERTIFICATIONS.map((doc: VerifiedDocument) => (
              <div
                key={doc.id}
                className="bg-white rounded-2xl border border-slate-200 hover:border-pophen-blue/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
              >
                <div>
                  {/* Document Thumbnail Preview with Hover Zoom */}
                  <div
                    onClick={() => handleOpenDoc(doc)}
                    className="relative h-64 w-full bg-[#0b1b2d] overflow-hidden cursor-pointer flex items-center justify-center p-4 border-b border-slate-100"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={doc.previewImage}
                        alt={doc.title}
                        fill
                        className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>

                    {/* Badge Overlay */}
                    <div className="absolute top-3.5 left-3.5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#00172e]/90 text-white text-[11px] font-bold tracking-wide shadow-md border border-white/10 backdrop-blur-sm">
                        <ShieldCheck className="w-3.5 h-3.5 text-pophen-cyan" />
                        {doc.badge}
                      </span>
                    </div>

                    {/* Hover Inspect Icon */}
                    <div className="absolute inset-0 bg-[#00172e]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                      <div className="px-4 py-2 rounded-xl bg-white text-pophen-navy text-xs font-bold shadow-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <Eye className="w-4 h-4 text-pophen-blue" />
                        <span>Inspect Certificate</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-3">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-pophen-blue">
                      {doc.issuer}
                    </div>

                    <h3 className="text-base font-bold text-pophen-navy leading-snug group-hover:text-pophen-blue transition-colors">
                      {doc.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {doc.description}
                    </p>

                    <div className="pt-2 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                      <div>
                        <span className="font-semibold text-slate-700">Report No: </span>
                        <span className="text-slate-500">{doc.reportNumber}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-slate-700">Applicability: </span>
                        <span className="text-pophen-blue font-medium">{doc.applicability}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => handleOpenDoc(doc)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-pophen-blue hover:text-pophen-navy transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Document</span>
                  </button>

                  <a
                    href={doc.pdfUrl}
                    download
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-pophen-blue hover:bg-pophen-blue-hover text-white text-xs font-semibold shadow-xs transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Standards and Testing Verification Matrix Table */}
      <section className="py-16 lg:py-20 bg-white text-slate-800 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-pophen-blue">
              TECHNICAL AUDIT OVERVIEW
            </span>
            <h2 className="text-2xl font-extrabold text-pophen-navy tracking-tight mt-1">
              Summary of Certified Testing Protocols
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="min-w-full divide-y divide-slate-200 text-left text-xs sm:text-sm">
              <thead className="bg-[#00172e] text-white">
                <tr>
                  <th className="py-3.5 px-4 font-bold">Standard / Code</th>
                  <th className="py-3.5 px-4 font-bold">Testing Agency</th>
                  <th className="py-3.5 px-4 font-bold">Tested Parameter</th>
                  <th className="py-3.5 px-4 font-bold">Performance Result</th>
                  <th className="py-3.5 px-4 font-bold">Applicable Systems</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-pophen-navy">ANSI/FM 4882</td>
                  <td className="py-3.5 px-4 text-slate-600">FM Approvals (USA)</td>
                  <td className="py-3.5 px-4 text-slate-600">Combustibility, smoke toxicity &amp; fire endurance</td>
                  <td className="py-3.5 px-4 text-emerald-600 font-semibold">Fire Grade A1/M0, 30–120 min endurance</td>
                  <td className="py-3.5 px-4 text-slate-600">R-Series, C-Series, SS2000, CK2000</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-pophen-navy">GC/MS Desorption</td>
                  <td className="py-3.5 px-4 text-slate-600">Analab Technologies</td>
                  <td className="py-3.5 px-4 text-slate-600">Volatile organic compounds &amp; silicone outgassing</td>
                  <td className="py-3.5 px-4 text-emerald-600 font-semibold">&lt; 2,000 ng/g (Silicon-free verified)</td>
                  <td className="py-3.5 px-4 text-slate-600">All wall panels &amp; ceiling paint coatings</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-pophen-navy">EN 13964 / ASTM E72</td>
                  <td className="py-3.5 px-4 text-slate-600">TÜV SÜD / CNAS</td>
                  <td className="py-3.5 px-4 text-slate-600">Concentrated point load (150 kg) &amp; uniform load (250 kg/m²)</td>
                  <td className="py-3.5 px-4 text-emerald-600 font-semibold">Deflection &lt; L/360, zero permanent deformation</td>
                  <td className="py-3.5 px-4 text-slate-600">CK2000 Walkable Ceiling Grid</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-pophen-navy">ISO 14644-4 Annex E</td>
                  <td className="py-3.5 px-4 text-slate-600">Intertek Environmental</td>
                  <td className="py-3.5 px-4 text-slate-600">Envelope air tightness &amp; joint leakage under pressure</td>
                  <td className="py-3.5 px-4 text-emerald-600 font-semibold">Class 4 Air Permeability (&lt; 0.05 m³/h·m²)</td>
                  <td className="py-3.5 px-4 text-slate-600">Caulking walls, cleanroom doors &amp; windows</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-pophen-navy">EN 14509 / CE</td>
                  <td className="py-3.5 px-4 text-slate-600">European Union Notified Body</td>
                  <td className="py-3.5 px-4 text-slate-600">Self-supporting double skin metal insulating panels</td>
                  <td className="py-3.5 px-4 text-emerald-600 font-semibold">CE Conformity CPR 305/2011/EU</td>
                  <td className="py-3.5 px-4 text-slate-600">All POPHEN cleanroom architectural panels</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. Document Viewer Modal */}
      <DocumentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        document={selectedDoc}
      />

      {/* 6. RFQ Consultation Section */}
      <EnquirySection />
    </InnerPageLayout>
  );
}
