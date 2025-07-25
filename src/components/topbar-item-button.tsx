import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";

import { cn } from "@/utils/cn";
import { PolymorphicComponentProps } from "@/utils/polymorphic";

type TopbarItemButtonProps = {
  hasNotification?: boolean;
  asChild?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const TopbarItemButton = React.forwardRef<
  HTMLButtonElement,
  TopbarItemButtonProps
>(
  (
    { children, asChild, hasNotification, className, ...rest },
    forwardedRef,
  ) => {
    const Component = asChild ? Slot : "button";

    return (
      <Component
        ref={forwardedRef}
        className={cn(
          // base
          "rounded-10 text-text-sub-600 relative flex size-10 shrink-0 items-center justify-center transition duration-200 ease-out",
          // hover
          "hover:bg-bg-weak-50",
          // open
          "data-[state=open]:bg-bg-weak-50 data-[state=open]:text-primary-base",
          className,
        )}
        {...rest}
      >
        <Slottable>{children}</Slottable>
        {hasNotification && (
          <div className="border-stroke-white-0 bg-error-base shadow-regular-xs absolute top-2.5 right-2.5 size-2 rounded-full border-2" />
        )}
      </Component>
    );
  },
);
TopbarItemButton.displayName = "TopbarItemButton";

function TopbarItemButtonIcon<T extends React.ElementType>({
  as,
  className,
  ...rest
}: PolymorphicComponentProps<T, React.HTMLAttributes<HTMLDivElement>>) {
  const Component = as || "div";

  return <Component className={cn("size-5", className)} {...rest} />;
}
TopbarItemButtonIcon.displayName = "TopbarItemButtonIcon";

export { TopbarItemButton as Root, TopbarItemButtonIcon as Icon };
