"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Truck,
  FileText,
} from "lucide-react";
import { useEnquiryModal } from "@/context/EnquiryModalContext";

interface ProductMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  headerHeight?: number;
}

interface MegaMenuItem {
  id: string;
  name: string;
  badge: string;
  description: string;
  image: string;
  href: string;
  isCustom?: boolean;
}

const TOP_ROW_ITEMS: MegaMenuItem[] = [
  {
    id: "cleanroom-walls",
    name: "Cleanroom Wall Panels",
    badge: "50–100mm Panels",
    description: "High-performance wall panel systems for controlled environments.",
    image: "/images/cleanroom-walls-hallway-D4ZV_xh8.webp",
    href: "#cleanroom-walls",
  },
  {
    id: "ceilings",
    name: "Ceiling Systems",
    badge: "FFU Integrated",
    description: "Modular and integrated ceiling solutions with FFU.",
    image: "/images/cleanroom-ceilings-detail-H-esTC_Q.webp",
    href: "#ceilings",
  },
  {
    id: "doors",
    name: "Cleanroom Doors",
    badge: "Hermetic Drop Seal",
    description: "Hermetically sealed door systems for critical environments.",
    image: "/images/cleanroom-doors-hero-D007b7fJ.webp",
    href: "#doors",
  },
  {
    id: "cleanroom-windows",
    name: "Cleanroom Windows",
    badge: "Flush Double Glazed",
    description: "Flush mounted, double glazed window systems.",
    image: "/images/cleanroom-windows-hero-eqB039vc.webp",
    href: "#cleanroom-windows",
  },
];

const BOTTOM_ROW_ITEMS: MegaMenuItem[] = [
  {
    id: "modular-partitions",
    name: "Modular Partitions",
    badge: "Modular Interlocking",
    description: "Flexible partition systems for cleanroom spaces.",
    image: "/images/hero-banner-1-v2.png",
    href: "#modular-partitions",
  },
  {
    id: "air-units",
    name: "Air Units & Systems",
    badge: "ISO Class 5 Laminar",
    description: "Laminar flow and FFU systems for clean air.",
    image: "/images/cleanroom-ceilings-detail-H-esTC_Q.webp",
    href: "#air-units",
  },
  {
    id: "custom-engineering",
    name: "Custom Engineering",
    badge: "50–100mm Panels",
    description: "Custom panels, airlocks & dynamic pass-through solutions.",
    image: "/images/activity4-3RM3aurZ.webp",
    href: "#contact",
    isCustom: true,
  },
];

const ALL_SIDEBAR_ITEMS: MegaMenuItem[] = [...TOP_ROW_ITEMS, ...BOTTOM_ROW_ITEMS];

export function ProductMegaMenu({
  isOpen,
  onClose,
  onMouseEnter,
  onMouseLeave,
  headerHeight = 115,
}: ProductMegaMenuProps) {
  const { openEnquiryModal } = useEnquiryModal();
  const [activeId, setActiveId] = useState<string>("cleanroom-walls");
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [availableHeight, setAvailableHeight] = useState<number>(640);
  const [isCompact, setIsCompact] = useState<boolean>(false);

  // Dynamically measure the exact available vertical viewport space below the header
  useEffect(() => {
    const updateAvailableSpace = () => {
      const vh = window.innerHeight;
      let topOffset = headerHeight;

      if (menuRef.current && menuRef.current.parentElement) {
        const parentRect = menuRef.current.parentElement.getBoundingClientRect();
        if (parentRect.bottom > 0) {
          topOffset = parentRect.bottom;
        }
      }

      const safetyGap = 6; // Bottom viewport breathing space
      const computedMax = Math.max(440, vh - topOffset - safetyGap + 72);
      setAvailableHeight(computedMax);
      setIsCompact(computedMax < 595);
    };

    updateAvailableSpace();
    window.addEventListener("resize", updateAvailableSpace);
    window.addEventListener("scroll", updateAvailableSpace, { passive: true });
    return () => {
      window.removeEventListener("resize", updateAvailableSpace);
      window.removeEventListener("scroll", updateAvailableSpace);
    };
  }, [isOpen, headerHeight]);

  const handleOpenProposal = () => {
    onClose();
    openEnquiryModal("Turnkey Cleanroom Project Execution");
  };

  const handleOpenCustomSpecs = () => {
    onClose();
    openEnquiryModal("Other Custom Engineering Solution");
  };

  /** Crisp custom blue line SVG icons matching the reference mega menu screenshot */
  const renderLineIcon = (id: string, className = "w-5 h-5 text-[#0077be]") => {
    switch (id) {
      case "cleanroom-walls":
        return (
          <svg viewBox="0 0 28 28" fill="none" className={className}>
            <path
              d="M14 3L25 8.5L14 14L3 8.5L14 3Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 14L14 19.5L25 14"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 19.5L14 25L25 19.5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "ceilings":
        return (
          <svg viewBox="0 0 28 28" fill="none" className={className}>
            <line x1="4" y1="6" x2="24" y2="6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="9" y1="6" x2="9" y2="11" stroke="currentColor" strokeWidth="1.8" />
            <line x1="19" y1="6" x2="19" y2="11" stroke="currentColor" strokeWidth="1.8" />
            <rect x="6" y="11" width="16" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
            <line x1="4" y1="23" x2="24" y2="23" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        );
      case "doors":
        return (
          <svg viewBox="0 0 28 28" fill="none" className={className}>
            <rect x="6" y="3" width="16" height="22" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
            <rect x="10" y="7" width="8" height="6" rx="0.8" stroke="currentColor" strokeWidth="1.4" />
            <circle cx="19" cy="16" r="1.2" fill="currentColor" />
          </svg>
        );
      case "cleanroom-windows":
        return (
          <svg viewBox="0 0 28 28" fill="none" className={className}>
            <rect x="4" y="5" width="20" height="18" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
            <rect x="7" y="8" width="6" height="12" stroke="currentColor" strokeWidth="1.4" />
            <rect x="15" y="8" width="6" height="12" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        );
      case "modular-partitions":
        return (
          <svg viewBox="0 0 28 28" fill="none" className={className}>
            <path d="M4 6L10 4V22L4 24V6Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
            <path d="M10 4L18 6V24L10 22V4Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
            <path d="M18 6L24 4V22L18 24V6Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          </svg>
        );
      case "air-units":
        return (
          <svg viewBox="0 0 28 28" fill="none" className={className}>
            <circle cx="14" cy="14" r="2.5" stroke="currentColor" strokeWidth="1.8" />
            <path
              d="M14 11.5C14 7.5 18 4.5 20.5 6.5C23 8.5 20 13 16.2 13.2"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M16.2 15.2C19.5 17.2 20 22 17 23C14 24 11.5 19.5 13 16.2"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M11.8 15C8 16.5 4.5 14 5.5 11C6.5 8 11 9.5 12.8 12.2"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        );
      case "custom-engineering":
      default:
        return (
          <svg viewBox="0 0 28 28" fill="none" className={className}>
            <circle cx="14" cy="14" r="4" stroke="currentColor" strokeWidth="1.8" />
            <path
              d="M14 3.5V6M14 22V24.5M3.5 14H6M22 14H24.5M6.6 6.6L8.4 8.4M19.6 19.6L21.4 21.4M21.4 6.6L19.6 8.4M8.4 19.6L6.6 21.4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="14" cy="14" r="8" stroke="currentColor" strokeWidth="1.6" strokeDasharray="3 2" />
          </svg>
        );
    }
  };

  // Responsive thumbnail height based on available viewport height (+80px total mega menu height)
  const thumbHeightStyle = {
    height: isCompact ? "clamp(81px, 11.6vh, 93px)" : "clamp(91px, 13vh, 107px)",
  };

  const featuredImgHeightStyle = {
    height: isCompact ? "clamp(134px, 17.5vh, 158px)" : "clamp(154px, 20vh, 184px)",
  };

  return (
    <div
      ref={menuRef}
      id="product-mega-menu"
      role="region"
      aria-label="Cleanroom Products Mega Menu"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        width: "min(1260px, calc(100vw - 24px))",
        maxWidth: "calc(100vw - 24px)",
        maxHeight: `${availableHeight}px`,
      }}
      className={`hidden lg:flex flex-col absolute left-1/2 -translate-x-1/2 top-full mt-0.5 bg-white text-slate-800 rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden box-border transition-all duration-200 z-50 before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 before:content-[''] ${
        isOpen
          ? "opacity-100 translate-y-0 pointer-events-auto visible scale-100"
          : "opacity-0 -translate-y-2 pointer-events-none invisible scale-[0.99]"
      }`}
    >
      {/* MAIN 3-COLUMN BODY */}
      <div className="grid grid-cols-12 flex-1 min-h-0 overflow-hidden">
        {/* 1. LEFT SIDEBAR: 7 Vertical Category Links (col-span-3) */}
        <div
          className={`col-span-3 border-r border-slate-200/80 px-2 flex flex-col justify-between bg-white min-h-0 ${
            isCompact ? "py-2" : "py-3"
          }`}
        >
          {ALL_SIDEBAR_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            const content = (
              <>
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="flex-shrink-0">
                    {renderLineIcon(
                      item.id,
                      isCompact ? "w-5 h-5 text-[#0077be]" : "w-5.5 h-5.5 text-[#0077be]"
                    )}
                  </div>
                  <div className="min-w-0 text-left">
                    <div
                      className={`text-xs font-bold truncate leading-tight transition-colors ${
                        isActive ? "text-[#0077be]" : "text-pophen-navy group-hover:text-[#0077be]"
                      }`}
                    >
                      {item.name}
                    </div>
                    <div className="text-[12px] text-slate-500 truncate leading-tight mt-0.5">
                      {item.badge}
                    </div>
                  </div>
                </div>
                <ChevronRight
                  className={`w-3.5 h-3.5 flex-shrink-0 transition-transform ${
                    isActive
                      ? "text-[#0077be] translate-x-0.5"
                      : "text-slate-400 group-hover:text-[#0077be] group-hover:translate-x-0.5"
                  }`}
                />
              </>
            );

            const itemClasses = `group relative flex items-center justify-between gap-1.5 px-2.5 ${
              isCompact ? "py-1.5" : "py-2"
            } rounded-lg transition-all w-full ${
              isActive
                ? "bg-[#edf6fc] before:absolute before:left-0 before:top-1 before:bottom-1 before:w-1 before:bg-[#0077be] before:rounded-r"
                : "hover:bg-slate-50"
            }`;

            if (item.isCustom) {
              return (
                <button
                  key={item.id}
                  type="button"
                  onMouseEnter={() => setActiveId(item.id)}
                  onClick={handleOpenCustomSpecs}
                  className={itemClasses}
                >
                  {content}
                </button>
              );
            }

            return (
              <Link
                key={item.id}
                href={item.href}
                onMouseEnter={() => setActiveId(item.id)}
                onClick={onClose}
                className={itemClasses}
              >
                {content}
              </Link>
            );
          })}
        </div>

        {/* 2. CENTER PRODUCT RANGE GRID (col-span-6, 50% width) */}
        <div
          className={`col-span-6 flex flex-col justify-between bg-white min-h-0 ${
            isCompact ? "px-3.5 py-2.5" : "px-4 py-3.5"
          }`}
        >
          {/* Header Row */}
          <div className="flex items-center justify-between gap-2 mb-1.5 flex-shrink-0">
            <h3 className="text-sm font-extrabold text-pophen-navy tracking-tight leading-snug">
              Explore Our Cleanroom Product Range
            </h3>
            <Link
              href="#products"
              onClick={onClose}
              className="inline-flex items-center gap-1 text-[13px] font-semibold text-[#0077be] hover:text-pophen-navy transition-colors group flex-shrink-0"
            >
              <span>View All Products</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Top Row: 4 Product Cards */}
          <div
            className={`grid grid-cols-4 gap-2.5 border-b border-slate-100 ${
              isCompact ? "pb-2" : "pb-2.5"
            }`}
          >
            {TOP_ROW_ITEMS.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onMouseEnter={() => setActiveId(item.id)}
                onClick={onClose}
                className="group flex flex-col rounded-lg transition-all min-w-0"
              >
                {/* Thumbnail */}
                <div
                  style={thumbHeightStyle}
                  className="relative w-full rounded-md overflow-hidden bg-slate-100 border border-slate-200/80 mb-1.5 flex-shrink-0"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    sizes="160px"
                  />
                </div>

                {/* Icon + Title & Badge */}
                <div className="flex items-start gap-1.5 mb-0.5">
                  <div className="flex-shrink-0 mt-0.5">
                    {renderLineIcon(item.id, "w-4 h-4 text-[#0077be]")}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-[12.5px] font-bold text-pophen-navy group-hover:text-[#0077be] transition-colors leading-tight line-clamp-1">
                      {item.name}
                    </h4>
                    <span className="inline-block mt-0.5 px-1.5 py-0.5 rounded bg-[#eaf4fc] text-[#0077be] text-[10.5px] font-semibold leading-none truncate max-w-full">
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Short Description */}
                <p className="text-[11.5px] text-slate-500 leading-tight line-clamp-2 pl-5">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>

          {/* Bottom Row: 3 Product Cards */}
          <div className={`grid grid-cols-3 gap-3 ${isCompact ? "pt-2" : "pt-2.5"}`}>
            {BOTTOM_ROW_ITEMS.map((item) => {
              const cardContent = (
                <>
                  {/* Thumbnail */}
                  <div
                    style={thumbHeightStyle}
                    className="relative w-full rounded-md overflow-hidden bg-slate-100 border border-slate-200/80 mb-1.5 flex-shrink-0"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      sizes="200px"
                    />
                  </div>

                  {/* Icon + Title & Badge */}
                  <div className="flex items-start gap-1.5 mb-0.5">
                    <div className="flex-shrink-0 mt-0.5">
                      {renderLineIcon(item.id, "w-4 h-4 text-[#0077be]")}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-[12.5px] font-bold text-pophen-navy group-hover:text-[#0077be] transition-colors leading-tight line-clamp-1">
                        {item.name}
                      </h4>
                      <span className="inline-block mt-0.5 px-1.5 py-0.5 rounded bg-[#eaf4fc] text-[#0077be] text-[10.5px] font-semibold leading-none truncate max-w-full">
                        {item.badge}
                      </span>
                    </div>
                  </div>

                  {/* Short Description */}
                  <p className="text-[11.5px] text-slate-500 leading-tight line-clamp-2 pl-5">
                    {item.description}
                  </p>
                </>
              );

              if (item.isCustom) {
                return (
                  <button
                    key={item.id}
                    type="button"
                    onMouseEnter={() => setActiveId(item.id)}
                    onClick={handleOpenCustomSpecs}
                    className="group flex flex-col text-left rounded-lg transition-all min-w-0"
                  >
                    {cardContent}
                  </button>
                );
              }

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onMouseEnter={() => setActiveId(item.id)}
                  onClick={onClose}
                  className="group flex flex-col rounded-lg transition-all min-w-0"
                >
                  {cardContent}
                </Link>
              );
            })}
          </div>
        </div>

        {/* 3. RIGHT FEATURED SOLUTION CARD (col-span-3, 25% width) */}
        <div className={`col-span-3 bg-white flex flex-col min-h-0 ${isCompact ? "p-2" : "p-2.5"}`}>
          <div
            className={`rounded-xl bg-[#001d3d] text-white flex-1 flex flex-col justify-between shadow-md border border-slate-800 min-h-0 ${
              isCompact ? "p-2.5" : "p-3"
            }`}
          >
            <div className={isCompact ? "space-y-1.5" : "space-y-2"}>
              {/* Featured Cleanroom Photograph */}
              <div
                style={featuredImgHeightStyle}
                className="relative w-full rounded-lg overflow-hidden border border-white/15 bg-slate-900 flex-shrink-0"
              >
                <Image
                  src="/images/hero-banner-1-v2.png"
                  alt="Turnkey Cleanroom Architecture"
                  fill
                  className="object-cover object-center"
                  sizes="280px"
                />
              </div>

              {/* FEATURED SOLUTION Eyebrow with horizontal line */}
              <div className="flex items-center gap-2 pt-0.5">
                <span className="text-[11px] font-bold uppercase tracking-widest text-pophen-cyan whitespace-nowrap">
                  FEATURED SOLUTION
                </span>
                <div className="h-px bg-pophen-cyan/35 flex-1" />
              </div>

              {/* Heading */}
              <h3 className="text-xs font-extrabold text-white leading-snug">
                Turnkey Cleanroom Architecture &amp; Controlled Environments
              </h3>

              {/* Description */}
              <p className="text-[12px] text-slate-300 leading-snug line-clamp-2">
                Complete modular cleanroom envelopes combining wall panels, ceiling grids, airtight doors, and integrated HEPA filtration.
              </p>

              {/* 3 Bullet Points */}
              <div className="space-y-1 pt-0.5 text-[12px] text-slate-200">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-pophen-cyan flex-shrink-0" />
                  <span className="truncate">ISO 14644 Class 1 to Class 8 Enclosures</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-pophen-cyan flex-shrink-0" />
                  <span className="truncate">Flush, Sanitary Wipe-down Surfaces</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-pophen-cyan flex-shrink-0" />
                  <span className="truncate">Turnkey Engineering from CAD to Handover</span>
                </div>
              </div>
            </div>

            {/* Bottom Button */}
            <div className="pt-2 mt-1.5 flex-shrink-0">
              <button
                type="button"
                onClick={handleOpenProposal}
                className={`w-full inline-flex items-center justify-center gap-2 px-3.5 ${
                  isCompact ? "py-1.5" : "py-2"
                } rounded-lg text-xs font-bold bg-[#009fe3] hover:bg-[#0088c7] text-white shadow-md transition-all hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-pophen-cyan`}
              >
                <span>Request Project Proposal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM 3-COLUMN VALUE PROPOSITION BAR (flex-shrink-0 ensures it is NEVER clipped) */}
      <div
        className={`bg-[#f4f7fa] border-t border-slate-200/80 px-5 ${
          isCompact ? "py-2" : "py-2.5"
        } grid grid-cols-3 divide-x divide-slate-200/90 flex-shrink-0`}
      >
        {/* Item 1 */}
        <div className="flex items-center gap-2.5 pr-3">
          <div className="w-7 h-7 rounded-lg bg-white border border-slate-200/90 flex items-center justify-center flex-shrink-0 text-[#0077be] shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5" />
          </div>
          <div className="min-w-0">
            <div className="text-[13px] font-bold text-pophen-navy truncate leading-tight">
              ISO 14644 &amp; GMP Compliance
            </div>
            <div className="text-[11.5px] text-slate-500 truncate leading-tight">
              Engineered to global cleanroom standards
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex items-center gap-2.5 px-3">
          <div className="w-7 h-7 rounded-lg bg-white border border-slate-200/90 flex items-center justify-center flex-shrink-0 text-[#0077be] shadow-2xs">
            <Truck className="w-3.5 h-3.5" />
          </div>
          <div className="min-w-0">
            <div className="text-[13px] font-bold text-pophen-navy truncate leading-tight">
              Pan-India Project Support
            </div>
            <div className="text-[11.5px] text-slate-500 truncate leading-tight">
              Design, installation and service nationwide
            </div>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex items-center gap-2.5 pl-3">
          <div className="w-7 h-7 rounded-lg bg-white border border-slate-200/90 flex items-center justify-center flex-shrink-0 text-[#0077be] shadow-2xs">
            <FileText className="w-3.5 h-3.5" />
          </div>
          <div className="min-w-0">
            <div className="text-[13px] font-bold text-pophen-navy truncate leading-tight">
              Technical Data Sheets &amp; CAD Drawings
            </div>
            <div className="text-[11.5px] text-slate-500 truncate leading-tight">
              Our engineering team provides direct support
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
