import React from "react";

import { cn } from "@/utils/cn";

function SkeletonRoot({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("bg-bg-soft-200 animate-pulse rounded-md", className)}
      {...props}
    />
  );
}

export { SkeletonRoot as Root };
