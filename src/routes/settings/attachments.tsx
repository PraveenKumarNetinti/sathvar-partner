import React from "react";
import {
  RiCheckboxCircleFill,
  RiDownload2Line,
  RiFileTextLine,
} from "@remixicon/react";
import { createFileRoute } from "@tanstack/react-router";

import Header from "@/components/header";
import * as CompactButton from "@/components/ui/compact-button";
import * as Divider from "@/components/ui/divider";
import * as FileFormatIcon from "@/components/ui/file-format-icon";
import * as ScrollArea from "@/components/ui/scroll-area";
import * as Tooltip from "@/components/ui/tooltip";

export const Route = createFileRoute("/settings/attachments")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Header
        icon={
          <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-bg-white-0 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200">
            <RiFileTextLine className="size-6 text-text-sub-600" />
          </div>
        }
        title="Attachments"
        description="Upload and view important documents."
      />

      <div className="px-4 lg:px-8">
        <Divider.Root />
      </div>

      <ScrollArea.Root
        type="scroll"
        className="h-[calc(100vh-88px)] overflow-hidden"
      >
        <ScrollArea.Viewport className="h-full w-full">
          <AttachmentCards />
        </ScrollArea.Viewport>
        <ScrollArea.ScrollbarVertical />
      </ScrollArea.Root>
    </>
  );
}

const modules = [
  {
    id: "company_profile",
    title: "Company Profile",
    description: "Upload a brief PDF about your organization's background.",
    info: "Include details like services offered, mission, and overview.",
    type: "PDF",
    is_mandatory: true,
    file: {
      name: "company_profile.pdf",
      type: "application/pdf",
      size: "450 KB",
    },
  },
  {
    id: "certificate_of_registration",
    title: "Certificate of Registration",
    description: "Upload your legal business registration certificate (PDF).",
    info: "This document validates your organization's official status.",
    type: "PDF",
    is_mandatory: true,
    file: {
      name: "registration_certificate.pdf",
      type: "application/pdf",
      size: "320 KB",
    },
  },
  {
    id: "income_tax_or_corporate_tax_certificate",
    title: "Income Tax/Corporate Tax Certificate",
    description: "Provide your organization's tax registration certificate.",
    info: "E.g., PAN certificate (India) or EIN (US).",
    type: "PDF",
    is_mandatory: true,
    file: {
      name: "tax_certificate.pdf",
      type: "application/pdf",
      size: "275 KB",
    },
  },
  {
    id: "sales_tax_gst_or_vat",
    title: "Sales Tax/GST/VAT",
    description:
      "Upload your indirect tax registration certificate, if applicable.",
    info: "Required if your business is registered for GST/VAT.",
    type: "PDF",
    is_mandatory: false,
    file: {
      name: "gst_certificate.pdf",
      type: "application/pdf",
      size: "190 KB",
    },
  },
  {
    id: "certifications",
    title: "Certification, if any",
    description: "Upload any relevant business certifications.",
    info: "E.g., ISO, MSME, or industry-specific licenses.",
    type: "PDF",
    is_mandatory: false,
  },
  {
    id: "cancelled_cheques",
    title: "Cancelled Cheque/Account Statement",
    description: "Provide a cancelled cheque or recent account statement.",
    info: "Used to verify your bank account details.",
    type: "PDF",
    is_mandatory: false,
  },
  {
    id: "other_attachment",
    title: "Other Attachment",
    description: "Upload any additional supporting documents.",
    info: "Optional — only if you have something extra to submit.",
    type: "PDF",
    is_mandatory: false,
  },
];

function IconInfoCustom(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={12}
      height={12}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM7.07121 9.08024L7.16702 8.68857C7.11743 8.71186 7.03747 8.73848 6.92783 8.76877C6.81789 8.79907 6.71894 8.8145 6.63198 8.8145C6.44675 8.8145 6.31634 8.78414 6.24063 8.72311C6.16546 8.66208 6.12798 8.54728 6.12798 8.37914C6.12798 8.31252 6.13928 8.21321 6.16294 8.08323C6.18587 7.95238 6.21223 7.83611 6.24155 7.7344L6.59922 6.46808C6.63425 6.35187 6.65828 6.2241 6.67119 6.08466C6.6844 5.94552 6.69055 5.84817 6.69055 5.79292C6.69055 5.52589 6.59695 5.3092 6.40969 5.14204C6.22243 4.975 5.95577 4.89148 5.6102 4.89148C5.41791 4.89148 5.21461 4.92565 4.99945 4.99393C4.78429 5.06202 4.55936 5.14406 4.32404 5.23987L4.22798 5.63184C4.29811 5.60591 4.38163 5.57801 4.47934 5.54912C4.57663 5.52036 4.67207 5.50549 4.76493 5.50549C4.95452 5.50549 5.08223 5.53782 5.14916 5.60148C5.21608 5.66534 5.2497 5.77891 5.2497 5.94128C5.2497 6.03107 5.23907 6.13081 5.217 6.23922C5.19525 6.34831 5.16809 6.46366 5.13613 6.5854L4.77691 7.85682C4.74496 7.99043 4.7216 8.10996 4.70691 8.21609C4.69235 8.32211 4.68534 8.42615 4.68534 8.52731C4.68534 8.78862 4.78189 9.00403 4.97493 9.17402C5.16796 9.34333 5.43862 9.42857 5.78658 9.42857C6.01317 9.42857 6.21205 9.39895 6.3832 9.3394C6.55418 9.28003 6.78378 9.19368 7.07121 9.08024ZM7.00748 3.9362C7.17458 3.78126 7.25773 3.59284 7.25773 3.37221C7.25773 3.15207 7.1747 2.96328 7.00748 2.80638C6.84081 2.64991 6.63991 2.57143 6.40502 2.57143C6.1694 2.57143 5.9677 2.64972 5.79943 2.80638C5.63116 2.96328 5.54684 3.15201 5.54684 3.37221C5.54684 3.59284 5.63116 3.7812 5.79943 3.9362C5.968 4.09168 6.16934 4.16948 6.40502 4.16948C6.63997 4.16948 6.84081 4.09168 7.00748 3.9362Z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconCircleDashed(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      // className="lucide lucide-circle-dashed-icon lucide-circle-dashed"
      {...props}
    >
      <path d="M10.1 2.182a10 10 0 0 1 3.8 0" />
      <path d="M13.9 21.818a10 10 0 0 1-3.8 0" />
      <path d="M17.609 3.721a10 10 0 0 1 2.69 2.7" />
      <path d="M2.182 13.9a10 10 0 0 1 0-3.8" />
      <path d="M20.279 17.609a10 10 0 0 1-2.7 2.69" />
      <path d="M21.818 10.1a10 10 0 0 1 0 3.8" />
      <path d="M3.721 6.391a10 10 0 0 1 2.7-2.69" />
      <path d="M6.391 20.279a10 10 0 0 1-2.69-2.7" />
    </svg>
  );
}

function AttachmentCards() {
  return (
    <div className="flex flex-col gap-3 w-full px-4 py-6 lg:px-8">
      {modules.map((module) => (
        <label
          key={module.id}
          htmlFor={module.id}
          className="group max-w-[480px] block cursor-pointer rounded-[14px] bg-bg-white-0 p-4 shadow-regular-xs ring-1 ring-stroke-soft-200 transition-all duration-200 hover:bg-bg-weak-50 hover:shadow-none hover:ring-transparent"
        >
          <div className="flex items-start gap-3">
            {module.file ? (
              <RiCheckboxCircleFill className="size-5 text-success-base" />
            ) : (
              <IconCircleDashed className="size-4 text-faded-base mt-0.5" />
            )}

            <div className="w-full">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <div className="text-label-sm text-text-strong-950">
                        {module.title}
                      </div>
                      <Tooltip.Root>
                        <Tooltip.Trigger>
                          {/* <Button.Root
                            variant="neutral"
                            mode="stroke"
                            size="xsmall"
                          >
                            Hover or focus
                          </Button.Root> */}
                          <IconInfoCustom className="size-3 text-text-disabled-300" />
                        </Tooltip.Trigger>
                        <Tooltip.Content side="bottom" size="xsmall">
                          {module.info}
                        </Tooltip.Content>
                      </Tooltip.Root>
                    </div>
                  </div>
                  <div className="mt-1 text-paragraph-xs text-text-sub-600">
                    {module.description}
                  </div>

                  <div className="group-hover:shadow-custom-xs mt-3 inline-flex w-full flex-wrap gap-2 rounded-md bg-bg-weak-50 px-3 py-1.5 text-paragraph-xs text-text-sub-600 transition-colors duration-200 group-hover:bg-bg-white-0">
                    <div className="flex items-center gap-1">
                      <span className="text-paragraph-xs text-text-sub-600">
                        File Type:
                      </span>
                      <span className="text-label-xs text-text-strong-950">
                        {module.type}
                      </span>
                    </div>
                    <span className="hidden text-text-disabled-300 sm:inline">
                      ・
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-paragraph-xs text-text-sub-600">
                        Mandatory:
                      </span>
                      <span className="text-label-xs text-text-strong-950">
                        {module.is_mandatory ? "Yes" : "No"}
                      </span>
                    </div>
                    <span className="hidden text-text-disabled-300 sm:inline">
                      ・
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-paragraph-xs text-text-sub-600">
                        Uploaded
                      </span>
                      <span className="text-label-xs text-text-strong-950">
                        {module.file && module.file.name ? "Yes" : "No"}
                      </span>
                    </div>
                  </div>

                  {module.file && (
                    <div className="w-full rounded-xl bg-bg-white-0 mt-3 p-4 pl-3.5 ring-1 ring-inset ring-stroke-soft-200">
                      <div className="flex gap-3">
                        <FileFormatIcon.Root format="PDF" color="red" />
                        <div className="flex-1 space-y-1">
                          <div className="text-label-sm text-text-strong-950">
                            {module.file.name}
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="text-paragraph-xs text-text-sub-600">
                              {module.file.size}
                            </span>
                            {/* <span className="text-paragraph-xs text-text-sub-600">
                              ∙
                            </span>
                            <RiCheckboxCircleFill className="size-4 shrink-0 text-success-base" />
                            <span className="text-paragraph-xs text-text-strong-950">
                              Completed
                            </span> */}
                          </div>
                        </div>
                        <CompactButton.Root variant="ghost" size="large">
                          <CompactButton.Icon as={RiDownload2Line} />
                        </CompactButton.Root>
                      </div>
                    </div>
                  )}

                  {/* <Button.Root variant="neutral" className="mt-3 w-full">
                    <Button.Icon as={RiUpload2Line} />
                    Upload File
                  </Button.Root> */}
                </div>

                {/* <StatusBadge.Root
                  variant="light"
                  status={module.file ? "completed" : "disabled"}
                  className="bg-transparent text-label-xs"
                >
                  <StatusBadge.Dot />
                  <span className="text-label-xs">
                    {module.file ? "Uploaded" : "Not Uploaded"}
                  </span>
                </StatusBadge.Root> */}

                {/* <StatusBadge.Root
                  variant="light"
                  status={
                    module.badge.color as
                      | "failed"
                      | "pending"
                      | "completed"
                      | "disabled"
                  }
                  className={`bg-transparent text-label-xs ${
                    module.badge.color === "information"
                      ? "text-information-base"
                      : ""
                  }`}
                >
                  <StatusBadge.Dot
                    className={
                      module.badge.color === "information"
                        ? "text-information-base"
                        : ""
                    }
                  />
                  <span className="text-label-xs">{module.badge.label}</span>
                </StatusBadge.Root> */}
              </div>
            </div>
          </div>
        </label>
      ))}
    </div>
  );
}

// type AttachmentDetails = {
//   document_name: string;
//   is_mandatory: boolean;
//   file_type: string;
//   file_name?: string;
//   file_size?: string;
// };

// const data: AttachmentDetails[] = [
//   {
//     document_name: "Company Profile",
//     is_mandatory: true,
//     file_type: "PDF",
//     file_name: "company_profile.pdf",
//     file_size: "450 KB",
//   },
//   {
//     document_name: "Certificate of Registration",
//     is_mandatory: true,
//     file_type: "PDF",
//     file_name: "registration_certificate.pdf",
//     file_size: "320 KB",
//   },
//   {
//     document_name: "Income Tax/Corporate Tax Certificate",
//     is_mandatory: true,
//     file_type: "PDF",
//     file_name: "tax_certificate.pdf",
//     file_size: "275 KB",
//   },
//   {
//     document_name: "Sales Tax/GST/VAT",
//     is_mandatory: false,
//     file_type: "PDF",
//     file_name: "gst_certificate.pdf",
//     file_size: "190 KB",
//   },
//   {
//     document_name: "Certification, if any",
//     is_mandatory: false,
//     file_type: "PDF",
//     // intentionally left without file uploaded
//   },
//   {
//     document_name: "Cancelled Cheque/Account Statement",
//     is_mandatory: false,
//     file_type: "PDF",
//     file_name: "cancelled_cheque.pdf",
//     file_size: "150 KB",
//   },
//   {
//     document_name: "Other Attachment",
//     is_mandatory: false,
//     file_type: "PDF",
//     // no file uploaded yet
//   },
// ];

// const getFileIcon = (fileType: string) => {
//   fileType = fileType.toLowerCase();
//   switch (fileType) {
//     case "pdf":
//       return <FileFormatIcon.Root format="PDF" size="small" color="red" />;
//     case "doc":
//     case "docx":
//       return <FileFormatIcon.Root format="DOC" size="small" color="blue" />;
//     case "pptx":
//       return <FileFormatIcon.Root format="PPTX" size="small" color="orange" />;
//     case "xlsx":
//       return <FileFormatIcon.Root format="XLS" size="small" color="green" />;
//     default:
//       return null;
//   }
// };

// function AttachmentsTable() {
//   const columns: ColumnDef<AttachmentDetails>[] = [
//     {
//       id: "document_name",
//       accessorKey: "document_name",
//       header: () => (
//         <div className="flex w-[116px] items-center gap-0.5">
//           <span className="text-paragraph-sm text-text-sub-600">
//             Document Name
//           </span>
//         </div>
//       ),
//       cell: ({ row }) => (
//         <span className="text-paragraph-sm text-text-strong-950">
//           {row.original.document_name}
//         </span>
//       ),
//     },
//     {
//       id: "file_type",
//       accessorKey: "file_type",
//       header: () => (
//         <div className="flex w-[296px] items-center gap-0.5">
//           <span className="text-paragraph-sm text-text-sub-600">File Type</span>
//         </div>
//       ),
//       cell: ({ row }) => (
//         <span className="text-paragraph-sm text-text-sub-600">
//           {row.original.file_type}
//         </span>
//       ),
//     },
//     {
//       id: "uploaded_file",
//       accessorKey: "uploaded_file",
//       header: () => (
//         <div className="flex items-center gap-0.5">
//           <span className="text-paragraph-sm text-text-sub-600">
//             Uploaded File
//           </span>
//         </div>
//       ),
//       cell: ({ row }) => (
//         <>
//           {!row.original.file_name ? (
//             <span className="text-paragraph-sm text-text-sub-600">-</span>
//           ) : (
//             <div className="flex items-center gap-3">
//               {getFileIcon(row.original.file_type)}
//               <div className="flex flex-col gap-0.5">
//                 <span className="text-paragraph-sm text-text-strong-950">
//                   {row.original.file_name}
//                 </span>
//                 <span className="text-paragraph-xs text-text-sub-600">
//                   {row.original.file_size}
//                 </span>
//               </div>
//             </div>
//           )}
//         </>
//       ),
//     },
//   ];

//   const table = useReactTable({
//     data,
//     columns,
//     getCoreRowModel: getCoreRowModel(),
//   });

//   return (
//     <div className="w-full max-w-[1104px] px-4 py-6 lg:px-8">
//       <div className="overflow-x-auto">
//         <Table.Root>
//           <Table.Header>
//             {table.getHeaderGroups().map((headerGroup) => (
//               <Table.Row key={headerGroup.id}>
//                 {headerGroup.headers.map((header) => {
//                   const customClass = header.id === "select" ? "pr-0" : "";

//                   return (
//                     <Table.Head key={header.id} className={customClass}>
//                       {header.isPlaceholder
//                         ? null
//                         : flexRender(
//                             header.column.columnDef.header,
//                             header.getContext(),
//                           )}
//                     </Table.Head>
//                   );
//                 })}
//               </Table.Row>
//             ))}
//           </Table.Header>
//           <Table.Body>
//             {table.getRowModel().rows?.length > 0 &&
//               table.getRowModel().rows.map((row, i, arr) => (
//                 <React.Fragment key={row.id}>
//                   <Table.Row data-state={row.getIsSelected() && "selected"}>
//                     {row.getVisibleCells().map((cell) => {
//                       const customCellClass =
//                         cell.column.id === "select" ? "pr-0" : "";

//                       return (
//                         <Table.Cell key={cell.id} className={customCellClass}>
//                           {flexRender(
//                             cell.column.columnDef.cell,
//                             cell.getContext(),
//                           )}
//                         </Table.Cell>
//                       );
//                     })}
//                   </Table.Row>
//                   {i < arr.length - 1 && <Table.RowDivider />}
//                 </React.Fragment>
//               ))}
//           </Table.Body>
//         </Table.Root>
//       </div>
//     </div>
//   );
// }
