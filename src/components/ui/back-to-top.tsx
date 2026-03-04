"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Nach oben scrollen"
      className={[
        "fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full",
        "bg-[#216CA5] text-white shadow-lg shadow-[#216CA5]/25",
        "hover:bg-[#3784BC] hover:shadow-xl hover:shadow-[#216CA5]/30",
        "active:scale-95",
        "transition-all duration-300 ease-out",
        "flex items-center justify-center",
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none",
      ].join(" ")}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
