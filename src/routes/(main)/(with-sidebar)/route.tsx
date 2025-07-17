import { createFileRoute, Outlet } from "@tanstack/react-router";

import HeaderMobile from "@/components/header-mobile";
import Sidebar from "@/components/sidebar";

export const Route = createFileRoute("/(main)/(with-sidebar)")({
  component: RouteComponent,
});

// ==============================
// 💻 Component
// ==============================

function RouteComponent() {
  return (
    <div className="flex min-h-screen flex-col items-start lg:grid lg:grid-cols-[auto_minmax(0,1fr)]">
      <Sidebar />
      <HeaderMobile />
      <div className="mx-auto flex w-full max-w-[1360px] flex-1 flex-col self-stretch">
        <Outlet />
      </div>
    </div>
  );
}
