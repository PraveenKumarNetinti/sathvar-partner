import { Store } from "@tanstack/react-store";

export const FLOW_STEPS = [
  { label: "Organisation Details", indicator: "1" },
  { label: "Contact Details", indicator: "2" },
  { label: "Operational Details", indicator: "3" },
  { label: "Bank Details", indicator: "4" },
  { label: "Working Hours", indicator: "5" },
  { label: "Holidays", indicator: "6" },
  { label: "Attachments", indicator: "7" },
];

export const activeStepStore = new Store(1);

export const MAX_STEP = FLOW_STEPS.length - 1;
export const MIN_STEP = 0;

export const setActiveStep = (value: number) => {
  activeStepStore.setState(() => value);
};

export const goToPrevStep = () => {
  activeStepStore.setState((state) => {
    return Math.max(state - 1, MIN_STEP);
  });
};

export const goToNextStep = () => {
  activeStepStore.setState((state) => {
    return Math.min(state + 1, MAX_STEP);
  });
};
