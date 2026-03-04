import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/content";

interface CtaBandProps {
  title?: string;
  description?: string;
  variant?: "default" | "light";
}

export function CtaBand({
  title = "Kostenlose Erstberatung \u2013 unverbindlich und direkt.",
  description = "Schildern Sie uns kurz Ihre Situation. Wir antworten innerhalb von 24 Stunden mit einer konkreten Einsch\u00e4tzung f\u00fcr Ihren Betrieb.",
  variant = "default",
}: CtaBandProps) {
  const isDark = variant === "default";

  return (
    <section
      className={[
        "relative py-16 md:py-20",
        isDark
          ? "bg-primary-dark bg-grain bg-grid-industrial"
          : "bg-amber-50 border-t border-b border-amber-200",
      ].join(" ")}
    >
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className={[
            "font-heading text-2xl md:text-3xl font-bold tracking-tight",
            isDark ? "text-white" : "text-slate-900",
          ].join(" ")}
        >
          {title}
        </h2>

        <p
          className={[
            "mt-4 text-base leading-relaxed",
            isDark ? "text-slate-300" : "text-slate-600",
          ].join(" ")}
        >
          {description}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button href="/erstanalyse">
            Jetzt kostenlos anfragen
          </Button>
          <a
            href={siteConfig.phoneHref}
            className={[
              "inline-flex items-center gap-2 py-3 px-4 text-sm font-medium rounded-full transition-colors duration-200",
              isDark
                ? "text-slate-300 hover:text-white"
                : "text-slate-700 hover:text-accent-hover",
            ].join(" ")}
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            {siteConfig.phone}
          </a>
        </div>

        {/* Trust micro-copy */}
        <p className={[
          "mt-4 text-xs",
          isDark ? "text-slate-500" : "text-slate-500",
        ].join(" ")}>
          Keine Verpflichtung &middot; Antwort innerhalb 24&nbsp;h &middot; DSGVO-konform
        </p>
      </div>
    </section>
  );
}
