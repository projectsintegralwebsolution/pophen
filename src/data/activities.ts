export interface ActivityItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  scope: string[];
}

export const ACTIVITIES_DATA: ActivityItem[] = [
  {
    id: "cleanrooms-laboratories",
    number: "01",
    title: "Cleanrooms and Laboratories",
    description:
      "Pophen Cleanroom Systems is your strategic partner in high-end controlled environments, providing custom-designed clean suites and laboratories tailored to your stringent process parameters.",
    image: "/images/activity1-DGOBdrHK.webp",
    scope: ["Turnkey cleanroom envelopes", "Controlled laboratories", "Airlock & pass-through systems"],
  },
  {
    id: "clean-interior",
    number: "02",
    title: "Clean Interior Solutions",
    description:
      "Our dedicated interior and cleaning engineering unit provides comprehensive architectural fitting, specialized coving, and sanitary maintenance protocols ensuring ongoing sterility.",
    image: "/images/activity2-CDpLlqGO.webp",
    scope: ["Sanitary flush coving", "Seamless anti-static flooring", "Airtight penetrations"],
  },
  {
    id: "design-engineering",
    number: "03",
    title: "Design and Engineering",
    description:
      "Together with our reliable engineering partners, we realize complete turnkey projects from concept design, 3D CAD modeling, and airflow simulations through to onsite execution.",
    image: "/images/activity3-DHLpvUU3.webp",
    scope: ["Conceptual & detailed engineering", "HVAC & filtration sizing", "BIM & CAD layout modeling"],
  },
  {
    id: "maintenance",
    number: "04",
    title: "Maintenance & Compliance",
    description:
      "Ensuring your controlled facilities remain continuously compliant and operational with scheduled routine inspections, integrity checks, and rapid component replacements.",
    image: "/images/activity4-3RM3aurZ.webp",
    scope: ["Seal integrity verification", "Filter replacement support", "Facility re-certification readiness"],
  },
  {
    id: "academy",
    number: "05",
    title: "Academy & Protocol Training",
    description:
      "Professional knowledge transfer and expert training for your operational staff on cleanroom protocols, gowning discipline, and behavioral standards required inside controlled facilities.",
    image: "/images/activity5-CguuR2hv.webp",
    scope: ["Contamination control protocols", "Personnel gowning procedures", "Disinfection & cleaning standards"],
  },
  {
    id: "international",
    number: "06",
    title: "International Collaboration",
    description:
      "Through international technology collaborations, Pophen delivers worldwide engineering best practices and global-standard cleanroom solutions for critical manufacturing plants.",
    image: "/images/activity6-DlldoYXp.webp",
    scope: ["Global engineering standards", "International partner network", "Cross-border project execution"],
  },
];
