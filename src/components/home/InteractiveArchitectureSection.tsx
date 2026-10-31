"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Layers,
  Grid,
  DoorClosed,
  AppWindow,
  Columns,
  Wind,
  Plus,
  Check,
  ArrowRight,
} from "lucide-react";

interface ArchitectureCategory {
  id: string;
  navLabel: string;
  hotspotLabel: string;
  cardTitle: string;
  description: string;
  features: string[];
  href: string;
  image: string;
  /** Percentage coordinates (left, top) for the hotspot on the isometric illustration */
  hotspotPos: { left: string; top: string };
  /** SVG polygon points (on 1000x600 viewBox) to highlight the selected component zone on the 3D illustration */
  highlightPolygons: string[];
}

const ARCHITECTURE_CATEGORIES: ArchitectureCategory[] = [
  {
    id: "cleanroom-walls",
    navLabel: "Wall Panels",
    hotspotLabel: "Wall Panels",
    cardTitle: "Cleanroom Wall Panels",
    description:
      "High-performance wall panel systems for controlled environments with superior finish and durability.",
    features: [
      "Smooth, non-porous surface",
      "Customised thickness and finish",
      "Flush integration with other systems",
      "Suitable for critical environments",
    ],
    href: "#cleanroom-walls",
    image: "/images/cleanroom-walls-detail-CJABaUMG.webp",
    hotspotPos: { left: "16%", top: "48%" },
    highlightPolygons: [
      "80,220 290,135 290,260 380,315 380,535 80,355",
    ],
  },
  {
    id: "ceilings",
    navLabel: "Ceiling Systems",
    hotspotLabel: "Ceiling Systems",
    cardTitle: "Cleanroom Ceiling Systems",
    description:
      "Modular and integrated ceiling solutions engineered with high-precision suspension grids for lighting and filtration.",
    features: [
      "High-precision aluminum grid structure",
      "Seamless HEPA/ULPA filter & LED integration",
      "Airtight joint seals for pressure control",
      "Walkable and non-walkable options",
    ],
    href: "#ceilings",
    image: "/images/cleanroom-ceilings-detail-H-esTC_Q.webp",
    hotspotPos: { left: "41%", top: "17%" },
    highlightPolygons: [
      "385,95 545,32 715,98 560,165",
    ],
  },
  {
    id: "doors",
    navLabel: "Cleanroom Doors",
    hotspotLabel: "Doors",
    cardTitle: "Cleanroom Doors",
    description:
      "Hermetic and high-integrity door systems engineered for flush mounting and reliable contamination control in critical areas.",
    features: [
      "Flush frame-to-wall cleanroom integration",
      "Automatic drop-down bottom threshold seal",
      "Double-glazed flush safety vision panel",
      "Compatible with airlock interlock systems",
    ],
    href: "#doors",
    image: "/images/cleanroom-doors-hero-D007b7fJ.webp",
    hotspotPos: { left: "36%", top: "67%" },
    highlightPolygons: [
      "312,355 370,390 370,515 312,480",
      "585,345 648,382 648,515 585,478",
    ],
  },
  {
    id: "cleanroom-windows",
    navLabel: "Cleanroom Windows",
    hotspotLabel: "Windows",
    cardTitle: "Cleanroom Windows",
    description:
      "Flush double-glazed observation windows designed to eliminate dust-collecting ledges and simplify routine sanitation.",
    features: [
      "Coplanar flush design on both wall faces",
      "Double-layer tempered safety glass",
      "Hermetically sealed anti-fog cavity",
      "Square or rounded sanitary corner options",
    ],
    href: "#cleanroom-windows",
    image: "/images/cleanroom-windows-hero-eqB039vc.webp",
    hotspotPos: { left: "64%", top: "49%" },
    highlightPolygons: [
      "695,320 755,288 755,392 695,425",
      "172,272 248,318 248,385 172,338",
    ],
  },
  {
    id: "modular-partitions",
    navLabel: "Modular Partitions",
    hotspotLabel: "Modular Partitions",
    cardTitle: "Modular Partitions",
    description:
      "Flexible, demountable partition systems engineered for reconfigurable cleanroom suites, airlocks and process segregation.",
    features: [
      "Fast dry-construction modular assembly",
      "Integrated utility raceways for cabling",
      "Non-outgassing airtight joint gaskets",
      "Reconfigurable for future layout changes",
    ],
    href: "#modular-partitions",
    image: "/images/cleanroom-systems-interior-Z8QHFfaO.webp",
    hotspotPos: { left: "58%", top: "73%" },
    highlightPolygons: [
      "455,270 578,215 578,385 455,450",
    ],
  },
  {
    id: "air-units",
    navLabel: "Air Units & Systems",
    hotspotLabel: "Air Units & Systems",
    cardTitle: "Air Units & Systems",
    description:
      "Self-contained Fan Filter Units (FFUs) and laminar airflow systems delivering localized clean air protection.",
    features: [
      "HEPA and ULPA high-efficiency filtration",
      "Stable unidirectional laminar airflow",
      "Low-noise, energy-efficient operation",
      "Modular ceiling and standalone configurations",
    ],
    href: "#air-units",
    image: "/images/mobile-cleanair-unit-CWd-RN4y.webp",
    hotspotPos: { left: "51%", top: "36%" },
    highlightPolygons: [
      "475,165 595,120 655,155 535,205",
      "695,245 760,218 760,295 695,322",
    ],
  },
];

export function InteractiveArchitectureSection() {
  const [selectedId, setSelectedId] = useState<string>("cleanroom-walls");

  const activeCategory =
    ARCHITECTURE_CATEGORIES.find((cat) => cat.id === selectedId) ||
    ARCHITECTURE_CATEGORIES[0];

  const getCategoryIcon = (id: string, isActive: boolean) => {
    const iconClass = `w-4 h-4 ${isActive ? "text-white" : "text-pophen-navy"}`;
    switch (id) {
      case "cleanroom-walls":
        return <Layers className={iconClass} />;
      case "ceilings":
        return <Grid className={iconClass} />;
      case "doors":
        return <DoorClosed className={iconClass} />;
      case "cleanroom-windows":
        return <AppWindow className={iconClass} />;
      case "modular-partitions":
        return <Columns className={iconClass} />;
      case "air-units":
        return <Wind className={iconClass} />;
      default:
        return <Layers className={iconClass} />;
    }
  };

  /** Renders a crisp 3D isometric architectural component graphic for the top-right of the Product Info Card */
  const renderComponentVisual = (id: string) => {
    switch (id) {
      case "cleanroom-walls":
        return (
          <svg viewBox="0 0 120 150" className="w-24 sm:w-28 h-28 sm:h-32 drop-shadow-md">
            {/* 3D Isometric Sandwich Wall Panel Cutaway matching reference screenshot */}
            <polygon points="35,14 108,32 108,136 35,112" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
            <polygon points="18,22 35,14 35,112 18,122" fill="#94a3b8" stroke="#64748b" strokeWidth="1.2" />
            {/* Inner Insulation Core */}
            <polygon points="22,25 31,20 31,110 22,116" fill="#64748b" />
            {/* Core texture lines */}
            <line x1="23" y1="35" x2="30" y2="31" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="23" y1="50" x2="30" y2="46" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="23" y1="65" x2="30" y2="61" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="23" y1="80" x2="30" y2="76" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="23" y1="95" x2="30" y2="91" stroke="#cbd5e1" strokeWidth="1" />
            {/* Top aluminum profile cap */}
            <polygon points="18,22 35,14 108,32 92,40" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.2" />
            <ellipse cx="64" cy="27" rx="5" ry="2.2" fill="#94a3b8" />
            {/* Front white steel skin face */}
            <polygon points="35,28 108,46 108,136 35,112" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.2" />
            <circle cx="48" cy="48" r="2" fill="#94a3b8" />
          </svg>
        );
      case "ceilings":
        return (
          <svg viewBox="0 0 120 140" className="w-24 sm:w-28 h-28 sm:h-32 drop-shadow-md">
            {/* 3D Isometric Ceiling Grid & FFU Module */}
            <polygon points="14,55 62,28 110,55 62,82" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.5" />
            <polygon points="14,55 62,82 62,96 14,69" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1.2" />
            <polygon points="62,82 110,55 110,69 62,96" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.2" />
            <line x1="38" y1="41" x2="86" y2="68" stroke="#0077be" strokeWidth="1.5" />
            <line x1="86" y1="41" x2="38" y2="68" stroke="#0077be" strokeWidth="1.5" />
            <circle cx="62" cy="55" r="9" fill="#002e5b" stroke="#00a8e8" strokeWidth="1.5" />
            <circle cx="62" cy="55" r="3" fill="#00a8e8" />
          </svg>
        );
      case "doors":
        return (
          <svg viewBox="0 0 120 150" className="w-24 sm:w-28 h-28 sm:h-32 drop-shadow-md">
            {/* 3D Isometric Flush Cleanroom Door with Vision Panel */}
            <polygon points="30,18 96,34 96,134 30,116" fill="#e2e8f0" stroke="#64748b" strokeWidth="1.5" />
            <polygon points="36,24 90,37 90,129 36,113" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.2" />
            {/* Flush Vision Window */}
            <polygon points="48,38 78,46 78,82 48,74" fill="#e0f2fe" stroke="#0077be" strokeWidth="1.5" />
            {/* Door Lever Handle */}
            <rect x="80" y="84" width="6" height="3" rx="1.5" fill="#002e5b" />
            {/* Bottom threshold seal */}
            <line x1="36" y1="113" x2="90" y2="129" stroke="#002e5b" strokeWidth="3" />
          </svg>
        );
      case "cleanroom-windows":
        return (
          <svg viewBox="0 0 120 140" className="w-24 sm:w-28 h-28 sm:h-32 drop-shadow-md">
            {/* 3D Isometric Double-Glazed Flush Window */}
            <polygon points="20,26 100,44 100,118 20,98" fill="#002e5b" stroke="#001428" strokeWidth="1.5" />
            <polygon points="26,32 94,48 94,112 26,94" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="1.2" />
            {/* Glazing reflections */}
            <line x1="36" y1="44" x2="52" y2="92" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="46" y1="48" x2="58" y2="86" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        );
      case "modular-partitions":
        return (
          <svg viewBox="0 0 120 145" className="w-24 sm:w-28 h-28 sm:h-32 drop-shadow-md">
            {/* 3D Isometric Modular Partition System */}
            <polygon points="22,26 64,14 64,116 22,128" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.5" />
            <polygon points="64,14 104,34 104,132 64,116" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.5" />
            <polygon points="72,32 96,44 96,82 72,70" fill="#e0f2fe" stroke="#0077be" strokeWidth="1.2" />
            <line x1="64" y1="14" x2="64" y2="116" stroke="#0077be" strokeWidth="2" />
          </svg>
        );
      case "air-units":
      default:
        return (
          <svg viewBox="0 0 120 145" className="w-24 sm:w-28 h-28 sm:h-32 drop-shadow-md">
            {/* 3D Isometric FFU / Clean Air Module */}
            <polygon points="24,42 62,24 100,42 62,60" fill="#e2e8f0" stroke="#64748b" strokeWidth="1.5" />
            <polygon points="24,42 62,60 62,122 24,104" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.5" />
            <polygon points="62,60 100,42 100,104 62,122" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.5" />
            <ellipse cx="62" cy="42" rx="14" ry="7" fill="#002e5b" stroke="#00a8e8" strokeWidth="1.5" />
            <polygon points="30,56 56,68 56,94 30,82" fill="#e0f2fe" stroke="#0077be" strokeWidth="1.2" />
          </svg>
        );
    }
  };

  return (
    <section
      id="interactive-architecture"
      className="py-16 lg:py-20 bg-gradient-to-b from-[#f4f9fd] via-white to-[#f6fafd] relative overflow-hidden border-b border-slate-200/70"
    >
      {/* Subtle architectural background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="mb-8 lg:mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-pophen-blue block mb-1.5">
            EXPLORE A CLEANROOM
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-pophen-navy tracking-tight">
            Interactive Cleanroom Architecture
          </h2>
        </div>

        {/* 3-Column Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* 1. LEFT COLUMN: Vertical Product Navigation (3 cols on Desktop) */}
          <div className="lg:col-span-3">
            <div
              className="bg-white/95 rounded-2xl p-2.5 border border-slate-200/80 shadow-industrial flex lg:flex-col gap-1.5 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-2.5"
              role="tablist"
              aria-label="Cleanroom Architecture Components"
            >
              {ARCHITECTURE_CATEGORIES.map((category) => {
                const isActive = category.id === selectedId;
                return (
                  <button
                    key={category.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setSelectedId(category.id)}
                    className={`flex items-center gap-3 px-3.5 py-3 rounded-xl text-left transition-all duration-200 flex-shrink-0 lg:w-full focus:outline-none focus:ring-2 focus:ring-pophen-cyan ${
                      isActive
                        ? "bg-pophen-navy text-white shadow-md font-bold"
                        : "bg-transparent hover:bg-slate-50 text-pophen-navy font-semibold"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                        isActive
                          ? "bg-pophen-blue/40 border border-pophen-cyan text-white"
                          : "bg-white border border-pophen-navy/25 text-pophen-navy"
                      }`}
                    >
                      {getCategoryIcon(category.id, isActive)}
                    </div>
                    <span className="text-xs sm:text-sm leading-snug whitespace-nowrap lg:whitespace-normal">
                      {category.navLabel}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. CENTRE COLUMN: Isometric 3D Cleanroom Illustration & Interactive Hotspots (5 cols on Desktop) */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/10] max-w-2xl mx-auto select-none">
              {/* Isometric 3D Cleanroom Cutaway Base Image */}
              <Image
                src="/images/cleanroom-isometric-3d.jpg"
                alt="Interactive 3D Isometric Cleanroom Architecture"
                fill
                priority
                className="object-contain object-center"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />

              {/* Dynamic SVG Component Zone Highlight Overlay */}
              <svg
                viewBox="0 0 1000 600"
                className="absolute inset-0 w-full h-full pointer-events-none z-10"
                preserveAspectRatio="xMidYMid meet"
              >
                {activeCategory.highlightPolygons.map((points, idx) => (
                  <polygon
                    key={`${activeCategory.id}-poly-${idx}`}
                    points={points}
                    fill="rgba(0, 119, 190, 0.16)"
                    stroke="#0077be"
                    strokeWidth="3"
                    strokeDasharray="6 4"
                    className="transition-all duration-300"
                  />
                ))}
              </svg>

              {/* Interactive Circular (+) Hotspots with Pill Labels */}
              {ARCHITECTURE_CATEGORIES.map((category) => {
                const isActive = category.id === selectedId;
                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setSelectedId(category.id)}
                    style={{
                      left: category.hotspotPos.left,
                      top: category.hotspotPos.top,
                    }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 group flex items-center focus:outline-none transition-transform duration-200 ${
                      isActive ? "scale-105 z-30" : "hover:scale-105"
                    }`}
                    aria-label={`Select ${category.navLabel}`}
                  >
                    {/* Blue Circular (+) Button */}
                    <span
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white shadow-md transition-all flex-shrink-0 relative z-10 ${
                        isActive
                          ? "bg-pophen-navy ring-4 ring-pophen-cyan/40"
                          : "bg-pophen-blue group-hover:bg-pophen-navy"
                      }`}
                    >
                      <Plus
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isActive ? "rotate-90 text-pophen-cyan" : "text-white"
                        }`}
                      />
                    </span>

                    {/* Attached White Pill Label */}
                    <span
                      className={`pl-3.5 pr-3 py-1 -ml-2 rounded-r-xl rounded-l-sm text-[13px] sm:text-xs font-bold shadow-md border transition-colors whitespace-nowrap ${
                        isActive
                          ? "bg-pophen-navy text-white border-pophen-navy"
                          : "bg-white/95 backdrop-blur-sm text-pophen-navy border-slate-200/90 group-hover:border-pophen-blue/50"
                      }`}
                    >
                      {category.hotspotLabel}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. RIGHT COLUMN: Dynamic Product Information Card (4 cols on Desktop) */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-industrial relative overflow-hidden">
              {/* Top Section with Title, Description & 3D Component Visual */}
              <div className="flex items-start justify-between gap-3 mb-5">
                <div className="space-y-2.5 flex-1">
                  <h3 className="text-lg sm:text-xl font-extrabold text-pophen-navy tracking-tight leading-snug">
                    {activeCategory.cardTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {activeCategory.description}
                  </p>
                </div>

                {/* 3D Component Isometric Visual in Top-Right matching Screenshot 1 */}
                <div className="flex-shrink-0 -mt-2 -mr-2">
                  {renderComponentVisual(activeCategory.id)}
                </div>
              </div>

              {/* 4 Key Product Features with Check Icons */}
              <ul className="space-y-2.5 mb-6">
                {activeCategory.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-pophen-blue/10 border border-pophen-blue/25 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-pophen-blue stroke-[2.5]" />
                    </span>
                    <span className="font-medium leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* View Details Button */}
              <div>
                <Link
                  href={activeCategory.href}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-xs sm:text-sm font-semibold bg-pophen-blue hover:bg-pophen-blue-hover text-white shadow-sm hover:shadow transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-pophen-cyan"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
