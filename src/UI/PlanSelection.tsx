import { useForm } from "react-hook-form";
import { CardHeader, PlanCard, StepsButtons } from "../Components"
import { plan } from "../data"
import { toggleCheckBoxStyle } from "../global"
import { useFormNextStep } from "../Hooks";

interface PlanSelectionForm {
    isChecked: boolean
}

export const PlanSelection = () => {
    const { handleSubmit, register } = useForm<PlanSelectionForm>();
    const { onClickNextStep } = useFormNextStep();

    const onSwitchCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.checked);
        console.log("after on");

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

            <div className="p-5 text-marine-blue flex justify-center text-center bg-magnolia font-medium rounded-[5px]">
                <p>Monthly</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className={`${toggleCheckBoxStyle} ml-8 mr-8`}
                        {...register(`isChecked`)}
                        type="checkbox"
                        role="switch"
                        onChange={onSwitchCheckbox}
                    />
                </form>
                <p>Yearly</p>
            </div>

            <StepsButtons />
        </div>
    )
}
