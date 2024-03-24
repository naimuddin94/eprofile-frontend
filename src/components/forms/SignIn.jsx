"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import React from 'react'
import { Form } from '../ui/form'
import CustomInput from '../share/CustomInput'
import CustomBtn from '../share/CustomBtn'
import Link from "next/link"
import FormQns from "../share/FormQns"



const formSchema = z.object({
    email: z.string().min(2, {
        message: "Enter a valid email ",
    }),
    password: z.string().min(6, {
        message: "Enter a valid password",
    }),
})

export default function SignIn() {
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
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
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
            <FormQns qns={'New User?'} link={'/sign-up'} linkTitle={'Sign Up'}/>
        </Form>
    )
}
