import React from "react";
import {
  RiArrowRightSLine,
  RiBankLine,
  RiBuilding2Line,
  RiCalendar2Line,
  RiCalendarScheduleLine,
  RiFileTextLine,
  RiGroupLine,
  RiIdCardLine,
  RiShakeHandsLine,
  RiShieldLine,
} from "@remixicon/react";
import {
  createFileRoute,
  Link,
  Outlet,
  useLocation,
} from "@tanstack/react-router";

import HeaderMobile from "@/components/header-mobile";
import Sidebar from "@/components/sidebar";
import * as Divider from "@/components/ui/divider";
import * as TabMenuHorizontal from "@/components/ui/tab-menu-horizontal";
import * as TabMenuVertical from "@/components/ui/tab-menu-vertical";

export const Route = createFileRoute("/settings")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex min-h-screen flex-col items-start lg:grid lg:grid-cols-[auto_minmax(0,1fr)]">
      <Sidebar defaultCollapsed />
      <HeaderMobile />
      <div className="w-screen lg:w-full flex-1 self-stretch lg:grid lg:grid-cols-[auto_minmax(0,1fr)]">
        <SettingsVerticalMenu />
        <div className="mx-auto flex w-full max-w-[1360px] flex-col">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

const TABS = [
  {
    group: "ORGANISATION INFORMATION",
    items: [
      {
        label: "Organisation Details",
        icon: RiBuilding2Line,
        href: "/settings/organisation-details",
      },
      {
        label: "Contact Details",
        icon: RiIdCardLine,
        href: "/settings/contact-details",
      },
      {
        label: "Operational Details",
        icon: RiShakeHandsLine,
        href: "/settings/operational-details",
      },
      {
        label: "Bank Details",
        icon: RiBankLine,
        href: "/settings/bank-details",
      },
      // {
      //   label: "Working Hours",
      //   icon: RiCalendarScheduleLine,
      //   href: "/settings/working-hours",
      // },
      // {
      //   label: "Holidays",
      //   icon: RiCalendar2Line,
      //   href: "/settings/holidays",
      // },
      {
        label: "Attachments",
        icon: RiFileTextLine,
        href: "/settings/attachments",
      },
    ],
  },
  // {
  //   group: "FINANCIAL & BANKING",
  //   items: [
  //     {
  //       label: "Bank Details",
  //       icon: RiBankLine,
  //       href: "/settings/bank-details",
  //     },
  //   ],
  // },
  {
    group: "WORK SCHEDULES",
    items: [
      {
        label: "Working Hours",
        icon: RiCalendarScheduleLine,
        href: "/settings/working-hours",
      },
      {
        label: "Holidays",
        icon: RiCalendar2Line,
        href: "/settings/holidays",
      },
    ],
  },
  {
    group: "ACCESS MANAGEMENT",
    items: [
      {
        label: "User Management",
        icon: RiGroupLine,
        href: "/settings/user-management",
      },
      {
        label: "Role Management",
        icon: RiShieldLine,
        href: "/settings/role-management",
      },
    ],
  },
  // {
  //   group: "DOCUMENTS",
  //   items: [
  //     {
  //       label: "Attachments",
  //       icon: RiFileTextLine,
  //       href: "/settings/attachments",
  //     },
  //   ],
  // },
];

const links = [
  {
    label: "Organisation Details",
    icon: RiBuilding2Line,
    href: "/settings/organisation-details",
  },
  {
    label: "Contact Details",
    icon: RiIdCardLine,
    href: "/settings/contact-details",
  },
  {
    label: "Operation Details",
    icon: RiShakeHandsLine,
    href: "/settings/operation-details",
  },
  {
    label: "Bank Details",
    icon: RiBankLine,
    href: "/settings/bank-details",
  },
  {
    label: "User Management",
    icon: RiGroupLine,
    href: "/settings/user-management",
  },
  {
    label: "Role Management",
    icon: RiShieldLine,
    href: "/settings/role-management",
  },
  {
    label: "Working Hours",
    icon: RiCalendarScheduleLine,
    href: "/settings/working-hours",
  },
  {
    label: "Holidays",
    icon: RiCalendar2Line,
    href: "/settings/holidays",
  },
  {
    label: "Attachments",
    icon: RiFileTextLine,
    href: "/settings/attachments",
  },
];

function SettingsVerticalMenu() {
  const pathname = useLocation({ select: (location) => location.pathname });

  return (
    <>
      {/* mobile */}
      <TabMenuHorizontal.Root
        defaultValue={pathname}
        // onValueChange={(v) => router.push(v)}
        className="lg:hidden"
      >
        <TabMenuHorizontal.List className="border-t-0 px-4">
          {links.map(({ label, icon: Icon, href }) => (
            <TabMenuHorizontal.Trigger key={label} asChild value={href}>
              <Link to={href}>
                <TabMenuHorizontal.Icon as={Icon} />
                {label}
              </Link>
            </TabMenuHorizontal.Trigger>
          ))}
        </TabMenuHorizontal.List>
      </TabMenuHorizontal.Root>

      {/* desktop */}
      <div className="hidden w-[264px] shrink-0 flex-col gap-5 border-r border-stroke-soft-200 p-5 lg:flex">
        <div>
          <div className="text-label-lg text-text-strong-950">Settings</div>
          <div className="mt-1 text-paragraph-sm text-text-sub-600">
            Choose between categories.
          </div>
        </div>

        <div>
          <Divider.Root />
        </div>

        <TabMenuVertical.Root
          defaultValue={pathname}
          // onValueChange={(v) => router.push(v)}
        >
          <TabMenuVertical.List>
            {TABS?.map(({ group, items }, i, arr) => (
              <React.Fragment key={group}>
                <div className="flex flex-col gap-2">
                  <Divider.Root variant="text">{group}</Divider.Root>
                  {items.map(({ label, icon: Icon, href }) => (
                    <TabMenuVertical.Trigger key={label} asChild value={href}>
                      <Link to={href}>
                        <TabMenuVertical.Icon as={Icon} />
                        {label}
                        <TabMenuVertical.ArrowIcon as={RiArrowRightSLine} />
                      </Link>
                    </TabMenuVertical.Trigger>
                  ))}
                </div>
                {i < arr.length - 1 && (
                  <Divider.Root variant="line-spacing" className="my-5" />
                )}
              </React.Fragment>
            ))}
          </TabMenuVertical.List>
        </TabMenuVertical.Root>
      </div>
    </>
  );
}
