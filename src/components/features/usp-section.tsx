"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Layers, Gift, MapPin, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { usps, uspStats, uspSectionContent, teamMembers } from "@/lib/content";
import type { USPStat } from "@/lib/content";

/* ── Icon Mapping ─────────────────────────────────── */

const iconMap: Record<string, LucideIcon> = { Layers, Gift, MapPin, ShieldCheck };

/* ── Animated Counter ─────────────────────────────── */

function AnimatedStat({ value, suffix, label }: USPStat) {
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

          if (prefersReducedMotion || value === 0) {
            setCount(value);
            return;
          }

          const duration = 1800;
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
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div
      ref={ref}
      className="group text-center px-4 py-3 transition-transform duration-300 hover:scale-105"
    >
      <div className="text-3xl md:text-4xl font-bold tabular-nums transition-colors duration-300 text-white group-hover:text-accent">
        {count}
        {suffix}
      </div>
      <div className="text-sm text-white/75 mt-1">{label}</div>
    </div>
  );
}

/* ── Component ──────────────────────────────────── */

export function USPSection() {
  return (
    <section className="relative bg-primary-dark bg-grain bg-grid-industrial py-20 md:py-28">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-column layout: Team image + Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center mb-16">
          {/* Team image */}
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative pb-10">
              <Image
                src="/images/team-1.jpg"
                alt={`${teamMembers[0].name} – ${teamMembers[0].role}`}
                width={320}
                height={320}
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-2xl"
              />
              {/* Accent border */}
              <div className="absolute -bottom-3 -right-3 w-64 h-64 md:w-80 md:h-80 rounded-2xl border-2 border-accent/30 -z-10" />
              {/* Name badge */}
              <div className="absolute -bottom-1 left-0 right-0 mx-auto w-fit bg-white rounded-xl shadow-lg px-4 py-2.5 text-center border border-slate-100">
                <p className="text-sm font-bold text-slate-900 whitespace-nowrap">{teamMembers[0].name}</p>
                <p className="text-xs text-primary font-medium whitespace-nowrap">{teamMembers[0].role}</p>
              </div>
            </div>
          </div>
          {/* Headline */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <h2 className="font-heading text-2xl md:text-4xl font-bold text-white">
              {uspSectionContent.headline}
            </h2>
            <p className="text-white/80 mt-4 text-lg leading-relaxed">
              {uspSectionContent.subline}
            </p>
          </div>
        </div>

        {/* Animated Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 border-y border-white/10 py-8">
          {uspStats.map((stat) => (
            <AnimatedStat key={stat.label} {...stat} />
          ))}
        </div>

        {/* USP Feature List – Icon links + Text rechts, 2-Spalten */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {usps.map((card) => {
            const Icon = iconMap[card.icon];
            return (
              <div
                key={card.title}
                className="flex items-start gap-4"
              >
                <div className="shrink-0 w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                  {Icon && <Icon className="w-6 h-6 text-accent" />}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">
                    {card.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
