import {
  RiAttachment2,
  RiContractRightLine,
  RiFilter3Fill,
  RiNotification3Line,
  RiSettings2Line,
} from "@remixicon/react";

import * as TopbarItemButton from "@/components/topbar-item-button";
import * as Avatar from "@/components/ui/avatar";
import * as Badge from "@/components/ui/badge";
import * as Button from "@/components/ui/button";
import * as CompactButton from "@/components/ui/compact-button";
import * as Divider from "@/components/ui/divider";
import * as LinkButton from "@/components/ui/link-button";
import * as Popover from "@/components/ui/popover";
import * as TabMenuHorizontal from "@/components/ui/tab-menu-horizontal";

export default function NotificationButton({
  ...rest
}: React.ComponentPropsWithoutRef<typeof TopbarItemButton.Root>) {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <TopbarItemButton.Root
          hasNotification
          {...rest}
          aria-label="Open Notifications"
        >
          <TopbarItemButton.Icon as={RiNotification3Line} />
        </TopbarItemButton.Root>
      </Popover.Trigger>
      <Popover.Content
        showArrow={false}
        className="rounded-20 w-screen max-w-[calc(100%-36px)] !p-0 shadow-none min-[480px]:max-w-[448px]"
      >
        <TabMenuHorizontal.Root defaultValue="all">
          <div className="flex h-14 items-center justify-between px-5">
            <span className="text-label-md text-text-strong-950">
              Notifications
            </span>
            <LinkButton.Root variant="primary" size="medium">
              Mark all as read
            </LinkButton.Root>
          </div>
          <div className="border-stroke-soft-200 flex items-center justify-between gap-5 border-y px-5">
            <TabMenuHorizontal.List
              className="gap-5 border-y-transparent"
              wrapperClassName="flex-1 -my-px"
            >
              <TabMenuHorizontal.Trigger value="all">
                All
              </TabMenuHorizontal.Trigger>
              <TabMenuHorizontal.Trigger value="inbox">
                Inbox
                <Badge.Root
                  size="small"
                  color="red"
                  variant="filled"
                  square
                  className="-ml-0.5"
                >
                  2
                </Badge.Root>
              </TabMenuHorizontal.Trigger>
              <TabMenuHorizontal.Trigger value="following">
                Following
              </TabMenuHorizontal.Trigger>
              <div
                className="bg-stroke-soft-200 h-5 w-px shrink-0"
                role="separator"
              />
              <TabMenuHorizontal.Trigger value="archived">
                Archived
              </TabMenuHorizontal.Trigger>
            </TabMenuHorizontal.List>
            <CompactButton.Root fullRadius size="large" variant="ghost">
              <CompactButton.Icon as={RiFilter3Fill} />
            </CompactButton.Root>
          </div>

          <div className="p-2">
            <TabMenuHorizontal.Content
              className="data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:slide-in-from-left-2 flex flex-col gap-1 data-[state=active]:duration-300"
              value="all"
            >
              {/* notifiaction item */}
              <div className="text-paragraph-sm text-text-strong-950 flex items-start gap-[15px] rounded-lg p-3">
                <Avatar.Root size="40">
                  <Avatar.Image src="/images/avatar/illustration/wei.png" />
                  <Avatar.Indicator position="top">
                    <Avatar.Status status="busy" />
                  </Avatar.Indicator>
                </Avatar.Root>
                <div className="space-y-1">
                  <div className="text-label-sm text-text-sub-600 [&>strong]:text-text-strong-950 font-normal [&>strong]:font-medium">
                    <strong>Wei Chen</strong> joined to{" "}
                    <strong>Final Presentation</strong>
                  </div>
                  <div className="text-paragraph-xs text-text-sub-600 flex items-center gap-1">
                    <span>8 min ago</span>
                    <span className="px-0.5">∙</span>
                    <div className="flex items-center gap-1">
                      <img
                        src="/images/placeholder/horizon.svg"
                        alt=""
                        className="size-4 shrink-0"
                      />
                      <span>Horizon Shift</span>
                    </div>
                  </div>
                </div>
              </div>

              <Divider.Root variant="line-spacing" />

              {/* notifiaction item */}
              <div className="text-paragraph-sm text-text-strong-950 flex items-start gap-[15px] rounded-lg p-3">
                <Avatar.Root size="40">
                  <Avatar.Image src="/images/avatar/illustration/sophia.png" />
                  <Avatar.Indicator position="top">
                    <Avatar.Status status="busy" />
                  </Avatar.Indicator>
                </Avatar.Root>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="text-label-sm text-text-sub-600 [&>strong]:text-text-strong-950 font-normal [&>strong]:font-medium">
                      <strong>Sophia Williams</strong> invites you{" "}
                      <strong>synergy.fig</strong> file with you
                    </div>
                    <div className="text-paragraph-xs text-text-sub-600 flex items-center gap-1">
                      <span>2 hours ago</span>
                      <span className="px-0.5">∙</span>
                      <div className="flex items-center gap-1">
                        <img
                          src="/images/placeholder/synergy.svg"
                          alt=""
                          className="size-4 shrink-0"
                        />
                        <span>Synergy HR</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2.5">
                    <Button.Root
                      variant="neutral"
                      mode="stroke"
                      size="xsmall"
                      className="px-3.5"
                    >
                      Deny
                    </Button.Root>
                    <Button.Root
                      variant="primary"
                      mode="filled"
                      size="xsmall"
                      className="px-3.5"
                      onClick={() => alert("approve")}
                    >
                      Approve
                    </Button.Root>
                  </div>
                </div>
              </div>

              <Divider.Root variant="line-spacing" />

              {/* notifiaction item */}
              <div className="text-paragraph-sm text-text-strong-950 flex items-start gap-[15px] rounded-lg p-3">
                <Avatar.Root size="40">
                  <Avatar.Image src="/images/avatar/illustration/arthur.png" />
                </Avatar.Root>
                <div className="space-y-3">
                  <div className="space-y-1">
                    <div className="text-label-sm text-text-sub-600 [&>strong]:text-text-strong-950 font-normal [&>strong]:font-medium">
                      <strong>Arthur Taylor</strong> uploaded an{" "}
                      <strong>arthur.csv</strong> file
                    </div>
                    <div className="text-paragraph-xs text-text-sub-600 flex items-center gap-1">
                      <span>3 hours ago</span>
                      <span className="px-0.5">∙</span>
                      <div className="flex items-center gap-1">
                        <img
                          src="/images/placeholder/apex.svg"
                          alt=""
                          className="size-4 shrink-0"
                        />
                        <span>Apex Financial</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2.5">
                    <Button.Root
                      variant="neutral"
                      mode="stroke"
                      size="small"
                      className="text-paragraph-sm"
                    >
                      <Button.Icon as={RiAttachment2} />
                      <div className="flex gap-0.5">
                        arthur.csv
                        <span className="text-paragraph-sm text-text-soft-400">
                          (4mb)
                        </span>
                      </div>
                    </Button.Root>
                  </div>
                </div>
              </div>

              <Divider.Root variant="line-spacing" />

              {/* notifiaction item */}
              <div className="text-paragraph-sm text-text-strong-950 flex items-start gap-[15px] rounded-lg p-3">
                <Avatar.Root size="40">
                  <Avatar.Image src="/images/avatar/illustration/laura.png" />
                </Avatar.Root>
                <div className="space-y-3">
                  <div className="space-y-1">
                    <div className="text-label-sm text-text-sub-600 [&>strong]:text-text-strong-950 font-normal [&>strong]:font-medium">
                      <strong>Laura Perez</strong> commented on your post
                    </div>
                    <div className="text-paragraph-xs text-text-sub-600 flex items-center gap-1">
                      <span>2 days ago</span>
                      <span className="px-0.5">∙</span>
                      <div className="flex items-center gap-1">
                        <img
                          src="/images/placeholder/solaris.svg"
                          alt=""
                          className="size-4 shrink-0"
                        />
                        <span>Solaris</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2.5">
                    <Button.Root
                      variant="neutral"
                      mode="stroke"
                      size="small"
                      className="text-paragraph-sm"
                    >
                      Fantastic! Let&apos;s dive right in 🚀
                    </Button.Root>
                  </div>
                </div>
              </div>
            </TabMenuHorizontal.Content>
            <TabMenuHorizontal.Content
              className="data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:slide-in-from-left-2 flex flex-col gap-1 data-[state=active]:duration-300"
              value="inbox"
            >
              {/* notifiaction item */}
              <div className="text-paragraph-sm text-text-strong-950 flex items-start gap-[15px] rounded-lg p-3">
                <Avatar.Root size="40">
                  <Avatar.Image src="/images/avatar/illustration/wei.png" />
                  <Avatar.Indicator position="top">
                    <Avatar.Status status="busy" />
                  </Avatar.Indicator>
                </Avatar.Root>
                <div className="space-y-1">
                  <div className="text-label-sm text-text-sub-600 [&>strong]:text-text-strong-950 font-normal [&>strong]:font-medium">
                    <strong>Wei Chen</strong> joined to{" "}
                    <strong>Final Presentation</strong>
                  </div>
                  <div className="text-paragraph-xs text-text-sub-600 flex items-center gap-1">
                    <span>8 min ago</span>
                    <span className="px-0.5">∙</span>
                    <div className="flex items-center gap-1">
                      <img
                        src="/images/placeholder/horizon.svg"
                        alt=""
                        className="size-4 shrink-0"
                      />
                      <span>Horizon Shift</span>
                    </div>
                  </div>
                </div>
              </div>

              <Divider.Root variant="line-spacing" />

              {/* notifiaction item */}
              <div className="text-paragraph-sm text-text-strong-950 flex items-start gap-[15px] rounded-lg p-3">
                <Avatar.Root size="40">
                  <Avatar.Image src="/images/avatar/illustration/sophia.png" />
                  <Avatar.Indicator position="top">
                    <Avatar.Status status="busy" />
                  </Avatar.Indicator>
                </Avatar.Root>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="text-label-sm text-text-sub-600 [&>strong]:text-text-strong-950 font-normal [&>strong]:font-medium">
                      <strong>Sophia Williams</strong> invites you{" "}
                      <strong>synergy.fig</strong> file with you
                    </div>
                    <div className="text-paragraph-xs text-text-sub-600 flex items-center gap-1">
                      <span>2 hours ago</span>
                      <span className="px-0.5">∙</span>
                      <div className="flex items-center gap-1">
                        <img
                          src="/images/placeholder/synergy.svg"
                          alt=""
                          className="size-4 shrink-0"
                        />
                        <span>Synergy HR</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2.5">
                    <Button.Root
                      variant="neutral"
                      mode="stroke"
                      size="xsmall"
                      className="px-3.5"
                    >
                      Deny
                    </Button.Root>
                    <Button.Root
                      variant="primary"
                      mode="filled"
                      size="xsmall"
                      className="px-3.5"
                      onClick={() => alert("approve")}
                    >
                      Approve
                    </Button.Root>
                  </div>
                </div>
              </div>
            </TabMenuHorizontal.Content>
            <TabMenuHorizontal.Content
              className="data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:slide-in-from-left-2 flex flex-col gap-1 data-[state=active]:duration-300"
              value="following"
            >
              {/* notifiaction item */}
              <div className="text-paragraph-sm text-text-strong-950 flex items-start gap-[15px] rounded-lg p-3">
                <Avatar.Root size="40">
                  <Avatar.Image src="/images/avatar/illustration/arthur.png" />
                </Avatar.Root>
                <div className="space-y-3">
                  <div className="space-y-1">
                    <div className="text-label-sm text-text-sub-600 [&>strong]:text-text-strong-950 font-normal [&>strong]:font-medium">
                      <strong>Arthur Taylor</strong> uploaded an{" "}
                      <strong>arthur.csv</strong> file
                    </div>
                    <div className="text-paragraph-xs text-text-sub-600 flex items-center gap-1">
                      <span>3 hours ago</span>
                      <span className="px-0.5">∙</span>
                      <div className="flex items-center gap-1">
                        <img
                          src="/images/placeholder/apex.svg"
                          alt=""
                          className="size-4 shrink-0"
                        />
                        <span>Apex Financial</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2.5">
                    <Button.Root
                      variant="neutral"
                      mode="stroke"
                      size="small"
                      className="text-paragraph-sm"
                    >
                      <Button.Icon as={RiAttachment2} />
                      <div className="flex gap-0.5">
                        arthur.csv
                        <span className="text-paragraph-sm text-text-soft-400">
                          (4mb)
                        </span>
                      </div>
                    </Button.Root>
                  </div>
                </div>
              </div>
            </TabMenuHorizontal.Content>
            <TabMenuHorizontal.Content
              className="data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:slide-in-from-left-2 flex flex-col gap-1 data-[state=active]:duration-300"
              value="archived"
            >
              {/* notifiaction item */}
              <div className="text-paragraph-sm text-text-strong-950 flex items-start gap-[15px] rounded-lg p-3">
                <Avatar.Root size="40">
                  <Avatar.Image src="/images/avatar/illustration/laura.png" />
                </Avatar.Root>
                <div className="space-y-3">
                  <div className="space-y-1">
                    <div className="text-label-sm text-text-sub-600 [&>strong]:text-text-strong-950 font-normal [&>strong]:font-medium">
                      <strong>Laura Perez</strong> commented on your post
                    </div>
                    <div className="text-paragraph-xs text-text-sub-600 flex items-center gap-1">
                      <span>2 days ago</span>
                      <span className="px-0.5">∙</span>
                      <div className="flex items-center gap-1">
                        <img
                          src="/images/placeholder/solaris.svg"
                          alt=""
                          className="size-4 shrink-0"
                        />
                        <span>Solaris</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2.5">
                    <Button.Root
                      variant="neutral"
                      mode="stroke"
                      size="small"
                      className="text-paragraph-sm"
                    >
                      Fantastic! Let&apos;s dive right in 🚀
                    </Button.Root>
                  </div>
                </div>
              </div>
            </TabMenuHorizontal.Content>
          </div>

          <div className="border-stroke-soft-200 flex h-12 items-center justify-between border-t px-5">
            <div className="text-paragraph-xs text-text-sub-600 flex items-center gap-2">
              Use
              <div className="ring-inside bg-bg-weak-50 text-text-sub-600 ring-stroke-soft-200 flex size-5 shrink-0 items-center justify-center rounded ring-1">
                <RiContractRightLine className="size-4" />
              </div>
              to navigate
            </div>

            <LinkButton.Root size="small" variant="gray">
              <LinkButton.Icon as={RiSettings2Line} />
              Manage Notification
            </LinkButton.Root>
          </div>
        </TabMenuHorizontal.Root>
      </Popover.Content>
    </Popover.Root>
  );
}
