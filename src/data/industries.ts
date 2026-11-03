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
    id: "semiconductor",
    name: "Semiconductor",
    tagline: "Ultra-low particulate control for nanometer wafer fabrication",
    description:
      "Microchip fabrication and photolithography demand stringently controlled environments to eliminate microscopic particulate contamination and chemical outgassing. Pophen modular wall, ceiling, and FFU filtration systems deliver ISO Class 1 to Class 5 cleanroom conditions with vibration dampening and ESD-safe finishes.",
    requirements: [
      "Ultra-low airborne particulate concentrations (ISO Class 1–5)",
      "Electrostatic discharge (ESD) safe surfaces & grounding",
      "Vibration-dampened walkable ceiling structures for FFU arrays",
      "Chemical-resistant and low-outgassing building materials",
    ],
    image: "/images/high-tech-shhypHUg.webp",
    standards: ["ISO 14644 Class 1–5", "ESD Safe", "Airtight Seal"],
  },
  {
    id: "battery",
    name: "Battery Dryroom & Cleanroom Solutions",
    tagline: "Ultra-low dew point dryrooms & contamination-controlled gigafactories",
    description:
      "Lithium-ion and solid-state battery cell manufacturing demands two distinct critical environments: ultra-low humidity Battery Dryrooms (maintaining continuous dew points from -40°C down to -60°C for electrode winding, cell assembly, and electrolyte filling) and ISO-classified Cleanrooms (for cathode/anode preparation, slurry mixing, and coating). Pophen delivers airtight modular envelopes with continuous hermetic vapor barriers, thermal bridge prevention, and structural rigidity for high-volume gigafactories.",
    requirements: [
      "Ultra-low humidity dryroom sealing (dew point ≤ -40°C to -60°C)",
      "Continuous hermetic vapor-barrier gasketing & thermal isolation",
      "ISO Class 6 to Class 8 cleanrooms for electrode slurry & mixing",
      "Heavy-duty walkable ceilings supporting massive dehumidification ducting",
    ],
    image: "/images/hero-banner-pharmaceutical.jpg",
    standards: ["Dryroom Dew Point ≤ -50°C", "ISO Class 6–8", "Vapor-Tight Envelope"],
  },
  {
    id: "data-centre",
    name: "Data Centre",
    tagline: "Airtight white space containment & precision thermal isolation",
    description:
      "Modern hyperscale and enterprise data centres require sealed white-space architectures to optimize hot/cold aisle containment, prevent air leakage, and protect sensitive server hardware from particulate infiltration. Pophen provides modular partition walls, airtight access doors, and ceiling containment panels engineered for high fire ratings, thermal insulation, and seamless cable/duct penetrations.",
    requirements: [
      "Hot and cold aisle airflow containment systems",
      "Modular fire-rated wall & partition panels with high acoustic dampening",
      "Airtight technical access doors with interlocking security controls",
      "Structural ceiling containment supporting heavy cable trays & overhead busways",
    ],
    image: "/images/cleanroom-targets-CgQy0Dmj.webp",
    standards: ["ASHRAE TC 9.9 Compliant", "Class A Fire Rated", "Thermal Isolation"],
  },
  {
    id: "solar-cell",
    name: "Solar Cell",
    tagline: "Controlled clean bays for high-efficiency photovoltaic wafer & module manufacturing",
    description:
      "High-efficiency solar cell fabrication (TOPCon, HJT, and Perovskite-Silicon tandems) requires cleanroom conditions during silicon slicing, chemical texturing, diffusion, and thin-film coating to avoid defective carrier recombination. Pophen supplies chemical-resistant modular panels, flush cleanroom glazing, and laminar flow ceilings designed to handle chemical vapors, aggressive cleaning, and continuous production runs.",
    requirements: [
      "ISO Class 5 to Class 7 controlled processing and diffusion bays",
      "Chemical and acid-resistant panel surfaces and non-corrosive finishes",
      "Double-glazed flush observation windows for real-time process monitoring",
      "Modular interlocking wall systems engineered for scalable multi-gigawatt PV lines",
    ],
    image: "/images/hero-banner-1-v2.png",
    standards: ["ISO 14644 Class 5–7", "Acid & Chemical Resistant", "Multi-GW Scalability"],
  },
  {
    id: "hi-tech",
    name: "Hi-Tech Industries",
    tagline: "Bespoke contamination control for optics, aerospace, defense & nanotechnology",
    description:
      "Advanced technology sectors—including precision optics, satellite aerospace systems, defense electronics, and micro-electromechanical systems (MEMS)—demand customized cleanroom enclosures that integrate laser-safe barriers, dark-room partitions, anti-vibration ceiling mounts, and high-purity air handling. Pophen designs bespoke modular architectures meeting exacting project specifications.",
    requirements: [
      "Laser-safe, anti-static, and RF-shielded cleanroom partitioning",
      "Anti-vibration ceiling grid integration for high-magnification lithography",
      "Dynamic pass-through boxes and interlocking personnel/material airlocks",
      "Demountable modular envelope allowing rapid tooling and line reconfigurations",
    ],
    image: "/images/activity1-DGOBdrHK.webp",
    standards: ["ISO Class 4–8", "Anti-Static & ESD", "Custom Engineering"],
  },
  {
    id: "medical-devices",
    name: "Medical Devices",
    tagline: "Sterile cleanroom envelopes for medical equipment & implantable device assembly",
    description:
      "Manufacturing implantable devices, surgical instruments, catheter assemblies, and diagnostic kits necessitates strict particulate and microbiological control conforming to ISO 13485 and ISO 14644. Pophen provides sanitary flush-wall systems with radius coving, smooth coplanar finishes, hermetic doors, and clean pass-through boxes ensuring effortless biocide wipe-downs and zero particulate accumulation.",
    requirements: [
      "ISO Class 7 and Class 8 controlled assembly and packaging enclosures",
      "Seamless sanitary flush wall-to-floor and ceiling radius coving",
      "Hermetically sealed drop-down doors with touchless wave-sensor activation",
      "Bio-decontamination resistant finishes compatible with VHP and harsh biocides",
    ],
    image: "/images/cleanroom-windows-doctor-CVbH--Sj.webp",
    standards: ["ISO 13485 / ISO 14644", "Sanitary Flush Coving", "Biocide & VHP Proof"],
  },
];
