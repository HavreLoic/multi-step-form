import { CardHeader, Input } from "../Components"

export const PersonalInfoCard = () => {
    return (
        <div>
            <CardHeader
                title="Personal info"
                description="Please provide your name, email address, and phone number."
            />
            <Input type="text" placeholder="e.g. Stephen King" fieldlabel="Name" />
            <Input type="email" placeholder="e.g. stephenking@lorem.com" fieldlabel="Email Address" />
            <Input type="number" placeholder="e.g. +1 234 567 890" fieldlabel="Phone Number" />
        </div>
    )
}
