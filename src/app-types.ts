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
};
