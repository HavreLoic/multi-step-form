import { useSelectPlanStore } from "../Store";
import { AddOnPlanType } from "../app-types"

type AddOnPlanPropsType = AddOnPlanType & {
    children: React.ReactNode;
}

export const AddOnPlan = ({ plan, description, price, children }: AddOnPlanPropsType) => {
    const { isChecked } = useSelectPlanStore();

    return (
        <div className="p-5 grid grid-cols-[1fr_2fr_1fr] items-center border-[1.99px] border-purplish-blue rounded-[5px] mb-5">
            <div className="flex items-center mb-4  rounded-[5px]">
                {children}
            </div>

            <div className="">
                <p className="text-marine-blue font-semibold text-[1.19rem]">{plan}</p>
                <p className="text-cool-gray">{description}</p>
            </div>

            <div className="text-purplish-blue text-[1.18rem] text-end">
                +${price}{isChecked && 0}/{isChecked ? "yr" : "mo"}
            </div>

        </div>
    )
}
