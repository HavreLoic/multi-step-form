import { useForm } from "react-hook-form";
import { CardHeader, PlanCard, StepsButtons } from "../Components"
import { plan } from "../data"
import { toggleCheckBoxStyle } from "../global"
import { useFormNextStep } from "../Hooks";
import { useSelectPlanStore } from "../Store";

interface PlanSelectionForm {
    isChecked: boolean;
}

export const PlanSelection = () => {
    const { handleSubmit, register } = useForm<PlanSelectionForm>();
    const { onClickNextStep } = useFormNextStep();
    const { isChecked, setIsChecked } = useSelectPlanStore();

    const onSwitchCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked);
    }

    const onSubmit = (data: PlanSelectionForm) => {
        console.log(data);
        onClickNextStep();
    }

    return (
        <div>
            <CardHeader
                title="Select your plan"
                description="You have the option of monthly or yearly billing."
            />

            <div className="flex gap-5 mb-10">
                {plan.map(({ alt, image, plan, price, trailDuration }, index: number) => (
                    <PlanCard
                        key={index}
                        image={image}
                        alt={alt}
                        plan={plan}
                        price={price}
                        trailDuration={trailDuration}
                    />
                ))}
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="p-5 text-marine-blue flex justify-center text-center bg-magnolia font-medium rounded-[5px]">
                    <p>Monthly</p>
                    <input
                        className={`${toggleCheckBoxStyle} ml-8 mr-8`}
                        {...register(`isChecked`)}
                        checked={isChecked}
                        type="checkbox"
                        role="switch"
                        onChange={onSwitchCheckbox}
                    />
                    <p>Yearly</p>
                </div>

                <StepsButtons />

            </form>
        </div>
    )
}
