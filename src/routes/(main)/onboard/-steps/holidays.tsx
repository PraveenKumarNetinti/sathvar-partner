import {
  RiAddLine,
  RiCalendar2Fill,
  RiDeleteBin6Line,
  RiPencilFill,
} from "@remixicon/react";
import { format } from "date-fns";

import { cn } from "@/utils/cn";

import * as Button from "@/components/ui/button";
import * as Input from "@/components/ui/input";

export default function Holidays() {
  console.log(
    new Date(2025, 0, 13),
    format(new Date(2025, 0, 13), "yyyy-MM-dd"),
  );
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
            <RiCalendar2Fill className="size-6 text-text-sub-600 lg:size-8" />
          </div>
        </div>

        <div className="space-y-1 text-center">
          <div className="text-title-h6 lg:text-title-h5">Holidays</div>
          <div className="text-paragraph-sm text-text-sub-600 lg:text-paragraph-md">
            Manage official holidays and breaks.
          </div>
        </div>
      </div>

      {/* Content */}

      <div className="w-full flex justify-end">
        <Button.Root variant="neutral" mode="stroke">
          <Button.Icon as={RiAddLine} />
          Add New
        </Button.Root>
      </div>

      {/* <div className="w-full">
        <div className="w-full flex gap-4 justify-start">
          <div className="flex flex-col gap-1">
            <Label.Root htmlFor="password2">Occassion</Label.Root>
            <Input.Root>
              <Input.Wrapper>
                <Input.Input />
              </Input.Wrapper>
            </Input.Root>
          </div>
          <div className="flex flex-col gap-1">
            <Label.Root htmlFor="password2">Date</Label.Root>
            <Input.Root>
              <Input.Wrapper>
                <Input.Input
                  type="date"
                  className="text-label-sm text-text-sub-600 [&::-webkit-calendar-picker-indicator]:hidden"
                />
              </Input.Wrapper>
            </Input.Root>
          </div>
        </div>
      </div> */}

      <div className="w-full flex flex-col shrink-0 rounded-20 bg-bg-white-0 overflow-hidden shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200 min-[420px]:w-[460px]">
        <table>
          <thead className="bg-bg-weak-50">
            <tr>
              <th className="w-8 text-xs text-text-soft-400 px-4 py-3 border-r border-stroke-soft-200 uppercase">
                S.No
              </th>
              <th className="text-xs text-text-soft-400 text-left px-4 py-3 border-r border-stroke-soft-200 uppercase">
                Occassion / Festival
              </th>
              <th className="w-36 text-xs text-text-soft-400 text-left px-4 py-3 uppercase">
                Date
              </th>
              <th className="w-12 text-xs text-text-soft-400 text-left px-4 py-3 uppercase"></th>
            </tr>
          </thead>
          <tbody>
            {holidays.map((holiday, sno) => (
              <tr
                key={sno}
                className="h-10 border-b border-stroke-soft-200 last:border-none"
              >
                <td className="text-sm text-text-sub-600 px-4 border-r border-stroke-soft-200 text-center">
                  {sno + 1}
                </td>
                {/* <td className="px-4 py-3 text-sm text-text-sub-600 border-r border-stroke-soft-200">
                  {holiday.occasion}
                </td> */}
                <td className="border-r border-stroke-soft-200">
                  <div className="group relative flex items-center">
                    <Input.Input
                      className="text-text-sub-600 focus:text-text-strong-950 ring-1 ring-inset ring-transparent focus:ring-primary-base px-4"
                      id={sno + ""}
                      name={sno + ""}
                      defaultValue={holiday.occasion}
                    />
                    <RiPencilFill className="absolute right-4 size-5 text-text-soft-400 hidden group-has-hover:flex group-has-focus:hidden" />
                  </div>
                </td>
                <td className="border-r border-stroke-soft-200">
                  <div className="group relative flex items-center">
                    <Input.Input
                      className="text-text-sub-600 focus:text-text-strong-950 ring-1 ring-inset ring-transparent focus:ring-primary-base px-4 [&::-webkit-calendar-picker-indicator]:hidden"
                      id={sno + ""}
                      name={sno + ""}
                      defaultValue={format(holiday.from_date, "yyyy-MM-dd")}
                      // value="2025-06-04"
                      type="date"
                    />
                    <RiPencilFill className="absolute right-4 size-5 text-text-soft-400 hidden group-has-hover:flex group-has-focus:hidden" />
                  </div>
                </td>
                {/* <td className="px-4 text-sm text-text-sub-600 border-r border-stroke-soft-200">
                  {holiday.to_date
                    ? `${format(holiday.from_date, "MMM dd")} - ${format(holiday.to_date, "MMM dd")}`
                    : format(holiday.from_date, "MMM dd")}
                </td> */}
                <td className="px-4">
                  <div className="flex items-center justify-between">
                    <Button.Root variant="neutral" mode="ghost" size="xsmall">
                      <Button.Icon as={RiDeleteBin6Line} />
                    </Button.Root>
                    {/* <Button.Root variant="neutral" mode="ghost" size="xsmall">
                      <Button.Icon as={RiAddLine} />
                    </Button.Root> */}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="w-full flex gap-4">
        <Button.Root variant="neutral" mode="stroke" className="flex-1">
          Back
        </Button.Root>
        <Button.Root className="flex-1">Save & Next</Button.Root>
      </div>
    </div>
  );
}

const holidays = [
  {
    from_date: new Date(2025, 0, 13),
    to_date: null,
    occasion: "Bhogi",
  },
  {
    from_date: new Date(2025, 0, 14),
    to_date: null,
    occasion: "Sankranti",
  },
  {
    from_date: new Date(2025, 1, 26),
    to_date: null,
    occasion: "Maha Shivaratri",
  },
  {
    from_date: new Date(2025, 4, 1),
    to_date: null,
    occasion: "May Day",
  },
  {
    from_date: new Date(2025, 5, 7),
    to_date: null,
    occasion: "Bakrid",
  },
  {
    from_date: new Date(2025, 7, 15),
    to_date: null,
    occasion: "Independence Day",
  },
  {
    from_date: new Date(2025, 7, 27),
    to_date: null,
    occasion: "Vinayaka Chaturthi",
  },
  // {
  //   from_date: new Date(2025, 9, 1),
  //   to_date: null,
  //   occasion: "Audha Puja",
  // },
  {
    from_date: new Date(2025, 9, 2),
    to_date: new Date(2025, 9, 3),
    occasion: "Dussehra",
  },
  {
    from_date: new Date(2025, 9, 20),
    to_date: null,
    occasion: "Diwali",
  },
  {
    from_date: new Date(2025, 11, 25),
    to_date: null,
    occasion: "Christmas",
  },
];
