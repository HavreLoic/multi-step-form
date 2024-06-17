import { useForm } from "react-hook-form";
import { AddOnPlan, CardHeader, StepsButtons } from "../Components"
import { addOn } from "../data"
import { useAddOnStore } from "../Store";
import { useFormNextStep } from "../Hooks";
import { addOnsClass } from "../global";

interface InputFieldPlan {
    onlineService: "onlineService"
    largerStorage: "largerStorage"
    customizableProfile: "customizableProfile"
}

export const AddOn = () => {
    const { handleSubmit, register } = useForm<InputFieldPlan>();
    const {
        customizableProfileIsChecked,
        largerStorageIsChecked,
        onlineServiceIsChecked,
        setCustomizableProfileIsChecked,
        setLargerStorageIsChecked,
        setOnlineServiceIsChecked,
        setCustomizableProfile,
        setCustomizableProfilePrice,
        setLargerStorage,
        setLargerStoragePrice,
        setOnlineService,
        setOnlineServicePrice,
    } = useAddOnStore();
    const { onClickNextStep } = useFormNextStep();

    const onChangeOnlineService = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOnlineServiceIsChecked(e.target.checked);

        if (e.target.checked) {
            setOnlineService(addOn[0].plan);
            setOnlineServicePrice(addOn[0].price);
        }
    }

    const onChangeLargerStorage = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLargerStorageIsChecked(e.target.checked);

        if (e.target.checked) {
            setLargerStorage(addOn[1].plan);
            setLargerStoragePrice(addOn[1].price);
        }
    }

    const onChangeCustomizableProfile = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCustomizableProfileIsChecked(e.target.checked);

        if (e.target.checked) {
            setCustomizableProfile(addOn[2].plan);
            setCustomizableProfilePrice(addOn[2].price);
        }
    }

    const onSubmit = (data: InputFieldPlan) => {
        console.log(data);

        onClickNextStep();
    }

    return (
        <div>
            <CardHeader
                title="Pick add-ons"
                description="Add-ons help enhance your gaming experience."
            />
            <form onSubmit={handleSubmit(onSubmit)}>
                <AddOnPlan
                    plan={addOn[0].plan}
                    description={addOn[0].description}
                    price={addOn[0].price}
                    planRegistration={"onlineService"}
                >
                    <input
                        {...register(`onlineService`)}
                        type="checkbox"
                        checked={onlineServiceIsChecked}
                        className={addOnsClass}
                        onChange={onChangeOnlineService}
                    />
                </AddOnPlan>

                <AddOnPlan
                    plan={addOn[1].plan}
                    description={addOn[1].description}
                    price={addOn[1].price}
                    planRegistration={"largerStorage"}
                >
                    <input
                        {...register(`largerStorage`)}
                        type="checkbox"
                        checked={largerStorageIsChecked}
                        className={addOnsClass}
                        onChange={onChangeLargerStorage}
                    />
                </AddOnPlan>

                <AddOnPlan
                    plan={addOn[2].plan}
                    description={addOn[2].description}
                    price={addOn[2].price}
                    planRegistration={"customizableProfile"}
                >
                    <input
                        {...register(`customizableProfile`)}
                        type="checkbox"
                        checked={customizableProfileIsChecked}
                        className={addOnsClass}
                        onChange={onChangeCustomizableProfile}
                    />
                </AddOnPlan>
                <StepsButtons />
            </form>
        </div>
    )
}
