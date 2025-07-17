import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cnExt } from "@/utils/cn";

const SLIDER_ROOT_NAME = "SliderRoot";
const SLIDER_THUMB_NAME = "SliderThumb";

const SliderRoot = React.forwardRef<
  React.ComponentRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, children, ...rest }, forwardedRef) => (
  <SliderPrimitive.Root
    ref={forwardedRef}
    className={cnExt(
      "relative flex h-4 w-full touch-none items-center select-none",
      className,
    )}
    {...rest}
  >
    <SliderPrimitive.Track className="bg-bg-soft-200 relative h-1.5 w-full overflow-hidden rounded-full">
      <SliderPrimitive.Range className="bg-primary-base absolute h-full" />
    </SliderPrimitive.Track>
    {children}
  </SliderPrimitive.Root>
));
SliderRoot.displayName = SLIDER_ROOT_NAME;

const SliderThumb = React.forwardRef<
  React.ComponentRef<typeof SliderPrimitive.Thumb>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Thumb>
>(({ className, ...rest }, forwardedRef) => {
  return (
    <SliderPrimitive.Thumb
      ref={forwardedRef}
      className={cnExt(
        [
          // base
          "border-static-white bg-primary-base shadow-toggle-switch box-content block size-1.5 shrink-0 cursor-pointer rounded-full border-[5px] outline-hidden",
          // focus
          "focus:outline-hidden",
        ],
        className,
      )}
      {...rest}
    />
  );
});
SliderThumb.displayName = SLIDER_THUMB_NAME;

export { SliderRoot as Root, SliderThumb as Thumb };
