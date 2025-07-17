import React from "react";
import { Toaster as Sonner } from "sonner";

import { useTheme } from "@/context/theme";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const ToasterRoot = ({ ...props }: ToasterProps) => {
  const { theme } = useTheme();
  return (
    <Sonner
      theme={theme || "light"}
      className="toaster group"
      closeButton
      position="bottom-right"
      richColors
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { ToasterRoot as Root };
