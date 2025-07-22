import React from "react";
import {
  RiAddLine,
  RiArrowDownSFill,
  RiArrowUpSFill,
  RiExpandUpDownFill,
  RiFilter3Fill,
  RiGroupLine,
  RiMore2Line,
  RiSearch2Line,
} from "@remixicon/react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

import Header from "@/components/header";
import * as Button from "@/components/ui/button";
import * as Checkbox from "@/components/ui/checkbox";
import * as Divider from "@/components/ui/divider";
import * as Input from "@/components/ui/input";
import * as Kbd from "@/components/ui/kbd";
import * as SegmentedControl from "@/components/ui/segmented-control";
import * as StatusBadge from "@/components/ui/status-badge";
import * as Table from "@/components/ui/table";

export const Route = createFileRoute("/(main)/settings/user-management")({
  component: RouteComponent,
});

type UserManagementData = {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
};

const data: UserManagementData[] = [
  {
    id: 1,
    name: "N Praveen Kumar",
    email: "pravee.n@ddindia.biz",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Shaik Ahmed Nawaz",
    email: "ahmed@ddindia.biz",
    role: "Developer",
    status: "Active",
  },
];

const getSortingIcon = (state: "asc" | "desc" | false) => {
  if (state === "asc")
    return <RiArrowUpSFill className="size-5 text-text-soft-400" />;
  if (state === "desc")
    return <RiArrowDownSFill className="size-5 text-text-soft-400" />;
  return <RiExpandUpDownFill className="size-5 text-text-soft-400" />;
};

function RouteComponent() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [filter, setFilter] = React.useState("all");
  const [rowSelection, setRowSelection] = React.useState({});

  const filteredData = React.useMemo(() => {
    if (filter === "all") return data;
    return data.filter((item) => item.status.toLowerCase() === filter);
  }, [filter]);

  const columns: ColumnDef<UserManagementData>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox.Root
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox.Root
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
    },
    {
      id: "name",
      accessorKey: "name",
      header: ({ column }) => (
        <div className="flex items-center gap-0.5">
          <span className="text-paragraph-sm text-text-sub-600">Name</span>
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
          {row.original.name}
        </span>
      ),
    },
    {
      id: "email",
      accessorKey: "email",
      header: ({ column }) => (
        <div className="flex items-center gap-0.5">
          <span className="text-paragraph-sm text-text-sub-600">Email</span>
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
      id: "role",
      accessorKey: "role",
      header: ({ column }) => (
        <div className="flex items-center gap-0.5">
          <span className="text-paragraph-sm text-text-sub-600">Role</span>
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
          {row.original.role}
        </span>
      ),
    },
    {
      id: "status",
      accessorKey: "status",
      header: ({ column }) => (
        <div className="flex items-center gap-0.5">
          <span className="text-paragraph-sm text-text-sub-600">Status</span>
          <button
            type="button"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            {getSortingIcon(column.getIsSorted())}
          </button>
        </div>
      ),
      cell: ({ row }) => (
        <StatusBadge.Root status="completed">
          <StatusBadge.Dot />
          {row.original.status}
        </StatusBadge.Root>
      ),
    },
    {
      id: "actions",
      enableHiding: false,
      cell: () => (
        <div className="flex items-center justify-between">
          <Button.Root variant="neutral" mode="ghost" size="xsmall">
            <Button.Icon as={RiMore2Line} />
          </Button.Root>
          {/* <Button.Root variant="neutral" mode="ghost" size="xsmall">
            <Button.Icon as={RiEdit2Line} />
          </Button.Root> */}
        </div>
      ),
    },
  ];

  const table = useReactTable({
    data: filteredData,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      rowSelection,
    },
  });

  return (
    <>
      <Header
        icon={
          <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-bg-white-0 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200">
            <RiGroupLine className="size-6 text-text-sub-600" />
          </div>
        }
        title="User Management"
        description="Manage users with access to your account."
      >
        <Button.Root className="rounded-xl">
          <Button.Icon as={RiAddLine} />
          New User
        </Button.Root>
      </Header>
      <div className="px-4 lg:px-8">
        <Divider.Root />
      </div>
      <div className="w-full max-w-[1104px] px-4 py-6 lg:px-8">
        <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="w-full sm:w-[320px]">
            <SegmentedControl.Root defaultValue="all" onValueChange={setFilter}>
              <SegmentedControl.List>
                <SegmentedControl.Trigger value="all">
                  All
                </SegmentedControl.Trigger>
                <SegmentedControl.Trigger value="Active">
                  Active
                </SegmentedControl.Trigger>
                <SegmentedControl.Trigger value="In-Active">
                  In-Active
                </SegmentedControl.Trigger>
              </SegmentedControl.List>
            </SegmentedControl.Root>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Input.Root size="small" className="w-full sm:w-auto">
              <Input.Wrapper>
                <Input.Icon as={RiSearch2Line} />
                <Input.Input placeholder="Search User" />
                <Kbd.Root>⌘1</Kbd.Root>
              </Input.Wrapper>
            </Input.Root>
            <div className="flex w-full gap-3 sm:w-auto">
              <Button.Root
                variant="neutral"
                mode="stroke"
                size="small"
                className="flex-1 sm:flex-initial"
              >
                <Button.Icon as={RiFilter3Fill} />
                <span>Filter</span>
              </Button.Root>
              <Button.Root variant="neutral" mode="stroke" size="small">
                <Button.Icon as={RiMore2Line} />
              </Button.Root>
              {/* <Button.Root
                variant="neutral"
                mode="stroke"
                size="small"
                className="flex-1 sm:flex-initial"
              >
                <Button.Icon as={RiSortDesc} className="text-text-soft-400" />
                <span className="text-paragraph-sm text-text-sub-600">
                  Sort by
                </span>
                <Button.Icon
                  as={RiArrowDownSLine}
                  className="text-text-soft-400"
                />
              </Button.Root> */}
            </div>
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
    </>
  );
}
