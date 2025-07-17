import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { RiArrowRightSLine } from "@remixicon/react";

import { cnExt } from "@/utils/cn";
import { PolymorphicComponentProps } from "@/utils/polymorphic";

const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuPortal = DropdownMenuPrimitive.Portal;
const DropdownMenuSub = DropdownMenuPrimitive.Sub;
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
const DropdownMenuRadioItem = DropdownMenuPrimitive.RadioItem;
const DropdownMenuSeparator = DropdownMenuPrimitive.Separator;
const DropdownMenuArrow = DropdownMenuPrimitive.Arrow;

const DropdownMenuContent = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content> & {
    className?: string;
    sideOffset?: number;
  }
>(({ className, sideOffset = 8, ...rest }, forwardedRef) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={forwardedRef}
      sideOffset={sideOffset}
      className={cnExt(
        "bg-bg-white-0 shadow-regular-md ring-stroke-soft-200 z-50 w-[300px] overflow-hidden rounded-2xl p-2 ring-1 ring-inset",
        "flex flex-col gap-1",
        // origin
        "data-[side=bottom]:origin-top data-[side=left]:origin-right data-[side=right]:origin-left data-[side=top]:origin-bottom",
        // animation
        "data-[state=open]:animate-in data-[state=open]:fade-in-0",
        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...rest}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = "DropdownMenuContent";

const DropdownMenuItem = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
    className?: string;
  }
>(({ className, inset, ...rest }, forwardedRef) => (
  <DropdownMenuPrimitive.Item
    ref={forwardedRef}
    className={cnExt(
      // base
      "group/item text-paragraph-sm text-text-strong-950 relative cursor-pointer rounded-lg p-2 outline-hidden select-none",
      "flex items-center gap-2",
      "transition duration-200 ease-out",
      // hover
      "data-highlighted:bg-bg-weak-50",
      // "data-highlighted:bg-primary-base data-highlighted:text-static-white",
      // focus
      "focus:outline-hidden",
      // disabled
      "data-disabled:text-text-disabled-300",
      inset && "pl-9",
      className,
    )}
    {...rest}
  />
));
DropdownMenuItem.displayName = "DropdownMenuItem";

function DropdownItemIcon<T extends React.ElementType>({
  className,
  as,
  ...rest
}: PolymorphicComponentProps<T>) {
  const Component = as || "div";

  return (
    <Component
      className={cnExt(
        // base
        "text-text-sub-600 size-5",
        //hover
        // "group-hover/item:text-static-white",
        // disabled
        "group-has-data-disabled:text-text-disabled-300",
        className,
      )}
      {...rest}
    />
  );
}
DropdownItemIcon.displayName = "DropdownItemIcon";

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithRef<typeof DropdownMenuPrimitive.CheckboxItem> & {
    inset?: boolean;
  }
>(({ className, children, inset, ...rest }, forwardedRef) => {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      ref={forwardedRef}
      className={cnExt(
        // base
        "group/item text-paragraph-sm text-text-strong-950 relative cursor-pointer rounded-lg p-2 outline-hidden select-none",
        "flex items-center gap-2",
        "transition duration-200 ease-out",
        // hover
        "data-highlighted:bg-bg-weak-50",
        // "data-highlighted:bg-primary-base data-highlighted:text-static-white",
        // focus
        "focus:outline-hidden",
        // disabled
        "data-disabled:text-text-disabled-300",
        inset && "pl-9",
        className,
      )}
      {...rest}
    >
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
});
DropdownMenuCheckboxItem.displayName = "DropdownMenuCheckboxItem";

const DropdownMenuGroup = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Group> & {
    className?: string;
  }
>(({ className, ...rest }, forwardedRef) => (
  <DropdownMenuPrimitive.Group
    ref={forwardedRef}
    className={cnExt("flex flex-col gap-1", className)}
    {...rest}
  />
));
DropdownMenuGroup.displayName = "DropdownMenuGroup";

const DropdownMenuLabel = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    className?: string;
  }
>(({ className, ...rest }, forwardedRef) => (
  <DropdownMenuPrimitive.Label
    ref={forwardedRef}
    className={cnExt(
      "text-subheading-xs text-text-soft-400 px-2 py-1 uppercase",
      className,
    )}
    {...rest}
  />
));
DropdownMenuLabel.displayName = "DropdownMenuLabel";

const DropdownMenuSubTrigger = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
    className?: string;
  }
>(({ className, inset, children, ...rest }, forwardedRef) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={forwardedRef}
    className={cnExt(
      // base
      "group/item text-paragraph-sm text-text-strong-950 relative cursor-pointer rounded-lg p-2 outline-0 select-none",
      "flex items-center gap-2",
      "transition duration-200 ease-out",
      // hover
      "data-highlighted:bg-bg-weak-50",
      // disabled
      "data-disabled:text-text-disabled-300",
      inset && "pl-9",
      className,
    )}
    {...rest}
  >
    {children}
    <span className="flex-1" />
    <DropdownItemIcon as={RiArrowRightSLine} />
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName = "DropdownMenuSubTrigger";

const DropdownMenuSubContent = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent> & {
    className?: string;
  }
>(({ className, ...rest }, forwardedRef) => (
  <DropdownMenuPrimitive.SubContent
    ref={forwardedRef}
    className={cnExt(
      "bg-bg-white-0 shadow-regular-md ring-stroke-soft-200 z-50 w-max overflow-hidden rounded-2xl p-2 ring-1 ring-inset",
      "flex flex-col gap-1",
      // animation
      "data-[state=open]:animate-in data-[state=open]:fade-in-0",
      "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
      "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    {...rest}
  />
));
DropdownMenuSubContent.displayName = "DropdownMenuSubContent";

export {
  DropdownMenu as Root,
  DropdownMenuPortal as Portal,
  DropdownMenuTrigger as Trigger,
  DropdownMenuContent as Content,
  DropdownMenuItem as Item,
  DropdownItemIcon as ItemIcon,
  DropdownMenuGroup as Group,
  DropdownMenuLabel as Label,
  DropdownMenuSub as MenuSub,
  DropdownMenuSubTrigger as MenuSubTrigger,
  DropdownMenuSubContent as MenuSubContent,
  DropdownMenuCheckboxItem as CheckboxItem,
  DropdownMenuRadioGroup as RadioGroup,
  DropdownMenuRadioItem as RadioItem,
  DropdownMenuSeparator as Separator,
  DropdownMenuArrow as Arrow,
};
