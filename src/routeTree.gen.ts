/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from "./routes/__root";
import { Route as authLoginIndexImport } from "./routes/(auth)/login/index";
import { Route as authLoginOtpImport } from "./routes/(auth)/login/otp";
import { Route as authRouteImport } from "./routes/(auth)/route";
import { Route as mainwithSidebarDashboardImport } from "./routes/(main)/(with-sidebar)/dashboard";
import { Route as mainwithSidebarOrdersImport } from "./routes/(main)/(with-sidebar)/orders";
import { Route as mainwithSidebarRouteImport } from "./routes/(main)/(with-sidebar)/route";
import { Route as mainwithSidebarServicesImport } from "./routes/(main)/(with-sidebar)/services";
import { Route as mainOnboardRouteImport } from "./routes/(main)/onboard/route";
import { Route as mainSettingsAttachmentsImport } from "./routes/(main)/settings/attachments";
import { Route as mainSettingsBankDetailsImport } from "./routes/(main)/settings/bank-details";
import { Route as mainSettingsContactDetailsImport } from "./routes/(main)/settings/contact-details";
import { Route as mainSettingsHolidaysImport } from "./routes/(main)/settings/holidays";
import { Route as mainSettingsOperationalDetailsImport } from "./routes/(main)/settings/operational-details";
import { Route as mainSettingsOrganisationDetailsImport } from "./routes/(main)/settings/organisation-details";
import { Route as mainSettingsRoleManagementImport } from "./routes/(main)/settings/role-management";
import { Route as mainSettingsRouteImport } from "./routes/(main)/settings/route";
import { Route as mainSettingsUserManagementImport } from "./routes/(main)/settings/user-management";
import { Route as mainSettingsWorkingHoursImport } from "./routes/(main)/settings/working-hours";
import { Route as IndexImport } from "./routes/index";

// Create/Update Routes

const authRouteRoute = authRouteImport.update({
  id: "/(auth)",
  getParentRoute: () => rootRoute,
} as any);

const IndexRoute = IndexImport.update({
  id: "/",
  path: "/",
  getParentRoute: () => rootRoute,
} as any);

const mainSettingsRouteRoute = mainSettingsRouteImport.update({
  id: "/(main)/settings",
  path: "/settings",
  getParentRoute: () => rootRoute,
} as any);

const mainOnboardRouteRoute = mainOnboardRouteImport.update({
  id: "/(main)/onboard",
  path: "/onboard",
  getParentRoute: () => rootRoute,
} as any);

const mainwithSidebarRouteRoute = mainwithSidebarRouteImport.update({
  id: "/(main)/(with-sidebar)",
  getParentRoute: () => rootRoute,
} as any);

const authLoginIndexRoute = authLoginIndexImport.update({
  id: "/login/",
  path: "/login/",
  getParentRoute: () => authRouteRoute,
} as any);

const mainSettingsWorkingHoursRoute = mainSettingsWorkingHoursImport.update({
  id: "/working-hours",
  path: "/working-hours",
  getParentRoute: () => mainSettingsRouteRoute,
} as any);

const mainSettingsUserManagementRoute = mainSettingsUserManagementImport.update(
  {
    id: "/user-management",
    path: "/user-management",
    getParentRoute: () => mainSettingsRouteRoute,
  } as any,
);

const mainSettingsRoleManagementRoute = mainSettingsRoleManagementImport.update(
  {
    id: "/role-management",
    path: "/role-management",
    getParentRoute: () => mainSettingsRouteRoute,
  } as any,
);

const mainSettingsOrganisationDetailsRoute =
  mainSettingsOrganisationDetailsImport.update({
    id: "/organisation-details",
    path: "/organisation-details",
    getParentRoute: () => mainSettingsRouteRoute,
  } as any);

const mainSettingsOperationalDetailsRoute =
  mainSettingsOperationalDetailsImport.update({
    id: "/operational-details",
    path: "/operational-details",
    getParentRoute: () => mainSettingsRouteRoute,
  } as any);

const mainSettingsHolidaysRoute = mainSettingsHolidaysImport.update({
  id: "/holidays",
  path: "/holidays",
  getParentRoute: () => mainSettingsRouteRoute,
} as any);

const mainSettingsContactDetailsRoute = mainSettingsContactDetailsImport.update(
  {
    id: "/contact-details",
    path: "/contact-details",
    getParentRoute: () => mainSettingsRouteRoute,
  } as any,
);

const mainSettingsBankDetailsRoute = mainSettingsBankDetailsImport.update({
  id: "/bank-details",
  path: "/bank-details",
  getParentRoute: () => mainSettingsRouteRoute,
} as any);

const mainSettingsAttachmentsRoute = mainSettingsAttachmentsImport.update({
  id: "/attachments",
  path: "/attachments",
  getParentRoute: () => mainSettingsRouteRoute,
} as any);

const mainwithSidebarServicesRoute = mainwithSidebarServicesImport.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => mainwithSidebarRouteRoute,
} as any);

const mainwithSidebarOrdersRoute = mainwithSidebarOrdersImport.update({
  id: "/orders",
  path: "/orders",
  getParentRoute: () => mainwithSidebarRouteRoute,
} as any);

const mainwithSidebarDashboardRoute = mainwithSidebarDashboardImport.update({
  id: "/dashboard",
  path: "/dashboard",
  getParentRoute: () => mainwithSidebarRouteRoute,
} as any);

const authLoginOtpRoute = authLoginOtpImport.update({
  id: "/login/otp",
  path: "/login/otp",
  getParentRoute: () => authRouteRoute,
} as any);

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      id: "/";
      path: "/";
      fullPath: "/";
      preLoaderRoute: typeof IndexImport;
      parentRoute: typeof rootRoute;
    };
    "/(auth)": {
      id: "/(auth)";
      path: "/";
      fullPath: "/";
      preLoaderRoute: typeof authRouteImport;
      parentRoute: typeof rootRoute;
    };
    "/(main)/(with-sidebar)": {
      id: "/(main)/(with-sidebar)";
      path: "/";
      fullPath: "/";
      preLoaderRoute: typeof mainwithSidebarRouteImport;
      parentRoute: typeof rootRoute;
    };
    "/(main)/onboard": {
      id: "/(main)/onboard";
      path: "/onboard";
      fullPath: "/onboard";
      preLoaderRoute: typeof mainOnboardRouteImport;
      parentRoute: typeof rootRoute;
    };
    "/(main)/settings": {
      id: "/(main)/settings";
      path: "/settings";
      fullPath: "/settings";
      preLoaderRoute: typeof mainSettingsRouteImport;
      parentRoute: typeof rootRoute;
    };
    "/(auth)/login/otp": {
      id: "/(auth)/login/otp";
      path: "/login/otp";
      fullPath: "/login/otp";
      preLoaderRoute: typeof authLoginOtpImport;
      parentRoute: typeof authRouteImport;
    };
    "/(main)/(with-sidebar)/dashboard": {
      id: "/(main)/(with-sidebar)/dashboard";
      path: "/dashboard";
      fullPath: "/dashboard";
      preLoaderRoute: typeof mainwithSidebarDashboardImport;
      parentRoute: typeof mainwithSidebarRouteImport;
    };
    "/(main)/(with-sidebar)/orders": {
      id: "/(main)/(with-sidebar)/orders";
      path: "/orders";
      fullPath: "/orders";
      preLoaderRoute: typeof mainwithSidebarOrdersImport;
      parentRoute: typeof mainwithSidebarRouteImport;
    };
    "/(main)/(with-sidebar)/services": {
      id: "/(main)/(with-sidebar)/services";
      path: "/services";
      fullPath: "/services";
      preLoaderRoute: typeof mainwithSidebarServicesImport;
      parentRoute: typeof mainwithSidebarRouteImport;
    };
    "/(main)/settings/attachments": {
      id: "/(main)/settings/attachments";
      path: "/attachments";
      fullPath: "/settings/attachments";
      preLoaderRoute: typeof mainSettingsAttachmentsImport;
      parentRoute: typeof mainSettingsRouteImport;
    };
    "/(main)/settings/bank-details": {
      id: "/(main)/settings/bank-details";
      path: "/bank-details";
      fullPath: "/settings/bank-details";
      preLoaderRoute: typeof mainSettingsBankDetailsImport;
      parentRoute: typeof mainSettingsRouteImport;
    };
    "/(main)/settings/contact-details": {
      id: "/(main)/settings/contact-details";
      path: "/contact-details";
      fullPath: "/settings/contact-details";
      preLoaderRoute: typeof mainSettingsContactDetailsImport;
      parentRoute: typeof mainSettingsRouteImport;
    };
    "/(main)/settings/holidays": {
      id: "/(main)/settings/holidays";
      path: "/holidays";
      fullPath: "/settings/holidays";
      preLoaderRoute: typeof mainSettingsHolidaysImport;
      parentRoute: typeof mainSettingsRouteImport;
    };
    "/(main)/settings/operational-details": {
      id: "/(main)/settings/operational-details";
      path: "/operational-details";
      fullPath: "/settings/operational-details";
      preLoaderRoute: typeof mainSettingsOperationalDetailsImport;
      parentRoute: typeof mainSettingsRouteImport;
    };
    "/(main)/settings/organisation-details": {
      id: "/(main)/settings/organisation-details";
      path: "/organisation-details";
      fullPath: "/settings/organisation-details";
      preLoaderRoute: typeof mainSettingsOrganisationDetailsImport;
      parentRoute: typeof mainSettingsRouteImport;
    };
    "/(main)/settings/role-management": {
      id: "/(main)/settings/role-management";
      path: "/role-management";
      fullPath: "/settings/role-management";
      preLoaderRoute: typeof mainSettingsRoleManagementImport;
      parentRoute: typeof mainSettingsRouteImport;
    };
    "/(main)/settings/user-management": {
      id: "/(main)/settings/user-management";
      path: "/user-management";
      fullPath: "/settings/user-management";
      preLoaderRoute: typeof mainSettingsUserManagementImport;
      parentRoute: typeof mainSettingsRouteImport;
    };
    "/(main)/settings/working-hours": {
      id: "/(main)/settings/working-hours";
      path: "/working-hours";
      fullPath: "/settings/working-hours";
      preLoaderRoute: typeof mainSettingsWorkingHoursImport;
      parentRoute: typeof mainSettingsRouteImport;
    };
    "/(auth)/login/": {
      id: "/(auth)/login/";
      path: "/login";
      fullPath: "/login";
      preLoaderRoute: typeof authLoginIndexImport;
      parentRoute: typeof authRouteImport;
    };
  }
}

// Create and export the route tree

interface authRouteRouteChildren {
  authLoginOtpRoute: typeof authLoginOtpRoute;
  authLoginIndexRoute: typeof authLoginIndexRoute;
}

const authRouteRouteChildren: authRouteRouteChildren = {
  authLoginOtpRoute: authLoginOtpRoute,
  authLoginIndexRoute: authLoginIndexRoute,
};

const authRouteRouteWithChildren = authRouteRoute._addFileChildren(
  authRouteRouteChildren,
);

interface mainwithSidebarRouteRouteChildren {
  mainwithSidebarDashboardRoute: typeof mainwithSidebarDashboardRoute;
  mainwithSidebarOrdersRoute: typeof mainwithSidebarOrdersRoute;
  mainwithSidebarServicesRoute: typeof mainwithSidebarServicesRoute;
}

const mainwithSidebarRouteRouteChildren: mainwithSidebarRouteRouteChildren = {
  mainwithSidebarDashboardRoute: mainwithSidebarDashboardRoute,
  mainwithSidebarOrdersRoute: mainwithSidebarOrdersRoute,
  mainwithSidebarServicesRoute: mainwithSidebarServicesRoute,
};

const mainwithSidebarRouteRouteWithChildren =
  mainwithSidebarRouteRoute._addFileChildren(mainwithSidebarRouteRouteChildren);

interface mainSettingsRouteRouteChildren {
  mainSettingsAttachmentsRoute: typeof mainSettingsAttachmentsRoute;
  mainSettingsBankDetailsRoute: typeof mainSettingsBankDetailsRoute;
  mainSettingsContactDetailsRoute: typeof mainSettingsContactDetailsRoute;
  mainSettingsHolidaysRoute: typeof mainSettingsHolidaysRoute;
  mainSettingsOperationalDetailsRoute: typeof mainSettingsOperationalDetailsRoute;
  mainSettingsOrganisationDetailsRoute: typeof mainSettingsOrganisationDetailsRoute;
  mainSettingsRoleManagementRoute: typeof mainSettingsRoleManagementRoute;
  mainSettingsUserManagementRoute: typeof mainSettingsUserManagementRoute;
  mainSettingsWorkingHoursRoute: typeof mainSettingsWorkingHoursRoute;
}

const mainSettingsRouteRouteChildren: mainSettingsRouteRouteChildren = {
  mainSettingsAttachmentsRoute: mainSettingsAttachmentsRoute,
  mainSettingsBankDetailsRoute: mainSettingsBankDetailsRoute,
  mainSettingsContactDetailsRoute: mainSettingsContactDetailsRoute,
  mainSettingsHolidaysRoute: mainSettingsHolidaysRoute,
  mainSettingsOperationalDetailsRoute: mainSettingsOperationalDetailsRoute,
  mainSettingsOrganisationDetailsRoute: mainSettingsOrganisationDetailsRoute,
  mainSettingsRoleManagementRoute: mainSettingsRoleManagementRoute,
  mainSettingsUserManagementRoute: mainSettingsUserManagementRoute,
  mainSettingsWorkingHoursRoute: mainSettingsWorkingHoursRoute,
};

const mainSettingsRouteRouteWithChildren =
  mainSettingsRouteRoute._addFileChildren(mainSettingsRouteRouteChildren);

export interface FileRoutesByFullPath {
  "/": typeof mainwithSidebarRouteRouteWithChildren;
  "/onboard": typeof mainOnboardRouteRoute;
  "/settings": typeof mainSettingsRouteRouteWithChildren;
  "/login/otp": typeof authLoginOtpRoute;
  "/dashboard": typeof mainwithSidebarDashboardRoute;
  "/orders": typeof mainwithSidebarOrdersRoute;
  "/services": typeof mainwithSidebarServicesRoute;
  "/settings/attachments": typeof mainSettingsAttachmentsRoute;
  "/settings/bank-details": typeof mainSettingsBankDetailsRoute;
  "/settings/contact-details": typeof mainSettingsContactDetailsRoute;
  "/settings/holidays": typeof mainSettingsHolidaysRoute;
  "/settings/operational-details": typeof mainSettingsOperationalDetailsRoute;
  "/settings/organisation-details": typeof mainSettingsOrganisationDetailsRoute;
  "/settings/role-management": typeof mainSettingsRoleManagementRoute;
  "/settings/user-management": typeof mainSettingsUserManagementRoute;
  "/settings/working-hours": typeof mainSettingsWorkingHoursRoute;
  "/login": typeof authLoginIndexRoute;
}

export interface FileRoutesByTo {
  "/": typeof mainwithSidebarRouteRouteWithChildren;
  "/onboard": typeof mainOnboardRouteRoute;
  "/settings": typeof mainSettingsRouteRouteWithChildren;
  "/login/otp": typeof authLoginOtpRoute;
  "/dashboard": typeof mainwithSidebarDashboardRoute;
  "/orders": typeof mainwithSidebarOrdersRoute;
  "/services": typeof mainwithSidebarServicesRoute;
  "/settings/attachments": typeof mainSettingsAttachmentsRoute;
  "/settings/bank-details": typeof mainSettingsBankDetailsRoute;
  "/settings/contact-details": typeof mainSettingsContactDetailsRoute;
  "/settings/holidays": typeof mainSettingsHolidaysRoute;
  "/settings/operational-details": typeof mainSettingsOperationalDetailsRoute;
  "/settings/organisation-details": typeof mainSettingsOrganisationDetailsRoute;
  "/settings/role-management": typeof mainSettingsRoleManagementRoute;
  "/settings/user-management": typeof mainSettingsUserManagementRoute;
  "/settings/working-hours": typeof mainSettingsWorkingHoursRoute;
  "/login": typeof authLoginIndexRoute;
}

export interface FileRoutesById {
  "__root__": typeof rootRoute;
  "/": typeof IndexRoute;
  "/(auth)": typeof authRouteRouteWithChildren;
  "/(main)/(with-sidebar)": typeof mainwithSidebarRouteRouteWithChildren;
  "/(main)/onboard": typeof mainOnboardRouteRoute;
  "/(main)/settings": typeof mainSettingsRouteRouteWithChildren;
  "/(auth)/login/otp": typeof authLoginOtpRoute;
  "/(main)/(with-sidebar)/dashboard": typeof mainwithSidebarDashboardRoute;
  "/(main)/(with-sidebar)/orders": typeof mainwithSidebarOrdersRoute;
  "/(main)/(with-sidebar)/services": typeof mainwithSidebarServicesRoute;
  "/(main)/settings/attachments": typeof mainSettingsAttachmentsRoute;
  "/(main)/settings/bank-details": typeof mainSettingsBankDetailsRoute;
  "/(main)/settings/contact-details": typeof mainSettingsContactDetailsRoute;
  "/(main)/settings/holidays": typeof mainSettingsHolidaysRoute;
  "/(main)/settings/operational-details": typeof mainSettingsOperationalDetailsRoute;
  "/(main)/settings/organisation-details": typeof mainSettingsOrganisationDetailsRoute;
  "/(main)/settings/role-management": typeof mainSettingsRoleManagementRoute;
  "/(main)/settings/user-management": typeof mainSettingsUserManagementRoute;
  "/(main)/settings/working-hours": typeof mainSettingsWorkingHoursRoute;
  "/(auth)/login/": typeof authLoginIndexRoute;
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath;
  fullPaths:
    | "/"
    | "/onboard"
    | "/settings"
    | "/login/otp"
    | "/dashboard"
    | "/orders"
    | "/services"
    | "/settings/attachments"
    | "/settings/bank-details"
    | "/settings/contact-details"
    | "/settings/holidays"
    | "/settings/operational-details"
    | "/settings/organisation-details"
    | "/settings/role-management"
    | "/settings/user-management"
    | "/settings/working-hours"
    | "/login";
  fileRoutesByTo: FileRoutesByTo;
  to:
    | "/"
    | "/onboard"
    | "/settings"
    | "/login/otp"
    | "/dashboard"
    | "/orders"
    | "/services"
    | "/settings/attachments"
    | "/settings/bank-details"
    | "/settings/contact-details"
    | "/settings/holidays"
    | "/settings/operational-details"
    | "/settings/organisation-details"
    | "/settings/role-management"
    | "/settings/user-management"
    | "/settings/working-hours"
    | "/login";
  id:
    | "__root__"
    | "/"
    | "/(auth)"
    | "/(main)/(with-sidebar)"
    | "/(main)/onboard"
    | "/(main)/settings"
    | "/(auth)/login/otp"
    | "/(main)/(with-sidebar)/dashboard"
    | "/(main)/(with-sidebar)/orders"
    | "/(main)/(with-sidebar)/services"
    | "/(main)/settings/attachments"
    | "/(main)/settings/bank-details"
    | "/(main)/settings/contact-details"
    | "/(main)/settings/holidays"
    | "/(main)/settings/operational-details"
    | "/(main)/settings/organisation-details"
    | "/(main)/settings/role-management"
    | "/(main)/settings/user-management"
    | "/(main)/settings/working-hours"
    | "/(auth)/login/";
  fileRoutesById: FileRoutesById;
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute;
  authRouteRoute: typeof authRouteRouteWithChildren;
  mainwithSidebarRouteRoute: typeof mainwithSidebarRouteRouteWithChildren;
  mainOnboardRouteRoute: typeof mainOnboardRouteRoute;
  mainSettingsRouteRoute: typeof mainSettingsRouteRouteWithChildren;
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  authRouteRoute: authRouteRouteWithChildren,
  mainwithSidebarRouteRoute: mainwithSidebarRouteRouteWithChildren,
  mainOnboardRouteRoute: mainOnboardRouteRoute,
  mainSettingsRouteRoute: mainSettingsRouteRouteWithChildren,
};

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>();

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/(auth)",
        "/(main)/(with-sidebar)",
        "/(main)/onboard",
        "/(main)/settings"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/(auth)": {
      "filePath": "(auth)/route.tsx",
      "children": [
        "/(auth)/login/otp",
        "/(auth)/login/"
      ]
    },
    "/(main)/(with-sidebar)": {
      "filePath": "(main)/(with-sidebar)/route.tsx",
      "children": [
        "/(main)/(with-sidebar)/dashboard",
        "/(main)/(with-sidebar)/orders",
        "/(main)/(with-sidebar)/services"
      ]
    },
    "/(main)/onboard": {
      "filePath": "(main)/onboard/route.tsx"
    },
    "/(main)/settings": {
      "filePath": "(main)/settings/route.tsx",
      "children": [
        "/(main)/settings/attachments",
        "/(main)/settings/bank-details",
        "/(main)/settings/contact-details",
        "/(main)/settings/holidays",
        "/(main)/settings/operational-details",
        "/(main)/settings/organisation-details",
        "/(main)/settings/role-management",
        "/(main)/settings/user-management",
        "/(main)/settings/working-hours"
      ]
    },
    "/(auth)/login/otp": {
      "filePath": "(auth)/login/otp.tsx",
      "parent": "/(auth)"
    },
    "/(main)/(with-sidebar)/dashboard": {
      "filePath": "(main)/(with-sidebar)/dashboard.tsx",
      "parent": "/(main)/(with-sidebar)"
    },
    "/(main)/(with-sidebar)/orders": {
      "filePath": "(main)/(with-sidebar)/orders.tsx",
      "parent": "/(main)/(with-sidebar)"
    },
    "/(main)/(with-sidebar)/services": {
      "filePath": "(main)/(with-sidebar)/services.tsx",
      "parent": "/(main)/(with-sidebar)"
    },
    "/(main)/settings/attachments": {
      "filePath": "(main)/settings/attachments.tsx",
      "parent": "/(main)/settings"
    },
    "/(main)/settings/bank-details": {
      "filePath": "(main)/settings/bank-details.tsx",
      "parent": "/(main)/settings"
    },
    "/(main)/settings/contact-details": {
      "filePath": "(main)/settings/contact-details.tsx",
      "parent": "/(main)/settings"
    },
    "/(main)/settings/holidays": {
      "filePath": "(main)/settings/holidays.tsx",
      "parent": "/(main)/settings"
    },
    "/(main)/settings/operational-details": {
      "filePath": "(main)/settings/operational-details.tsx",
      "parent": "/(main)/settings"
    },
    "/(main)/settings/organisation-details": {
      "filePath": "(main)/settings/organisation-details.tsx",
      "parent": "/(main)/settings"
    },
    "/(main)/settings/role-management": {
      "filePath": "(main)/settings/role-management.tsx",
      "parent": "/(main)/settings"
    },
    "/(main)/settings/user-management": {
      "filePath": "(main)/settings/user-management.tsx",
      "parent": "/(main)/settings"
    },
    "/(main)/settings/working-hours": {
      "filePath": "(main)/settings/working-hours.tsx",
      "parent": "/(main)/settings"
    },
    "/(auth)/login/": {
      "filePath": "(auth)/login/index.tsx",
      "parent": "/(auth)"
    }
  }
}
ROUTE_MANIFEST_END */
