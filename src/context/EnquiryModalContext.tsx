"use client";

import React, { createContext, useContext, useState, useRef, useCallback } from "react";

interface EnquiryModalContextType {
  isOpen: boolean;
  initialProduct: string;
  openEnquiryModal: (product?: string) => void;
  closeEnquiryModal: () => void;
  triggerRef: React.MutableRefObject<HTMLElement | null>;
}

const EnquiryModalContext = createContext<EnquiryModalContextType | undefined>(undefined);

export function EnquiryModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialProduct, setInitialProduct] = useState<string>("Pophen Modular Cleanroom Wall Systems");
  const triggerRef = useRef<HTMLElement | null>(null);

  const openEnquiryModal = useCallback((product?: string) => {
    // Remember which element triggered the modal to restore focus on close
    if (typeof document !== "undefined" && document.activeElement instanceof HTMLElement) {
      triggerRef.current = document.activeElement;
    }
    if (product) {
      setInitialProduct(product);
    }
    setIsOpen(true);
  }, []);

  const closeEnquiryModal = useCallback(() => {
    setIsOpen(false);
    // Restore focus back to the triggering element
    if (triggerRef.current) {
      triggerRef.current.focus();
    }
  }, []);

  return (
    <EnquiryModalContext.Provider
      value={{
        isOpen,
        initialProduct,
        openEnquiryModal,
        closeEnquiryModal,
        triggerRef,
      }}
    >
      {children}
    </EnquiryModalContext.Provider>
  );
}

export function useEnquiryModal() {
  const context = useContext(EnquiryModalContext);
  if (!context) {
    throw new Error("useEnquiryModal must be used within an EnquiryModalProvider");
  }
  return context;
}
