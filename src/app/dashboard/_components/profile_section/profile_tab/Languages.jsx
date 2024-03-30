'use client'
import React from 'react'
import GroupBtn from '../../share/GroupBtn'
import ProfileInput from '../../share/ProfileInput'
import ProfileSelect from '../../share/ProfileSelect'
import { ProfileHeader } from '../..'

export default function Languages({setValue}) {
    const [data, setData] = React.useState({
        objective: ''
    })

    const handlePrev = () => {
        setValue('member')
    }
    const handleNext = () => {
        console.log(data)
        setValue('volunteer')
    }
    return (
        <div>
            <ProfileHeader title={'Languages'} />
            <div className='space-y-4 mb-10'>
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

            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}
