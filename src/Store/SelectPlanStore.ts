import { create } from "zustand";

type SelectPlanStoreType = {
  isChecked: boolean;
  planName: string;
  planPrice: number;
  setPlanName: (plan: string) => void;
  setPlanPrice: (planPrice: number) => void;
  setIsChecked: (isChecked: boolean) => void;
};

export const useSelectPlanStore = create<SelectPlanStoreType>()((set) => ({
  isChecked: false,
  planName: "Arcade",
  planPrice: 9,
  setPlanName: (planName) => set(() => ({ planName })),
  setPlanPrice: (planPrice) => set(() => ({ planPrice })),
  setIsChecked: (isChecked) => set(() => ({ isChecked })),
}));
