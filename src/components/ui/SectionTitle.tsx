import React from "react";
import { cn } from "../../lib/cn";

export interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  titleColor?: string; // Adicione esta linha
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  className,
  badge,
  title,
  subtitle,
  align = "center",
  titleColor = "text-slate-900", // Valor padrão clássico
  id,
  ...props
}) => {
  return (
    <div
      id={id}
      className={cn(
        "flex flex-col mb-12 sm:mb-16",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
      {...props}
    >
      {badge && (
        <span className="text-emerald-700 font-display text-xs font-bold tracking-widest uppercase bg-emerald-50/80 px-3.5 py-1.5 rounded-full mb-4 border border-emerald-500/10 shadow-sm shadow-emerald-500/5">
          {badge}
        </span>
      )}
      <h2 className={cn(
  "text-3xl sm:text-4xl font-display font-extrabold tracking-tight leading-tight max-w-3xl",
  titleColor // Injetado dinamicamente aqui
)}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
