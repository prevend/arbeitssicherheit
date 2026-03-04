import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  ClipboardList,
  Zap,
  GraduationCap,
  Building2,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { homeServiceCards, servicesSectionContent } from "@/lib/content";

const iconMap: Record<string, LucideIcon> = {
  Shield,
  ClipboardList,
  Zap,
  GraduationCap,
  Building2,
};

export function ServicesSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
              {servicesSectionContent.tagline}
            </p>
            <h2 className="font-heading text-2xl md:text-4xl font-bold text-slate-900">
              {servicesSectionContent.headline}
            </h2>
            <p className="text-lg text-text-gray mt-4">
              {servicesSectionContent.subline}
            </p>
          </div>
        </AnimateOnScroll>

        {/* Alternating Zigzag – All Services */}
        <div className="space-y-16 lg:space-y-20">
          {homeServiceCards.map((card, index) => {
            const Icon = iconMap[card.icon] ?? Shield;
            const isReversed = index % 2 === 1;

            return (
              <AnimateOnScroll key={card.title} animation="fade-up">
                <div
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
                >
                  {/* Image */}
                  <div className={isReversed ? "lg:order-2" : ""}>
                    <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                      <Image
                        src={card.image}
                        alt={card.imageAlt}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className={isReversed ? "lg:order-1" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                      </div>
                      <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                        Leistung {index + 1}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-slate-900 mb-3">
                      {card.title}
                    </h3>
                    <p className="text-base text-text-gray leading-relaxed mb-6">
                      <strong className="text-slate-800">{card.boldIntro}</strong>{" "}
                      {card.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-4">
                      <Link
                        href={card.href}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
                      >
                        Mehr erfahren <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link
                        href="/erstanalyse"
                        className="text-xs font-semibold text-white bg-accent hover:bg-accent-hover px-4 py-2 rounded-full transition-colors"
                      >
                        Anfragen
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Link
            href={servicesSectionContent.ctaHref}
            className="inline-block bg-accent text-white px-8 py-4 rounded-full font-semibold btn-interactive"
          >
            {servicesSectionContent.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
