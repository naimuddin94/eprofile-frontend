
import { Google, Linkedin, LogoMark } from '@/assets/images'
import Image from 'next/image'
import React from 'react'

export default function ThirdPartyLogin() {
    return (
        <div className="w-[70%] mx-auto">
            {/* third party login */}
            <div className='flex justify-center'>
                <div className='flex gap-2'>
                    <div className='h-14 w-14 border-[1px] rounded-xl flex items-center justify-center cursor-pointer'>
                        <Image src={Google} alt='google' width={30} height={20} />
                    </div>
                    <div className='h-14 w-14 border-[1px] rounded-xl flex items-center justify-center cursor-pointer'>
                        <Image src={LogoMark} alt='google' width={15} height={10} />
                    </div>
                    <div className='h-14 w-14 border-[1px] rounded-xl flex items-center justify-center cursor-pointer'>
                        <Image src={Linkedin} alt='google' width={30} height={10} />
                    </div>
                </div>

            </div>
            {/* ---- or ----- */}
            <div className='flex items-center gap-5 py-2'>
                <hr className='h-0.5 bg-gray-700 w-full rounded-full' />
                <span className='text-md text-gray-500 '>or</span>
                <hr className='h-0.5 bg-gray-700 w-full rounded-full' />
            </div>
        </div>
    )
}
