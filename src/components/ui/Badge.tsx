import React from "react";
import { cn } from "../../lib/cn";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "success" | "warning" | "danger" | "info";
}

export const Badge: React.FC<BadgeProps> = ({ className, children, variant = "primary", id, ...props }) => {
  return (
    <span
      id={id}
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 text-xs font-semibold rounded-full tracking-wide font-display border",
        {
          "bg-emerald-50 text-emerald-700 border-emerald-100": variant === "primary" || variant === "success",
          "bg-slate-50 text-slate-700 border-slate-200": variant === "secondary",
          "bg-amber-50 text-amber-700 border-amber-100": variant === "warning",
          "bg-rose-50 text-rose-700 border-rose-100": variant === "danger",
          "bg-cyan-50 text-cyan-700 border-cyan-100": variant === "info",
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
