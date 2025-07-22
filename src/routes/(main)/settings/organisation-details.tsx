import { RiBuilding2Line } from "@remixicon/react";
import { createFileRoute } from "@tanstack/react-router";

import { DashedDivider } from "@/components/dashed-divider";
import Header from "@/components/header";
import * as Divider from "@/components/ui/divider";
import * as ScrollArea from "@/components/ui/scroll-area";

export const Route = createFileRoute("/(main)/settings/organisation-details")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Header
        icon={
          <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-bg-white-0 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200">
            <RiBuilding2Line className="size-6 text-text-sub-600" />
          </div>
        }
        title="Organisation Details"
        description="View and update your organization's legal and business information."
      />

      <div className="px-4 lg:px-8">
        <Divider.Root />
      </div>

      <OrganisationDetailsForm />
    </>
  );
}

const DETAILS = [
  {
    id: "organization_name",
    label: "Organization Name",
    justification: "The legal name of your organization.",
    placeholder: "e.g., Acme Corporation",
  },
  {
    id: "address",
    label: "Address",
    justification: "Your organization’s primary address.",
    placeholder: "e.g., 123 Main Street, Suite 456",
  },
  {
    id: "country",
    label: "Country",
    justification: "The country where your organization is registered.",
    placeholder: "Select your country",
  },
  {
    id: "state",
    label: "State / Province",
    justification: "The state or province where your office is located.",
    placeholder: "e.g., California",
  },
  {
    id: "district_or_city",
    label: "District / City",
    justification: "The city or district of your organization.",
    placeholder: "e.g., San Francisco",
  },
  {
    id: "pincode",
    label: "Pincode",
    justification: "Postal code for your organization’s address.",
    placeholder: "e.g., 94105",
  },
  {
    id: "business_type",
    label: "Business Type",
    justification: "The nature of your business activities.",
    placeholder: "e.g., Manufacturing, IT Services",
  },
  {
    id: "registration_number",
    label: "Registration Number",
    justification: "The official business registration number.",
    placeholder: "e.g., CIN/LLPIN",
  },
  {
    id: "date_of_registration",
    label: "Date of Registration",
    justification: "When your organization was officially registered.",
    placeholder: "Select a date",
  },
  {
    id: "website",
    label: "Website",
    justification: "Your organization’s official website.",
    placeholder: "e.g., https://example.com",
  },
  {
    id: "no_of_years_of_operations",
    label: "Years in Operation",
    justification: "Total active years your organization has operated.",
    placeholder: "e.g., 5",
  },
  {
    id: "total_no_of_employees",
    label: "Total Number of Employees",
    justification: "Number of employees currently working.",
    placeholder: "e.g., 50",
  },
  {
    id: "category",
    label: "Category",
    justification: "Broad category of your organization.",
    placeholder: "e.g., Private Limited",
  },
  {
    id: "specialisation",
    label: "Specialisation",
    justification: "Your organization’s area of expertise.",
    placeholder: "e.g., Cloud Software Solutions",
  },
  {
    id: "income_tax_or_corporate_tax_id",
    label: "Income Tax / Corporate Tax ID",
    justification: "Your organization’s tax identification number.",
    placeholder: "e.g., PAN / EIN",
  },
  {
    id: "sales_tax_gst_or_vat_number",
    label: "Sales Tax / GST / VAT Number",
    justification: "Your indirect tax registration number.",
    placeholder: "e.g., GSTIN / VAT ID",
  },
];

const dummyOrganizationData: Record<string, any> = {
  organization_name: "Acme Technologies Pvt Ltd",
  address: "1234 Innovation Park, Sector 21",
  country: "India",
  state: "Karnataka",
  district_or_city: "Bengaluru",
  pincode: "560102",
  business_type: "Software Development",
  registration_number: "U72900KA2015PTC123456",
  date_of_registration: "2015-08-21",
  website: "https://acmetech.in",
  no_of_years_of_operations: 8,
  total_no_of_employees: 120,
  category: "Private Limited",
  specialisation: "SaaS Products & Cloud Solutions",
  income_tax_or_corporate_tax_id: "AAJCA1234M",
  sales_tax_gst_or_vat_number: "29AAJCA1234M1Z5",
};

export function OrganisationDetailsForm() {
  return (
    <ScrollArea.Root
      type="scroll"
      className="h-[calc(100vh-88px)] overflow-hidden"
    >
      <ScrollArea.Viewport className="h-full w-full">
        <div className="flex-1 flex w-full flex-col gap-5 px-4 py-6 lg:px-8">
          {DETAILS.map((row, rowIndex) => (
            <>
              <FormRow label={row.label} description={row.justification}>
                {dummyOrganizationData[row.id]}
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
