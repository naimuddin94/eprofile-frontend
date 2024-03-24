
import { Blob1, Blob2, Blob3 } from '@/assets/images'
import Image from 'next/image'

import React from 'react'

export default function AuthLayout({child, path}) {
    return (
        <section className={`bg-background    relative z-0`}>

            <Image src={Blob1} alt="blob1" width={250} height={100} className="absolute bottom-0 left-0 -z-10" />

            <Image src={Blob2} alt="blob2" width={100} height={100} className="absolute top-20 md:right-56 right-10 -z-10" />
            <Image src={Blob3} alt="blob3" width={100} height={100} className="absolute bottom-24 right-2 -z-10" />

            <div className=' '>
                {child}
            </div>
        </section>
    )
}
