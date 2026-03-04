import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/content";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

function StarRating({ rating, size = "sm" }: { rating: number; size?: "sm" | "lg" }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${rating} von 5 Sternen`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={[
            size === "lg" ? "w-5 h-5" : "w-4 h-4",
            i < rating ? "fill-accent text-accent" : "fill-slate-200 text-slate-200",
          ].join(" ")}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function AuthorInfo({
  testimonial,
  size = "sm",
}: {
  testimonial: (typeof testimonials)[0];
  size?: "sm" | "lg";
}) {
  const photoSize = size === "lg" ? 56 : 44;
  const ringClass = size === "lg" ? "w-14 h-14 ring-2 ring-accent/30" : "w-11 h-11 ring-2 ring-accent/20";

  return (
    <div className="flex items-center gap-3">
      <div className={`${ringClass} rounded-full overflow-hidden shrink-0`}>
        {testimonial.photo ? (
          <Image
            src={testimonial.photo}
            alt={`${testimonial.name}${testimonial.role ? `, ${testimonial.role}` : ""}`}
            width={photoSize}
            height={photoSize}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-primary flex items-center justify-center text-white font-bold text-sm">
            {testimonial.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
        )}
      </div>
      <div className="min-w-0">
        <cite className="not-italic text-sm font-bold text-slate-900 block truncate">
          {testimonial.name}
        </cite>
        {testimonial.role && (
          <p className="text-xs font-medium text-primary truncate">
            {testimonial.role}
            {testimonial.company ? ` · ${testimonial.company}` : ""}
          </p>
        )}
        <p className="text-xs text-slate-400 truncate">{testimonial.context}</p>
      </div>
    </div>
  );
}

export function TestimonialSection() {
  if (testimonials.length === 0) return null;

  const featured = testimonials[0];
  const secondary = testimonials.slice(1, 3);

  return (
    <section className="relative bg-primary-dark bg-grain bg-grid-industrial py-20 md:py-28 overflow-hidden">
      <Quote className="absolute top-8 right-8 w-32 h-32 text-white/[0.03] rotate-12" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
              Kundenstimmen
            </p>
            <h2 className="font-heading text-2xl md:text-4xl font-bold text-white">
              Das sagen unsere Kunden
            </h2>
          </div>
        </AnimateOnScroll>

        {/* Featured Testimonial – Spotlight */}
        <AnimateOnScroll animation="fade-up" delay={100}>
          <blockquote className="relative bg-white rounded-2xl p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.15)] mb-8">
            <Quote className="absolute top-6 right-6 w-10 h-10 text-accent/10" aria-hidden="true" />

            {featured.rating && (
              <StarRating rating={featured.rating} size="lg" />
            )}

            <p className="mt-5 text-lg md:text-xl text-slate-800 leading-relaxed font-medium">
              &ldquo;{featured.quote}&rdquo;
            </p>

            <footer className="mt-8 pt-6 border-t border-slate-100">
              <AuthorInfo testimonial={featured} size="lg" />
            </footer>
          </blockquote>
        </AnimateOnScroll>

        {/* Secondary Testimonials – 2 columns */}
        {secondary.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secondary.map((testimonial, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={200 + index * 100}>
                <blockquote className="relative bg-white rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.15)] h-full flex flex-col">
                  {testimonial.rating && (
                    <StarRating rating={testimonial.rating} />
                  )}

                  <p className="mt-4 text-sm md:text-base text-slate-700 leading-relaxed flex-1">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  <footer className="mt-6 pt-5 border-t border-slate-100">
                    <AuthorInfo testimonial={testimonial} />
                  </footer>
                </blockquote>
              </AnimateOnScroll>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
