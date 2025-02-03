import { object, string } from "zod";


export const LoginSchema = object({
    email: string().email("Заполните поле!"),
    password: string().min(6, "Минимальное количество символов 6")
})