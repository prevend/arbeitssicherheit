interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = true,
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={[
        centered ? "text-center max-w-2xl mx-auto" : "max-w-2xl",
        "mb-12 md:mb-16",
        className,
      ].join(" ")}
    >
      {eyebrow && (
        <p className="text-sm font-semibold text-orange-600 uppercase tracking-wider mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-2xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-slate-600 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
