import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface ButtonInterface extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
}

interface CustomButtonInterface extends ButtonInterface {
    text: string;
    bgColor: "marine-blue" | "purplish-blue";
}

export const Button = (props: CustomButtonInterface) => {
    const buttonProps = { ...props };
    const bgColorClass = props.bgColor && `bg-${props.bgColor}`;
    return (
        <button className={`p-2 ${bgColorClass} rounded-md text-white font-semibold`} {...buttonProps}>
            {props.text}
        </button>
    )
}
