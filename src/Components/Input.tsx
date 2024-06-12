import { DetailedHTMLProps, ForwardedRef, InputHTMLAttributes, forwardRef } from 'react'

interface inputElementInterface extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  type: React.HTMLInputTypeAttribute
}

interface FieldLabelInterface extends inputElementInterface {
  fieldlabel?: string;
}

export const Input = forwardRef((props: FieldLabelInterface, ref: ForwardedRef<HTMLInputElement>) => {
  const inputElementProps = { ...props };
  return (
    <label className='text-marine-blue font-medium flex flex-col mb-7'>
      {props.fieldlabel}
      <input
        className='focus:shadow-md border-[2px] rounded-md p-[10px] border-light-gray mt-1'
        ref={ref}
        {...inputElementProps}
      />
    </label>
  )
})