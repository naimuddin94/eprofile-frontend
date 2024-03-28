'use client'
import React, { useState } from 'react'
import GroupBtn from '../share/GroupBtn'
import ProfileInput from '../share/ProfileInput'

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
            <h1 className='text-2xl font-bold mb-5'>Testimonials or Recommendations</h1>
            <div>
                <ProfileInput type={'text'} label={'Publications'} isStar={false} style={'profileInput h-12'} />
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}
