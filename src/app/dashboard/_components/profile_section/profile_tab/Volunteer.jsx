'use client'
import React, { useEffect, useState } from 'react'
import GroupBtn from '../../share/GroupBtn'
import ProfileInput from '../../share/ProfileInput'
import { ProfileHeader } from '../..'

export default function Volunteer({setValue, profile, setProfile}) {
    const [data, setData] = useState('')

    const handlePrev = () => {
        setValue('languages')
    }
    const handleNext = () => {
        setProfile({...profile,volunteerWork: data})
        setValue('projects')
    }
    useEffect(() => {
        console.log(profile);
    }, [profile])
    return (
        <div>
            <ProfileHeader title={'Volunteer Work or Community Involvement'} />
            <div className='mb-10'>
                <ProfileInput type={'text'} label={'Volunteer'} isStar={false} style={'profileInput h-12'} change={(e) => setData(e.target.value)}/>
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}
