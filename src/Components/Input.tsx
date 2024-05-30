import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

interface inputElementInterface extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  type: React.HTMLInputTypeAttribute
}

interface FieldLabelInterface extends inputElementInterface {
  fieldLabel?: string;
}

export const Input = (props: FieldLabelInterface) => {
  const inputElementProps = { ...props };
  return (
    <label className='text-marine-blue font-medium flex flex-col mb-7'>
      {props.fieldLabel}
      <input
        className='focus:shadow-md border-[2px] rounded-md p-[10px] border-light-gray mt-1'
        {...inputElementProps}
      />
    </label>
  )
}