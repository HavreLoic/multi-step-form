import { useStepsStore } from "../Store";

export const useFormNextStep = () => {
  const {
    currentStep,
    newSideBarItems,
    setToNextStep,
    setToPrevStep,
    setCurrentPage,
  } = useStepsStore();

  const onClickNextStep = () => {
    setToNextStep(currentStep);
    setCurrentPage(newSideBarItems[currentStep + 1].link);
  };

  const onClickPrevStep = () => {
    setToPrevStep(currentStep);
    setCurrentPage(newSideBarItems[currentStep - 1].link);
  };

  return {
    onClickNextStep,
    onClickPrevStep,
  };
};
