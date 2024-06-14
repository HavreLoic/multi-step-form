import { create } from "zustand";

type SelectPlanStoreType = {
  isChecked: boolean;
  planName: string;
  planPrice: string;
  setPlanName: (plan: string) => void;
  setPlanPrice: (planPrice: string) => void;
  setIsChecked: (isChecked: boolean) => void;
};

export const useSelectPlanStore = create<SelectPlanStoreType>()((set) => ({
  isChecked: false,
  planName: "",
  planPrice: "",
  setPlanName: (planName) => set(() => ({ planName })),
  setPlanPrice: (planPrice) => set(() => ({ planPrice })),
  setIsChecked: (isChecked) => set(() => ({ isChecked })),
}));
