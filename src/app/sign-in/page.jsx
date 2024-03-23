
import { Character, Google, Linkedin, Logo2, LogoMark } from '@/assets/images'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import Link from 'next/link'


import React from 'react'

export default function SignInPage() {
    return (
        <div className='flex xl:w-[70%]  mx-auto '>
            <div className='md:w-[50%] w-full'>
                <div className='w-[90%] mx-auto'>
                    <Image src={Logo2} alt='logo1' width={150} height={20} className='mx-auto mb-5' />
                    <Card className="pb-10">
                        <CardHeader>
                            <CardTitle className='text-2xl'>Login</CardTitle>
                            <CardDescription className='text-xl'>to get started</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form>
                                <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-col space-y-1.5">
                                        <Input id="name" placeholder="Email" className='border-[1px] rounded-md  px-3 py-1 h-12' />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <Input id="name" placeholder="Password" type={'password'} className='border-[1px] rounded-md px-3 h-12' />
                                    </div>
                                    
                                    <div className='z-50'>
                                        <Link href={'/forgot-password'} className='z-50 cursor-pointer'>Forgot Password?</Link>
                                    </div>
                                    <Button className='h-12 hover:bg-[#FF6702]/40'>Continue</Button>
                                </div>
                            </form>
                        </CardContent>
                        <div className="w-[70%] mx-auto">
                            <div className='text-center'><span>New User?</span> <Link href={'/sign-up'} className='text-primary font-bold cursor-pointer'>Register</Link></div>
                            <div className='flex items-center gap-5 py-1'>
                                <hr className='h-0.5 bg-gray-700 w-full rounded-full' />
                                <span className='text-md text-gray-500 '>or</span>
                                <hr className='h-0.5 bg-gray-700 w-full rounded-full' />
                            </div>
                            <div className='flex justify-center pt-5'>
                                <div className='flex gap-2'>
                                    <div className='h-14 w-14 border-[1px] rounded-xl flex items-center justify-center cursor-pointer'>
                                        <Image src={Google} alt='google' width={30} height={20} />
                                    </div>
                                    <div className='h-14 w-14 border-[1px] rounded-xl flex items-center justify-center cursor-pointer'>
                                        <Image src={LogoMark} alt='google' width={20} height={10} />
                                    </div>
                                    <div className='h-14 w-14 border-[1px] rounded-xl flex items-center justify-center cursor-pointer'>
                                        <Image src={Linkedin} alt='google' width={30} height={10} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Card>
                </div>
            </div>
            <div className='md:flex hidden md:items-end  w-[50%]'>
                <Image src={Character} alt='character' className='w-[80%] mx-auto ' />
            </div>
        </div>
    )
}
