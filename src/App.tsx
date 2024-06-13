import {
  Sidebar,
} from "./UI";
import { useStepsStore } from "./Store";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const { currentStep, currentPage, newSideBarItems, setNewSideBarItems, } = useStepsStore();
  const navigate = useNavigate();
  console.log("currentStep ", currentStep, "currentPage ", currentPage);

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
  }, [])


  useEffect(() => {
    navigate(currentPage)
  }, [currentPage])


  return (
    <div className="md:grid md:grid-cols-[25%_75%] md:p-5 xs:grid-cols-[1]">
      <Sidebar />

      <div className="md:pl-[6rem] md:pr-[15rem] md:pt-10 md:pb-5 xs:px-[3rem] xs:pt-5 xs:pb-2.5">
        <Outlet />
      </div>
    </div>
  )
}

export default App
