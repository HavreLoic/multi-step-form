import { useForm } from "react-hook-form";
import { AddOnPlanType } from "../app-types"

export const AddOnPlan = ({ plan, description, price, planRegistration }: AddOnPlanType) => {
    const { register, watch } = useForm();

    return (
        <div className="p-5 grid grid-cols-[1fr_2fr_1fr] items-center border-[1.99px] border-purplish-blue rounded-[5px] mb-5">
            <div className="flex items-center mb-4  rounded-[5px]">
                <input
                    type="checkbox"
                    {...register(`${planRegistration}`)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 check"
                />
            </div>

            <div className="">
                <p className="text-marine-blue font-semibold text-[1.19rem]">{plan}</p>
                <p className="text-cool-gray">{description}</p>
            </div>

            <div className="text-purplish-blue text-[1.18rem] text-end">
                {price}
            </div>
        </div>
    )
}
