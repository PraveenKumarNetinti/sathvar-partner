import React from "react";
import * as LabelPrimitives from "@radix-ui/react-label";
import { RiHourglassFill } from "@remixicon/react";

import { cn } from "@/utils/cn";

import * as Button from "@/components/ui/button";
import * as Divider from "@/components/ui/divider";
import * as Input from "@/components/ui/input";
import * as Switch from "@/components/ui/switch";

export default function WorkingHours() {
  return (
    <div className="flex w-full shrink-0 flex-col items-center gap-6 px-4">
      <div className="flex w-full flex-col items-center gap-2">
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
            <RiHourglassFill className="size-6 text-text-sub-600 lg:size-8" />
          </div>
        </div>

        <div className="space-y-1 text-center">
          <div className="text-title-h6 lg:text-title-h5">Working Hours</div>
          <div className="text-paragraph-sm text-text-sub-600 lg:text-paragraph-md">
            Define the business hours for each day of the week.
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col shrink-0 rounded-20 bg-bg-white-0 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200 min-[420px]:w-[400px]">
        {[
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ].map((weekDay) => (
          <React.Fragment key={weekDay}>
            <WeekDay label={weekDay} />
            <Divider.Root />
          </React.Fragment>
        ))}
        <div className="grid grid-cols-2 gap-4 px-5 py-4">
          <Button.Root variant="neutral" mode="stroke" size="small">
            Back
          </Button.Root>
          <Button.Root variant="primary" mode="filled" size="small">
            Save & Next
          </Button.Root>
        </div>
      </div>
    </div>
  );
}

function WeekDay(props) {
  return (
    <LabelPrimitives.Root
      htmlFor={props.label}
      className="w-full cursor-pointer flex items-start gap-4 p-4"
    >
      <Switch.Root id={props.label} />
      <div className="flex-1">
        <div className="text-label-sm text-text-strong-950">{props.label}</div>
        {props.label === "Monday" && (
          <div className="mt-3 flex items-center w-full">
            <div className="flex flex-1 flex-col gap-1">
              <Input.Root className="min-w-32 flex-1">
                <Input.Wrapper>
                  <Input.Input
                    type="time"
                    defaultValue="09:30"
                    className="text-label-sm text-text-sub-600 [&::-webkit-calendar-picker-indicator]:hidden"
                  />
                </Input.Wrapper>
              </Input.Root>
            </div>
            <div className="w-6">
              <Divider.Root />
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <Input.Root className="min-w-32 flex-1">
                <Input.Wrapper>
                  <Input.Input
                    type="time"
                    defaultValue="06:00"
                    className="text-label-sm text-text-sub-600 [&::-webkit-calendar-picker-indicator]:hidden"
                  />
                </Input.Wrapper>
              </Input.Root>
            </div>
          </div>
        )}
      </div>
    </LabelPrimitives.Root>
  );
}
