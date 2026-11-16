export interface IndustryItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  requirements: string[];
  image: string;
  standards: string[];
  challenges: string[];
  solutions: string[];
  recommendedSystems: { id: string; name: string; desc: string }[];
  projectReferences: { name: string; location: string; area: string }[];
  specialDualEnvironment?: { dryroom: string; cleanroom: string };
}

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: "semiconductor",
    name: "Semiconductor Fabrication",
    tagline: "Ultra-low particulate control for nanometer wafer fabrication & packaging",
    description:
      "Microchip fabrication, advanced packaging (OSAT), and photolithography demand stringently controlled environments to eliminate microscopic airborne particulates and chemical outgassing. POPHEN modular walls, walkable ceilings, and integrated FFU filtration deliver certified ISO Class 1 to Class 5 cleanrooms with vibration dampening and silicon-free finishes.",
    requirements: [
      "Ultra-low airborne particulate concentrations (ISO Class 1–5)",
      "Electrostatic discharge (ESD) safe surfaces & electrical grounding",
      "Vibration-dampened walkable ceiling structures for 100% FFU arrays",
      "Chemical-resistant, silicon-free, zero-VOC building materials",
    ],
    challenges: [
      "Sub-micron airborne particulates causing wafer patterning defects and yield degradation",
      "Electrostatic charge accumulation damaging sensitive nanoscale circuit traces",
      "Ceiling deflection and vibrational harmonics disturbing precision photolithography steppers",
      "Volatile airborne molecular contamination (AMC) interfering with chemical vapor deposition",
    ],
    solutions: [
      "SL2000 Stud-less and SS2000 Stud modular wall partitions with silicon-free coatings",
      "CK2000 Heavy Duty Walkable Ceiling Grid certified by TÜV SÜD for heavy point loads",
      "Patented FFU ceiling integration with die-cast fire sprinkler connectors",
      "Intertek-certified hermetic sliding and swing doors with automatic drop seals",
    ],
    recommendedSystems: [
      { id: "sl2000", name: "SL2000 Stud-less Wall System", desc: "44mm stud-less partitions specified by Intel & Infineon" },
      { id: "ck2000-walkable", name: "CK2000 Heavy Duty Walkable Ceiling", desc: "TÜV load-tested extruded aluminum walkable deck" },
      { id: "ck2000-ffu", name: "CK2000 FFU Ceiling Grid", desc: "Patented FFU integration for 100% HEPA coverage" },
      { id: "doors-windows", name: "Cleanroom Doors & Windows", desc: "Square-tube airtight doors with interlock controllers" },
    ],
    projectReferences: [
      { name: "Tata Electronics OSAT", location: "Jagiroad, Assam, India", area: "35,000 m² (Phase 1)" },
      { name: "Intel Falcon", location: "Kulim, Kedah, Malaysia", area: "43,000 m²" },
      { name: "Infineon Technologies KLM3", location: "Kulim, Malaysia", area: "35,000 m²" },
      { name: "GlobalFoundries 300mm Fab", location: "Chengdu, China", area: "76,000 m²" },
    ],
    image: "/images/cleanroom-systems-interior-Z8QHFfaO.webp",
    standards: ["ISO 14644 Class 1–5", "Analab VOC Outgassing", "FM4882 Fire Approved"],
  },
  {
    id: "battery",
    name: "Battery Dryroom & Cleanroom Solutions",
    tagline: "Ultra-low dew point dryrooms (≤ -50°C to -60°C) & contamination-controlled gigafactories",
    description:
      "Lithium-ion battery cell manufacturing requires extreme moisture management to prevent hazardous chemical reactions with lithium salts, alongside rigorous particle control during electrode winding and assembly. POPHEN provides certified dual-environment solutions for gigawatt-scale production facilities worldwide.",
    requirements: [
      "Ultra-low continuous dew point operation down to -50°C to -60°C",
      "Completely vapor-tight envelope with continuous hermetic gasketing",
      "ISO Class 6 to Class 8 cleanrooms for electrode slurry & mixing lines",
      "Heavy-duty walkable ceilings supporting massive industrial dehumidification ducting",
    ],
    challenges: [
      "Moisture ingress reacting with lithium salts (LiPF6) to generate corrosive hydrofluoric acid",
      "Thermal bridge condensation compromising dew point stability in gigawatt-scale dryrooms",
      "Microscopic metal particulate contamination puncturing micro-porous separators and causing short-circuits",
      "Extremely heavy mechanical duct loads from desiccant dehumidifiers hung from ceiling structures",
    ],
    solutions: [
      "D-GRID Plenum Ceiling System carrying heavy industrial dehumidification air ducting",
      "C50/C100 Caulking Wall System delivering verified vapor-tight hermetic isolation",
      "Continuous thermally decoupled panel connections eliminating cold bridging",
      "Interlocking personnel and material airlocks preserving dryroom pressure cascades",
    ],
    specialDualEnvironment: {
      dryroom:
        "Battery Dryroom Solutions: Engineered for dew points down to -50°C to -60°C with vapor-barrier caulked joints and heavy-duty structural duct suspension for electrolyte filling and cell winding.",
      cleanroom:
        "Battery Cleanroom Solutions: ISO Class 6 to Class 8 particulate filtration envelopes for cathode/anode slurry mixing, coating, and calendar roll calendering bays.",
    },
    recommendedSystems: [
      { id: "c-series", name: "C50 / C75 / C100 Caulking Wall System", desc: "Vapor-tight hermetic caulked envelope used in Tesla & CATL gigafactories" },
      { id: "d-grid", name: "D-GRID Plenum Ceiling System", desc: "Heavy-duty plenum grid supporting low-dew-point dehumidifier ducting" },
      { id: "ck2000-walkable", name: "CK2000 Walkable FFU Ceiling", desc: "TÜV-certified load deck for dryroom maintenance" },
      { id: "doors-windows", name: "Hermetic Cleanroom Doors", desc: "Airtight drop seals maintaining dryroom pressure differentials" },
    ],
    projectReferences: [
      { name: "CATL 100 GWh Battery Gigafactory", location: "Debrecen, Hungary", area: "340,000 m²" },
      { name: "Tesla Shanghai Gigafactory", location: "Shanghai, China", area: "200,000 m²" },
      { name: "ACC Douvrin Gigafactory", location: "Douvrin, France", area: "77,800 m²" },
      { name: "Northvolt DS1 & DS2", location: "Skellefteå, Sweden", area: "37,000 m²" },
      { name: "SK ON Gigafactory", location: "Yancheng, China", area: "160,000 m²" },
    ],
    image: "/images/cleanroom-walls-detail-CJABaUMG.webp",
    standards: ["Dew Point ≤ -50°C", "ISO Class 6–8", "Intertek Airtight Certified"],
  },
  {
    id: "solar-cell",
    name: "Solar Cell / Renewable Energy",
    tagline: "High-bay chemical-resistant envelopes & double plenum ceilings for multi-GW lines",
    description:
      "Modern TOPCon and heterojunction solar PV cell fabrication demands stringent airborne particulate filtration to prevent shunting in silicon wafers, combined with extreme chemical resistance against acid baths and diffusion furnace chemistry. POPHEN delivers robust high-bay modular walls and double-plenum ceilings for GW-scale solar plants.",
    requirements: [
      "ISO Class 5 to Class 7 cleanliness across diffusion and metallization bays",
      "Chemical and acid-resistant panel coatings for wet chemistry areas",
      "Double plenum ceiling integration for massive return air volumes",
      "Modular interlocking design enabling swift expansion of automated PV module lines",
    ],
    challenges: [
      "Corrosive acidic chemical fumes causing surface degradation on conventional metal partitions",
      "High thermal loads from diffusion furnaces and PECVD reactors requiring high air turnover",
      "Fast-track delivery schedules driven by aggressive renewable energy commissioning targets",
      "Large open-bay spans requiring heavy-duty ceiling suspension with zero floor support columns",
    ],
    solutions: [
      "Double-sided color coated steel panels with specialized chemical-resistant PVDF coatings",
      "Double plenum ceiling arrangements optimizing supply and return air circulation",
      "Modular caulking partitions providing airtight containment between wet-bench and dry bays",
      "Fast-track Ready-for-Equipment (RFE) execution methodology deployed in India",
    ],
    recommendedSystems: [
      { id: "c-series", name: "C50 Caulking Wall System", desc: "Chemical-resistant caulked partition separating process lines" },
      { id: "d-grid", name: "D-GRID Plenum Ceiling System", desc: "Double plenum ceiling for massive air handling volumes" },
      { id: "doors-windows", name: "Cleanroom Doors & Vision Panels", desc: "Double-glazed observation windows for furnace monitoring" },
    ],
    projectReferences: [
      { name: "Premier Energies Solar PV Cell Plant", location: "Naidupeta, Andhra Pradesh, India", area: "55,500 m²" },
    ],
    image: "/images/hero-banner-1-v2.png",
    standards: ["ISO Class 5–7", "Acid & Chemical Resistant", "Double Plenum Engineered"],
  },
  {
    id: "data-centre",
    name: "Data Centre Infrastructure",
    tagline: "Hot/cold aisle containment, fire-rated ceiling grids & thermal management",
    description:
      "High-density server farms and AI computing clusters require strict thermal management, hot and cold aisle containment, anti-static electrostatic dissipation, and FM-certified fire safety. POPHEN provides structural ceiling grids supporting heavy overhead busways and modular partition barriers.",
    requirements: [
      "Hot and cold aisle containment preventing thermal mixing and optimizing PUE",
      "Electrostatic discharge (ESD) safe partition surfaces and grounding",
      "Airtight technical access doors with interlocking security controls",
      "Structural ceiling containment supporting heavy cable trays & overhead busways",
    ],
    challenges: [
      "Thermal recirculation driving up Power Usage Effectiveness (PUE) and energy costs",
      "Airborne particulate buildup on server heat sinks causing thermal throttling and hardware faults",
      "Heavy overhead MEP loads from high-voltage bus ducts and fiber raceways suspended from ceilings",
      "Stringent FM Global fire safety mandates requiring non-combustible partition assemblies",
    ],
    solutions: [
      "CK2000 structural aluminum ceiling grids supporting heavy overhead cable busways",
      "Demountable modular partitions providing precision hot/cold aisle isolation",
      "FM4882 Class 1 certified fire-rated materials preventing flame propagation",
      "Airtight sliding access doors with access control integration",
    ],
    recommendedSystems: [
      { id: "ck2000-walkable", name: "CK2000 Heavy Duty Ceiling Grid", desc: "Suspension grid carrying heavy server busways and trays" },
      { id: "r-series", name: "R-Series Removable Wall System", desc: "Modular partitions for scalable aisle containment" },
      { id: "doors-windows", name: "Cleanroom Interlock Doors", desc: "Airtight technical doors preserving server aisle pressure" },
    ],
    projectReferences: [
      { name: "Enterprise Hyperscale AI Facilities", location: "Asia-Pacific Region", area: "Confidential Scale" },
    ],
    image: "/images/activity1-DGOBdrHK.webp",
    standards: ["ASHRAE TC 9.9", "FM4882 Fire Class 1", "Anti-Static Grounded"],
  },
  {
    id: "hi-tech",
    name: "Hi-Tech Precision Industries",
    tagline: "Vibration-isolated clean enclosures for optics, aerospace, and robotics",
    description:
      "Advanced manufacturing of micro-optics, sensors, aerospace gyroscopes, and precision robotics demands controlled environments with minimal vibration resonance and electromagnetic shielding. POPHEN designs flexible modular envelopes tailored to tight tolerance operations.",
    requirements: [
      "Vibration-isolated ceiling grids and anti-static ESD-grounded wall panels",
      "Electromagnetic (EM) and RF shielding capabilities for precision testing",
      "Dynamic pass-through boxes and interlocking personnel/material airlocks",
      "Demountable modular envelope allowing rapid tooling and line reconfigurations",
    ],
    challenges: [
      "Stray electromagnetic interference (EMI) and static charges disrupting high-precision sensors",
      "Vibrational harmonics from mechanical plants disturbing precision laser alignments",
      "Stringent cleanliness specifications spanning ISO Class 4 down to Class 8 in adjacent zones",
      "Transfer logistics between uncontrolled machining bays and sterile test cells",
    ],
    solutions: [
      "Custom anti-static and RF-shielded modular wall envelopes with grounded aluminum frames",
      "Independently suspended ceiling structures engineered with vibration-dampening isolators",
      "Motorized dynamic HEPA pass-through chambers with pneumatic interlocks",
      "Modular demountable wall systems tailored for flexible multi-zone cleanroom layouts",
    ],
    recommendedSystems: [
      { id: "ss2000", name: "SS2000 Stud Wall System", desc: "Integrated conduits for precision sensor wiring and gas lines" },
      { id: "ck2000-walkable", name: "CK2000 Walkable Ceiling", desc: "Vibration-dampened ceiling deck for optics suites" },
      { id: "doors-windows", name: "Cleanroom Doors & Pass-Throughs", desc: "Interlocked transfer airlocks for clean material flow" },
    ],
    projectReferences: [
      { name: "AAC Technologies LENS Workshop", location: "Singapore", area: "10,000 m²" },
    ],
    image: "/images/activity3-DHLpvUU3.webp",
    standards: ["ISO Class 4–8", "Anti-Static & ESD", "TÜV Load Tested"],
  },
  {
    id: "medical-devices",
    name: "Medical Devices & Healthcare",
    tagline: "Sterile wipe-down surfaces, continuous radiused coving & VHP resistance",
    description:
      "Manufacturing invasive surgical instruments, orthopedic implants, and cardiovascular catheters demands cleanrooms meeting ISO 13485 and GMP standards. POPHEN cleanroom systems feature flush wipe-down surfaces, continuous sanitary coving, and certified resistance to aggressive biocides and Vaporized Hydrogen Peroxide (VHP).",
    requirements: [
      "Continuous flush surfaces eliminating ledges, crevices, and dust traps",
      "Sanitary radiused coving at wall-to-wall, wall-to-ceiling, and wall-to-floor junctions",
      "Hermetically sealed drop-down doors with touchless wave-sensor activation",
      "Bio-decontamination resistant finishes compatible with VHP and harsh biocides",
    ],
    challenges: [
      "Bioburden and pyrogen contamination risks on invasive cardiovascular and surgical devices",
      "Surface degradation and micro-cracking caused by aggressive vaporized hydrogen peroxide (VHP)",
      "Crevices, seams, and exposed fasteners harboring bacterial colonies and mold spores",
      "Strict regulatory audits under ISO 13485 and US FDA QSR requiring complete surface validation",
    ],
    solutions: [
      "Sanitary flush wall systems with continuous aluminum and PVC radius coving profiles",
      "High-durability antimicrobial and non-shedding PVDF or PVC laminated steel skins",
      "Hermetically sealed flush doors with drop-down seals and interlocking airlock logic",
      "Smooth double-glazed flush vision panels with interior silica gel condensation prevention",
    ],
    recommendedSystems: [
      { id: "r-series", name: "R-Series Flush Wall System", desc: "Flush panels with radius coving for sterile wipe-down" },
      { id: "doors-windows", name: "Airtight Cleanroom Doors", desc: "Hands-free wave sensor hermetic doors with drop seals" },
      { id: "ck2000-ffu", name: "CK2000 FFU Ceiling Grid", desc: "Flush ceiling grid for Grade A/B laminar flow zones" },
    ],
    projectReferences: [
      { name: "Class 10,000 Implant & Catheter Suites", location: "Europe & Asia", area: "Multi-facility delivery" },
    ],
    image: "/images/cleanroom-windows-doctor-CVbH--Sj.webp",
    standards: ["ISO 13485", "EU GMP Annex 1", "US FDA 21 CFR", "VHP Proof"],
  },
];
