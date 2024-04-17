'use client'
import { Input } from '@/components/ui/input'
import { Camera } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect } from 'react'
import ProfileInput from '../../share/ProfileInput'
import CustomBtn from '@/components/share/CustomBtn'
import { PIcon } from '@/assets/images'

export default function CompanyName({setValue,company,setCompany}) {
    const [data, setData] = React.useState({
        companyName: '',
        companyUsername: '',
        photo: null,
        coverPhoto:  null
    })

    // const [coverImg, setCoverImg] = useState(null)
    // const [personImg, setPersonImg] = useState(null)
    const imgRef = React.useRef(null)
    const personImgRef = React.useRef(null)
    const handleImgClk = () => {
        imgRef.current.click();
    }
    const handlePersonImgClk = () => {
        personImgRef.current.click();
    }

    const handleImgCng = (e) => {
        const file = e.target.files[0];
        setData({
            ...data,
            coverPhoto: file
        })

    }
    const handlePersonImgCng = (e) => {
        const file = e.target.files[0];
        setData({
            ...data,
            photo: file
        })
    }



    const handleUpdate = () => {
        setCompany({...data})
        setValue('intro')
    }

    useEffect(() => {
        if(company){
            setData({...data, companyName: company?.companyName, companyUsername:  company?.companyUsername, photo: company?.photo, coverPhoto: company?.coverPhoto })
        }
    },[company])
    return (
        <div>
            {/* image section */}
            <div className='relative'>
                <div className='md:h-[35vh] h-[25vh] w-full bg-slate-300 rounded-xl relative'>
                    {data?.coverPhoto && <Image src={URL.createObjectURL(data.coverPhoto)} alt='cover image' width={600} height={100} className='absolute top-0 h-full w-full rounded-xl object-cover' />}
                </div>
                <div onClick={handlePersonImgClk} className='bg-slate-300 md:w-[170px] w-[120px] md:h-[170px] h-[120px] rounded-full absolute md:-bottom-[4.8rem] -bottom-[3rem] md:left-1/2 md:-translate-x-1/2 left-5'>
                    <Input type="file" name="photo" className='hidden' ref={personImgRef} onChange={handlePersonImgCng} />
                    {data?.photo && <Image src={URL.createObjectURL(data.photo)} alt='person' width={100} height={100} className='w-full h-full rounded-full  object-cover' />}
                    <div className='text-primary absolute bottom-0 right-4 p-1 rounded-full bg-[#ffe8d9]'>
                        <Camera />
                    </div>
                    {!data.photo && <Image src={PIcon} alt='person' width={100} height={100} className='w-full h-full rounded-full ' />}
                </div>
                <div onClick={handleImgClk} className='absolute lg:bottom-2  right-2 bottom-2'>
                    <Input type="file" name="coverPhoto" className='hidden' ref={imgRef} onChange={handleImgCng} />
                    <div className='flex gap-2 items-center text-primary bg-[#ffe8d9] w-max p-2 rounded-md md:text-[16px] text-[12px]'>
                        <Camera />
                        <p>Add Cover Photo</p>
                    </div>
                </div>
            </div>

            {/* input section */}
            <div className='mb-10 mt-20 '>
                <div className='space-y-4 mb-10'>
                    <ProfileInput value={data?.companyName} type={'text'} label={'Company Name'} isStar={true} style={'profileInput h-12'} change={(e) => setData({ ...data, companyName: e.target.value })} />
                    <ProfileInput value={data?.companyUsername} type={'text'} label={'Company Username'} isStar={true} style={'profileInput h-12'} change={(e) => setData({ ...data, companyUsername: e.target.value })} />
                </div>


                {/* <p>{JSON.stringify(data)}</p> */}
                <div className=' flex justify-end   right-3' >
                    <CustomBtn style={'w-min'} title={'Save & Next'} click={handleUpdate} />
                </div>
            </div>
        </div>
    )
}
