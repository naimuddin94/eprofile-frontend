import Link from 'next/link'
import React from 'react'

export default function FormQns({qns, link, linkTitle}) {
    return (
        <div className="w-[70%] mx-auto mt-5">
            <div className='text-center'><span>{qns}</span> <Link href={link} className='text-primary font-bold cursor-pointer'>{linkTitle}</Link></div>
        </div>
    )
}
