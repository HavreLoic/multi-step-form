import { create } from "zustand";
import { Inputs } from "../UI";

interface PersonalInfoStoreType {
  setOnSubmitPersonalInfo: (data: Inputs) => void;
}
// const onSubmit = (data: Inputs) => console.log(data);
export const useStepsFormSubmissionStore = create<PersonalInfoStoreType>()(
  () => ({
    setOnSubmitPersonalInfo: (data: Inputs) => console.log(data),
  })
);
