import { useForm } from "react-hook-form";
import { AddOnPlan, CardHeader, StepsButtons } from "../Components"
import { AddOnPlanType } from "../app-types"
import { addOn } from "../data"
import { useAddOnStore } from "../Store";
import { useFormNextStep } from "../Hooks";

interface InputFieldPlan {
    planRegistration: "online-service" | "larger-storage" | "customizable-Profile" | string;
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

    function storeValue(e: React.ChangeEvent<HTMLInputElement>, value: string, price: string) {
        switch (value) {
            case "customizable-profile":
                setCustomizableProfile(value);
                setCustomizableProfilePrice(price);
                setCustomizableProfileIsChecked(e.target.checked);
                break;
            case "larger-storage":
                setLargerStorage(value); // Replace with actual value
                setLargerStoragePrice(price);
                setLargerStorageIsChecked(e.target.checked);
                break;
            case "online-service":
                setOnlineService(value);
                setOnlineServicePrice(price);
                setOnlineServiceIsChecked(e.target.checked);
                break;
            default:
                // Handling cases where the value doesn't match any of the expected options
                console.log(`Unknown value: ${value}`);
        }
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>, planRegistration: string, price: string) => {
        console.log(`${planRegistration} check value is ${e.target.checked}`);
        storeValue(e, planRegistration, price);
    }

    const onSubmit = (data: InputFieldPlan,) => {
        console.log(data);
        onClickNextStep();
        console.log(`${data.planRegistration} check values`);
    }

    const isCheckedLookup = {
        "online-service": onlineServiceIsChecked,
        "larger-storage": largerStorageIsChecked,
        "customizable-profile": customizableProfileIsChecked,
    };

    return (
        <div>
            <CardHeader
                title="Pick add-ons"
                description="Add-ons help enhance your gaming experience."
            />
            <form onSubmit={handleSubmit(onSubmit)}>
                {addOn.map(({ plan, description, price, planRegistration }: AddOnPlanType, index: number) => (
                    <AddOnPlan
                        key={index}
                        plan={plan}
                        description={description}
                        price={price}
                        planRegistration={planRegistration}
                    >
                        <input
                            {...register("planRegistration")}
                            type="checkbox"
                            checked={planRegistration === "online-service" && isCheckedLookup["online-service"] || planRegistration === "larger-storage" && isCheckedLookup["larger-storage"] || planRegistration === "customizable-profile" && isCheckedLookup["customizable-profile"]}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 check cursor-pointer"
                            onChange={(e) => onChange(e, `${planRegistration}`, `${price}`)}
                        />
                    </AddOnPlan>
                ))}
                <StepsButtons />
            </form>
        </div>
    )
}
