'use client'
import { Character, Logo2 } from '@/assets/images'
import SignIn from '@/components/forms/SignIn'
import CustomBtn from '@/components/share/CustomBtn'
import FormQns from '@/components/share/FormQns'
import ThirdPartyLogin from '@/components/share/ThirdPartyLogin'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'


import Image from 'next/image'



import React, { useState } from 'react'

export default function SignInPage() {
    const [isClick, setIsClick] = useState(false)
    return (
        <div className={`flex xl:w-[70%]  mx-auto items-center ${isClick ? "h-screen lg:h-max 2xl:h-screen  py-10" : "h-screen"}  `}>
            <div className='md:w-[50%] w-full'>
                <div className='w-[90%] mx-auto '>
                    <Image src={Logo2} alt='logo1' width={150} height={20} className='mx-auto mb-5' />
                    <Card className="">
                        <CardHeader>
                            <CardTitle className='text-2xl text-center'>Sign In</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ThirdPartyLogin />
                            <CustomBtn title={'Sign In Email'} style={`h-12 w-full mt-2 ${isClick?'mb-10':'mb-2'}`} click={() => setIsClick(!isClick)} />
                            {isClick && <SignIn />}
                            <FormQns qns={'New User?'} link={'/sign-up'} linkTitle={'Sign Up'} />
                        </CardContent>


                    </Card>
                </div>
            </div>
            <div className='md:flex hidden md:items-end   w-[50%]'>
                <Image src={Character} alt='character' className='w-[100%] h-max mx-auto' />
            </div>
        </div>
    )
}


