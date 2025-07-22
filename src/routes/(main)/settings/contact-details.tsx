import * as React from "react";
import {
  RiArrowDownSFill,
  RiArrowUpSFill,
  RiExpandUpDownFill,
  RiIdCardLine,
  RiSearch2Line,
} from "@remixicon/react";
import { createFileRoute } from "@tanstack/react-router";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type SortingState,
} from "@tanstack/react-table";

import Header from "@/components/header";
import * as Divider from "@/components/ui/divider";
import * as Input from "@/components/ui/input";
import * as Kbd from "@/components/ui/kbd";
import * as Table from "@/components/ui/table";

export const Route = createFileRoute("/(main)/settings/contact-details")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Header
        icon={
          <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-bg-white-0 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200">
            <RiIdCardLine className="size-6 text-text-sub-600" />
          </div>
        }
        title="Contact Details"
        description="Manage your organization's contact information."
      />

      <div className="px-4 lg:px-8">
        <Divider.Root />
      </div>

      <ContactDetailsTable />
    </>
  );
}

type ContactDetails = {
  id: string;
  full_name: string;
  designation: string;
  email: string;
  phone: string;
};

const data: ContactDetails[] = [
  {
    id: "1",
    full_name: "Aarav Sharma",
    designation: "Chief Executive Officer",
    email: "aarav.sharma@acmetech.in",
    phone: "+91-9876543210",
  },
  {
    id: "2",
    full_name: "Priya Mehta",
    designation: "Head of Operations",
    email: "priya.mehta@acmetech.in",
    phone: "+91-9823012345",
  },
  {
    id: "3",
    full_name: "Rohan Verma",
    designation: "Finance Manager",
    email: "rohan.verma@acmetech.in",
    phone: "+91-9812345678",
  },
];

const getSortingIcon = (state: "asc" | "desc" | false) => {
  if (state === "asc")
    return <RiArrowUpSFill className="size-5 text-text-soft-400" />;
  if (state === "desc")
    return <RiArrowDownSFill className="size-5 text-text-soft-400" />;
  return <RiExpandUpDownFill className="size-5 text-text-soft-400" />;
};

function ContactDetailsTable() {
  const [queryFilter, setQueryFilter] = React.useState("");
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [rowSelection, setRowSelection] = React.useState({});

  const columns: ColumnDef<ContactDetails>[] = [
    {
      id: "full_name",
      accessorKey: "full_name",
      header: ({ column }) => (
        <div className="flex w-[116px] items-center gap-0.5">
          <span className="text-paragraph-sm text-text-sub-600">Full Name</span>
          <button
            type="button"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            {getSortingIcon(column.getIsSorted())}
          </button>
        </div>
      ),
      cell: ({ row }) => (
        <span className="text-paragraph-sm text-text-sub-600">
          {row.original.full_name}
        </span>
      ),
    },
    {
      id: "designation",
      accessorKey: "designation",
      header: ({ column }) => (
        <div className="flex w-[296px] items-center gap-0.5">
          <span className="text-paragraph-sm text-text-sub-600">
            Designation
          </span>
          <button
            type="button"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            {getSortingIcon(column.getIsSorted())}
          </button>
        </div>
      ),
      cell: ({ row }) => (
        <span className="text-paragraph-sm text-text-sub-600">
          {row.original.designation}
        </span>
      ),
    },
    {
      id: "email",
      accessorKey: "email",
      header: ({ column }) => (
        <div className="flex w-[196px] items-center gap-0.5">
          <span className="text-paragraph-sm text-text-sub-600">Email ID</span>
          <button
            type="button"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            {getSortingIcon(column.getIsSorted())}
          </button>
        </div>
      ),
      cell: ({ row }) => (
        <span className="text-paragraph-sm text-text-sub-600">
          {row.original.email}
        </span>
      ),
    },
    {
      id: "phone",
      accessorKey: "phone",
      header: ({ column }) => (
        <div className="flex w-[196px] items-center gap-0.5">
          <span className="text-paragraph-sm text-text-sub-600">
            Mobile Number
          </span>
          <button
            type="button"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            {getSortingIcon(column.getIsSorted())}
          </button>
        </div>
      ),
      cell: ({ row }) => (
        <span className="text-paragraph-sm text-text-sub-600">
          {row.original.phone}
        </span>
      ),
    },
  ];

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      rowSelection,
      globalFilter: queryFilter,
    },
  });

  return (
    <div className="w-full max-w-[1104px] px-4 py-6 lg:px-8">
      <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Input.Root size="small" className="w-full sm:w-auto">
            <Input.Wrapper>
              <Input.Icon as={RiSearch2Line} />
              <Input.Input
                placeholder="Search"
                value={queryFilter}
                onChange={(e) => setQueryFilter(e.target.value)}
              />
              {/* TODO: Add Remove Button to clear the input */}
              <Kbd.Root>⌘1</Kbd.Root>
            </Input.Wrapper>
          </Input.Root>
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table.Root>
          <Table.Header>
            {table.getHeaderGroups().map((headerGroup) => (
              <Table.Row key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  const customClass = header.id === "select" ? "pr-0" : "";

                  return (
                    <Table.Head key={header.id} className={customClass}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </Table.Head>
                  );
                })}
              </Table.Row>
            ))}
          </Table.Header>
          <Table.Body>
            {table.getRowModel().rows?.length > 0 &&
              table.getRowModel().rows.map((row, i, arr) => (
                <React.Fragment key={row.id}>
                  <Table.Row data-state={row.getIsSelected() && "selected"}>
                    {row.getVisibleCells().map((cell) => {
                      const customCellClass =
                        cell.column.id === "select" ? "pr-0" : "";

                      return (
                        <Table.Cell key={cell.id} className={customCellClass}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </Table.Cell>
                      );
                    })}
                  </Table.Row>
                  {i < arr.length - 1 && <Table.RowDivider />}
                </React.Fragment>
              ))}
          </Table.Body>
        </Table.Root>
      </div>
    </div>
  );
}
