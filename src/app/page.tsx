"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { MobileNav } from "@/components/layout/MobileNav";
import { Footer } from "@/components/layout/Footer";
import { HeroSlider } from "@/components/home/HeroSlider";
import { AboutSection } from "@/components/home/AboutSection";
import { ProductsSection } from "@/components/home/ProductsSection";
import { IndustryApplications } from "@/components/home/IndustryApplications";
import { InteractiveArchitectureSection } from "@/components/home/InteractiveArchitectureSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ProjectShowcase } from "@/components/home/ProjectShowcase";
import { CertificationsSection } from "@/components/home/CertificationsSection";
import { EnquirySection } from "@/components/home/EnquirySection";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { BackToTop } from "@/components/ui/BackToTop";
import { EnquiryModalProvider } from "@/context/EnquiryModalContext";
import { EnquiryModal } from "@/components/modal/EnquiryModal";

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string>(
    "Cleanroom Wall Panels"
  );

  const handleSelectProduct = (productName: string) => {
    setSelectedProduct(productName);
  };

  return (
    <EnquiryModalProvider>
      <div className="min-h-screen flex flex-col bg-white text-slate-800 relative">
        {/* Header and Mobile Drawer */}
        <Header
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
        <MobileNav
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        />

        {/* Main Content Area */}
        <main className="flex-1">
          {/* Section 1: Hero Section with Authentic Industrial Slider */}
          <HeroSlider />

          {/* Section 2: About POPHEN 3-Part Modular Section */}
          <AboutSection />

          {/* Section 3: Cleanroom Architectural Systems (6 Product Cards) */}
          <ProductsSection onSelectProduct={handleSelectProduct} />

          {/* Section 4: Cleanroom Solutions for Critical Industries (Dark Navy) */}
          <IndustryApplications />

          {/* Section 5: Interactive Cleanroom Architecture (3-Column Interactive Explorer) */}
          <InteractiveArchitectureSection />

          {/* Section 6: From Design to Turnkey Execution (5-Step Process Timeline) */}
          <ProcessSection />

          {/* Section 7: Cleanroom Installations Across Industries (Gallery Showcase) */}
          <ProjectShowcase />

          {/* Section 8: Certifications & Compliance (6 Standards Row) */}
          <CertificationsSection />

          {/* Section 9: Let's Plan Your Cleanroom Project (Enquiry Form & Contacts) */}
          <EnquirySection selectedProductInterest={selectedProduct} />
        </main>

        {/* Section 8: Footer with Mandatory Developer Credit */}
        <Footer />

        {/* Floating Controls */}
        <WhatsAppButton />
        <BackToTop />

        {/* Global Premium Enquiry Modal */}
        <EnquiryModal />
      </div>
    </EnquiryModalProvider>
  );
}
