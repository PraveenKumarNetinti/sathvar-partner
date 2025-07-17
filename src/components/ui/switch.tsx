import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cnExt } from "@/utils/cn";

const Switch = React.forwardRef<
  React.ComponentRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> & {
    className?: string;
    disabled?: boolean;
  }
>(({ className, disabled, ...rest }, forwardedRef) => {
  return (
    <SwitchPrimitives.Root
      className={cnExt(
        "group/switch block h-5 w-8 shrink-0 p-0.5 outline-hidden focus:outline-hidden",
        className,
      )}
      ref={forwardedRef}
      disabled={disabled}
      {...rest}
    >
      <div
        className={cnExt(
          // base
          "bg-bg-soft-200 h-4 w-7 rounded-full p-0.5 outline-hidden",
          "transition duration-200 ease-out",
          !disabled && [
            // hover
            "group-hover/switch:bg-bg-sub-300",
            // focus
            "group-focus-visible/switch:bg-bg-sub-300",
            // pressed
            "group-active/switch:bg-bg-soft-200",
            // checked
            "group-data-[state=checked]/switch:bg-primary-base",
            // checked hover
            "data-[state=checked]/switch:group-hover:bg-primary-darker",
            // checked pressed
            "data-[state=checked]/switch:group-active:bg-primary-base",
            // focus
            "group-focus/switch:outline-hidden",
          ],
          // disabled
          disabled && [
            "bg-bg-white-0 ring-stroke-soft-200 p-[3px] ring-1 ring-inset",
          ],
        )}
      >
        <SwitchPrimitives.Thumb
          className={cnExt(
            // base
            "pointer-events-none relative block size-3",
            "transition-transform duration-200 ease-out",
            // checked
            "data-[state=checked]:translate-x-3",
            !disabled && [
              // before
              "before:bg-static-white before:absolute before:inset-y-0 before:left-1/2 before:w-3 before:-translate-x-1/2 before:rounded-full",
              "before:[mask:var(--mask)]",
              // after
              "after:shadow-switch-thumb after:absolute after:inset-y-0 after:left-1/2 after:w-3 after:-translate-x-1/2 after:rounded-full",
              // pressed
              "group-active/switch:scale-[.833]",
            ],
            // disabled,
            disabled && ["bg-bg-soft-200 size-2.5 rounded-full shadow-none"],
          )}
          style={{
            ["--mask" as string]:
              "radial-gradient(circle farthest-side at 50% 50%, #0000 1.95px, #000 2.05px 100%) 50% 50%/100% 100% no-repeat",
          }}
        />
      </div>
    </SwitchPrimitives.Root>
  );
});
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch as Root };
