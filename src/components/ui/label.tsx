import * as React from "react";
import * as LabelPrimitives from "@radix-ui/react-label";

import { cnExt } from "@/utils/cn";

const LabelRoot = React.forwardRef<
  React.ComponentRef<typeof LabelPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitives.Root> & {
    disabled?: boolean;
    className?: string;
  }
>(({ className, disabled, ...rest }, forwardedRef) => {
  return (
    <LabelPrimitives.Root
      ref={forwardedRef}
      className={cnExt(
        "group text-label-sm text-text-strong-950 cursor-pointer",
        "flex items-center gap-px",
        // disabled
        "aria-disabled:text-text-disabled-300",
        className,
      )}
      aria-disabled={disabled}
      {...rest}
    />
  );
});
LabelRoot.displayName = "LabelRoot";

function LabelAsterisk({
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cnExt(
        "text-primary-base",
        // disabled
        "group-aria-disabled:text-text-disabled-300",
        className,
      )}
      {...rest}
    >
      {children || "*"}
    </span>
  );
}

function LabelSub({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cnExt(
        "text-paragraph-sm text-text-sub-600",
        // disabled
        "group-aria-disabled:text-text-disabled-300",
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  );
}

export { LabelRoot as Root, LabelAsterisk as Asterisk, LabelSub as Sub };
