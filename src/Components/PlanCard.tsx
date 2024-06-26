import { useSelectPlanStore } from "../Store";
import { PlanCardType } from "../app-types"

export const PlanCard = ({ image, alt, plan, price, trailDuration }: PlanCardType) => {
    const { setPlanName, setPlanPrice, isChecked } = useSelectPlanStore();

    const onSelectCard = (card: PlanCardType) => {
        console.log(card, " card");
        setPlanName(card.plan);
        setPlanPrice(card.price);
    }

    return (
        <div
            className={`focus:shadow-md border-[2px] rounded-md p-[5px] border-light-gray cursor-pointer w-[33%]`}
            onClick={() => onSelectCard({ image, alt, plan, price, trailDuration })}
        >
            <div className="p-5">
                <img src={`${image}`} alt={alt} className="mb-5" />
                <h1 className="text-marine-blue font-semibold text-[1.2rem] mb-1">{plan}</h1>
                <p className="text-cool-gray mb-1">${price}{isChecked && 0}/{isChecked ? "yr" : "mo"}</p>
                <p className="text-marine-blue text-[1rem]">{trailDuration}</p>
            </div>
        </div>
    )
}
