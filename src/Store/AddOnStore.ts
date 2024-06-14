import { create } from "zustand";

type AddOnStoreType = {
  onlineService: string;
  onlineServiceIsChecked: boolean;
  onlineServicePrice: string;
  largerStorage: string;
  largerStorageIsChecked: boolean;
  largerStoragePrice: string;
  customizableProfile: string;
  customizableProfileIsChecked: boolean;
  customizableProfilePrice: string;
  setOnlineService: (onlineService: string) => void;
  setOnlineServiceIsChecked: (onlineServiceIsChecked: boolean) => void;
  setOnlineServicePrice: (onlineServicePrice: string) => void;
  setLargerStorage: (largerStorage: string) => void;
  setLargerStorageIsChecked: (largerStorageIsChecked: boolean) => void;
  setLargerStoragePrice: (largerStoragePrice: string) => void;
  setCustomizableProfile: (customizableProfile: string) => void;
  setCustomizableProfileIsChecked: (
    customizableProfileIsChecked: boolean
  ) => void;
  setCustomizableProfilePrice: (customizableProfilePrice: string) => void;
};

export const useAddOnStore = create<AddOnStoreType>()((set) => ({
  onlineService: "",
  onlineServiceIsChecked: false,
  onlineServicePrice: "",
  largerStorage: "",
  largerStorageIsChecked: false,
  largerStoragePrice: "",
  customizableProfile: "",
  customizableProfileIsChecked: false,
  customizableProfilePrice: "",
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
