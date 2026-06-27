import React from "react";
import { cn } from "../../lib/cn";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  glass?: boolean;
}

export const Card: React.FC<CardProps> = ({ className, children, hoverEffect = false, glass = false, id, ...props }) => {
  return (
    <div
      id={id}
      className={cn(
        "rounded-3xl border transition-all duration-300",
        glass 
          ? "bg-white/80 backdrop-blur-md border-white/20 shadow-lg shadow-slate-900/5" 
          : "bg-white border-slate-100/80 shadow-[0_4px_20px_rgb(0,0,0,0.02)]",
        hoverEffect && "hover:shadow-[0_12px_30px_rgba(16,185,129,0.06)] hover:border-emerald-500/20 -translate-y-0.5 hover:-translate-y-1.5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
