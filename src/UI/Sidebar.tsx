import { SidebarItem } from "../Components"
import { useScreenSize } from "../Hooks";
import { SidebarItemType } from "../app-types"
import { sideBarItems } from "../data"

export const Sidebar = () => {
    const { isMobile } = useScreenSize();
    return (
        <div className={`${isMobile ? "flex justify-center gap-9" : ""} p-16 md:bg-[url('/assets/bg-sidebar-desktop.svg')] xs:bg-[url('/assets/bg-sidebar-mobile.svg')] bg-cover bg-no-repeat bg-center md:h-[100vh] md:rounded-xl xs-rounded-0`}>
            {sideBarItems.map(({ number, step, item }: SidebarItemType, index: number) => (
                <SidebarItem
                    key={index}
                    number={number}
                    item={item}
                    step={step}
                />
            ))}
        </div>
    )
}
