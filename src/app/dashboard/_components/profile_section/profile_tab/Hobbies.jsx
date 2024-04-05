'use client'
import React, { useEffect } from 'react'
import GroupBtn from '../../share/GroupBtn'
import ProfileInput from '../../share/ProfileInput'
import { ProfileHeader } from '../..'

export default function Hobbies({setValue, profile, setProfile}) {
    const [data, setData] = React.useState('')

    const handlePrev = () => {
        setValue('testimonials')
    }
    const handleNext = () => {
        setProfile({...profile,hobbies: data})
        setValue('goals')
    }
    useEffect(() => {
        console.log(profile);
    }, [profile])
    return (
        <div>
            <ProfileHeader title={'Personal Interests or Hobbies (optional)'} />
            <div className='mb-10'>
                <ProfileInput type={'text'} label={'Hobbies'} isStar={false} style={'profileInput h-12'} change={(e) => setData(e.target.value)}/>
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}
