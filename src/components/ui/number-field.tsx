import * as React from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "@remixicon/react";
import { Button, Input, NumberField } from "react-aria-components";

import { PolymorphicComponentProps } from "@/utils/polymorphic";
import { recursiveCloneChildren } from "@/utils/recursive-clone-children";
import { tv, type VariantProps } from "@/utils/tv";

const NUMBER_FIELD_ROOT_NAME = "NumberFieldRoot";
const NUMBER_FIELD_INPUT_NAME = "NumberFieldInput";
const NUMBER_FIELD_AFFIX_NAME = "NumberFieldAffix";
const NUMBER_FIELD_STEPPER_NAME = "NumberFieldStepper";
const NUMBER_FIELD_INCREMENT_NAME = "NumberFieldIncrement";
const NUMBER_FIELD_DECREMENT_NAME = "NumberFieldDecrement";
const NUMBER_FIELD_STEPPER_ICON_NAME = "NumberFieldStepperIcon";

export const numberFieldVariants = tv({
  slots: {
    root: [
      // base
      "group bg-bg-white-0 text-text-strong-950 shadow-regular-xs relative flex w-full overflow-hidden",
      "transition duration-200 ease-out",
      "divide-stroke-soft-200 divide-x",
      // before
      "before:ring-stroke-soft-200 before:absolute before:inset-0 before:ring-1 before:ring-inset",
      "before:pointer-events-none before:rounded-[inherit]",
      "before:transition before:duration-200 before:ease-out",
      // hover
      "hover:shadow-none",
      "hover:[&:not(&:has(input:focus))]:bg-bg-weak-50",
      // focus
      "has-[input:focus]:shadow-button-important-focus has-[input:focus]:before:ring-stroke-strong-950",
      // disabled
      "has-[input:disabled]:shadow-none has-[input:disabled]:before:ring-transparent",
      "has-[input:disabled]:bg-bg-weak-50 has-[input:disabled]:pointer-events-none",
    ],
    affix: [
      // base
      "bg-bg-white-0 text-paragraph-sm text-text-sub-600 shrink-0",
      "flex items-center justify-center truncate",
      "transition duration-200 ease-out",
      // placeholder state
      "group-has-placeholder-shown:text-text-soft-400",
      // focus state
      "group-has-[input:focus]:group-has-placeholder-shown:text-text-sub-600",
      // disabled
      "group-data-disabled:bg-bg-weak-50 group-data-disabled:text-text-disabled-300",
    ],
    input: [
      "text-paragraph-sm text-text-strong-950 w-full bg-transparent bg-none outline-hidden",
      "transition duration-200 ease-out",
      // placeholder
      "placeholder:text-text-soft-400 placeholder:transition placeholder:duration-200 placeholder:ease-out placeholder:select-none",
      // hover placeholder
      "group-hover/input-wrapper:placeholder:text-text-sub-600",
      // focus
      "focus:outline-hidden",
      // focus placeholder
      "group-has-[input:focus]:placeholder:text-text-sub-600",
      // disabled
      "disabled:text-text-disabled-300 disabled:placeholder:text-text-disabled-300",
    ],
    stepperWrapper: ["bg-bg-white-0 flex flex-col"],
    stepper: [
      "flex basis-1/2 items-center justify-center px-1.5",
      "text-text-sub-600",
      "border-stroke-soft-200 first:border-b",
      "cursor-pointer",
      // disabled
      "disabled:bg-bg-weak-50 disabled:text-text-disabled-300 disabled:cursor-default",
    ],
    icon: [],
  },
  variants: {
    size: {
      medium: {
        root: "rounded-10 h-10",
        input: "px-3",
        icon: "size-4",
      },
      small: {
        root: "h-9 rounded-lg",
        input: "px-2.5",
        icon: "size-4",
      },
      xsmall: {
        root: "h-8 rounded-lg",
        input: "px-2",
        icon: "size-4",
      },
    },
  },
  compoundVariants: [
    //#region affix
    {
      size: "medium",
      class: {
        affix: "px-3",
      },
    },
    {
      size: ["small", "xsmall"],
      class: {
        affix: "px-2.5",
      },
    },
    //#endregion
  ],
  defaultVariants: {
    size: "medium",
  },
});

type NumberFiedSharedProps = VariantProps<typeof numberFieldVariants>;

const NumberFieldRoot = ({
  className,
  size,
  children,
  asChild,
  required,
  disabled,
  ...rest
}: React.ComponentPropsWithoutRef<typeof NumberField> &
  NumberFiedSharedProps & {
    className?: string;
    asChild?: boolean;
    required?: boolean;
    disabled?: boolean;
  }) => {
  const uniqueId = React.useId();

  const { root } = numberFieldVariants({
    size,
  });

  const sharedProps: NumberFiedSharedProps = {
    size,
  };

  const extendedChildren = recursiveCloneChildren(
    children as React.ReactElement[],
    sharedProps,
    [
      NUMBER_FIELD_INPUT_NAME,
      NUMBER_FIELD_AFFIX_NAME,
      NUMBER_FIELD_STEPPER_ICON_NAME,
      NUMBER_FIELD_STEPPER_NAME,
      NUMBER_FIELD_INCREMENT_NAME,
      NUMBER_FIELD_DECREMENT_NAME,
    ],
    uniqueId,
    asChild,
  );

  return (
    <NumberField
      isRequired={required}
      isDisabled={disabled}
      className={root({ class: className })}
      {...rest}
    >
      {extendedChildren}
    </NumberField>
  );
};
NumberFieldRoot.displayName = NUMBER_FIELD_ROOT_NAME;

const NumberFieldAffix = ({
  className,
  size,
  ...rest
}: React.HTMLAttributes<HTMLSpanElement> & NumberFiedSharedProps) => {
  const { affix } = numberFieldVariants({ size });

  return <span className={affix({ class: className })} {...rest} />;
};
NumberFieldAffix.displayName = NUMBER_FIELD_AFFIX_NAME;

const NumberFieldInput = ({
  className,
  size,
  ...rest
}: React.ComponentPropsWithRef<typeof Input> &
  NumberFiedSharedProps & {
    className?: string;
  }) => {
  const { input } = numberFieldVariants({ size });

  return <Input className={input({ class: className })} {...rest} />;
};
NumberFieldInput.displayName = NUMBER_FIELD_INPUT_NAME;

function NumberFieldStepperIcon<T extends React.ElementType = "div">({
  size,
  as,
  className,
  ...rest
}: PolymorphicComponentProps<T, NumberFiedSharedProps>) {
  const Component = as || "div";
  const { icon } = numberFieldVariants({ size });

  return <Component className={icon({ class: className })} {...rest} />;
}
NumberFieldStepperIcon.displayName = NUMBER_FIELD_STEPPER_ICON_NAME;

const NumberFieldIncrementStepper = ({
  className,
  size,
  children,
  ...rest
}: React.ComponentPropsWithRef<typeof Button> &
  NumberFiedSharedProps & { className?: string }) => {
  const { stepper } = numberFieldVariants({ size });

  return (
    <Button
      slot="increment"
      className={stepper({ class: className })}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <NumberFieldStepperIcon as={RiArrowUpSLine} size={size} />
      )}
    </Button>
  );
};
NumberFieldIncrementStepper.displayName = NUMBER_FIELD_INCREMENT_NAME;

const NumberFieldDecrementStepper = ({
  className,
  size,
  children,
  ...rest
}: React.ComponentPropsWithRef<typeof Button> &
  NumberFiedSharedProps & { className?: string }) => {
  const { stepper } = numberFieldVariants({ size });

  return (
    <Button
      slot="decrement"
      className={stepper({ class: className })}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <NumberFieldStepperIcon as={RiArrowDownSLine} size={size} />
      )}
    </Button>
  );
};
NumberFieldDecrementStepper.displayName = NUMBER_FIELD_DECREMENT_NAME;

const NumberFieldStepper = ({
  className,
  size,
  ...rest
}: React.InputHTMLAttributes<HTMLDivElement> &
  NumberFiedSharedProps & {
    className?: string;
  }) => {
  const { stepperWrapper } = numberFieldVariants({ size });

  return <div className={stepperWrapper({ class: className })} {...rest} />;
};
NumberFieldStepper.displayName = NUMBER_FIELD_STEPPER_NAME;

export {
  NumberFieldRoot as Root,
  NumberFieldInput as Input,
  NumberFieldAffix as Affix,
  NumberFieldStepper as Stepper,
  NumberFieldIncrementStepper as Increment,
  NumberFieldDecrementStepper as Decrement,
  NumberFieldStepperIcon as StepperIcon,
};
