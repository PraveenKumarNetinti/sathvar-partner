import * as React from "react";
import { Slottable } from "@radix-ui/react-slot";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import mergeRefs from "merge-refs";

import { cnExt } from "@/utils/cn";

import { useTabObserver } from "@/hooks/use-tab-observer";

const SegmentedControlRoot = TabsPrimitive.Root;
SegmentedControlRoot.displayName = "SegmentedControlRoot";

const SegmentedControlList = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & {
    floatingBgClassName?: string;
    className?: string;
  }
>(({ children, className, floatingBgClassName, ...rest }, forwardedRef) => {
  const [lineStyle, setLineStyle] = React.useState({ width: 0, left: 0 });

  const { mounted, listRef } = useTabObserver({
    onActiveTabChange: (_, activeTab) => {
      const { offsetWidth: width, offsetLeft: left } = activeTab;
      setLineStyle({ width, left });
    },
  });

  return (
    <TabsPrimitive.List
      ref={mergeRefs(forwardedRef, listRef)}
      className={cnExt(
        "rounded-10 bg-bg-weak-50 relative isolate grid auto-cols-fr grid-flow-col gap-1 p-1",
        className,
      )}
      {...rest}
    >
      <Slottable>{children}</Slottable>

      {/* floating bg */}
      <div
        className={cnExt(
          "bg-bg-white-0 shadow-toggle-switch absolute inset-y-1 left-0 -z-10 rounded-md transition-transform duration-300",
          {
            hidden: !mounted,
          },
          floatingBgClassName,
        )}
        style={{
          transform: `translate3d(${lineStyle.left}px, 0, 0)`,
          width: `${lineStyle.width}px`,
          transitionTimingFunction: "cubic-bezier(0.65, 0, 0.35, 1)",
        }}
        aria-hidden="true"
      />
    </TabsPrimitive.List>
  );
});
SegmentedControlList.displayName = "SegmentedControlList";

const SegmentedControlTrigger = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
    className?: string;
  }
>(({ className, ...rest }, forwardedRef) => {
  return (
    <TabsPrimitive.Trigger
      ref={forwardedRef}
      className={cnExt(
        // base
        "peer",
        "text-label-sm text-text-soft-400 relative z-10 h-7 rounded-md px-1 whitespace-nowrap outline-hidden",
        "flex items-center justify-center gap-1.5",
        "transition duration-300 ease-out",
        // focus
        "focus:outline-hidden",
        // active
        "data-[state=active]:text-text-strong-950",
        className,
      )}
      {...rest}
    />
  );
});
SegmentedControlTrigger.displayName = "SegmentedControlTrigger";

const SegmentedControlContent = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ ...rest }, forwardedRef) => {
  return <TabsPrimitive.Content ref={forwardedRef} {...rest} />;
});
SegmentedControlContent.displayName = "SegmentedControlContent";

export {
  SegmentedControlRoot as Root,
  SegmentedControlList as List,
  SegmentedControlTrigger as Trigger,
  SegmentedControlContent as Content,
};
