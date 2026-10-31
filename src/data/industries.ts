export interface IndustryItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  requirements: string[];
  image: string;
  standards: string[];
}

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: "pharmaceutical",
    name: "Pharmaceutical",
    tagline: "Controlled environments for safe and compliant production",
    description:
      "Pharmaceutical production requires validated sterile conditions to prevent microbiological and cross-contamination. Pophen cleanroom systems feature flush, non-shedding surfaces, sanitary coving integration, and continuous resistance to biocide cleaning chemicals.",
    requirements: [
      "Smooth flush wall and ceiling transitions without dust-retaining ledges",
      "Hermetically sealed doors and interlocking airlock systems",
      "Surfaces compatible with aggressive hydrogen peroxide (VHP) decontamination",
      "Positive and negative pressure gradient control",
    ],
    image: "/images/life-science-CFnV1sC8.webp",
    standards: ["EU GMP Grades A–D", "US FDA 21 CFR", "ISO 14644-1"],
  },
  {
    id: "semiconductor",
    name: "Semiconductor",
    tagline: "Precision environments for advanced manufacturing",
    description:
      "Microchip fabrication and precision electronic manufacturing demand stringently controlled environments to prevent microscopic particulate contamination. Pophen modular wall, ceiling, and filtration systems deliver ISO Class 1 to Class 5 cleanroom conditions.",
    requirements: [
      "Ultra-low airborne particulate concentrations",
      "Electrostatic discharge (ESD) safe surfaces",
      "Vibration dampening and high rigidity ceiling structures",
      "Chemical-resistant and outgassing-free building materials",
    ],
    image: "/images/high-tech-shhypHUg.webp",
    standards: ["ISO 14644 Class 1–5", "ESD Safe", "Airtight Seal"],
  },
  {
    id: "biotechnology",
    name: "Biotechnology",
    tagline: "Reliable cleanroom systems for research and manufacturing",
    description:
      "From gene therapies to vaccine formulation, modern biotechnology relies on uncompromising sterility and controlled airflow. Pophen delivers integrated cleanrooms, clean air laminar workstations, and clean pass-throughs for high-containment laboratories.",
    requirements: [
      "Precision temperature, relative humidity, and airflow velocity regulation",
      "Laminar flow workstations for critical biological handling",
      "Full cleanroom envelope containment preventing bio-hazard leakage",
      "Modular scalability for growing biotech research pipelines",
    ],
    image: "/images/contact-lab-D3gJ63O9.webp",
    standards: ["BSL-2 / BSL-3 Compatible", "ISO Class 6–7", "GMP Validation"],
  },
  {
    id: "battery-energy",
    name: "Battery & New Energy",
    tagline: "Cleanroom solutions for next-generation energy technologies",
    description:
      "Lithium-ion battery cell manufacturing, dry rooms, and advanced renewable energy research require ultra-low moisture dew points and particulate control to ensure cell purity and life cycle integrity.",
    requirements: [
      "Ultra-dry room sealing with continuous moisture barrier",
      "High thermal stability and heavy ceiling load support for HVAC ducts",
      "Corrosion-resistant finishes for chemical electrolyte handling",
      "Large-scale modular construction for gigafactory expansions",
    ],
    image: "/images/cleanroom-walls-hallway-D4ZV_xh8.webp",
    standards: ["Dry Room Spec (< -40°C dp)", "ISO Class 6–8", "Industrial Rigidity"],
  },
];
