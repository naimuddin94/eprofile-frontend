'use client'
import React, { useState } from 'react'
import GroupBtn from '../../share/GroupBtn'
import ProfileInput from '../../share/ProfileInput'
import { ProfileHeader } from '../..'

export default function Publications({setValue}) {
    const [data, setData] = useState({
        objective: ''
    })

    const handlePrev = () => {
        setValue('project')
    }
    const handleNext = () => {
        console.log(data)
        setValue('testimonials')
    }
    return (
        <div>
            <ProfileHeader title={'Publications or Presentations (if applicable)'} />
            <div className='mb-10'>
                <ProfileInput type={'text'} label={'Publications'} isStar={false} style={'profileInput h-12'} />
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}
