import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { industries } from "@/lib/content";

export function IndustriesGrid() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
          Branchen
        </p>
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">
          Branchen, in denen wir arbeiten
        </h2>
        <p className="text-base text-slate-600 mb-12">
          Jeder Betrieb ist anders. Aber manche Themen sehen wir in bestimmten Branchen immer wieder.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industries.slice(0, 5).map((industry, index) => (
            <div
              key={industry.title}
              className={[
                "p-6 md:p-8 bg-white rounded-2xl border border-slate-200 hover:border-accent/20 card-hover",
                index === 4 ? "md:col-span-2 md:max-w-lg" : "",
              ].join(" ")}
            >
              <div className="w-8 h-8 bg-accent/5 text-accent rounded-lg flex items-center justify-center text-sm font-bold mb-4">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {industry.title}
              </h3>
              <p className="text-base text-slate-600 leading-relaxed">
                {industry.scenario}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/branchen"
            className="inline-flex items-center text-sm font-medium text-accent hover:text-accent-hover transition-colors duration-200 link-animated"
          >
            Alle Branchen ansehen
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
