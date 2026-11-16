"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Flame,
  Award,
  ChevronRight,
  Check,
  Layers,
  Sparkles,
  Download,
  Eye,
  Maximize2,
  FileCheck,
  Compass,
  Cpu,
} from "lucide-react";
import { InnerPageLayout } from "@/components/layout/InnerPageLayout";
import { PageBanner } from "@/components/ui/PageBanner";
import { BrochureProduct } from "@/data/brochureData";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductInquiryForm } from "@/components/product/ProductInquiryForm";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { DrawingModal } from "@/components/product/DrawingModal";

interface ProductDetailViewProps {
  product: BrochureProduct;
  relatedProducts: BrochureProduct[];
}

export function ProductDetailView({ product, relatedProducts }: ProductDetailViewProps) {
  const [selectedDrawing, setSelectedDrawing] = useState<{
    title: string;
    description: string;
    image: string;
    downloadUrl?: string;
    type?: string;
  } | null>(null);
  const [drawingModalOpen, setDrawingModalOpen] = useState(false);

  const handleOpenDrawing = (drawing: {
    title: string;
    description: string;
    image: string;
    downloadUrl?: string;
    type?: string;
  }) => {
    setSelectedDrawing(drawing);
    setDrawingModalOpen(true);
  };

  const specs = product.technicalSpecs || [
    { label: "Product Name", value: product.name },
    { label: "System Type", value: `${product.category} Cleanroom System` },
    { label: "Panel Thickness", value: product.thickness },
    { label: "Panel Construction", value: product.skin },
    { label: "Core / Infill Material", value: product.core },
    { label: "Structural Bonding Adhesive", value: product.glue },
    { label: "Surface Finish & Outgassing", value: product.surfacePaint },
    { label: "Fire Performance", value: product.fireRating },
    { label: "Testing & Certification", value: product.certification.join(" • ") },
    { label: "Installation Characteristic", value: product.specialFeature },
  ];

  const drawings = product.technicalDrawings || [
    {
      id: `${product.id}-sketch-1`,
      title: `${product.name} Cross-Section & Joint`,
      description: "Standard architectural profile sketch showing panel construction and joint interface.",
      image: "/images/drawings/cleanroom-architecture-overview.webp",
      downloadUrl: "/images/drawings/cleanroom-architecture-overview.webp",
      type: "System Overview" as const,
    },
  ];

  return (
    <InnerPageLayout>
      {/* 1 & 2. Product Hero Banner with Breadcrumbs */}
      <PageBanner
        title={product.name}
        subtitle={product.tagline}
        badge={product.category.toUpperCase()}
        image={product.image}
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: product.name },
        ]}
        actions={
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#rfq-section"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs sm:text-sm font-bold bg-[#00a2e8] hover:bg-[#0091d1] text-white shadow-lg transition-all"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#tech-specs"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm transition-all"
            >
              <FileText className="w-4 h-4" />
              <span>Technical Specifications</span>
            </a>
          </div>
        }
      />

      {/* 3. Product Overview */}
      <section className="py-14 lg:py-20 bg-white text-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left 6 cols: Gallery */}
            <div className="lg:col-span-6 sticky top-28">
              <ProductGallery
                productName={product.name}
                category={product.category}
                primaryImage={product.image}
              />

              {/* Certification Pills */}
              <div className="mt-5 p-4 rounded-xl bg-slate-50 border border-slate-200/90 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-pophen-navy mr-1">Certifications:</span>
                {product.certification.map((cert, cIdx) => (
                  <span
                    key={cIdx}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-semibold text-pophen-blue shadow-2xs"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-pophen-blue" />
                    <span>{cert}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Right 6 cols: Description & Quick Attributes */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pophen-blue/10 text-pophen-blue text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-pophen-blue" />
                  <span>{product.category} Architectural System</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-pophen-navy tracking-tight leading-tight">
                  {product.name}
                </h2>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                  {product.description}
                </p>
              </div>

              {/* Special Feature Callout */}
              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200/80 space-y-1">
                <div className="text-xs font-bold text-pophen-blue uppercase tracking-wider">
                  Special Engineering Design:
                </div>
                <p className="text-xs sm:text-sm text-slate-800 font-medium">
                  {product.specialFeature}
                </p>
              </div>

              {/* Key Quick Parameters */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-500 block">Available Thicknesses:</span>
                  <span className="font-bold text-pophen-navy mt-0.5 block">{product.thickness}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-500 block">Fire Performance:</span>
                  <span className="font-bold text-pophen-navy mt-0.5 block truncate">{product.fireRating.split(",")[0]}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-500 block">Core Infill:</span>
                  <span className="font-bold text-pophen-navy mt-0.5 block truncate">{product.core}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-500 block">Surface Coating:</span>
                  <span className="font-bold text-pophen-navy mt-0.5 block truncate">{product.surfacePaint}</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#rfq-section"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs sm:text-sm font-bold bg-pophen-blue hover:bg-pophen-blue-hover text-white shadow-md transition-all hover:shadow-lg"
                >
                  <span>Request Custom Specification</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#tech-specs"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs sm:text-sm font-semibold bg-slate-100 hover:bg-slate-200 text-pophen-navy transition-colors border border-slate-300"
                >
                  <span>View Specifications Table</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Key Features and Benefits */}
      <section className="py-16 lg:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-pophen-blue">
              ENGINEERING ADVANTAGES
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-pophen-navy tracking-tight">
              Why Specify {product.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Tested against international standards for structural strength, fire integrity, and airtightness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.advantages.map((adv, aIdx) => (
              <div
                key={aIdx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-pophen-blue flex items-center justify-center font-bold text-sm">
                    0{aIdx + 1}
                  </div>
                  <h4 className="text-sm font-bold text-pophen-navy leading-snug">
                    {adv}
                  </h4>
                </div>
                <div className="pt-3 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-pophen-blue font-semibold">
                  <Check className="w-3.5 h-3.5" />
                  <span>Verified Standard</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Target Applications */}
      <section className="py-16 lg:py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-pophen-blue">
              TARGET ENVIRONMENTS
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-pophen-navy tracking-tight">
              Target Applications for {product.name}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {product.applications.map((app, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-pophen-blue flex items-center justify-center flex-shrink-0">
                  <Layers className="w-4 h-4 text-pophen-blue" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-pophen-navy leading-snug">
                  {app}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Technical Specifications Section */}
      <section id="tech-specs" className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-pophen-blue">
                DATA &amp; MEASUREMENTS
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-pophen-navy tracking-tight mt-1">
                Technical Specifications
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                Comprehensive technical parameters extracted from official POPHEN datasheets and accredited third-party laboratory testing reports.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-bold text-pophen-navy shadow-xs">
                <ShieldCheck className="w-4 h-4 text-pophen-blue" />
                <span>FM Approvals &amp; TÜV SÜD Tested</span>
              </span>
            </div>
          </div>

          {/* Professional Specifications Table */}
          <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#00172e] text-white">
                    <th className="py-4 px-6 font-bold uppercase tracking-wider text-xs w-1/3">
                      Technical Parameter
                    </th>
                    <th className="py-4 px-6 font-bold uppercase tracking-wider text-xs">
                      Specification &amp; Tested Value
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {specs.map((item, sIdx) => (
                    <tr
                      key={sIdx}
                      className={sIdx % 2 === 0 ? "bg-white" : "bg-slate-50/70"}
                    >
                      <td className="py-3.5 px-6 font-bold text-pophen-navy align-top">
                        {item.label}
                      </td>
                      <td className="py-3.5 px-6 text-slate-700 font-medium leading-relaxed">
                        {item.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Technical Drawings & System Details */}
      <section id="drawings" className="py-16 lg:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-pophen-blue">
                ENGINEERING ARCHITECTURE
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-pophen-navy tracking-tight mt-1">
                Technical Drawings &amp; System Details
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                Engineering sketches, cross-sections, and connection details for architects, consultants, EPC contractors, and cleanroom design engineers. Click to zoom in or download.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 text-pophen-blue text-xs font-semibold">
                <Compass className="w-4 h-4" />
                <span>CAD / BIM Submittal Ready</span>
              </span>
            </div>
          </div>

          {/* Drawings Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {drawings.map((drawing) => (
              <div
                key={drawing.id}
                className="bg-slate-50 rounded-2xl border border-slate-200 hover:border-pophen-blue/50 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Drawing Image Preview */}
                  <div
                    onClick={() => handleOpenDrawing(drawing)}
                    className="relative h-64 sm:h-72 w-full bg-white border-b border-slate-200 flex items-center justify-center p-4 cursor-pointer overflow-hidden"
                  >
                    <Image
                      src={drawing.image}
                      alt={drawing.title}
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />

                    {/* Badge */}
                    <div className="absolute top-3.5 left-3.5">
                      <span className="inline-block px-3 py-1 rounded-md bg-[#00172e]/90 text-white text-[11px] font-bold tracking-wide shadow-md">
                        {drawing.type || "Engineering Detail"}
                      </span>
                    </div>

                    {/* Hover Inspect Icon */}
                    <div className="absolute inset-0 bg-[#00172e]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                      <div className="px-4 py-2 rounded-xl bg-white text-pophen-navy text-xs font-bold shadow-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <Eye className="w-4 h-4 text-pophen-blue" />
                        <span>Inspect Technical Drawing</span>
                      </div>
                    </div>
                  </div>

                  {/* Drawing Meta */}
                  <div className="p-6 space-y-2">
                    <h4 className="text-base font-bold text-pophen-navy group-hover:text-pophen-blue transition-colors">
                      {drawing.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {drawing.description}
                    </p>
                  </div>
                </div>

                {/* Actions Bar */}
                <div className="px-6 py-4 bg-white border-t border-slate-200 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => handleOpenDrawing(drawing)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-pophen-blue hover:text-pophen-navy transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Full Drawing</span>
                  </button>

                  {drawing.downloadUrl && (
                    <a
                      href={drawing.downloadUrl}
                      download
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-pophen-blue hover:text-white text-slate-700 text-xs font-semibold transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Drawing</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Product Image Gallery */}
      <section className="py-16 lg:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-pophen-blue">
                VISUAL DOCUMENTATION
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-pophen-navy tracking-tight mt-1">
                Installation &amp; System Gallery
              </h3>
            </div>
            <span className="text-xs text-slate-500">
              Verified installations across global high-tech and sterile facilities.
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-2xl overflow-hidden border border-slate-200 shadow-xs bg-slate-900 group">
              <Image
                src={product.image}
                alt={`${product.name} primary photograph`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3.5 left-4 text-white text-xs font-bold">
                {product.name} Primary Module
              </div>
            </div>

            <div className="relative h-64 rounded-2xl overflow-hidden border border-slate-200 shadow-xs bg-slate-900 group">
              <Image
                src="/images/cleanroom-walls-hallway-D4ZV_xh8.webp"
                alt={`${product.name} Cleanroom Hallway Integration`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3.5 left-4 text-white text-xs font-bold">
                Clean Corridor &amp; Flush Wall Interface
              </div>
            </div>

            <div className="relative h-64 rounded-2xl overflow-hidden border border-slate-200 shadow-xs bg-slate-900 group">
              <Image
                src="/images/cleanroom-ceilings-detail-H-esTC_Q.webp"
                alt={`${product.name} Ceiling and Lighting Interface`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3.5 left-4 text-white text-xs font-bold">
                FFU Ceiling &amp; Structural Grid Connection
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Certifications and Testing References */}
      <section className="py-16 lg:py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-pophen-blue">
              CERTIFICATIONS &amp; COMPLIANCE
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-pophen-navy tracking-tight mt-1">
              Applicable Testing Standards for {product.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              POPHEN systems are backed by official laboratory testing for fire safety, chemical outgassing, and air permeability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 text-pophen-blue mb-3">
                <Flame className="w-5 h-5" />
                <span className="font-bold text-sm text-pophen-navy">FM 4882 Fire Safety</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tested to FM Approvals Class 4882 standard for cleanroom materials with non-combustible core and up to 120 minutes fire endurance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 text-pophen-blue mb-3">
                <ShieldCheck className="w-5 h-5" />
                <span className="font-bold text-sm text-pophen-navy">Analab VOC Outgassing</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Thermal desorption GC/MS verified ultra-low organic condensable outgassing compliant with 300mm front-end wafer fabrication.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 text-pophen-blue mb-3">
                <Award className="w-5 h-5" />
                <span className="font-bold text-sm text-pophen-navy">ISO 14644-4 &amp; Intertek</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Intertek-verified hermetic joint tightness and particle containment compliant from ISO Class 1 to Class 8.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Technical Document Downloads */}
      <section className="py-14 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-pophen-cyan">
                ENGINEERING RESOURCES &amp; SUBMITTALS
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Download Official {product.name} Documentation
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Access verified product brochures, test certificates, and architectural specifications.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/documents/pophen-cleanroom-architecture-profile.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-pophen-blue hover:bg-pophen-blue-hover text-white text-xs font-bold transition-all shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>POPHEN Profile Dossier (PDF)</span>
              </a>

              <Link
                href="/product-certifications"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-all"
              >
                <ShieldCheck className="w-4 h-4 text-pophen-cyan" />
                <span>View All Certifications</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Related Products */}
      <section className="py-16 lg:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-pophen-blue">
                COMPLETE ENVELOPE
              </span>
              <h3 className="text-2xl font-bold text-pophen-navy tracking-tight mt-1">
                Complementary Cleanroom Products
              </h3>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-pophen-blue hover:text-pophen-navy"
            >
              <span>View Full Catalogue</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <Link
                key={rel.id}
                href={`/products/${rel.id}`}
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-pophen-blue/50 shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div className="relative h-44 w-full rounded-xl overflow-hidden bg-slate-900 mb-4">
                  <Image
                    src={rel.image}
                    alt={rel.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-pophen-blue uppercase tracking-wider">
                    {rel.category}
                  </span>
                  <h4 className="text-base font-bold text-pophen-navy group-hover:text-pophen-blue transition-colors mt-0.5">
                    {rel.name}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {rel.description}
                  </p>
                </div>
                <div className="pt-3 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-pophen-blue">
                  <span>View Details &amp; Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Technical FAQs */}
      {product.faqs && product.faqs.length > 0 && (
        <section className="py-16 lg:py-20 bg-white border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-3 mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-pophen-blue">
                TECHNICAL QUESTIONS
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-pophen-navy tracking-tight">
                Frequently Asked Questions for {product.name}
              </h3>
            </div>

            <FaqAccordion items={product.faqs} />
          </div>
        </section>
      )}

      {/* 13. Request a Technical Consultation (RFQ Form) */}
      <section id="rfq-section" className="py-16 lg:py-24 bg-[#001428] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductInquiryForm productName={product.name} />
        </div>
      </section>

      {/* Drawing Zoom Modal */}
      <DrawingModal
        isOpen={drawingModalOpen}
        onClose={() => setDrawingModalOpen(false)}
        drawing={selectedDrawing}
      />
    </InnerPageLayout>
  );
}
