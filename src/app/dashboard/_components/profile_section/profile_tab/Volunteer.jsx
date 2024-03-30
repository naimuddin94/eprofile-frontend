'use client'
import React, { useState } from 'react'
import GroupBtn from '../../share/GroupBtn'
import ProfileInput from '../../share/ProfileInput'
import { ProfileHeader } from '../..'

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
            <ProfileHeader title={'Volunteer Work or Community Involvement'} />
            <div className='mb-10'>
                <ProfileInput type={'text'} label={'Volunteer'} isStar={false} style={'profileInput h-12'} />
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}
