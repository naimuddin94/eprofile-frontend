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
import { useUserStore } from "@/store/userStore"
import axios from "axios"
import { apiUrl } from "@/lib/routes"
import { api } from "@/api"
import { toast } from "sonner"
import { redirect } from "next/navigation"

const formSchema = z.object({
    firstName: z.string().min(2, {
        message: "Enter first name.",
    }),
    lastName: z.string().min(2, {
        message: "Enter last name.",
    }),
    email: z.string().min(2, {
        message: "Enter a valid email.",
    }).email("This is not a valid email."),
    dob: z.coerce.date({
        message: "Enter your Birth Date",
    }),
    country: z.string().min(1, "Product model is required"),
    password: z.string().min(6, {
        message: "Enter a valid password.",
    }),
    confirm: z.string().min(6, {
        message: "Retype the valid password.",
    }),
}).refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"],
})


const countries = [
    {
        id: 1,
        title: 'Bangladesh',
        value: 'ban'
    },
    {
        id: 2,
        title: 'Pakistan',
        value: 'Pak'
    },
    {
        id: 3,
        title: 'India',
        value: 'ind'
    },
    {
        id: 4,
        title: 'Nepal',
        value: 'nep'
    },
]
export default function SignUp() {
    const { loading, setUser } = useUserStore()
    // 1. Define your form.
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            country: '',
            password: "",
            confirm: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values) {
        const { firstName, lastName, email, dob, country, password } = values
        const data = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            date_of_birth: dob,
            country: country,
            password: password
        }
        api.post('/users', data).then((res) => {
            toast.success(res.data.message, {
                action: {
                    label: 'X',
                    onClick: () => console.log('Undo')
                },
            })
            redirect('/sign-in')
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <Form {...form} className=''>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="flex gap-3">
                    <CustomInput form={form} name={'firstName'} type={'text'} label={'First Name'} />
                    <CustomInput form={form} name={'lastName'} type={'text'} label={'Last Name'} />
                </div>
                <CustomInput form={form} name={'dob'} type={'date'} label={'Birth Date'} />
                {/* <DatePicker form={form} name={'dob'} label={'Birth Date'}/> */}
                <CustomInput form={form} name={'email'} type={'email'} label={'Email'} />
                <CustomSelect form={form} name={'country'} label={'Country'} items={countries} />
                <CustomInput form={form} name={'password'} type={'password'} label={'Password'} />
                <CustomInput form={form} name={'confirm'} type={'password'} label={'Confirm Password'} />
                <CustomBtn title={'Sign In'} style={'h-12 w-full'} loading={loading} />
            </form>
        </Form>
    )
}
