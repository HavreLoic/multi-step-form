import { SidebarItem } from "../Components"
import { SidebarItemType } from "../app-types"
import { sideBarItems } from "../data"
import { Link } from "react-router-dom"

export const Sidebar = () => {
    return (
        <div className="p-16 md:bg-[url('/assets/bg-sidebar-desktop.svg')] xs:bg-[url('/assets/bg-sidebar-mobile.svg')] bg-cover bg-no-repeat bg-center md:h-[100vh] rounded-xl">
            {sideBarItems.map(({ number, step, item, link }: SidebarItemType, index: number) => (
                <Link to={link} key={index}>
                    <SidebarItem
                        number={number}
                        item={item}
                        step={step}
                        link={link}
                    />
                </Link>
            ))}
        </div>
    )
}
