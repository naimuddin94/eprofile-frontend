import { Person } from '@/assets/images'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { BookOpen, HandHelping, HomeIcon, LogIn, MessageCircleWarning, Pencil, Settings, ShoppingBag, Star, User } from 'lucide-react'
import Link from 'next/link'

export default function SideBar() {
    return (
        <div className='w-[300px] pb-16 border-r-[2px]'>
            <div>
                <div className='mt-5'>
                    <Image src={Person} alt='person' width={100} height={100} className='rounded-full w-24 h-24 object-cover mx-auto' />
                </div>
                <div className='flex flex-col gap-2 justify-center items-center my-4'>
                    <Button className='w-min p-1 h-min hover:bg-[#FF6702]/40'>In Review</Button>
                    <Button className='w-[200px] hover:bg-[#FF6702]/40'><User /> Profile</Button>
                    <Button className='w-max p-1 h-min hover:bg-[#FF6702]/40'>$20</Button>
                </div>
                <ul className=''>
                    <li className='hover:bg-gray-200 py-3 px-12'><Link href={'#'} className='flex gap-2'><HomeIcon className=''/> <span>Dashboard</span></Link></li>
                    <li className='hover:bg-gray-200 py-3 px-12'><Link href={'#'} className='flex gap-2'><Pencil className=''/> <span>Companies</span></Link></li>
                    <li className='hover:bg-gray-200 py-3 px-12'><Link href={'#'} className='flex gap-2'><Star className=''/> <span>My Review</span></Link></li>
                    <li className='hover:bg-gray-200 py-3 px-12'><Link href={'#'} className='flex gap-2'><BookOpen className=''/> <span>Press</span></Link></li>
                    <li className='hover:bg-gray-200 py-3 px-12'><Link href={'#'} className='flex gap-2'><HandHelping className=''/> <span>Services</span></Link></li>
                    <li className='hover:bg-gray-200 py-3 px-12'><Link href={'#'} className='flex gap-2'><ShoppingBag className=''/> <span>My Purchases</span></Link></li>
                    <li className='hover:bg-gray-200 py-3 px-12'><Link href={'#'} className='flex gap-2'><MessageCircleWarning className=''/> <span>Support & Reports</span></Link></li>
                    <li className='hover:bg-gray-200 py-3 px-12'><Link href={'#'} className='flex gap-2'><Settings className=''/> <span>Settings</span></Link></li>
                    <li className='hover:bg-gray-200 py-3 px-12'><Link href={'#'} className='flex gap-2'><LogIn className=''/> <span>Logout</span></Link></li>
                </ul>
            </div>
        </div>
    )
}
