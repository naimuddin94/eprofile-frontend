'use client'
import React, { useState } from 'react'
import GroupBtn from '../share/GroupBtn'
import ProfileInput from '../share/ProfileInput'
import ProfileSelect from '../share/ProfileSelect'
import ProfileTextArea from '../share/ProfileTextArea'

export default function Skills({setValue}) {
    const [data, setData] = useState({
        objective: ''
    })

    const handlePrev = () => {
        setValue('work')
    }
    const handleNext = () => {
        console.log(data)
        setValue('member')
    }
    return (
        <div>
            <h1 className='text-2xl font-bold mb-5'>Skills</h1>
            <div className='space-y-4 mb-7'>
                <h4 className='font-bold'>Technical Skills</h4>
                <div className='flex gap-5'>
                    <div className='w-[60%]'>
                        <ProfileInput type={'text'} isStar={false} style={'profileInput h-12'} />
                    </div>
                    <div className='w-[40%]'>
                        <ProfileSelect />
                    </div>
                </div>
                <div className='flex gap-5'>
                    <div className='w-[60%]'>
                        <ProfileInput type={'text'} isStar={false} style={'profileInput h-12'} />
                    </div>
                    <div className='w-[40%]'>
                        <ProfileSelect />
                    </div>
                </div>
                <div className='flex gap-5'>
                    <div className='w-[60%]'>
                        <ProfileInput type={'text'} isStar={false} style={'profileInput h-12'} />
                    </div>
                    <div className='w-[40%]'>
                        <ProfileSelect />
                    </div>
                </div>
            </div>
            <div className='space-y-4 mb-7'>
                <h4 className='font-bold'>Technical Skills</h4>
                <div className='flex gap-5'>
                    <div className='w-[60%]'>
                        <ProfileInput type={'text'} isStar={false} style={'profileInput h-12'} />
                    </div>
                    <div className='w-[40%]'>
                        <ProfileSelect />
                    </div>
                </div>
                <div className='flex gap-5'>
                    <div className='w-[60%]'>
                        <ProfileInput type={'text'} isStar={false} style={'profileInput h-12'} />
                    </div>
                    <div className='w-[40%]'>
                        <ProfileSelect />
                    </div>
                </div>
                <div className='flex gap-5'>
                    <div className='w-[60%]'>
                        <ProfileInput type={'text'} isStar={false} style={'profileInput h-12'} />
                    </div>
                    <div className='w-[40%]'>
                        <ProfileSelect />
                    </div>
                </div>
            </div>
            <div className='space-y-4'>
                <h4 className='font-bold'>Technical Skills</h4>
                <div className='flex gap-5'>
                    <div className='w-[60%]'>
                        <ProfileTextArea type={'text'} isStar={false} style={'profileInput h-12'} />
                    </div>
                    <div className='w-[40%]'>
                        <ProfileSelect />
                    </div>
                </div>
                
            </div>

            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}
