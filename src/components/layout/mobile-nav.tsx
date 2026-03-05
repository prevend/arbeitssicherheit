"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Phone } from "lucide-react";
import { navigation, siteConfig } from "@/lib/content";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  pathname: string;
}

export function MobileNav({ open, onClose, pathname }: MobileNavProps) {
  // Lock body scroll when drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Overlay */}
      <div
        className={[
          "fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0 pointer-events-none",
        ].join(" ")}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div
        className={[
          "fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-2xl transform transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        {/* Header with close button */}
        <div className="flex items-center justify-between px-4 h-16 border-b border-slate-200">
          <Image src="/images/logo-amg.png" alt="Arbeitssicherheit-MG Hoersen GmbH" width={120} height={32} className="h-8 w-auto" />
          <button
            type="button"
            onClick={onClose}
            className="p-2 -mr-2 min-h-12 text-slate-500 hover:text-slate-700"
            aria-label="Navigation schliessen"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation links */}
        <nav className="px-4 py-6 space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={[
                  "block px-3 py-3 min-h-12 text-base font-medium rounded-lg transition-colors duration-150",
                  isActive
                    ? "text-primary bg-blue-50"
                    : "text-slate-900 hover:bg-slate-50",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-200 bg-white">
          <Link
            href="/erstanalyse"
            onClick={onClose}
            className="block w-full text-center px-5 py-3 min-h-12 bg-accent text-white font-semibold rounded-full hover:bg-accent-hover transition-colors duration-200 shadow-sm shadow-accent/20"
          >
            Erstanalyse anfordern
          </Link>
          <a
            href={siteConfig.phoneHref}
            className="flex items-center justify-center gap-2 w-full text-center mt-3 min-h-12 text-sm font-medium text-slate-700"
          >
            <Phone className="w-4 h-4" />
            {siteConfig.phone}
          </a>
        </div>
      </div>
    </>
  );
}
