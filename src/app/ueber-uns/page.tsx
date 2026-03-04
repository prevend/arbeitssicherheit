import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Zap,
  FlaskConical,
  Microscope,
  Volume2,
  Shield,
  GraduationCap,
  Brain,
  HeartPulse,
  Lightbulb,
  LayoutGrid,
  Dumbbell,
  Truck,
  SunDim,
  TestTubes,
  MapPin,
  Users,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { CtaBand } from "@/components/features/cta-band";
import { aboutContent, teamMembers, siteConfig } from "@/lib/content";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { getBreadcrumbSchema, getAboutPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "\u00dcber uns \u2013 Fachkraft f\u00fcr Arbeitssicherheit in M\u00f6nchengladbach",
  description:
    "Arbeitssicherheit-MG Hoersen GmbH: Ihr Sicherheitsingenieur mit \u00fcber 15\u00a0Jahren Erfahrung am Niederrhein. Qualifiziert nach DGUV Vorschrift\u00a02. Jetzt Kontakt aufnehmen!",
  alternates: {
    canonical: "/ueber-uns",
  },
  openGraph: {
    title: "\u00dcber Arbeitssicherheit MG \u2013 Ihr Sicherheitsingenieur am Niederrhein",
    description:
      "Lernen Sie die Arbeitssicherheit-MG Hoersen GmbH kennen: Ihr Sicherheitsingenieur mit \u00fcber 15\u00a0Jahren Erfahrung am Niederrhein. Qualifiziert nach DGUV Vorschrift\u00a02.",
    url: "/ueber-uns",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const iconMap: Record<string, LucideIcon> = {
  Zap,
  FlaskConical,
  Microscope,
  Volume2,
  Shield,
  GraduationCap,
  Brain,
  HeartPulse,
  Lightbulb,
  LayoutGrid,
  Dumbbell,
  Truck,
  SunDim,
  TestTubes,
};

const stats = [
  { value: "15+", label: "Jahre Erfahrung" },
  { value: "500+", label: "Betreute Unternehmen" },
  { value: "14", label: "Fachqualifikationen" },
  { value: "24h", label: "Erstreaktion" },
];

/*
 * Layout Flow:
 * 1. Hero Centered (dark overlay)           bg: dark
 * 2. Stats Bar                              bg: primary-dark
 * 3. Company Intro (Split Visual) + Breadcrumb  bg: white
 * 4. Philosophy (Stacked Feature List)      bg: slate-50
 * 5. Team (Custom Cards)                    bg: amber-50
 * 6. Mid-page CTA                           bg: primary-dark
 * 7. Qualifications (Badge Grid)            bg: white
 * 8. Regional Presence (Split + Address)    bg: primary-dark
 * 9. Final CTA (CtaBand)                    bg: amber-50
 *
 * 0 layout repeats. BG rhythm: dark/dark/white/slate-50/amber-50/dark/white/dark/amber-50
 */

export default function UeberUnsPage() {
  const wolfgang = teamMembers[0];
  const britta = teamMembers[1];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbSchema([
            { name: "Startseite", url: "/" },
            { name: "\u00dcber uns", url: "/ueber-uns" },
          ])),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getAboutPageSchema()),
        }}
      />

      {/* 1. Hero Section */}
      <section aria-labelledby="hero-heading" className="relative min-h-[400px] md:min-h-[450px] flex items-center overflow-hidden">
        <Image
          src="/images/alltag.jpg"
          alt="Arbeitsalltag bei Arbeitssicherheit-MG Hoersen GmbH in M\u00f6nchengladbach"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40" />
        <div className="absolute inset-0 bg-accent/5" />
        <div className="page-header-animate relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <p className="text-sm font-semibold text-accent/70 uppercase tracking-wider mb-4">
            {aboutContent.heroLabel}
          </p>
          <h1 id="hero-heading" className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            {aboutContent.title}
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            {aboutContent.intro}
          </p>
        </div>
      </section>

      {/* 2. Stats Bar */}
      <AnimateOnScroll animation="fade-up">
        <section aria-label="Kennzahlen" className="bg-primary-dark bg-grain bg-grid-industrial py-10 md:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/60 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* 3. Company Introduction (Split Visual) */}
      <AnimateOnScroll animation="fade-up">
        <section aria-labelledby="company-intro-heading" className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Startseite", href: "/" },
                { label: "\u00dcber uns" },
              ]}
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 id="company-intro-heading" className="font-heading accent-line text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-6">
                  {aboutContent.companyIntro.title}
                </h2>
                <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-6">
                  {aboutContent.companyIntro.text}
                </p>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-8">
                  {aboutContent.companyIntro.text2}
                </p>
                <Button href="/leistungen" variant="outline">
                  {aboutContent.companyIntro.ctaText} <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                </Button>
              </div>
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl img-hover-zoom">
                  <Image
                    src="/images/begehung.jpg"
                    alt="Betriebsbegehung durch Arbeitssicherheit-MG in M\u00f6nchengladbach"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-accent/5 rounded-2xl -z-10" />
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* 4. Philosophy / Approach (Stacked Feature List) */}
      <AnimateOnScroll animation="fade-up">
        <section aria-labelledby="philosophy-heading" className="py-20 md:py-28 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <h2 id="philosophy-heading" className="font-heading accent-line text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-6">
                {aboutContent.philosophy.title}
              </h2>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                {aboutContent.philosophy.text}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {aboutContent.philosophy.values.map((value) => (
                <div key={value.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-slate-900 mb-1">
                      {value.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {value.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* 5. Team Section */}
      <AnimateOnScroll animation="fade-up">
        <section aria-labelledby="team-heading" className="py-20 md:py-28 bg-amber-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <p className="text-sm font-semibold text-accent-hover uppercase tracking-wider mb-3">
                {aboutContent.teamLabel}
              </p>
              <h2 id="team-heading" className="font-heading text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                {aboutContent.teamTitle}
              </h2>
            </div>

            {/* Wolfgang Hoersen -- prominent card */}
            <div className="mb-8">
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-lg card-hover card-accent-left">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[400px] img-hover-zoom">
                    <Image
                      src="/images/team-1.jpg"
                      alt={`Portr\u00e4tfoto von ${wolfgang.name}, ${wolfgang.role}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                  <div className="lg:col-span-2 p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                        <Award className="w-5 h-5 text-accent" aria-hidden="true" />
                      </div>
                      <p className="text-sm font-semibold text-accent-hover uppercase tracking-wider">
                        {wolfgang.role}
                      </p>
                    </div>
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                      {wolfgang.name}
                    </h3>
                    <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                      {wolfgang.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Britta Hoersen -- secondary card */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 flex flex-col sm:flex-row gap-6 items-start card-hover shadow-md card-accent-left">
                <div className="w-28 h-28 bg-stone-200 rounded-xl overflow-hidden shrink-0 img-hover-zoom">
                  <Image
                    src="/images/team-2.jpg"
                    alt={`Portr\u00e4tfoto von ${britta.name}, ${britta.role}`}
                    width={112}
                    height={112}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Users className="w-4 h-4 text-accent" aria-hidden="true" />
                    <p className="text-sm font-semibold text-accent-hover uppercase tracking-wider">
                      {britta.role}
                    </p>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">
                    {britta.name}
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed">
                    {britta.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* 6. Mid-page CTA */}
      <AnimateOnScroll animation="fade-up">
        <CtaBand
          title="Persönliche Betreuung statt anonymer Hotline"
          description="Sprechen Sie direkt mit Wolfgang Hoersen. In einem kostenlosen Erstgespräch klären wir, was Ihr Betrieb konkret braucht."
        />
      </AnimateOnScroll>

      {/* 7. Qualifications -- compact list */}
      <AnimateOnScroll animation="fade-up">
        <section aria-labelledby="qualifications-heading" className="py-20 md:py-28 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-accent-hover uppercase tracking-wider mb-3">
                {aboutContent.qualificationsLabel}
              </p>
              <h2 id="qualifications-heading" className="font-heading text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                {aboutContent.qualificationsTitle}
              </h2>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                {aboutContent.qualificationsText}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
              {wolfgang.qualifications?.map((qual) => {
                const Icon = iconMap[qual.icon] || Shield;
                return (
                  <div
                    key={qual.label}
                    className="flex items-center gap-3 py-2 border-b border-slate-100"
                  >
                    <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-accent" aria-hidden="true" />
                    </div>
                    <p className="text-sm font-medium text-slate-700">
                      {qual.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* 8. Regional Presence -- Dark Section */}
      <AnimateOnScroll animation="fade-up">
        <section aria-labelledby="region-heading" className="relative py-20 md:py-28 bg-primary-dark bg-grain bg-grid-industrial">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent" aria-hidden="true" />
                  </div>
                  <p className="text-sm font-semibold text-accent/70 uppercase tracking-wider">
                    {siteConfig.region}
                  </p>
                </div>
                <h2 id="region-heading" className="font-heading text-2xl md:text-3xl font-bold text-white tracking-tight mb-6">
                  {aboutContent.region.title}
                </h2>
                <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-4">
                  {aboutContent.region.text}
                </p>
                <p className="text-sm text-slate-400 mb-8">
                  Wir betreuen Unternehmen aus <Link href="/branchen" className="text-accent hover:text-accent-hover underline underline-offset-2">verschiedenen Branchen</Link> in der gesamten Region.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button href="/kontakt" size="lg">
                    {aboutContent.region.ctaPrimary}
                  </Button>
                  <Button href={siteConfig.phoneHref} variant="secondary" size="lg">
                    {siteConfig.phone}
                  </Button>
                </div>
                <p className="text-xs text-white/40 mt-2">Kostenlos und unverbindlich</p>
              </div>

              {/* Address card */}
              <address className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 md:p-10 not-italic">
                <h3 className="font-heading text-lg font-semibold text-white mb-6">
                  {siteConfig.companyName}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" aria-hidden="true" />
                    <div>
                      <p className="text-slate-300">{siteConfig.address.street}</p>
                      <p className="text-slate-300">{siteConfig.address.zip} {siteConfig.address.city}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-accent shrink-0" aria-hidden="true" />
                    <a href={siteConfig.phoneHref} className="text-slate-300 hover:text-white transition-colors underline-offset-2 hover:underline py-1">
                      {siteConfig.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-accent shrink-0" aria-hidden="true" />
                    <a href={`mailto:${siteConfig.email}`} className="text-slate-300 hover:text-white transition-colors underline-offset-2 hover:underline py-1">
                      {siteConfig.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-accent shrink-0" aria-hidden="true" />
                    <p className="text-slate-300">{siteConfig.openingHours}</p>
                  </div>
                </div>
              </address>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* 9. Final CTA */}
      <AnimateOnScroll animation="fade-up">
        <section aria-labelledby="cta-heading" className="py-16 md:py-20 bg-amber-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="cta-heading" className="font-heading text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">
              {aboutContent.ctaTitle}
            </h2>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-8">
              {aboutContent.ctaText}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/erstanalyse" size="lg">
                {aboutContent.ctaButtonPrimary}
              </Button>
              <Button href={siteConfig.phoneHref} variant="outline" size="lg">
                {siteConfig.phone}
              </Button>
            </div>
            <p className="text-xs text-slate-400 mt-3">Keine Verpflichtung &middot; Antwort innerhalb 24&nbsp;h &middot; DSGVO-konform</p>
          </div>
        </section>
      </AnimateOnScroll>
    </>
  );
}
