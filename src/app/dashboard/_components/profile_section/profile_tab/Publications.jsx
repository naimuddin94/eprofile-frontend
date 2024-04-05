'use client'
import React, { useEffect, useState } from 'react'
import GroupBtn from '../../share/GroupBtn'
import ProfileInput from '../../share/ProfileInput'
import { ProfileHeader } from '../..'

export default function Publications({setValue, profile, setProfile}) {
    const [data, setData] = useState('')

    const handlePrev = () => {
        setValue('project')
    }
    const handleNext = () => {
        setProfile({...profile,publications: data})
        setValue('testimonials')
    }
    useEffect(() => {
        console.log(profile);
    }, [profile])
    return (
        <div>
            <ProfileHeader title={'Publications or Presentations (if applicable)'} />
            <div className='mb-10'>
                <ProfileInput type={'text'} label={'Publications'} isStar={false} style={'profileInput h-12'} change={(e) => setData(e.target.value)}/>
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}
