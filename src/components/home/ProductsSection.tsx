"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { PRODUCTS_DATA, ProductItem } from "@/data/products";
import { useEnquiryModal } from "@/context/EnquiryModalContext";
import { ProductDetailsModal } from "@/components/modal/ProductDetailsModal";

interface ProductsSectionProps {
  onSelectProduct?: (productName: string) => void;
}

const PRODUCT_BADGE_MAP: Record<string, string> = {
  "cleanroom-walls": "50–100mm Panels",
  ceilings: "FFU Integrated",
  doors: "Hermetic Drop Seal",
  "cleanroom-windows": "Flush Double Glazed",
  "modular-partitions": "Modular Interlocking",
  "air-units": "ISO Class 5 Laminar",
};

function ProductCategoryIcon({ id }: { id: string }) {
  switch (id) {
    case "cleanroom-walls":
      return (
        <svg viewBox="0 0 36 36" fill="none" className="w-9 h-9 text-[#0080d6] flex-shrink-0">
          <path
            d="M18 5L31 12.5L18 20L5 12.5L18 5Z"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 18L18 25.5L31 18"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 23.5L18 31L31 23.5"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "ceilings":
      return (
        <svg viewBox="0 0 36 36" fill="none" className="w-9 h-9 text-[#0080d6] flex-shrink-0">
          <rect x="6" y="7" width="24" height="4" rx="1" stroke="currentColor" strokeWidth="1.9" />
          <path d="M9 11V26H27V11" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
          <path d="M6 26H30" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
          <path d="M5 29.5H31" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
          <circle cx="18" cy="18.5" r="3" stroke="currentColor" strokeWidth="1.7" />
          <path d="M18 13.5V15.5M18 21.5V23.5M13 18.5H15M21 18.5H23" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "doors":
      return (
        <svg viewBox="0 0 36 36" fill="none" className="w-9 h-9 text-[#0080d6] flex-shrink-0">
          <rect x="9" y="5" width="18" height="26" rx="1.5" stroke="currentColor" strokeWidth="1.9" />
          <rect x="19" y="10" width="4.5" height="9" rx="0.8" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="13.5" cy="19" r="1.2" fill="currentColor" />
        </svg>
      );
    case "cleanroom-windows":
      return (
        <svg viewBox="0 0 36 36" fill="none" className="w-9 h-9 text-[#0080d6] flex-shrink-0">
          <rect x="6" y="6" width="24" height="24" rx="2" stroke="currentColor" strokeWidth="1.9" />
          <rect x="9.5" y="9.5" width="17" height="17" rx="1" stroke="currentColor" strokeWidth="1.7" />
          <path d="M18 9.5V26.5" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
    case "modular-partitions":
      return (
        <svg viewBox="0 0 36 36" fill="none" className="w-9 h-9 text-[#0080d6] flex-shrink-0">
          <path d="M6 8L14 6V28L6 30V8Z" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
          <path d="M14 6L22 9V31L14 28V6Z" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
          <path d="M22 9L30 7V29L22 31V9Z" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
        </svg>
      );
    case "air-units":
      return (
        <svg viewBox="0 0 36 36" fill="none" className="w-9 h-9 text-[#0080d6] flex-shrink-0">
          <circle cx="18" cy="18" r="3" stroke="currentColor" strokeWidth="1.9" />
          <path
            d="M18 15C18 10 21.5 6.5 25 8C28.5 9.5 26.5 15 20.8 16.8"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
          />
          <path
            d="M20.5 19.6C24.8 22.1 26.2 27 23 29C19.8 31 16 26.5 17.2 20.8"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
          />
          <path
            d="M15.4 19.4C11 21.9 6.5 20 6.5 16.2C6.5 12.4 12 11.8 16.2 16.1"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return null;
  }
}

function SpecRowIcon({ index }: { index: number }) {
  if (index === 0) {
    return (
      <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 text-[#0080d6] flex-shrink-0 mt-0.5">
        <path
          d="M8 2L13.5 5.2L8 8.4L2.5 5.2L8 2Z"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
        <path
          d="M2.5 8.2L8 11.4L13.5 8.2M2.5 11L8 14.2L13.5 11"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 text-[#0080d6] flex-shrink-0 mt-0.5">
        <rect x="2.5" y="2.5" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="8" cy="8" r="2.2" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 text-[#0080d6] flex-shrink-0 mt-0.5">
      <path
        d="M8 1.8L13 4V7.8C13 11.1 10.8 13.5 8 14.3C5.2 13.5 3 11.1 3 7.8V4L8 1.8Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path d="M5.8 8.1L7.3 9.6L10.4 6.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ProductsSection({ onSelectProduct }: ProductsSectionProps) {
  const { openEnquiryModal } = useEnquiryModal();
  const [selectedProductModal, setSelectedProductModal] = useState<ProductItem | null>(null);

  const handleEnquireProduct = (productName: string) => {
    if (onSelectProduct) {
      onSelectProduct(productName);
    }
    openEnquiryModal(productName);
  };

  const handleViewDetails = (product: ProductItem) => {
    setSelectedProductModal(product);
  };

  return (
    <section
      id="products"
      className="py-20 lg:py-24 bg-gradient-to-b from-[#f4f8fc] via-[#f8fbfe] to-[#f1f6fb] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Left Content & Right Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2.5 max-w-2xl">
            <span className="inline-flex items-center gap-2 text-pophen-blue text-xs font-bold uppercase tracking-widest">
              CLEANROOM ARCHITECTURAL SYSTEMS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-pophen-navy tracking-tight">
              Cleanroom Architectural Systems
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Modular architectural systems manufactured to international cleanliness standards, designed for seamless integration and airtight contamination control.
            </p>
          </div>

          <div className="flex-shrink-0">
            <button
              type="button"
              onClick={() => openEnquiryModal("Complete Product Portfolio")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-white hover:bg-slate-50 text-pophen-navy border border-slate-200/90 shadow-xs hover:shadow transition-all group focus:outline-none focus:ring-2 focus:ring-pophen-cyan"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4 text-pophen-blue group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Responsive Product Cards Grid: 3 on Desktop, 2 on Tablet, 1 on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 items-stretch">
          {PRODUCTS_DATA.map((product) => {
            const badgeText = PRODUCT_BADGE_MAP[product.id] || product.category;

            return (
              <div
                key={product.id}
                id={product.id}
                className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-[0_6px_24px_-6px_rgba(0,34,68,0.08)] hover:shadow-[0_14px_34px_-6px_rgba(0,119,190,0.16)] hover:border-blue-200 transition-all duration-300 flex flex-col group h-full"
              >
                {/* A. Product Image Area */}
                <div className="relative h-48 sm:h-52 w-full rounded-xl overflow-hidden bg-slate-100 flex-shrink-0">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001833]/25 via-transparent to-transparent" />

                  {/* Top-Left Dark Navy Specification/Feature Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center px-3 py-1 rounded-md text-[13px] font-semibold bg-[#0b2545]/95 text-white backdrop-blur-sm shadow-sm tracking-wide">
                      {badgeText}
                    </span>
                  </div>

                  {/* Bottom-Right Circular White Arrow Button */}
                  <button
                    type="button"
                    onClick={() => handleViewDetails(product)}
                    aria-label={`View details for ${product.name}`}
                    className="absolute bottom-3 right-3 z-10 w-8 h-8 rounded-full bg-white text-pophen-navy shadow-md flex items-center justify-center group-hover:bg-pophen-blue group-hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pophen-cyan"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Card Content Area */}
                <div className="pt-4 px-1.5 pb-1 flex-1 flex flex-col justify-between space-y-3.5">
                  {/* B. Product Information Area */}
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">
                      <ProductCategoryIcon id={product.id} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-[18px] xl:text-[19px] font-extrabold text-pophen-navy group-hover:text-pophen-blue transition-colors tracking-tight leading-snug">
                        {product.name}
                      </h3>
                      <p className="text-[14px] text-slate-600 leading-relaxed mt-1 line-clamp-2">
                        {product.tagline}.
                      </p>
                    </div>
                  </div>

                  {/* C. Technical Specification Panel */}
                  <div className="rounded-xl bg-[#f3f7fb] border border-slate-200/70 p-3 space-y-2">
                    {product.specs.slice(0, 3).map((spec, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-start gap-2 text-[13.5px] leading-snug"
                      >
                        <SpecRowIcon index={sIdx} />
                        <div className="min-w-0 flex-1 text-slate-600">
                          <span className="font-bold text-pophen-navy">
                            {spec.label}:
                          </span>{" "}
                          <span className="text-slate-600">{spec.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* D. Action Buttons */}
                  <div className="pt-1 flex items-center gap-2.5 mt-auto">
                    {/* 1. Enquire for Specs – dark navy background with white text */}
                    <button
                      type="button"
                      onClick={() => handleEnquireProduct(product.name)}
                      className="flex-[1.25] inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-lg text-[14px] font-semibold bg-[#07213c] hover:bg-pophen-blue text-white shadow-xs transition-all duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-pophen-cyan"
                    >
                      <span>Enquire for Specs</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    {/* 2. View Details – light blue/white background with blue text */}
                    <button
                      type="button"
                      onClick={() => handleViewDetails(product)}
                      className="flex-1 inline-flex items-center justify-center px-3 py-2.5 rounded-lg text-[14px] font-semibold bg-[#eef5fc] hover:bg-[#dcebfb] text-[#0072bc] transition-colors duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-pophen-cyan"
                    >
                      <span>View Details</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Engineering Standards Consultation Banner */}
        <div className="mt-16 rounded-2xl bg-pophen-navy text-white p-8 lg:p-10 shadow-xl border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-pophen-cyan text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Tailored Cleanroom Architectural Engineering</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Need custom panel dimensions, fire ratings, or specific cleanroom finishes?
            </h3>
            <p className="text-sm text-slate-300 max-w-2xl">
              Our engineering team assists architects, HVAC contractors, and facility managers with custom panel thicknesses (50–100mm), core infills, and flush architectural integrations.
            </p>
          </div>

          <div className="flex-shrink-0">
            <button
              type="button"
              onClick={() => openEnquiryModal("Custom Architectural Engineering")}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold bg-pophen-blue hover:bg-pophen-blue-hover text-white shadow-md transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pophen-cyan"
            >
              <span>Consult an Engineer</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Product Details Popup Modal */}
      <ProductDetailsModal
        product={selectedProductModal}
        isOpen={Boolean(selectedProductModal)}
        onClose={() => setSelectedProductModal(null)}
      />
    </section>
  );
}
