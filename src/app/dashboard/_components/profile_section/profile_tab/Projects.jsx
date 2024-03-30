'use client'
import React, { useRef, useState } from 'react'
import GroupBtn from '../../share/GroupBtn'
import ProfileInput from '../../share/ProfileInput'
import { ProfileHeader } from '../..'
import CustomBtn from '@/components/share/CustomBtn'
import { Label } from '@/components/ui/label'
import { CloudDownload } from 'lucide-react'
import { Input } from '@/components/ui/input'
import Image from 'next/image'

export default function Projects({ setValue }) {
    const [data, setData] = useState({
        projectName: '',
        link: '',
        projectDescription: '',
        file: [],
        portfolioLink: ''
    })

    const imgRef = useRef(null)
    const handleImgClk = () => {
        imgRef.current.click();
    }
    const handleImgCng = (e) => {
        const file = e.target.files[0];
        setData({
            ...data,
            file: [...data.file, file]
        })

    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        const onChange = { ...data }
        onChange[name] = value
        setData(onChange)
    }
    const handlePrev = () => {
        setValue('volunteer')
    }
    const handleNext = () => {
        // console.log(data)
        setValue('publications')
    }
    return (
        <div>
            <ProfileHeader title={'Projects or Portfolio (if applicable)'} />
            <div className='space-y-4 mb-10'>
                <ProfileInput type={'text'} name={'projectName'} label={'Project Name'} isStar={false} style={'profileInput h-12'} change={handleChange} />
                <ProfileInput type={'text'} name={'link'} label={'Link'} isStar={false} style={'profileInput h-12'} change={handleChange} />
                <ProfileInput type={'text'} name={'projectDescription'} label={'Project Description'} isStar={false} style={'profileInput h-12'} change={handleChange} />
                <div>
                    <Label>Upload your file</Label>
                    <div className='flex gap-3 flex-wrap mt-4'>
                        <div onClick={handleImgClk} className='border-[2px]  center flex-col gap-1 w-[200px] p-4 rounded-lg border-dashed bg-pLight border-primary'>
                            <Input type="file" name="picture" className='hidden' ref={imgRef} onChange={handleImgCng} />
                            <CloudDownload size={30} />
                            <p className='text-center text-sm'>drag and drop your file
                                or</p>
                            <CustomBtn style={'w-min text-sm font-bold p-1 h-min'} title={'browse file'} />
                        </div>
                        { data?.file.map((img, i)=><div key={i} className='w-[200px] rounded-lg'>
                            <Image src={URL.createObjectURL(img)} alt='' width={100} height={100} className='w-full h-full object-cover rounded-lg'/>
                        </div>)}
                    </div>

                </div>
                <ProfileInput type={'text'} name={'portfolioLink'} label={'Portfolio Link'} isStar={false} style={'profileInput h-12'} change={handleChange} />
            </div>
            {/* <p>{JSON.stringify(data)}</p> */}
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}
