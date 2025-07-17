import * as React from "react";

import { cnExt } from "@/utils/cn";

function Kbd({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cnExt(
        "bg-bg-white-0 text-subheading-xs text-text-soft-400 ring-stroke-soft-200 flex h-5 items-center gap-0.5 rounded-sm px-1.5 whitespace-nowrap ring-1 ring-inset",
        className,
      )}
      {...rest}
    />
  );
}

export { Kbd as Root };
