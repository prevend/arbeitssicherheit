"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { processSteps, processSectionContent } from "@/lib/content";

interface Step {
  number: number;
  title: string;
  desc: string;
  highlighted: boolean;
}

const steps: Step[] = processSteps.map((step) => ({
  number: step.number,
  title: step.title,
  desc: step.description,
  highlighted: step.number === 1,
}));

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const linesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      linesRef.current.forEach((line) => {
        if (line) {
          line.style.transform = "scaleX(1)";
          line.style.opacity = "1";
        }
      });
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          linesRef.current.forEach((line, index) => {
            if (line) {
              setTimeout(() => {
                line.style.transform = "scaleX(1)";
                line.style.opacity = "1";
              }, 300 + index * 250);
            }
          });
          observer.unobserve(section);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-bg-light safety-stripe py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-slate-900">
            {processSectionContent.headline}
          </h2>
          <p className="text-lg text-text-gray mt-4 mb-16">
            {processSectionContent.subline}
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-start">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-start flex-1">
              {/* Step */}
              <div className="group flex flex-col items-center text-center flex-1">
                <div
                  className={[
                    "w-14 h-14 rounded-full flex items-center justify-center font-heading text-xl font-bold transition-all duration-300 cursor-default stamp-effect group-hover:scale-110 group-hover:bg-accent group-hover:text-white group-hover:shadow-xl group-hover:shadow-accent/40 group-hover:border-transparent",
                    step.highlighted
                      ? "bg-accent text-white shadow-lg shadow-accent/30"
                      : "bg-white border-2 border-primary text-primary",
                  ].join(" ")}
                  aria-label={`Schritt ${step.number}`}
                >
                  {step.number}
                </div>
                <h3 className="font-bold text-slate-900 mt-4 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-text-gray max-w-[200px]">
                  {step.desc}
                </p>
              </div>

              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="flex items-center pt-7 -mx-2 shrink-0 w-[60px]">
                  <div
                    ref={(el) => { linesRef.current[index] = el; }}
                    className="h-0.5 bg-slate-300 w-full origin-left scale-x-0 opacity-0 process-line-transition"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Layout (vertical stepper) */}
        <div className="flex flex-col md:hidden">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-start">
              {/* Left: circle + vertical line */}
              <div className="flex flex-col items-center mr-4">
                <div
                  className={[
                    "w-14 h-14 rounded-full flex items-center justify-center font-heading text-xl font-bold flex-shrink-0 transition-all duration-300 stamp-effect",
                    step.highlighted
                      ? "bg-accent text-white shadow-lg shadow-accent/30"
                      : "bg-white border-2 border-primary text-primary",
                  ].join(" ")}
                  aria-label={`Schritt ${step.number}`}
                >
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 bg-slate-300 flex-1 min-h-[40px] my-2" />
                )}
              </div>

              {/* Right: content */}
              <div className="pt-3 pb-8">
                <h3 className="font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-text-gray">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href={processSectionContent.ctaHref}
            className="inline-block bg-accent text-white px-8 py-4 rounded-full font-semibold btn-interactive mx-auto w-fit"
          >
            {processSectionContent.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
