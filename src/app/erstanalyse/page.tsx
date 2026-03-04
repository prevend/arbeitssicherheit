import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
  Gift,
  MapPin,
  Zap,
  ShieldCheck,
  Scale,
  AlertTriangle,
  ClipboardCheck,
  Check,
  ChevronDown,
  Users,
  Award,
  Shield,
  Clock,
  Star,
  Quote,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll, Stagger } from "@/components/ui/animate-on-scroll";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { getBreadcrumbSchema, getFAQSchema } from "@/lib/schema";
import { erstanalyseContent, testimonials } from "@/lib/content";

export const metadata: Metadata = {
  title: "Kostenlose Erstanalyse Arbeitsschutz \u2013 Ihr Status-Check | Arbeitssicherheit MG",
  description:
    "Kostenlose Erstanalyse Ihrer Arbeitsschutzsituation vor Ort in M\u00f6nchengladbach. Gef\u00e4hrdungsbeurteilung, Pr\u00fcffristen, Dokumentation \u2013 in 1\u20132 Stunden wissen Sie, wo Sie stehen.",
  openGraph: {
    title: "Kostenlose Erstanalyse Arbeitsschutz | Arbeitssicherheit MG",
    description:
      "Wir analysieren Ihren Arbeitsschutz vor Ort \u2013 kostenlos und unverbindlich. Termin innerhalb weniger Tage.",
    url: "/erstanalyse",
    type: "website",
  },
};

const stats = [
  { value: "500+", label: "Betreute Unternehmen", icon: Users },
  { value: "25+", label: "Jahre Erfahrung", icon: Award },
  { value: "1\u20132h", label: "Dauer Erstanalyse", icon: Clock },
  { value: "100%", label: "Kostenlos", icon: Shield },
];

const benefitIcons: Record<string, LucideIcon> = {
  Gift,
  MapPin,
  Zap,
  ShieldCheck,
};

const whyIcons: Record<string, LucideIcon> = {
  Scale,
  AlertTriangle,
  ClipboardCheck,
};

export default function ErstanalysePage() {
  const featuredTestimonial = testimonials[2]; // Klaus Schneider – "nach der ersten Begehung"

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: "Startseite", url: "/" },
              { name: "Erstanalyse", url: "/erstanalyse" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getFAQSchema(
              erstanalyseContent.erstanalyseFaqs.map((faq) => ({
                question: faq.question,
                answer: faq.answer,
              }))
            )
          ),
        }}
      />

      {/*
       * Layout Flow:
       * 1. Hero (dark + image)
       * 2. Stats Bar (bg-primary-dark)
       * 3. "Warum Erstanalyse?" (bg-white) – Icon Row
       * 4. "Was wir pr\u00fcfen" (bg-amber-50) – Checklist
       * 5. Prozess-Schritte (bg-white) – Timeline
       * 6. Benefits (bg-amber-50) – Card Grid 2x2
       * 7. Testimonial (bg-primary-dark) – Spotlight
       * 8. FAQ (bg-white) – Accordion
       * 9. Final CTA (bg-primary-dark)
       */}

      {/* 1. Hero */}
      <section className="relative min-h-[400px] md:min-h-[450px] flex items-center overflow-hidden">
        <Image
          src="/images/ersttermin.jpg"
          alt="Fachkraft f\u00fcr Arbeitssicherheit bei einer Betriebsbegehung"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40" />
        <div className="absolute inset-0 bg-accent/5" />
        <div className="page-header-animate relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <p className="text-sm font-semibold text-accent/70 uppercase tracking-wider mb-4">
            Kostenlos &amp; unverbindlich
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
            {erstanalyseContent.title}
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed mb-4">
            {erstanalyseContent.intro}
          </p>
          <p className="text-sm text-white/50">
            {erstanalyseContent.heroTrust}
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

      {/* Breadcrumb */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <Breadcrumb
            items={[
              { label: "Startseite", href: "/" },
              { label: "Erstanalyse" },
            ]}
          />
        </div>
      </div>

      {/* 3. Warum Erstanalyse? – Icon Row */}
      <AnimateOnScroll animation="fade-up">
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                Hintergrund
              </p>
              <h2 className="font-heading text-2xl md:text-4xl font-bold text-slate-900 tracking-tight">
                {erstanalyseContent.whySection.headline}
              </h2>
              <p className="mt-4 text-base text-slate-600 leading-relaxed">
                {erstanalyseContent.whySection.intro}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Stagger animation="fade-up" staggerDelay={100}>
                {erstanalyseContent.whySection.points.map((point) => {
                  const Icon = whyIcons[point.icon] ?? AlertTriangle;
                  return (
                    <div key={point.title} className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-50 border border-red-200 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-red-600" />
                      </div>
                      <h3 className="font-heading text-lg font-bold text-slate-900 mb-2">
                        {point.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  );
                })}
              </Stagger>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* 4. Was wir pr\u00fcfen – Checklist */}
      <AnimateOnScroll animation="fade-up">
        <section className="py-20 md:py-28 bg-amber-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                  Pr\u00fcfumfang
                </p>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                  {erstanalyseContent.checkpoints.headline}
                </h2>
                <p className="text-base text-slate-600 leading-relaxed mb-8">
                  {erstanalyseContent.checkpoints.intro}
                </p>
                <ul className="space-y-3">
                  {erstanalyseContent.checkpoints.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed"
                    >
                      <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/begehung.jpg"
                  alt="Fachkraft pr\u00fcft Arbeitssicherheit im Betrieb"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* 5. Prozess-Schritte – Dark Timeline (Kontrastbrecher) */}
      <AnimateOnScroll animation="fade-up">
        <section className="py-20 md:py-28 bg-primary-dark bg-grain bg-grid-industrial">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                Ablauf
              </p>
              <h2 className="font-heading text-2xl md:text-4xl font-bold text-white tracking-tight">
                Ihre Erstanalyse in 4 Schritten
              </h2>
              <p className="mt-4 text-base text-white/70 leading-relaxed">
                Vom ersten Anruf bis zum individuellen Angebot &ndash; transparent und strukturiert.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Stagger animation="fade-up" staggerDelay={120} className="h-full">
                {erstanalyseContent.steps.map((step, index) => {
                  const num = String(index + 1).padStart(2, "0");

                  return (
                    <div
                      key={step.title}
                      className="relative h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8"
                    >
                      <div className="w-12 h-12 bg-accent text-white rounded-lg flex items-center justify-center text-lg font-bold font-mono mb-4">
                        {num}
                      </div>
                      <h3 className="font-heading text-lg font-semibold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-white/60 leading-relaxed">
                        {step.description}
                      </p>
                      {index < erstanalyseContent.steps.length - 1 && (
                        <ArrowRight className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-accent/40" aria-hidden="true" />
                      )}
                    </div>
                  );
                })}
              </Stagger>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* 6. Benefits – Card Grid 2x2 */}
      <AnimateOnScroll animation="fade-up">
        <section className="py-20 md:py-28 bg-amber-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                Ihre Vorteile
              </p>
              <h2 className="font-heading text-2xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Warum eine kostenfreie Erstanalyse?
              </h2>
              <p className="mt-4 text-base text-slate-600 leading-relaxed">
                Sie gehen kein Risiko ein &ndash; und wissen danach genau, wo Sie stehen.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Stagger animation="fade-up" staggerDelay={100}>
                {erstanalyseContent.benefits.map((benefit) => {
                  const IconComponent = benefitIcons[benefit.icon] ?? CheckCircle;
                  return (
                    <div
                      key={benefit.title}
                      className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 hover:border-accent/30 card-hover card-accent-top"
                    >
                      <div className="w-10 h-10 bg-accent/10 text-accent-hover rounded-lg flex items-center justify-center mb-4">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="font-heading text-lg font-semibold text-slate-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-base text-slate-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  );
                })}
              </Stagger>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* 7. Testimonial – Spotlight */}
      {featuredTestimonial && (
        <AnimateOnScroll animation="fade-up">
          <section className="relative bg-primary-dark bg-grain bg-grid-industrial py-16 md:py-24 overflow-hidden">
            <Quote className="absolute top-6 right-6 w-24 h-24 text-white/[0.03] rotate-12" aria-hidden="true" />
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <blockquote className="relative bg-white rounded-2xl p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.15)]">
                <Quote className="absolute top-6 right-6 w-10 h-10 text-accent/10" aria-hidden="true" />
                {featuredTestimonial.rating && (
                  <div className="flex gap-0.5 mb-4" role="img" aria-label={`${featuredTestimonial.rating} von 5 Sternen`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={[
                          "w-5 h-5",
                          i < featuredTestimonial.rating! ? "fill-accent text-accent" : "fill-slate-200 text-slate-200",
                        ].join(" ")}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                )}
                <p className="text-lg md:text-xl text-slate-800 leading-relaxed font-medium">
                  &ldquo;{featuredTestimonial.quote}&rdquo;
                </p>
                <footer className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3">
                  <div className="w-14 h-14 ring-2 ring-accent/30 rounded-full overflow-hidden shrink-0">
                    {featuredTestimonial.photo ? (
                      <Image
                        src={featuredTestimonial.photo}
                        alt={`${featuredTestimonial.name}, ${featuredTestimonial.role}`}
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                        {featuredTestimonial.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                    )}
                  </div>
                  <div>
                    <cite className="not-italic text-sm font-bold text-slate-900 block">
                      {featuredTestimonial.name}
                    </cite>
                    {featuredTestimonial.role && (
                      <p className="text-xs font-medium text-primary">
                        {featuredTestimonial.role}
                        {featuredTestimonial.company ? ` \u00b7 ${featuredTestimonial.company}` : ""}
                      </p>
                    )}
                    <p className="text-xs text-slate-400">{featuredTestimonial.context}</p>
                  </div>
                </footer>
              </blockquote>
            </div>
          </section>
        </AnimateOnScroll>
      )}

      {/* 8. FAQ – Accordion */}
      <AnimateOnScroll animation="fade-up">
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                H&auml;ufige Fragen
              </p>
              <h2 className="font-heading text-2xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Fragen zur Erstanalyse
              </h2>
            </div>

            <div className="space-y-4">
              {erstanalyseContent.erstanalyseFaqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group bg-amber-50 rounded-xl border border-amber-200/60 overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer text-base font-semibold text-slate-900 hover:text-accent transition-colors list-none [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-5 text-sm text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* 9. Final CTA */}
      <AnimateOnScroll animation="fade-up">
        <section className="relative py-20 md:py-28 bg-primary-dark bg-grain bg-grid-industrial">
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-2xl md:text-4xl font-bold text-white tracking-tight mb-4">
              Bereit f&uuml;r Ihre kostenfreie Erstanalyse?
            </h2>
            <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8 max-w-xl mx-auto">
              Vereinbaren Sie jetzt einen Termin. Wir kommen zu Ihnen, schauen
              uns alles an und sagen Ihnen ehrlich, wo Sie stehen.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href="/kontakt?thema=erstanalyse"
                size="lg"
                className="w-full sm:w-auto"
              >
                Termin vereinbaren
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                href="/leistungen"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Unsere Leistungen ansehen
              </Button>
            </div>
            <p className="mt-6 text-sm text-slate-400">
              Kostenlos &middot; Unverbindlich &middot; Antwort innerhalb eines Werktages
            </p>
          </div>
        </section>
      </AnimateOnScroll>
    </>
  );
}
