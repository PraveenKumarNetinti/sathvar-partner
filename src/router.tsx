import { RiLoader2Line } from "@remixicon/react";
import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";

import { AuthContext } from "./context/auth";
import { routeTree } from "./routeTree.gen";
import { cn } from "./utils/cn";

import StatusCodeInfo from "@/components/status-code-info";
import * as LinkButton from "@/components/ui/link-button";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      networkMode: "offlineFirst",
      retry: false,
      refetchOnWindowFocus: false,
    },
    mutations: {
      networkMode: "offlineFirst",
    },
  },
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export interface RouterContext {
  queryClient: QueryClient;
  title?: string;
  auth: AuthContext;
}

// Set up a Router instance
export const router = createRouter({
  routeTree,
  context: {
    queryClient,
    auth: undefined!,
  },
  defaultPreload: "intent",
  // Since we're using React Query, we don't want loader calls to ever be stale
  // This will ensure that the loader is always called when the route is preloaded or visited
  defaultPreloadStaleTime: 0,
  scrollRestoration: true,
  defaultComponent: DefaultComponent,
  defaultPendingComponent: DefaultPendingComponent,
  defaultNotFoundComponent: DefaultNotFoundComponent,
});

function DefaultComponent() {
  return (
    <div className="w-full min-h-screen grid place-items-center">
      <div className="flex flex-col items-center justify-center">
        <div className="z-10 from-gray-500/[.08] flex size-[72px] items-center justify-center rounded-full bg-gradient-to-b to-transparent">
          <div
            className="bg-bg-white-0 flex size-12 items-center justify-center rounded-full"
            style={{
              boxShadow:
                "0 1px 1px 0.5px rgba(41,41,41,.04),0 3px 3px -1.5px rgba(41,41,41,.02),0 6px 6px -3px rgba(41,41,41,.04),0 12px 12px -6px rgba(41,41,41,.04),0 24px 24px -12px rgba(41,41,41,.04),0 48px 48px -24px rgba(41,41,41,.04),0 0 0 1px rgba(41,41,41,.04),inset 0 -1px 1px -0.5px rgba(51,51,51,.06)",
            }}
          >
            <RiLoader2Line className="text-gray-600 size-6" />
          </div>
        </div>
        <div className="text-title-h6 text-text-strong-950 mt-2">
          We're working on this one.
        </div>
        <div className="text-paragraph-xs text-text-sub-600 mt-1 text-balance max-w-2xl text-center">
          We’re working hard to bring this page to life. Check back later or
          explore other features in the meantime.
        </div>
      </div>
    </div>
  );
}

function DefaultPendingComponent() {
  return (
    <div className="w-full min-h-screen grid place-items-center">
      <div className="flex flex-col items-center justify-center gap-6">
        <div
          className={cn(
            "relative flex size-[68px] shrink-0 items-center justify-center rounded-full backdrop-blur-xl lg:size-20",
            // bg
            "before:absolute before:inset-0 before:rounded-full",
            "before:bg-gradient-to-b before:from-primary-base before:to-transparent before:opacity-10",
          )}
        >
          <div
            className="relative z-10 flex size-12 items-center justify-center rounded-full bg-bg-white-0 ring-1 ring-inset ring-stroke-soft-200 lg:size-14"
            // style={{
            //   boxShadow:
            //     "0 0 0 1px rgba(183, 83, 16, 0.04), 0 1px 1px 0.5px rgba(183, 83, 16, 0.04), 0 3px 3px -1.5px rgba(183, 83, 16, 0.02), 0 6px 6px -3px rgba(183, 83, 16, 0.04), 0 12px 12px -6px rgba(183, 83, 16, 0.04), 0px 24px 24px -12px rgba(183, 83, 16, 0.04), 0px 48px 48px -24px rgba(183, 83, 16, 0.04), inset 0px -1px 1px -0.5px rgba(183, 83, 16, 0.06)",
            // }}
          >
            <RiLoader2Line className="size-6 text-information-base lg:size-7 animate-spin" />
          </div>
        </div>
      </div>
    </div>
  );
}

function DefaultNotFoundComponent() {
  return (
    <StatusCodeInfo
      // className="flex-1"
      statusCode="404"
      title="Sorry, the page you are looking for was not found"
      description="This page has been removed, renamed, or might be temporarily
            unavailable."
    >
      <LinkButton.Root size="medium" underline>
        Back to home
      </LinkButton.Root>
    </StatusCodeInfo>
  );
}
