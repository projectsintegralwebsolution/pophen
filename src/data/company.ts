export interface CompanyInfo {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  phone: string;
  formattedPhone: string;
  email: string;
  secondaryEmail: string;
  whatsapp: string;
  whatsappPrefill: string;
  address: {
    line1: string;
    line2: string;
    landmark: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    full: string;
  };
  developerCredit: {
    text: string;
    name: string;
    url: string;
  };
}

export const COMPANY_INFO: CompanyInfo = {
  name: "POPHEN",
  legalName: "Pophen India",
  tagline: "Advanced Cleanroom Architecture & Controlled Environments",
  description:
    "Pophen specializes in the design, engineering, and manufacturing of modular cleanroom systems and controlled environment facilities meeting international ISO and GMP standards for Semiconductor, Battery (Dryrooms & Cleanrooms), Data Centre, Solar Cell, Hi-Tech, and Medical Device facilities.",
  phone: "+917400197293",
  formattedPhone: "+91 7400197293",
  email: "info@pophen.in",
  secondaryEmail: "india@pophen.com",
  whatsapp: "917400197293",
  whatsappPrefill: "Hello POPHEN team, I would like to enquire about your cleanroom systems and engineering solutions.",
  address: {
    line1: "WeWork 247 Park",
    line2: "Vikhroli Corporate Park, LBS Marg",
    landmark: "Gandhi Nagar, Vikhroli West",
    city: "Mumbai",
    state: "Maharashtra",
    postalCode: "400083",
    country: "India",
    full: "WeWork 247 Park, Vikhroli Corporate Park, LBS Marg, Gandhi Nagar, Vikhroli West, Mumbai, Maharashtra 400083",
  },
  developerCredit: {
    text: "Developed by",
    name: "Integral Web Solution",
    url: "https://integralwebsolution.in/",
  },
};

export const NAV_ITEMS = [
  { name: "Home", href: "/" },
  {
    name: "Products",
    href: "#products",
    children: [
      {
        name: "Cleanroom Wall Panels",
        href: "#cleanroom-walls",
        description: "Modular stud & stud-less panels with PIR/Honeycomb cores",
        tag: "Core Envelope"
      },
      {
        name: "Ceiling Systems",
        href: "#ceilings",
        description: "Walk-on aluminum grids with airtight panels & FFU cutouts",
        tag: "Walk-On Grid"
      },
      {
        name: "Cleanroom Doors",
        href: "#doors",
        description: "Flush swing & sliding doors with interlocking controls",
        tag: "Airtight"
      },
      {
        name: "Cleanroom Windows",
        href: "#cleanroom-windows",
        description: "Double-glazed flush safety glass with desiccant chambers",
        tag: "Flush Vision"
      },
      {
        name: "Modular Partitions",
        href: "#modular-partitions",
        description: "Demountable partition systems for dynamic layouts",
        tag: "Flexible"
      },
      {
        name: "Air Units & Systems",
        href: "#air-units",
        description: "Laminar flow workstations, pass-throughs & air units",
        tag: "Clean Air"
      },
    ],
  },
  { name: "About Us", href: "#about" },
  { name: "Industries", href: "#industries" },
  { name: "Process", href: "#process" },
  { name: "Installations", href: "#showcase" },
  { name: "Contact", href: "#contact" },
];
