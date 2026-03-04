import type { Metadata } from "next";
import Image from "next/image";
import { Building2, Handshake, MapPin, Users, Award, Briefcase } from "lucide-react";
import { CtaBand } from "@/components/features/cta-band";
import { AnimateOnScroll, Stagger } from "@/components/ui/animate-on-scroll";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { getBreadcrumbSchema } from "@/lib/schema";
import {
  referencesPageContent,
  referenceClients,
  partners,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Referenzen",
  description:
    "Unsere Referenzen und Partner: \u00dcber 500 betreute Unternehmen in M\u00f6nchengladbach und am Niederrhein. Vertrauen durch Erfahrung im Arbeitsschutz.",
};

const stats = [
  { value: "500+", label: "Betreute Unternehmen", icon: Users },
  { value: "25+", label: "Jahre Erfahrung", icon: Award },
  { value: "6", label: "Netzwerk-Partner", icon: Briefcase },
];

export default function ReferenzenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: "Startseite", url: "/" },
              { name: "Referenzen", url: "/referenzen" },
            ])
          ),
        }}
      />

      {/* Page Header - Dark with background image */}
      <section className="relative min-h-[400px] md:min-h-[450px] flex items-center overflow-hidden">
        <Image
          src="/images/begehung.jpg"
          alt="Betriebsbegehung Arbeitssicherheit"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40" />
        <div className="absolute inset-0 bg-accent/5" />
        <div className="page-header-animate relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <p className="text-sm font-semibold text-accent/70 uppercase tracking-wider mb-4">
            Referenzen
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
            {referencesPageContent.title}
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            {referencesPageContent.intro}
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <AnimateOnScroll animation="fade-up">
        <section className="bg-primary-dark bg-grain bg-grid-industrial py-10 md:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3 gap-6">
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

      {/* Client References Section */}
      <AnimateOnScroll animation="fade-up">
        <section className="py-20 md:py-28 bg-amber-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Startseite", href: "/" },
                { label: "Referenzen" },
              ]}
            />

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent/10 text-accent-hover rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-slate-900 tracking-tight heading-bar">
                Unsere Kunden
              </h2>
            </div>
            <p className="text-base text-slate-600 leading-relaxed mb-10 max-w-2xl">
              Ein Auszug der Unternehmen, die uns ihre Arbeitssicherheit
              anvertrauen &ndash; vom Handwerksbetrieb bis zur Kommune.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Stagger animation="fade-up" staggerDelay={60}>
                {referenceClients.map((client) => (
                  <div
                    key={client}
                    className="bg-white p-5 rounded-xl border border-slate-200 hover:border-accent/30 card-hover card-accent-left flex items-center gap-4"
                  >
                    <div className="w-9 h-9 bg-slate-100 text-slate-500 rounded-lg flex items-center justify-center shrink-0">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium text-slate-800 leading-snug">
                      {client}
                    </span>
                  </div>
                ))}
              </Stagger>
            </div>

            <p className="mt-8 text-sm text-slate-500 italic">
              &hellip; und viele weitere Betriebe in M&ouml;nchengladbach und am
              Niederrhein.
            </p>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Partner Section */}
      <AnimateOnScroll animation="fade-up">
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent/10 text-accent-hover rounded-lg flex items-center justify-center">
                <Handshake className="w-5 h-5" />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-slate-900 tracking-tight heading-bar">
                Unsere Partner
              </h2>
            </div>
            <p className="text-base text-slate-600 leading-relaxed mb-10 max-w-2xl">
              Gemeinsam stark: Mit diesen Partnern arbeiten wir zusammen, um
              Ihnen das volle Leistungsspektrum im Arbeitsschutz zu bieten.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Stagger animation="fade-up" staggerDelay={120}>
                {partners.map((partner) => (
                  <div
                    key={partner.name}
                    className="bg-amber-50 p-6 rounded-xl border border-amber-200/60 hover:border-accent/30 card-hover card-accent-top"
                  >
                    <h3 className="font-heading text-lg font-semibold text-slate-900 mb-2">
                      {partner.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-slate-600 mb-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{partner.location}</span>
                    </div>
                    {partner.specialty && (
                      <p className="text-sm text-accent-hover font-medium mt-2">
                        {partner.specialty}
                      </p>
                    )}
                  </div>
                ))}
              </Stagger>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* CTA Section */}
      <AnimateOnScroll animation="fade-up">
        <CtaBand
          title="Werden Sie Teil unserer zufriedenen Kunden"
          description="Lassen Sie uns \u00fcber Ihren Arbeitsschutz sprechen. Das Erstgespr\u00e4ch ist kostenfrei und unverbindlich."
        />
      </AnimateOnScroll>
    </>
  );
}
