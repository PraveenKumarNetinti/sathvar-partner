import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { Slottable } from "@radix-ui/react-slot";

import { cn } from "@/utils/cn";

const PopoverRoot = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverAnchor = PopoverPrimitive.Anchor;

const PopoverContent = React.forwardRef<
  React.ComponentRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> & {
    showArrow?: boolean;
    unstyled?: boolean;
  }
>(
  (
    {
      children,
      className,
      align = "center",
      sideOffset = 12,
      collisionPadding = 12,
      arrowPadding = 12,
      showArrow = true,
      unstyled,
      ...rest
    },
    forwardedRef,
  ) => (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        ref={forwardedRef}
        align={align}
        sideOffset={sideOffset}
        collisionPadding={collisionPadding}
        arrowPadding={arrowPadding}
        className={cn(
          // base
          [
            !unstyled &&
              "bg-bg-white-0 shadow-regular-md ring-stroke-soft-200 w-max rounded-2xl p-5 ring-1 ring-inset",
          ],
          "z-50",
          // animation
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className,
        )}
        {...rest}
      >
        <Slottable>{children}</Slottable>
        {showArrow && (
          <PopoverPrimitive.Arrow asChild>
            <div className="border-stroke-soft-200 bg-bg-white-0 size-[11px] -translate-y-[calc(50%+1px)] -rotate-45 rounded-bl-[3px] border [clip-path:polygon(0_100%,0_0,100%_100%)]"></div>
          </PopoverPrimitive.Arrow>
        )}
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  ),
);
PopoverContent.displayName = "PopoverContent";

const PopoverClose = React.forwardRef<
  React.ComponentRef<typeof PopoverPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Close> & {
    unstyled?: boolean;
  }
>(({ className, unstyled, ...rest }, forwardedRef) => (
  <PopoverPrimitive.Close
    ref={forwardedRef}
    className={cn([!unstyled && "absolute top-4 right-4"], className)}
    {...rest}
  />
));
PopoverClose.displayName = "PopoverClose";

export {
  PopoverRoot as Root,
  PopoverAnchor as Anchor,
  PopoverTrigger as Trigger,
  PopoverContent as Content,
  PopoverClose as Close,
};
