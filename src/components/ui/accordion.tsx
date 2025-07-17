import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { RiAddLine, RiSubtractLine } from "@remixicon/react";

import type { PolymorphicComponentProps } from "@/utils/polymorphic";
import { tv } from "@/utils/tv";

const ACCORDION_ROOT_NAME = "AccordionRoot";
const ACCORDION_HEADER_NAME = "AccordionHeader";
const ACCORDION_ITEM_NAME = "AccordionItem";
const ACCORDION_ICON_NAME = "AccordionIcon";
const ACCORDION_ARROW_NAME = "AccordionArrow";
const ACCORDION_TRIGGER_NAME = "AccordionTrigger";
const ACCORDION_CONTENT_NAME = "AccordionContent";

export const accordionVariants = tv({
  slots: {
    root: [],
    header: [],
    trigger: [
      // base
      "text-label-sm text-text-strong-950 w-[calc(100%+theme(space.7))] text-left",
      "grid auto-cols-auto grid-flow-col grid-cols-[auto_minmax(0,1fr)] items-center gap-2.5",
      "-m-3.5 p-3.5 outline-hidden",
      // focus
      "focus:outline-hidden",
    ],
    icon: "text-text-sub-600 size-5",
    arrowOpen: [
      "text-text-soft-400 ml-auto size-5",
      "transition duration-200 ease-out",
      // hover
      "group-hover/accordion:text-text-sub-600",
      // open
      "group-data-[state=open]/accordion:hidden",
    ],
    arrowClose: [
      "text-text-sub-600 ml-auto size-5",
      // close
      "hidden group-data-[state=open]/accordion:block",
    ],
    content: [
      "text-paragraph-sm text-text-sub-600 overflow-hidden pt-1.5",
      "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ],
    item: [
      // base
      "group/accordion",
      "rounded-10 bg-bg-white-0 ring-stroke-soft-200 p-3.5 ring-1 ring-inset",
      "transition duration-200 ease-out",
      // hover
      "hover:bg-bg-weak-50 hover:ring-transparent",
      // has-focus-visible
      "has-focus-visible:bg-bg-weak-50 has-focus-visible:ring-transparent",
      // open
      "data-[state=open]:bg-bg-weak-50 data-[state=open]:ring-transparent",
    ],
  },
});

const slots = accordionVariants();

const Accordion = React.forwardRef<
  HTMLDivElement,
  | AccordionPrimitive.AccordionSingleProps
  | AccordionPrimitive.AccordionMultipleProps
>((props, forwardedRef) => (
  <AccordionPrimitive.Root ref={forwardedRef} {...props} />
));
Accordion.displayName = ACCORDION_ROOT_NAME;

const AccordionHeader = React.forwardRef<
  HTMLHeadingElement,
  AccordionPrimitive.AccordionHeaderProps
>((props, forwardedRef) => (
  <AccordionPrimitive.Header ref={forwardedRef} {...props} />
));
AccordionHeader.displayName = ACCORDION_HEADER_NAME;

const AccordionItem = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & {
    className?: string;
  }
>(({ className, ...rest }, forwardedRef) => {
  return (
    <AccordionPrimitive.Item
      ref={forwardedRef}
      className={slots.item({ class: className })}
      {...rest}
    />
  );
});
AccordionItem.displayName = ACCORDION_ITEM_NAME;

const AccordionTrigger = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
    className?: string;
  }
>(({ children, className, ...rest }, forwardedRef) => {
  return (
    <AccordionPrimitive.Trigger
      ref={forwardedRef}
      className={slots.trigger({ class: className })}
      {...rest}
    >
      {children}
    </AccordionPrimitive.Trigger>
  );
});
AccordionTrigger.displayName = ACCORDION_TRIGGER_NAME;

function AccordionIcon<T extends React.ElementType>({
  className,
  as,
  ...rest
}: PolymorphicComponentProps<T>) {
  const Component = as || "div";

  return <Component className={slots.icon({ class: className })} {...rest} />;
}
AccordionIcon.displayName = ACCORDION_ICON_NAME;

type AccordionArrowProps = React.HTMLAttributes<HTMLDivElement> & {
  openIcon?: React.ElementType;
  closeIcon?: React.ElementType;
};

// open/close
function AccordionArrow({
  className,
  openIcon: OpenIcon = RiAddLine,
  closeIcon: CloseIcon = RiSubtractLine,
  ...rest
}: AccordionArrowProps) {
  return (
    <>
      <OpenIcon className={slots.arrowOpen({ class: className })} {...rest} />
      <CloseIcon className={slots.arrowClose({ class: className })} {...rest} />
    </>
  );
}
AccordionArrow.displayName = ACCORDION_ARROW_NAME;

const AccordionContent = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> & {
    className?: string;
  }
>(({ children, className, ...rest }, forwardedRef) => {
  return (
    <AccordionPrimitive.Content
      ref={forwardedRef}
      className={slots.content({ class: className })}
      {...rest}
    >
      {children}
    </AccordionPrimitive.Content>
  );
});
AccordionContent.displayName = ACCORDION_CONTENT_NAME;

export {
  Accordion as Root,
  AccordionHeader as Header,
  AccordionItem as Item,
  AccordionTrigger as Trigger,
  AccordionIcon as Icon,
  AccordionArrow as Arrow,
  AccordionContent as Content,
};
