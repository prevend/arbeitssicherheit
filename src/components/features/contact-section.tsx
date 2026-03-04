import { Check, Phone, Mail, MapPin, Clock, Lock } from "lucide-react";
import { siteConfig, contactSectionContent } from "@/lib/content";
import { ContactForm } from "@/components/features/contact-form";

export function ContactSection() {
  return (
    <section id="kontakt" className="relative bg-primary-dark bg-grain bg-grid-industrial py-20 md:py-28">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <h2 className="font-heading text-2xl md:text-4xl font-bold text-white mb-2 text-center lg:text-left">
          {contactSectionContent.title}
        </h2>
        <p className="text-lg text-white/80 mb-12 text-center lg:text-left">
          {contactSectionContent.subtitle}
        </p>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left column - Form card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 card-accent-left">
            <ContactForm variant="dark" />
          </div>

          {/* Right column - Contact info + trust guarantees */}
          <div className="flex flex-col justify-center">
            <div className="space-y-4">
              <a
                href={siteConfig.phoneHref}
                className="flex items-center gap-3 group"
              >
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span className="text-base text-white/80 group-hover:text-white transition-colors duration-200">
                  {siteConfig.phone}
                </span>
              </a>

              <a
                href={siteConfig.emailHref}
                className="flex items-center gap-3 group"
              >
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span className="text-base text-white/80 group-hover:text-white transition-colors duration-200">
                  {siteConfig.email}
                </span>
              </a>

              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span className="text-base text-white/80">
                  {siteConfig.address.street}, {siteConfig.address.zip}{" "}
                  {siteConfig.address.city}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent shrink-0" />
                <span className="text-base text-white/80">
                  {siteConfig.openingHours}
                </span>
              </div>
            </div>

            {/* Trust-Garantien */}
            <div className="mt-8 pt-8 border-t border-white/10 space-y-3">
              {[
                "Antwort innerhalb von 24 Stunden garantiert",
                "Berater-Haftpflichtversicherung vorhanden",
                "Kostenlose Ersteinsch\u00e4tzung ohne Vertrag",
                "Alle Leistungen nach DGUV Vorschrift\u00a02",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-sm text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust text */}
        <div className="mt-8 text-center">
          <p className="text-sm text-white/70 inline-flex items-center justify-center gap-1.5">
            <Lock className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{contactSectionContent.trustText}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
