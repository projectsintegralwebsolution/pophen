import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Cpu,
  BatteryCharging,
  Server,
  Sun,
  Layers,
  Stethoscope,
  Sparkles,
  MapPin,
  Building,
} from "lucide-react";
import { InnerPageLayout } from "@/components/layout/InnerPageLayout";
import { PageBanner } from "@/components/ui/PageBanner";
import { INDUSTRIES_DATA, IndustryItem } from "@/data/industries";
import { EnquirySection } from "@/components/home/EnquirySection";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return INDUSTRIES_DATA.map((ind) => ({
    slug: ind.id,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const industry = INDUSTRIES_DATA.find((ind) => ind.id === params.slug);
  if (!industry) {
    return { title: "Industry Not Found | POPHEN" };
  }

  return {
    title: `${industry.name} Cleanroom & Dryroom Solutions | POPHEN`,
    description: industry.description,
    openGraph: {
      title: `${industry.name} Cleanroom Solutions | POPHEN`,
      description: industry.description,
      images: [{ url: industry.image }],
    },
  };
}

export default function IndustryDetailPage({ params }: PageProps) {
  const industry = INDUSTRIES_DATA.find((ind) => ind.id === params.slug);

  if (!industry) {
    notFound();
  }

  return (
    <InnerPageLayout>
      {/* 1. Page Banner */}
      <PageBanner
        title={`${industry.name} Cleanroom Solutions`}
        subtitle={industry.tagline}
        badge="TARGET INDUSTRY SECTOR"
        image={industry.image}
        breadcrumbs={[
          { label: "Industries", href: "/industries" },
          { label: industry.name },
        ]}
        actions={
          <a
            href="#enquiry"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs sm:text-sm font-bold bg-[#00a2e8] hover:bg-[#0091d1] text-white shadow-lg transition-all"
          >
            <span>Request Technical Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        }
      />

      {/* 2. Overview & Regulatory Standards */}
      <section className="py-16 lg:py-20 bg-white text-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left 7 cols: In-depth technical writeup */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pophen-blue/10 text-pophen-blue text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-pophen-blue" />
                <span>ENVIRONMENTAL ARCHITECTURE</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-pophen-navy tracking-tight leading-tight">
                Engineered Controlled Facilities for {industry.name}
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {industry.description}
              </p>

              {/* Special Battery Dryroom & Cleanroom Highlight callout */}
              {industry.specialDualEnvironment && (
                <div className="p-6 rounded-2xl bg-[#edf6fc] border border-[#0077be]/30 space-y-4">
                  <div className="flex items-center gap-2 text-pophen-navy font-bold text-sm">
                    <BatteryCharging className="w-5 h-5 text-pophen-blue" />
                    <span>Specialized Battery Dual-Environment Capability</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
                    <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
                      <span className="font-bold text-pophen-blue block">1. Battery Dryroom Solutions</span>
                      <p className="leading-relaxed">{industry.specialDualEnvironment.dryroom}</p>
                    </div>
                    <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
                      <span className="font-bold text-pophen-blue block">2. Battery Cleanroom Solutions</span>
                      <p className="leading-relaxed">{industry.specialDualEnvironment.cleanroom}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Standards Tags */}
              <div className="pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Compliance &amp; Operational Standards:
                </div>
                <div className="flex flex-wrap gap-2">
                  {industry.standards.map((std, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs font-semibold text-pophen-navy"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-pophen-blue" />
                      <span>{std}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 5 cols: Image & Key Technical Parameters */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-[4/3] bg-slate-900 group">
                <Image
                  src={industry.image}
                  alt={`${industry.name} Facility Execution`}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00172e]/85 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs font-semibold text-pophen-cyan">VERIFIED INDUSTRIAL ENVELOPE</div>
                  <div className="text-base font-bold text-white mt-0.5">{industry.name}</div>
                </div>
              </div>

              {/* Requirements Box */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <span className="text-xs font-bold text-pophen-navy uppercase tracking-wider block">
                  Sector Technical Mandates:
                </span>
                <ul className="space-y-2 text-xs text-slate-600">
                  {industry.requirements.map((req, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-pophen-blue flex-shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Challenges vs POPHEN Solutions */}
      <section className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-pophen-blue">
              PROBLEM &amp; ARCHITECTURAL RESOLUTION
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-pophen-navy tracking-tight">
              {industry.name} Challenges vs. POPHEN Solutions
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Engineered systems designed specifically to resolve the contamination, pressure, and thermal hurdles of {industry.name}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Challenges Column */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-amber-600 font-bold text-base">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                <span>Sector Operational Challenges</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                {industry.challenges.map((c, cIdx) => (
                  <li key={cIdx} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-amber-50 text-amber-600 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {cIdx + 1}
                    </span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions Column */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-pophen-blue font-bold text-base">
                <ShieldCheck className="w-5 h-5 text-pophen-blue" />
                <span>POPHEN Architectural Solutions</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                {industry.solutions.map((s, sIdx) => (
                  <li key={sIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-pophen-blue flex-shrink-0 mt-0.5" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Recommended Systems & Products */}
      <section className="py-16 lg:py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-pophen-blue">
                SYSTEM CONFIGURATIONS
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-pophen-navy tracking-tight mt-1">
                Recommended Architectural Systems for {industry.name}
              </h3>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-pophen-blue hover:text-pophen-navy"
            >
              <span>Explore All Products</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industry.recommendedSystems.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-pophen-blue flex items-center justify-center font-bold text-sm">
                    0{idx + 1}
                  </div>
                  <h4 className="text-base font-bold text-pophen-navy">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-4 mt-3 border-t border-slate-200">
                  <Link
                    href={`/products/${item.id}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-pophen-blue hover:text-pophen-navy"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Verified Project References */}
      {industry.projectReferences && industry.projectReferences.length > 0 && (
        <section className="py-16 lg:py-20 bg-[#001428] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-pophen-cyan">
                PROVEN BENCHMARK EXECUTION
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
                Verified Global Project References in {industry.name}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {industry.projectReferences.map((ref, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#001d3d] border border-slate-800 shadow-md flex flex-col justify-between space-y-3"
                >
                  <div>
                    <span className="text-xs font-bold text-pophen-cyan">{ref.area}</span>
                    <h4 className="text-base font-bold text-white mt-1">{ref.name}</h4>
                    <div className="flex items-center gap-1.5 text-xs text-slate-300 mt-2">
                      <MapPin className="w-3.5 h-3.5 text-pophen-cyan" />
                      <span>{ref.location}</span>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-white/10 text-[11px] font-semibold text-slate-400">
                    SITC Architectural Delivery
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. In-Page Enquiry */}
      <div id="enquiry">
        <EnquirySection />
      </div>
    </InnerPageLayout>
  );
}
