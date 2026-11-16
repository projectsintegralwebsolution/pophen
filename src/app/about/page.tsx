import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Award,
  Globe2,
  Building2,
  ArrowRight,
  Flame,
  Layers,
  Sparkles,
  Users,
  Compass,
  Cpu,
} from "lucide-react";
import { InnerPageLayout } from "@/components/layout/InnerPageLayout";
import { PageBanner } from "@/components/ui/PageBanner";
import { BROCHURE_CERTIFICATIONS } from "@/data/brochureData";
import { EnquirySection } from "@/components/home/EnquirySection";

export const metadata: Metadata = {
  title: "About POPHEN | Global Cleanroom Architectural Solutions",
  description:
    "POPHEN Environmental Technology is an international high-tech cleanroom building materials manufacturer and solutions provider with FM, TÜV, SGS, and Intertek certified systems.",
  openGraph: {
    title: "About POPHEN | Global Cleanroom Architectural Solutions",
    description:
      "Global cleanroom architectural system provider for Semiconductor, EV Battery, Renewable Energy, and Data Centre facilities.",
  },
};

export default function AboutPage() {
  const registeredCountries = [
    "India",
    "Malaysia",
    "Singapore",
    "United States",
    "Europe",
    "China",
    "Indonesia",
    "Thailand",
    "Vietnam",
    "Mexico",
  ];

  const advantages = [
    {
      title: "Highest Load Bearing with Minimum Thickness",
      desc: "Engineered panel and ceiling profiles certified by TÜV SÜD for extreme load capacities with minimal structural deflection.",
      icon: <Award className="w-5 h-5 text-pophen-cyan" />,
    },
    {
      title: "Only Manufacturer with 2 Hours Fire Rating",
      desc: "FM4882 and A1/M0 fire-rated panels providing up to 120 minutes of verified thermal insulation and flame integrity.",
      icon: <Flame className="w-5 h-5 text-pophen-cyan" />,
    },
    {
      title: "Patented Ceiling Solution for FFU & Lights",
      desc: "Patented integrated aluminum grid profile accommodating universal Fan Filter Units, flush aerodynamic lighting, and die-cast fire sprinkler connectors.",
      icon: <Layers className="w-5 h-5 text-pophen-cyan" />,
    },
    {
      title: "Intertek Certified for Minimum Air Leakage",
      desc: "Certified minimal leakage through panel joints, door perimeters, and window cavities, meeting strict criteria for battery dryrooms and semiconductor fabs.",
      icon: <ShieldCheck className="w-5 h-5 text-pophen-cyan" />,
    },
    {
      title: "Zero Outgassing & Analab VOC Compliance",
      desc: "Tested by Analabs Technologies with GC/MS analysis confirming silicon-free, zero-VOC emissions in photolithography cleanrooms.",
      icon: <Sparkles className="w-5 h-5 text-pophen-cyan" />,
    },
    {
      title: "International EPC Leadership & Project Sponsorship",
      desc: "Led by project sponsors and senior project managers from Malaysia with over 13 years of German EPC (Exyte) semiconductor cleanroom execution experience.",
      icon: <Users className="w-5 h-5 text-pophen-cyan" />,
    },
  ];

  return (
    <InnerPageLayout>
      {/* 1. Page Banner */}
      <PageBanner
        title="About POPHEN Environmental Technology"
        subtitle="International cleanroom architectural solutions provider specializing in the design, engineering, manufacturing, and fast-track execution of modular cleanroom systems."
        badge="GLOBAL ARCHITECTURAL SYSTEM PROVIDER"
        image="/images/about-cleanroom-hero-CfcjiI0h.webp"
        breadcrumbs={[{ label: "About Us" }]}
        actions={
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs sm:text-sm font-bold bg-[#00a2e8] hover:bg-[#0091d1] text-white shadow-lg transition-all"
            >
              <span>Explore Certified Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm transition-all"
            >
              <span>Global Project References</span>
            </Link>
          </div>
        }
      />

      {/* 2. Company Overview Section */}
      <section className="py-16 lg:py-24 bg-white text-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left 6 cols: Text Overview */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pophen-blue/10 text-pophen-blue text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5 text-pophen-blue" />
                <span>WHO WE ARE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-pophen-navy tracking-tight leading-tight">
                High-Tech Cleanroom Architectural Systems &amp; Engineering
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                <strong>POPHEN Environmental Technology</strong> is an international high-tech enterprise specializing in the R&amp;D, design, manufacturing, sales, and turnkey execution of advanced cleanroom architectural building materials and controlled environment systems.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                POPHEN meets stringent product certification and fire protection requirements across the European Union, North America, Malaysia, Singapore, and India. Our full range of products has passed <strong>FM Approvals (FM4882)</strong> in the United States, <strong>TÜV SÜD</strong> structural load testing, <strong>SGS</strong> durability certification, <strong>Intertek</strong> air tightness testing for panels and doors, and <strong>Analab</strong> VOC outgassing analysis.
              </p>

              {/* Global Registered Brand Banner */}
              <div className="p-5 rounded-2xl bg-[#f0f6fb] border border-[#d6e7f5] space-y-3">
                <div className="flex items-center gap-2 text-pophen-navy font-bold text-xs uppercase tracking-wider">
                  <Globe2 className="w-4 h-4 text-pophen-blue" />
                  <span>POPHEN Registered Brand International Footprint:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {registeredCountries.map((c, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs"
                    >
                      <CheckCircle2 className="w-3 h-3 text-pophen-blue" />
                      <span>{c}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 6 cols: Facility Visual & Metrics */}
            <div className="lg:col-span-6 space-y-6">
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 shadow-xl border border-slate-200 aspect-[16/10] group">
                <Image
                  src="/images/about-cleanroom-hero-CfcjiI0h.webp"
                  alt="POPHEN Cleanroom Architectural Facility"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00172e]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-bold text-pophen-cyan uppercase tracking-wider">
                    MANUFACTURING &amp; ENGINEERING EXCELLENCE
                  </span>
                  <div className="text-base font-bold text-white">
                    Advanced Modular Systems for Gigafactories &amp; Wafer Fabs
                  </div>
                </div>
              </div>

              {/* 3 Metric Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <div className="text-2xl font-extrabold text-pophen-blue">120 Min</div>
                  <div className="text-xs text-slate-600 mt-0.5">Fire Resistance (FM4882)</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <div className="text-2xl font-extrabold text-pophen-blue">10+</div>
                  <div className="text-xs text-slate-600 mt-0.5">Countries Registered</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <div className="text-2xl font-extrabold text-pophen-blue">TÜV / FM</div>
                  <div className="text-xs text-slate-600 mt-0.5">Dual Load &amp; Fire Rated</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Advantages with POPHEN System */}
      <section className="py-16 lg:py-24 bg-[#001428] text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-pophen-cyan">
              TECHNICAL DIFFERENTIATORS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Advantages with the POPHEN System
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Why Tier-1 semiconductor front-end foundries, lithium battery gigafactories, and solar cell manufacturers standardize on POPHEN architectural systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#001d3d] border border-slate-800 shadow-md hover:border-pophen-cyan/40 transition-all space-y-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-pophen-cyan/20 flex items-center justify-center">
                  {adv.icon}
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-pophen-cyan transition-colors">
                  {adv.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {adv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Leadership & Project Sponsorship – Joel William */}
      <section className="py-16 lg:py-24 bg-white text-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-slate-50 border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left 4 cols: Leadership Card */}
            <div className="lg:col-span-4 text-center lg:text-left space-y-4">
              <div className="relative w-36 h-36 mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-pophen-navy border-2 border-pophen-blue/40 shadow-lg">
                <Image
                  src="/images/news-team-C0XmbZLm.webp"
                  alt="Joel William - POPHEN Project Sponsor"
                  fill
                  className="object-cover object-top"
                  sizes="150px"
                />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-pophen-navy">Joel William</h3>
                <div className="text-xs font-bold text-pophen-blue uppercase tracking-wider mt-0.5">
                  Project Sponsor &amp; Cleanroom SME
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  13+ Years German EPC (Exyte) Cleanroom Leadership
                </div>
              </div>
              <div className="pt-2">
                <a
                  href="mailto:Joel@pophen.in"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-pophen-navy hover:bg-pophen-blue text-white text-xs font-semibold transition-colors"
                >
                  <span>Connect with Joel William</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right 8 cols: Credentials & Proven Fast-Track Experience */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-pophen-blue text-xs font-bold uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5" />
                <span>EXECUTIVE EPC EXPERTISE</span>
              </div>

              <h3 className="text-2xl font-bold text-pophen-navy">
                Proven Fast-Track Methodology from Global EPC Projects
              </h3>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pophen-blue flex-shrink-0 mt-0.5" />
                  <span><strong>13 years working for German EPC (Exyte)</strong> executing high-tech facilities (Semiconductor, Medical Device &amp; Pharma) in Singapore, Malaysia, and Indonesia.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pophen-blue flex-shrink-0 mt-0.5" />
                  <span><strong>Served global MNC clients</strong> such as Nexperia, Brooks Automation, Infineon, Micron, Sustio, and Tata Electronics.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pophen-blue flex-shrink-0 mt-0.5" />
                  <span><strong>Subject Matter Expert (SME)</strong> for cleanroom architectural design, MEP interface management, clean build protocols, and fast-track tool move-in.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pophen-blue flex-shrink-0 mt-0.5" />
                  <span><strong>Established Project Support Teams</strong> in Mumbai, India and Johor, Malaysia to ensure projects stay on schedule with zero interface clashes.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Key Technical Proposition & Value Add */}
      <section className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1: Key Technical Proposition */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-pophen-blue flex items-center justify-center font-bold text-lg">
                <Cpu className="w-5 h-5 text-pophen-blue" />
              </div>
              <h3 className="text-xl font-bold text-pophen-navy">Key Technical Proposition</h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pophen-blue flex-shrink-0 mt-0.5" />
                  <span>World-class certified cleanroom systems trusted by front-end fabs including Intel, Infineon, X-Fab, SMIC, Silterra, and GlobalFoundries.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pophen-blue flex-shrink-0 mt-0.5" />
                  <span>Currently executing India's largest indigenous semiconductor project: Tata Electronics OSAT facility in Jagiroad, Assam (35,000 m²).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pophen-blue flex-shrink-0 mt-0.5" />
                  <span>International certified systems carrying FM Approvals and compliance with stringent outgassing criteria.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pophen-blue flex-shrink-0 mt-0.5" />
                  <span>Future upgrade compatibility supporting Automated Material Handling Systems (AMHS) and cleanroom ISO class uplifts.</span>
                </li>
              </ul>
            </div>

            {/* Card 2: Value Add */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-pophen-blue flex items-center justify-center font-bold text-lg">
                <Sparkles className="w-5 h-5 text-pophen-blue" />
              </div>
              <h3 className="text-xl font-bold text-pophen-navy">Client Value Add</h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pophen-blue flex-shrink-0 mt-0.5" />
                  <span><strong>Design Review for Entire Cleanroom:</strong> Identify value-engineered solutions to optimize capital expenditure and construction schedules.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pophen-blue flex-shrink-0 mt-0.5" />
                  <span><strong>Senior Project Manager from Malaysia:</strong> International semiconductor fast-track experience to review and manage all architectural interfaces.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pophen-blue flex-shrink-0 mt-0.5" />
                  <span><strong>Project Sponsor Direct Engagement:</strong> Joel William conducts site inspections and reviews to ensure execution stays on time and meets client expectations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pophen-blue flex-shrink-0 mt-0.5" />
                  <span><strong>Dual Corporate Presence:</strong> Registered corporate offices in Mumbai, India and Iskandar Puteri, Malaysia.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. In-Page Enquiry Section */}
      <EnquirySection />
    </InnerPageLayout>
  );
}
