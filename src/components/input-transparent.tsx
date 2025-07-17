import * as React from "react";
import mergeRefs from "merge-refs";

import { cn } from "@/utils/cn";

const InputTransparent = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input"> & {
    prefix?: string;
  }
>(({ className, prefix, ...rest }, forwardedRef) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <div
      className={cn(
        "group relative flex h-10 w-full items-center gap-2.5 rounded-10 bg-bg-white-0 px-3",
        "transition duration-200 ease-out",
        "hover:[&:not(&:has(input:focus))]:bg-bg-weak-50 hover:[&:not(&:has(input:focus))]:text-text-strong-950",
        "has-[input:focus]:ring-1 has-[input:focus]:ring-inset has-[input:focus]:ring-primary-base",
      )}
    >
      <div className="flex w-full items-baseline">
        {prefix && (
          <span className="select-none text-paragraph-sm text-text-strong-950">
            {prefix}
          </span>
        )}
        <input
          type="text"
          ref={mergeRefs(inputRef, forwardedRef)}
          className={cn(
            "h-10 w-full flex-1 bg-transparent bg-none caret-primary-base",
            "text-paragraph-sm text-text-strong-950",
            "transition duration-200 ease-out",
            "placeholder:text-text-soft-400",
            "focus:outline-none",
            "read-only:pointer-events-none",
            className,
          )}
          {...rest}
        />
      </div>
    </div>
  );
});
InputTransparent.displayName = "InputTransparent";

export { InputTransparent };
