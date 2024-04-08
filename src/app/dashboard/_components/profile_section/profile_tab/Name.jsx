'use client'
import { PIcon, Person } from '@/assets/images'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Camera } from 'lucide-react'
import CustomBtn from '@/components/share/CustomBtn'
import ProfileInput from '../../share/ProfileInput'
import { useProfileStore } from '@/store/userStore'

export default function Name({ setValue, setProfile, profile }) {
    // console.log(profile)
    // profile?.photo || profile?.photo

    const [data, setData] = useState({
        fullName: profile?.fullName ||'',
        coverPhoto: profile?.coverPhoto || null,
        photo: profile?.photo || null
    })
    const [error, setError] = useState(null)
    // const [photo, setphoto] = useState(null)
    const imgRef = useRef(null)
    const photoRef = useRef(null)
    const handleImgClk = () => {
        imgRef.current.click();
    }
    const handlephotoClk = () => {
        photoRef.current.click();
    }

    const handleImgCng = (e) => {
        const file = e.target.files[0];

        setData({
            ...data,
            coverPhoto: file
        })

    }
    const handlephotoCng = (e) => {
        const file = e.target.files[0];
        setData({
            ...data,
            photo: file
        })
    }


    const handleUpdate = () => {
        setProfile({ ...profile, ...data })
        // console.log(data);
        setValue('title')
    }

    // useEffect(() => {
    //     // console.log(profile)
    // }, [profile])
    return (
        <div>
            {/* image section */}
            <div className='relative'>
                <div className='md:h-[35vh] h-[25vh] w-full bg-slate-300 rounded-xl relative'>
                    {data?.coverPhoto && <Image src={URL.createObjectURL(data?.coverPhoto)} alt='cover image' width={600} height={100} className='absolute top-0 h-full w-full rounded-xl object-cover' />}
                </div>
                <div onClick={handlephotoClk} className='bg-slate-300 md:w-[170px] w-[120px] md:h-[170px] h-[120px] rounded-full absolute md:-bottom-[4.8rem] -bottom-[3rem] md:left-1/2 md:-translate-x-1/2 left-5'>
                    <input type="file" name="photo" className='hidden' ref={photoRef} onChange={handlephotoCng} />
                    {data?.photo && <Image src={URL.createObjectURL(data?.photo)} alt='person' width={100} height={100} className='w-full h-full rounded-full  object-cover' />}
                    <div className='text-primary absolute bottom-0 right-4 p-1 rounded-full bg-[#ffe8d9]'>
                        <Camera />
                    </div>
                    {!data?.photo && <Image src={PIcon} alt='person' width={100} height={100} className='w-full h-full rounded-full ' />}
                </div>
                <div onClick={handleImgClk} className='absolute lg:bottom-2 md:top-2 right-2 bottom-2'>
                    <input type="file" name="coverPhoto" className='hidden' ref={imgRef} onChange={handleImgCng} />
                    <div className='flex gap-2 items-center text-primary cursor-pointer bg-[#ffe8d9] w-max p-2 rounded-md md:text-[16px] text-[12px]'>
                        <Camera />
                        <p>Add Cover Photo</p>
                    </div>
                </div>
            </div>

            {/* input section */}
            <div className='mb-10 mt-20  '>
                <ProfileInput type={'text'} value={data?.fullName} label={'Full Name'} isStar={true} style={'profileInput h-12'} change={(e) => setData({ ...data, fullName: e.target.value })} />


                {/* <p>{JSON.stringify(data)}</p> */}
                {error && <small className='text-sm py-5 text-red-500'>{error}</small>}
                <div className='mt-10 flex justify-end' >
                    <CustomBtn style={'w-min'} title={'Save & Next'} click={handleUpdate} />
                </div>
            </div>
        </div>
    )
}
