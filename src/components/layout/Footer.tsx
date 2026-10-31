"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Download,
  Shield,
  Cog,
  Users,
  Leaf,
  Box,
  Layers,
  Headphones,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { Logo } from "@/components/ui/Logo";
import { useEnquiryModal } from "@/context/EnquiryModalContext";

export function Footer() {
  const currentYear = 2026;
  const { openEnquiryModal } = useEnquiryModal();

  const handleOpenConsultation = () => {
    openEnquiryModal("Project Consultation");
  };

  const handleDownloadCatalogue = () => {
    openEnquiryModal("Download Product Catalogue");
  };

  const cleanroomSystems = [
    { name: "Cleanroom Wall Panels", href: "#cleanroom-walls" },
    { name: "Ceiling Systems", href: "#ceilings" },
    { name: "Cleanroom Doors", href: "#doors" },
    { name: "Cleanroom Windows", href: "#cleanroom-windows" },
    { name: "Modular Partitions", href: "#modular-partitions" },
    { name: "Air Units & Systems", href: "#air-units" },
  ];

  const navigationLinks = [
    { name: "About Us", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Industries", href: "#industries" },
    { name: "Process", href: "#process" },
    { name: "Installations", href: "#showcase" },
    { name: "Contact", href: "#contact" },
  ];

  const credentialBadges = [
    { title: "Quality", subtitle: "Engineering", icon: <Shield className="w-5 h-5 text-pophen-cyan" /> },
    { title: "Customised", subtitle: "Solutions", icon: <Cog className="w-5 h-5 text-pophen-cyan" /> },
    { title: "Project", subtitle: "Support", icon: <Users className="w-5 h-5 text-pophen-cyan" /> },
    { title: "Cleaner", subtitle: "Environments", icon: <Leaf className="w-5 h-5 text-pophen-cyan" /> },
  ];

  return (
    <footer className="bg-[#001026] text-white pt-12 pb-8 border-t border-white/10 relative overflow-hidden">
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 1. TOP CTA CONSULTATION BANNER MATCHING REFERENCE */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#001938] via-[#00224d] to-[#00142e] border border-white/15 shadow-2xl mb-14 lg:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Content Area (8 cols on lg) */}
            <div className="p-7 sm:p-9 lg:p-10 lg:col-span-8 space-y-4 relative z-20">
              <span className="text-[14px] sm:text-xs font-bold tracking-widest text-pophen-cyan uppercase block">
                READY TO DISCUSS YOUR PROJECT?
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Let&apos;s Build a Cleaner, Safer Tomorrow
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                Talk to our experts about your cleanroom requirements and find the right solution for your project.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  type="button"
                  onClick={handleOpenConsultation}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs sm:text-sm font-bold bg-[#00a2e8] hover:bg-[#0091d1] text-white shadow-lg transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-pophen-cyan"
                >
                  <span>Request Project Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleDownloadCatalogue}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs sm:text-sm font-semibold bg-transparent hover:bg-white/10 text-white border border-white/30 backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-white/40"
                >
                  <span>Download Product Catalogue</span>
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Cleanroom Hallway Perspective with Architectural Diagonal Slice (4 cols on lg) */}
            <div className="hidden lg:block lg:col-span-4 h-full min-h-[220px] relative overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src="/images/cleanroom-walls-hallway-D4ZV_xh8.webp"
                  alt="Pophen Cleanroom Facility Hallway"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1200px) 33vw, 400px"
                />
                {/* Diagonal Gradient Mask matching reference */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#001938] via-[#001938]/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001026]/80 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* 2. MAIN FOOTER 5-COLUMN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 pb-12">
          {/* Column 1: Brand Info & 4 Credential Badges (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-5">
            <div>
              <Logo variant="white" height={56} />
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              POPHEN specialises in the development, engineering and manufacturing of modular cleanroom architectural systems, supplying pharmaceutical, semiconductor, biotechnology and advanced battery facilities worldwide.
            </p>

            {/* 4 Credential Badges Grid */}
            <div className="pt-2 grid grid-cols-4 gap-1.5 max-w-xs">
              {credentialBadges.map((badge, idx) => (
                <div key={idx} className="flex flex-col items-center text-center space-y-1.5">
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner group-hover:border-pophen-cyan/40 transition-colors">
                    {badge.icon}
                  </div>
                  <div className="text-[12px] sm:text-[13px] font-semibold text-slate-200 leading-tight">
                    {badge.title}
                    <br />
                    {badge.subtitle}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: CLEANROOM SYSTEMS (lg:col-span-2, with left vertical border on desktop) */}
          <div className="lg:col-span-2 lg:border-l lg:border-white/10 lg:pl-6 space-y-4">
            <div className="flex items-center gap-2 text-pophen-cyan">
              <Box className="w-4 h-4 text-pophen-cyan flex-shrink-0" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-pophen-cyan">
                CLEANROOM SYSTEMS
              </h3>
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm">
              {cleanroomSystems.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-slate-300 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-pophen-cyan/70 group-hover:translate-x-0.5 group-hover:text-pophen-cyan transition-all" />
                    <span className="leading-snug">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: NAVIGATION (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-pophen-cyan">
              <Layers className="w-4 h-4 text-pophen-cyan flex-shrink-0" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-pophen-cyan">
                NAVIGATION
              </h3>
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm">
              {navigationLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-slate-300 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-pophen-cyan/70 group-hover:translate-x-0.5 group-hover:text-pophen-cyan transition-all" />
                    <span className="leading-snug">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: CONTACT POPHEN (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-pophen-cyan">
              <Headphones className="w-4 h-4 text-pophen-cyan flex-shrink-0" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-pophen-cyan">
                CONTACT POPHEN
              </h3>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-pophen-cyan flex-shrink-0 mt-0.5" />
                <span className="leading-snug text-xs">
                  {COMPANY_INFO.address.line1}, {COMPANY_INFO.address.line2}, {COMPANY_INFO.address.city} - {COMPANY_INFO.address.postalCode}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-pophen-cyan flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white transition-colors text-xs font-medium">
                  {COMPANY_INFO.formattedPhone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-pophen-cyan flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors text-xs">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-3.5 h-3.5 text-pophen-cyan flex-shrink-0" />
                <span className="text-xs text-slate-300">Mon - Sat: 9:00 AM – 6:00 PM (IST)</span>
              </li>
            </ul>

            {/* Direct WhatsApp Enquiry Button with green glow */}
            <div className="pt-2">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                  COMPANY_INFO.whatsappPrefill
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-3.5 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold shadow-md shadow-[#25D366]/20 transition-all hover:scale-[1.02]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-white flex-shrink-0"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>Direct WhatsApp Enquiry</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 5: Dotted World Map Graphic & Tagline (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col justify-between space-y-4">
            {/* High-tech Full World Map Vector Graphic */}
            <div className="w-full relative h-36 sm:h-44 flex items-center justify-center p-2 rounded-xl bg-[#001026]/50 border border-white/5 shadow-inner overflow-hidden group">
              <Image
                src="/images/world-map-pro.svg"
                alt="POPHEN International Cleanroom Engineering Network"
                fill
                unoptimized
                className="object-contain object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Slogan */}
            <div className="space-y-1">
              <span className="text-[13px] font-bold uppercase tracking-wider text-pophen-cyan block">
                DELIVERING CLEANROOM SOLUTIONS
              </span>
              <h4 className="text-sm font-extrabold text-white tracking-tight leading-snug">
                FOR A CLEANER TOMORROW
              </h4>
              <div className="h-0.5 w-12 bg-pophen-cyan mt-1.5" />
            </div>
          </div>
        </div>

        {/* 3. BOTTOM COPYRIGHT & EXACT DEVELOPER CREDIT BAR */}
        <div className="pt-6 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          {/* Left: Copyright */}
          <div className="flex flex-wrap items-center gap-2 text-center lg:text-left">
            <span>&copy; {currentYear} {COMPANY_INFO.legalName}. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="text-slate-400">Cleanroom Architectural Systems.</span>
          </div>

          {/* Center: Legal Links */}
          <div className="flex items-center gap-3 text-[14px] text-slate-400">
            <Link href="#about" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-slate-600">|</span>
            <Link href="#process" className="hover:text-white transition-colors">Terms of Use</Link>
            <span className="text-slate-600">|</span>
            <Link href="#contact" className="hover:text-white transition-colors">Sitemap</Link>
          </div>

          {/* Right: Social Icons */}
          <div className="flex items-center gap-2 text-[14px]">
            <span className="text-slate-400 mr-1">Follow Us</span>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-md bg-white/10 hover:bg-pophen-blue text-white flex items-center justify-center transition-colors"
              aria-label="POPHEN on LinkedIn"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.68 1.68 0 1 0 0-3.36 1.68 1.68 0 0 0 0 3.36m1.39 9.74v-8.37H5.07v8.37h2.78z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-md bg-white/10 hover:bg-pophen-blue text-white flex items-center justify-center transition-colors"
              aria-label="POPHEN on YouTube"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-md bg-white/10 hover:bg-pophen-blue text-white flex items-center justify-center transition-colors"
              aria-label="POPHEN on Facebook"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
