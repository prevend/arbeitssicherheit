import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, Shield, Users, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/features/cta-band";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { services, servicesPageContent } from "@/lib/content";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Sifa-Betreuung nach ASiG, Gef\u00e4hrdungsbeurteilungen, DGUV-Pr\u00fcfungen, Unterweisungen, Schulungen und SiGeKo in M\u00f6nchengladbach.",
};

const stats = [
  { value: "500+", label: "Betreute Unternehmen", icon: Users },
  { value: "6", label: "Leistungsbereiche", icon: Shield },
  { value: "25+", label: "Jahre Erfahrung", icon: Award },
  { value: "24h", label: "Erstreaktion", icon: Clock },
];

/* ----- Reusable service renderers for mixed layouts ----- */

function ZigzagService({
  service,
  index,
  isReversed,
  bgColor,
}: {
  service: (typeof services)[0];
  index: number;
  isReversed: boolean;
  bgColor: string;
}) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <AnimateOnScroll animation="fade-up">
      <section
        id={service.slug}
        className={`py-20 md:py-28 scroll-mt-20 ${bgColor}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className={isReversed ? "lg:order-2" : ""}>
              <p className="inline-block text-sm font-semibold text-accent-hover uppercase tracking-wider mb-3 border border-accent/30 px-3 py-1 rounded bg-accent/5 font-mono">
                Leistung {num}
              </p>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-6">
                {service.title}
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                {service.details.intro}
              </p>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                {service.details.body}
              </p>
              {service.details.bulletPoints && service.details.bulletPoints.length > 0 && (
                <ul className="space-y-2 mb-8">
                  {service.details.bulletPoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed"
                    >
                      <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}
              <Button href={`/kontakt?thema=${encodeURIComponent(service.slug)}`} className="w-full sm:w-auto">
                {service.details.ctaText}
              </Button>
              <p className="text-xs text-slate-400 mt-2">Kostenlos und unverbindlich</p>
            </div>
            <div className={isReversed ? "lg:order-1" : ""}>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl img-hover-zoom">
                <Image
                  src={service.details.imageHint}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimateOnScroll>
  );
}

function FeaturedDarkService({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <AnimateOnScroll animation="fade-up">
      <section
        id={service.slug}
        className="relative py-20 md:py-28 scroll-mt-20 overflow-hidden"
      >
        <Image
          src={service.details.imageHint}
          alt={service.title}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-slate-900/85" />
        <div className="absolute inset-0 bg-grid-industrial opacity-30" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3 border border-accent/30 px-3 py-1 rounded bg-accent/10 font-mono">
            Leistung {num}
          </p>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-white tracking-tight mb-6">
            {service.title}
          </h2>
          <p className="text-base md:text-lg text-white/80 leading-relaxed mb-4 max-w-2xl mx-auto">
            {service.details.intro}
          </p>
          <p className="text-base text-white/60 leading-relaxed mb-8 max-w-2xl mx-auto">
            {service.details.body}
          </p>
          {service.details.bulletPoints && service.details.bulletPoints.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto mb-10 text-left">
              {service.details.bulletPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-2 text-sm text-white/70 leading-relaxed"
                >
                  <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  {point}
                </div>
              ))}
            </div>
          )}
          <Button
            href={`/kontakt?thema=${encodeURIComponent(service.slug)}`}
            variant="primary"
            size="lg"
            className="w-full sm:w-auto"
          >
            {service.details.ctaText}
          </Button>
          <p className="text-xs text-white/40 mt-2">Kostenlos und unverbindlich</p>
        </div>
      </section>
    </AnimateOnScroll>
  );
}

function FeaturedWideService({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <AnimateOnScroll animation="fade-up">
      <section
        id={service.slug}
        className="py-20 md:py-28 bg-amber-50 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={service.details.imageHint}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
            </div>
            <div className="lg:col-span-2">
              <p className="inline-block text-sm font-semibold text-accent-hover uppercase tracking-wider mb-3 border border-accent/30 px-3 py-1 rounded bg-accent/5 font-mono">
                Leistung {num}
              </p>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-6">
                {service.title}
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                {service.details.intro}
              </p>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                {service.details.body}
              </p>
              {service.details.bulletPoints && service.details.bulletPoints.length > 0 && (
                <ul className="space-y-2 mb-8">
                  {service.details.bulletPoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed"
                    >
                      <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}
              <Button href={`/kontakt?thema=${encodeURIComponent(service.slug)}`} className="w-full sm:w-auto">
                {service.details.ctaText}
              </Button>
              <p className="text-xs text-slate-400 mt-2">Kostenlos und unverbindlich</p>
            </div>
          </div>
        </div>
      </section>
    </AnimateOnScroll>
  );
}

/*
 * Layout Flow:
 * 1. Hero (dark + image)
 * 2. Stats Bar (bg-primary-dark)
 * 3. Breadcrumb + Quick Nav (bg-white)
 * 4. Service 1 – Zigzag (bg-amber-50)       ← warm after white nav
 * 5. Service 2 – Zigzag reversed (bg-white)
 * 6. Service 3 – Featured Dark (image bg)    ← layout break
 * 7. Mid-page CTA (bg-primary-dark)          ← CTA rhythm
 * 8. Service 4 – Zigzag (bg-amber-50)        ← warm after dark
 * 9. Service 5 – Zigzag reversed (bg-white)
 * 10. Service 6 – Featured Wide (bg-amber-50) ← layout break, warm
 * 11. Final CTA (CtaBand)
 */

export default function LeistungenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbSchema([
            { name: "Startseite", url: "/" },
            { name: "Leistungen", url: "/leistungen" },
          ])),
        }}
      />

      {/* 1. Page Header */}
      <section className="relative min-h-[400px] md:min-h-[450px] flex items-center overflow-hidden">
        <Image
          src="/images/begehung.jpg"
          alt="Begehung"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40" />
        <div className="absolute inset-0 bg-accent/5" />
        <div className="page-header-animate relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <p className="text-sm font-semibold text-accent/70 uppercase tracking-wider mb-4">
            Leistungen
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
            {servicesPageContent.title}
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            {servicesPageContent.intro}
          </p>
        </div>
      </section>

      {/* 2. Stats Bar */}
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

      {/* 3. Breadcrumb + Quick Navigation */}
      <AnimateOnScroll animation="fade-up">
        <section className="bg-white py-8 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Startseite", href: "/" },
                { label: "Leistungen" },
              ]}
            />
            <nav className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 mt-6" aria-label="Schnellnavigation Leistungen">
              {services.map((service, i) => (
                <span key={service.slug} className="inline-flex items-center">
                  {i > 0 && (
                    <span className="text-slate-300 mx-1 hidden sm:inline" aria-hidden="true">&middot;</span>
                  )}
                  <Link
                    href={`#${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-accent px-3 py-2 rounded-lg hover:bg-accent/5 transition-colors"
                  >
                    <span className="text-xs text-accent font-mono font-bold">{String(i + 1).padStart(2, "0")}</span>
                    {service.title}
                  </Link>
                </span>
              ))}
            </nav>
          </div>
        </section>
      </AnimateOnScroll>

      {/* 4. Service 1 – Zigzag (amber-50, image right) */}
      {services[0] && (
        <ZigzagService service={services[0]} index={0} isReversed={false} bgColor="bg-amber-50" />
      )}

      {/* 5. Service 2 – Zigzag reversed (white, image left) */}
      {services[1] && (
        <ZigzagService service={services[1]} index={1} isReversed={true} bgColor="bg-white" />
      )}

      {/* 6. Service 3 – Featured Dark (full-width image background) */}
      {services[2] && (
        <FeaturedDarkService service={services[2]} index={2} />
      )}

      {/* 7. Mid-page CTA */}
      <AnimateOnScroll animation="fade-up">
        <section className="bg-primary-dark bg-grain bg-grid-industrial py-16 md:py-20">
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-4">
              Bereits die passende Leistung gefunden?
            </h3>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Fordern Sie jetzt Ihre kostenlose Erstanalyse an. Wir beraten Sie, welche Ma&szlig;nahmen f&uuml;r Ihren Betrieb sinnvoll sind.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/erstanalyse"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-6 py-3 rounded-full transition-colors"
              >
                Kostenlose Erstanalyse <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-6 py-3 rounded-full transition-colors"
              >
                Direkt Kontakt aufnehmen
              </Link>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* 8. Service 4 – Zigzag (amber-50, image right) */}
      {services[3] && (
        <ZigzagService service={services[3]} index={3} isReversed={false} bgColor="bg-amber-50" />
      )}

      {/* 9. Service 5 – Zigzag reversed (white, image left) */}
      {services[4] && (
        <ZigzagService service={services[4]} index={4} isReversed={true} bgColor="bg-white" />
      )}

      {/* 10. Service 6 – Featured Wide (amber-50, large image + text) */}
      {services[5] && (
        <FeaturedWideService service={services[5]} index={5} />
      )}

      {/* 11. Final CTA */}
      <AnimateOnScroll animation="fade-up">
        <CtaBand
          title="Nicht sicher, was Sie brauchen?"
          description="Rufen Sie an. Wir schauen uns das gemeinsam an."
        />
      </AnimateOnScroll>
    </>
  );
}
