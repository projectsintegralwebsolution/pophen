const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'data', 'brochureData.ts');

const CLIENTELE_DATA_CODE = `
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
`;

console.log('Writing enrichment to brochureData.ts ...');
// Append to brochureData.ts
let content = fs.readFileSync(filePath, 'utf8');
if (!content.includes('CLIENTELE_DATA')) {
  content += CLIENTELE_DATA_CODE;
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('✓ Appended CLIENTELE_DATA and VERIFIED_CERTIFICATIONS to brochureData.ts');
} else {
  console.log('• CLIENTELE_DATA already present in brochureData.ts');
}
