import { useForm } from "react-hook-form";
import { CardHeader, Input } from "../Components"
import { usePersonalInfoStore } from "../Store";
import { useStepsFormSubmissionStore } from "../Store/StepsFormSubmissionStore";

export type Inputs = {
    name: string,
    email: string,
    phone: number,
};

export const PersonalInfoCard = () => {
    const { handleSubmit, register, formState: { errors } } = useForm<Inputs>();
    const { setName, setEmail, setPhone } = usePersonalInfoStore()
    const { setOnSubmitPersonalInfo } = useStepsFormSubmissionStore();

    const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const onChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    }
    // const onSubmit = (data: Inputs) => console.log(data);
    const onSubmit = (data: Inputs) => {
        setOnSubmitPersonalInfo(data);
    }
    return (
        <>
            <CardHeader
                title="Personal info"
                description="Please provide your name, email address, and phone number."
            />

            <form onSubmit={handleSubmit(onSubmit)}>
                {errors.name && (
                    <p className="text-red-500 text-xs italic text-end">{errors.name.message}</p>
                )}
                <Input
                    type="text"
                    placeholder="e.g. Stephen King"
                    fieldlabel="Name"
                    {...register("name", {
                        required: "Please enter your name.",
                        minLength: {
                            value: 3,
                            message: "Name must be at least 3 characters long.",
                        }
                    })}
                    onChange={onChangeName}
                    aria-invalid={errors.name ? "true" : "false"}
                />

                <Input
                    type="email"
                    placeholder="e.g. stephenking@lorem.com"
                    fieldlabel="Email Address"
                    {...register("email", {
                        required: "Please enter your email address.",
                    })}
                    onChange={onChangeEmail}
                />

                <Input
                    type="number"
                    placeholder="e.g. +1 234 567 890"
                    fieldlabel="Phone Number"
                    {...register("phone", {
                        required: "Please enter your phone number.",
                        minLength: {
                            value: 10,
                            message: "Phone number must be at least 10 digits long.",
                        }
                    })}
                    onChange={onChangePhone}
                />
            </form>
        </>
    )
}
