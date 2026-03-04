"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu } from "lucide-react";
import { navigation, siteConfig } from "@/lib/content";
import { MobileNav } from "./mobile-nav";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerBg = scrolled
    ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm"
    : isHome
    ? "bg-transparent border-b border-transparent"
    : "bg-white/80 backdrop-blur-md border-b border-transparent";

  return (
    <>
      <header
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          headerBg,
        ].join(" ")}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Arbeitssicherheit-MG Hoersen GmbH – Arbeitsschutz Mönchengladbach"
                width={150}
                height={48}
                className="h-10 md:h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav aria-label="Hauptnavigation" className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={[
                      "text-sm font-medium transition-colors duration-200",
                      isActive
                        ? !scrolled && isHome
                          ? "text-white font-semibold"
                          : "text-primary"
                        : !scrolled && isHome
                        ? "text-white/80 hover:text-white"
                        : "text-slate-700 hover:text-primary",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA + Phone */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href={siteConfig.phoneHref}
                className={[
                  "flex items-center gap-2 text-sm font-medium transition-colors duration-200",
                  !scrolled && isHome
                    ? "text-white/80 hover:text-white"
                    : "text-slate-700 hover:text-primary",
                ].join(" ")}
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                {siteConfig.phone}
              </a>
              <Link
                href="/erstanalyse"
                className="inline-flex items-center px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-full hover:bg-accent-hover transition-colors duration-200 shadow-sm shadow-accent/20"
              >
                Erstanalyse anfordern
              </Link>
            </div>

            {/* Mobile: CTA immer sichtbar + Hamburger */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                href="/erstanalyse"
                className="inline-flex items-center px-4 py-2 bg-accent text-white text-xs font-semibold rounded-full hover:bg-accent-hover transition-colors duration-200 shadow-sm shadow-accent/20"
              >
                Erstanalyse
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className={[
                  "p-2 -mr-2",
                  !scrolled && isHome
                    ? "text-white hover:text-white/80"
                    : "text-slate-700 hover:text-slate-900",
                ].join(" ")}
                aria-label="Navigation oeffnen"
              >
                <Menu className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileNav
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        pathname={pathname}
      />
    </>
  );
}
