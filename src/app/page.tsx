import { HeroSection } from "@/components/features/hero-section";
import { ProblemsSection } from "@/components/features/problems-section";
import { ServicesSection } from "@/components/features/services-section";
import { USPSection } from "@/components/features/usp-section";
import { ProcessSection } from "@/components/features/process-section";
import { TestimonialSection } from "@/components/features/testimonial-section";
import { ContactSection } from "@/components/features/contact-section";
import { FaqSection } from "@/components/features/faq-section";
import { CtaBand } from "@/components/features/cta-band";
import { GoogleReviewsStrip } from "@/components/features/google-reviews-strip";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { faqs } from "@/lib/content";
import { getFAQSchema } from "@/lib/schema";

export const metadata = {
  title:
    "Arbeitssicherheit-MG Hoersen GmbH \u2013 Fachkraft f\u00fcr Arbeitssicherheit in M\u00f6nchengladbach",
  description:
    "Externe Fachkraft f\u00fcr Arbeitssicherheit (Sifa) in M\u00f6nchengladbach. Gef\u00e4hrdungsbeurteilungen, DGUV-Pr\u00fcfungen, Schulungen & Betreuung nach ASiG. Jetzt kostenlose Erstanalyse anfordern!",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(faqs)) }}
      />

      {/* 1. Hero – Above the Fold */}
      <HeroSection />

      {/* 2. Probleme – Verlust-Aversion */}
      <ProblemsSection />

      {/* 3. Warum wir – Trust vor Services aufbauen (CRO: Vertrauen zuerst) */}
      <USPSection />

      {/* 4. Dienstleistungen – F-Pattern (erst nach Trust) */}
      <ServicesSection />

      {/* 5. Prozess – Cognitive Ease */}
      <ProcessSection />

      {/* 6. CTA-Band – Conversion-Anker nach Prozessdarstellung */}
      <CtaBand
        title="Bereit für rechtssichere Arbeitssicherheit?"
        description="Fordern Sie jetzt Ihre kostenlose Erstberatung an. Wir melden uns innerhalb von 24 Stunden mit einer konkreten Einschätzung für Ihren Betrieb."
      />

      {/* 7. Google Reviews – Social Proof (Placeholder, durch echte ersetzt) */}
      <GoogleReviewsStrip />

      {/* 8. Testimonials – Detaillierter Social Proof */}
      <TestimonialSection />

      {/* 9. FAQ */}
      <AnimateOnScroll animation="fade-up">
        <FaqSection />
      </AnimateOnScroll>

      {/* 10. Kontakt – Friction-Minimierung */}
      <ContactSection />
    </>
  );
}
