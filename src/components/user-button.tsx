import {
  RiAddLine,
  RiArrowDownSLine,
  RiLayoutGridLine,
  RiLogoutBoxRLine,
  RiMoonLine,
  RiPulseLine,
  RiSettings2Line,
} from "@remixicon/react";
import { Link } from "@tanstack/react-router";

import IconRemove from "@/assets/icons/icon-remove.svg";
import IconVerifiedFill from "@/assets/icons/icon-verified-fill.svg";
import { InputTransparent } from "./input-transparent";

import { cn, cnExt } from "@/utils/cn";

import { useTheme } from "@/context/theme";

import { DashedDivider } from "@/components/dashed-divider";
import * as Select from "@/components/select-transparent";
import * as Avatar from "@/components/ui/avatar";
import * as Button from "@/components/ui/button";
import * as Divider from "@/components/ui/divider";
import * as Dropdown from "@/components/ui/dropdown";
import * as Modal from "@/components/ui/modal";
import * as Switch from "@/components/ui/switch";

export function UserButton({ className }: { className?: string }) {
  return (
    <Modal.Root>
      <Modal.Trigger
        className={cnExt(
          "flex w-full items-center gap-3 whitespace-nowrap rounded-10 p-3 text-left outline-none hover:bg-bg-weak-50 focus:outline-none",
          className,
        )}
      >
        <Avatar.Root size="40" color="blue">
          <Avatar.Image src="/images/avatar/illustration/arthur.png" alt="" />
        </Avatar.Root>
        <div
          className="flex w-[172px] shrink-0 items-center gap-3"
          data-hide-collapsed
        >
          <div className="flex-1 space-y-1">
            <div className="flex items-center gap-0.5 text-label-sm">
              Arthur Taylor
            </div>
            <div className="text-paragraph-xs text-text-sub-600">
              arthur@alignui.com
            </div>
          </div>
        </div>
      </Modal.Trigger>
      <Modal.Content
        showClose={false}
        overlayClassName="items-center justify-center"
        className="max-w-[724px]"
      >
        <div className="flex w-full flex-col gap-3.5 px-5 py-4 sm:flex-row sm:items-center border-b border-stroke-soft-200">
          <div className="flex-1">
            <div className="text-label-md text-text-strong-950">
              Account Settings
            </div>
            <div className="text-paragraph-sm text-text-sub-600">
              Manage and collaborate on your account settings
            </div>
          </div>
          <div className="grid grid-cols-2 items-center gap-3 sm:flex">
            <Modal.Close asChild>
              <Button.Root
                variant="neutral"
                mode="stroke"
                size="small"
                className="w-full"
              >
                Discard
              </Button.Root>
            </Modal.Close>
            <Button.Root size="small" className="w-full">
              Save Changes
            </Button.Root>
          </div>
        </div>
        <Modal.Body className="flex flex-col gap-5">
          <div className="grid items-center gap-4 sm:grid-cols-[minmax(0,1fr)_312px] sm:gap-6">
            <div>
              <div className="text-label-sm text-text-strong-950">
                Profile Photo
              </div>
              <div className="mt-1 text-paragraph-xs text-text-sub-600">
                Min 400x400px, PNG or JPEG formats.
              </div>
            </div>
            <div className="flex items-center gap-5">
              <Avatar.Root size="40">
                <Avatar.Image src="/images/avatar/illustration/james.png" />
                <Avatar.Indicator position="top">
                  <IconRemove />
                </Avatar.Indicator>
              </Avatar.Root>
              <Button.Root variant="neutral" mode="stroke" size="xxsmall">
                Change
              </Button.Root>
            </div>
          </div>
          <DashedDivider />
          <div className="grid items-center gap-4 sm:grid-cols-[minmax(0,1fr)_312px] sm:gap-6">
            <div>
              <div className="text-label-sm text-text-strong-950">
                Full Name
              </div>
              <div className="mt-1 text-paragraph-xs text-text-sub-600">
                Your name will be visible to your contacts.
              </div>
            </div>
            <InputTransparent value="James Brown" />
            {/* <EditableInput value="James Brown" /> */}
          </div>
          <DashedDivider />
          <div className="grid items-center gap-4 sm:grid-cols-[minmax(0,1fr)_312px] sm:gap-6">
            <div>
              <div className="text-label-sm text-text-strong-950">
                Email Address
              </div>
              <div className="mt-1 text-paragraph-xs text-text-sub-600">
                Business email address recommended.
              </div>
            </div>
            <InputTransparent value="james@alignui.com" />
            {/* <EditableInput value="james@alignui.com" /> */}
          </div>
          <DashedDivider />
          <div className="grid items-center gap-4 sm:grid-cols-[minmax(0,1fr)_312px] sm:gap-6">
            <div>
              <div className="text-label-sm text-text-strong-950">
                Phone Number
              </div>
              <div className="mt-1 text-paragraph-xs text-text-sub-600">
                Business phone number recommended.
              </div>
            </div>
            <InputTransparent value="+1 (012) 345-6789" />
            {/* <EditableInput value="+1 (012) 345-6789" /> */}
          </div>
          <DashedDivider />
          <div className="grid items-center gap-4 sm:grid-cols-[minmax(0,1fr)_312px] sm:gap-6">
            <div>
              <div className="text-label-sm text-text-strong-950">
                Timezone and Format
              </div>
              <div className="mt-1 text-paragraph-xs text-text-sub-600">
                Choose your timezone and preferred format.
              </div>
            </div>
            <Select.Root defaultValue="europe-istanbul">
              <Select.Trigger>
                <Select.Value placeholder="Select timezone" />
              </Select.Trigger>
              <Select.Content>
                <Select.Item value="pacific-honolulu">
                  (GMT-10:00) Hawaii
                </Select.Item>
                <Select.Item value="america-los_angeles">
                  (GMT-07:00) Pacific Time
                </Select.Item>
                <Select.Item value="america-denver">
                  (GMT-06:00) Mountain Time
                </Select.Item>
                <Select.Item value="america-chicago">
                  (GMT-05:00) Central Time
                </Select.Item>
                <Select.Item value="america-new_york">
                  (GMT-04:00) Eastern Time
                </Select.Item>
                <Select.Item value="europe-london">
                  (GMT+01:00) London
                </Select.Item>
                <Select.Item value="europe-paris">
                  (GMT+02:00) Paris
                </Select.Item>
                <Select.Item value="europe-istanbul">
                  (GMT+03:00) Istanbul
                </Select.Item>
                <Select.Item value="asia-dubai">(GMT+04:00) Dubai</Select.Item>
                <Select.Item value="asia-singapore">
                  (GMT+08:00) Singapore
                </Select.Item>
                <Select.Item value="asia-tokyo">(GMT+09:00) Tokyo</Select.Item>
                <Select.Item value="pacific-sydney">
                  (GMT+11:00) Sydney
                </Select.Item>
              </Select.Content>
            </Select.Root>
          </div>
          <DashedDivider />
          <div className="grid items-center gap-4 sm:grid-cols-[minmax(0,1fr)_312px] sm:gap-6">
            <div>
              <div className="text-label-sm text-text-strong-950">
                Date Format
              </div>
              <div className="mt-1 text-paragraph-xs text-text-sub-600">
                Choose your preferred date format.
              </div>
            </div>
            <Select.Root defaultValue="dd-mm-yyyy">
              <Select.Trigger>
                <Select.Value placeholder="Select date format" />
              </Select.Trigger>
              <Select.Content className="w-full">
                <Select.Item value="dd-mm-yyyy">DD/MM/YYYY</Select.Item>
                <Select.Item value="mm-dd-yyyy">MM/DD/YYYY</Select.Item>
                <Select.Item value="yyyy-mm-dd">YYYY/MM/DD</Select.Item>
                <Select.Item value="dd-mmm-yyyy">DD MMM YYYY</Select.Item>
                <Select.Item value="mmm-dd-yyyy">MMM DD, YYYY</Select.Item>
              </Select.Content>
            </Select.Root>
          </div>
          <DashedDivider />
          <div className="grid items-center gap-4 sm:grid-cols-[minmax(0,1fr)_312px] sm:gap-6">
            <div>
              <div className="text-label-sm text-text-strong-950">
                Time Format
              </div>
              <div className="mt-1 text-paragraph-xs text-text-sub-600">
                Choose your preferred time format.
              </div>
            </div>
            <Select.Root defaultValue="12">
              <Select.Trigger>
                <Select.Value placeholder="Select date format" />
              </Select.Trigger>
              <Select.Content className="w-full">
                <Select.Item value="12">12-hour</Select.Item>
                <Select.Item value="24">24-hour</Select.Item>
              </Select.Content>
            </Select.Root>
          </div>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
}

// export function UserButton({ className }: { className?: string }) {
//   const { theme, setTheme } = useTheme();

//   const isDarkMode = theme === "dark";

//   function toggleThemeHandler(e: Event) {
//     e.preventDefault();

//     let newTheme = "system";

//     if (theme === "light") newTheme = "dark";
//     if (theme === "dark") newTheme = "light";

//     if (theme === "system") {
//       newTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
//         ? "dark"
//         : "light";
//     }

//     setTheme(newTheme as "light" | "dark" | "system");
//   }

//   return (
//     <Dropdown.Root>
//       <Dropdown.Trigger
//         className={cnExt(
//           "flex w-full items-center gap-3 whitespace-nowrap rounded-10 p-3 text-left outline-none hover:bg-bg-weak-50 focus:outline-none",
//           className,
//         )}
//       >
//         <Avatar.Root size="40" color="blue">
//           <Avatar.Image src="/images/avatar/illustration/arthur.png" alt="" />
//         </Avatar.Root>
//         <div
//           className="flex w-[172px] shrink-0 items-center gap-3"
//           data-hide-collapsed
//         >
//           <div className="flex-1 space-y-1">
//             <div className="flex items-center gap-0.5 text-label-sm">
//               Arthur Taylor
//               <IconVerifiedFill className="size-5 text-verified-base" />
//             </div>
//             <div className="text-paragraph-xs text-text-sub-600">
//               arthur@alignui.com
//             </div>
//           </div>

//           <div className="flex size-6 items-center justify-center rounded-md">
//             <RiArrowRightSLine className="size-5 text-text-sub-600" />
//           </div>
//         </div>
//       </Dropdown.Trigger>
//       <Dropdown.Content side="right" sideOffset={24} align="end">
//         <Dropdown.Item onSelect={toggleThemeHandler}>
//           <Dropdown.ItemIcon as={RiMoonLine} />
//           Dark Mode
//           <span className="flex-1" />
//           <Switch.Root checked={isDarkMode} />
//         </Dropdown.Item>
//         <Divider.Root variant="line-spacing" />
//         <Dropdown.Group>
//           <Dropdown.Item>
//             <Dropdown.ItemIcon as={RiPulseLine} />
//             Activity
//           </Dropdown.Item>
//           <Dropdown.Item>
//             <Dropdown.ItemIcon as={RiLayoutGridLine} />
//             Integrations
//           </Dropdown.Item>
//           <Dropdown.Item>
//             <Dropdown.ItemIcon as={RiSettings2Line} />
//             Settings
//           </Dropdown.Item>
//         </Dropdown.Group>
//         <Divider.Root variant="line-spacing" />
//         <Dropdown.Group>
//           <Dropdown.Item>
//             <Dropdown.ItemIcon as={RiAddLine} />
//             Add Account
//           </Dropdown.Item>
//           <Dropdown.Item asChild>
//             <Link to="/login">
//               <Dropdown.ItemIcon as={RiLogoutBoxRLine} />
//               Logout
//             </Link>
//           </Dropdown.Item>
//         </Dropdown.Group>
//         <div className="p-2 text-paragraph-sm text-text-soft-400">
//           v.1.0.0 · Terms & Conditions
//         </div>
//       </Dropdown.Content>
//     </Dropdown.Root>
//   );
// }

export function UserButtonMobile({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  const isDarkMode = theme === "dark";

  function toggleThemeHandler(e: Event) {
    e.preventDefault();

    let newTheme = "system";

    if (theme === "light") newTheme = "dark";
    if (theme === "dark") newTheme = "light";

    if (theme === "system") {
      newTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }

    setTheme(newTheme as "light" | "dark" | "system");
  }

  return (
    <Dropdown.Root modal={false}>
      <Dropdown.Trigger
        className={cnExt(
          "group flex w-full items-center gap-3 whitespace-nowrap rounded-10 p-3 text-left outline-none hover:bg-bg-weak-50 focus:outline-none",
          className,
        )}
      >
        <Avatar.Root size="48" color="blue">
          <Avatar.Image src="/images/avatar/illustration/arthur.png" alt="" />
        </Avatar.Root>
        <div className="flex-1 space-y-1">
          <div className="flex items-center gap-0.5 text-label-md">
            Arthur Taylor
            <IconVerifiedFill className="size-5 text-verified-base" />
          </div>
          <div className="text-paragraph-sm text-text-sub-600">
            arthur@alignui.com
          </div>
        </div>
        <div
          className={cn(
            "flex size-6 items-center justify-center rounded-md border border-stroke-soft-200 bg-bg-white-0 text-text-sub-600 shadow-regular-xs",
            // open
            "group-data-[state=open]:bg-bg-strong-950 group-data-[state=open]:text-text-white-0 group-data-[state=open]:shadow-none",
          )}
        >
          <RiArrowDownSLine className="size-5 group-data-[state=open]:-rotate-180" />
        </div>
      </Dropdown.Trigger>
      <Dropdown.Content side="top" align="end">
        <Dropdown.Item onSelect={toggleThemeHandler}>
          <Dropdown.ItemIcon as={RiMoonLine} />
          Dark Mode
          <span className="flex-1" />
          <Switch.Root checked={isDarkMode} />
        </Dropdown.Item>
        <Divider.Root variant="line-spacing" />
        <Dropdown.Group>
          <Dropdown.Item>
            <Dropdown.ItemIcon as={RiPulseLine} />
            Activity
          </Dropdown.Item>
          <Dropdown.Item>
            <Dropdown.ItemIcon as={RiLayoutGridLine} />
            Integrations
          </Dropdown.Item>
          <Dropdown.Item>
            <Dropdown.ItemIcon as={RiSettings2Line} />
            Settings
          </Dropdown.Item>
        </Dropdown.Group>
        <Divider.Root variant="line-spacing" />
        <Dropdown.Group>
          <Dropdown.Item>
            <Dropdown.ItemIcon as={RiAddLine} />
            Add Account
          </Dropdown.Item>
          <Dropdown.Item asChild>
            <Link to="/login">
              <Dropdown.ItemIcon as={RiLogoutBoxRLine} />
              Logout
            </Link>
          </Dropdown.Item>
        </Dropdown.Group>
        <div className="p-2 text-paragraph-sm text-text-soft-400">
          v.1.5.69 · Terms & Conditions
        </div>
      </Dropdown.Content>
    </Dropdown.Root>
  );
}
