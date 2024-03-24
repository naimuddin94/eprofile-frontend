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
        <div className='border-b-[1px] shadow-xl'>
            <div className='w-[90%] mx-auto flex  justify-between items-center py-3 '>
                <div onClick={() => window.location.href = '/'}>
                    <Image src={Logo} alt='logo' width={30} height={20} />
                </div>
                <div className='w-[40%] md:flex hidden justify-between items-center'>
                    <ul className='flex gap-4'>
                        <li><Link href=''>Companies</Link></li>
                        <li><Link href=''>Profiles</Link></li>
                        <li><Link href=''>Services</Link></li>
                        <li><Link href=''>Press</Link></li>
                    </ul>
                    <CustomBtn style={'flex ga-2'} title={'Sign In '} icon={<User />} isRight={true}/>
                </div>
                <div className='md:hidden block'>
                    <AlignJustify />
                </div>
            </div>
        </div>

    )
}
