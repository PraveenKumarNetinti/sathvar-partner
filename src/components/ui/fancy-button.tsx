import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { PolymorphicComponentProps } from "@/utils/polymorphic";
import { recursiveCloneChildren } from "@/utils/recursive-clone-children";
import { tv, type VariantProps } from "@/utils/tv";

const FANCY_BUTTON_ROOT_NAME = "FancyButtonRoot";
const FANCY_BUTTON_ICON_NAME = "FancyButtonIcon";

export const fancyButtonVariants = tv({
  slots: {
    root: [
      // base
      "group text-label-sm relative inline-flex items-center justify-center whitespace-nowrap outline-hidden",
      "transition duration-200 ease-out",
      // focus
      "focus:outline-hidden",
      // disabled
      "disabled:text-text-disabled-300 disabled:pointer-events-none",
      "disabled:bg-bg-weak-50 disabled:bg-none disabled:shadow-none disabled:before:hidden disabled:after:hidden",
    ],
    icon: "relative z-10 size-5 shrink-0",
  },
  variants: {
    variant: {
      neutral: {
        root: "bg-bg-strong-950 text-text-white-0 shadow-fancy-buttons-neutral",
      },
      primary: {
        root: "bg-primary-base text-static-white shadow-fancy-buttons-primary",
      },
      destructive: {
        root: "bg-error-base text-static-white shadow-fancy-buttons-error",
      },
      basic: {
        root: [
          // base
          "bg-bg-white-0 text-text-sub-600 shadow-fancy-buttons-stroke",
          // hover
          "hover:bg-bg-weak-50 hover:text-text-strong-950 hover:shadow-none",
        ],
      },
    },
    size: {
      medium: {
        root: "rounded-10 h-10 gap-3 px-3.5",
        icon: "-mx-1",
      },
      small: {
        root: "h-9 gap-3 rounded-lg px-3",
        icon: "-mx-1",
      },
      xsmall: {
        root: "h-8 gap-3 rounded-lg px-2.5",
        icon: "-mx-1",
      },
    },
  },
  compoundVariants: [
    {
      variant: ["neutral", "primary", "destructive"],
      class: {
        root: [
          // before
          "before:pointer-events-none before:absolute before:inset-0 before:z-10 before:rounded-[inherit]",
          "before:bg-linear-to-b before:p-px",
          "before:from-static-white/[.12] before:to-transparent",
          // before mask
          "before:[mask-clip:content-box,border-box] before:[mask-composite:exclude] before:[mask-image:linear-gradient(#fff_0_0),linear-gradient(#fff_0_0)]",
          // after
          "after:from-static-white after:absolute after:inset-0 after:rounded-[inherit] after:bg-linear-to-b after:to-transparent",
          "after:pointer-events-none after:opacity-[.16] after:transition after:duration-200 after:ease-out",
          // hover
          "hover:after:opacity-[.24]",
        ],
      },
    },
  ],
  defaultVariants: {
    variant: "neutral",
    size: "medium",
  },
});

type FancyButtonSharedProps = VariantProps<typeof fancyButtonVariants>;

type FancyButtonProps = VariantProps<typeof fancyButtonVariants> &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
  };

const FancyButtonRoot = React.forwardRef<HTMLButtonElement, FancyButtonProps>(
  ({ asChild, children, variant, size, className, ...rest }, forwardedRef) => {
    const uniqueId = React.useId();
    const Component = asChild ? Slot : "button";
    const { root } = fancyButtonVariants({ variant, size });

    const sharedProps: FancyButtonSharedProps = {
      variant,
      size,
    };

    const extendedChildren = recursiveCloneChildren(
      children as React.ReactElement[],
      sharedProps,
      [FANCY_BUTTON_ICON_NAME],
      uniqueId,
      asChild,
    );

    return (
      <Component
        ref={forwardedRef}
        className={root({ class: className })}
        {...rest}
      >
        {extendedChildren}
      </Component>
    );
  },
);
FancyButtonRoot.displayName = FANCY_BUTTON_ROOT_NAME;

function FancyButtonIcon<T extends React.ElementType>({
  className,
  variant,
  size,
  as,
  ...rest
}: PolymorphicComponentProps<T, FancyButtonSharedProps>) {
  const Component = as || "div";
  const { icon } = fancyButtonVariants({ variant, size });

  return <Component className={icon({ class: className })} {...rest} />;
}
FancyButtonIcon.displayName = FANCY_BUTTON_ICON_NAME;

export { FancyButtonRoot as Root, FancyButtonIcon as Icon };
