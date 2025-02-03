import { Logo } from "@/components/atoms/logo"
import { Navigation } from "@/components/organisms/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const Header = () => {
    return (
        <header>
            <div className="flex justify-between py-4 px-40">
                <Logo />
                <Navigation />
                <Button className="min-w-[161px]" variant={'gray'} asChild>
                    <Link href={'/login'}>
                        Войти
                    </Link>
                </Button>
            </div>
        </header>

    )
}
