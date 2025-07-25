import * as React from "react";
import * as ScrollAreaPrimitives from "@radix-ui/react-scroll-area";
import * as SelectPrimitives from "@radix-ui/react-select";
import { Slottable } from "@radix-ui/react-slot";
import { RiArrowDownSLine, RiCheckLine } from "@remixicon/react";

import { cn } from "@/utils/cn";

const SelectRoot = SelectPrimitives.Root;
SelectRoot.displayName = "SelectRoot";

const SelectGroup = SelectPrimitives.Group;
SelectGroup.displayName = "SelectGroup";

const SelectValue = SelectPrimitives.Value;
SelectValue.displayName = "SelectValue";

const SelectSeparator = SelectPrimitives.Separator;
SelectSeparator.displayName = "SelectSeparator";

const SelectGroupLabel = SelectPrimitives.Label;
SelectGroupLabel.displayName = "SelectGroupLabel";

const SelectTrigger = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitives.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitives.Trigger>
>(({ className, children, ...rest }, forwardedRef) => {
  return (
    <SelectPrimitives.Trigger
      ref={forwardedRef}
      className={cn(
        // base
        "group/trigger relative min-w-0 shrink-0 bg-transparent bg-none outline-none",
        "text-label-lg text-text-strong-950",
        "flex h-[38px] items-center pb-3.5 text-left",
        "transition duration-200 ease-out",
        "before:bg-stroke-soft-200 before:absolute before:bottom-0 before:left-0 before:h-px before:w-full",
        "after:bg-primary-base after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-200 after:ease-out data-[state=open]:after:w-full",
        // focus
        "focus:outline-none",
        // placeholder state
        "data-[placeholder]:text-text-soft-400",

        className,
      )}
      {...rest}
    >
      <Slottable>{children}</Slottable>
      <SelectPrimitives.Icon asChild>
        <RiArrowDownSLine
          className={cn(
            // base
            "ml-auto size-6 shrink-0",
            "transition duration-200 ease-out",
            "text-text-soft-400",
            // focus
            "group-focus/trigger:text-text-sub-600",
            // open
            "group-data-[state=open]/trigger:text-text-sub-600 group-data-[state=open]/trigger:rotate-180",
          )}
        />
      </SelectPrimitives.Icon>
    </SelectPrimitives.Trigger>
  );
});

SelectTrigger.displayName = "SelectTrigger";

const SelectContent = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitives.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitives.Content>
>(
  (
    {
      className,
      position = "popper",
      children,
      sideOffset = 8,
      collisionPadding = 8,
      ...rest
    },
    forwardedRef,
  ) => (
    <SelectPrimitives.Portal>
      <SelectPrimitives.Content
        ref={forwardedRef}
        className={cn(
          // base
          "bg-bg-white-0 shadow-regular-md ring-stroke-soft-200 relative z-50 overflow-hidden rounded-2xl ring-1 ring-inset",
          // widths
          "max-w-[max(var(--radix-select-trigger-width),320px)] min-w-[--radix-select-trigger-width]",
          // heights
          "max-h-[--radix-select-content-available-height]",
          // animation
          "data-[state=open]:animate-in data-[state=open]:fade-in-0",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
          "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          "data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2",
          className,
        )}
        sideOffset={sideOffset}
        position={position}
        collisionPadding={collisionPadding}
        {...rest}
      >
        <ScrollAreaPrimitives.Root type="auto">
          <SelectPrimitives.Viewport asChild>
            <ScrollAreaPrimitives.Viewport
              style={{ overflowY: undefined }}
              className="max-h-[196px] w-full scroll-py-2 overflow-auto p-2"
            >
              {children}
            </ScrollAreaPrimitives.Viewport>
          </SelectPrimitives.Viewport>
          <ScrollAreaPrimitives.Scrollbar orientation="vertical">
            <ScrollAreaPrimitives.Thumb className="bg-bg-soft-200 !w-1 rounded" />
          </ScrollAreaPrimitives.Scrollbar>
        </ScrollAreaPrimitives.Root>
      </SelectPrimitives.Content>
    </SelectPrimitives.Portal>
  ),
);

SelectContent.displayName = "SelectContent";

const SelectItem = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitives.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitives.Item>
>(({ className, children, ...rest }, forwardedRef) => {
  return (
    <SelectPrimitives.Item
      ref={forwardedRef}
      className={cn(
        // base
        "group text-paragraph-sm text-text-strong-950 relative cursor-pointer rounded-lg p-2 pr-9 select-none",
        "flex items-center gap-2 transition duration-200 ease-out",
        // disabled
        "data-[disabled]:text-text-disabled-300 data-[disabled]:pointer-events-none",
        // hover, focus
        "data-[highlighted]:bg-bg-weak-50 data-[highlighted]:outline-0",
        className,
      )}
      {...rest}
    >
      <SelectPrimitives.ItemText asChild>
        <span
          className={cn(
            // base
            "flex flex-1 items-center gap-2",
            // disabled
            "group-disabled:text-text-disabled-300",
          )}
        >
          <span className="line-clamp-1">{children}</span>
        </span>
      </SelectPrimitives.ItemText>
      <SelectPrimitives.ItemIndicator asChild>
        <RiCheckLine className="text-text-sub-600 absolute top-1/2 right-2 size-5 shrink-0 -translate-y-1/2" />
      </SelectPrimitives.ItemIndicator>
    </SelectPrimitives.Item>
  );
});

SelectItem.displayName = "SelectItem";

export {
  SelectRoot as Root,
  SelectContent as Content,
  SelectGroup as Group,
  SelectGroupLabel as GroupLabel,
  SelectItem as Item,
  SelectSeparator as Separator,
  SelectTrigger as Trigger,
  SelectValue as Value,
};
