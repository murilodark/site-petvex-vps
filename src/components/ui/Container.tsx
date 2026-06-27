import React from "react";
import { cn } from "../../lib/cn";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

export const Container: React.FC<ContainerProps> = ({ className, children, size = "lg", id, ...props }) => {
  return (
    <div
      id={id}
      className={cn(
        "mx-auto px-4 sm:px-6 lg:px-8 w-full",
        {
          "max-w-3xl": size === "sm",
          "max-w-5xl": size === "md",
          "max-w-7xl": size === "lg",
          "max-w-[1400px]": size === "xl",
          "max-w-full": size === "full",
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
