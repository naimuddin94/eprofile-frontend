"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import React from 'react'
import { Form } from '../ui/form'
import CustomInput from '../share/CustomInput'
import CustomBtn from '../share/CustomBtn'
import Link from "next/link"

import { api } from "@/api"
import { toast } from "sonner"
import { useLoginStore } from "@/store/userStore"
import { redirect } from "next/navigation"





const formSchema = z.object({
    email: z.string().min(2, {
        message: "Enter a valid email ",
    }),
    password: z.string().min(6, {
        message: "Enter a valid password",
    }),
})

export default function SignIn() {
    const { setLoging } = useLoginStore(state=> state)
    
    // 1. Define your form.
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values) {
        api.post('/auth/login', values)
            .then(res => {
                // console.log(res.data.message)
                toast.success(res.data.message, {
                    action: {
                        label: 'X',
                        onClick: () => console.log('Undo')
                    },
                })
                 redirect('/dashboard/profile')
                setLoging()
            }).catch(error => {
                toast.success(error, {
                    action: {
                        label: 'X',
                        onClick: () => console.log('X')
                    },
                })
            })
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
