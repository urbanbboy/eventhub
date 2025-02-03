"use client"

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form";
import * as z from 'zod';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { RegisterSchema } from './schema';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Link from 'next/link';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';


export const RegisterForm = () => {
    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            phone: "",
            getSMS: true
        }
    })

    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
        console.log(values)
    }

    return (
        <Card className='mx-5 py-5 md:mx-10 lg:mx-28'>
            <CardHeader className='px-12 space-y-3'>
                <h1 className='text-4xl font-bold text-[#636363]'>Давайте знакомиться</h1>
            </CardHeader>
            <CardContent className='px-12'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-5'>
                        <div className='grid grid-cols-1 md:grid-cols-2 space-x-5'>
                            <FormField
                                control={form.control}
                                name='name'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>ФИО</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="Иван Иванов Иванович"
                                                className=""
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="role"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Роль</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Не выбрано" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="Подрядчик">Подрядчик</SelectItem>
                                                <SelectItem value="Организатор">Организатор</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type="email"
                                            placeholder="example@gmail.com"
                                            className=""
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Номер телефона</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="+1"
                                            className=""
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Пароль</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type="password"
                                            placeholder="******"
                                            className=""
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Используйте 8 или более символов
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className='flex flex-col gap-y-5'>
                            <FormField
                                control={form.control}
                                name='acceptTerms'
                                render={({ field }) => (
                                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                        <div className="space-y-1 leading-none">
                                            <FormLabel className='text-md font-normal'>
                                                Создавая учетную запись, я соглашаюсь
                                                с  Условиями использования и Политикой конфиденциальности
                                            </FormLabel>
                                        </div>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='getSMS'
                                render={({ field }) => (
                                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                        <div className="space-y-1 leading-none">
                                            <FormLabel className='text-md font-normal'>
                                                Создавая учетную запись, я также даю согласие на получение
                                                SMS -сообщений и электронных писем, включая обновления
                                                новых функций продукта, события и маркетинговые акции
                                            </FormLabel>
                                        </div>
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 space-x-16'>
                            <Button
                                variant={'gray'}
                                type='submit'
                            >
                                Регистрация
                            </Button>
                            <div className='flex items-center gap-1'>
                                <span>Уже есть аккаунт?</span>
                                <Button className='p-0' variant={'link'} asChild><Link href={'/login'}>Войти</Link></Button>
                            </div>
                        </div>

                    </form>
                </Form>
            </CardContent>
        </Card >
    )
}
