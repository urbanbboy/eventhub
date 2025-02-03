import { Button } from "@/components/ui/button";
import Link from "next/link";


const Marketing = () => {
    return (
        <div className="bg-gray p-40">
            <div className="max-w-2xl flex flex-col space-y-12">
                <h1 className="font-daysOne text-6xl">Соединим вас с лучшими профессионалами</h1>
                <p>
                    Выбирайте подрядчиков, сравнивайте предложения, обсуждайте детали и управляйте всем процессом прямо на нашей платформе. Наш сервис позволяет экономить время и силы, оставляя больше пространства для творчества и наслаждения подготовкой
                    к важному дню.
                </p>
                <div className="pt-10 flex justify-between gap-x-12">
                    <Button className="w-full text-lg" variant={'gray'} asChild>
                        <Link href={"/"}>Рассказать об услуге</Link>
                    </Button>
                    <Button className="w-full text-lg" variant={'gray'} asChild>
                        <Link href={"/"}>Выбрать специалиста</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Marketing;