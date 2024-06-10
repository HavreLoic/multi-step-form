export type CardHeaderType = {
  title: string;
  description: string;
};

export type PlanCardType = {
  image: string;
  alt: string;
  plan: string;
  price: string;
  trailDuration?: string;
};

export type AddOnPlanType = {
  plan: string;
  description: string;
  price: string;
  planRegistration?: string;
};

export type SidebarItemType = {
  number: number;
  step: string;
  item: string;
};

export type ErrorType = {
  statusText?: string | number;
  message?: string;
};
