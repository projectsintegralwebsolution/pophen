"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ZoomIn, ZoomOut, RotateCcw, Download, ShieldCheck, FileCheck2 } from "lucide-react";
import { VerifiedDocument } from "@/data/brochureData";

interface DocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
  document: VerifiedDocument | null;
}

export function DocumentModal({ isOpen, onClose, document }: DocumentModalProps) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (isOpen) {
      setScale(1);
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflow = "";
    }
    return () => {
      window.document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen || !document) return null;

  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.25, 0.7));
  const handleReset = () => setScale(1);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-5xl bg-[#00172e] border border-white/20 rounded-2xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-[#001026]">
          <div className="min-w-0 pr-4">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-pophen-cyan">
                <ShieldCheck className="w-3.5 h-3.5 text-pophen-cyan" />
                {document.badge}
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-xs text-slate-400 truncate">{document.issuer}</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white truncate mt-0.5">
              {document.title}
            </h3>
          </div>

          {/* Action Controls */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              type="button"
              onClick={handleZoomOut}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 transition-colors"
              title="Zoom Out"
              aria-label="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-xs font-semibold text-slate-300 min-w-[40px] text-center">
              {Math.round(scale * 100)}%
            </span>
            <button
              type="button"
              onClick={handleZoomIn}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 transition-colors"
              title="Zoom In"
              aria-label="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 transition-colors"
              title="Reset Zoom"
              aria-label="Reset Zoom"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {document.pdfUrl && (
              <a
                href={document.pdfUrl}
                download
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-pophen-blue hover:bg-pophen-blue-hover text-white text-xs font-semibold transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Download PDF</span>
              </a>
            )}

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg bg-white/10 hover:bg-red-500/80 text-white transition-colors ml-1"
              aria-label="Close document preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-auto grid grid-cols-1 lg:grid-cols-12 min-h-[380px]">
          {/* Document Preview (8 cols on lg) */}
          <div className="lg:col-span-8 bg-[#0b1b2d] p-4 sm:p-6 flex items-center justify-center overflow-auto border-b lg:border-b-0 lg:border-r border-white/10">
            <div
              className="transition-transform duration-200 ease-out origin-center bg-white p-3 rounded-lg shadow-xl"
              style={{ transform: `scale(${scale})` }}
            >
              <Image
                src={document.previewImage}
                alt={document.title}
                width={800}
                height={1100}
                className="object-contain max-h-[60vh] w-auto h-auto rounded"
                priority
              />
            </div>
          </div>

          {/* Verification Details Sidebar (4 cols on lg) */}
          <div className="lg:col-span-4 bg-[#00172e] p-5 sm:p-6 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-pophen-cyan block">
                  REPORT VERIFICATION
                </span>
                <h4 className="text-sm font-bold text-white mt-0.5">
                  {document.reportNumber}
                </h4>
              </div>

              <div className="space-y-3 pt-2">
                {document.details.map((detail, idx) => (
                  <div key={idx} className="border-b border-white/10 pb-2">
                    <div className="text-[11px] font-medium text-slate-400">
                      {detail.label}
                    </div>
                    <div className="text-xs font-semibold text-slate-200 mt-0.5">
                      {detail.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <div className="text-[11px] font-medium text-slate-400 mb-1">
                  Applicable POPHEN Systems:
                </div>
                <div className="text-xs text-pophen-cyan font-semibold leading-relaxed">
                  {document.applicability}
                </div>
              </div>
            </div>

            <div className="pt-5 mt-4 border-t border-white/10">
              <a
                href={document.pdfUrl}
                download
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-pophen-blue hover:bg-pophen-blue-hover text-white text-xs font-bold transition-all shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>Download Verified PDF Report</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="px-5 py-3 border-t border-white/10 bg-[#001026] text-[11px] text-slate-400 flex items-center justify-between">
          <span>Official Testing &amp; Compliance Document</span>
          <span className="text-slate-300 font-medium">POPHEN India Engineering Validation</span>
        </div>
      </div>
    </div>
  );
}
