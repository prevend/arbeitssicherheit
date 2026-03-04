import type { Metadata } from "next";
import Link from "next/link";
import { Shield } from "lucide-react";
import { datenschutzContent } from "@/lib/content";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Datenschutzerkl\u00e4rung",
  description:
    "Datenschutzerkl\u00e4rung von Arbeitssicherheit MG \u2013 Informationen zur Verarbeitung personenbezogener Daten gem\u00e4ss DSGVO.",
};

export default function DatenschutzPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbSchema([
            { name: "Startseite", url: "/" },
            { name: "Datenschutz", url: "/datenschutz" },
          ])),
        }}
      />

      {/* Page Header */}
      <section className="relative bg-primary-dark bg-grain bg-grid-industrial py-16 md:py-24">
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-accent" />
            </div>
            <p className="text-sm font-semibold text-accent/70 uppercase tracking-wider">
              Rechtliches
            </p>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            {datenschutzContent.title}
          </h1>
          <p className="text-base text-slate-300 leading-relaxed">
            Informationen zur Verarbeitung personenbezogener Daten gem&auml;&szlig; DSGVO.
          </p>
        </div>
      </section>

      {/* Content */}
      <AnimateOnScroll animation="fade-up">
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Startseite", href: "/" },
                { label: "Datenschutz" },
              ]}
            />

            <div className="space-y-8">
              {datenschutzContent.sections.map((section, index) => (
                <article key={index}>
                  <h2 className="font-heading text-xl font-semibold text-slate-900 mb-3">
                    {section.heading}
                  </h2>
                  <div className="text-base text-slate-700 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* CTA Section */}
      <AnimateOnScroll animation="fade-up">
        <section className="py-12 md:py-16 bg-amber-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-12 h-px bg-slate-300 mx-auto mb-8" />
            <h2 className="font-heading text-xl md:text-2xl font-bold text-slate-900 tracking-tight mb-3">
              Haben Sie Fragen zum Datenschutz?
            </h2>
            <p className="text-base text-slate-600 mb-6">
              Kontaktieren Sie uns -- wir helfen Ihnen gerne weiter.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-full bg-accent text-white hover:bg-accent-hover active:bg-accent-hover shadow-md shadow-accent/20 btn-interactive focus:outline-none focus:ring-2 focus:ring-accent/20 focus:ring-offset-2 active:scale-[0.98]"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </section>
      </AnimateOnScroll>
    </>
  );
}
