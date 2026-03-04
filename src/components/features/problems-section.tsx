import {
  FileWarning,
  ShieldAlert,
  ClipboardX,
  CalendarClock,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AnimateOnScroll, Stagger } from "@/components/ui/animate-on-scroll";
import { problems, problemsSectionContent } from "@/lib/content";

const iconMap: Record<string, LucideIcon> = {
  FileWarning,
  ShieldAlert,
  ClipboardX,
  CalendarClock,
};

export function ProblemsSection() {
  return (
    <section className="bg-amber-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-14">
            <h2 className="font-heading text-2xl md:text-4xl font-bold text-slate-900">
              {problemsSectionContent.headline}
            </h2>
          </div>
        </AnimateOnScroll>

        {/* Icon Row – horizontal, keine Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          <Stagger animation="fade-up" staggerDelay={100}>
            {problems.map((problem) => {
              const Icon = iconMap[problem.icon];
              return (
                <div key={problem.title} className="text-center">
                  {/* Grosser runder Icon-Container */}
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center">
                    {Icon && <Icon className="w-8 h-8 text-accent" />}
                  </div>
                  <h3 className="font-heading text-base md:text-lg font-bold text-slate-900 mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-sm text-text-gray leading-relaxed max-w-[240px] mx-auto">
                    {problem.description}
                  </p>
                </div>
              );
            })}
          </Stagger>
        </div>

        {/* Transition text */}
        <AnimateOnScroll animation="fade-up" delay={500}>
          <p className="text-center text-lg text-text-gray mt-14 max-w-2xl mx-auto">
            {problemsSectionContent.transitionText}
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
