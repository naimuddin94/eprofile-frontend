'use client'
import React, { useState } from 'react'
import GroupBtn from '../share/GroupBtn'
import ProfileInput from '../share/ProfileInput'

export default function Volunteer({setValue}) {
    const [data, setData] = useState({
        objective: ''
    })

    const handlePrev = () => {
        setValue('languages')
    }
    const handleNext = () => {
        console.log(data)
        setValue('projects')
    }
    return (
        <div>
            <h1 className='text-2xl font-bold mb-5'>Volunteer Work or Community Involvement</h1>
            <div>
                <ProfileInput type={'text'} label={'Volunteer'} isStar={false} style={'profileInput h-12'} />
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}
