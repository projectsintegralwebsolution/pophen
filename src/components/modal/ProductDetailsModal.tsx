"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  X,
  CheckCircle2,
  Sliders,
  Layers,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { ProductItem } from "@/data/products";

interface ProductDetailsModalProps {
  product: ProductItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductDetailsModal({
  product,
  isOpen,
  onClose,
}: ProductDetailsModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Lock background page scroll while the popup is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  if (!product && !isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6 bg-[#001428]/70 backdrop-blur-sm transition-all duration-300 ${
        isOpen && product
          ? "opacity-100 pointer-events-auto visible"
          : "opacity-0 pointer-events-none invisible"
      }`}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
      aria-labelledby="product-details-modal-title"
    >
      <div
        ref={modalRef}
        className={`relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden flex flex-col max-h-[90vh] transition-all duration-300 ${
          isOpen && product ? "scale-100 translate-y-0" : "scale-95 translate-y-2"
        }`}
      >
        {/* Top-Right Close (X) Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close product details modal"
          className="absolute top-3.5 right-3.5 z-30 w-9 h-9 rounded-full bg-white/95 hover:bg-pophen-navy text-pophen-navy hover:text-white border border-slate-200 shadow-md flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pophen-cyan"
        >
          <X className="w-4 h-4" />
        </button>

        {product && (
          <div className="grid grid-cols-1 md:grid-cols-12 overflow-y-auto">
            {/* Left Side – Product Image */}
            <div className="md:col-span-5 bg-white p-5 sm:p-6 md:p-7 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-100">
              <div className="space-y-4">
                {/* Main Product Image */}
                <div className="relative w-full aspect-[4/3] md:aspect-[4/3.4] rounded-xl overflow-hidden bg-slate-50 border border-slate-200/80 shadow-sm">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 420px"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[13px] font-semibold bg-[#0b2545]/95 text-white backdrop-blur-sm shadow-sm tracking-wide">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Available Systems / Variants Summary */}
                {product.variants && product.variants.length > 0 && (
                  <div className="rounded-xl bg-[#f6f9fc] border border-slate-200/70 p-3.5 space-y-2">
                    <div className="flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-wider text-pophen-navy">
                      <Layers className="w-3.5 h-3.5 text-pophen-blue flex-shrink-0" />
                      <span>Available System Configurations</span>
                    </div>
                    <ul className="space-y-1.5">
                      {product.variants.map((variant, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-[14px] text-slate-600 leading-snug"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-pophen-blue flex-shrink-0 mt-0.5" />
                          <span>{variant}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Applications Tags */}
              {product.applications && product.applications.length > 0 && (
                <div className="pt-4 mt-4 border-t border-slate-100">
                  <span className="block text-[12.5px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Primary Applications
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.applications.map((app, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-2.5 py-1 rounded-md text-[13px] font-semibold bg-[#eef5fc] text-pophen-navy border border-blue-100"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Side – Product Information */}
            <div className="md:col-span-7 p-5 sm:p-6 md:p-7 flex flex-col justify-between space-y-5 bg-white">
              <div className="space-y-4">
                {/* Category Badge & Product Heading */}
                <div className="space-y-1.5 pr-8">
                  <div className="inline-flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-widest text-pophen-blue">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{product.category}</span>
                  </div>
                  <h2
                    id="product-details-modal-title"
                    className="text-xl sm:text-2xl font-extrabold text-pophen-navy tracking-tight leading-snug"
                  >
                    {product.name}
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-pophen-blue">
                    {product.tagline}
                  </p>
                </div>

                {/* Short Product Description */}
                <div className="space-y-2 text-xs sm:text-[15px] text-slate-600 leading-relaxed">
                  <p>{product.description}</p>
                  {product.extendedDescription && (
                    <p className="text-slate-500">{product.extendedDescription}</p>
                  )}
                </div>

                {/* Key Product Features */}
                {product.features && product.features.length > 0 && (
                  <div className="space-y-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-pophen-navy">
                      Key Engineering Features
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {product.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 rounded-lg bg-[#f8fbfe] border border-slate-200/70 p-2.5"
                        >
                          <CheckCircle2 className="w-4 h-4 text-pophen-blue flex-shrink-0 mt-0.5" />
                          <span className="text-[14px] text-slate-700 leading-snug">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technical Specifications Table */}
                {product.specs && product.specs.length > 0 && (
                  <div className="rounded-xl bg-[#f3f7fb] border border-slate-200/80 p-3.5 space-y-2">
                    <div className="flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-wider text-pophen-navy">
                      <Sliders className="w-3.5 h-3.5 text-pophen-blue" />
                      <span>Technical Specifications</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 pt-1">
                      {product.specs.map((spec, idx) => (
                        <div
                          key={idx}
                          className="flex items-baseline justify-between gap-2 text-[14px] border-b border-slate-200/60 pb-1.5 last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0"
                        >
                          <span className="font-bold text-pophen-navy">
                            {spec.label}:
                          </span>
                          <span className="text-slate-600 text-right">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom View More Placeholder Button (No URL or navigation) */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-end">
                <button
                  type="button"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-pophen-navy hover:bg-pophen-blue text-white shadow-sm hover:shadow transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-pophen-cyan"
                >
                  <span>View More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
