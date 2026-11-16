"use client";

import { useState } from "react";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";

interface ProductGalleryProps {
  productName: string;
  category: string;
  primaryImage: string;
  gallery?: string[];
}

export function ProductGallery({
  productName,
  category,
  primaryImage,
  gallery,
}: ProductGalleryProps) {
  const images = gallery && gallery.length > 0 ? gallery : [primaryImage];
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main Image Viewport */}
      <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-xl aspect-[4/3] group">
        <Image
          src={images[activeIdx] || primaryImage}
          alt={`${productName} View ${activeIdx + 1}`}
          fill
          priority
          className="object-cover object-center transition-all duration-500 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />

        {/* Dark Bottom Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-[#00172e]/90 text-white text-[11px] font-bold tracking-wide backdrop-blur-md border border-white/20 shadow-md">
            {category.toUpperCase()}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-emerald-500/90 text-white text-[11px] font-bold inline-flex items-center gap-1 backdrop-blur-md shadow-md">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>FM4882 / ISO Certified</span>
          </span>
        </div>

        {/* Bottom Caption Overlay */}
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between pointer-events-none">
          <div className="text-white drop-shadow-md">
            <div className="text-xs font-semibold text-pophen-cyan">POPHEN ARCHITECTURAL SYSTEM</div>
            <div className="text-sm font-bold text-white truncate">{productName}</div>
          </div>
          <span className="px-2.5 py-1 rounded-md bg-black/60 text-white/90 text-[11px] font-medium backdrop-blur-md border border-white/10">
            {activeIdx + 1} / {images.length}
          </span>
        </div>
      </div>

      {/* Thumbnails Row */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((img, idx) => {
            const isActive = idx === activeIdx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`relative rounded-xl overflow-hidden aspect-[4/3] border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pophen-blue ${
                  isActive
                    ? "border-pophen-blue shadow-md scale-[1.02] ring-2 ring-pophen-blue/30"
                    : "border-slate-200/90 hover:border-slate-400 opacity-70 hover:opacity-100"
                }`}
                aria-label={`View image ${idx + 1} of ${productName}`}
              >
                <Image
                  src={img}
                  alt={`${productName} thumbnail ${idx + 1}`}
                  fill
                  className="object-cover object-center"
                  sizes="120px"
                />
                {isActive && (
                  <div className="absolute inset-0 bg-pophen-blue/10 pointer-events-none" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
