export interface StrengthItem {
  id: string;
  title: string;
  description: string;
  highlight: string;
  iconName: "ShieldCheck" | "Layers" | "Award" | "Wrench" | "Compass" | "Globe";
}

export const WHY_CHOOSE_POPHEN: StrengthItem[] = [
  {
    id: "engineering-excellence",
    title: "Engineering & Design Expertise",
    description:
      "Backed by decades of specialized engineering experience, Pophen develops tailored cleanroom architectures from conceptual airflow planning to turnkey installation.",
    highlight: "Turnkey Engineering",
    iconName: "Compass",
  },
  {
    id: "precision-manufacturing",
    title: "Precision Modular Manufacturing",
    description:
      "Our modular wall panels (SS2000, SL2000, PM50) and ceiling systems are fabricated with tight tolerances, using rockwool, aluminum honeycomb, or PU cores for maximum structural rigidity.",
    highlight: "50–100mm Modular Panels",
    iconName: "Layers",
  },
  {
    id: "compliance-standards",
    title: "ISO & GMP Cleanliness Compliance",
    description:
      "Engineered to satisfy strict international standards including ISO 14644 Class 1 to Class 8, EU GMP Grades A–D, and US FDA requirements for controlled environments.",
    highlight: "ISO & GMP Certified Standards",
    iconName: "Award",
  },
  {
    id: "airtight-integrity",
    title: "Hermetic Sealing & Airtight Durability",
    description:
      "All wall, ceiling, door, and window interfaces are designed as a unified system with continuous airtight gaskets, auto drop-down seals, and flush coplanar surfaces.",
    highlight: "Zero Dust-Retaining Ledges",
    iconName: "ShieldCheck",
  },
  {
    id: "turnkey-support",
    title: "End-to-End Project Support",
    description:
      "From architectural layout and filtration sizing to onsite installation, protocol training, and maintenance, we accompany your facility through every project phase.",
    highlight: "Full Lifecycle Partnership",
    iconName: "Wrench",
  },
  {
    id: "global-collaboration",
    title: "International Technology Standards",
    description:
      "Through international technology partnerships, Pophen introduces modern cleanroom innovations to meet the high standards demanded by global pharmaceutical and semiconductor manufacturers.",
    highlight: "Worldwide Best Practices",
    iconName: "Globe",
  },
];
