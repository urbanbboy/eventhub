import {
    NavigationMenuItem,
    NavigationMenuLink,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import Link from "next/link"

interface NavigationItemProps {
    to: string;
    text: string;
}

export const NavigationItem = ({ to, text }: NavigationItemProps) => {
    return (
        <NavigationMenuItem>
            <Link href={to} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {text}
                </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>
    )
}
