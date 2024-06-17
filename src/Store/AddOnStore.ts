import { create } from "zustand";

type AddOnStoreType = {
  onlineService: string;
  onlineServiceIsChecked: boolean;
  onlineServicePrice: number;
  largerStorage: string;
  largerStorageIsChecked: boolean;
  largerStoragePrice: number;
  customizableProfile: string;
  customizableProfileIsChecked: boolean;
  customizableProfilePrice: number;
  setOnlineService: (onlineService: string) => void;
  setOnlineServiceIsChecked: (onlineServiceIsChecked: boolean) => void;
  setOnlineServicePrice: (onlineServicePrice: number) => void;
  setLargerStorage: (largerStorage: string) => void;
  setLargerStorageIsChecked: (largerStorageIsChecked: boolean) => void;
  setLargerStoragePrice: (largerStoragePrice: number) => void;
  setCustomizableProfile: (customizableProfile: string) => void;
  setCustomizableProfileIsChecked: (
    customizableProfileIsChecked: boolean
  ) => void;
  setCustomizableProfilePrice: (customizableProfilePrice: number) => void;
};

export const useAddOnStore = create<AddOnStoreType>()((set) => ({
  onlineService: "",
  onlineServiceIsChecked: false,
  onlineServicePrice: 0,
  largerStorage: "",
  largerStorageIsChecked: false,
  largerStoragePrice: 0,
  customizableProfile: "",
  customizableProfileIsChecked: false,
  customizableProfilePrice: 0,
  setOnlineService: (onlineService) => set(() => ({ onlineService })),
  setOnlineServicePrice: (onlineServicePrice) =>
    set(() => ({ onlineServicePrice })),
  setLargerStorage: (largerStorage) => set(() => ({ largerStorage })),
  setLargerStoragePrice: (largerStoragePrice) =>
    set(() => ({ largerStoragePrice })),
  setCustomizableProfile: (customizableProfile) =>
    set(() => ({ customizableProfile })),
  setCustomizableProfilePrice: (customizableProfilePrice) =>
    set(() => ({ customizableProfilePrice })),
  setOnlineServiceIsChecked: (onlineServiceIsChecked) =>
    set(() => ({ onlineServiceIsChecked })),
  setLargerStorageIsChecked: (largerStorageIsChecked) =>
    set(() => ({ largerStorageIsChecked })),
  setCustomizableProfileIsChecked: (customizableProfileIsChecked) =>
    set(() => ({ customizableProfileIsChecked })),
}));
