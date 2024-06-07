import { SidebarItemType } from "../app-types"

export const SidebarItem = ({ number, step, item }: SidebarItemType) => {
    return (
        <div className="mb-5 flex items-center text-white">
            <div className="p-3 rounded-[50%] border-[1px] w-[2rem] h-[2rem] relative mr-2 border-cool-gray">
                <p className="absolute top-0 text-[1rem] font-normal">{number}</p>
            </div>
            <div>
                <p className="text-cool-gray">{step}</p>
                <p className="font-semibold">{item}</p>
            </div>
        </div>
    )
}
