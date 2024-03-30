'use client'
import React, { useState } from 'react'
import { ProfileHeader } from '../..'
import ProfileTextArea from '../../share/ProfileTextArea'
import GroupBtn from '../../share/GroupBtn'

export default function Responsibility({ setValue }) {
    const [data, setData] = useState({
        objective: ''
    })

    const handlePrev = () => {
        setValue('partnerships')
    }
    const handleNext = () => {
        setValue('goals')
    }
    return (
        <div>
            <ProfileHeader title={'Social Responsibility Initiatives'} />
            <div className='mb-10'>
                <ProfileTextArea type={'text'} label={'Responsibility'} isStar={false} style={'profileInput h-28'} />
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}

