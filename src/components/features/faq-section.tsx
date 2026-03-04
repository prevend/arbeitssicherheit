"use client";

import { Accordion } from "@/components/ui/accordion";
import { faqs } from "@/lib/content";

export function FaqSection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left: heading + context */}
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold text-orange-600 uppercase tracking-wider mb-3">
              FAQ
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4 heading-bar">
              H&auml;ufige Fragen
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Die wichtigsten Fragen, die uns Betriebe vor dem ersten Termin stellen.
            </p>
          </div>

          {/* Right: accordion */}
          <div className="lg:col-span-3">
            <Accordion items={faqs} />
          </div>
        </div>
      </div>
    </section>
  );
}
