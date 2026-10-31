# POPHEN — Premium Cleanroom Architectural Systems Website

Modern, responsive, conversion-focused homepage redesign for **POPHEN** (Pophen India), built using **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Lucide Icons**.

## 🛠 Technology Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State & Interactions**: Modern React hooks (`useState`, `useEffect`, `useCallback`)
- **Backend API**: Next.js Serverless Route (`/api/enquiry`) for B2B lead generation

---

## 🎨 Brand Identity & Color Palette

- **Primary Brand Navy**: `#002e5b` (Deep Industrial Navy — Header, Footer, and Anchor Elements)
- **Engineering Accent Blue**: `#0077be` (Cleanroom Precision Blue — Interactive buttons, tabs, highlights)
- **Cyan Accent**: `#00a8e8` (Badges, indicators, active accents)
- **Neutral Backgrounds**: `#ffffff` (Sterile White) and `#f8fafc` (Ice Gray)
- **Typography**: High-contrast, legible sans-serif hierarchy for international B2B credibility

---

## 🚀 Key Features Implemented

1. **Top Utility Bar & Sticky Navigation Header with Premium Mega Menu**:
   - Official POPHEN logo.
   - Verified contact details: Phone `+91 7400197293`, Email `info@pophen.in`.
   - **Wide Desktop Mega Menu** (`ProductMegaMenu.tsx`):
     - Product cards with authentic thumbnails and Lucide icons for all 5 verified product lines.
     - Dedicated **Featured Solution Panel** with rich cleanroom interior photograph, ISO/GMP compliance bullets, and direct CTA.
     - Custom Engineering consultation card.
     - Fast-track direct assistance footer bar (phone and email).
     - Hover bridge delay (200ms) preventing accidental closure, click support, click-outside handling, and `Escape` key dismissal.
   - "Enquire Now" conversion CTA.
   - Smooth slide-in mobile drawer (`MobileNav.tsx`) featuring expandable accordion with product thumbnails and icons.

2. **Full-Width Hero Slider (4 High-Impact Slides)**:
   - High-resolution authentic cleanroom interiors.
   - Verified engineering headlines, descriptions, badges, and dual CTAs.
   - Autoplay (6.5s) with pause-on-hover and pause/play toggle.
   - Accessible keyboard arrow navigation & reduced-motion detection.

3. **About POPHEN Section**:
   - Factual company engineering scope & ISO/GMP compliance capabilities.
   - 4-pillar grid: Modular Architecture, ISO & GMP Compliance, High-Tech Focus, Turnkey Execution.
   - Authentic imagery from POPHEN facilities.

4. **Product & Solution Presentation (Premium Card UI)**:
   - Responsive 3-column desktop (`lg:grid-cols-3`), 2-column tablet (`md:grid-cols-2`), and 1-column mobile (`grid-cols-1`) layout.
   - White cards with subtle borders (`border-slate-200/90`), soft industrial shadows, and rounded corners (`rounded-2xl`).
   - Dark navy category pill badge positioned over the top-left corner of each product image.
   - Structured visual order:
     1. Product image with dark category badge.
     2. Bold navy product title (`text-pophen-navy`).
     3. Short product description.
     4. **Key Specifications section**: Clean `#f0f6fa` light blue-gray background, compact uppercase heading, aligned label-value rows with thin dividers, medium-weight navy labels, and regular-weight values.
     5. **Available Systems list**: Compact rows with small blue check-circle icons (`CheckCircle2`).
     6. **Bottom Action Buttons**:
        - Primary: "Enquire for Specs" in dark navy with right-arrow icon, triggering the modal with pre-selected product.
        - Secondary: Dedicated WhatsApp button ("WA" text with official WhatsApp SVG icon, white background, green border, and prefilled enquiry link to `+91 7400197293`).
   - All 5 verified product lines: Cleanroom Walls, Ceilings, Doors, Cleanroom Windows, and Mobile Clean Air Unit.

5. **Industry Applications Section**:
   - Semiconductor & High-Tech (ISO Class 1–5, ESD Safe)
   - Pharmaceutical & Life Sciences (EU GMP Grades A–D, 21 CFR)
   - Biotechnology & Research Labs (BSL-2/3 compatible, laminar benches)
   - Medical Devices & Healthcare (ISO 13485 cleanroom support)

6. **Turnkey Activities Showcase**:
   - 6 verified activities: Cleanrooms & Laboratories, Clean Interior, Design & Engineering, Maintenance, Academy, and International Collaboration.

7. **Why Choose POPHEN Section**:
   - 6 core company strengths with Lucide icons.

8. **Modern B2B Enquiry Form & Premium Popup Modal**:
   - **Centralized Enquiry Modal** (`EnquiryModal.tsx`):
     - Opens smoothly on all primary CTAs: Header "Enquire Now", Mobile Nav "Enquire", Mega Menu "Request Project Proposal", Hero secondary CTAs, Product cards "Enquire for Specs", and consultation banners.
     - Centered modal with backdrop blur (`z-[100]`), background scroll lock, `Escape` key close, and backdrop dismissal.
     - Two-column responsive desktop layout, single-column mobile layout.
     - Pre-selects the relevant product when launched from a specific product card.
   - Comprehensive client and server-side validation on Full Name, Company, Business Email, Contact Phone, Product of Interest, and Requirements Message.
   - Spam protection via honeypot field (`hp_website`).
   - Unique tracking reference ID generation (e.g. `POP-MVOZE8AC-214`).
   - Loading spinner, error alert banner, and success confirmation.

9. **Floating WhatsApp Button & Back-to-Top**:
   - Official WhatsApp vector icon linked to `+91 7400197293` with prefilled message.
   - Back-to-top floating button appearing at >350px scroll depth.
   - Carefully positioned to prevent UI collisions.

10. **Footer & Developer Credit**:
    - Complete company overview, product links, and verified Mumbai corporate address.
    - Exact credit: **Developed by Integral Web Solution** linking to `https://integralwebsolution.in/`.

11. **Scalable Architecture for Future Internal Pages**:
    - Reusable `PageBanner.tsx` component with customizable title, subtitle, description, background image, and breadcrumbs.

---

## 📦 Running Locally

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Or build and run production server
npm run build
npm run start
```

Visit [http://localhost:3000](http://localhost:3000) to view the homepage.
