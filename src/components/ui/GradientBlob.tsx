import React from "react";
import { cn } from "../../lib/cn";

export interface GradientBlobProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: "emerald" | "amber" | "slate" | "cyan";
  size?: "sm" | "md" | "lg";
}

export const GradientBlob: React.FC<GradientBlobProps> = ({ className, color = "emerald", size = "md", id, ...props }) => {
  return (
    <div
      id={id}
      className={cn(
        "absolute rounded-full filter blur-3xl opacity-[0.14] pointer-events-none animate-pulse",
        {
          "bg-emerald-400": color === "emerald",
          "bg-amber-400": color === "amber",
          "bg-slate-400": color === "slate",
          "bg-cyan-400": color === "cyan",
        },
        {
          "w-48 h-48": size === "sm",
          "w-80 h-80": size === "md",
          "w-[600px] h-[600px]": size === "lg",
        },
        className
      )}
      style={{ animationDuration: "12s" }}
      {...props}
    />
  );
};

export default GradientBlob;
