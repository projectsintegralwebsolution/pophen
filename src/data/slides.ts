export interface HeroSlide {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  highlights: string[];
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "slide-2",
    badge: "PRECISION-ENGINEERED SYSTEMS",
    title: "MODULAR WALL & CEILING ARCHITECTURE",
    subtitle: "SS2000, SL2000 & PM50 Wall Systems",
    description:
      "Airtight modular panels and integrated ceiling grids engineered with rockwool, honeycomb, or PU cores to ISO 14644 standards.",
    image: "/images/hero-banner-pharmaceutical.jpg",
    primaryCtaText: "Explore Our Systems",
    primaryCtaHref: "#products",
    secondaryCtaText: "Discuss Your Project",
    secondaryCtaHref: "#contact",
    highlights: [
      "50–100mm Panel Architecture",
      "Airtight Continuous Gasketing",
      "Integrated FFU Filtration",
      "Flush Coplanar Surfaces",
    ],
  },
  {
    id: "slide-3",
    badge: "CRITICAL INDUSTRY SOLUTIONS",
    title: "CONTAMINATION CONTROL FOR HIGH-TECH",
    subtitle: "Semiconductor, Pharma & Biotech Facilities",
    description:
      "Delivering ISO Class 1 to Class 8 controlled environments for semiconductor wafer fabrication, sterile pharmaceuticals, and biotechnology.",
    image: "/images/hero-banner-cleanroom-inspect.png",
    primaryCtaText: "Explore Our Systems",
    primaryCtaHref: "#industries",
    secondaryCtaText: "Discuss Your Project",
    secondaryCtaHref: "#contact",
    highlights: [
      "ISO 14644 & GMP Compliant",
      "VHP Decontamination Proof",
      "Laminar Flow Integration",
      "Turnkey Project Delivery",
    ],
  },
];
