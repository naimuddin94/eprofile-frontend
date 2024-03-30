'use client'
import React from 'react'
import GroupBtn from '../../share/GroupBtn'
import ProfileInput from '../../share/ProfileInput'
import { ProfileHeader } from '../..'

export default function Goals({setValue}) {
    const [data, setData] = React.useState({
        objective: ''
    })

    const handlePrev = () => {
        setValue('hobbies')
    }
    const handleNext = () => {
        
    }
    return (
        <div>
            <ProfileHeader title={'Career Goals or Aspirations'} />
            <div className='mb-10'>
                <ProfileInput type={'text'} label={'Goals'} isStar={false} style={'profileInput h-12'} />
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}
