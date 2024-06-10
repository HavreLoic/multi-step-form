import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface ButtonInterface extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
}

interface CustomButtonInterface extends ButtonInterface {
    text: string;
    bgcolor: "marine-blue" | "purplish-blue";
}

export const Button = (props: CustomButtonInterface) => {
    const buttonProps = { ...props };
    const bgColorClass = `bg-${props.bgcolor}`;
    return (
        <button className={`${bgColorClass} p-2 rounded-md text-white font-semibold`} {...buttonProps}>
            {props.text}
        </button>
    )
}
