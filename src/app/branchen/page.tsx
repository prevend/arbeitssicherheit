import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Users, Building2, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/features/cta-band";
import { AnimateOnScroll, Stagger } from "@/components/ui/animate-on-scroll";
import { industries, industriesPageContent } from "@/lib/content";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Branchen",
  description:
    "Gesetzlicher Arbeitsschutz f\u00fcr Handwerk, Produktion, Logistik, Pflege und B\u00fcro \u2013 Ihre Sifa in M\u00f6nchengladbach und am Niederrhein.",
};

const stats = [
  { value: "500+", label: "Betreute Unternehmen", icon: Users },
  { value: "5", label: "Branchen-Schwerpunkte", icon: Building2 },
  { value: "25+", label: "Jahre Erfahrung", icon: Award },
  { value: "24h", label: "Erstreaktion", icon: Clock },
];

export default function BranchenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbSchema([
            { name: "Startseite", url: "/" },
            { name: "Branchen", url: "/branchen" },
          ])),
        }}
      />
      {/* Page Header – Dark with background image */}
      <section className="relative min-h-[400px] md:min-h-[450px] flex items-center overflow-hidden">
        <Image
          src="/images/baustelle.jpg"
          alt="Baustelle"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40" />
        <div className="absolute inset-0 bg-accent/5" />
        <div className="page-header-animate relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <p className="text-sm font-semibold text-accent/70 uppercase tracking-wider mb-4">
            Branchen
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
            {industriesPageContent.title}
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            {industriesPageContent.intro}
          </p>
        </div>
      </section>

      {/* Stats Bar – Trust aufbauen */}
      <AnimateOnScroll animation="fade-up">
        <section className="bg-primary-dark bg-grain bg-grid-industrial py-10 md:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="w-6 h-6 text-accent mx-auto mb-2" aria-hidden="true" />
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/60 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Industry cards */}
      <AnimateOnScroll animation="fade-up">
        <section className="py-20 md:py-28 bg-amber-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Startseite", href: "/" },
                { label: "Branchen" },
              ]}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Stagger animation="fade-up" staggerDelay={100}>
                {industries.map((industry, index) => (
                  <div
                    key={industry.title}
                    className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 hover:border-accent/30 card-hover card-accent-top"
                  >
                    <div className="w-8 h-8 bg-accent/10 text-accent-hover rounded-lg flex items-center justify-center text-sm font-bold mb-4 font-mono">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h2 className="font-heading text-xl md:text-2xl font-semibold text-slate-900 mb-4">
                      {industry.title}
                    </h2>
                    <div className="border-l-2 border-slate-300 pl-4 mb-4">
                      <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Praxis-Szenario</p>
                      <p className="text-base text-slate-600 leading-relaxed italic">
                        {industry.scenario}
                      </p>
                    </div>
                    <Link
                      href={`/kontakt?branche=${encodeURIComponent(industry.title)}`}
                      className="inline-flex items-center text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
                    >
                      Beratung anfragen &rarr;
                    </Link>
                  </div>
                ))}
              </Stagger>
            </div>

            {/* "Nicht dabei?" box */}
            <div className="mt-12 p-6 md:p-8 border-2 border-dashed border-orange-300 rounded-2xl bg-white/50">
              <p className="text-base text-slate-600 mb-4">
                Ihre Branche ist nicht dabei? Macht nichts. Die Grundlagen im
                Arbeitsschutz sind branchenunabh&auml;ngig. Rufen Sie an, wir
                finden eine L&ouml;sung.
              </p>
              <Button href="/kontakt">
                Kontakt aufnehmen
              </Button>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Final CTA */}
      <AnimateOnScroll animation="fade-up">
        <CtaBand
          title="Wir schauen uns das an."
          description="Schildern Sie uns kurz Ihre Situation. Wir sagen Ihnen, wie wir helfen k\u00f6nnen."
        />
      </AnimateOnScroll>
    </>
  );
}
