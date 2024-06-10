import { create } from "zustand";
import { sideBarItems } from "../data";

interface StepsStore {
  currentStep: number;
  currentPage: string;
  setToNextStep: (step: number) => void;
  setToPrevStep: (step: number) => void;
  setCurrentPage: (page: string) => void;
}

export const useStepsStore = create<StepsStore>((set) => ({
  currentStep: 0,
  currentPage: sideBarItems[0].link,
  setToNextStep: (step: number) => set(() => ({ currentStep: step + 1 })),
  setToPrevStep: (step: number) => set(() => ({ currentStep: step - 1 })),
  setCurrentPage: (page: string) => set(() => ({ currentPage: page })),
}));
