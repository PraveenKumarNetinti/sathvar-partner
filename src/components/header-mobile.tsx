import { Link } from "@tanstack/react-router";

import MobileMenu from "./mobile-menu";

import NotificationButton from "@/components/notification-button";
import { SearchMenuButton } from "@/components/search";

export default function HeaderMobile() {
  return (
    <div className="flex h-[60px] w-full items-center justify-between border-b border-stroke-soft-200 px-4 lg:hidden">
      <Link to="/" className="shrink-0">
        <img src="/images/placeholder/apex.svg" alt="" className="size-9" />
      </Link>

      <div className="flex gap-3">
        <SearchMenuButton />

        <NotificationButton />

        <div className="flex w-1 shrink-0 items-center before:h-full before:w-px before:bg-stroke-soft-200" />

        <MobileMenu />
      </div>
    </div>
  );
}
