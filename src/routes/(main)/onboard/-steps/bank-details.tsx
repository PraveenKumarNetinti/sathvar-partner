import { RiBankFill } from "@remixicon/react";

import { cn } from "@/utils/cn";

import * as Button from "@/components/ui/button";
import * as Divider from "@/components/ui/divider";
import * as Input from "@/components/ui/input";
import * as Label from "@/components/ui/label";
import * as Select from "@/components/ui/select";

export default function BankDetails() {
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
            <RiBankFill className="size-6 text-text-sub-600 lg:size-8" />
          </div>
        </div>

        <div className="space-y-1 text-center">
          <div className="text-title-h6 lg:text-title-h5">Bank Details</div>
          <div className="text-paragraph-sm text-text-sub-600 lg:text-paragraph-md">
            Store and update bank account details.
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="w-full flex flex-col shrink-0 rounded-20 bg-bg-white-0 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200 min-[420px]:w-[400px]">
        <div className="px-5 py-4 flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <Label.Root htmlFor="account_number">
              Account Number
              <Label.Asterisk />
              {/* <Label.Sub>(Optional)</Label.Sub> */}
              {/* <IconInfoCustom className="text-text-disabled-300 size-5" /> */}
            </Label.Root>

            <Input.Root>
              <Input.Wrapper>
                <Input.Input
                  readOnly
                  defaultValue="684743516876854"
                  id="account_number"
                  name="account_number"
                />
              </Input.Wrapper>
            </Input.Root>
          </div>

          <div className="flex flex-col gap-1">
            <Label.Root htmlFor="iban">
              IBAN
              <Label.Asterisk />
            </Label.Root>

            <Input.Root>
              <Input.Wrapper>
                <Input.Input id="iban" name="iban" />
              </Input.Wrapper>
            </Input.Root>
          </div>

          <div className="flex flex-col gap-1">
            <Label.Root htmlFor="ifsc_code">
              IFSC Code
              <Label.Asterisk />
            </Label.Root>

            <Input.Root>
              <Input.Wrapper>
                <Input.Input id="ifsc_code" name="ifsc_code" />
              </Input.Wrapper>
            </Input.Root>
          </div>

          <div className="flex flex-col gap-1">
            <Label.Root htmlFor="swift_code">
              SWIFT Code
              <Label.Asterisk />
            </Label.Root>

            <Input.Root>
              <Input.Wrapper>
                <Input.Input id="swift_code" name="swift_code" />
              </Input.Wrapper>
            </Input.Root>
          </div>

          <div className="flex flex-col gap-1">
            <Label.Root htmlFor="bank_name">
              Bank Name
              <Label.Asterisk />
            </Label.Root>

            <Input.Root>
              <Input.Wrapper>
                <Input.Input id="bank_name" name="bank_name" />
              </Input.Wrapper>
            </Input.Root>
          </div>

          <div className="flex flex-col gap-1">
            <Label.Root htmlFor="currency">
              Currency
              <Label.Asterisk />
            </Label.Root>

            <Select.Root>
              <Select.Trigger>
                <Select.Value placeholder="Select currency" />
              </Select.Trigger>
              <Select.Content>
                <Select.Item value="inr">INR - Indian Ruppees</Select.Item>
              </Select.Content>
            </Select.Root>
          </div>

          <div className="flex flex-col gap-1">
            <Label.Root htmlFor="account_holder_name">
              Account Holder Name
              <Label.Asterisk />
            </Label.Root>

            <Input.Root>
              <Input.Wrapper>
                <Input.Input
                  id="account_holder_name"
                  name="account_holder_name"
                />
              </Input.Wrapper>
            </Input.Root>
          </div>
        </div>
        <Divider.Root />
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
