import { RiBankLine } from "@remixicon/react";
import { createFileRoute } from "@tanstack/react-router";

import { DashedDivider } from "@/components/dashed-divider";
import Header from "@/components/header";
import * as Divider from "@/components/ui/divider";
import * as ScrollArea from "@/components/ui/scroll-area";

export const Route = createFileRoute("/(main)/settings/bank-details")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Header
        icon={
          <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-bg-white-0 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200">
            <RiBankLine className="size-6 text-text-sub-600" />
          </div>
        }
        title="Bank Details"
        description="Store and update bank account details."
      />

      <div className="px-4 lg:px-8">
        <Divider.Root />
      </div>

      <BankDetails />
    </>
  );
}

const DETAILS = [
  {
    id: "account_number",
    label: "Account Number",
    justification: "Your organization's primary bank account number.",
  },
  {
    id: "iban",
    label: "IBAN",
    justification:
      "International Bank Account Number for cross-border transactions.",
  },
  {
    id: "ifsc",
    label: "IFSC Code",
    justification: "Code identifying your bank branch for Indian payments.",
  },
  {
    id: "swift_code",
    label: "SWIFT Code",
    justification:
      "International code for sending or receiving global payments.",
  },
  {
    id: "bank_name",
    label: "Bank Name",
    justification: "Name of the bank where your account is held.",
  },
  {
    id: "currency",
    label: "Currency",
    justification: "Currency in which the account operates.",
  },
  {
    id: "account_name",
    label: "Account Holder Name",
    justification: "Name under which the bank account is registered.",
  },
];

const dummyBankData: Record<string, any> = {
  account_number: "123456789012",
  iban: "IN43HDFC00001234567890",
  ifsc: "HDFC0001234",
  swift_code: "HDFCINBB",
  bank_name: "HDFC Bank Ltd",
  currency: "INR",
  account_name: "Acme Technologies Pvt Ltd",
};

function BankDetails() {
  return (
    <ScrollArea.Root
      type="auto"
      className="h-[calc(100vh-88px)] overflow-hidden"
    >
      <ScrollArea.Viewport className="h-full w-full">
        <div className="flex-1 flex w-full flex-col gap-5 px-4 py-6 lg:px-8">
          {DETAILS.map((row, rowIndex) => (
            <>
              <FormRow label={row.label} description={row.justification}>
                {dummyBankData[row.id]}
              </FormRow>

              {rowIndex !== DETAILS.length - 1 && <DashedDivider />}
            </>
          ))}
        </div>
      </ScrollArea.Viewport>
      <ScrollArea.ScrollbarVertical />
    </ScrollArea.Root>
  );
}

function FormRow({
  label,
  description,
  children,
}: {
  label: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="grid items-center gap-6 md:grid-cols-[minmax(0,26fr)_minmax(0,37fr)]">
        <div>
          <div className="text-label-sm text-text-strong-950">{label}</div>
          {description && (
            <div className="mt-1 text-paragraph-xs text-text-sub-600">
              {description}
            </div>
          )}
        </div>
        <span className="text-paragraph-sm text-text-strong-950">
          {children}
        </span>
      </div>
    </>
  );
}
