import { scenarios } from "@/lib/content";

export function Scenarios() {
  return (
    <section className="py-20 md:py-32 bg-amber-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading accent-line text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-12">
          Was wir oft sehen
        </h2>

        <div className="space-y-8 border-l-2 border-accent/20 pl-8">
          {scenarios.map((scenario, index) => (
            <div key={index} className="relative">
              {/* Number circle */}
              <div className="absolute -left-[calc(2rem+1px+1rem)] top-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                {scenario.text}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-lg font-medium text-slate-900">
          Solche Situationen l&ouml;sen wir. Meistens schneller, als die
          Betroffenen denken.
        </p>
      </div>
    </section>
  );
}
