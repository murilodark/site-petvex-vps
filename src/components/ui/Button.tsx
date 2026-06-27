import React from "react";
import { cn } from "../../lib/cn";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, id, ...props }, ref) => {
    return (
      <button
        ref={ref}
        id={id}
        className={cn(
          "inline-flex items-center justify-center font-display font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 cursor-pointer active:scale-98 disabled:opacity-50 disabled:pointer-events-none",
          {
            "bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-900/10 hover:shadow-emerald-500/20 border border-emerald-700/10": variant === "primary",
            "bg-slate-900 hover:bg-slate-800 text-white border border-slate-950/20": variant === "secondary",
            "border border-slate-250 bg-white hover:bg-slate-50 text-slate-700 shadow-sm": variant === "outline",
            "bg-transparent hover:bg-slate-100 text-slate-700": variant === "ghost",
          },
          {
            "px-3.5 py-1.5 text-sm rounded-lg": size === "sm",
            "px-5.5 py-2.5 text-base": size === "md",
            "px-7 py-3 text-base": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
