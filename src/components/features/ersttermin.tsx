import Image from "next/image";
import { erstterminText } from "@/lib/content";

export function Ersttermin() {
  return (
    <section className="py-20 md:py-32 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image with decorative offset */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl img-hover-zoom">
              <Image
                src="/images/ersttermin.jpg"
                alt="Ersttermin in einem Betrieb"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative offset element */}
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-accent/5 rounded-2xl -z-10" />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Der erste Schritt
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-6">
              So l&auml;uft ein Ersttermin
            </h2>
            <p className="text-base md:text-lg text-slate-700 leading-relaxed">
              {erstterminText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
