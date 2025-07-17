import { RouterContext } from "@/router";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";

import { ThemeProvider } from "@/context/theme";

import NetworkStatusIndicator from "@/components/network-status-indicator";
import { SearchMenu } from "@/components/search";
import NotificationProvider from "@/components/ui/notification-provider";
import * as ScrollArea from "@/components/ui/scroll-area";
import * as Tooltip from "@/components/ui/tooltip";

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <ThemeProvider>
        <Tooltip.Provider delayDuration={0}>
          <SearchMenu />
          <NotificationProvider />
          <NetworkStatusIndicator />
          <ScrollArea.Root type="auto" className="h-[100vh] overflow-hidden">
            <ScrollArea.Viewport className="h-full w-full">
              <Outlet />
            </ScrollArea.Viewport>
            <ScrollArea.ScrollbarVertical />
          </ScrollArea.Root>
        </Tooltip.Provider>
      </ThemeProvider>
      {/* <TanStackRouterDevtools /> */}
      {/* <ReactQueryDevtools /> */}
    </>
  );
}
