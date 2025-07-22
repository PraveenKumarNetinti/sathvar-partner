import * as LabelPrimitives from "@radix-ui/react-label";
import { RiCalendarScheduleLine, RiInformationLine } from "@remixicon/react";
import { createFileRoute } from "@tanstack/react-router";

import Header from "@/components/header";
import * as Alert from "@/components/ui/alert";
import * as Divider from "@/components/ui/divider";
import * as Input from "@/components/ui/input";
import * as Label from "@/components/ui/label";
import * as Switch from "@/components/ui/switch";

export const Route = createFileRoute("/(main)/settings/working-hours")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Header
        icon={
          <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-bg-white-0 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200">
            <RiCalendarScheduleLine className="size-6 text-text-sub-600" />
          </div>
        }
        title="Working Hours"
        description="Define the business hours for each day of the week."
      >
        {/* <Button.Root className="rounded-xl">
          <Button.Icon as={RiAddLine} />
          New Holiday
        </Button.Root> */}
      </Header>
      <div className="px-4 lg:px-8">
        <Divider.Root />
      </div>

      {/* TODO: ADD SCROLLBAR CONTAINER */}
      <div className="w-full px-4 py-6 space-y-6 lg:px-8">
        <Alert.Root
          className="flex gap-3 p-3.5 pb-4"
          variant="lighter"
          status="feature"
          size="large"
        >
          <Alert.Icon as={RiInformationLine} />
          <div className="flex flex-col gap-1">
            {/* <div className="text-label-sm text-text-strong-950">
              Citation Requirements
            </div> */}
            <div className="text-paragraph-sm text-text-strong-950 opacity-[0.72]">
              Use the toggle to mark days your organization is open. Time
              entries are only required for active days.
            </div>
          </div>
        </Alert.Root>
        <div className="space-y-6">
          {[
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ].map((weekDay, index) => (
            <>
              <WeekDay label={weekDay} />
              {index !== 6 && <Divider.Root />}
            </>
          ))}
        </div>
      </div>
    </>
  );
}

function WeekDay(props) {
  return (
    <div className="flex items-start gap-2">
      <Switch.Root id={props.label} />
      <LabelPrimitives.Root
        htmlFor={props.label}
        className="cursor-pointer flex-1"
      >
        <div className="text-label-sm text-text-strong-950">{props.label}</div>
        <div className="mt-6 flex items-center w-full">
          <div className="flex flex-col gap-1">
            <Label.Root htmlFor="email" className="text-text-sub-600">
              Start Time
            </Label.Root>
            <Input.Root className="min-w-32">
              <Input.Wrapper>
                <Input.Input
                  type="time"
                  defaultValue="09:30"
                  className="text-label-sm text-text-sub-600 [&::-webkit-calendar-picker-indicator]:hidden"
                />
              </Input.Wrapper>
            </Input.Root>
          </div>
          <div className="w-6 mt-6">
            <Divider.Root />
          </div>
          <div className="flex flex-col gap-1">
            <Label.Root htmlFor="email" className="text-text-sub-600">
              End Time
            </Label.Root>
            <Input.Root className="min-w-32">
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
      </LabelPrimitives.Root>
    </div>
  );
}
