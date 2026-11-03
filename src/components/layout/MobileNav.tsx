"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  ChevronDown,
  Phone,
  Mail,
  ArrowRight,
  ShieldCheck,
  MapPin,
  Layers,
  Grid3X3,
  DoorOpen,
  AppWindow,
  Wind,
} from "lucide-react";
import { COMPANY_INFO, NAV_ITEMS } from "@/data/company";
import { PRODUCTS_DATA, ProductItem } from "@/data/products";
import { Logo } from "@/components/ui/Logo";
import { useEnquiryModal } from "@/context/EnquiryModalContext";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [productsExpanded, setProductsExpanded] = useState(true);
  const { openEnquiryModal } = useEnquiryModal();

  if (!isOpen) return null;

  const getProductIcon = (id: string) => {
    switch (id) {
      case "cleanroom-walls":
        return <Layers className="w-4 h-4 text-pophen-blue" />;
      case "ceilings":
        return <Grid3X3 className="w-4 h-4 text-pophen-blue" />;
      case "doors":
        return <DoorOpen className="w-4 h-4 text-pophen-blue" />;
      case "cleanroom-windows":
        return <AppWindow className="w-4 h-4 text-pophen-blue" />;
      case "modular-partitions":
        return <Layers className="w-4 h-4 text-pophen-blue" />;
      case "air-units":
      case "mobile-cleanair-unit":
        return <Wind className="w-4 h-4 text-pophen-blue" />;
      default:
        return <Layers className="w-4 h-4 text-pophen-blue" />;
    }
  };

  const handleMobileEnquire = () => {
    onClose();
    openEnquiryModal();
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-over panel */}
      <div className="fixed inset-y-0 right-0 max-w-sm w-full bg-pophen-navy-950 text-white shadow-2xl flex flex-col z-50 border-l border-white/10 animate-in slide-in-from-right duration-300 overflow-hidden">
        {/* Top Header */}
        <div className="p-4 border-b border-white/10 flex items-center justify-between bg-pophen-navy-950/80">
          <div className="inline-flex items-center bg-white px-3 py-1 rounded-xl shadow-md">
            <Logo variant="original" height={42} />
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links Scrollable Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-1">
          {NAV_ITEMS.map((item) => {
            if (item.name === "Products") {
              return (
                <div key={item.name} className="py-1">
                  <button
                    type="button"
                    onClick={() => setProductsExpanded(!productsExpanded)}
                    className="w-full flex items-center justify-between py-2.5 px-3 rounded-lg text-base font-semibold text-white hover:bg-white/5 transition-colors"
                    aria-expanded={productsExpanded}
                  >
                    <div className="flex items-center gap-2">
                      <span>{item.name}</span>
                      <span className="text-[13px] font-bold px-2 py-0.5 rounded-full bg-pophen-cyan/20 text-pophen-cyan">
                        {PRODUCTS_DATA.length} Systems
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        productsExpanded ? "rotate-180 text-pophen-cyan" : "text-slate-400"
                      }`}
                    />
                  </button>

                  {/* Expandable Mobile Product Cards with authentic thumbnails */}
                  {productsExpanded && (
                    <div className="space-y-2 py-2 pl-1 pr-1">
                      {PRODUCTS_DATA.map((product: ProductItem) => (
                        <Link
                          key={product.id}
                          href={`#${product.id}`}
                          onClick={onClose}
                          className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-pophen-cyan/30 transition-all duration-200"
                        >
                          {/* Thumbnail */}
                          <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-slate-900 border border-white/10">
                            <Image
                               src={product.image}
                              alt={product.name}
                              fill
                              className="object-cover object-center"
                              sizes="48px"
                            />
                          </div>

                          {/* Info */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5 mb-0.5">
                              {getProductIcon(product.id)}
                              <span className="text-xs font-bold text-white truncate">
                                {product.shortName}
                              </span>
                            </div>
                            <p className="text-[14px] text-slate-300 line-clamp-1">
                              {product.tagline}
                            </p>
                          </div>

                          <ArrowRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                        </Link>
                      ))}

                      {/* Link to view all products on page */}
                      <Link
                        href="#products"
                        onClick={onClose}
                        className="flex items-center justify-between py-2 px-3 text-xs font-semibold text-pophen-cyan hover:text-white transition-colors"
                      >
                        <span>Explore Full Cleanroom Catalog</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className="block py-2.5 px-3 rounded-lg text-base font-medium text-slate-200 hover:text-white hover:bg-white/5 transition-colors"
              >
                {item.name}
              </Link>
            );
          })}

          <div className="pt-4 border-t border-white/10 mt-4 space-y-3">
            <button
              type="button"
              onClick={handleMobileEnquire}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-semibold bg-pophen-blue text-white shadow-md hover:bg-pophen-blue-hover transition-colors"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                COMPANY_INFO.whatsappPrefill
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-medium bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
            >
              <span>WhatsApp Direct</span>
            </a>
          </div>

          {/* Contact Details in Drawer */}
          <div className="pt-6 border-t border-white/10 mt-6 space-y-3 text-xs text-slate-300">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-pophen-cyan flex-shrink-0 mt-0.5" />
              <span className="leading-snug">WeWork 247 Park, Vikhroli West, Mumbai, MH 400083</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-pophen-cyan flex-shrink-0" />
              <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white">
                {COMPANY_INFO.formattedPhone}
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-pophen-cyan flex-shrink-0" />
              <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white truncate">
                {COMPANY_INFO.email}
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-pophen-blue-light pt-2">
              <ShieldCheck className="w-4 h-4 text-pophen-cyan flex-shrink-0" />
              <span>ISO 14644 &amp; GMP Cleanroom Engineering</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
