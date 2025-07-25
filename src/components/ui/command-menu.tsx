import * as React from "react";
import { type DialogProps } from "@radix-ui/react-dialog";
import { Command as CommandPrimitive } from "cmdk";

import * as Modal from "./modal";

import { cn } from "@/utils/cn";
import { PolymorphicComponentProps } from "@/utils/polymorphic";
import { tv, type VariantProps } from "@/utils/tv";

const CommandDialogTitle = Modal.Title;
const CommandDialogDescription = Modal.Description;

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => {
  return (
    <CommandPrimitive
      ref={ref}
      className={cn(
        "divide-stroke-soft-200 divide-y",
        "grid min-h-0 auto-cols-auto grid-flow-row",
        "[&>[cmdk-label]+*]:border-t-0!",
        className,
      )}
      {...props}
    />
  );
});

Command.displayName = CommandPrimitive.displayName;

const CommandDialog = ({
  children,
  className,
  overlayClassName,
  ...rest
}: DialogProps & {
  className?: string;
  overlayClassName?: string;
}) => {
  return (
    <Modal.Root {...rest}>
      <Modal.Content
        overlayClassName={cn("justify-start pt-20", overlayClassName)}
        showClose={false}
        className={cn(
          "flex max-h-full max-w-[720px] flex-col overflow-hidden rounded-2xl",
          className,
        )}
      >
        <Command>{children}</Command>
      </Modal.Content>
    </Modal.Root>
  );
};

const CommandInput = React.forwardRef<
  React.ComponentRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...rest }, forwardedRef) => {
  return (
    <CommandPrimitive.Input
      ref={forwardedRef}
      className={cn(
        // base
        "text-paragraph-sm text-text-strong-950 w-full bg-transparent outline-hidden",
        "transition duration-200 ease-out",
        // placeholder
        "placeholder:[transition:inherit]",
        "placeholder:text-text-soft-400",
        // hover
        "group-hover/cmd-input:placeholder:text-text-sub-600",
        // focus
        "focus:outline-hidden",
        className,
      )}
      {...rest}
    />
  );
});
CommandInput.displayName = "CommandInput";

const CommandList = React.forwardRef<
  React.ComponentRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...rest }, forwardedRef) => {
  return (
    <CommandPrimitive.List
      ref={forwardedRef}
      className={cn(
        "flex max-h-min min-h-0 flex-1 flex-col",
        "[&>[cmdk-list-sizer]]:divide-stroke-soft-200 [&>[cmdk-list-sizer]]:divide-y",
        "[&>[cmdk-list-sizer]]:overflow-auto",
        className,
      )}
      {...rest}
    />
  );
});
CommandList.displayName = "CommandList";

const CommandGroup = React.forwardRef<
  React.ComponentRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...rest }, forwardedRef) => {
  return (
    <CommandPrimitive.Group
      ref={forwardedRef}
      className={cn(
        "relative px-2 py-3",
        // heading
        "[&>[cmdk-group-heading]]:text-label-xs [&>[cmdk-group-heading]]:text-text-sub-600",
        "[&>[cmdk-group-heading]]:mb-2 [&>[cmdk-group-heading]]:px-3 [&>[cmdk-group-heading]]:pt-1",
        className,
      )}
      {...rest}
    />
  );
});
CommandGroup.displayName = "CommandGroup";

const commandItemVariants = tv({
  base: [
    "rounded-10 bg-bg-white-0 flex items-center gap-3",
    "text-paragraph-sm text-text-strong-950 cursor-pointer",
    "transition duration-200 ease-out",
    // hover/selected
    "data-[selected=true]:bg-bg-weak-50",
  ],
  variants: {
    size: {
      small: "px-3 py-2.5",
      medium: "p-3",
    },
  },
  defaultVariants: {
    size: "small",
  },
});

type CommandItemProps = VariantProps<typeof commandItemVariants> &
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>;

const CommandItem = React.forwardRef<
  React.ComponentRef<typeof CommandPrimitive.Item>,
  CommandItemProps
>(({ className, size, ...rest }, forwardedRef) => {
  return (
    <CommandPrimitive.Item
      ref={forwardedRef}
      className={commandItemVariants({ size, class: className })}
      {...rest}
    />
  );
});
CommandItem.displayName = "CommandItem";

function CommandItemIcon<T extends React.ElementType>({
  className,
  as,
  ...rest
}: PolymorphicComponentProps<T>) {
  const Component = as || "div";

  return (
    <Component
      className={cn("text-text-sub-600 size-5 shrink-0", className)}
      {...rest}
    />
  );
}

function CommandFooter({
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex h-12 items-center justify-between gap-3 px-5",
        className,
      )}
      {...rest}
    />
  );
}

function CommandFooterKeyBox({
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "bg-bg-weak-50 text-text-sub-600 ring-stroke-soft-200 flex size-5 shrink-0 items-center justify-center rounded-sm ring-1 ring-inset",
        className,
      )}
      {...rest}
    />
  );
}

export {
  CommandDialog as Dialog,
  CommandDialogTitle as DialogTitle,
  CommandDialogDescription as DialogDescription,
  CommandInput as Input,
  CommandList as List,
  CommandGroup as Group,
  CommandItem as Item,
  CommandItemIcon as ItemIcon,
  CommandFooter as Footer,
  CommandFooterKeyBox as FooterKeyBox,
};
