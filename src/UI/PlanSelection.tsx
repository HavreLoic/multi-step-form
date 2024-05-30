import { CardHeader, PlanCard } from "../Components"
import { plan } from "../data"

export const PlanSelection = () => {
    return (
        <>
            <CardHeader
                title="Select your plan"
                description="You have the option of monthly or yearly billing."
            />
            <div className="flex gap-5">
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
        </>
    )
}
