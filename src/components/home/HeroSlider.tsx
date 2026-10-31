"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Compass,
  Layers,
  Wind,
  Award,
  Pause,
  Play,
} from "lucide-react";
import { HERO_SLIDES, HeroSlide } from "@/data/slides";
import { useEnquiryModal } from "@/context/EnquiryModalContext";

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const totalSlides = HERO_SLIDES.length;

  const { openEnquiryModal } = useEnquiryModal();

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev + 1) % totalSlides);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating, totalSlides]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating, totalSlides]);

  // Autoplay management respecting user interaction & reduced motion
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      nextSlide();
    }, 6500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [nextSlide, isPaused]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevSlide, nextSlide]);

  const getCredentialIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Compass className="w-4 h-4 text-pophen-cyan" />;
      case 1:
        return <Layers className="w-4 h-4 text-pophen-cyan" />;
      case 2:
        return <Wind className="w-4 h-4 text-pophen-cyan" />;
      case 3:
        return <Award className="w-4 h-4 text-pophen-cyan" />;
      default:
        return <ShieldCheck className="w-4 h-4 text-pophen-cyan" />;
    }
  };

  return (
    <section
      className="relative w-full min-h-[490px] lg:min-h-[610px] h-[calc(88vh-150px)] max-h-[750px] bg-[#00172e] overflow-hidden select-none"
      aria-label="POPHEN Cleanroom Engineering Hero Showcase"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Hidden SVG Unsharp-Mask Filter for Enhanced Hero Banner Clarity */}
      <svg className="hidden" aria-hidden="true">
        <defs>
          <filter id="hero-clarity-boost">
            <feConvolveMatrix
              order="3 3"
              preserveAlpha="true"
              kernelMatrix="0 -0.35 0 -0.35 2.4 -0.35 0 -0.35 0"
            />
          </filter>
        </defs>
      </svg>

      {/* Slides Container */}
      {HERO_SLIDES.map((slide: HeroSlide, index: number) => {
        const isActive = index === current;

        return (
          <div
            key={slide.id}
            aria-hidden={!isActive}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Background Image: Full-Bleed Architectural Cleanroom Perspective with Enhanced Clarity & 20% Overlay */}
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                unoptimized
                quality={100}
                priority={index === 0}
                style={{ filter: "url(#hero-clarity-boost) contrast(1.05) saturate(1.04)" }}
                className="object-cover object-center transition-transform duration-1000 ease-out"
                sizes="100vw"
              />
              {/* 20% Overlay on hero slider banners */}
              {(index === 0 || index === 1) && (
                <div className="absolute inset-0 bg-[#00172e]/20 pointer-events-none" />
              )}
            </div>

            {/* Slide Content Box — Normal full layout */}
            <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between py-8 lg:py-10">
              {/* Main Content Area */}
              <div className="max-w-2xl space-y-5 lg:space-y-6 pt-4 sm:pt-6">
                {/* Cyan Eyebrow Badge */}
                <div className="inline-flex items-center gap-2">
                  <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-pophen-cyan drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]">
                    {slide.badge}
                  </span>
                </div>

                {/* Primary Multi-line Headline */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
                  {slide.title}
                </h1>

                {/* Concise Supporting Description */}
                <p className="text-sm sm:text-base text-white leading-relaxed max-w-xl font-normal drop-shadow-[0_1px_5px_rgba(0,0,0,0.85)]">
                  {slide.description}
                </p>

                {/* Dual CTAs matching reference: Explore Our Systems (blue) & Discuss Your Project (outline) */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href={slide.primaryCtaHref}
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg text-xs sm:text-sm font-semibold bg-pophen-blue hover:bg-pophen-blue-hover text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <span>{slide.primaryCtaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => openEnquiryModal()}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-xs sm:text-sm font-semibold bg-black/25 hover:bg-black/40 text-white border border-white/50 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 shadow-md"
                  >
                    <span>{slide.secondaryCtaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Bottom Credential Strip: 4 items with icons */}
              <div className="pt-6 border-t border-white/20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
                {slide.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-center gap-2.5 text-xs text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]">
                    <div className="p-1.5 rounded-md bg-black/30 backdrop-blur-sm border border-white/20">
                      {getCredentialIcon(hIdx)}
                    </div>
                    <span className="font-medium text-[14px] sm:text-xs leading-snug">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side Architectural Caption & Controls (matching reference mockup) */}
            <div className="hidden xl:flex absolute right-12 bottom-12 z-30 flex-col items-end gap-6 text-right">
              {/* Vertical subtle text */}
              <div className="text-[13px] uppercase font-mono tracking-widest text-slate-200 leading-relaxed drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]">
                SPACES<br />
                SYSTEMS<br />
                SOLUTIONS<br />
                FOR A CLEANER<br />
                TOMORROW
              </div>

              {/* Slide Counter and Arrows */}
              <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/15 text-white">
                <span className="text-xs font-mono font-bold text-pophen-cyan">
                  0{current + 1}
                </span>
                <span className="text-xs font-mono text-slate-400">/ 0{totalSlides}</span>

                <div className="flex items-center gap-1 border-l border-white/20 pl-2 ml-1">
                  <button
                    type="button"
                    onClick={prevSlide}
                    className="p-1 rounded-full hover:bg-white/20 text-white transition-colors"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={nextSlide}
                    className="p-1 rounded-full hover:bg-white/20 text-white transition-colors"
                    aria-label="Next Slide"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Mobile/Tablet Fallback Slide Controls */}
      <div className="xl:hidden absolute z-30 bottom-4 right-4 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 text-white text-xs">
        <span className="font-mono text-pophen-cyan font-bold">0{current + 1}</span>
        <span className="font-mono text-slate-400">/ 0{totalSlides}</span>
        <button
          type="button"
          onClick={prevSlide}
          className="p-1 hover:text-pophen-cyan"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className="p-1 hover:text-pophen-cyan"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
