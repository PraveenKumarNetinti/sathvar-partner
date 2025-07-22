import * as TabsPrimitive from "@radix-ui/react-tabs";
import { RiCloseLine, RiHeadphoneLine } from "@remixicon/react";
import { createFileRoute } from "@tanstack/react-router";
import { useStore } from "@tanstack/react-store";

import FlowSidebar from "./-sidebar";
import Attachments from "./-steps/attachments";
import BankDetails from "./-steps/bank-details";
import ContactDetails from "./-steps/contact-details";
import Holidays from "./-steps/holidays";
import OperationalDetails from "./-steps/operational-details";
import OrganisationDetails from "./-steps/organisation-details";
import WorkingHours from "./-steps/working-hours";
import { activeStepStore } from "./-store";

import { cn } from "@/utils/cn";

import * as Button from "@/components/ui/button";
import * as ScrollArea from "@/components/ui/scroll-area";

export const Route = createFileRoute("/(main)/onboard")({
  component: RouteComponent,
});

type StepComponents = {
  [key: number]: React.ComponentType;
};

const stepComponents: StepComponents = {
  0: OrganisationDetails,
  1: ContactDetails,
  2: OperationalDetails,
  3: BankDetails,
  4: WorkingHours,
  5: Holidays,
  6: Attachments,
};

function RouteComponent() {
  const activeStep = useStore(activeStepStore, (state) => state);

  return (
    <div className="flex min-h-screen max-h-screen overflow-hidden flex-col lg:grid lg:grid-cols-[auto_minmax(0,1fr)] lg:items-start">
      <FlowSidebar />
      <div className="relative isolate mx-auto flex w-full max-w-[1392px] flex-1 flex-col">
        <img
          src="/images/onboarding-pattern.svg"
          alt=""
          width={964}
          height={456}
          className="pointer-events-none absolute left-1/2 top-0 -z-10 hidden -translate-x-1/2 lg:block"
        />

        <Button.Root
          variant="neutral"
          mode="ghost"
          size="xsmall"
          className="fixed right-8 top-6 hidden lg:flex"
        >
          <Button.Icon as={RiCloseLine} />
        </Button.Root>

        <ScrollArea.Root type="scroll" className="h-screen overflow-hidden">
          <ScrollArea.Viewport className="w-full h-full">
            <TabsPrimitive.Root
              value={`${activeStep}`}
              className="flex w-full justify-center py-12"
            >
              {Object.values(stepComponents).map((Step, i) => (
                <TabsPrimitive.Content
                  key={i}
                  value={`${i}`}
                  className={cn(
                    "w-full outline-none focus:outline-none min-[390px]:w-max",
                    // active
                    "data-[state=active]:duration-500 data-[state=active]:ease-out data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:slide-in-from-bottom-3",
                  )}
                >
                  <Step key={i} />
                </TabsPrimitive.Content>
              ))}
            </TabsPrimitive.Root>
            <div className="mx-auto flex w-full max-w-md flex-col gap-3 p-4 lg:hidden">
              <div className="flex flex-col gap-4 text-center">
                <div className="text-paragraph-sm text-text-sub-600">
                  Having trouble with registration?
                </div>
                <Button.Root variant="neutral" mode="stroke">
                  <Button.Icon as={RiHeadphoneLine} />
                  Contact
                </Button.Root>
              </div>

              <div className="text-center text-paragraph-xs text-text-soft-400">
                © 2023 Sathvar
              </div>
            </div>
          </ScrollArea.Viewport>
          <ScrollArea.ScrollbarVertical />
        </ScrollArea.Root>
      </div>
    </div>
  );
}
