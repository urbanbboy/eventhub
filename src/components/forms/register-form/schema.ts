import { boolean, object, string } from "zod";


export const RegisterSchema = object({
    name: string().min(2, "Заполните поле!"),
    email: string().email("Заполните поле!"),
    role: string({
        required_error: "Пожалуйста, выберите роль"
    }),
    phone: string({
        required_error: "Заполните поле!"
    }),
    password: string().min(6, "Минимальное количество символов 6"),
    getSMS: boolean().default(true).optional(),
    acceptTerms: boolean().default(false),
})