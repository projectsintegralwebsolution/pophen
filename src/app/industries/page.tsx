import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  BatteryCharging,
  Server,
  Sun,
  Layers,
  Stethoscope,
  Sparkles,
} from "lucide-react";
import { InnerPageLayout } from "@/components/layout/InnerPageLayout";
import { PageBanner } from "@/components/ui/PageBanner";
import { EnquirySection } from "@/components/home/EnquirySection";

export const metadata: Metadata = {
  title: "Target Industry Cleanroom Solutions | POPHEN",
  description:
    "POPHEN provides specialized cleanroom architectural systems for Semiconductor wafer fabs, EV Battery dryrooms, Data Centres, Solar Cell manufacturing, Hi-Tech, and Medical Devices.",
  openGraph: {
    title: "Target Industry Cleanroom Solutions | POPHEN",
    description:
      "Engineered architectural envelopes delivering ISO Class 1 to Class 8 cleanliness, ultra-low dew points (≤ -50°C), and FM4882 fire safety.",
  },
};

export default function IndustriesLandingPage() {
  const industries = [
    {
      id: "semiconductor",
      name: "Semiconductor Fabrication",
      tagline: "Ultra-low particulate control (ISO Class 1–5), vibration dampening & zero outgassing",
      standards: "ISO Class 1–5 • AMC Compliant • FM4882",
      image: "/images/cleanroom-systems-interior-Z8QHFfaO.webp",
      desc: "Front-end wafer fabs, photolithography steppers, and back-end assembly suites requiring silicone-free outgassing compliance and heavy-duty walkable ceilings for 100% FFU arrays.",
      references: "Tata Electronics OSAT, Intel Falcon, Infineon KLM3, Silterra",
    },
    {
      id: "battery",
      name: "Battery Manufacturing (Clean & Dry Room)",
      tagline: "Vapor-tight hermetic envelopes for ultra-low dew point (≤ -50°C to -60°C)",
      standards: "Dew Point ≤ -50°C • ISO Class 6–8 • Vapor-Tight",
      image: "/images/cleanroom-walls-detail-CJABaUMG.webp",
      desc: "Specialized dual-environment capability for EV lithium-ion gigafactories: ultra-low dew point dryrooms for winding and electrolyte filling, and cleanrooms for cathode/anode mixing.",
      references: "CATL Debrecen (340,000 m²), Tesla Shanghai, ACC Douvrin, Northvolt, SK ON",
    },
    {
      id: "solar-cell",
      name: "Solar Cell / Renewable Energy",
      tagline: "Chemical & acid-resistant envelopes with double-plenum ceilings for GW lines",
      standards: "ISO Class 5–7 • Chemical Resistant • Acid-Proof",
      image: "/images/hero-banner-1-v2.png",
      desc: "Controlled manufacturing envelopes for TOPCon and heterojunction solar PV cell lines with chemical-resistant coatings and double plenum ceiling structures.",
      references: "Premier Energies Solar Cell Line (Naidupeta - 55,500 m²)",
    },
    {
      id: "data-centre",
      name: "Data Centre Infrastructure",
      tagline: "Hot/cold aisle containment, fire-rated ceiling grids & thermal separation",
      standards: "ASHRAE TC 9.9 • Anti-Static • Class 1 Fire",
      image: "/images/activity1-DGOBdrHK.webp",
      desc: "Modular structural containment separating hot and cold server aisles, high-density cable tray support, and FM-certified architectural barriers.",
      references: "Mission-critical enterprise hyperscale server facilities",
    },
    {
      id: "hi-tech",
      name: "Hi-Tech Precision Industries",
      tagline: "Vibration-isolated clean enclosures for optics, aerospace, and robotics",
      standards: "ISO Class 4–8 • Anti-Static ESD • Custom Engineering",
      image: "/images/activity3-DHLpvUU3.webp",
      desc: "Reconfigurable clean environments for micro-mechanics, precision sensor calibration, and aerospace components with RF/EM shielding options.",
      references: "AAC Technologies LENS Workshop (Singapore - 10,000 m²)",
    },
    {
      id: "medical-devices",
      name: "Medical Devices & Healthcare",
      tagline: "Sterile wipe-down surfaces, continuous radiused coving & VHP resistance",
      standards: "ISO 13485 • EU GMP Annex 1 • FDA 21 CFR",
      image: "/images/cleanroom-windows-doctor-CVbH--Sj.webp",
      desc: "Sanitary cleanrooms with coplanar flush joints and antimicrobial finishes resistant to aggressive vaporized hydrogen peroxide (VHP) cycles.",
      references: "Class 10,000 catheter, implant, and diagnostic manufacturing suites",
    },
  ];

  return (
    <InnerPageLayout>
      {/* 1. Page Banner */}
      <PageBanner
        title="Target Industries &amp; Application Solutions"
        subtitle="Specialized cleanroom architectural systems engineered to meet the stringent contamination, thermal, and regulatory demands of advanced industrial sectors."
        badge="TAILORED INDUSTRIAL ENVIRONMENTS"
        image="/images/cleanroom-ceilings-hero-d8AQO7Df.webp"
        breadcrumbs={[{ label: "Industries" }]}
      />

      {/* 2. Industries Grid */}
      <section className="py-16 lg:py-24 bg-white text-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-pophen-blue">
              SPECIALIZED SECTORS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-pophen-navy tracking-tight mt-1">
              POPHEN Six Core Target Industry Segments
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              From sub-nanometer semiconductor wafer fabs to multi-gigawatt battery dryrooms, our systems are certified for critical performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind) => (
              <div
                key={ind.id}
                className="rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-56 w-full bg-slate-900 overflow-hidden flex-shrink-0">
                  <Image
                    src={ind.image}
                    alt={ind.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00172e]/80 via-transparent to-transparent" />
                  <div className="absolute top-3.5 left-3.5">
                    <span className="px-3 py-1 rounded-md bg-[#00172e]/90 text-white text-[11px] font-bold shadow-md border border-white/10 backdrop-blur-sm">
                      {ind.standards.split(" • ")[0]}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-pophen-navy group-hover:text-pophen-blue transition-colors">
                      {ind.name}
                    </h3>
                    <p className="text-xs font-medium text-pophen-blue">
                      {ind.tagline}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {ind.desc}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/90 text-xs">
                    <span className="font-bold text-pophen-navy block">Key Client References:</span>
                    <span className="text-slate-600 mt-0.5 block truncate">{ind.references}</span>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/industries/${ind.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-pophen-blue hover:text-pophen-navy transition-colors"
                    >
                      <span>Explore {ind.name} Solutions</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
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
