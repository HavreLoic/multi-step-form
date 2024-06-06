import { AddOnPlan, CardHeader } from "../Components"
import { AddOnPlanType } from "../app-types"
import { addOn } from "../data"

export const AddOn = () => {
    return (
        <>
            <CardHeader
                title="Pick add-ons"
                description="Add-ons help enhance your gaming experience."
            />
            {addOn.map(({ plan, description, price }: AddOnPlanType, index: number) => (
                <AddOnPlan
                    key={index}
                    plan={plan}
                    description={description}
                    price={price}
                />
            ))}
        </>
    )
}
