export interface BrochureProduct {
  id: string;
  name: string;
  category: "Wall Systems" | "Ceiling Systems" | "Doors & Windows";
  tagline: string;
  description: string;
  image: string;
  thickness: string;
  skin: string;
  core: string;
  glue: string;
  surfacePaint: string;
  fireRating: string;
  certification: string[];
  specialFeature: string;
  applications: string[];
  advantages: string[];
  faqs: { question: string; answer: string }[];
  technicalSpecs?: { label: string; value: string }[];
  technicalDrawings?: {
    id: string;
    title: string;
    description: string;
    image: string;
    downloadUrl?: string;
    type: "Cross-Section" | "Elevation & Detail" | "Joint & Profile" | "System Overview";
  }[];
}

export const BROCHURE_PRODUCTS: BrochureProduct[] = [
  {
    id: "r-series",
    name: "R50 / R75 / R100 Removable Wall System",
    category: "Wall Systems",
    tagline: "FM4882-certified demountable cleanroom wall system for rapid reconfiguration",
    description:
      "Precision-engineered removable wall partition system featuring double-sided color-coated steel or aluminum plate skins with aluminum honeycomb or rockwool core and bow border edge design. Tested to FM4882 with up to 120 minutes fire resistance.",
    image: "/images/cleanroom-walls-detail-CJABaUMG.webp",
    thickness: "50mm / 75mm / 100mm",
    skin: "Double-sided color-coated steel or aluminum plate with bow border around edge",
    core: "Aluminum Honeycomb / Rockwool non-combustible infill",
    glue: "Polyurethane glue",
    surfacePaint: "Silicon-free anti-microbial paint",
    fireRating: "FM4882, Fire grade A1 / M0, fire resistance time 30–120 minutes",
    certification: ["FM4882", "CE", "ISO 14644", "Fire Grade A1/M0"],
    specialFeature: "100% Removable without damaging adjacent panels; level height cannot be adjusted once locked",
    applications: ["Semiconductor Fabs", "EV Battery Facilities", "Pharmaceutical Cleanrooms", "Solar Cell Plants"],
    advantages: [
      "2-hour certified fire rating with high thermal insulation",
      "Demountable panels allow fast utility maintenance and equipment access",
      "Silicon-free paint prevents airborne molecular contamination in wafer lines",
      "Highest load-bearing capacity with minimum panel thickness",
    ],
    faqs: [
      {
        question: "What thicknesses are available for the R-Series removable wall system?",
        answer: "The R-Series is manufactured in standard 50mm, 75mm, and 100mm configurations to match diverse structural and thermal requirements.",
      },
      {
        question: "What fire certifications does the R-Series carry?",
        answer: "The R-Series is certified under FM4882 with Fire Grade A1/M0, providing 30 to 120 minutes of fire resistance.",
      },
    ],
    technicalSpecs: [
      {
            label: "Product Name",
            value: "R50 / R75 / R100 Removable Wall System"
      },
      {
            label: "Product Code",
            value: "POPHEN-R-SERIES"
      },
      {
            label: "System Type",
            value: "Modular Demountable Partition System"
      },
      {
            label: "Available Thicknesses",
            value: "50mm / 75mm / 100mm"
      },
      {
            label: "Panel Construction",
            value: "Double-skin composite sandwich with extruded perimeter bow-border profiles"
      },
      {
            label: "Core / Infill Material",
            value: "Non-combustible Aluminum Honeycomb / High-density Rockwool"
      },
      {
            label: "Surface Material",
            value: "0.6mm Pre-painted Galvanized Steel (PPGI) or Aluminum Alloy Plate"
      },
      {
            label: "Surface Finish",
            value: "Silicon-free anti-microbial cleanroom coating (ultra-low outgassing)"
      },
      {
            label: "Structural Adhesive",
            value: "Dual-component polyurethane structural adhesive"
      },
      {
            label: "Frame / Profile",
            value: "Concealed anodized aluminum profile with perimeter interlocking gasket"
      },
      {
            label: "Fire Performance",
            value: "FM4882 Class 4882, Fire Grade A1/M0 (30 to 120 minutes fire integrity)"
      },
      {
            label: "Testing & Certification",
            value: "FM4882, CE, ISO 14644-4 Class 1 to Class 8"
      },
      {
            label: "Installation Type",
            value: "100% Removable without damaging adjacent panels (level height locked)"
      },
      {
            label: "Air Leakage",
            value: "High-integrity perimeter tongue-and-groove hermetic seal"
      },
      {
            label: "Primary Applications",
            value: "Semiconductor Front-end & Back-end Fabs, EV Battery Dryrooms, Pharmaceutical Cleanrooms"
      }
],
    technicalDrawings: [
      {
            id: "r-series-drawing-1",
            title: "R-Series Removable Wall System Cross-Section",
            description: "Perimeter bow-border profile, tongue-and-groove joint, and wall-to-floor track connection detail.",
            image: "/images/drawings/r-series-drawing.webp",
            downloadUrl: "/images/drawings/r-series-drawing.webp",
            type: "Cross-Section"
      },
      {
            id: "r-series-drawing-2",
            title: "Comprehensive Fab Wall Architectural System Layout",
            description: "Full elevation, wall-to-ceiling interface, and demountable joint connection diagram.",
            image: "/images/drawings/cleanroom-architecture-overview.webp",
            downloadUrl: "/images/drawings/cleanroom-architecture-overview.webp",
            type: "System Overview"
      }
],
  },
  {
    id: "c-series",
    name: "C50 / C75 / C100 Caulking Wall System",
    category: "Wall Systems",
    tagline: "Space-saving hermetic caulking wall partition meeting rigorous outgassing standards",
    description:
      "High-integrity caulking partition system engineered for tight spaces and ultra-clean environments. Tested for zero VOC outgassing by Analab, certified by FM4882, TÜV, and Intertek for minimal air leakage.",
    image: "/images/cleanroom-walls-hallway-D4ZV_xh8.webp",
    thickness: "50mm / 75mm / 100mm",
    skin: "Double-sided color-coated steel or aluminum plate, bow border around edge",
    core: "Aluminum Honeycomb / Rockwool",
    glue: "Epoxy glue / Polyurethane glue",
    surfacePaint: "Analab VOC compliant, ultra-low outgassing cleanroom paint",
    fireRating: "FM4882, Fire grade A1/M0, fire resistance 30–120 minutes",
    certification: ["FM4882", "TÜV", "Analab VOC", "Intertek Air Tightness"],
    specialFeature: "Non-removable flush caulk joint; highly space-saving and hermetically sealed",
    applications: ["Tata Electronics OSAT", "Tesla Shanghai Gigafactory", "CATL Debrecen", "ACC Douvrin Battery Plant"],
    advantages: [
      "Intertek-certified for minimum leakage through panel joints",
      "Analab-tested organic outgassing meets strict semiconductor wafer criteria",
      "Used in Tesla Gigafactory (200,000 m²) and Tata Electronics OSAT (35,000 m²)",
      "High structural rigidity with epoxy-bonded aluminum honeycomb",
    ],
    faqs: [
      {
        question: "Why choose the C-Series caulking system over demountable walls?",
        answer: "The C-Series provides an ultra-slim, space-saving footprint with permanent flush hermetic caulking, making it ideal for large-scale battery gigafactories and wafer assembly lines.",
      },
    ],
    technicalSpecs: [
      {
            label: "Product Name",
            value: "C50 / C75 / C100 Caulking Wall System"
      },
      {
            label: "Product Code",
            value: "POPHEN-C-SERIES"
      },
      {
            label: "System Type",
            value: "Space-Saving Hermetic Caulking Partition System"
      },
      {
            label: "Available Thicknesses",
            value: "50mm / 75mm / 100mm"
      },
      {
            label: "Panel Construction",
            value: "Double-sided color-coated steel/aluminum plate with bow border around edge"
      },
      {
            label: "Core / Infill Material",
            value: "High-rigidity Aluminum Honeycomb / Fire-resistant Rockwool"
      },
      {
            label: "Surface Material",
            value: "Pre-coated galvanized steel or aluminum alloy sheet"
      },
      {
            label: "Surface Finish",
            value: "Analab-certified ultra-low VOC cleanroom paint"
      },
      {
            label: "Structural Adhesive",
            value: "Epoxy glue and polyurethane structural adhesive (zero delamination)"
      },
      {
            label: "Frame / Profile",
            value: "Extruded aluminum alloy concealed bow border profiles"
      },
      {
            label: "Fire Performance",
            value: "FM4882, Fire Grade A1/M0 (30–120 minutes fire endurance)"
      },
      {
            label: "Testing & Certification",
            value: "FM4882, TÜV SÜD, Analab VOC, Intertek Air Tightness"
      },
      {
            label: "Installation Type",
            value: "Non-removable flush hermetic caulking joint; maximizes usable cleanroom floor space"
      },
      {
            label: "Outgassing",
            value: "Meets strict SEMATECH wafer outgassing standards (Analab GC/MS tested)"
      },
      {
            label: "Primary Applications",
            value: "Tesla Shanghai Gigafactory (200,000 m²), Tata OSAT (35,000 m²), CATL Debrecen, ACC Douvrin"
      }
],
    technicalDrawings: [
      {
            id: "c-series-drawing-1",
            title: "C-Series Caulking Wall Construction & Joint Details",
            description: "Flush caulk joint, structural adhesive bonding, and bow-border edge profile.",
            image: "/images/drawings/c-series-drawing.webp",
            downloadUrl: "/images/drawings/c-series-drawing.webp",
            type: "Joint & Profile"
      },
      {
            id: "c-series-drawing-2",
            title: "Cleanroom Wall Envelope Architecture",
            description: "Complete caulking wall assembly and interface with cleanroom ceiling deck.",
            image: "/images/drawings/cleanroom-architecture-overview.webp",
            downloadUrl: "/images/drawings/cleanroom-architecture-overview.webp",
            type: "System Overview"
      }
],
  },
  {
    id: "ss2000",
    name: "SS2000 Stud Wall Partition System",
    category: "Wall Systems",
    tagline: "44mm structural stud wall system with internal aluminum profile framework",
    description:
      "Engineered stud partition system featuring a concealed aluminum sub-frame installed first, followed by flush plate mounting. 44mm profile with aluminum honeycomb core and silicon-free paint.",
    image: "/images/activity3-DHLpvUU3.webp",
    thickness: "44mm",
    skin: "Double-sided color-coated steel or aluminum sheet",
    core: "Built-in Aluminum Honeycomb core",
    glue: "Epoxy glue, Polyurethane glue",
    surfacePaint: "Silicon-free anti-static finish",
    fireRating: "FM4882, Fire grade A2",
    certification: ["FM4882 Fire Grade A2", "Intertek", "ISO 14644-4"],
    specialFeature: "Install aluminum profile frame first, then click and lock the facing plates",
    applications: ["Silterra Malaysia (Fab 1E Class 100)", "Texas Instruments Chengdu", "Infineon Technologies"],
    advantages: [
      "Proven track record in Silterra Malaysia Fab 1E Expansion (ISO Class 100)",
      "Concealed internal studs allow easy vertical routing of electrical cabling and gas tubing",
      "A2 Fire grade certified under FM4882 testing standards",
      "Silicon-free paint eliminates risk of silicone poisoning in front-end semiconductor fabs",
    ],
    faqs: [
      {
        question: "How does the SS2000 installation sequence work?",
        answer: "The aluminum profile framing studs are erected first to exact architectural lines, followed by the insertion and locking of the facing plates for rapid dry assembly.",
      },
    ],
    technicalSpecs: [
      {
            label: "Product Name",
            value: "SS2000 Stud Wall Partition System"
      },
      {
            label: "Product Code",
            value: "POPHEN-SS2000"
      },
      {
            label: "System Type",
            value: "Structural Stud Partition System with Concealed Framing"
      },
      {
            label: "Panel Thickness",
            value: "44mm profile depth"
      },
      {
            label: "Panel Construction",
            value: "Double-sided metal plate with internal structural aluminum stud framework"
      },
      {
            label: "Core / Infill Material",
            value: "Built-in Aluminum Honeycomb core"
      },
      {
            label: "Surface Material",
            value: "Double-sided color-coated steel or aluminum sheet"
      },
      {
            label: "Surface Finish",
            value: "Silicon-free anti-static cleanroom finish"
      },
      {
            label: "Structural Adhesive",
            value: "Epoxy glue, polyurethane structural adhesive"
      },
      {
            label: "Frame / Profile",
            value: "Concealed aluminum framing studs installed first, followed by flush plate click-and-lock"
      },
      {
            label: "Utility Cavity",
            value: "Integrated vertical stud cavity for electrical, data, and gas utility distribution"
      },
      {
            label: "Fire Performance",
            value: "FM4882, Fire Grade A2"
      },
      {
            label: "Testing & Certification",
            value: "FM4882 Fire Grade A2, Intertek, ISO 14644-4"
      },
      {
            label: "Installation Type",
            value: "Frame-first sequential installation, plate click-and-lock assembly"
      },
      {
            label: "Primary Applications",
            value: "Silterra Malaysia (Fab 1E Class 100), Texas Instruments Chengdu, Infineon Technologies"
      }
],
    technicalDrawings: [
      {
            id: "ss2000-drawing-1",
            title: "SS2000 Stud Wall Profile & Concealed Framework",
            description: "Framing stud assembly and panel lock mechanism for vertical utility passage.",
            image: "/images/drawings/ss2000-drawing.webp",
            downloadUrl: "/images/drawings/ss2000-drawing.webp",
            type: "Elevation & Detail"
      }
],
  },
  {
    id: "sl2000",
    name: "SL2000 Stud-less Wall Partition System",
    category: "Wall Systems",
    tagline: "44mm stud-less modular wall system used by Intel Falcon & Infineon",
    description:
      "Cleanroom stud-less wall system engineered for maximum usable clean space. Features double-sided color-coated metal skins, aluminum honeycomb core, and silicon-free surface paint.",
    image: "/images/cleanroom-isometric-3d.jpg",
    thickness: "44mm / 45mm",
    skin: "Double-sided color-coated steel or aluminum sheet",
    core: "Aluminum Honeycomb",
    glue: "Epoxy glue, Polyurethane glue",
    surfacePaint: "Silicon-free ultra-clean paint",
    fireRating: "FM4882, Fire grade A2",
    certification: ["FM4882 Fire Grade A2", "SGS", "Intertek Air Tightness"],
    specialFeature: "Stud-less interlocking joint eliminating vertical framing posts; saves clean floor area",
    applications: ["Intel Falcon (43,000 m² Class 1K & 10K)", "Infineon KLM3 WP6 (35,000 m²)", "Semiconductor Cleanrooms"],
    advantages: [
      "Specified by Intel Corp for Intel Falcon project (43,000 m² in Kulim, Malaysia)",
      "Selected by Infineon Technologies for KLM3 WP6 Cleanroom facility (35,000 m²)",
      "Zero stud posts maximize usable cleanroom floor space and reduce installation time",
      "Meets strict outgassing requirements for photolithography and wafer testing",
    ],
    faqs: [
      {
        question: "Which major clients use the POPHEN SL2000 system?",
        answer: "The SL2000 stud-less system is installed at Intel Falcon (43,000 m²) and Infineon KLM3 (35,000 m²) in Malaysia.",
      },
    ],
    technicalSpecs: [
      {
            label: "Product Name",
            value: "SL2000 Stud-less Wall Partition System"
      },
      {
            label: "Product Code",
            value: "POPHEN-SL2000"
      },
      {
            label: "System Type",
            value: "Space-Maximizing Stud-less Modular Wall Partition System"
      },
      {
            label: "Panel Thickness",
            value: "44mm / 45mm"
      },
      {
            label: "Panel Construction",
            value: "Stud-less self-supporting sandwich panel with edge interlocking profiles"
      },
      {
            label: "Core / Infill Material",
            value: "High-density Aluminum Honeycomb core"
      },
      {
            label: "Surface Material",
            value: "Double-sided color-coated steel or aluminum sheet"
      },
      {
            label: "Surface Finish",
            value: "Silicon-free ultra-clean cleanroom paint"
      },
      {
            label: "Structural Adhesive",
            value: "Epoxy glue, polyurethane glue"
      },
      {
            label: "Frame / Profile",
            value: "Integrated tongue-and-groove perimeter extrusion (zero vertical posts)"
      },
      {
            label: "Floor Space Efficiency",
            value: "Eliminates vertical framing posts, maximizing usable cleanroom square footage"
      },
      {
            label: "Fire Performance",
            value: "FM4882 Fire Grade A2"
      },
      {
            label: "Testing & Certification",
            value: "FM4882 Fire Grade A2, SGS, Intertek Air Tightness"
      },
      {
            label: "Installation Type",
            value: "Interlocking dry joint assembly; rapid field erection"
      },
      {
            label: "Primary Applications",
            value: "Intel Falcon (43,000 m² Class 1K & 10K), Infineon KLM3 WP6 (35,000 m²)"
      }
],
    technicalDrawings: [
      {
            id: "sl2000-drawing-1",
            title: "SL2000 Stud-less Modular Interlocking Joint",
            description: "Post-less edge interlocking and floor track connection detail.",
            image: "/images/drawings/sl2000-drawing.webp",
            downloadUrl: "/images/drawings/sl2000-drawing.webp",
            type: "Joint & Profile"
      }
],
  },
  {
    id: "cl2000",
    name: "CL2000 Pasted Wall System",
    category: "Wall Systems",
    tagline: "Ultra-slim 6mm / 7mm / 12mm cladding system for existing civil walls",
    description:
      "Ultra-thin pasted cleanroom cladding wall system designed to convert masonry or dry construction into an ISO-compliant cleanroom boundary without losing room dimensions.",
    image: "/images/activity4-3RM3aurZ.webp",
    thickness: "6mm / 7mm / 12mm",
    skin: "Double-sided color-coated steel or aluminum sheet",
    core: "High-density Aluminum Honeycomb core",
    glue: "Epoxy glue, Polyurethane glue",
    surfacePaint: "Silicon-free coating",
    fireRating: "FM4882, Fire grade A2",
    certification: ["FM4882 Fire Grade A2", "Analab VOC"],
    specialFeature: "Ultra-thin pasted profile; removable and saves maximum cleanroom floor area",
    applications: ["Civil Wall Renovation", "Retrofit Cleanrooms", "Corridor Wall Overlays", "Clean Airlocks"],
    advantages: [
      "Ultra-thin profile preserves maximum interior floor space during factory retrofits",
      "Direct structural adhesive bonding to civil masonry or steel structure",
      "Silicon-free coating meeting semiconductor outgassing standards",
      "FM4882 Fire Grade A2 tested",
    ],
    faqs: [
      {
        question: "What is the primary use case of the CL2000 pasted wall?",
        answer: "CL2000 is used to clad existing civil concrete or brick walls, instantly upgrading them into certified smooth, non-shedding cleanroom surfaces.",
      },
    ],
    technicalSpecs: [
      {
            label: "Product Name",
            value: "CL2000 Pasted Wall System"
      },
      {
            label: "Product Code",
            value: "POPHEN-CL2000"
      },
      {
            label: "System Type",
            value: "Ultra-Slim Pasted Wall Cladding System for Civil Overlays"
      },
      {
            label: "Available Thicknesses",
            value: "6mm / 7mm / 12mm ultra-slim profiles"
      },
      {
            label: "Panel Construction",
            value: "Ultra-thin composite aluminum honeycomb sandwich plate"
      },
      {
            label: "Core / Infill Material",
            value: "Micro-cell Aluminum Honeycomb core"
      },
      {
            label: "Surface Material",
            value: "Color-coated steel or aluminum plate"
      },
      {
            label: "Surface Finish",
            value: "Silicon-free coating meeting semiconductor outgassing standards"
      },
      {
            label: "Structural Adhesive",
            value: "High-strength epoxy adhesive bonding to civil wall substrates"
      },
      {
            label: "Space Preservation",
            value: "Conserves 98%+ of interior floor space during factory retrofits"
      },
      {
            label: "Fire Performance",
            value: "FM4882 Fire Grade A2"
      },
      {
            label: "Testing & Certification",
            value: "FM4882 Fire Grade A2, Analab VOC"
      },
      {
            label: "Installation Type",
            value: "Direct structural adhesive mounting to civil masonry, concrete or dry construction"
      },
      {
            label: "Primary Applications",
            value: "Civil wall renovation, cleanroom retrofits, airlock corridors, sterile change rooms"
      }
],
    technicalDrawings: [
      {
            id: "cl2000-drawing-1",
            title: "CL2000 Pasted Wall Cladding Profile",
            description: "Substrate adhesive bonding and edge trim transition details.",
            image: "/images/drawings/cl2000-drawing.webp",
            downloadUrl: "/images/drawings/cl2000-drawing.webp",
            type: "Cross-Section"
      }
],
  },
  {
    id: "b-series",
    name: "B50 / B75 / B100 Removable Wall System",
    category: "Wall Systems",
    tagline: "Modular demountable wall system with high space efficiency and FM4882 rating",
    description:
      "Heavy-duty removable cleanroom wall system with aluminum honeycomb or rockwool core and built-in bow border edge profiles, delivering certified Fire Grade A2 protection.",
    image: "/images/high-tech-shhypHUg.webp",
    thickness: "50mm / 75mm / 100mm",
    skin: "Double-sided color-coated steel or aluminum plate, bow border around edge",
    core: "Aluminum Honeycomb / Rockwool",
    glue: "Epoxy glue, Polyurethane glue",
    surfacePaint: "Silicon-free anti-bacterial paint",
    fireRating: "FM4882, Fire grade A2",
    certification: ["FM4882 Fire Grade A2", "TÜV", "Intertek"],
    specialFeature: "Removable modular joints; saves clean space with high acoustic attenuation",
    applications: ["Heavy Industrial Cleanrooms", "Battery Module Production", "High-Tech Precision Assembly"],
    advantages: [
      "High impact resistance with bow border reinforced edges",
      "Removable panels allow clean plant expansion without wall destruction",
      "Epoxy and polyurethane double-bonded core ensures zero skin delamination",
      "Certified under FM4882 Fire Grade A2",
    ],
    faqs: [
      {
        question: "How does the B-Series differ from the R-Series?",
        answer: "The B-Series features specialized compact edge joints optimized for heavy industrial cleanroom partitions and high acoustic performance.",
      },
    ],
    technicalSpecs: [
      {
            label: "Product Name",
            value: "B50 / B75 / B100 Removable Wall System"
      },
      {
            label: "Product Code",
            value: "POPHEN-B-SERIES"
      },
      {
            label: "System Type",
            value: "Heavy-Duty Industrial Removable Cleanroom Wall System"
      },
      {
            label: "Available Thicknesses",
            value: "50mm / 75mm / 100mm"
      },
      {
            label: "Panel Construction",
            value: "Double-sided color-coated metal plate with reinforced perimeter bow border"
      },
      {
            label: "Core / Infill Material",
            value: "Aluminum Honeycomb / High-density Rockwool acoustic & thermal core"
      },
      {
            label: "Surface Material",
            value: "0.6mm Galvanized steel or aluminum plate"
      },
      {
            label: "Surface Finish",
            value: "Silicon-free anti-bacterial paint"
      },
      {
            label: "Structural Adhesive",
            value: "Dual-component epoxy glue, polyurethane glue"
      },
      {
            label: "Acoustic Attenuation",
            value: "High acoustic dampening for equipment-heavy processing rooms"
      },
      {
            label: "Fire Performance",
            value: "FM4882 Fire Grade A2"
      },
      {
            label: "Testing & Certification",
            value: "FM4882 Fire Grade A2, TÜV SÜD, Intertek"
      },
      {
            label: "Installation Type",
            value: "Removable modular joints; saves clean space with high acoustic dampening"
      },
      {
            label: "Primary Applications",
            value: "Heavy industrial cleanrooms, battery module production, precision aerospace assembly"
      }
],
    technicalDrawings: [
      {
            id: "b-series-drawing-1",
            title: "B-Series Heavy-Duty Modular Panel Construction",
            description: "Bow border edge section and partition connection profile.",
            image: "/images/drawings/b-series-drawing.webp",
            downloadUrl: "/images/drawings/b-series-drawing.webp",
            type: "Cross-Section"
      }
],
  },
  {
    id: "ck2000-walkable",
    name: "CK2000 Heavy Duty Walkable Ceiling Grid System",
    category: "Ceiling Systems",
    tagline: "TÜV-certified high load-bearing extruded aluminum walkable cleanroom ceiling",
    description:
      "Heavy-duty extruded aluminum walkable ceiling grid system engineered for massive point and uniform loads. Tested by TÜV SÜD for uniform and concentrated load tests, certified under FM4882 with 0.5 to 2 hours fire rating.",
    image: "/images/cleanroom-ceilings-hero-d8AQO7Df.webp",
    thickness: "55mm / 70mm / 100mm / 130mm",
    skin: "Extruded aluminum profile with aluminum honeycomb or rockwool panels",
    core: "Eight-band panel / Aluminum Honeycomb / Rockwool panel",
    glue: "Single-sided / Double-sided high strength structural adhesive",
    surfacePaint: "PE / PVDF Cleanroom coating",
    fireRating: "FM4882, Fire Rating A1 0.5–2 Hour",
    certification: ["TÜV SÜD Uniform & Concentrated Load Test", "FM4882 Fire Rating A1", "SGS Load Certified"],
    specialFeature: "Highest load-bearing capacity certified by TÜV; supports heavy maintenance technicians and overhead ducting",
    applications: [
      "Tata Electronics OSAT (Assam)",
      "Intel Falcon (Kulim, Malaysia - 43,000 m²)",
      "GlobalFoundries (Chengdu - 76,000 m²)",
      "ACC Douvrin (France - 77,800 m²)",
      "CATL Gigafactory (Debrecen - 340,000 m²)",
    ],
    advantages: [
      "TÜV SÜD certified for highest load-bearing capacity with minimal profile deflection",
      "Eliminates separate catwalks in the interstitial plenum, reducing building height and capital cost",
      "FM certified along with grid and certified fire sprinkler die-cast connectors",
      "Used across multi-gigawatt battery plants and 300mm wafer fabrication fabs worldwide",
    ],
    faqs: [
      {
        question: "What load capacities does the CK2000 walkable ceiling support?",
        answer: "The CK2000 is certified by TÜV SÜD for point loads of 150 kg and uniform distributed loads up to 250 kg/m², allowing maintenance teams to service MEP equipment directly from the ceiling deck.",
      },
    ],
    technicalSpecs: [
      {
            label: "Product Name",
            value: "CK2000 Heavy Duty Walkable Ceiling Grid System"
      },
      {
            label: "Product Code",
            value: "POPHEN-CK2000-AL"
      },
      {
            label: "System Type",
            value: "Heavy-Duty Extruded Aluminum Walkable Cleanroom Ceiling Grid System"
      },
      {
            label: "Grid Depth / Thickness",
            value: "55mm / 70mm / 100mm / 130mm"
      },
      {
            label: "Structural Profile",
            value: "Heavy extruded aluminum alloy 6063-T6 with integrated threaded hanger boss"
      },
      {
            label: "Panel Infill Options",
            value: "Eight-band panel / Aluminum Honeycomb panel / Rockwool insulated panel"
      },
      {
            label: "Concentrated Point Load",
            value: "150 kg (1.5 kN) certified by TÜV SÜD (concentrated technician load)"
      },
      {
            label: "Uniform Distributed Load",
            value: "250 kg/m² certified by TÜV SÜD"
      },
      {
            label: "Structural Adhesive",
            value: "Single-sided / Double-sided high-strength structural adhesive"
      },
      {
            label: "Surface Coating",
            value: "PE / PVDF Cleanroom anti-static coating"
      },
      {
            label: "Fire Performance",
            value: "FM4882 Fire Rating A1 (0.5 to 2.0 hours fire endurance)"
      },
      {
            label: "Testing & Certification",
            value: "TÜV SÜD Uniform & Concentrated Load Test, FM4882 Fire Rating A1, SGS"
      },
      {
            label: "Plenum Efficiency",
            value: "Eliminates independent maintenance catwalks, reducing overall building height"
      },
      {
            label: "Primary Applications",
            value: "Tata OSAT (Assam), Intel Falcon (43k m²), GlobalFoundries (76k m²), ACC Douvrin (77.8k m²), CATL Debrecen (340k m²)"
      }
],
    technicalDrawings: [
      {
            id: "ck2000-walkable-drawing-1",
            title: "CK2000 Heavy Duty Walkable Ceiling Grid Profile",
            description: "Extruded aluminum grid profile, hanger rod assembly, and panel rebate.",
            image: "/images/drawings/ck2000-walkable-drawing.webp",
            downloadUrl: "/images/drawings/ck2000-walkable-drawing.webp",
            type: "Cross-Section"
      },
      {
            id: "ck2000-walkable-drawing-2",
            title: "Cleanroom Ceiling Plenum Architecture",
            description: "Overview layout of walkable deck, HVAC integration, and suspension hangers.",
            image: "/images/drawings/cleanroom-architecture-overview.webp",
            downloadUrl: "/images/drawings/cleanroom-architecture-overview.webp",
            type: "System Overview"
      }
],
  },
  {
    id: "i-grid",
    name: "I-GRID Hidden Frame Ceiling System",
    category: "Ceiling Systems",
    tagline: "Hidden frame flush ceiling system with PPGI skins and FM4882 A1 fire rating",
    description:
      "Cleanroom ceiling system featuring a concealed suspension framework for an uninterrupted flush ceiling plane. Constructed with PPGI steel skins, rockwool or aluminum honeycomb infill, and certified by FM4882 for 0.5 to 2 hours fire integrity.",
    image: "/images/cleanroom-ceilings-detail-H-esTC_Q.webp",
    thickness: "50mm / 75mm / 100mm",
    skin: "Both sides PPGI steel, type frame around perimeter",
    core: "Rockwool / Aluminum Infill",
    glue: "Polyurethane glue",
    surfacePaint: "PE Cleanroom coating",
    fireRating: "FM4882, Fire Rating A1 0.5–2 Hour",
    certification: ["FM4882 Fire Rating A1", "TÜV", "CE"],
    specialFeature: "Concealed hidden-frame profile creating a completely flush ceiling plane",
    applications: [
      "Northvolt DS1 & DS2 (Sweden - 37,000 m²)",
      "SK ON Gigafactory (Yancheng, China - 160,000 m²)",
      "Lithium Battery Clean & Dry Rooms",
    ],
    advantages: [
      "Concealed framing eliminates exposed T-bar ledges for seamless cleanroom aesthetics",
      "Specified by Northvolt Sweden for both DS1 and DS2 clean and dry room suites",
      "Rockwool infill provides excellent acoustic dampening and A1 fire rating",
      "Polyurethane-bonded perimeter frame prevents any dust ingress into sterile bays",
    ],
    faqs: [
      {
        question: "Where is the I-GRID system deployed?",
        answer: "I-GRID is installed in Northvolt's Swedish gigafactories (DS1 and DS2) and SK ON's 160,000 m² facility in China.",
      },
    ],
    technicalSpecs: [
      {
            label: "Product Name",
            value: "I-GRID Hidden Frame Ceiling System"
      },
      {
            label: "Product Code",
            value: "POPHEN-I-GRID"
      },
      {
            label: "System Type",
            value: "Hidden Frame Flush Suspension Cleanroom Ceiling System"
      },
      {
            label: "Available Thicknesses",
            value: "50mm / 75mm / 100mm"
      },
      {
            label: "Panel Construction",
            value: "Both sides PPGI pre-painted steel sheet, type frame around perimeter"
      },
      {
            label: "Core / Infill Material",
            value: "Non-combustible Rockwool / Aluminum Honeycomb Infill"
      },
      {
            label: "Suspension",
            value: "Concealed internal suspension profiles creating a completely flush ceiling plane"
      },
      {
            label: "Structural Adhesive",
            value: "Polyurethane structural adhesive"
      },
      {
            label: "Surface Coating",
            value: "Cleanroom PE powder coating"
      },
      {
            label: "Fire Performance",
            value: "FM4882 Fire Rating A1 (0.5 to 2.0 hours fire integrity)"
      },
      {
            label: "Testing & Certification",
            value: "FM4882 Fire Rating A1, TÜV, CE"
      },
      {
            label: "Installation Type",
            value: "Modular hidden frame assembly; zero exposed T-bar ledges"
      },
      {
            label: "Primary Applications",
            value: "Northvolt DS1 & DS2 (Sweden - 37k m²), SK ON Gigafactory (160k m²), clean & dryrooms"
      }
],
    technicalDrawings: [
      {
            id: "i-grid-drawing-1",
            title: "I-GRID Hidden Frame Flush Suspension Profile",
            description: "Concealed grid suspension and flush perimeter interlocking.",
            image: "/images/drawings/i-grid-drawing.webp",
            downloadUrl: "/images/drawings/i-grid-drawing.webp",
            type: "Cross-Section"
      }
],
  },
  {
    id: "ck2000-ffu",
    name: "CK2000 FFU Ceiling System",
    category: "Ceiling Systems",
    tagline: "Patented integrated ceiling solution for Fan Filter Units and flush lighting",
    description:
      "Patented cleanroom ceiling grid specifically engineered for high-density Fan Filter Unit (FFU) layouts and aerodynamic flush teardrop LED luminaires. Accommodates 100% HEPA coverage for ISO Class 1 to Class 5 cleanrooms.",
    image: "/images/cleanroom-systems-interior-Z8QHFfaO.webp",
    thickness: "55mm / 70mm / 100mm",
    skin: "Extruded aluminum with universal FFU rebate",
    core: "Aluminum Honeycomb sandwich panels",
    glue: "Structural epoxy adhesive",
    surfacePaint: "Silicon-free anti-static powder coat",
    fireRating: "FM4882 Fire Grade A1",
    certification: ["Patented FFU Ceiling Solution", "FM4882", "Intertek Air Tightness"],
    specialFeature: "Patented ceiling solution for FFU and flush ceiling light fixtures with certified die-cast fire sprinkler connectors",
    applications: [
      "Tata Electronics OSAT (Assam)",
      "Intel Falcon (Malaysia)",
      "Semiconductor Photolithography Bays",
      "Optoelectronics & Nanotech Fabs",
    ],
    advantages: [
      "Patented grid profile accommodates standard 2x2 ft, 2x4 ft, and 4x4 ft Fan Filter Units",
      "Integrated flush teardrop light tracks minimize airflow turbulence beneath filter faces",
      "Equipped with FM-certified die-cast fire sprinkler connectors",
      "Guaranteed airtight perimeter gasket prevents plenum bypass leaks",
    ],
    faqs: [
      {
        question: "What makes the CK2000 FFU ceiling system patented?",
        answer: "Its patented design integrates FFU mounting rebates, sprinkler die-cast connections, and flush aerodynamic light fixtures into a single unified structural aluminum extrusion.",
      },
    ],
    technicalSpecs: [
      {
            label: "Product Name",
            value: "CK2000 FFU Ceiling System"
      },
      {
            label: "Product Code",
            value: "POPHEN-CK2000-FFU"
      },
      {
            label: "System Type",
            value: "Patented Integrated Ceiling Solution for Fan Filter Units & Aerodynamic Lighting"
      },
      {
            label: "Profile Depth",
            value: "55mm / 70mm / 100mm"
      },
      {
            label: "Structural Profile",
            value: "Patented heavy-duty extruded aluminum grid with universal FFU rebate"
      },
      {
            label: "Filter Module Support",
            value: "Standard 2x2 ft, 2x4 ft, and 4x4 ft HEPA/ULPA Fan Filter Units"
      },
      {
            label: "Lighting Integration",
            value: "Integrated flush teardrop LED light tracks beneath grid members"
      },
      {
            label: "Fire Protection",
            value: "Certified die-cast fire sprinkler connectors embedded in grid intersections"
      },
      {
            label: "Surface Paint",
            value: "Silicon-free anti-static powder coating"
      },
      {
            label: "Fire Performance",
            value: "FM4882 Fire Grade A1"
      },
      {
            label: "Testing & Certification",
            value: "Patented FFU Ceiling Solution, FM4882, Intertek Air Tightness"
      },
      {
            label: "Primary Applications",
            value: "Tata Electronics OSAT (Assam), Intel Falcon (Malaysia), ISO Class 1 to Class 5 cleanrooms"
      }
],
    technicalDrawings: [
      {
            id: "ck2000-ffu-drawing-1",
            title: "CK2000 FFU Integrated Ceiling Grid & Light Track",
            description: "FFU gasket rebate, teardrop lighting slot, and die-cast sprinkler node.",
            image: "/images/drawings/ck2000-ffu-drawing.webp",
            downloadUrl: "/images/drawings/ck2000-ffu-drawing.webp",
            type: "Cross-Section"
      }
],
  },
  {
    id: "d-grid",
    name: "D-GRID Plenum Ceiling System",
    category: "Ceiling Systems",
    tagline: "Heavy-duty plenum ceiling system for large battery plants and HVAC ducting",
    description:
      "Engineered plenum ceiling grid system designed to support heavy low-dew-point dehumidification ducting, return air plenums, and rockwool insulated panels in gigawatt-scale battery factories.",
    image: "/images/activity1-DGOBdrHK.webp",
    thickness: "Modular structural grid with 50mm–100mm panels",
    skin: "Structural steel and extruded aluminum alloy",
    core: "Rockwool / Aluminum Honeycomb",
    glue: "Polyurethane adhesive",
    surfacePaint: "Anti-corrosion industrial powder coat",
    fireRating: "FM4882 Fire Rating A1",
    certification: ["FM4882", "TÜV", "CE"],
    specialFeature: "Plenum ceiling system carrying heavy industrial air ducting and dryroom mechanical equipment",
    applications: [
      "CATL Gigafactory (Debrecen, Hungary - 340,000 m²)",
      "ACC Douvrin (France - 77,800 m²)",
      "Northvolt DS1 & DS2 (Sweden)",
      "Premier Energies Solar Cell (Naidupeta, India)",
    ],
    advantages: [
      "Engineered specifically for gigafactory dryrooms where massive air handling ductwork is suspended overhead",
      "Installed in Europe's largest battery plants (CATL Hungary, ACC France, Northvolt Sweden)",
      "Supports double plenum ceiling arrangements with high differential air pressure",
      "Rockwool acoustic infill minimizes compressor and blower noise transmission",
    ],
    faqs: [
      {
        question: "Why is D-GRID specified for battery dryroom projects?",
        answer: "Battery dryrooms require enormous air change volumes and low-dew-point ducting. D-GRID provides the structural steel strength required to carry these massive MEP loads while maintaining an airtight vapor envelope.",
      },
    ],
    technicalSpecs: [
      {
            label: "Product Name",
            value: "D-GRID Plenum Ceiling System"
      },
      {
            label: "Product Code",
            value: "POPHEN-D-GRID"
      },
      {
            label: "System Type",
            value: "Heavy-Duty Industrial Plenum Ceiling System for Gigafactories & Dryrooms"
      },
      {
            label: "Grid Dimensions",
            value: "Modular structural grid carrying 50mm–100mm insulated sandwich panels"
      },
      {
            label: "Structural Profile",
            value: "Structural steel suspension combined with extruded aluminum alloy beams"
      },
      {
            label: "Core / Infill Material",
            value: "High-density Rockwool / Aluminum Honeycomb"
      },
      {
            label: "Mechanical Carrying Capacity",
            value: "Heavy MEP carrying capacity for massive dryroom dehumidification and HVAC ducts"
      },
      {
            label: "Surface Coating",
            value: "Anti-corrosion industrial powder coating"
      },
      {
            label: "Fire Performance",
            value: "FM4882 Fire Rating A1"
      },
      {
            label: "Testing & Certification",
            value: "FM4882, TÜV, CE"
      },
      {
            label: "Pressure Differential",
            value: "Engineered for extreme positive/negative cleanroom pressure differentials"
      },
      {
            label: "Primary Applications",
            value: "CATL Gigafactory (Debrecen - 340k m²), ACC Douvrin (77.8k m²), Northvolt Sweden, Premier Energies"
      }
],
    technicalDrawings: [
      {
            id: "d-grid-drawing-1",
            title: "D-GRID Heavy Industrial Plenum Ceiling System",
            description: "Primary structural hanger truss and plenum ducting support detail.",
            image: "/images/drawings/d-grid-drawing.webp",
            downloadUrl: "/images/drawings/d-grid-drawing.webp",
            type: "System Overview"
      }
],
  },
  {
    id: "doors-windows",
    name: "Cleanroom Doors and Windows",
    category: "Doors & Windows",
    tagline: "Intertek-certified airtight swing/sliding doors & flush double-glazed windows",
    description:
      "Complete cleanroom entry and observation systems including square tube steel frames, automatic hermetic sliding doors, interlocking airlock doors, and double-glazed flush safety windows with internal desiccant chambers.",
    image: "/images/cleanroom-doors-hero-D007b7fJ.webp",
    thickness: "50mm flush door leaf; 50mm/100mm wall-flush window profiles",
    skin: "0.8mm Galvanized steel powder-coated / Grade 304 Stainless Steel / Toughened Safety Glass",
    core: "Rockwool / Aluminum Honeycomb non-shedding core",
    glue: "High-grade structural epoxy",
    surfacePaint: "Anti-microbial, biocide-resistant coating",
    fireRating: "FM4882, Fire grade A2 / Up to 60 min fire integrity",
    certification: ["Intertek Certification for Air Tightness of Panel & Doors", "FM4882", "CE"],
    specialFeature: "Square tube door framing, automatic drop-down bottom seal, flush coplanar vision panels",
    applications: ["All Semiconductor Fabs", "Battery Dryrooms", "Pharmaceutical Airlocks", "Solar Cell Facilities"],
    advantages: [
      "Intertek-certified for minimum leakage through door perimeter and drop-down floor seals",
      "Square tube door frame ensures zero twisting or distortion under continuous high airlock pressure",
      "Double-glazed flush windows feature 3A molecular sieve desiccant to prevent condensation",
      "Supports electronic interlocking for 2-door, 3-door, and 4-door personnel and material airlocks",
    ],
    faqs: [
      {
        question: "Are POPHEN cleanroom doors tested for air leakage?",
        answer: "Yes. POPHEN doors and wall panels carry certified Intertek Test Reports confirming minimal air leakage under positive and negative room pressure differentials.",
      },
    ],
    technicalSpecs: [
      {
            label: "Product Name",
            value: "Cleanroom Doors and Windows"
      },
      {
            label: "Product Code",
            value: "POPHEN-CR-DOOR-WIN"
      },
      {
            label: "System Type",
            value: "Intertek-Certified Flush Cleanroom Swing/Sliding Doors & Double-Glazed Windows"
      },
      {
            label: "Door Leaf Thickness",
            value: "45mm / 50mm"
      },
      {
            label: "Window Thickness",
            value: "Flush 50mm / 75mm / 100mm matching wall panel thickness"
      },
      {
            label: "Door Construction",
            value: "Extruded aluminum alloy frame with color-coated steel or SS 304 skins, honeycomb/rockwool core"
      },
      {
            label: "Window Construction",
            value: "Double-layer 5mm/6mm tempered safety glass with desiccated aluminum spacer"
      },
      {
            label: "Sealing Mechanism",
            value: "Automatic drop-down bottom seal + 3-sided silicone gasket (interlocking ready)"
      },
      {
            label: "Surface Finish",
            value: "Silicon-free anti-static coating / Brushed stainless steel 304/316"
      },
      {
            label: "Testing & Certification",
            value: "Intertek Air Tightness Certified, CE, ISO 14644-4"
      },
      {
            label: "Available Options",
            value: "Automatic sliding hermetic door, interlocking access control, radiation shielding"
      },
      {
            label: "Primary Applications",
            value: "Pharmaceutical sterile airlocks, semiconductor cleanroom entries, bio-safety suites"
      }
],
    technicalDrawings: [
      {
            id: "doors-windows-drawing-1",
            title: "Cleanroom Flush Double-Glazed Window & Door Frame",
            description: "Flush window detail with silica desiccant chamber and dual-pane safety glass.",
            image: "/images/drawings/doors-windows-drawing.webp",
            downloadUrl: "/images/drawings/doors-windows-drawing.webp",
            type: "Cross-Section"
      },
      {
            id: "doors-windows-drawing-2",
            title: "Airtight Cleanroom Swing Door Assembly Detail",
            description: "Drop-seal mechanism, aluminum door frame rebate, and interlocking sensor mounting.",
            image: "/images/drawings/doors-drawing.webp",
            downloadUrl: "/images/drawings/doors-drawing.webp",
            type: "Elevation & Detail"
      }
],
  },
];

export interface ProjectReference {
  id: string;
  name: string;
  client: string;
  location: string;
  country: string;
  year: string;
  area: string;
  cleanliness: string;
  industry: string;
  scope: string;
  systemsUsed: string[];
  description: string;
  image: string;
}

export const BROCHURE_PROJECTS: ProjectReference[] = [
  {
    id: "tata-electronics",
    name: "Tata Electronics OSAT Facility",
    client: "Tata Electronics",
    location: "Jagiroad, Assam",
    country: "India",
    year: "2025",
    area: "35,000 m² (Phase I)",
    cleanliness: "Class 10K, 100K & 1K",
    industry: "Semiconductor",
    scope: "Designing, Supply, Installation, Testing & Commissioning (SITC) of Cleanroom Architectural System",
    systemsUsed: ["C50 Caulking Partition System", "CK2000 FFU Ceiling Grid System", "T-Grid Secondary Ceiling"],
    description:
      "Tata Electronics is building India's first biggest indigenous semiconductor assembly and test (OSAT) facility in Jagiroad, Assam. Designed to produce 48 million chips per day across 4 phases, with Phase 1 operational by end of 2025. POPHEN is executing the cleanroom architectural envelope with C50 caulking walls, CK2000 FFU ceiling grid, and T-Grid secondary ceiling.",
    image: "/images/activity2-CDpLlqGO.webp",
  },
  {
    id: "premier-energies",
    name: "Premier Energies Solar PV Cell Plant",
    client: "Premier Energies",
    location: "Naidupeta, Andhra Pradesh",
    country: "India",
    year: "2025",
    area: "55,500 m²",
    cleanliness: "ISO Class 6 & ISO Class 7",
    industry: "Solar Cell / Renewable Energy",
    scope: "Designing & SITC of Cleanroom Architectural System",
    systemsUsed: ["Cleanroom Partition System", "Double Plenum Ceiling System", "Cleanroom Doors", "Epoxy Flooring"],
    description:
      "Premier Energies is setting up a state-of-the-art 4 GW solar PV TOPCon cell manufacturing line in the Naidupeta Industrial Park, Andhra Pradesh. POPHEN is executing the 55,500 m² cleanroom architectural envelope with modular partitions, double plenum ceiling systems, hermetic doors, and epoxy flooring.",
    image: "/images/hero-banner-1-v2.png",
  },
  {
    id: "catl-hungary",
    name: "CATL 100 GWh Battery Plant",
    client: "Contemporary Amperex Technology Co., Limited (CATL)",
    location: "Debrecen",
    country: "Hungary",
    year: "2024",
    area: "340,000 m²",
    cleanliness: "Clean & Dry Room (Ultra-low dew point)",
    industry: "Battery Manufacturing",
    scope: "Designing, SITC of Cleanroom Architectural System & Air Ducting",
    systemsUsed: [
      "D-Grid Plenum Ceiling System (Rockwool)",
      "CK2000 Walkable FFU Ceiling System (with Alu Honeycomb Panel)",
      "C50 50mm Wall Partition System (Rockwool & Alu Honeycomb)",
      "Industrial Air Ducting Integration",
    ],
    description:
      "CATL is building a landmark 100 GWh electric vehicle battery gigafactory in Debrecen, Hungary. POPHEN executed 340,000 m² of clean and dry rooms featuring D-Grid plenum ceilings, CK2000 walkable FFU ceiling decks, and C50 dual-infill partition walls.",
    image: "/images/cleanroom-walls-detail-CJABaUMG.webp",
  },
  {
    id: "intel-falcon",
    name: "Intel Falcon Semiconductor Expansion",
    client: "Intel Corporation",
    location: "Kulim, Kedah",
    country: "Malaysia",
    year: "2022",
    area: "43,000 m²",
    cleanliness: "Class 1K & Class 10K",
    industry: "Semiconductor",
    scope: "RFP B7IN-30-K007: Designing & SITC of Cleanroom Architectural System",
    systemsUsed: [
      "CK2000 Walkable FFU Ceiling System (30mm/70mm Alu Honeycomb Panel)",
      "SL2000 45mm Stud-less Wall Partition System (Alu Honeycomb)",
      "Cleanroom Doors & Windows",
    ],
    description:
      "Intel Corp invested more than RM30 billion to expand its advanced packaging and test operations in Malaysia. POPHEN delivered 43,000 m² of ISO Class 1K and 10K cleanrooms utilizing CK2000 walkable FFU ceilings with aluminum honeycomb and SL2000 stud-less partitions.",
    image: "/images/cleanroom-ceilings-hero-d8AQO7Df.webp",
  },
  {
    id: "infineon-klm3",
    name: "Infineon KLM3 WP6 Cleanroom",
    client: "Infineon Technologies AG",
    location: "Kulim, Kedah",
    country: "Malaysia",
    year: "2022",
    area: "35,000 m²",
    cleanliness: "Class 1K & Class 10K",
    industry: "Semiconductor",
    scope: "Design development & SITC of Cleanroom Stud-less Wall System, Swing Doors & Automatic Sliding Doors",
    systemsUsed: ["SL2000 Stud-less Wall System", "Cleanroom Swing Doors", "Automatic Hermetic Sliding Doors"],
    description:
      "Infineon Technologies, Germany's largest semiconductor manufacturer, expanded its Kulim power semiconductor manufacturing facility. POPHEN designed and installed 35,000 m² of cleanroom stud-less wall envelopes along with automated sliding and swing airlock doors.",
    image: "/images/activity3-DHLpvUU3.webp",
  },
  {
    id: "tesla-gigafactory",
    name: "Tesla Shanghai Gigafactory Clean Facility",
    client: "Tesla",
    location: "Lingang New Area, Shanghai",
    country: "China",
    year: "2022",
    area: "200,000 m²",
    cleanliness: "Controlled Manufacturing & Energy Storage Bay",
    industry: "Battery Manufacturing",
    scope: "Turnkey delivery of T-Grid Ceiling, C50 Caulking Wall System, Doors & Windows",
    systemsUsed: ["T-Grid Ceiling System", "C50 Caulking Wall System", "Cleanroom Doors & Windows"],
    description:
      "Tesla's massive Shanghai vehicle and Megapack energy storage manufacturing base. POPHEN executed 200,000 m² of controlled industrial partitions using C50 caulking walls, T-grid ceilings, and airtight industrial cleanroom doors.",
    image: "/images/activity1-DGOBdrHK.webp",
  },
  {
    id: "acc-douvrin",
    name: "ACC Douvrin Battery Gigafactory",
    client: "Automotive Cells Company (ACC)",
    location: "Douvrin",
    country: "France",
    year: "2022",
    area: "77,800 m²",
    cleanliness: "Clean & Dry Room",
    industry: "Battery Manufacturing",
    scope: "Designing & SITC of Clean & Dry Room System",
    systemsUsed: [
      "D-Grid Plenum Ceiling System (Rockwool)",
      "CK2000 Walkable FFU Ceiling System (Alu Honeycomb Panel)",
      "C50 50mm Wall Partition System (Rockwool & Alu Honeycomb)",
    ],
    description:
      "ACC, a premier French battery consortium manufacturing EV lithium-ion cells for Europe, built its first flagship gigafactory in Douvrin, France. POPHEN delivered 77,800 m² of clean & dry rooms featuring D-Grid plenum ceilings, CK2000 walkable FFU ceilings, and C50 dual-core wall partitions.",
    image: "/images/cleanroom-walls-hallway-D4ZV_xh8.webp",
  },
  {
    id: "northvolt-sweden",
    name: "Northvolt DS1 & DS2 Gigafactory",
    client: "Northvolt AB",
    location: "Skellefteå",
    country: "Sweden",
    year: "2020",
    area: "37,000 m² (DS1: 15,000 m² + DS2: 22,000 m²)",
    cleanliness: "Clean & Dry Room",
    industry: "Battery Manufacturing",
    scope: "Designing, SITC of Clean & Dry Room System",
    systemsUsed: ["D-Grid & I-Grid with Rockwool Ceiling", "C50 Rockwool Wall System"],
    description:
      "Swedish EV battery pioneer Northvolt developed its gigafactory in Skellefteå. POPHEN completed both Clean & Dry Room DS1 (15,000 m²) and DS2 (22,000 m²) with D-Grid and I-Grid rockwool ceilings and C50 fire-rated rockwool wall partitions.",
    image: "/images/hero-cleanroom-Chp3Ho9d.webp",
  },
  {
    id: "sk-on-china",
    name: "SK ON EV Battery Gigafactory",
    client: "SK New Energy (Jiangsu) Co., Ltd.",
    location: "Yancheng",
    country: "China",
    year: "2021",
    area: "160,000 m²",
    cleanliness: "Clean & Dry Room",
    industry: "Battery Manufacturing",
    scope: "Turnkey SITC of I-Grid Plenum Ceiling System & C50/C100 Wall Partition System",
    systemsUsed: ["I-Grid Plenum Ceiling System (Rockwool with Gypsum)", "C50/C100 50/100mm Wall Partition System (Rockwool)"],
    description:
      "South Korean EV battery giant SK On constructed a 160,000 m² gigafactory in Yancheng, China. POPHEN designed and installed the complete clean & dry room envelope utilizing I-Grid plenum ceilings and C50/C100 rockwool partitions.",
    image: "/images/cleanroom-ceilings-detail-H-esTC_Q.webp",
  },
  {
    id: "globalfoundries-chengdu",
    name: "GlobalFoundries 300mm Fab",
    client: "GlobalFoundries",
    location: "Chengdu",
    country: "China",
    year: "2017",
    area: "76,000 m²",
    cleanliness: "ISO Class 100 & Class 1K",
    industry: "Semiconductor",
    scope: "Designing, SITC of Cleanroom System CK2000 Ceiling System",
    systemsUsed: ["CK2000 Walkable Ceiling System", "Cleanroom Wall Systems"],
    description:
      "GlobalFoundries, the world's 4th largest semiconductor foundry, constructed a 76,000 m² front-end wafer fabrication facility in Chengdu. POPHEN completed the design and installation of the CK2000 heavy-duty walkable ceiling system.",
    image: "/images/cleanroom-systems-interior-Z8QHFfaO.webp",
  },
  {
    id: "texas-instruments",
    name: "Texas Instruments Fab Facilities",
    client: "Texas Instruments Incorporated",
    location: "Malaysia & Chengdu, China",
    country: "Malaysia / China",
    year: "2016–2023",
    area: "63,000 m² total (23,000 m² Malaysia + 40,000 m² China)",
    cleanliness: "Class 1K & Class 10K",
    industry: "Semiconductor",
    scope: "Designing, SITC of Cleanroom Ceiling System, Caulking Wall, Stud Wall, Doors & Windows",
    systemsUsed: ["CK2000 Ceiling System", "Caulking Wall System", "Stud Wall System", "Doors & Windows"],
    description:
      "American semiconductor leader Texas Instruments contracted POPHEN across multiple facility expansions in Malaysia and Chengdu, delivering 63,000 m² of certified cleanroom envelope systems.",
    image: "/images/activity4-3RM3aurZ.webp",
  },
  {
    id: "stmicroelectronics",
    name: "STMicroelectronics Facilities",
    client: "STMicroelectronics",
    location: "Bouskoura (Morocco) & France",
    country: "Morocco / France",
    year: "2016–2019",
    area: "3,300 m² (Morocco: 2,000 m²; France: 1,300 m²)",
    cleanliness: "ISO Class 5 & Class 6",
    industry: "Semiconductor",
    scope: "Designing, SITC of Cleanroom System with CK2000 Ceiling System, C50 50mm Wall Partitions, Doors & Windows",
    systemsUsed: ["CK2000 Ceiling System", "C50 50mm Wall Partition System", "Cleanroom Doors & Windows"],
    description:
      "French-Italian multinational semiconductor manufacturer STMicroelectronics selected POPHEN for European and North African precision assembly cleanrooms in Bouskoura, Morocco and France.",
    image: "/images/cleanroom-doors-hero-D007b7fJ.webp",
  },
  {
    id: "silterra-malaysia",
    name: "Silterra Fab 1E Expansion",
    client: "Silterra Malaysia",
    location: "Kulim, Kedah",
    country: "Malaysia",
    year: "2019",
    area: "1,200 m²",
    cleanliness: "ISO Class 100",
    industry: "Semiconductor",
    scope: "Designing, SITC of Cleanroom System CK2000 Walkable Ceiling & SS2000 45mm Stud Wall Partition",
    systemsUsed: ["CK2000 Walkable Ceiling System", "SS2000 45mm Stud Wall Partition System"],
    description:
      "Silterra Malaysia, a premier 200mm wafer front-end foundry, expanded its Fab 1E cleanroom in Kulim. POPHEN executed the ISO Class 100 photolithography suite using CK2000 walkable ceilings and SS2000 stud walls.",
    image: "/images/cleanroom-windows-hero-eqB039vc.webp",
  },
];

export interface CertificationRecord {
  id: string;
  name: string;
  authority: string;
  certificateNumber: string;
  scope: string;
  testStandard: string;
  applicableProducts: string[];
  description: string;
  badge: string;
}

export const BROCHURE_CERTIFICATIONS: CertificationRecord[] = [
  {
    id: "fm-approvals",
    name: "FM Approvals (FM4882)",
    authority: "FM Approvals LLC (United States)",
    certificateNumber: "FM4882 Certificate of Compliance",
    scope: "Class 1 Cleanroom Wall and Ceiling Materials",
    testStandard: "FM Approval Standard 4882 for Cleanroom Materials",
    applicableProducts: [
      "R50 / R75 / R100 Removable Wall System",
      "C50 / C75 / C100 Caulking Wall System",
      "SS2000 Stud Wall Partition System",
      "SL2000 Studless Wall System",
      "CK2000 Walkable Ceiling Grid System",
      "I-GRID Hidden Frame Ceiling System",
    ],
    description:
      "Full range of POPHEN cleanroom architectural panels and walkable ceiling grids are tested and certified under FM4882 for low smoke generation, non-combustibility, and flame spread prevention without requiring sprinkler coverage in cleanroom plenums.",
    badge: "FM Approved",
  },
  {
    id: "tuv-sud",
    name: "TÜV SÜD Structural Load Certification",
    authority: "TÜV SÜD Rail & Industrial Technologies",
    certificateNumber: "Report No. TC.23.01.000112 / TC.23.01.000162",
    scope: "Uniform Load Test & Concentrated Load Test for Ceiling Grid Systems",
    testStandard: "TÜV SÜD Structural Deflection & Failure Test Protocols",
    applicableProducts: ["CK2000 Heavy Duty Walkable Ceiling Grid System", "I-GRID Ceiling System", "D-GRID Plenum Ceiling"],
    description:
      "Certifies the highest load-bearing capacity for POPHEN walkable ceiling grid profiles under heavy point loads (up to 150 kg) and uniform distributed loads (up to 250 kg/m²) with zero structural deflection.",
    badge: "TÜV SÜD Certified",
  },
  {
    id: "intertek",
    name: "Intertek Airtightness & Leakage Certification",
    authority: "Intertek Testing Services",
    certificateNumber: "Intertek Test Report No. 220501897SHA-001",
    scope: "Air Tightness & Minimum Leakage Through Panels & Doors",
    testStandard: "ASTM E283 / ISO 14644-4 Cleanroom Pressure Boundary Testing",
    applicableProducts: [
      "C50 / C75 / C100 Caulking Wall System",
      "Cleanroom Doors (Swing & Automatic Sliding)",
      "Cleanroom Windows",
      "CK2000 Walkable FFU Grid",
    ],
    description:
      "Verified Intertek test report certifying minimal air leakage through POPHEN wall joints, door frames, drop-down bottom seals, and window cavities, meeting strict criteria for battery dryrooms and semiconductor cleanrooms.",
    badge: "Intertek Certified",
  },
  {
    id: "analab-voc",
    name: "Analab Organic Outgassing Certification",
    authority: "Analars Technologies (Wuxi) Co., Ltd.",
    certificateNumber: "Report No. AL2022-0684",
    scope: "Airborne Molecular Contamination (AMC) & VOC Emission Testing",
    testStandard: "GC/MS Analysis of Cleanroom Wall Coating Outgassing",
    applicableProducts: ["R-Series", "C-Series", "SS2000", "SL2000", "CL2000 Pasted Walls"],
    description:
      "Rigorous gas chromatography-mass spectrometry (GC/MS) analysis verifying that POPHEN silicon-free coatings release negligible VOCs or siloxanes, protecting ultra-sensitive semiconductor photolithography and wafer steppers.",
    badge: "Analab Tested",
  },
  {
    id: "sgs",
    name: "SGS Cleanroom Building Materials Compliance",
    authority: "SGS-CSTC Standards Technical Services",
    certificateNumber: "SGS Report No. AJFS2005003671FF",
    scope: "Chemical Resistance, Wipe-down Durability & Particle Shedding",
    testStandard: "ISO 14644-1 / EN 13501-1 Fire Reaction",
    applicableProducts: ["All POPHEN Wall Systems", "Ceiling Panels", "Doors & Windows"],
    description:
      "SGS certification confirming non-particle shedding under continuous positive air pressure, high biocide and VHP (vaporized hydrogen peroxide) resistance, and durability against aggressive industrial cleaning agents.",
    badge: "SGS Certified",
  },
  {
    id: "ce-mark",
    name: "CE Conformity Declaration",
    authority: "European Conformity European Union",
    certificateNumber: "Certificate No. 0407-CPR-0985",
    scope: "European Construction Products Regulation (CPR 305/2011/EU)",
    testStandard: "EN 14509 Self-supporting double skin metal faced insulating panels",
    applicableProducts: ["All POPHEN Wall and Ceiling Systems"],
    description:
      "Certified compliance with European Union health, safety, and environmental protection standards for industrial manufacturing facilities across the EU, including France, Hungary, and Sweden.",
    badge: "CE Mark",
  },
];

export const FAST_TRACK_METHODOLOGY = [
  {
    step: "01",
    title: "Project Review & Requirement Understanding",
    desc: "Comprehensive engineering review of cleanroom cleanliness classes (ISO Class 1 to 8), low dew point targets (down to -60°C for battery dryrooms), ceiling equipment loads, and air pressure cascade schemes.",
  },
  {
    step: "02",
    title: "Standard Size Material Ordering Direct on PO",
    desc: "Standard ceiling grids, wall panels, and structural hardware are ordered straight upon PO issuance without waiting for protracted design freeze or shop drawing approvals, cutting weeks off lead times.",
  },
  {
    step: "03",
    title: "Site Measurement & Drawing Verification",
    desc: "High-precision on-site 3D laser measurement and drawing verification commences immediately once Letter of Intent (LOI) is issued.",
  },
  {
    step: "04",
    title: "Modular Zoning & Priority Area Split",
    desc: "Facility is compartmentalized into discrete modular zones with clear delivery sequencing. Priority zones are established for early equipment tool move-in.",
  },
  {
    step: "05",
    title: "Early Clean Build Protocol Implementation",
    desc: "Clean build protocols are enacted early in construction (temporary partitions, sticky mats, gowning) to drastically reduce the duration and cost of final technical cleaning.",
  },
  {
    step: "06",
    title: "Master Schedule Critical Path Monitoring",
    desc: "One central master schedule maintained by project management with continuous daily monitoring of critical paths and milestone dependencies.",
  },
  {
    step: "07",
    title: "Two-Week Look-Ahead Coordination",
    desc: "Continuous 2-week rolling look-ahead schedules pre-empt potential delays, trade clashes with MEP contractors, and material delivery bottlenecks.",
  },
  {
    step: "08",
    title: "Two-Shift Schedule Catch Up When Required",
    desc: "Deployment of two-shift execution teams to fast-track physical wall and ceiling installation without interrupting adjacent trade activities.",
  },
  {
    step: "09",
    title: "Staggered Handover for Early Tool Move-In",
    desc: "Completed priority zones are handed over early, allowing client process engineers to move in production tools weeks ahead of overall facility completion.",
  },
  {
    step: "10",
    title: "Ready-for-Equipment (RFE) & NEBB Validation",
    desc: "Final RFE milestone verified: ceiling and walls installed, MAU operational providing cooling and humidity control, raised floor grounded, shell airtight, and NEBB testing conducted at at-rest conditions.",
  },
];

export interface ClientItem {
  id: string;
  name: string;
  category: "Semiconductor & Wafer Fabs" | "EV Battery & Energy Storage" | "Solar & Renewable Cells" | "High-Tech & Electronics" | "Academia & Research";
  country: string;
  logo: string;
  description: string;
}

export const CLIENTELE_DATA: ClientItem[] = [
  // Row 1
  {
    id: "intel",
    name: "Intel Corporation",
    category: "Semiconductor & Wafer Fabs",
    country: "USA / Malaysia",
    logo: "/images/clients/intel.webp",
    description: "43,000 m² cleanroom envelope (Class 1K & 10K) for advanced chip packaging.",
  },
  {
    id: "st",
    name: "STMicroelectronics",
    category: "Semiconductor & Wafer Fabs",
    country: "Morocco / Europe",
    logo: "/images/clients/st.webp",
    description: "2,000 m² CK2000 ceiling, airtight doors and cleanroom windows in Bouskoura.",
  },
  {
    id: "silterra",
    name: "SiTERRA Malaysia",
    category: "Semiconductor & Wafer Fabs",
    country: "Malaysia",
    logo: "/images/clients/silterra.webp",
    description: "ISO Class 100 cleanroom expansion utilizing SS2000 modular stud wall partitions.",
  },
  {
    id: "bosch",
    name: "Bosch",
    category: "High-Tech & Electronics",
    country: "Germany / Global",
    logo: "/images/clients/bosch.webp",
    description: "Automotive sensor and precision electronic component clean manufacturing.",
  },
  {
    id: "catl",
    name: "CATL",
    category: "EV Battery & Energy Storage",
    country: "Hungary / Global",
    logo: "/images/clients/catl.webp",
    description: "340,000 m² ultra-low dew point (-50°C) dryrooms in Debrecen gigafactory.",
  },
  {
    id: "zensemi",
    name: "ZENSEMI",
    category: "Semiconductor & Wafer Fabs",
    country: "Global",
    logo: "/images/clients/zensemi.webp",
    description: "Front-end wafer fab cleanrooms with outgassing-compliant architectural panels.",
  },
  {
    id: "tesla",
    name: "Tesla",
    category: "EV Battery & Energy Storage",
    country: "USA / China",
    logo: "/images/clients/tesla.webp",
    description: "200,000 m² dryroom and clean production partitions at Shanghai Gigafactory.",
  },

  // Row 2
  {
    id: "baofe-energy",
    name: "BAOFE Energy",
    category: "EV Battery & Energy Storage",
    country: "Global",
    logo: "/images/clients/baofe-energy.webp",
    description: "High-capacity lithium battery cell assembly dryrooms.",
  },
  {
    id: "northvolt",
    name: "Northvolt",
    category: "EV Battery & Energy Storage",
    country: "Sweden",
    logo: "/images/clients/northvolt.webp",
    description: "37,000 m² clean and dryroom suites for Northvolt DS1 & DS2 gigafactories.",
  },
  {
    id: "acc",
    name: "ACC (Automotive Cells Company)",
    category: "EV Battery & Energy Storage",
    country: "France",
    logo: "/images/clients/acc.webp",
    description: "77,800 m² dryroom envelope for Stellantis & Mercedes-Benz JV in Douvrin.",
  },
  {
    id: "western-digital",
    name: "Western Digital",
    category: "High-Tech & Electronics",
    country: "USA / Global",
    logo: "/images/clients/western-digital.webp",
    description: "Hard drive head gimbal assembly and magnetic recording media cleanrooms.",
  },
  {
    id: "gta",
    name: "GTA Semiconductor",
    category: "Semiconductor & Wafer Fabs",
    country: "Global",
    logo: "/images/clients/gta.webp",
    description: "Analog and power management semiconductor manufacturing lines.",
  },
  {
    id: "eve-energy",
    name: "EVE Energy",
    category: "EV Battery & Energy Storage",
    country: "Global",
    logo: "/images/clients/eve-energy.webp",
    description: "Prismatic and cylindrical battery cleanroom dryroom facilities.",
  },

  // Row 3
  {
    id: "texas-instruments",
    name: "Texas Instruments",
    category: "Semiconductor & Wafer Fabs",
    country: "USA / China",
    logo: "/images/clients/texas-instruments.webp",
    description: "Wafer fab cleanroom partitions meeting non-combustible FM4882 standards.",
  },
  {
    id: "waaree",
    name: "WAAREE Energies",
    category: "Solar & Renewable Cells",
    country: "India",
    logo: "/images/clients/waaree.webp",
    description: "High-efficiency photovoltaic module and cell clean manufacturing plants.",
  },
  {
    id: "soitec",
    name: "Soitec",
    category: "Semiconductor & Wafer Fabs",
    country: "France / Global",
    logo: "/images/clients/soitec.webp",
    description: "Engineered substrate and SOI wafer production cleanrooms.",
  },
  {
    id: "smic",
    name: "SMIC",
    category: "Semiconductor & Wafer Fabs",
    country: "Global",
    logo: "/images/clients/smic.webp",
    description: "Advanced semiconductor fabrication foundry clean environments.",
  },
  {
    id: "cansemi",
    name: "CanSemi Technology",
    category: "Semiconductor & Wafer Fabs",
    country: "Global",
    logo: "/images/clients/cansemi.webp",
    description: "12-inch analog chip production cleanrooms.",
  },

  // Row 4
  {
    id: "tata-electronics",
    name: "Tata Electronics",
    category: "Semiconductor & Wafer Fabs",
    country: "India",
    logo: "/images/clients/tata-electronics.webp",
    description: "35,000 m² cleanroom envelope for landmark OSAT facility in Jagiroad, Assam.",
  },
  {
    id: "cxmt",
    name: "CXMT (ChangXin Memory Technologies)",
    category: "Semiconductor & Wafer Fabs",
    country: "Global",
    logo: "/images/clients/cxmt.webp",
    description: "DRAM memory wafer fabrication cleanroom installations.",
  },
  {
    id: "amd",
    name: "AMD",
    category: "High-Tech & Electronics",
    country: "USA / Global",
    logo: "/images/clients/amd.webp",
    description: "Microprocessor research, failure analysis, and packaging laboratories.",
  },
  {
    id: "cmsemicon",
    name: "Cmsemicon (Cmicrosemiconductor)",
    category: "Semiconductor & Wafer Fabs",
    country: "Global",
    logo: "/images/clients/cmsemicon.webp",
    description: "Microcontroller (MCU) and mixed-signal semiconductor testing bays.",
  },
  {
    id: "svolt",
    name: "SVOLT Energy",
    category: "EV Battery & Energy Storage",
    country: "Global",
    logo: "/images/clients/svolt.webp",
    description: "Cobalt-free lithium battery manufacturing dryrooms.",
  },
  {
    id: "atess",
    name: "ATESS Power",
    category: "EV Battery & Energy Storage",
    country: "Global",
    logo: "/images/clients/atess.webp",
    description: "Industrial energy storage systems and inverter clean assembly.",
  },

  // Row 5
  {
    id: "senior",
    name: "Senior Material",
    category: "EV Battery & Energy Storage",
    country: "Global",
    logo: "/images/clients/senior.webp",
    description: "Lithium battery separator film production cleanrooms.",
  },
  {
    id: "xfab",
    name: "X-FAB",
    category: "Semiconductor & Wafer Fabs",
    country: "Germany / Malaysia",
    logo: "/images/clients/xfab.webp",
    description: "Analog/mixed-signal foundry cleanroom suites.",
  },
  {
    id: "globalfoundries",
    name: "GlobalFoundries",
    category: "Semiconductor & Wafer Fabs",
    country: "USA / Global",
    logo: "/images/clients/globalfoundries.webp",
    description: "76,000 m² Fab 11 cleanroom envelope with heavy-duty walkable ceilings.",
  },
  {
    id: "sk",
    name: "SK New Energy / SK hynix",
    category: "EV Battery & Energy Storage",
    country: "South Korea / China",
    logo: "/images/clients/sk.webp",
    description: "160,000 m² lithium battery plant cleanroom and dryroom envelopes.",
  },
  {
    id: "dy-patil",
    name: "D.Y. Patil International University",
    category: "Academia & Research",
    country: "India",
    logo: "/images/clients/dy-patil.webp",
    description: "Advanced nanotech, photonics, and biotechnology academic research cleanrooms.",
  },
  {
    id: "premier-energies",
    name: "Premier Energies",
    category: "Solar & Renewable Cells",
    country: "India",
    logo: "/images/clients/premier-energies.webp",
    description: "TOPCon solar cell cleanroom envelope in Naidupeta, Andhra Pradesh.",
  },

  // Row 6
  {
    id: "gautam-solar",
    name: "Gautam Solar",
    category: "Solar & Renewable Cells",
    country: "India",
    logo: "/images/clients/gautam-solar.webp",
    description: "Solar PV module and cell manufacturing controlled facilities.",
  },
  {
    id: "alpex",
    name: "Alpex Solar",
    category: "Solar & Renewable Cells",
    country: "India",
    logo: "/images/clients/alpex.webp",
    description: "Photovoltaic cell assembly and quality assurance cleanrooms.",
  },
  {
    id: "emmvee",
    name: "Emmvee Photovoltaic",
    category: "Solar & Renewable Cells",
    country: "India",
    logo: "/images/clients/emmvee.webp",
    description: "High-efficiency crystalline solar cell manufacturing lines.",
  },
];

export interface VerifiedDocument {
  id: string;
  title: string;
  issuer: string;
  reportNumber: string;
  issueDate: string;
  standard: string;
  applicability: string;
  previewImage: string;
  pdfUrl: string;
  description: string;
  badge: string;
  details: { label: string; value: string }[];
}

export const VERIFIED_CERTIFICATIONS: VerifiedDocument[] = [
  {
    id: "fm-approvals-4882",
    title: "Certificate of Compliance – FM4882",
    issuer: "FM Approvals (Member of the FM Global Group)",
    reportNumber: "FM Approval Class 4882 / Project ID 3061297",
    issueDate: "Official Verified Certificate",
    standard: "FM 4882 – Class 1 Fire Rating for Cleanroom Materials",
    applicability: "POPHEN R-Series, C-Series, SS2000, SL2000, CK2000 Ceiling Systems",
    previewImage: "/images/certifications/fm-approved.webp",
    pdfUrl: "/documents/pophen-fm-approved-certificate.pdf",
    badge: "FM Approved",
    description:
      "Official FM Approvals Certificate of Compliance validating non-combustible cleanroom panel assemblies with 30–120 minutes fire endurance, zero smoke toxicity, and low flame-spread characteristics.",
    details: [
      { label: "Issuing Organization", value: "FM Approvals LLC (Norwood, MA, USA)" },
      { label: "Approval Standard", value: "ANSI/FM 4882 Standard for Cleanroom Materials" },
      { label: "Fire Rating", value: "Class 1 / Grade A1/M0 Fire Integrity" },
      { label: "Combustibility", value: "Non-combustible core, zero flammable smoke propagation" },
      { label: "Verification Scope", value: "Modular wall and ceiling sandwich panels" },
    ],
  },
  {
    id: "analab-voc-report",
    title: "Organic Outgassing Test Report (GC/MS)",
    issuer: "Analab Technologies (Wuxi) Co., Ltd.",
    reportNumber: "Lab No. 120711-0076-21 / Report Date 12-07-2021",
    issueDate: "12-07-2021",
    standard: "Dynamic Headspace GC/MS Thermal Desorption (SEMATECH Criteria)",
    applicability: "POPHEN Cleanroom Wall & Ceiling Honeycomb Panels (Silicon-Free Paint)",
    previewImage: "/images/certifications/analab-voc.webp",
    pdfUrl: "/documents/pophen-tuv-intertek-analab-reports.pdf",
    badge: "Analab VOC Certified",
    description:
      "Comprehensive Dynamic Headspace GC/MS chemical analysis verifying ultra-low condensable outgassing, zero silicon contamination, and full compliance with semiconductor front-end wafer fabrication outgassing limits.",
    details: [
      { label: "Testing Laboratory", value: "Analab Technologies (Wuxi) Co., Ltd." },
      { label: "Methodology", value: "Thermal desorption at 50°C for 30 min followed by GC/MS" },
      { label: "Total Outgassing", value: "< 2,000 ng/g (Meets strictest 300mm fab limits)" },
      { label: "Silicone & Phthalates", value: "Not Detected / Below limit of quantification" },
      { label: "Target Application", value: "Semiconductor photolithography & diffusion clean bays" },
    ],
  },
  {
    id: "tuv-load-test-report",
    title: "Walkable Ceiling Uniform & Concentrated Load Test",
    issuer: "TÜV SÜD Certification and Testing (China) Co., Ltd.",
    reportNumber: "Report No. TC.20.01.000270 / CNAS Testing Lab",
    issueDate: "01/20/2021",
    standard: "EN 13964:2014 & ASTM E72 Structural Load Standards",
    applicability: "POPHEN CK2000-AL Heavy Duty Walkable Ceiling Grid System",
    previewImage: "/images/certifications/tuv-load.webp",
    pdfUrl: "/documents/pophen-tuv-intertek-analab-reports.pdf",
    badge: "TÜV SÜD Certified",
    description:
      "Accredited CNAS / TÜV SÜD structural load performance report verifying point load capacity of 150 kg (concentrated technician load) and distributed load of 250 kg/m² with profile deflection well below L/360 limits.",
    details: [
      { label: "Testing Agency", value: "TÜV SÜD / CNAS Accredited Structural Laboratory" },
      { label: "Concentrated Point Load", value: "150 kg (1.5 kN) at mid-span" },
      { label: "Uniform Distributed Load", value: "250 kg/m² continuous maintenance service load" },
      { label: "Deflection Result", value: "< L/360 under full design load (Pass)" },
      { label: "Safety Margin", value: "> 2.5x Ultimate yield safety factor" },
    ],
  },
  {
    id: "intertek-airtight-report",
    title: "Air Tightness & Joint Leakage Test Report",
    issuer: "Intertek Environmental Technology (Taizhou) Co., Ltd.",
    reportNumber: "Report Ref: ITK-ENV-2022-CR-0894",
    issueDate: "Intertek Verified",
    standard: "ISO 14644-4 Annex E / EN 12207 Class 4 Air Permeability",
    applicability: "POPHEN Caulking Wall Systems, Airtight Cleanroom Doors & Windows",
    previewImage: "/images/certifications/intertek-airtight.webp",
    pdfUrl: "/documents/pophen-tuv-intertek-analab-reports.pdf",
    badge: "Intertek Certified",
    description:
      "Independent Intertek test verification confirming exceptional joint air tightness under positive (+50 Pa) and negative (-50 Pa) differential pressure conditions for sterile pharmaceutical and dryroom containment.",
    details: [
      { label: "Testing Authority", value: "Intertek Environmental Technology Ltd." },
      { label: "Differential Pressure", value: "Tested from ±30 Pa to ±100 Pa" },
      { label: "Air Leakage Rate", value: "< 0.05 m³/(h·m²) at 50 Pa (Class 4 Air Permeability)" },
      { label: "Gasket Seal", value: "EPDM / Silicone double compression drop seals" },
      { label: "Containment Rating", value: "Airtight envelope for BSL-3 and dryroom suites" },
    ],
  },
  {
    id: "tuv-witness-report",
    title: "TÜV PSB Witnessed Field Load Test Report",
    issuer: "TÜV SÜD PSB Witnessed Engineering Laboratory",
    reportNumber: "Test Witness Report No. TC.20.01.000189 / 01/21/2021",
    issueDate: "01/21/2021",
    standard: "Witnessed On-Site Static & Cyclic Load Protocol",
    applicability: "POPHEN Extruded Aluminum Walkable Grid Deck Assemblies",
    previewImage: "/images/certifications/tuv-witness.webp",
    pdfUrl: "/documents/pophen-tuv-intertek-analab-reports.pdf",
    badge: "TÜV PSB Witnessed",
    description:
      "Formal engineering witness report documenting third-party verified on-site structural loading, deflection recovery, and fastener pull-out resistance for walkable cleanroom interstitial plenums.",
    details: [
      { label: "Witness Authority", value: "TÜV SÜD PSB Senior Engineering Auditor" },
      { label: "Location", value: "Taizhou Cleanroom Manufacturing Testing Facility" },
      { label: "Load Protocol", value: "Incremental static load up to 350 kg/m²" },
      { label: "Permanent Deformation", value: "Zero residual deformation after load release" },
      { label: "Audit Conclusion", value: "Full structural compliance for heavy industrial walk-on service" },
    ],
  },
];
