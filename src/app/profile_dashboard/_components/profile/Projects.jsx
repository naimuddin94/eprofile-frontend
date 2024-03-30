'use client'
import React, { useState } from 'react'
import GroupBtn from '../share/GroupBtn'
import ProfileInput from '../share/ProfileInput'

export default function Projects({setValue}) {
    const [data, setData] = useState({
        objective: ''
    })

    const handlePrev = () => {
        setValue('volunteer')
    }
    const handleNext = () => {
        console.log(data)
        setValue('publications')
    }
    return (
        <div>
            <h1 className='text-2xl font-bold mb-5'>Projects or Portfolio (if applicable)</h1>
            <div className='space-y-4'>
                <ProfileInput type={'text'} label={'Project Name'} isStar={false} style={'profileInput h-12'} />
                <ProfileInput type={'text'} label={'Link'} isStar={false} style={'profileInput h-12'} />
                <ProfileInput type={'text'} label={'Project Description'} isStar={false} style={'profileInput h-12'} />
                <ProfileInput type={'text'} label={'Portfolio Link'} isStar={false} style={'profileInput h-12'} />
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}
