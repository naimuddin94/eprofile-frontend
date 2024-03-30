'use client'
import React, { useState } from 'react'
import GroupBtn from '../share/GroupBtn'
import ProfileInput from '../share/ProfileInput'

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
            <h1 className='text-2xl font-bold mb-5'>Publications or Presentations (if applicable)</h1>
            <div>
                <ProfileInput type={'text'} label={'Publications'} isStar={false} style={'profileInput h-12'} />
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}
