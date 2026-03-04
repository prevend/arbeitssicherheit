"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const STORAGE_KEY = "cookie-consent";

type ConsentChoice = "all" | "necessary";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        const timer = setTimeout(() => setVisible(true), 500);
        return () => clearTimeout(timer);
      }
    } catch {
      const timer = setTimeout(() => setVisible(true), 0);
      return () => clearTimeout(timer);
    }
  }, []);

  function handleConsent(choice: ConsentChoice) {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ choice, timestamp: new Date().toISOString() })
      );
    } catch {
      // localStorage not available
    }
    setAnimateOut(true);
    setTimeout(() => setVisible(false), 300);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie-Einstellungen"
      className={[
        "fixed bottom-0 inset-x-0 z-[9998] p-4 sm:p-6",
        "transition-all duration-300 ease-out",
        animateOut
          ? "translate-y-full opacity-0"
          : "translate-y-0 opacity-100",
      ].join(" ")}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={[
            "bg-white rounded-2xl shadow-2xl border border-slate-200",
            "p-5 sm:p-6",
            "flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6",
          ].join(" ")}
        >
          <div className="flex-1 min-w-0">
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf
              unserer Website zu bieten.{" "}
              <Link
                href="/datenschutz"
                className="text-primary hover:text-primary-light underline underline-offset-2 transition-colors duration-200 font-medium"
              >
                Mehr erfahren
              </Link>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
            <button
              type="button"
              onClick={() => handleConsent("necessary")}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold bg-white text-slate-700 border border-slate-300 hover:border-primary hover:text-primary hover:bg-blue-50/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2 transition-all duration-200 cursor-pointer"
            >
              Nur notwendige
            </button>
            <button
              type="button"
              onClick={() => handleConsent("all")}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold bg-accent text-white shadow-md shadow-accent/20 hover:bg-accent-hover active:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent/30 focus:ring-offset-2 transition-all duration-200 cursor-pointer"
            >
              Alle akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
