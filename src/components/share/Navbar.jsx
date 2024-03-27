'use client'
import { Logo } from '@/assets/images'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { AlignJustify, User } from 'lucide-react'
import CustomBtn from './CustomBtn'

export default function Navbar() {

    return (
        <div className='border-b-[1px]'>
            <div className='w-[90%] mx-auto flex  justify-between items-center py-3 '>
                <div onClick={() => window.location.href = '/'}>
                    <Image src={Logo} alt='logo' width={40} height={20} className='border-primary border-[2px] p-1 rounded-lg'/>
                </div>
                <div className='w-[40%] md:flex hidden justify-between items-center'>
                    <ul className='flex gap-4'>
                        <li><Link href='/company'>Companies</Link></li>
                        <li><Link href='/profiles'>Profiles</Link></li>
                        <li><Link href='/services'>Services</Link></li>
                        <li><Link href='/press'>Press</Link></li>
                    </ul>
                    <CustomBtn style={'flex gap-2'} title={'Sign In'} icon={<User />} isRight={true} click={()=>window.location.href='/sign-in'}/>
                </div>
                <div className='md:hidden block'>
                    <AlignJustify />
                </div>
            </div>
        </div>

    )
}
