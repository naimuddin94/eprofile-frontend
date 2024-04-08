'use client'
import React, { useEffect, useState } from 'react'
import GroupBtn from '../../share/GroupBtn'
import ProfileInput from '../../share/ProfileInput'
import { ProfileHeader } from '../..'

export default function Member({setValue, setProfile, profile}) {
    // profile?.skills || 
    const [data, setData] = useState('')

    const handlePrev = () => {
        setValue('skills')
    }
    const handleNext = () => {
        setProfile({...profile, professionalMemberships: data})        
        setValue('languages')
    }
    useEffect(() => {
        setData(profile?.professionalMemberships)
    }, [profile])
    return (
        <div>
            <ProfileHeader title={'Professional Memberships or Affiliations'} />
            <div className='mb-10'>
                <ProfileInput type={'text'} label={'Member'} value={data} isStar={false} style={'profileInput h-12'} change={(e) => setData(e.target.value)} />
            </div>

            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}
