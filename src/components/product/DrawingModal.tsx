"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ZoomIn, ZoomOut, RotateCcw, Download, Maximize2 } from "lucide-react";

interface DrawingModalProps {
  isOpen: boolean;
  onClose: () => void;
  drawing: {
    title: string;
    description: string;
    image: string;
    downloadUrl?: string;
    type?: string;
  } | null;
}

export function DrawingModal({ isOpen, onClose, drawing }: DrawingModalProps) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (isOpen) {
      setScale(1);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen || !drawing) return null;

  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.3, 3));
  const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.3, 0.7));
  const handleReset = () => setScale(1);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-5xl bg-[#00172e] border border-white/20 rounded-2xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-[#001026]">
          <div className="min-w-0 pr-4">
            {drawing.type && (
              <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-pophen-cyan mb-0.5">
                {drawing.type}
              </span>
            )}
            <h3 className="text-base sm:text-lg font-bold text-white truncate">
              {drawing.title}
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

            {drawing.downloadUrl && (
              <a
                href={drawing.downloadUrl}
                download
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-pophen-blue hover:bg-pophen-blue-hover text-white text-xs font-semibold transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Download</span>
              </a>
            )}

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg bg-white/10 hover:bg-red-500/80 text-white transition-colors ml-1"
              aria-label="Close drawing preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Drawing Canvas Area */}
        <div className="flex-1 overflow-auto p-4 sm:p-8 flex items-center justify-center bg-[#071321] min-h-[350px]">
          <div
            className="transition-transform duration-200 ease-out origin-center bg-white p-3 sm:p-5 rounded-xl shadow-inner max-w-full"
            style={{ transform: `scale(${scale})` }}
          >
            <div className="relative w-full max-w-[850px] min-h-[280px] sm:min-h-[420px] flex items-center justify-center">
              <Image
                src={drawing.image}
                alt={drawing.title}
                width={1200}
                height={800}
                className="object-contain max-h-[65vh] w-auto h-auto rounded"
                priority
              />
            </div>
          </div>
        </div>

        {/* Bottom Technical Description */}
        <div className="px-5 py-3.5 border-t border-white/10 bg-[#001026] text-xs text-slate-300 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <p className="leading-relaxed text-slate-300">
            {drawing.description}
          </p>
          <span className="text-[11px] text-pophen-cyan font-semibold flex-shrink-0">
            POPHEN Cleanroom Architectural Systems
          </span>
        </div>
      </div>
    </div>
  );
}
