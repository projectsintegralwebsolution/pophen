"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  Search,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { Logo } from "@/components/ui/Logo";
import { ProductMegaMenu } from "@/components/layout/ProductMegaMenu";
import { useEnquiryModal } from "@/context/EnquiryModalContext";

interface HeaderProps {
  onOpenMobileMenu?: () => void;
  mobileMenuOpen?: boolean;
  setMobileMenuOpen?: (open: boolean) => void;
}

export function Header({
  mobileMenuOpen,
  setMobileMenuOpen,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(115);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navContainerRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);

  const { openEnquiryModal } = useEnquiryModal();

  // Measure dynamic header height and update CSS custom property
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        setHeaderHeight(height);
        document.documentElement.style.setProperty("--header-height", `${height}px`);
      }
    };
    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, [isScrolled]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mega menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMegaMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close mega menu on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        navContainerRef.current &&
        !navContainerRef.current.contains(e.target as Node)
      ) {
        setMegaMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 220);
  };

  return (
    <header ref={headerRef} className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Utility Bar (Dark Navy) */}
      <div className="bg-[#00172e] text-slate-300 border-b border-slate-800/80 text-[14px] sm:text-xs py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="inline-flex items-center gap-1.5 text-pophen-cyan font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-pophen-cyan" />
              <span>ISO 14644 &amp; GMP Cleanroom Engineering</span>
            </span>
            <span className="hidden md:inline-block text-slate-600">|</span>
            <span className="hidden md:inline-flex items-center text-slate-300">
              Mumbai, India &bull; Turnkey Controlled Environments
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-5 text-slate-300">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              aria-label="Call Pophen"
            >
              <Phone className="w-3.5 h-3.5 text-pophen-cyan" />
              <span>{COMPANY_INFO.formattedPhone}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              aria-label="Email Pophen"
            >
              <Mail className="w-3.5 h-3.5 text-pophen-cyan" />
              <span className="hidden sm:inline">{COMPANY_INFO.email}</span>
              <span className="sm:hidden">Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar — White Background matching reference mockup */}
      <div
        ref={navContainerRef}
        className={`bg-white text-slate-800 transition-all duration-300 relative w-full ${
          isScrolled
            ? "py-3 shadow-md border-b border-slate-200/90"
            : "py-3.5 border-b border-slate-200/70"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo — Navy on white */}
          <div className="flex-shrink-0">
            <Logo variant="navy" height={isScrolled ? 58 : 64} />
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              href="/"
              className="px-3 py-1.5 text-xs font-semibold text-pophen-blue hover:text-pophen-navy transition-colors"
            >
              Home
            </Link>

            {/* Products Mega Menu Trigger */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                className={`relative flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-md transition-all duration-200 ${
                  megaMenuOpen
                    ? "text-[#0077be] after:absolute after:left-2 after:right-2 after:-bottom-3.5 after:h-[3px] after:bg-[#009fe3] after:rounded-full"
                    : "text-slate-700 hover:text-pophen-navy hover:bg-slate-50"
                }`}
                aria-expanded={megaMenuOpen}
                aria-haspopup="true"
                aria-controls="product-mega-menu"
              >
                <span>Products</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    megaMenuOpen ? "rotate-180 text-pophen-blue" : "text-slate-400"
                  }`}
                />
              </button>
            </div>

            <Link
              href="#about"
              className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-pophen-navy hover:bg-slate-50 rounded-md transition-colors"
            >
              About Us
            </Link>

            <Link
              href="#industries"
              className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-pophen-navy hover:bg-slate-50 rounded-md transition-colors"
            >
              Industries
            </Link>

            <Link
              href="#process"
              className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-pophen-navy hover:bg-slate-50 rounded-md transition-colors"
            >
              Process
            </Link>

            <Link
              href="#showcase"
              className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-pophen-navy hover:bg-slate-50 rounded-md transition-colors"
            >
              Installations
            </Link>

            <Link
              href="#contact"
              className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-pophen-navy hover:bg-slate-50 rounded-md transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          {/* Right Header Actions: Blue "Enquire Now ->" and Search Icon */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              onClick={() => openEnquiryModal()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold bg-pophen-blue hover:bg-pophen-blue-hover text-white shadow-sm hover:shadow transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-pophen-blue/30"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={() => {
                const el = document.getElementById("products");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="p-2 text-slate-500 hover:text-pophen-navy hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Search Cleanroom Products"
              title="Search products"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2.5">
            <button
              type="button"
              onClick={() => openEnquiryModal()}
              className="inline-flex items-center px-3 py-1.5 rounded-md text-xs font-semibold bg-pophen-blue text-white"
            >
              Enquire
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen?.(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-pophen-navy hover:bg-slate-100 transition-colors"
              aria-label="Toggle mobile navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mega Menu anchored to FULL-WIDTH header container */}
        <ProductMegaMenu
          isOpen={megaMenuOpen}
          onClose={() => setMegaMenuOpen(false)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          headerHeight={headerHeight}
        />
      </div>
    </header>
  );
}
