import * as React from "react";
import TextareaAutosize from "react-textarea-autosize";

import { cn } from "@/utils/cn";

const CustomTextarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<typeof TextareaAutosize>
>(({ className, ...rest }, forwardedRef) => {
  return (
    <div
      className={cn(
        "relative w-full pb-3.5",
        "before:bg-stroke-soft-200 before:absolute before:bottom-0 before:left-0 before:h-px before:w-full",
        "after:bg-primary-base after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-200 after:ease-out focus-within:after:w-full",
      )}
    >
      <TextareaAutosize
        ref={forwardedRef}
        className={cn(
          "text-label-lg text-text-strong-950 min-h-6 w-full resize-none bg-transparent bg-none",
          "caret-primary-base",
          "placeholder:text-text-soft-400",
          "focus:outline-none",
          className,
        )}
        {...rest}
      />
    </div>
  );
});
CustomTextarea.displayName = "CustomTextarea";

export { CustomTextarea };
