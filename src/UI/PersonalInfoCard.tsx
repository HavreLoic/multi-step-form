import { useForm } from "react-hook-form";
import { CardHeader, Input, StepsButtons } from "../Components"
import { usePersonalInfoStore } from "../Store";
import { useFormNextStep } from "../Hooks";

export type Inputs = {
    name: string,
    email: string,
    phone: number,
};

export const PersonalInfoCard = () => {
    const { handleSubmit, register, formState: { errors } } = useForm<Inputs>();
    const { name, email, phone, setName, setEmail, setPhone } = usePersonalInfoStore()
    const { onClickNextStep } = useFormNextStep();

    const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const onChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    }

    const onSubmit = (data: Inputs) => {
        console.log(data);
        onClickNextStep();
    }
    return (
        <>
            <CardHeader
                title="Personal info"
                description="Please provide your name, email address, and phone number."
            />

            <form onSubmit={handleSubmit(onSubmit)}>
                {errors.name && (
                    <p className="text-red-500 text-end">{errors.name.message}</p>
                )}
                <Input
                    type="text"
                    placeholder="e.g. Stephen King"
                    fieldlabel="Name"
                    defaultValue={name}
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

                {errors.email && (
                    <p className="text-red-500 text-end">{errors.email.message}</p>
                )}
                <Input
                    type="email"
                    placeholder="e.g. stephenking@lorem.com"
                    fieldlabel="Email Address"
                    defaultValue={email}
                    {...register("email", {
                        required: "Please enter your email address.",
                    })}
                    onChange={onChangeEmail}
                />

                {errors.phone && (
                    <p className="text-red-500 text-end">{errors.phone.message}</p>
                )}
                <Input
                    type="number"
                    placeholder="e.g. +1 234 567 890"
                    fieldlabel="Phone Number"
                    defaultValue={phone}
                    {...register("phone", {
                        required: "Please enter your phone number.",
                        minLength: {
                            value: 10,
                            message: "Phone number must be at least 10 digits long.",
                        }
                    })}
                    onChange={onChangePhone}
                />

                <StepsButtons />
            </form>
        </>
    )
}
