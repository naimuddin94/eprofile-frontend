'use client'
import React, { useEffect, useState } from 'react'
import GroupBtn from '../../share/GroupBtn'
import ProfileInput from '../../share/ProfileInput'
import { ProfileHeader } from '../..'

export default function Testimonials({setValue, profile, setProfile}) {
    // profile?.testimonials || 
    const [data, setData] = useState(profile?.testimonials || '')

    const handlePrev = () => {
        setValue('testimonials')
    }
    const handleNext = () => {
        setProfile({...profile,testimonials: data})
        setValue('hobbies')
    }
    useEffect(() => {
        console.log(profile);
    }, [profile])
    return (
        <div>
            <ProfileHeader title={'Testimonials or Recommendations'} />
            <div className='mb-10'>
                <ProfileInput type={'text'} label={'Testimonials'} value={data} isStar={false} style={'profileInput h-12'} change={(e) => setData(e.target.value)}/>
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}
