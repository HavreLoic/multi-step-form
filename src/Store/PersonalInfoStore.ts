import { create } from "zustand";

interface PersonalInfoStoreType {
  name: string;
  email: string;
  phone: string;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setPhone: (phone: string) => void;
}

export const usePersonalInfoStore = create<PersonalInfoStoreType>()((set) => ({
  name: "",
  email: "",
  phone: "",
  setName: (name) => set(() => ({ name: name })),
  setEmail: (email) => set(() => ({ email: email })),
  setPhone: (phone) => set(() => ({ phone: phone })),
}));
