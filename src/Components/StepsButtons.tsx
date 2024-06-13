import { useFormNextStep } from "../Hooks";
import { useStepsStore } from "../Store";
import { Button } from "./Button";

export const StepsButtons = () => {
    const { onClickPrevStep } = useFormNextStep();
    const { currentStep } = useStepsStore();
    return (
        <>
            {currentStep <= 3 ?
                <div className="flex justify-between">

                    {/* Previous Step Button GOOD*/}
                    {currentStep >= 1 && currentStep < 4 ?
                        (<div className="xs:pb-2.5 xs:pl-0 md:pb-10 md:pl-[0.4rem]">
                            <p
                                className="text-cool-gray cursor-pointer"
                                onClick={onClickPrevStep}
                            >
                                Go Back
                            </p>
                        </div>) :
                        (<div className=""></div>)
                    }

                    {/* Next Step Button*/}
                    <div>
                        <Button
                            bgcolor={currentStep <= 2 ? "marine-blue" : "purplish-blue"}
                            text={currentStep <= 2 ? "Next Step" : "Confirm"}
                        />
                    </div>
                </div>
                :
                <></>
            }
        </>
    )
}
