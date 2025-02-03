import { NavigationItem } from "@/components/molecules/navigation-item"
import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu"

const links: { to: string, text: string }[] = [
    {
        to: '/services',
        text: 'Услуги',
    },
    {
        to: '/about',
        text: 'О нас',
    },
    {
        to: '/portfolio',
        text: 'Портфолио',
    },
]

export const Navigation = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList className="flex space-x-3">
                {links.map((link) => (
                    <NavigationItem
                        key={link.to}
                        to={link.to}
                        text={link.text}
                    />
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    )
}
