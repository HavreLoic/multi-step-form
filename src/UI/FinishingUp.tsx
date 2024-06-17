import { Link } from "react-router-dom"
import { CardHeader, StepsButtons } from "../Components"
import { useAddOnStore, useSelectPlanStore, useStepsStore } from "../Store";

export const FinishingUp = () => {
    const { setToNextStep, setCurrentPage } = useStepsStore();
    const { planName, planPrice, isChecked } = useSelectPlanStore();
    const {
        onlineService,
        largerStorage,
        customizableProfile,
        customizableProfilePrice,
        largerStoragePrice,
        onlineServicePrice,
        onlineServiceIsChecked,
        largerStorageIsChecked,
        customizableProfileIsChecked
    } = useAddOnStore();

    const selectedAddons = [
        {
            name: onlineService,
            price: onlineServicePrice,
            checkMark: onlineServiceIsChecked,
        },
        {
            name: largerStorage,
            price: largerStoragePrice,
            checkMark: largerStorageIsChecked,
        },
        {
            name: customizableProfile,
            price: customizableProfilePrice,
            checkMark: customizableProfileIsChecked,
        },
    ]

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
                        <p className="text-marine-blue font-semibold text-[1.125rem]">{planName} ({isChecked ? "Yearly" : "Monthly"})</p>
                        <p className="text-cool-gray underline cursor-pointer">
                            <Link to={"/select-plan"} onClick={onClickChangeStep}>
                                Change
                            </Link>
                        </p>
                    </div>
                    <p className="text-marine-blue font-semibold text-[1.125rem]">${planPrice}{isChecked && 0}/{isChecked ? "yr" : "mo"}</p>
                </div>

                <div className="border-[1px] w-[90%] m-auto mb-3"></div>

                {/* Addons | Idea: map*/}
                {selectedAddons.map(({ name, price, checkMark }, index: number) => (
                    <div key={index} className="flex justify-between mb-5">
                        {checkMark && (
                            <>
                                <p className="text-cool-gray">{name}</p>
                                <p className="text-marine-blue">${price}{isChecked && 0}/{isChecked ? "yr" : "mo"}</p>
                            </>
                        )}

                    </div>
                ))}

                {/* Total(Timeframe) */}
                <div className="flex justify-between">
                    <p className="text-cool-gray">Total (per month)</p>
                    <p className="text-[1.2rem] text-purplish-blue">${planPrice + onlineServicePrice + largerStoragePrice + customizableProfilePrice}{isChecked && 0}/{isChecked ? "yr" : "mo"}</p>
                </div>
            </div>
            <StepsButtons />
        </div>
    )
}
