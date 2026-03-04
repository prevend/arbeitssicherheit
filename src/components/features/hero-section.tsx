"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Check, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig, newHeroContent } from "@/lib/content";
import type { HeroCounter } from "@/lib/content";

function AnimatedCounter({ value, suffix, label }: HeroCounter) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          if (prefersReducedMotion) {
            setCount(value);
            return;
          }

          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * value));
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div
      ref={ref}
      className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 md:p-6 text-center transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 hover:shadow-lg hover:shadow-white/5"
    >
      <div className="text-3xl md:text-4xl font-bold text-white tabular-nums transition-colors duration-300 group-hover:text-accent">
        {count}
        {suffix}
      </div>
      <div className="text-sm text-white/80 mt-2">{label}</div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden -mt-16 md:-mt-20"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-begehung.jpg"
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
        {/* Dark overlay gradient – slightly transparent to let photo bleed through */}
        <div className="absolute inset-0 hero-overlay-gradient" />
        {/* Industrial grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-industrial" />
        {/* Subtle radial light top-left for depth */}
        <div className="absolute inset-0 hero-overlay-radial" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl text-center md:text-left mx-auto md:mx-0">
          {/* Accent line */}
          <div className="hero-animate-scene flex items-center gap-3 mb-6 justify-center md:justify-start">
            <div className="w-10 h-[3px] bg-accent rounded-full" />
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              {newHeroContent.tagline}
            </span>
          </div>

          {/* Headline */}
          <h1
            className="hero-animate-h1 font-heading font-[800] text-white leading-tight text-[clamp(2rem,5vw,3.5rem)]"
          >
            {newHeroContent.headline}
          </h1>

          {/* Sub-headline */}
          <p className="hero-animate-sub text-lg md:text-xl mt-6 leading-relaxed text-white/75">
            {newHeroContent.subline}
          </p>

          {/* CTA Buttons */}
          <div className="hero-animate-cta mt-10 flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">
            <div className="flex flex-col items-center gap-2">
              <Button href={newHeroContent.primaryCtaHref} size="lg">
                {newHeroContent.primaryCta}
              </Button>
              <p className="text-xs text-white/70">Antwort innerhalb 24&nbsp;h</p>
            </div>
            <span className="hidden sm:block w-px h-10 bg-white/20" aria-hidden="true" />
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center gap-2 py-1 px-1 text-white/90 hover:text-white transition-colors duration-200 font-medium"
            >
              <Phone className="w-4 h-4 text-accent" />
              {siteConfig.phone}
            </a>
          </div>

          {/* Trust badges */}
          <div className="hero-animate-trust mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 justify-center md:justify-start">
            {[
              "Elektromeister & zert. SiFa",
              "DGUV Vorschrift\u00a02",
              "Berater-Haftpflicht",
            ].map((badge) => (
              <span key={badge} className="inline-flex items-center gap-1.5 text-sm font-medium text-white/90">
                <Check className="w-4 h-4 text-accent" aria-hidden="true" />
                {badge}
              </span>
            ))}
          </div>

          {/* Counter section */}
          <div className="hero-animate-counters mt-16 grid grid-cols-3 gap-4">
            {newHeroContent.counters.map((counter) => (
              <AnimatedCounter key={counter.label} {...counter} />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-animate-scroll absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs uppercase tracking-widest font-medium text-white/60">
          Mehr erfahren
        </span>
        <ChevronDown className="w-5 h-5 scroll-indicator text-white/60" />
      </div>
    </section>
  );
}
