import { create } from "zustand";
import { sideBarItems } from "../data";
import { NewSidebarItemType } from "../app-types";

interface StepsStore {
  currentStep: number;
  currentPage: string;
  newSideBarItems: NewSidebarItemType[];
  setToNextStep: (step: number) => void;
  setToPrevStep: (step: number) => void;
  setCurrentPage: (page: string) => void;
  setNewSideBarItems: (items: NewSidebarItemType[]) => void;
}

export const useStepsStore = create<StepsStore>((set) => ({
  currentStep: 0,
  currentPage: sideBarItems[0].link,
  newSideBarItems: sideBarItems,
  setToNextStep: (step: number) => set(() => ({ currentStep: step + 1 })),
  setToPrevStep: (step: number) => set(() => ({ currentStep: step - 1 })),
  setCurrentPage: (page: string) => set(() => ({ currentPage: page })),
  setNewSideBarItems: (newSideBarItems: NewSidebarItemType[]) =>
    set(() => ({
      newSideBarItems: newSideBarItems,
    })),
}));
