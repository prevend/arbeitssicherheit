import type { Metadata } from "next";
import Link from "next/link";
import { Scale } from "lucide-react";
import { impressumContent } from "@/lib/content";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum von Arbeitssicherheit MG \u2013 Angaben gem\u00e4ss \u00a7 5 DDG.",
};

export default function ImpressumPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbSchema([
            { name: "Startseite", url: "/" },
            { name: "Impressum", url: "/impressum" },
          ])),
        }}
      />

      {/* Page Header */}
      <section className="relative bg-primary-dark bg-grain bg-grid-industrial py-16 md:py-24">
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
              <Scale className="w-5 h-5 text-accent" />
            </div>
            <p className="text-sm font-semibold text-accent/70 uppercase tracking-wider">
              Rechtliches
            </p>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            {impressumContent.title}
          </h1>
          <p className="text-base text-slate-300 leading-relaxed">
            Angaben gem&auml;&szlig; &sect;&nbsp;5 DDG.
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
                { label: "Impressum" },
              ]}
            />

            <div className="space-y-8">
              {impressumContent.sections.map((section, index) => (
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
              Haben Sie Fragen?
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
