import React from "react";
import { cn } from "../../lib/cn";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Skeleton: React.FC<SkeletonProps> = ({ className, id, ...props }) => {
  return (
    <div
      id={id}
      className={cn("animate-pulse rounded-md bg-slate-200", className)}
      {...props}
    />
  );
};

export default Skeleton;
