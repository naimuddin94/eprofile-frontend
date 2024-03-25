'use client'
import { PIcon, Person } from '@/assets/images'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { Input } from '../ui/input'
import { Camera } from 'lucide-react'
import { Label } from '../ui/label'
import CustomBtn from '../share/CustomBtn'

export default function Name({setValue}) {
    const [coverImg, setCoverImg] = useState(null)
    const [personImg, setPersonImg] = useState(null)
    const imgRef = useRef(null)
    const personImgRef = useRef(null)
    const handleImgClk = () => {
        imgRef.current.click();
    }
    const handlePersonImgClk = () => {
        personImgRef.current.click();
    }

    const handleImgCng = (e) => {
        const file = e.target.files[0];
        setCoverImg(file)

    }
    const handlePersonImgCng = (e) => {
        const file = e.target.files[0];
        setPersonImg(file)

    }
    return (
        <section>
            {/* image section */}
            <div className='relative'>
                <div className='h-[35vh] w-full bg-slate-300 rounded-xl relative'>
                    {coverImg && <Image src={URL.createObjectURL(coverImg)} alt='cover image' width={600} height={100} className='absolute top-0 h-full w-full rounded-xl object-cover' />}
                </div>
                <div onClick={handlePersonImgClk} className='bg-slate-300 w-[170px] h-[170px] rounded-full absolute -bottom-[4.8rem] left-1/2 -translate-x-1/2'>
                    <Input type="file" name="picture" className='hidden' ref={personImgRef} onChange={handlePersonImgCng} />
                    {personImg && <Image src={URL.createObjectURL(personImg)} alt='person' width={100} height={100} className='w-full h-full rounded-full  object-cover' />}
                    <div className='text-primary absolute bottom-0 right-4 p-1 rounded-full bg-[#ffe8d9]'>
                        <Camera />
                    </div>
                    {!personImg && <Image src={PIcon} alt='person' width={100} height={100} className='w-full h-full rounded-full ' />}
                </div>
                <div onClick={handleImgClk} className='absolute bottom-2 right-2'>
                    <Input type="file" name="picture" className='hidden' ref={imgRef} onChange={handleImgCng} />
                    <div className='flex gap-2 text-primary bg-[#ffe8d9] w-max p-2 rounded-md'>
                        <Camera />
                        <p>Add Cover Photo</p>
                    </div>
                </div>
            </div>

            {/* input section */}
            <div className='mb-10 mt-20'>
                <Label htmlFor="name">Full Name <span className='text-primary'>*</span></Label>
                <Input type='text' name='name' className='h-12 border-[1px] border-primary rounded-lg w-full mt-2 outline-none text-[16px] px-4' />

                <div className='mt-8 flex justify-end' >
                    <CustomBtn style={'w-min'}  title={'Save & Next'} click={()=>setValue('title')}/>
                </div>
            </div>
        </section>
    )
}
