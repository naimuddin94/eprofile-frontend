'use client'
import React, { useEffect } from 'react'
import GroupBtn from '../../share/GroupBtn'
import ProfileInput from '../../share/ProfileInput'
import { ProfileHeader } from '../..'

export default function Goals({setValue, profile, setProfile}) {
    const [data, setData] = React.useState('')

    const handlePrev = () => {
        setValue('hobbies')
    }
    const handleNext = () => {
        setProfile({...profile,careerGoals: data})
    }
    useEffect(() => {
        console.log(profile);
    }, [profile])
    return (
        <div>
            <ProfileHeader title={'Career Goals or Aspirations'} />
            <div className='mb-10'>
                <ProfileInput type={'text'} label={'Goals'} isStar={false} style={'profileInput h-12'} change={(e) => setData(e.target.value)}/>
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}
