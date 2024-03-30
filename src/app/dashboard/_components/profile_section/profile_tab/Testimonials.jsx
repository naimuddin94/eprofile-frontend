'use client'
import React, { useState } from 'react'
import GroupBtn from '../../share/GroupBtn'
import ProfileInput from '../../share/ProfileInput'
import { ProfileHeader } from '../..'

export default function Testimonials({setValue}) {
    const [data, setData] = useState({
        objective: ''
    })

    const handlePrev = () => {
        setValue('testimonials')
    }
    const handleNext = () => {
        console.log(data)
        setValue('hobbies')
    }
    return (
        <div>
            <ProfileHeader title={'Testimonials or Recommendations'} />
            <div className='mb-10'>
                <ProfileInput type={'text'} label={'Publications'} isStar={false} style={'profileInput h-12'} />
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}
