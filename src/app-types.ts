export type CardHeaderType = {
  title: string;
  description: string;
};

export type PlanCardType = {
  image: string;
  alt: string;
  plan: string;
  price: number;
  trailDuration?: string;
};

export type AddOnPlanType = {
  plan: string;
  description: string;
  price: number;
  planRegistration?: "onlineService" | "largerStorage" | "customizableProfile";
};

export type SidebarItemType = {
  number: number;
  step: string;
  item: string;
};

export type NewSidebarItemType = SidebarItemType & {
  link: string;
};

export type ErrorType = {
  statusText?: string | number;
  message?: string;
};

export type FormNextButtonType = {
  currentStep: number;
  currentPage: string;
  onClickNextStep: () => void;
};

export type Inputs = {
  name: string;
  email: string;
  phone: number;
};

export type SelectedAddonsType = {
  name: string;
  price: number;
};
