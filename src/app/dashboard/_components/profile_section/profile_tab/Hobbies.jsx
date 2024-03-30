'use client'
import React from 'react'
import GroupBtn from '../../share/GroupBtn'
import ProfileInput from '../../share/ProfileInput'
import { ProfileHeader } from '../..'

export default function Hobbies({setValue}) {
    const [data, setData] = React.useState({
        objective: ''
    })

    const handlePrev = () => {
        setValue('testimonials')
    }
    const handleNext = () => {
        console.log(data)
        setValue('goals')
    }
    return (
        <div>
            <ProfileHeader title={'Personal Interests or Hobbies (optional)'} />
            <div className='mb-10'>
                <ProfileInput type={'text'} label={'Hobbies'} isStar={false} style={'profileInput h-12'} />
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}
