import type { Metadata } from "next";
import "./globals.css";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  metadataBase: new URL("https://pophen.in"),
  title: "POPHEN | Advanced Cleanroom Architecture & Controlled Environments",
  description:
    "Pophen India specializes in modular cleanroom systems, battery dryrooms, wall panels, ceilings, airtight doors, windows, and contamination control technology for Semiconductor, Battery (Dryrooms & Cleanrooms), Data Centre, Solar Cell, Hi-Tech, and Medical Device manufacturing.",
  keywords: [
    "Pophen",
    "Pophen India",
    "cleanroom engineering",
    "modular cleanroom systems",
    "cleanroom wall panels",
    "cleanroom ceilings",
    "cleanroom doors",
    "battery dryroom solutions",
    "battery cleanroom solutions",
    "semiconductor cleanroom",
    "data centre containment",
    "solar cell cleanroom",
    "hi-tech cleanroom",
    "medical device cleanroom",
    "contamination control",
    "ISO 14644",
    "GMP cleanroom India",
    "mobile clean air unit",
  ],
  authors: [{ name: "Pophen India", url: "https://pophen.in" }],
  creator: "Pophen India",
  publisher: "Pophen India",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://pophen.in",
  },
  openGraph: {
    title: "POPHEN | Advanced Cleanroom Architectural Systems & Turnkey Solutions",
    description:
      "Precision-engineered modular cleanrooms, battery dryrooms, wall panels, ceilings, airtight doors, and contamination-controlled environments for Semiconductor, Battery, Data Centre, Solar Cell, Hi-Tech, and Medical Device facilities.",
    url: "https://pophen.in",
    siteName: "POPHEN India",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero-cleanroom-Chp3Ho9d.webp",
        width: 1200,
        height: 630,
        alt: "POPHEN Advanced Cleanroom Architecture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "POPHEN | Advanced Cleanroom Architectural Systems",
    description:
      "Modular cleanroom engineering and contamination control solutions for Semiconductor, Battery Dryrooms & Cleanrooms, Data Centres, Solar Cells, and Medical Devices.",
    images: ["/images/hero-cleanroom-Chp3Ho9d.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://pophen.in/#organization",
        name: COMPANY_INFO.legalName,
        alternateName: COMPANY_INFO.name,
        url: "https://pophen.in",
        logo: {
          "@type": "ImageObject",
          url: "https://pophen.in/images/pophen-logo.png",
          caption: "Pophen Cleanroom Systems Logo",
        },
        description: COMPANY_INFO.description,
        telephone: COMPANY_INFO.phone,
        email: COMPANY_INFO.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: `${COMPANY_INFO.address.line1}, ${COMPANY_INFO.address.line2}`,
          addressLocality: COMPANY_INFO.address.city,
          addressRegion: COMPANY_INFO.address.state,
          postalCode: COMPANY_INFO.address.postalCode,
          addressCountry: "IN",
        },
        sameAs: ["https://pophen.in"],
      },
      {
        "@type": "WebSite",
        "@id": "https://pophen.in/#website",
        url: "https://pophen.in",
        name: "POPHEN - Cleanroom Engineering",
        publisher: {
          "@id": "https://pophen.in/#organization",
        },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
