"use client"
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form } from '../ui/form'
import CustomInput from '../share/CustomInput'
import CustomBtn from '../share/CustomBtn'
import Link from "next/link"

import { api } from "@/api"
import { toast } from "sonner"

import { useRouter } from "next/navigation"
import { useAuthStore } from '@/store/userStore'
import { axiosBase } from '@/hooks/axiosSecure'






const formSchema = z.object({
    email: z.string().min(2, {
        message: "Enter a valid email ",
    }),
    password: z.string().min(6, {
        message: "Enter a valid password",
    }),
})

export default function SignIn() {
    const { setLogin } = useAuthStore()
    // 1. Define your form.
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values) {

        try {
            const res = await axiosBase.post('/auth/login', values)
            if (res.data.statusCode === 200) {

                setLogin(res.data.data)
                toast.success(res.data.message, {
                    action: {
                        label: 'X',
                        onClick: () => console.log('Undo')
                    },
                })
                window.location.href = '/dashboard'
            }
        } catch (error) {
            toast.error(error.message, {
                action: {
                    label: 'X',
                    onClick: () => console.log('Undo')
                },
            })
            // console.log(error)
        }
    }
    // console.log(isLogin)
    return (
        <Form {...form} className=''>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <CustomInput form={form} name={'email'} type={'email'} label={'Email'} />
                <CustomInput form={form} name={'password'} type={'password'} label={'Password'} />
                <div className='z-50'>
                    <Link href={'/forgot-password'} className='z-50 cursor-pointer'>Forgot Password?</Link>
                </div>
                <CustomBtn title={'Sign In'} style={'h-12 w-full'} />
            </form>
        </Form>
    )
}
