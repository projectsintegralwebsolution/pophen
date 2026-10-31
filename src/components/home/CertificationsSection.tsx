"use client";

import { useState } from "react";
import { ArrowRight, X, ShieldCheck, FileText, CheckCircle2 } from "lucide-react";
import { useEnquiryModal } from "@/context/EnquiryModalContext";

interface CertificationItem {
  id: string;
  code: string;
  label: string;
  standardTitle: string;
  scope: string;
  applicableSystems: string[];
  verificationNote: string;
}

const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "iso",
    code: "ISO",
    label: "Cleanroom & Environmental Standards",
    standardTitle: "ISO 14644 & ISO 14001 Standards",
    scope:
      "Cleanroom classification, particulate air cleanliness compliance (ISO Class 1–8), and environmental management system standards for manufacturing operations.",
    applicableSystems: [
      "Cleanroom Wall Panels (SS2000, SL2000, PM50)",
      "Modular Ceiling Grid & FFU Systems",
      "Modular Partitions & Airlocks",
    ],
    verificationNote:
      "System configurations are engineered to meet project-specified ISO 14644 cleanliness classes and ISO 14001 environmental management practices. Project-specific certificates are provided upon request.",
  },
  {
    id: "gmp",
    code: "GMP",
    label: "Good Manufacturing Practice",
    standardTitle: "GMP Cleanroom Architectural Compliance",
    scope:
      "Flush, non-porous, chemical-resistant surfaces, sanitary coving, and airtight joint details engineered for Grade A–D pharmaceutical and biotech environments.",
    applicableSystems: [
      "PM50 Pharmaceutical GMP Wall Systems",
      "Hermetic Cleanroom Doors",
      "Flush Double-Glazed Cleanroom Windows",
    ],
    verificationNote:
      "Designed in accordance with WHO-GMP, EU-GMP, and FDA cGMP cleanroom architectural finish and cleanability guidelines.",
  },
  {
    id: "ce",
    code: "CE",
    label: "European Conformity",
    standardTitle: "CE Marking & European Directives Compliance",
    scope:
      "Conformity with applicable European health, safety, and environmental protection legislation for designated cleanroom components and electrical air filtration units.",
    applicableSystems: [
      "Fan Filter Units (FFUs) & Clean Air Stations",
      "Automated Cleanroom Door Operators",
      "Integrated Cleanroom LED Lighting",
    ],
    verificationNote:
      "Applicable to designated electrical and mechanical cleanroom assemblies. Model-specific Declarations of Conformity are available via our engineering desk.",
  },
  {
    id: "fm",
    code: "FM",
    label: "FM Approvals",
    standardTitle: "FM Fire & Material Performance Standards",
    scope:
      "Fire-resistant core material selection and structural integrity testing for industrial cleanroom envelopes in high-tech semiconductor and battery facilities.",
    applicableSystems: [
      "Rock Wool Core Cleanroom Wall Panels",
      "Aluminum Honeycomb Core Systems",
      "High-Integrity Partition Assemblies",
    ],
    verificationNote:
      "Specific panel core configurations are available to satisfy FM and project fire-rating specifications. Consult POPHEN engineering for certified core options.",
  },
  {
    id: "sgs",
    code: "SGS",
    label: "Testing & Inspection",
    standardTitle: "SGS Material Testing & Verification",
    scope:
      "Independent third-party laboratory testing for surface coating durability, antibacterial resistance, acoustic attenuation, and panel load performance.",
    applicableSystems: [
      "Pre-Coated Galvanized & Stainless Steel Skins",
      "Anti-Microbial & HPL Surface Finishes",
      "Walkable Ceiling Grid Assemblies",
    ],
    verificationNote:
      "Material test reports for specific batch coatings and core assemblies are supplied as part of project DQ/IQ handover documentation.",
  },
  {
    id: "tuv",
    code: "TÜV",
    label: "Product Certification",
    standardTitle: "TÜV Quality & Technical Inspection",
    scope:
      "Technical safety, air leakage resistance, and mechanical endurance verification for modular cleanroom components and filtration assemblies.",
    applicableSystems: [
      "Modular Cleanroom Envelope Systems",
      "Hermetic Door Seals & Interlocks",
      "Laminar Airflow Workstations",
    ],
    verificationNote:
      "Component inspection and quality verification documentation is available per product line and project specification.",
  },
];

export function CertificationsSection() {
  const { openEnquiryModal } = useEnquiryModal();
  const [activeCert, setActiveCert] = useState<CertificationItem | null>(null);
  const [showAllModal, setShowAllModal] = useState(false);

  const renderBadgeEmblem = (id: string) => {
    switch (id) {
      case "iso":
        return (
          <svg viewBox="0 0 100 84" className="w-16 h-14 text-pophen-navy">
            {/* Outer Globe & Laurel Ring */}
            <circle
              cx="50"
              cy="42"
              r="30"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="4 2"
            />
            <circle
              cx="50"
              cy="42"
              r="25"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            {/* Globe latitude/longitude arcs */}
            <ellipse
              cx="50"
              cy="42"
              rx="13"
              ry="25"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.35"
            />
            <line
              x1="25"
              y1="32"
              x2="75"
              y2="32"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.35"
            />
            <line
              x1="25"
              y1="52"
              x2="75"
              y2="52"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.35"
            />
            {/* Center white band for ISO text */}
            <rect x="22" y="29" width="56" height="22" rx="2" fill="#ffffff" />
            <text
              x="50"
              y="45"
              textAnchor="middle"
              fill="currentColor"
              fontSize="18"
              fontWeight="900"
              fontFamily="sans-serif"
              letterSpacing="0.5"
            >
              ISO
            </text>
            <text
              x="50"
              y="62"
              textAnchor="middle"
              fill="currentColor"
              fontSize="7.5"
              fontWeight="800"
              fontFamily="sans-serif"
            >
              14001 • 14644
            </text>
          </svg>
        );
      case "gmp":
        return (
          <svg viewBox="0 0 100 84" className="w-16 h-14 text-pophen-navy">
            <circle
              cx="50"
              cy="42"
              r="29"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
            />
            <circle
              cx="50"
              cy="42"
              r="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeDasharray="3 2"
            />
            <circle
              cx="50"
              cy="42"
              r="19"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <text
              x="50"
              y="46"
              textAnchor="middle"
              fill="currentColor"
              fontSize="13.5"
              fontWeight="900"
              fontFamily="sans-serif"
              letterSpacing="0.5"
            >
              GMP
            </text>
          </svg>
        );
      case "ce":
        return (
          <svg viewBox="0 0 100 84" className="w-16 h-14 text-pophen-navy">
            {/* Authentic Geometric CE Mark */}
            <path
              d="M 44 22 A 20 20 0 1 0 44 62"
              fill="none"
              stroke="currentColor"
              strokeWidth="6.5"
              strokeLinecap="butt"
            />
            <path
              d="M 80 22 A 20 20 0 1 0 80 62"
              fill="none"
              stroke="currentColor"
              strokeWidth="6.5"
              strokeLinecap="butt"
            />
            <line
              x1="60"
              y1="42"
              x2="76"
              y2="42"
              stroke="currentColor"
              strokeWidth="6.5"
            />
          </svg>
        );
      case "fm":
        return (
          <svg viewBox="0 0 120 84" className="w-20 h-14 text-pophen-navy">
            {/* Diamond Outline */}
            <polygon
              points="60,12 104,37 60,62 16,37"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.8"
            />
            <text
              x="60"
              y="43"
              textAnchor="middle"
              fill="currentColor"
              fontSize="17"
              fontWeight="900"
              fontFamily="sans-serif"
            >
              FM
            </text>
            <text
              x="60"
              y="74"
              textAnchor="middle"
              fill="currentColor"
              fontSize="9"
              fontWeight="800"
              fontFamily="sans-serif"
              letterSpacing="1"
            >
              APPROVED
            </text>
          </svg>
        );
      case "sgs":
        return (
          <svg viewBox="0 0 110 84" className="w-18 h-14 text-slate-700">
            <text
              x="55"
              y="52"
              textAnchor="middle"
              fill="currentColor"
              fontSize="31"
              fontWeight="900"
              fontFamily="sans-serif"
              letterSpacing="-0.5"
            >
              SGS
            </text>
            <line
              x1="18"
              y1="60"
              x2="92"
              y2="60"
              stroke="#94a3b8"
              strokeWidth="2"
            />
          </svg>
        );
      case "tuv":
      default:
        return (
          <svg viewBox="0 0 100 84" className="w-16 h-14 text-pophen-navy">
            <circle
              cx="50"
              cy="42"
              r="28"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.8"
            />
            <circle
              cx="50"
              cy="42"
              r="23"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <text
              x="50"
              y="48"
              textAnchor="middle"
              fill="currentColor"
              fontSize="15.5"
              fontWeight="900"
              fontFamily="sans-serif"
            >
              TÜV
            </text>
          </svg>
        );
    }
  };

  return (
    <section
      id="certifications"
      className="py-16 lg:py-20 bg-gradient-to-b from-[#f4f9fd] to-white relative overflow-hidden border-b border-slate-200/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading & Top-Right "View All Certificates" Button */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-pophen-blue block mb-1.5">
              CERTIFICATIONS &amp; COMPLIANCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-pophen-navy tracking-tight">
              Trusted. Tested. Certified.
            </h2>
          </div>

          <div className="flex-shrink-0">
            <button
              type="button"
              onClick={() => setShowAllModal(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-pophen-blue bg-white hover:bg-pophen-blue/5 border border-pophen-blue/40 transition-all shadow-2xs group focus:outline-none focus:ring-2 focus:ring-pophen-cyan"
            >
              <span>View All Certificates</span>
              <ArrowRight className="w-4 h-4 text-pophen-blue group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Six Certification Cards Row (Desktop: 6 cols, Tablet: 3 cols, Mobile: 2 cols) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 items-stretch">
          {CERTIFICATIONS_DATA.map((cert) => (
            <button
              key={cert.id}
              type="button"
              onClick={() => setActiveCert(cert)}
              className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-pophen-blue/40 transition-all duration-200 flex flex-col items-center justify-between text-center group h-full min-h-[148px] focus:outline-none focus:ring-2 focus:ring-pophen-cyan"
              aria-label={`View compliance details for ${cert.standardTitle}`}
            >
              {/* Prominent Center Certification Emblem */}
              <div className="flex items-center justify-center flex-1 py-1 group-hover:scale-105 transition-transform duration-200">
                {renderBadgeEmblem(cert.id)}
              </div>

              {/* Short Certification Label Underneath */}
              <span className="text-[14px] font-semibold text-slate-600 group-hover:text-pophen-navy leading-snug mt-2 block">
                {cert.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Single Certificate Details Modal */}
      {activeCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-pophen-navy-950/60 backdrop-blur-xs"
          onClick={() => setActiveCert(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-7 border border-slate-200 shadow-2xl relative space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3.5">
                <div className="p-2 rounded-xl bg-[#f4f9fd] border border-blue-100">
                  {renderBadgeEmblem(activeCert.id)}
                </div>
                <div>
                  <span className="text-[13px] font-bold uppercase tracking-wider text-pophen-blue block">
                    COMPLIANCE &amp; STANDARDS SCOPE
                  </span>
                  <h3
                    id="cert-modal-title"
                    className="text-lg sm:text-xl font-extrabold text-pophen-navy leading-snug"
                  >
                    {activeCert.standardTitle}
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveCert(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Close certificate details"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-600">
              <p className="leading-relaxed">{activeCert.scope}</p>

              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-pophen-navy">
                  Applicable Cleanroom Systems
                </div>
                <ul className="space-y-1.5">
                  {activeCert.applicableSystems.map((sys, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-pophen-blue flex-shrink-0" />
                      <span>{sys}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#f0f6fa] border border-blue-100 text-xs text-slate-700">
                <ShieldCheck className="w-4 h-4 text-pophen-blue flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">{activeCert.verificationNote}</p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-end gap-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setActiveCert(null)}
                className="px-4 py-2.5 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  const title = activeCert.standardTitle;
                  setActiveCert(null);
                  openEnquiryModal(`Certificate & Documentation Request: ${title}`);
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold bg-pophen-blue hover:bg-pophen-blue-hover text-white shadow-sm transition-all"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Request Official Documentation</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View All Certificates Directory Modal */}
      {showAllModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-pophen-navy-950/60 backdrop-blur-xs overflow-y-auto"
          onClick={() => setShowAllModal(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="all-certs-modal-title"
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full p-6 sm:p-8 border border-slate-200 shadow-2xl relative my-8 max-h-[88vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-pophen-blue block">
                  CERTIFICATIONS &amp; COMPLIANCE DIRECTORY
                </span>
                <h3
                  id="all-certs-modal-title"
                  className="text-xl sm:text-2xl font-extrabold text-pophen-navy"
                >
                  POPHEN Quality, Testing &amp; Cleanroom Standards
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowAllModal(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Close directory"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {CERTIFICATIONS_DATA.map((cert) => (
                <div
                  key={cert.id}
                  className="rounded-xl p-4 border border-slate-200/90 bg-slate-50/60 flex flex-col justify-between space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white border border-slate-200/80 flex-shrink-0">
                      {renderBadgeEmblem(cert.id)}
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-pophen-navy">
                        {cert.standardTitle}
                      </h4>
                      <span className="text-xs text-pophen-blue font-semibold">
                        {cert.label}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cert.scope}
                  </p>
                  <p className="text-[13px] text-slate-500 italic">
                    {cert.verificationNote}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
              <p className="text-xs text-slate-600">
                Need project-specific test reports, material certificates, or DQ/IQ compliance dossiers?
              </p>
              <div className="flex items-center gap-3 flex-shrink-0">
                <button
                  type="button"
                  onClick={() => setShowAllModal(false)}
                  className="px-4 py-2.5 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowAllModal(false);
                    openEnquiryModal("Complete Certification & Test Report Package");
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold bg-pophen-blue hover:bg-pophen-blue-hover text-white shadow-sm transition-all"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Request Certificate Package</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
