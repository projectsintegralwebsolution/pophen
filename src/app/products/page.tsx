"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Layers,
  Sparkles,
  Flame,
} from "lucide-react";
import { InnerPageLayout } from "@/components/layout/InnerPageLayout";
import { PageBanner } from "@/components/ui/PageBanner";
import { BROCHURE_PRODUCTS, BrochureProduct } from "@/data/brochureData";
import { EnquirySection } from "@/components/home/EnquirySection";

export default function ProductsCataloguePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Wall Systems", "Ceiling Systems", "Doors & Windows"];

  const filteredProducts =
    selectedCategory === "All"
      ? BROCHURE_PRODUCTS
      : BROCHURE_PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <InnerPageLayout>
      {/* 1. Page Banner */}
      <PageBanner
        title="Cleanroom Architectural Systems Catalogue"
        subtitle="Certified modular wall partitions, heavy-duty walkable ceilings, plenum systems, hermetic doors, and flush windows engineered for advanced technology and sterile facilities."
        badge="FM4882 & TÜV CERTIFIED SYSTEMS"
        image="/images/cleanroom-ceilings-hero-d8AQO7Df.webp"
        breadcrumbs={[{ label: "Product Catalogue" }]}
      />

      {/* 2. Catalogue Header & Category Filter */}
      <section className="py-14 lg:py-20 bg-white text-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-pophen-blue">
                OFFICIAL SYSTEM PORTFOLIO
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-pophen-navy tracking-tight mt-1">
                Explore POPHEN Product Lines
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Displaying {filteredProducts.length} certified cleanroom systems manufactured to international standards.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      isActive
                        ? "bg-pophen-blue text-white shadow-md"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Product Cards Grid (3 per row on desktop, 2 on tablet, 1 on mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product: BrochureProduct) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-slate-200 hover:border-pophen-blue/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
              >
                {/* Top Image Thumbnail */}
                <div className="relative h-56 w-full bg-slate-900 overflow-hidden flex-shrink-0">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00172e]/70 via-transparent to-transparent" />

                  {/* Category Badge on top-left */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="inline-block px-3 py-1 rounded-md bg-[#00172e]/90 text-white text-[11px] font-bold tracking-wide shadow-md border border-white/10 backdrop-blur-sm">
                      {product.category}
                    </span>
                  </div>

                  {/* Thickness / Size Badge on top-right */}
                  <div className="absolute top-3.5 right-3.5">
                    <span className="inline-block px-2.5 py-1 rounded-md bg-[#0077be] text-white text-[11px] font-bold shadow-md">
                      {product.thickness.split(" / ")[0]}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-pophen-blue uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5 text-pophen-blue" />
                      <span>{product.fireRating.split(",")[0]}</span>
                    </div>

                    <h3 className="text-lg font-bold text-pophen-navy group-hover:text-pophen-blue transition-colors leading-tight">
                      {product.name}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  {/* Highlighted Technical Specs Box */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/90 text-xs space-y-1.5">
                    <div className="flex items-center justify-between text-slate-700">
                      <span className="font-bold text-pophen-navy">Core Infill:</span>
                      <span className="text-right truncate max-w-[160px]">{product.core}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-700">
                      <span className="font-bold text-pophen-navy">Surface Paint:</span>
                      <span className="text-right truncate max-w-[160px]">{product.surfacePaint}</span>
                    </div>
                  </div>

                  {/* Bottom Action Buttons */}
                  <div className="pt-2 flex items-center justify-between gap-3 border-t border-slate-100">
                    <Link
                      href={`/products/${product.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-pophen-blue hover:text-pophen-navy transition-colors"
                    >
                      <span>View Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                      href={`/products/${product.id}#rfq-section`}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-pophen-blue hover:text-white text-slate-700 transition-colors"
                    >
                      Request Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. In-Page Enquiry */}
      <EnquirySection />
    </InnerPageLayout>
  );
}
