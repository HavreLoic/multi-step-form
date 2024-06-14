import { Link } from "react-router-dom"
import { CardHeader, StepsButtons } from "../Components"
import { useStepsStore } from "../Store";

export const FinishingUp = () => {
    const { setToNextStep, setCurrentPage } = useStepsStore();

    const onClickChangeStep = () => {
        setToNextStep(0);
        setCurrentPage("/select-plan");
    }

    return (
        <div>
            <CardHeader
                title=" Finishing up"
                description="Double-check everything looks OK before confirming."
            />

            <div className="p-5 bg-alabaster rounded-sm">
                {/* Plan(Timeframe) */}
                <div className="flex justify-between mb-3">
                    <div>
                        <p className="text-marine-blue font-semibold text-[1.125rem]">Arcade (Monthly)</p>
                        <p className="text-cool-gray underline cursor-pointer">
                            <Link to={"/select-plan"} onClick={onClickChangeStep}>
                                Change
                            </Link>
                        </p>
                    </div>
                    <p className="text-marine-blue font-semibold text-[1.125rem]">$9/mo</p>
                </div>

                <div className="border-[1px] w-[90%] m-auto mb-3"></div>

                {/* Addons | Idea: map*/}
                <div className="flex justify-between mb-5">
                    <p className="text-cool-gray">Online service</p>
                    <p className="text-marine-blue">+$1/mo</p>
                </div>

                {/* Total(Timeframe) */}
                <div className="flex justify-between">
                    <p className="text-cool-gray">Total (per month)</p>
                    <p className="text-[1.2rem] text-purplish-blue">$12/mo</p>
                </div>
            </div>
            <StepsButtons />
        </div>
    )
}
