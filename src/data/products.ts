export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductItem {
  id: string;
  name: string;
  shortName: string;
  category: string;
  tagline: string;
  description: string;
  extendedDescription: string;
  image: string;
  secondaryImage?: string;
  variants?: string[];
  specs: ProductSpec[];
  features: string[];
  applications: string[];
}

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "cleanroom-walls",
    name: "Cleanroom Wall Panels",
    shortName: "Cleanroom Wall Panels",
    category: "Wall Systems",
    tagline: "High-performance wall panel systems for controlled environments",
    description:
      "Modular panel solutions designed for strict contamination control. Available in 50mm to 100mm thicknesses with rock wool, aluminum honeycomb, or PU insulation cores.",
    extendedDescription:
      "Pophen wall systems offer sound and thermal insulation cores with complete airtight sealing. Fully compatible with semiconductor fabrication, pharmaceutical manufacturing, and biotechnology laboratory requirements.",
    image: "/images/cleanroom-walls-detail-CJABaUMG.webp",
    secondaryImage: "/images/cleanroom-walls-hallway-D4ZV_xh8.webp",
    variants: [
      "POPHEN SS2000 Modular Stud Wall System",
      "POPHEN SL2000 Stud-less Modular Wall System",
      "POPHEN PM50 Pharmaceutical GMP Wall System",
      "POPHEN CL2000 Cladding Wall System",
    ],
    specs: [
      { label: "Thickness", value: "50 mm – 100 mm" },
      { label: "Max Height", value: "Up to 6.0 meters" },
      { label: "Core Materials", value: "Rock wool / Aluminum honeycomb / PU" },
      { label: "Surface Finish", value: "0.6mm Galvanized Steel, SS 304/316, or HPL" },
      { label: "Coatings", value: "Anti-microbial, Food-grade PVC, or Powder Coated" },
      { label: "Compliance", value: "ISO 14644 & GMP Standards" },
    ],
    features: [
      "Seamless flush jointing for sterile wipe-down",
      "Excellent acoustic and thermal insulation performance",
      "Fast modular assembly and demountability for layout modifications",
      "High chemical resistance against aggressive sanitizers",
    ],
    applications: ["Semiconductor Fabs", "Pharmaceutical GMP Areas", "Biotech Labs", "Medical Devices"],
  },
  {
    id: "ceilings",
    name: "Ceiling Systems",
    shortName: "Ceiling Systems",
    category: "Ceiling Systems",
    tagline: "Modular and integrated ceiling solutions with lighting and FFU",
    description:
      "High-precision aluminum suspension grid systems integrated with powder-coated steel panels, HEPA/ULPA filtration modules, and teardrop LED fixtures.",
    extendedDescription:
      "Integrates seamlessly with cleanroom lighting fixtures, HEPA/ULPA Fan Filter Units (FFUs), sprinklers, and service modules while maintaining airtight integrity under positive/negative pressure conditions.",
    image: "/images/cleanroom-ceilings-hero-d8AQO7Df.webp",
    secondaryImage: "/images/cleanroom-ceilings-detail-H-esTC_Q.webp",
    variants: [
      "Heavy-duty Walkable Ceiling Grid System",
      "Non-Walkable Flush Aluminum Grid Ceiling",
      "Modular Integrated FFU Filter Ceiling Module",
    ],
    specs: [
      { label: "Grid Structure", value: "High-precision extruded aluminum alloy" },
      { label: "Panel Material", value: "Pre-coated steel / Aluminum sandwich" },
      { label: "FFU Integration", value: "Standard 2x2 ft & 2x4 ft filter modules" },
      { label: "Sealing", value: "Continuous airtight closed-cell gaskets" },
      { label: "Walkability", value: "Options for heavy maintenance service loads" },
      { label: "Standard", value: "ISO Class 1 to Class 8 Controlled Environments" },
    ],
    features: [
      "Direct integration of HEPA/ULPA filter units and flush LED teardrop lights",
      "Superior structural rigidity and deflection resistance",
      "Airtight joint seals preventing particle penetration",
      "Accessible plenum design for routine HVAC servicing",
    ],
    applications: ["Wafer Fabrication", "Sterile Injectables Suites", "Nanotechnology Labs", "Electronics Assembly"],
  },
  {
    id: "doors",
    name: "Cleanroom Doors",
    shortName: "Cleanroom Doors",
    category: "Door Systems",
    tagline: "Hermetic and high-integrity doors for critical areas",
    description:
      "Flush-mounted cleanroom doors featuring insulated cores, durable chemical-resistant skins, flush double-glazed safety glass, and automatic drop-down threshold seals.",
    extendedDescription:
      "Designed as a unified integrated system with modular walls. Supports interlock systems, automatic pneumatic or electro-mechanical swing/sliding operators, flush vision panels, and airtight drop-down threshold seals.",
    image: "/images/cleanroom-doors-hero-D007b7fJ.webp",
    secondaryImage: "/images/cleanroom-another-doors-BJnydDlw.webp",
    variants: [
      "Pophen Standard Single Cleanroom Door",
      "Pophen Heavy-Duty Double Leaf Cleanroom Door",
      "Automatic Sliding Hermetic Cleanroom Door",
      "Interlocking Air Lock Transfer Door",
    ],
    specs: [
      { label: "Door Thickness", value: "50 mm standard flush profile" },
      { label: "Frame Material", value: "Anodized or powder-coated aluminum profile" },
      { label: "Infill Core", value: "High-density polyurethane or rock wool" },
      { label: "Skin Material", value: "Galvanized powder-coated steel or HPL" },
      { label: "Airtight Seal", value: "4-sided perimeter silicone + auto drop seal" },
      { label: "Vision Panel", value: "Flush-mounted double glazed safety glass" },
    ],
    features: [
      "Completely flush frame-to-wall integration eliminating ledges",
      "Drop-down bottom seal activates upon door closure for airtightness",
      "Chemical and disinfectant proof finish for frequent cleaning",
      "Full compatibility with cleanroom access control and airlock interlocks",
    ],
    applications: ["Pharmaceutical Airlocks", "Biosecurity Suites", "Semiconductor Entry Vestibules", "Hospitals"],
  },
  {
    id: "cleanroom-windows",
    name: "Cleanroom Windows",
    shortName: "Cleanroom Windows",
    category: "Window Systems",
    tagline: "Flush double glazed windows for controlled viewing",
    description:
      "Double-layer tempered safety glass integrated within precision aluminum frames. Coplanar on both wall sides to eliminate dust-collecting sills and simplify biocide wipe-downs.",
    extendedDescription:
      "Internal desiccant-filled spacers prevent condensation and moisture buildup. Surfaces are coplanar with both wall faces to eliminate dust-collecting sills and simplify routine biocide wipe-down protocols.",
    image: "/images/cleanroom-windows-hero-eqB039vc.webp",
    secondaryImage: "/images/cleanroom-windows-doctor-CVbH--Sj.webp",
    variants: [
      "Pophen Double-Glass Flush Window Panel",
      "Pophen Standard Observation Window",
      "Laser/Radiation Shielded Cleanroom Window",
    ],
    specs: [
      { label: "Glass Type", value: "5 mm – 8 mm Tempered safety glass" },
      { label: "Configuration", value: "Double glazed flush on both wall faces" },
      { label: "Spacer", value: "Aluminum spacer with molecular sieve desiccant" },
      { label: "Frame", value: "Extruded aluminum profile matching wall thickness" },
      { label: "Condensation", value: "Anti-fog, hermetically sealed cavity" },
      { label: "Corner Profile", value: "Square or rounded sanitary radius options" },
    ],
    features: [
      "Coplanar flush design on both sides of 50mm or 100mm walls",
      "Hermetically sealed cavity preventing dust ingress and moisture fogging",
      "High impact resistance with shatter-resistant safety glass",
      "Sanitary rounded corners available for pharmaceutical GMP compliance",
    ],
    applications: ["Cleanroom Corridors", "Process Observation Rooms", "Sterile Filling Lines", "Hospital ICUs"],
  },
  {
    id: "modular-partitions",
    name: "Modular Partitions",
    shortName: "Modular Partitions",
    category: "Partition Systems",
    tagline: "Flexible partition systems for cleanroom spaces",
    description:
      "Demountable partition systems designed for reconfigurable cleanroom suites, airlocks, personnel transfer corridors, and process segregation barriers.",
    extendedDescription:
      "Pophen modular partitions provide high structural stability and acoustic dampening while allowing facility layouts to expand or reconfigure with minimal downtime.",
    image: "/images/cleanroom-systems-interior-Z8QHFfaO.webp",
    secondaryImage: "/images/about-cleanroom-hero-CfcjiI0h.webp",
    variants: [
      "Full-height Modular Interlocking Partitions",
      "Demountable Process Separation Screens",
      "Airlock & Gowning Suite Partitions",
    ],
    specs: [
      { label: "Thickness", value: "50 mm / 60 mm / 80 mm" },
      { label: "Structure", value: "Internal aluminum studwork with hidden fasteners" },
      { label: "Finish", value: "Electrostatic powder-coated steel or compact HPL" },
      { label: "Acoustics", value: "Rw up to 42 dB sound attenuation" },
      { label: "Reconfigurability", value: "100% reusable demountable components" },
      { label: "Cleanliness", value: "Compatible with ISO 14644 Class 1 to 8" },
    ],
    features: [
      "Quick dry-construction assembly reducing site dust",
      "Integrated vertical utility raceways for cabling and piping",
      "Non-outgassing silicone and EPDM joint gaskets",
      "Complete aesthetic match with Pophen wall and ceiling grids",
    ],
    applications: ["Semiconductor Clean Zones", "Pharma Packaging Suites", "R&D Pilot Lines", "Electronics Assembly"],
  },
  {
    id: "air-units",
    name: "Air Units & Systems",
    shortName: "Air Units & Systems",
    category: "Air & Filtration",
    tagline: "Laminar flow and FFU systems for clean air",
    description:
      "Self-contained Fan Filter Units (FFUs), mobile clean air stations, and localized laminar airflow workstations providing localized ISO Class 5 particulate protection.",
    extendedDescription:
      "Designed for laboratories, healthcare clinics, and high-precision electronics workshops requiring immediate clean air protection without the capital expenditure of constructing a dedicated full-scale cleanroom facility.",
    image: "/images/mobile-cleanair-unit-CWd-RN4y.webp",
    secondaryImage: "/images/mobile-cleanair-clinic-unit-XdSdwqDK.webp",
    variants: [
      "Pophen Mobile Clean Air Unit (FFU + HEPA/ULPA)",
      "Laboratory Laminar Airflow Workstation",
      "Medical Clean Air Clinic System",
    ],
    specs: [
      { label: "Filtration", value: "HEPA (99.99% @ 0.3μm) or ULPA (99.999% @ 0.12μm)" },
      { label: "Airflow Pattern", value: "Vertical or horizontal stable laminar airflow" },
      { label: "Air Velocity", value: "0.35 – 0.50 m/s adjustable" },
      { label: "Noise Level", value: "< 58 dBA low-noise acoustic casing" },
      { label: "Mobility", value: "Heavy-duty lockable cleanroom-grade casters" },
      { label: "Power Supply", value: "220V / 50Hz single phase energy-efficient motor" },
    ],
    features: [
      "Immediate plug-and-play operation with no complex ductwork needed",
      "Stable unidirectional laminar airflow sweeping particles away",
      "Low noise and energy-efficient fan motor for quiet lab operation",
      "Compact footprint, easily relocatable between lab and manufacturing lines",
    ],
    applications: ["R&D Research Labs", "Electronics Calibration", "Hospital Sample Prep", "Biotech Clean Benches"],
  },
];
