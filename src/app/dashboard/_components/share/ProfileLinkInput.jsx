import { Linkedin } from '@/assets/images'
import Image from 'next/image'
import React from 'react'
import ProfileInput from './ProfileInput'

export default function ProfileLinkInput({image, name, change}) {
  return (
    <div className='flex items-center md:gap-7 gap-4'>
        <div className='w-[200px] mt-2 flex items-center px-4 gap-3 border-primary border-[1px] rounded-lg h-12'>
            <Image src={image} alt={name} className='h-5 w-5' />
            <p className=''>Linkedin</p>
        </div>
        <ProfileInput style='profileInput h-12' name={name} change={change}/>
    </div>
  )
}
