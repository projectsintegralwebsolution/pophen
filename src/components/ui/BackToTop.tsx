"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <aside aria-label="Back to top" className="fixed bottom-[116px] right-7 z-40">
      <button
        type="button"
        onClick={scrollToTop}
        className="w-11 h-11 rounded-full bg-pophen-navy/90 hover:bg-pophen-blue text-white shadow-lg hover:shadow-xl backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 active:scale-95 focus:outline-none focus:ring-4 focus:ring-pophen-blue/40"
        aria-label="Scroll back to top of page"
        title="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 text-pophen-cyan" />
      </button>
    </aside>
  );
}
