"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ShieldCheck,
  Clock,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { PRODUCTS_DATA } from "@/data/products";

interface EnquiryFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  productInterest: string;
  message: string;
  hp_website: string; // Honeypot
}

interface FormErrors {
  fullName?: string;
  companyName?: string;
  email?: string;
  phone?: string;
  productInterest?: string;
  message?: string;
}

interface EnquirySectionProps {
  selectedProductInterest?: string;
}

export function EnquirySection({ selectedProductInterest }: EnquirySectionProps) {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    productInterest: selectedProductInterest || "Cleanroom Wall Panels",
    message: "",
    hp_website: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");
  const [referenceId, setReferenceId] = useState("");

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = "Please enter your full name.";
    }

    if (!formData.companyName.trim()) {
      errs.companyName = "Please enter your company or organization name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = "Please enter a valid business email address.";
    }

    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{7,15}$/;
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone.replace(/\s+/g, ""))) {
      errs.phone = "Please enter a valid contact phone number.";
    }

    if (!formData.productInterest) {
      errs.productInterest = "Please select a cleanroom solution of interest.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = "Please describe your project requirements (minimum 10 characters).";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setServerMessage("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus("success");
        setServerMessage(result.message || "Enquiry submitted successfully.");
        setReferenceId(result.referenceId || "");
        // Reset form
        setFormData({
          fullName: "",
          companyName: "",
          email: "",
          phone: "",
          productInterest: "Cleanroom Wall Panels",
          message: "",
          hp_website: "",
        });
        setErrors({});
      } else {
        setSubmitStatus("error");
        setServerMessage(
          result.message || "Failed to submit enquiry. Please verify your entries and try again."
        );
        if (result.errors) {
          setErrors(result.errors);
        }
      }
    } catch (err) {
      setSubmitStatus("error");
      setServerMessage(
        "A network error occurred while sending your request. Please try again or email us directly at info@pophen.in."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pophen-blue/10 text-pophen-blue text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PROJECT CONSULTATION</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-pophen-navy tracking-tight">
            Let&apos;s Plan Your Cleanroom Project
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Connect with our engineering specialists for architectural specifications, CAD drawings, and customized project proposals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Main Form Area (7 cols on lg) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-7 sm:p-10 border border-slate-200/90 shadow-industrial flex flex-col justify-between">
            <div>
              <div className="mb-6 space-y-1">
                <h3 className="text-xl sm:text-2xl font-bold text-pophen-navy">
                  Technical Project Enquiry
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Complete the form below. Our engineering desk will respond within 24 hours.
                </p>
              </div>

              {/* Success Notification Alert */}
              {submitStatus === "success" && (
                <div className="mb-6 p-5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-2 animate-in fade-in">
                  <div className="flex items-center gap-2 font-bold text-sm text-emerald-800">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span>Project Enquiry Received Successfully</span>
                  </div>
                  <p className="text-xs text-emerald-700 leading-relaxed">
                    {serverMessage}
                  </p>
                  {referenceId && (
                    <div className="pt-2 text-xs font-mono font-medium text-emerald-800">
                      Tracking Reference: <span className="bg-white px-2 py-1 rounded border border-emerald-200">{referenceId}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Error Notification Alert */}
              {submitStatus === "error" && (
                <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 flex items-start gap-3 animate-in fade-in text-xs leading-relaxed">
                  <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-rose-800">Submission Error</span>
                    <span>{serverMessage}</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Honeypot Spam trap */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="hp_website">Leave this field blank</label>
                  <input
                    type="text"
                    id="hp_website"
                    name="hp_website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.hp_website}
                    onChange={(e) => setFormData({ ...formData, hp_website: e.target.value })}
                  />
                </div>

                {/* Row 1: Full Name & Company Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-50 border text-slate-900 focus:bg-white focus:outline-none transition-colors ${
                        errors.fullName
                          ? "border-rose-400 focus:border-rose-500 ring-1 ring-rose-200"
                          : "border-slate-200 focus:border-pophen-blue focus:ring-2 focus:ring-pophen-blue/10"
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-rose-600 font-medium">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="companyName"
                      className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                      Company / Organization <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-50 border text-slate-900 focus:bg-white focus:outline-none transition-colors ${
                        errors.companyName
                          ? "border-rose-400 focus:border-rose-500 ring-1 ring-rose-200"
                          : "border-slate-200 focus:border-pophen-blue focus:ring-2 focus:ring-pophen-blue/10"
                      }`}
                    />
                    {errors.companyName && (
                      <p className="mt-1 text-xs text-rose-600 font-medium">{errors.companyName}</p>
                    )}
                  </div>
                </div>

                {/* Row 2: Business Email & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                      Business Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-50 border text-slate-900 focus:bg-white focus:outline-none transition-colors ${
                        errors.email
                          ? "border-rose-400 focus:border-rose-500 ring-1 ring-rose-200"
                          : "border-slate-200 focus:border-pophen-blue focus:ring-2 focus:ring-pophen-blue/10"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-600 font-medium">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                      Contact Phone <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-50 border text-slate-900 focus:bg-white focus:outline-none transition-colors ${
                        errors.phone
                          ? "border-rose-400 focus:border-rose-500 ring-1 ring-rose-200"
                          : "border-slate-200 focus:border-pophen-blue focus:ring-2 focus:ring-pophen-blue/10"
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-rose-600 font-medium">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Product / Solution of Interest */}
                <div>
                  <label
                    htmlFor="productInterest"
                    className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
                  >
                    Product or Solution of Interest <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="productInterest"
                    name="productInterest"
                    value={formData.productInterest}
                    onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-50 border text-slate-900 focus:bg-white focus:outline-none transition-colors ${
                      errors.productInterest
                        ? "border-rose-400 focus:border-rose-500 ring-1 ring-rose-200"
                        : "border-slate-200 focus:border-pophen-blue focus:ring-2 focus:ring-pophen-blue/10"
                    }`}
                  >
                    <option value="">Select a Product Line...</option>
                    {PRODUCTS_DATA.map((product) => (
                      <option key={product.id} value={product.name}>
                        {product.name}
                      </option>
                    ))}
                    <option value="Turnkey Cleanroom Project Execution">
                      Turnkey Cleanroom Project Execution
                    </option>
                    <option value="Modular Ceiling & HVAC Integration">
                      Modular Ceiling &amp; HVAC Integration
                    </option>
                    <option value="Cleanroom Maintenance & Operator Training">
                      Cleanroom Maintenance &amp; Operator Training
                    </option>
                    <option value="Other Custom Engineering Solution">
                      Other Custom Engineering Solution
                    </option>
                  </select>
                  {errors.productInterest && (
                    <p className="mt-1 text-xs text-rose-600 font-medium">
                      {errors.productInterest}
                    </p>
                  )}
                </div>

                {/* Message / Project Requirements */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
                  >
                    Project Requirements / Technical Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-50 border text-slate-900 focus:bg-white focus:outline-none transition-colors ${
                      errors.message
                        ? "border-rose-400 focus:border-rose-500 ring-1 ring-rose-200"
                        : "border-slate-200 focus:border-pophen-blue focus:ring-2 focus:ring-pophen-blue/10"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-rose-600 font-medium">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg text-sm font-semibold bg-pophen-blue hover:bg-pophen-blue-hover text-white shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed group focus:outline-none focus:ring-2 focus:ring-pophen-cyan"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Submitting Your Enquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Enquiry</span>
                        <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Card with Technician Photo + Direct Contacts (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Technician Image Card */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-industrial h-56 sm:h-64 w-full group">
              <Image
                src="/images/cleanroom-windows-doctor-CVbH--Sj.webp"
                alt="Pophen Cleanroom Specialist"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pophen-navy-950/81 via-pophen-navy-950/36 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-white/20 shadow-md">
                <span className="text-xs font-bold text-pophen-navy block">
                  Dedicated Cleanroom Engineering Team
                </span>
                <span className="text-[14px] text-slate-600">
                  Ready to review architectural specifications and site layouts.
                </span>
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              {/* Phone */}
              <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs flex items-center gap-4">
                <div className="p-2.5 rounded-lg bg-pophen-navy text-white flex-shrink-0">
                  <Phone className="w-4 h-4 text-pophen-cyan" />
                </div>
                <div>
                  <div className="text-[13px] font-bold uppercase tracking-wider text-slate-400">
                    Direct Engineering Desk
                  </div>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="text-sm font-bold text-pophen-navy hover:text-pophen-blue transition-colors"
                  >
                    {COMPANY_INFO.formattedPhone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs flex items-center gap-4">
                <div className="p-2.5 rounded-lg bg-pophen-navy text-white flex-shrink-0">
                  <Mail className="w-4 h-4 text-pophen-cyan" />
                </div>
                <div>
                  <div className="text-[13px] font-bold uppercase tracking-wider text-slate-400">
                    Project Enquiries
                  </div>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-sm font-semibold text-pophen-navy hover:text-pophen-blue transition-colors"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-pophen-navy text-white flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-pophen-cyan" />
                </div>
                <div>
                  <div className="text-[13px] font-bold uppercase tracking-wider text-slate-400">
                    Headquarters
                  </div>
                  <p className="text-xs font-semibold text-slate-900 leading-snug">
                    {COMPANY_INFO.address.line1}, {COMPANY_INFO.address.line2}, {COMPANY_INFO.address.city} - {COMPANY_INFO.address.postalCode}
                  </p>
                </div>
              </div>
            </div>

            {/* B2B Assurance Note */}
            <div className="p-4 rounded-xl bg-pophen-navy text-white flex items-center gap-3 border border-white/10">
              <ShieldCheck className="w-5 h-5 text-pophen-cyan flex-shrink-0" />
              <p className="text-xs text-slate-200">
                Non-Disclosure Agreements (NDA) available prior to CAD and drawing submission.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
