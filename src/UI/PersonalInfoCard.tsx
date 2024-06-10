import { useForm } from "react-hook-form";
import { CardHeader, Input } from "../Components"

type Inputs = {
    name: string,
    email: string,
    phone: number,
};

export const PersonalInfoCard = () => {
    const { register, watch, formState: { errors } } = useForm<Inputs>();


    // Watch List
    watch("name");
    watch("email");
    watch("phone");

    return (
        <div>
            <CardHeader
                title="Personal info"
                description="Please provide your name, email address, and phone number."
            />
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
                })} />
            <Input
                type="email"
                placeholder="e.g. stephenking@lorem.com"
                fieldlabel="Email Address"
                {...register("email", {
                    required: "Please enter your email address.",
                })} />
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
                })} />
        </div>
    )
}
