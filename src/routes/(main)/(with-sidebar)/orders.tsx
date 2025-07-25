import { RiBox3Line } from "@remixicon/react";
import { createFileRoute } from "@tanstack/react-router";

import { cn } from "@/utils/cn";

import { DashedDivider } from "@/components/dashed-divider";
import Header from "@/components/header";

export const Route = createFileRoute("/(main)/(with-sidebar)/orders")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Header
        icon={
          <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-bg-white-0 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200">
            <RiBox3Line className="size-6 text-text-sub-600" />
          </div>
        }
        title="Orders"
        description="Manage and track your orders"
        contentClassName="hidden lg:flex"
      >
        {/* <NewProductButton className="hidden lg:flex" /> */}
      </Header>

      <div className="flex flex-1 flex-col px-4 pb-6 lg:px-8">
        <DashedDivider />
        <OrdersSummary />
        <DashedDivider />

        {/* <OrdersTable /> */}
      </div>
    </>
  );
}

function Divider({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative w-0 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-stroke-soft-200",
        className,
      )}
    />
  );
}

export default function OrdersSummary() {
  return (
    <div className="flex flex-wrap py-6">
      <div className="w-full pb-4 first:pl-0 last:pr-0 sm:w-1/2 sm:px-7 sm:pb-0 xl:w-1/4 xl:pb-0">
        <div className="text-label-sm text-text-sub-600">Total Orders</div>
        <div className="mt-1 flex items-center gap-1.5">
          <div className="text-title-h5 text-text-strong-950">1,248</div>
          <div className="text-label-xs text-text-sub-600">
            <span className="text-success-base">+12</span> vs this week
          </div>
        </div>
      </div>

      <Divider className="hidden sm:block" />

      <div className="w-full border-t border-stroke-soft-200 pb-4 pt-4 first:pl-0 last:pr-0 sm:w-1/2 sm:border-transparent sm:px-7 sm:pt-0 xl:w-1/4 xl:pb-0">
        <div className="text-label-sm text-text-sub-600">Total Revenue</div>
        <div className="mt-1 flex items-center gap-1.5">
          <div className="text-title-h5 text-text-strong-950">$48,294</div>
          <div className="text-label-xs text-text-sub-600">
            <span className="text-success-base">+8%</span> vs last week
          </div>
        </div>
      </div>

      <Divider className="hidden xl:block" />

      <div className="w-full border-t border-stroke-soft-200 pb-4 pt-4 first:pl-0 last:pr-0 sm:w-1/2 sm:px-7 sm:pb-0 xl:w-1/4 xl:border-transparent xl:pt-0 [&:nth-child(5)]:pl-0 xl:[&:nth-child(5)]:pl-7">
        <div className="text-label-sm text-text-sub-600">
          Average Order Value
        </div>
        <div className="mt-1 flex items-center gap-1.5">
          <div className="text-title-h5 text-text-strong-950">$86.45</div>
          <div className="text-label-xs text-text-sub-600">
            <span className="text-success-base">-2%</span> this week
          </div>
        </div>
      </div>

      <Divider className="hidden sm:block" />

      <div className="w-full border-t border-stroke-soft-200 pt-4 first:pl-0 last:pr-0 sm:w-1/2 sm:px-7 xl:w-1/4 xl:border-transparent xl:pt-0">
        <div className="text-label-sm text-text-sub-600">Pending Orders</div>
        <div className="mt-1 flex items-center gap-1.5">
          <div className="text-title-h5 text-text-strong-950">28</div>
          <div className="text-label-xs text-text-soft-400">
            Requires attention
          </div>
        </div>
      </div>
    </div>
  );
}
