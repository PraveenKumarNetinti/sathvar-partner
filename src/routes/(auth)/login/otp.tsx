import React from "react";
import { RiMailCheckLine } from "@remixicon/react";
import { createFileRoute } from "@tanstack/react-router";

import { cn } from "@/utils/cn";

import * as DigitInput from "@/components/ui/digit-input";
import * as Divider from "@/components/ui/divider";
import * as FancyButton from "@/components/ui/fancy-button";
import * as LinkButton from "@/components/ui/link-button";

export const Route = createFileRoute("/(auth)/login/otp")({
  component: RouteComponent,
});

function RouteComponent() {
  const [digitInputValue, setDigitInputValue] = React.useState("");

  return (
    <div className="w-full max-w-[472px] px-4">
      <div className="flex w-full flex-col gap-6 rounded-20 bg-bg-white-0 p-5 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200 md:p-8">
        <div className="flex flex-col items-center gap-2">
          {/* icon */}
          <div
            className={cn(
              "relative flex size-[68px] shrink-0 items-center justify-center rounded-full backdrop-blur-xl lg:size-24",
              // bg
              "before:absolute before:inset-0 before:rounded-full",
              "before:bg-gradient-to-b before:from-neutral-500 before:to-transparent before:opacity-10",
            )}
          >
            <div className="relative z-10 flex size-12 items-center justify-center rounded-full bg-bg-white-0 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200 lg:size-16">
              <RiMailCheckLine className="size-6 text-text-sub-600 lg:size-8" />
            </div>
          </div>

          <div className="space-y-1 text-center">
            <div className="text-title-h6 lg:text-title-h5">
              Enter Verification Code
            </div>
            <div className="text-paragraph-sm text-text-sub-600 lg:text-paragraph-md">
              We've sent a code to{" "}
              <span className="font-medium">praveen.n@ddindia.biz</span>
            </div>
          </div>
        </div>

        <Divider.Root />

        <div className="flex flex-col gap-3">
          <DigitInput.Root
            numInputs={6}
            onChange={(value) => setDigitInputValue(value)}
            value={digitInputValue}
          />
        </div>

        <FancyButton.Root variant="primary" size="medium">
          Verify & Continue
        </FancyButton.Root>

        <div className="flex flex-col items-center gap-1 text-center text-paragraph-sm text-text-sub-600">
          Experiencing issues receiving the code?
          <LinkButton.Root variant="black" size="medium" underline>
            Resend code
          </LinkButton.Root>
        </div>
      </div>
    </div>
  );
}
