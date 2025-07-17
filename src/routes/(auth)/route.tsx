import { createFileRoute, Outlet } from "@tanstack/react-router";

import { LanguageSelect } from "@/components/language-select";

export const Route = createFileRoute("/(auth)")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="items-cente flex min-h-screen flex-col ">
      <AuthHeader />
      <div className="relative isolate flex w-full flex-1 flex-col items-center justify-center">
        <img
          src="/images/auth-pattern.svg"
          alt=""
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 w-full max-w-[1140px] -translate-x-1/2 -translate-y-1/2 object-contain"
          width="824"
          height="318"
        />
        <Outlet />
      </div>
      <AuthFooter />
    </div>
  );
}

function AuthHeader() {
  return (
    <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between p-6">
      <img src="/images/brand/sathvar-logo.svg" alt="" className="w-24 shrink-0" />

      <div className="flex items-center gap-1.5">
        {/* <div className="text-paragraph-sm text-text-sub-600">{action.text}</div> */}
        {/* <LinkButton.Root variant="primary" size="medium" underline asChild>
          <Link href={action.link.href}>{action.link.label}</Link>
        </LinkButton.Root> */}
      </div>
    </div>
  );
}

function AuthFooter() {
  return (
    <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between p-6">
      <div className="text-paragraph-sm text-text-sub-600">
        © 2025 Sathvar
      </div>

      <LanguageSelect />
    </div>
  );
}
