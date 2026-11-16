"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { MobileNav } from "@/components/layout/MobileNav";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { BackToTop } from "@/components/ui/BackToTop";
import { EnquiryModalProvider } from "@/context/EnquiryModalContext";
import { EnquiryModal } from "@/components/modal/EnquiryModal";

export function InnerPageLayout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <EnquiryModalProvider>
      <div className="min-h-screen flex flex-col bg-white text-slate-800 relative">
        <Header
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
        <MobileNav
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
        <EnquiryModal />
      </div>
    </EnquiryModalProvider>
  );
}
