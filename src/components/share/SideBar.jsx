'use client'
import { Person } from '@/assets/images'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { sidebarList } from '@/lib/data'
import { User } from 'lucide-react'
import { usePathname } from 'next/navigation'
import CustomBtn from './CustomBtn'

export default function SideBar() {
    const path = usePathname()

    return (
        <div className='md:block hidden lg:w-[300px] md:w-[220px] pb-16 border-r-[2px]'>
            <div>
                <div className='mt-5'>
                    <Image src={Person} alt='person' width={100} height={100} className='rounded-full w-24 h-24 object-cover mx-auto' />
                </div>
                <div className='flex flex-col gap-2 justify-center items-center my-4'>
                    <CustomBtn style={'smallBtn'} title={'In Review'}/>
                    <CustomBtn style={`w-[200px] ${path === '/profile' && 'bg-[#FF6702]/40'}`} title={` Profile`} icon={<User/>} click={()=> window.location.href='/profile'} />
                    <CustomBtn style={'w-max p-1 h-min'} title={'$20'}/>
                </div>
                <ul className=''>
                    {sidebarList.map(item=><li  key={item.id} className={`hover:bg-gray-200 hover:text-primary py-3 lg:px-12 px-5 ${path === item.link && 'bg-gray-200 text-primary'}`}><Link href={item.link} className='flex gap-2'>{item.icon} <span>{item.title}</span></Link></li>)}
                </ul>
            </div>
        </div>
    )
}
