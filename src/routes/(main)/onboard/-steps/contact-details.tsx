import { RiIdCardFill } from "@remixicon/react";

import { cn } from "@/utils/cn";

export default function ContactDetails() {
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
            <RiIdCardFill className="size-6 text-text-sub-600 lg:size-8" />
          </div>
        </div>

        <div className="space-y-1 text-center">
          <div className="text-title-h6 lg:text-title-h5">Contact Details</div>
          <div className="text-paragraph-sm text-text-sub-600 lg:text-paragraph-md">
            Manage your organization's contact information.
          </div>
        </div>
      </div>

      {/* Content */}
    </div>
  );
}
