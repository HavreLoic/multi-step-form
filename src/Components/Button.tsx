import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface ButtonInterface extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
}

interface CustomButtonInterface extends ButtonInterface {
    text: string;
}

export const Button = (props: CustomButtonInterface) => {
    const buttonProps = { ...props };
    return (
        <button {...buttonProps}>
            {props.text}
        </button>
    )
}
