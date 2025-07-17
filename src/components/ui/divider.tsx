import React from "react";

import { tv, type VariantProps } from "@/utils/tv";

const DIVIDER_ROOT_NAME = "DividerRoot";

export const dividerVariants = tv({
  base: "relative flex items-center",
  variants: {
    variant: {
      "line":
        "before:bg-stroke-soft-200 h-0 before:absolute before:top-1/2 before:left-0 before:h-px before:w-full before:-translate-y-1/2",
      "line-spacing": [
        // base
        "h-1",
        // before
        "before:bg-stroke-soft-200 before:absolute before:top-1/2 before:left-0 before:h-px before:w-full before:-translate-y-1/2",
      ],
      "line-text": [
        // base
        "gap-2.5",
        "text-subheading-2xs text-text-soft-400",
        // before
        "before:bg-stroke-soft-200",
        // after
        "after:bg-stroke-soft-200",
      ],
      "content": [
        // base
        "gap-2.5",
        // before
        "before:bg-stroke-soft-200 before:h-px before:w-full before:flex-1",
        // after
        "after:bg-stroke-soft-200 after:h-px after:w-full after:flex-1",
      ],
      "text": [
        // base
        "px-2 py-1",
        "text-subheading-xs text-text-soft-400",
      ],
      "solid-text": [
        // base
        "bg-bg-weak-50 px-5 py-1.5 uppercase",
        "text-subheading-xs text-text-soft-400",
      ],
    },
    orientation: {
      horizontal: "",
      vertical: "",
    },
  },
  compoundVariants: [
    {
      orientation: "horizontal",
      variant: [
        "line",
        "line-spacing",
        "line-text",
        "content",
        "text",
        "solid-text",
      ],
      class: "w-full",
    },
    {
      orientation: "horizontal",
      variant: [
        "line",
        "line-spacing",
        "line-text",
        "content",
        "text",
        "solid-text",
      ],
      class: "h-full",
    },
    {
      orientation: "vertical",
      variant: "line-text",
      class: [
        "flex-col",
        "before:h-full before:w-px",
        "after:h-full after:w-px",
      ],
    },
    {
      orientation: "horizontal",
      variant: "line-text",
      class: [
        "before:h-px before:w-full before:flex-1",
        "after:h-px after:w-full after:flex-1",
      ],
    },
  ],
  defaultVariants: {
    variant: "line",
    orientation: "horizontal",
  },
});

function Divider({
  className,
  variant,
  orientation,
  ...rest
}: React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof dividerVariants>) {
  return (
    <div
      role="separator"
      className={dividerVariants({ variant, orientation, class: className })}
      {...rest}
    />
  );
}
Divider.displayName = DIVIDER_ROOT_NAME;

export { Divider as Root };
