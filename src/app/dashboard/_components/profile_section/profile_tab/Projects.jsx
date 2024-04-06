'use client'
import React, { useEffect, useRef, useState } from 'react'
import GroupBtn from '../../share/GroupBtn'
import ProfileInput from '../../share/ProfileInput'
import { ProfileHeader } from '../..'
import CustomBtn from '@/components/share/CustomBtn'
import { Label } from '@/components/ui/label'
import { CloudDownload } from 'lucide-react'
import { Input } from '@/components/ui/input'
import Image from 'next/image'

export default function Projects({ setValue,profile, setProfile }) {
    const [data, setData] = useState({
        projectName: '',
        link: '',
        projectDescription: '',
        projectPhoto: null,
        portfolioLink: ''
    })

    const imgRef = useRef(null)
    const handleImgClk = () => {
        imgRef.current.click();
    }
    const handleImgCng = (e) => {
        const file = e.target.projectPhoto[0];
        setData({
            ...data,
            projectPhoto:  file
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
        setProfile({...profile,project: [data]})
        setValue('publications')
    }
    useEffect(() => {
        console.log(profile);
    }, [profile])
    return (
        <div>
            <ProfileHeader title={'Projects or Portfolio (if applicable)'} />
            <div className='space-y-4 border-[1px] mb-5 border-gray-300 p-5 rounded-lg relative'>
                <ProfileInput type={'text'} value={data.projectName} name={'projectName'} label={'Project Name'} isStar={false} style={'profileInput h-12'} change={handleChange} />
                <ProfileInput type={'text'} value={data.link} name={'link'} label={'Link'} isStar={false} style={'profileInput h-12'} change={handleChange} />
                <ProfileInput type={'text'} value={data.projectDescription} name={'projectDescription'} label={'Project Description'} isStar={false} style={'profileInput h-12'} change={handleChange} />
                <div>
                    <Label>Upload your file</Label>
                    <div className='flex gap-3 flex-wrap mt-4'>
                        <div onClick={handleImgClk} className='border-[2px]  center flex-col gap-1 w-[200px] p-4 rounded-lg border-dashed bg-pLight border-primary'>
                            <input type="file" name="picture" defaultValue={data.projectPhoto} className='hidden' ref={imgRef} onChange={handleImgCng} />
                            <CloudDownload size={30} />
                            <p className='text-center text-sm'>drag and drop your file
                                or</p>
                            <CustomBtn style={'w-min text-sm font-bold p-1 h-min'} title={'browse file'} />
                        </div>
                        {data?.projectPhoto && <div className='w-[200px] h-[200px] rounded-lg'>
                            <Image src={URL.createObjectURL(data.projectPhoto)} alt='' width={100} height={100} className='w-full h-full object-cover rounded-lg'/>
                        </div>}
                    </div>

                </div>
                <ProfileInput type={'text'} name={'portfolioLink'} value={data.portfolioLink} label={'Portfolio Link'} isStar={false} style={'profileInput h-12'} change={handleChange} />
                
            </div>
            {/* <p>{JSON.stringify(data)}</p> */}
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}
