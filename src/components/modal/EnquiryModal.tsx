"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  X,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ShieldCheck,
  Building2,
  Lock,
} from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { PRODUCTS_DATA } from "@/data/products";
import { useEnquiryModal } from "@/context/EnquiryModalContext";

interface EnquiryFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  productInterest: string;
  message: string;
  hp_website: string;
}

interface FormErrors {
  fullName?: string;
  companyName?: string;
  email?: string;
  phone?: string;
  productInterest?: string;
  message?: string;
}

export function EnquiryModal() {
  const { isOpen, initialProduct, closeEnquiryModal } = useEnquiryModal();

  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    productInterest: initialProduct || "Pophen Modular Cleanroom Wall Systems",
    message: "",
    hp_website: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");
  const [referenceId, setReferenceId] = useState("");

  const modalRef = useRef<HTMLDivElement | null>(null);
  const firstInputRef = useRef<HTMLInputElement | null>(null);

  // Sync initialProduct if changed when opening
  useEffect(() => {
    if (initialProduct) {
      setFormData((prev) => ({
        ...prev,
        productInterest: initialProduct,
      }));
    }
  }, [initialProduct]);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      // Focus the first input after modal opens
      const timer = setTimeout(() => {
        firstInputRef.current?.focus();
      }, 100);

      return () => {
        document.body.style.overflow = originalOverflow;
        clearTimeout(timer);
      };
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeEnquiryModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeEnquiryModal]);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = "Please enter your full name.";
    }

    if (!formData.companyName.trim()) {
      errs.companyName = "Please enter your company or facility name.";
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
      errs.productInterest = "Please select a product or solution of interest.";
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
        // Reset form data
        setFormData({
          fullName: "",
          companyName: "",
          email: "",
          phone: "",
          productInterest: "Pophen Modular Cleanroom Wall Systems",
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

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      closeEnquiryModal();
    }
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/70 backdrop-blur-sm transition-all duration-300 ${
        isOpen
          ? "opacity-100 pointer-events-auto visible"
          : "opacity-0 pointer-events-none invisible"
      }`}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
      aria-labelledby="enquiry-modal-title"
    >
      <div
        ref={modalRef}
        className={`relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden flex flex-col max-h-[92vh] transition-all duration-300 ${
          isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-3"
        }`}
      >
        {/* Top Header Section with POPHEN Logo and Close Button */}
        <div className="bg-pophen-navy px-6 py-5 text-white flex items-center justify-between border-b border-white/10 relative flex-shrink-0">
          <div className="flex items-center gap-3">
            <Logo variant="white" height={54} />
            <div className="hidden sm:block border-l border-white/20 pl-3">
              <span className="text-[14px] font-semibold text-pophen-cyan block uppercase tracking-wider">
                Industrial Engineering
              </span>
              <span className="text-xs text-slate-300">
                Turnkey Cleanroom Solutions
              </span>
            </div>
          </div>

          {/* Close button in top-right */}
          <button
            type="button"
            onClick={closeEnquiryModal}
            className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-pophen-cyan"
            aria-label="Close enquiry modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Header Title & Short Description */}
          <div className="space-y-1.5">
            <h2
              id="enquiry-modal-title"
              className="text-xl sm:text-2xl font-bold text-pophen-navy tracking-tight"
            >
              Enquire About Our Cleanroom Solutions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Connect directly with our cleanroom design engineers to review room specifications, ISO/GMP classifications, panel thicknesses, and custom project scopes.
            </p>
          </div>

          {/* Success Notification Alert */}
          {submitStatus === "success" && (
            <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-2.5 animate-in fade-in">
              <div className="flex items-center gap-2 font-bold text-sm text-emerald-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>Project Enquiry Received Successfully</span>
              </div>
              <p className="text-xs text-emerald-700 leading-relaxed">
                {serverMessage}
              </p>
              {referenceId && (
                <div className="text-xs font-mono font-medium text-emerald-800">
                  Tracking Reference:{" "}
                  <span className="bg-white px-2 py-0.5 rounded border border-emerald-200 font-bold">
                    {referenceId}
                  </span>
                </div>
              )}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={closeEnquiryModal}
                  className="px-4 py-2 rounded-lg text-xs font-semibold bg-emerald-700 hover:bg-emerald-800 text-white transition-colors"
                >
                  Done &bull; Close Window
                </button>
              </div>
            </div>
          )}

          {/* Error Notification Alert */}
          {submitStatus === "error" && (
            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 flex items-start gap-3 animate-in fade-in text-xs leading-relaxed">
              <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block text-rose-800">Submission Error</span>
                <span>{serverMessage}</span>
              </div>
            </div>
          )}

          {/* Form */}
          {submitStatus !== "success" && (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Spam Honeypot Trap */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="modal_hp_website">Leave this field blank</label>
                <input
                  type="text"
                  id="modal_hp_website"
                  name="hp_website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.hp_website}
                  onChange={(e) => setFormData({ ...formData, hp_website: e.target.value })}
                />
              </div>

              {/* 2-Column Row 1: Full Name & Company Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="modal_fullName"
                    className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1"
                  >
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    ref={firstInputRef}
                    type="text"
                    id="modal_fullName"
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
                    htmlFor="modal_companyName"
                    className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1"
                  >
                    Company / Organization <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="modal_companyName"
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

              {/* 2-Column Row 2: Business Email & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="modal_email"
                    className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1"
                  >
                    Business Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="modal_email"
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
                    htmlFor="modal_phone"
                    className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1"
                  >
                    Contact Phone <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="modal_phone"
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
                  htmlFor="modal_productInterest"
                  className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1"
                >
                  Product or Solution of Interest <span className="text-rose-500">*</span>
                </label>
                <select
                  id="modal_productInterest"
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
                      {product.name} ({product.shortName})
                    </option>
                  ))}
                  <option value="Turnkey Cleanroom Project Execution">
                    Turnkey Cleanroom Project Execution (Complete Facility)
                  </option>
                  <option value="Modular Ceiling & HVAC Integration">
                    Modular Ceiling &amp; HVAC Integration
                  </option>
                  <option value="Cleanroom Maintenance & Protocol Training">
                    Cleanroom Maintenance &amp; Protocol Training
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
                  htmlFor="modal_message"
                  className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1"
                >
                  Project Requirements / Technical Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="modal_message"
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

              {/* Security & Confidentiality Tag */}
              <div className="flex items-center gap-2 text-[14px] text-slate-500 pt-1">
                <Lock className="w-3.5 h-3.5 text-pophen-blue flex-shrink-0" />
                <span>
                  All project documents and technical parameters are held under strict NDA confidentiality.
                </span>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-pophen-navy hover:bg-pophen-blue text-white shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-pophen-blue/30"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-pophen-cyan" />
                      <span>Submitting Enquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-pophen-cyan" />
                      <span>Submit Project Enquiry</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
