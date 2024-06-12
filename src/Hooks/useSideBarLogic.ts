import { useEffect, useState } from "react";
import { useStepsStore } from "../Store";
import { sideBarItems } from "../data";
import { useNavigate } from "react-router-dom";

export const useSideBarLogic = () => {
  const navigate = useNavigate();
  const {
    currentStep,
    currentPage,
    setToNextStep,
    setToPrevStep,
    setCurrentPage,
  } = useStepsStore();
  const [newSideBarItems, setNewSideBarItems] = useState(sideBarItems);

  const onClickNextStep = () => {
    setToNextStep(currentStep);
    setCurrentPage(newSideBarItems[currentStep + 1].link);
  };

  const onClickPrevStep = () => {
    setToPrevStep(currentStep);
    setCurrentPage(newSideBarItems[currentStep - 1].link);
  };

  useEffect(() => {
    setNewSideBarItems([
      ...newSideBarItems,
      {
        number: 5,
        step: "STEP 5",
        item: "THANK YOU",
        link: "/thank-you",
      },
    ]);
    navigate(currentPage);
  }, [currentPage]);

  return {
    onClickNextStep,
    onClickPrevStep,
    newSideBarItems,
    currentPage,
    currentStep,
    navigate,
    setNewSideBarItems,
  };
};
