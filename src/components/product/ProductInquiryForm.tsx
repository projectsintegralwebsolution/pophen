"use client";

import { useState } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Building,
  Mail,
  User,
  Phone,
  Globe2,
  ShieldCheck,
  Lock,
} from "lucide-react";

interface ProductInquiryFormProps {
  productName: string;
}

const TOP_COUNTRIES = [
  { name: "India", code: "+91", flag: "🇮🇳" },
  { name: "Malaysia", code: "+60", flag: "🇲🇾" },
  { name: "Singapore", code: "+65", flag: "🇸🇬" },
  { name: "United States", code: "+1", flag: "🇺🇸" },
  { name: "United Arab Emirates", code: "+971", flag: "🇦🇪" },
  { name: "Saudi Arabia", code: "+966", flag: "🇸🇦" },
  { name: "Germany", code: "+49", flag: "🇩🇪" },
  { name: "France", code: "+33", flag: "🇫🇷" },
  { name: "Hungary", code: "+36", flag: "🇭🇺" },
  { name: "Sweden", code: "+46", flag: "🇸🇪" },
  { name: "China", code: "+86", flag: "🇨🇳" },
  { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
  { name: "Japan", code: "+81", flag: "🇯🇵" },
  { name: "South Korea", code: "+82", flag: "🇰🇷" },
  { name: "Taiwan", code: "+886", flag: "🇹🇼" },
  { name: "Vietnam", code: "+84", flag: "🇻🇳" },
  { name: "Indonesia", code: "+62", flag: "🇮🇩" },
  { name: "Thailand", code: "+66", flag: "🇹🇭" },
  { name: "Mexico", code: "+52", flag: "🇲🇽" },
  { name: "Other Country", code: "+", flag: "🌐" },
];

export function ProductInquiryForm({ productName }: ProductInquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    country: "India",
    countryCode: "+91",
    phone: "",
    productName: productName,
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = TOP_COUNTRIES.find((c) => c.name === e.target.value);
    setFormData((prev) => ({
      ...prev,
      country: e.target.value,
      countryCode: selected ? selected.code : "+",
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg("Please fill in all required fields (Name, Email, and Phone).");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          phone: `${formData.countryCode} ${formData.phone}`,
          source: `Product Detail: ${productName}`,
        }),
      });

      if (!res.ok) {
        throw new Error("Unable to submit quotation request. Please try again.");
      }

      setSubmitted(true);
    } catch (err: any) {
      setErrorMsg(err.message || "Failed to submit enquiry. Please call our team directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden">
      {/* Header Bar */}
      <div className="bg-[#00172e] text-white p-6 sm:p-7">
        <div className="flex items-center justify-between gap-4">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-pophen-cyan block">
              INTERNATIONAL TECHNICAL INQUIRY
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
              Request a Technical Quote &amp; Specification
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Direct consultation with POPHEN cleanroom architectural engineering specialists.
            </p>
          </div>
          <div className="hidden sm:flex w-12 h-12 rounded-xl bg-white/10 border border-white/15 items-center justify-center flex-shrink-0 text-pophen-cyan">
            <ShieldCheck className="w-6 h-6" />
          </div>
        </div>

        {/* Selected Product Badge */}
        <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
          <span className="text-xs text-slate-300">Target Product:</span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0077be] text-white text-xs font-bold shadow-xs">
            <Lock className="w-3 h-3 text-pophen-cyan" />
            <span>{productName}</span>
          </span>
        </div>
      </div>

      {/* Body Area */}
      <div className="p-6 sm:p-8">
        {submitted ? (
          <div className="py-10 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-pophen-navy">
              Quotation Request Received!
            </h4>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you for contacting POPHEN. Our technical engineering division will review your project parameters for <strong className="text-pophen-navy">{productName}</strong> and deliver a detailed specification &amp; commercial proposal within 24 business hours.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="px-5 py-2.5 rounded-lg text-xs font-bold text-pophen-blue border border-pophen-blue/30 hover:bg-pophen-blue/5 transition-colors"
              >
                Submit Another Specification Request
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {errorMsg && (
              <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-700">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Rajesh Sharma / John Doe"
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-pophen-blue/30 focus:border-pophen-blue"
                  />
                </div>
              </div>

              {/* Company / Organization */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-700">
                  Company / Organization Name
                </label>
                <div className="relative">
                  <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. SemiCon Fab Labs / Pharma Ltd"
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-pophen-blue/30 focus:border-pophen-blue"
                  />
                </div>
              </div>

              {/* Business Email */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-700">
                  Business Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-pophen-blue/30 focus:border-pophen-blue"
                  />
                </div>
              </div>

              {/* Country Selection */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-700">
                  Country / Region <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Globe2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    value={formData.country}
                    onChange={handleCountryChange}
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-pophen-blue/30 focus:border-pophen-blue bg-white"
                  >
                    {TOP_COUNTRIES.map((c) => (
                      <option key={c.name} value={c.name}>
                        {c.flag} {c.name} ({c.code})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Phone Number with Calling Code */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={formData.countryCode}
                  onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                  className="w-20 px-3 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm font-semibold text-center focus:outline-none focus:ring-2 focus:ring-pophen-blue/30 focus:border-pophen-blue bg-slate-50"
                  placeholder="+Code"
                />
                <div className="relative flex-1">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 9876543210"
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-pophen-blue/30 focus:border-pophen-blue"
                  />
                </div>
              </div>
            </div>

            {/* Message / Technical Requirements */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700">
                Project Requirements &amp; Quantities
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={`Please specify cleanroom class (e.g. ISO 6), area size (sq.ft / m²), location, panel thickness, or any custom engineering requirements for ${productName}...`}
                className="w-full p-3.5 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-pophen-blue/30 focus:border-pophen-blue resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-xs sm:text-sm font-bold bg-pophen-blue hover:bg-pophen-blue-hover text-white shadow-md transition-all hover:shadow-lg disabled:opacity-60"
              >
                {loading ? (
                  <span>Transmitting Technical Inquiry...</span>
                ) : (
                  <>
                    <span>Submit Request for Quotation ({productName})</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
              <p className="text-[11px] text-slate-500 text-center mt-2">
                🔒 Non-disclosure protected. We never share engineering or contact data with third parties.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
