import { CardHeader, PlanCard } from "../Components"
import { plan } from "../data"
import { toggleCheckBoxStyle } from "../global"

export const PlanSelection = () => {
    return (
        <>
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
                <input
                    className={`${toggleCheckBoxStyle} ml-8 mr-8`}
                    type="checkbox"
                    role="switch"
                />
                <p>Yearly</p>
            </div>
        </>
    )
}
