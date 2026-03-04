import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: "sm" | "md" | "lg";
  hover?: boolean;
}

const paddingMap = {
  sm: "p-5",
  md: "p-6",
  lg: "p-8",
};

export function Card({
  children,
  className = "",
  padding = "lg",
  hover = true,
}: CardProps) {
  return (
    <div
      className={[
        "bg-white rounded-xl border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.08)]",
        hover && "hover:border-[#FA7901] card-hover",
        paddingMap[padding],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
