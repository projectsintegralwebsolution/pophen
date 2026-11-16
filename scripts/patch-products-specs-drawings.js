const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'data', 'brochureData.ts');

const specsAndDrawingsMap = {
  "r-series": {
    technicalSpecs: [
      { label: "Product Name", value: "R50 / R75 / R100 Removable Wall System" },
      { label: "Product Code", value: "POPHEN-R-SERIES" },
      { label: "System Type", value: "Modular Demountable Partition System" },
      { label: "Available Thicknesses", value: "50mm / 75mm / 100mm" },
      { label: "Panel Construction", value: "Double-skin composite sandwich with extruded perimeter bow-border profiles" },
      { label: "Core / Infill Material", value: "Non-combustible Aluminum Honeycomb / High-density Rockwool" },
      { label: "Surface Material", value: "0.6mm Pre-painted Galvanized Steel (PPGI) or Aluminum Alloy Plate" },
      { label: "Surface Finish", value: "Silicon-free anti-microbial cleanroom coating (ultra-low outgassing)" },
      { label: "Structural Adhesive", value: "Dual-component polyurethane structural adhesive" },
      { label: "Frame / Profile", value: "Concealed anodized aluminum profile with perimeter interlocking gasket" },
      { label: "Fire Performance", value: "FM4882 Class 4882, Fire Grade A1/M0 (30 to 120 minutes fire integrity)" },
      { label: "Testing & Certification", value: "FM4882, CE, ISO 14644-4 Class 1 to Class 8" },
      { label: "Installation Type", value: "100% Removable without damaging adjacent panels (level height locked)" },
      { label: "Air Leakage", value: "High-integrity perimeter tongue-and-groove hermetic seal" },
      { label: "Primary Applications", value: "Semiconductor Front-end & Back-end Fabs, EV Battery Dryrooms, Pharmaceutical Cleanrooms" },
    ],
    technicalDrawings: [
      {
        id: "r-series-drawing-1",
        title: "R-Series Removable Wall System Cross-Section",
        description: "Perimeter bow-border profile, tongue-and-groove joint, and wall-to-floor track connection detail.",
        image: "/images/drawings/r-series-drawing.webp",
        downloadUrl: "/images/drawings/r-series-drawing.webp",
        type: "Cross-Section",
      },
      {
        id: "r-series-drawing-2",
        title: "Comprehensive Fab Wall Architectural System Layout",
        description: "Full elevation, wall-to-ceiling interface, and demountable joint connection diagram.",
        image: "/images/drawings/cleanroom-architecture-overview.webp",
        downloadUrl: "/images/drawings/cleanroom-architecture-overview.webp",
        type: "System Overview",
      },
    ],
  },

  "c-series": {
    technicalSpecs: [
      { label: "Product Name", value: "C50 / C75 / C100 Caulking Wall System" },
      { label: "Product Code", value: "POPHEN-C-SERIES" },
      { label: "System Type", value: "Space-Saving Hermetic Caulking Partition System" },
      { label: "Available Thicknesses", value: "50mm / 75mm / 100mm" },
      { label: "Panel Construction", value: "Double-sided color-coated steel/aluminum plate with bow border around edge" },
      { label: "Core / Infill Material", value: "High-rigidity Aluminum Honeycomb / Fire-resistant Rockwool" },
      { label: "Surface Material", value: "Pre-coated galvanized steel or aluminum alloy sheet" },
      { label: "Surface Finish", value: "Analab-certified ultra-low VOC cleanroom paint" },
      { label: "Structural Adhesive", value: "Epoxy glue and polyurethane structural adhesive (zero delamination)" },
      { label: "Frame / Profile", value: "Extruded aluminum alloy concealed bow border profiles" },
      { label: "Fire Performance", value: "FM4882, Fire Grade A1/M0 (30–120 minutes fire endurance)" },
      { label: "Testing & Certification", value: "FM4882, TÜV SÜD, Analab VOC, Intertek Air Tightness" },
      { label: "Installation Type", value: "Non-removable flush hermetic caulking joint; maximizes usable cleanroom floor space" },
      { label: "Outgassing", value: "Meets strict SEMATECH wafer outgassing standards (Analab GC/MS tested)" },
      { label: "Primary Applications", value: "Tesla Shanghai Gigafactory (200,000 m²), Tata OSAT (35,000 m²), CATL Debrecen, ACC Douvrin" },
    ],
    technicalDrawings: [
      {
        id: "c-series-drawing-1",
        title: "C-Series Caulking Wall Construction & Joint Details",
        description: "Flush caulk joint, structural adhesive bonding, and bow-border edge profile.",
        image: "/images/drawings/c-series-drawing.webp",
        downloadUrl: "/images/drawings/c-series-drawing.webp",
        type: "Joint & Profile",
      },
      {
        id: "c-series-drawing-2",
        title: "Cleanroom Wall Envelope Architecture",
        description: "Complete caulking wall assembly and interface with cleanroom ceiling deck.",
        image: "/images/drawings/cleanroom-architecture-overview.webp",
        downloadUrl: "/images/drawings/cleanroom-architecture-overview.webp",
        type: "System Overview",
      },
    ],
  },

  "ss2000": {
    technicalSpecs: [
      { label: "Product Name", value: "SS2000 Stud Wall Partition System" },
      { label: "Product Code", value: "POPHEN-SS2000" },
      { label: "System Type", value: "Structural Stud Partition System with Concealed Framing" },
      { label: "Panel Thickness", value: "44mm profile depth" },
      { label: "Panel Construction", value: "Double-sided metal plate with internal structural aluminum stud framework" },
      { label: "Core / Infill Material", value: "Built-in Aluminum Honeycomb core" },
      { label: "Surface Material", value: "Double-sided color-coated steel or aluminum sheet" },
      { label: "Surface Finish", value: "Silicon-free anti-static cleanroom finish" },
      { label: "Structural Adhesive", value: "Epoxy glue, polyurethane structural adhesive" },
      { label: "Frame / Profile", value: "Concealed aluminum framing studs installed first, followed by flush plate click-and-lock" },
      { label: "Utility Cavity", value: "Integrated vertical stud cavity for electrical, data, and gas utility distribution" },
      { label: "Fire Performance", value: "FM4882, Fire Grade A2" },
      { label: "Testing & Certification", value: "FM4882 Fire Grade A2, Intertek, ISO 14644-4" },
      { label: "Installation Type", value: "Frame-first sequential installation, plate click-and-lock assembly" },
      { label: "Primary Applications", value: "Silterra Malaysia (Fab 1E Class 100), Texas Instruments Chengdu, Infineon Technologies" },
    ],
    technicalDrawings: [
      {
        id: "ss2000-drawing-1",
        title: "SS2000 Stud Wall Profile & Concealed Framework",
        description: "Framing stud assembly and panel lock mechanism for vertical utility passage.",
        image: "/images/drawings/ss2000-drawing.webp",
        downloadUrl: "/images/drawings/ss2000-drawing.webp",
        type: "Elevation & Detail",
      },
    ],
  },

  "sl2000": {
    technicalSpecs: [
      { label: "Product Name", value: "SL2000 Stud-less Wall Partition System" },
      { label: "Product Code", value: "POPHEN-SL2000" },
      { label: "System Type", value: "Space-Maximizing Stud-less Modular Wall Partition System" },
      { label: "Panel Thickness", value: "44mm / 45mm" },
      { label: "Panel Construction", value: "Stud-less self-supporting sandwich panel with edge interlocking profiles" },
      { label: "Core / Infill Material", value: "High-density Aluminum Honeycomb core" },
      { label: "Surface Material", value: "Double-sided color-coated steel or aluminum sheet" },
      { label: "Surface Finish", value: "Silicon-free ultra-clean cleanroom paint" },
      { label: "Structural Adhesive", value: "Epoxy glue, polyurethane glue" },
      { label: "Frame / Profile", value: "Integrated tongue-and-groove perimeter extrusion (zero vertical posts)" },
      { label: "Floor Space Efficiency", value: "Eliminates vertical framing posts, maximizing usable cleanroom square footage" },
      { label: "Fire Performance", value: "FM4882 Fire Grade A2" },
      { label: "Testing & Certification", value: "FM4882 Fire Grade A2, SGS, Intertek Air Tightness" },
      { label: "Installation Type", value: "Interlocking dry joint assembly; rapid field erection" },
      { label: "Primary Applications", value: "Intel Falcon (43,000 m² Class 1K & 10K), Infineon KLM3 WP6 (35,000 m²)" },
    ],
    technicalDrawings: [
      {
        id: "sl2000-drawing-1",
        title: "SL2000 Stud-less Modular Interlocking Joint",
        description: "Post-less edge interlocking and floor track connection detail.",
        image: "/images/drawings/sl2000-drawing.webp",
        downloadUrl: "/images/drawings/sl2000-drawing.webp",
        type: "Joint & Profile",
      },
    ],
  },

  "cl2000": {
    technicalSpecs: [
      { label: "Product Name", value: "CL2000 Pasted Wall System" },
      { label: "Product Code", value: "POPHEN-CL2000" },
      { label: "System Type", value: "Ultra-Slim Pasted Wall Cladding System for Civil Overlays" },
      { label: "Available Thicknesses", value: "6mm / 7mm / 12mm ultra-slim profiles" },
      { label: "Panel Construction", value: "Ultra-thin composite aluminum honeycomb sandwich plate" },
      { label: "Core / Infill Material", value: "Micro-cell Aluminum Honeycomb core" },
      { label: "Surface Material", value: "Color-coated steel or aluminum plate" },
      { label: "Surface Finish", value: "Silicon-free coating meeting semiconductor outgassing standards" },
      { label: "Structural Adhesive", value: "High-strength epoxy adhesive bonding to civil wall substrates" },
      { label: "Space Preservation", value: "Conserves 98%+ of interior floor space during factory retrofits" },
      { label: "Fire Performance", value: "FM4882 Fire Grade A2" },
      { label: "Testing & Certification", value: "FM4882 Fire Grade A2, Analab VOC" },
      { label: "Installation Type", value: "Direct structural adhesive mounting to civil masonry, concrete or dry construction" },
      { label: "Primary Applications", value: "Civil wall renovation, cleanroom retrofits, airlock corridors, sterile change rooms" },
    ],
    technicalDrawings: [
      {
        id: "cl2000-drawing-1",
        title: "CL2000 Pasted Wall Cladding Profile",
        description: "Substrate adhesive bonding and edge trim transition details.",
        image: "/images/drawings/cl2000-drawing.webp",
        downloadUrl: "/images/drawings/cl2000-drawing.webp",
        type: "Cross-Section",
      },
    ],
  },

  "b-series": {
    technicalSpecs: [
      { label: "Product Name", value: "B50 / B75 / B100 Removable Wall System" },
      { label: "Product Code", value: "POPHEN-B-SERIES" },
      { label: "System Type", value: "Heavy-Duty Industrial Removable Cleanroom Wall System" },
      { label: "Available Thicknesses", value: "50mm / 75mm / 100mm" },
      { label: "Panel Construction", value: "Double-sided color-coated metal plate with reinforced perimeter bow border" },
      { label: "Core / Infill Material", value: "Aluminum Honeycomb / High-density Rockwool acoustic & thermal core" },
      { label: "Surface Material", value: "0.6mm Galvanized steel or aluminum plate" },
      { label: "Surface Finish", value: "Silicon-free anti-bacterial paint" },
      { label: "Structural Adhesive", value: "Dual-component epoxy glue, polyurethane glue" },
      { label: "Acoustic Attenuation", value: "High acoustic dampening for equipment-heavy processing rooms" },
      { label: "Fire Performance", value: "FM4882 Fire Grade A2" },
      { label: "Testing & Certification", value: "FM4882 Fire Grade A2, TÜV SÜD, Intertek" },
      { label: "Installation Type", value: "Removable modular joints; saves clean space with high acoustic dampening" },
      { label: "Primary Applications", value: "Heavy industrial cleanrooms, battery module production, precision aerospace assembly" },
    ],
    technicalDrawings: [
      {
        id: "b-series-drawing-1",
        title: "B-Series Heavy-Duty Modular Panel Construction",
        description: "Bow border edge section and partition connection profile.",
        image: "/images/drawings/b-series-drawing.webp",
        downloadUrl: "/images/drawings/b-series-drawing.webp",
        type: "Cross-Section",
      },
    ],
  },

  "ck2000-walkable": {
    technicalSpecs: [
      { label: "Product Name", value: "CK2000 Heavy Duty Walkable Ceiling Grid System" },
      { label: "Product Code", value: "POPHEN-CK2000-AL" },
      { label: "System Type", value: "Heavy-Duty Extruded Aluminum Walkable Cleanroom Ceiling Grid System" },
      { label: "Grid Depth / Thickness", value: "55mm / 70mm / 100mm / 130mm" },
      { label: "Structural Profile", value: "Heavy extruded aluminum alloy 6063-T6 with integrated threaded hanger boss" },
      { label: "Panel Infill Options", value: "Eight-band panel / Aluminum Honeycomb panel / Rockwool insulated panel" },
      { label: "Concentrated Point Load", value: "150 kg (1.5 kN) certified by TÜV SÜD (concentrated technician load)" },
      { label: "Uniform Distributed Load", value: "250 kg/m² certified by TÜV SÜD" },
      { label: "Structural Adhesive", value: "Single-sided / Double-sided high-strength structural adhesive" },
      { label: "Surface Coating", value: "PE / PVDF Cleanroom anti-static coating" },
      { label: "Fire Performance", value: "FM4882 Fire Rating A1 (0.5 to 2.0 hours fire endurance)" },
      { label: "Testing & Certification", value: "TÜV SÜD Uniform & Concentrated Load Test, FM4882 Fire Rating A1, SGS" },
      { label: "Plenum Efficiency", value: "Eliminates independent maintenance catwalks, reducing overall building height" },
      { label: "Primary Applications", value: "Tata OSAT (Assam), Intel Falcon (43k m²), GlobalFoundries (76k m²), ACC Douvrin (77.8k m²), CATL Debrecen (340k m²)" },
    ],
    technicalDrawings: [
      {
        id: "ck2000-walkable-drawing-1",
        title: "CK2000 Heavy Duty Walkable Ceiling Grid Profile",
        description: "Extruded aluminum grid profile, hanger rod assembly, and panel rebate.",
        image: "/images/drawings/ck2000-walkable-drawing.webp",
        downloadUrl: "/images/drawings/ck2000-walkable-drawing.webp",
        type: "Cross-Section",
      },
      {
        id: "ck2000-walkable-drawing-2",
        title: "Cleanroom Ceiling Plenum Architecture",
        description: "Overview layout of walkable deck, HVAC integration, and suspension hangers.",
        image: "/images/drawings/cleanroom-architecture-overview.webp",
        downloadUrl: "/images/drawings/cleanroom-architecture-overview.webp",
        type: "System Overview",
      },
    ],
  },

  "i-grid": {
    technicalSpecs: [
      { label: "Product Name", value: "I-GRID Hidden Frame Ceiling System" },
      { label: "Product Code", value: "POPHEN-I-GRID" },
      { label: "System Type", value: "Hidden Frame Flush Suspension Cleanroom Ceiling System" },
      { label: "Available Thicknesses", value: "50mm / 75mm / 100mm" },
      { label: "Panel Construction", value: "Both sides PPGI pre-painted steel sheet, type frame around perimeter" },
      { label: "Core / Infill Material", value: "Non-combustible Rockwool / Aluminum Honeycomb Infill" },
      { label: "Suspension", value: "Concealed internal suspension profiles creating a completely flush ceiling plane" },
      { label: "Structural Adhesive", value: "Polyurethane structural adhesive" },
      { label: "Surface Coating", value: "Cleanroom PE powder coating" },
      { label: "Fire Performance", value: "FM4882 Fire Rating A1 (0.5 to 2.0 hours fire integrity)" },
      { label: "Testing & Certification", value: "FM4882 Fire Rating A1, TÜV, CE" },
      { label: "Installation Type", value: "Modular hidden frame assembly; zero exposed T-bar ledges" },
      { label: "Primary Applications", value: "Northvolt DS1 & DS2 (Sweden - 37k m²), SK ON Gigafactory (160k m²), clean & dryrooms" },
    ],
    technicalDrawings: [
      {
        id: "i-grid-drawing-1",
        title: "I-GRID Hidden Frame Flush Suspension Profile",
        description: "Concealed grid suspension and flush perimeter interlocking.",
        image: "/images/drawings/i-grid-drawing.webp",
        downloadUrl: "/images/drawings/i-grid-drawing.webp",
        type: "Cross-Section",
      },
    ],
  },

  "ck2000-ffu": {
    technicalSpecs: [
      { label: "Product Name", value: "CK2000 FFU Ceiling System" },
      { label: "Product Code", value: "POPHEN-CK2000-FFU" },
      { label: "System Type", value: "Patented Integrated Ceiling Solution for Fan Filter Units & Aerodynamic Lighting" },
      { label: "Profile Depth", value: "55mm / 70mm / 100mm" },
      { label: "Structural Profile", value: "Patented heavy-duty extruded aluminum grid with universal FFU rebate" },
      { label: "Filter Module Support", value: "Standard 2x2 ft, 2x4 ft, and 4x4 ft HEPA/ULPA Fan Filter Units" },
      { label: "Lighting Integration", value: "Integrated flush teardrop LED light tracks beneath grid members" },
      { label: "Fire Protection", value: "Certified die-cast fire sprinkler connectors embedded in grid intersections" },
      { label: "Surface Paint", value: "Silicon-free anti-static powder coating" },
      { label: "Fire Performance", value: "FM4882 Fire Grade A1" },
      { label: "Testing & Certification", value: "Patented FFU Ceiling Solution, FM4882, Intertek Air Tightness" },
      { label: "Primary Applications", value: "Tata Electronics OSAT (Assam), Intel Falcon (Malaysia), ISO Class 1 to Class 5 cleanrooms" },
    ],
    technicalDrawings: [
      {
        id: "ck2000-ffu-drawing-1",
        title: "CK2000 FFU Integrated Ceiling Grid & Light Track",
        description: "FFU gasket rebate, teardrop lighting slot, and die-cast sprinkler node.",
        image: "/images/drawings/ck2000-ffu-drawing.webp",
        downloadUrl: "/images/drawings/ck2000-ffu-drawing.webp",
        type: "Cross-Section",
      },
    ],
  },

  "d-grid": {
    technicalSpecs: [
      { label: "Product Name", value: "D-GRID Plenum Ceiling System" },
      { label: "Product Code", value: "POPHEN-D-GRID" },
      { label: "System Type", value: "Heavy-Duty Industrial Plenum Ceiling System for Gigafactories & Dryrooms" },
      { label: "Grid Dimensions", value: "Modular structural grid carrying 50mm–100mm insulated sandwich panels" },
      { label: "Structural Profile", value: "Structural steel suspension combined with extruded aluminum alloy beams" },
      { label: "Core / Infill Material", value: "High-density Rockwool / Aluminum Honeycomb" },
      { label: "Mechanical Carrying Capacity", value: "Heavy MEP carrying capacity for massive dryroom dehumidification and HVAC ducts" },
      { label: "Surface Coating", value: "Anti-corrosion industrial powder coating" },
      { label: "Fire Performance", value: "FM4882 Fire Rating A1" },
      { label: "Testing & Certification", value: "FM4882, TÜV, CE" },
      { label: "Pressure Differential", value: "Engineered for extreme positive/negative cleanroom pressure differentials" },
      { label: "Primary Applications", value: "CATL Gigafactory (Debrecen - 340k m²), ACC Douvrin (77.8k m²), Northvolt Sweden, Premier Energies" },
    ],
    technicalDrawings: [
      {
        id: "d-grid-drawing-1",
        title: "D-GRID Heavy Industrial Plenum Ceiling System",
        description: "Primary structural hanger truss and plenum ducting support detail.",
        image: "/images/drawings/d-grid-drawing.webp",
        downloadUrl: "/images/drawings/d-grid-drawing.webp",
        type: "System Overview",
      },
    ],
  },

  "doors-windows": {
    technicalSpecs: [
      { label: "Product Name", value: "Cleanroom Doors and Windows" },
      { label: "Product Code", value: "POPHEN-CR-DOOR-WIN" },
      { label: "System Type", value: "Intertek-Certified Flush Cleanroom Swing/Sliding Doors & Double-Glazed Windows" },
      { label: "Door Leaf Thickness", value: "45mm / 50mm" },
      { label: "Window Thickness", value: "Flush 50mm / 75mm / 100mm matching wall panel thickness" },
      { label: "Door Construction", value: "Extruded aluminum alloy frame with color-coated steel or SS 304 skins, honeycomb/rockwool core" },
      { label: "Window Construction", value: "Double-layer 5mm/6mm tempered safety glass with desiccated aluminum spacer" },
      { label: "Sealing Mechanism", value: "Automatic drop-down bottom seal + 3-sided silicone gasket (interlocking ready)" },
      { label: "Surface Finish", value: "Silicon-free anti-static coating / Brushed stainless steel 304/316" },
      { label: "Testing & Certification", value: "Intertek Air Tightness Certified, CE, ISO 14644-4" },
      { label: "Available Options", value: "Automatic sliding hermetic door, interlocking access control, radiation shielding" },
      { label: "Primary Applications", value: "Pharmaceutical sterile airlocks, semiconductor cleanroom entries, bio-safety suites" },
    ],
    technicalDrawings: [
      {
        id: "doors-windows-drawing-1",
        title: "Cleanroom Flush Double-Glazed Window & Door Frame",
        description: "Flush window detail with silica desiccant chamber and dual-pane safety glass.",
        image: "/images/drawings/doors-windows-drawing.webp",
        downloadUrl: "/images/drawings/doors-windows-drawing.webp",
        type: "Cross-Section",
      },
      {
        id: "doors-windows-drawing-2",
        title: "Airtight Cleanroom Swing Door Assembly Detail",
        description: "Drop-seal mechanism, aluminum door frame rebate, and interlocking sensor mounting.",
        image: "/images/drawings/doors-drawing.webp",
        downloadUrl: "/images/drawings/doors-drawing.webp",
        type: "Elevation & Detail",
      },
    ],
  },
};

let content = fs.readFileSync(filePath, 'utf8');

// Ensure interface has technicalSpecs and technicalDrawings
if (!content.includes('technicalSpecs?:')) {
  content = content.replace(
    'faqs: { question: string; answer: string }[];',
    `faqs: { question: string; answer: string }[];
  technicalSpecs?: { label: string; value: string }[];
  technicalDrawings?: {
    id: string;
    title: string;
    description: string;
    image: string;
    downloadUrl?: string;
    type: "Cross-Section" | "Elevation & Detail" | "Joint & Profile" | "System Overview";
  }[];`
  );
}

// Inject technicalSpecs and technicalDrawings into each product in BROCHURE_PRODUCTS
for (const [id, data] of Object.entries(specsAndDrawingsMap)) {
  const productRegex = new RegExp(`(id:\\s*"${id}"[\\s\\S]*?faqs:\\s*\\[[\\s\\S]*?\\],)(\\n\\s*\\},)`, 'm');
  const match = content.match(productRegex);
  if (match) {
    const specsStr = JSON.stringify(data.technicalSpecs, null, 6).replace(/"([^"]+)":/g, '$1:');
    const drawingsStr = JSON.stringify(data.technicalDrawings, null, 6).replace(/"([^"]+)":/g, '$1:');
    
    // Check if technicalSpecs already injected
    if (!match[1].includes('technicalSpecs:')) {
      const injection = `\n    technicalSpecs: ${specsStr},\n    technicalDrawings: ${drawingsStr},`;
      content = content.replace(productRegex, `$1${injection}$2`);
      console.log(`✓ Injected specs & drawings for ${id}`);
    } else {
      console.log(`• Already had specs for ${id}`);
    }
  } else {
    console.error(`✗ Could not find product regex for ${id}`);
  }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('✓ Updated brochureData.ts with all technical specs and drawings!');
