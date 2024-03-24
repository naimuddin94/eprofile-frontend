"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import React from 'react'
import { Form } from '../ui/form'
import CustomInput from '../share/CustomInput'
import CustomBtn from '../share/CustomBtn'

import DatePicker from "../share/DatePicker"
import CustomSelect from "../share/CustomSelect"

const formSchema = z.object({
    firstName: z.string().min(2, {
        message: "Enter first name.",
    }),
    lastName: z.string().min(2, {
        message: "Enter last name.",
    }),
    email: z.string().min(2, {
        message: "Enter a valid email.",
    }),
    dob: z.date({
        required_error: "A date of birth is required.",
    }),
    country: z.date({
        required_error: "A Country is required.",
    }),
    password: z.string().min(6, {
        message: "Enter a valid password.",
    }),
    rePassword: z.string().min(6, {
        message: "Retype the valid password.",
    }),
})

const countries = [
    {
        id:1, 
        title: 'Bangladesh',
        value: 'ban'
    },
    {
        id:2, 
        title: 'Pakistan',
        value: 'Pak'
    },
    {
        id:3, 
        title: 'India',
        value: 'ind'
    },
    {
        id:1, 
        title: 'Nepal',
        value: 'nep'
    },
]
export default function SignUp() {
    // 1. Define your form.
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            rePassword: "",
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
                <div className="flex gap-3">
                    <CustomInput form={form} name={'firstName'} type={'text'} label={'First Name'} />
                    <CustomInput form={form} name={'lastName'} type={'text'} label={'Last Name'} />
                </div>
                <DatePicker form={form} name={'dob'} label={'Birth Date'}/>
                <CustomInput form={form} name={'email'} type={'email'} label={'Email'} />
                <CustomSelect form={form} name={'country'} label={'Country'} items={countries}/>
                <CustomInput form={form} name={'password'} type={'password'} label={'Password'} />
                <CustomInput form={form} name={'rePassword'} type={'password'} label={'Retype Password'} />
                <CustomBtn title={'Sign In'} style={'h-12 w-full'} />
            </form>
        </Form>
    )
}
