import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  ShieldCheck,
  Building2,
  ArrowRight,
  Globe2,
  CheckCircle2,
} from "lucide-react";
import { InnerPageLayout } from "@/components/layout/InnerPageLayout";
import { PageBanner } from "@/components/ui/PageBanner";
import { ProductInquiryForm } from "@/components/product/ProductInquiryForm";

export const metadata: Metadata = {
  title: "Contact POPHEN | Mumbai India & Malaysia Cleanroom Headquarters",
  description:
    "Connect with Pophen Technology India Pvt Ltd in Mumbai, India and Iskandar Puteri, Malaysia for cleanroom architectural systems, technical proposals, and fast-track execution.",
  openGraph: {
    title: "Contact POPHEN | Cleanroom Architectural System Provider",
    description:
      "Direct engineering consultation with POPHEN's project sponsor Joel William and technical team in Mumbai and Malaysia.",
  },
};

export default function ContactPage() {
  const offices = [
    {
      country: "India Corporate Office",
      entity: "Pophen Technology India Pvt Ltd",
      address: "Tower B, 13th Floor, 24X7 Park, LBS Marg, Gandhi Nagar, Vikhroli West, Mumbai – 400 079, Maharashtra, India",
      contactPerson: "Harshal",
      phone: "+91-7400197186",
      phoneRaw: "+917400197186",
      email: "Harshal@pophen.in",
      altEmail: "info@pophen.in",
      flag: "🇮🇳",
    },
    {
      country: "Malaysia Operations Office",
      entity: "POPHEN Environmental Technology (Malaysia)",
      address: "66-02, Laman Niaga Sunway, Persiaran Medini 3, Bandar Medini Iskandar, Iskandar Puteri, Johor, Malaysia",
      contactPerson: "Joel William (Project Sponsor)",
      phone: "+60-192394855",
      phoneRaw: "+60192394855",
      email: "Joel@pophen.in",
      altEmail: "india@pophen.com",
      flag: "🇲🇾",
    },
  ];

  return (
    <InnerPageLayout>
      {/* 1. Page Banner */}
      <PageBanner
        title="Contact POPHEN International"
        subtitle="Connect directly with our cleanroom architectural engineering teams in Mumbai, India and Iskandar Puteri, Malaysia for technical datasheets, CAD coordination, and turnkey project proposals."
        badge="GLOBAL OFFICES &amp; PROJECT SPONSORSHIP"
        image="/images/contact-lab-D3gJ63O9.webp"
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      {/* 2. Office Locations & Contact Persons */}
      <section className="py-16 lg:py-20 bg-white text-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-pophen-blue">
              APPROVED CORPORATE LOCATIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-pophen-navy tracking-tight mt-1">
              POPHEN Regional Engineering Headquarters
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Serving semiconductor fabs, battery gigafactories, and solar cell plants across India, Southeast Asia, and Europe.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {offices.map((office, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{office.flag}</span>
                      <h3 className="text-lg font-bold text-pophen-navy">{office.country}</h3>
                    </div>
                    <span className="text-xs font-bold text-pophen-blue uppercase tracking-wider">
                      Regional Base
                    </span>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-slate-800">{office.entity}</h4>
                    <div className="flex items-start gap-2.5 mt-2 text-xs text-slate-600 leading-relaxed">
                      <MapPin className="w-4 h-4 text-pophen-blue flex-shrink-0 mt-0.5" />
                      <span>{office.address}</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200/90 space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-semibold">Key Contact:</span>
                      <span className="font-bold text-pophen-navy">{office.contactPerson}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-semibold">Direct Phone:</span>
                      <a href={`tel:${office.phoneRaw}`} className="font-bold text-pophen-blue hover:underline">
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-semibold">Direct Email:</span>
                      <a href={`mailto:${office.email}`} className="font-bold text-pophen-blue hover:underline">
                        {office.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href={`tel:${office.phoneRaw}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold bg-pophen-blue hover:bg-pophen-blue-hover text-white transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Office</span>
                  </a>
                  <a
                    href={`mailto:${office.email}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Email Direct</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* 3. International RFQ Form Area */}
          <div className="pt-6 border-t border-slate-200">
            <div className="max-w-4xl mx-auto">
              <ProductInquiryForm productName="Turnkey Cleanroom Architectural Project" />
            </div>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
