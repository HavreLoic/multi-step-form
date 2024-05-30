import { CardHeaderType } from '../app-types'

export const CardHeader = ({ title, description }: CardHeaderType) => {
    return (
        <div className='mb-7'>
            <h1 className='text-marine-blue font-extrabold text-[2rem] mb-1'>{title}</h1>
            <p className='text-cool-gray'>{description}</p>
        </div>
    )
}
