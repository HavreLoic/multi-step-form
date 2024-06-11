import { Button } from "./Components/Button"
import {
  Sidebar,
} from "./UI";
import { useStepsStore } from "./Store";
import { sideBarItems } from "./data";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const { currentStep, currentPage, setToNextStep, setToPrevStep, setCurrentPage } = useStepsStore();
  const navigate = useNavigate();
  const [newSideBarItems, setNewSideBarItems] = useState(sideBarItems)
  console.log("currentStep ", currentStep, "currentPage ", currentPage);

  const onClickNextStep = () => {
    setToNextStep(currentStep);
    setCurrentPage(newSideBarItems[currentStep + 1].link);
  }

  const onClickPrevStep = () => {
    setToPrevStep(currentStep);
    setCurrentPage(newSideBarItems[currentStep - 1].link);
  }

  useEffect(() => {
    setNewSideBarItems([
      ...newSideBarItems,
      {
        number: 5,
        step: "STEP 5",
        item: "THANK YOU",
        link: "/thank-you",
      }
    ])
    navigate(currentPage)
  }, [currentPage])


  return (
    <div className="md:grid md:grid-cols-[25%_75%] md:p-5 xs:grid-cols-[1]">
      <Sidebar />

      <div className="md:pl-[6rem] md:pr-[15rem] md:pt-10 md:pb-5 xs:px-[3rem] xs:pt-5 xs:pb-2.5">
        <Outlet />

        {currentStep <= 3 ?
          <div className="flex justify-between relative h-[5rem]">

            {/* Previous Step Button GOOD*/}
            {currentStep >= 1 && currentStep < 4 ?
              (<div className="xs:pb-2.5 xs:pl-0 md:pb-10 md:pl-[0.4rem] absolute top-[5rem]">
                <p
                  className="text-cool-gray cursor-pointer"
                  onClick={onClickPrevStep}
                >
                  Go Back
                </p>
              </div>) :
              (<div className="absolute top-[5rem]"></div>)
            }

            {/* Next Step Button*/}
            <div className="xs:pb-2.5 xs:pr-12 md:pb-10 md:pr-[0.4rem] absolute top-[5rem] right-0">
              <Link to={currentPage}>
                <Button
                  onClick={onClickNextStep}
                  bgcolor={currentStep <= 2 ? "marine-blue" : "purplish-blue"}
                  text={currentStep <= 2 ? "Next Step" : "Confirm"}
                />
              </Link>
            </div>
          </div>
          :
          <></>
        }
      </div>
    </div>
  )
}

export default App
