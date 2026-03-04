"use client";

import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/content";

export function StickyMobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
      <div className="flex border-t border-slate-200 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.12)]">
        {/* Anrufen */}
        <a
          href={siteConfig.phoneHref}
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-primary text-white font-semibold text-sm"
          aria-label={`Jetzt anrufen: ${siteConfig.phone}`}
        >
          <Phone className="w-4 h-4" aria-hidden="true" />
          Anrufen
        </a>
        {/* Trennlinie */}
        <div className="w-px bg-white/20" aria-hidden="true" />
        {/* Erstberatung */}
        <Link
          href="/erstanalyse"
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-accent text-white font-semibold text-sm"
        >
          Erstberatung anfragen
        </Link>
      </div>
    </div>
  );
}
