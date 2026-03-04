import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/features/contact-form";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { siteConfig, contactContent } from "@/lib/content";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie Ihre Fachkraft f\u00fcr Arbeitssicherheit in M\u00f6nchengladbach. Telefon, E-Mail oder Kontaktformular \u2013 wir beraten Sie zur gesetzlichen Betreuung.",
};

export default function KontaktPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbSchema([
            { name: "Startseite", url: "/" },
            { name: "Kontakt", url: "/kontakt" },
          ])),
        }}
      />
      {/* Page Header – Dark with background image */}
      <section className="relative min-h-[400px] md:min-h-[450px] flex items-center overflow-hidden">
        <Image
          src="/images/buero.jpg"
          alt="Unser B\u00fcro in M\u00f6nchengladbach"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40" />
        <div className="absolute inset-0 bg-accent/5" />
        <div className="page-header-animate relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <p className="text-sm font-semibold text-accent/70 uppercase tracking-wider mb-4">
            Kontakt
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
            {contactContent.title}
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            {contactContent.intro}
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <AnimateOnScroll animation="fade-up">
        <section className="py-20 md:py-32 bg-amber-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Startseite", href: "/" },
                { label: "Kontakt" },
              ]}
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Form in white card */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-10 card-accent-top">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-2">
                  {contactContent.formTitle}
                </h2>
                <p className="text-base text-slate-600 mb-8">
                  {contactContent.formSubline}
                </p>
                <ContactForm />
              </div>

              {/* Right column: Image + Contact details in card */}
              <div className="space-y-8">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl img-hover-zoom">
                  <Image
                    src="/images/buero.jpg"
                    alt="Unser B\u00fcro in M\u00f6nchengladbach"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Contact details card */}
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 space-y-4 card-accent-left">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-accent shrink-0" />
                    <a
                      href={siteConfig.phoneHref}
                      className="text-base text-slate-700 hover:text-accent-hover transition-colors link-animated"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-accent shrink-0" />
                    <a
                      href={siteConfig.emailHref}
                      className="text-base text-slate-700 hover:text-accent-hover transition-colors link-animated"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-base text-slate-700">
                      {siteConfig.address.street}, {siteConfig.address.zip}{" "}
                      {siteConfig.address.city}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-base text-slate-700">
                      {siteConfig.openingHours}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>
    </>
  );
}
