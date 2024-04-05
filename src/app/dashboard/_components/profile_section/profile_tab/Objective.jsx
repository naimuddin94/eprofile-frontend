'use client'
import React, { useEffect, useMemo, useState } from 'react'
import ProfileTextArea from '../../share/ProfileTextArea'
import GroupBtn from '../../share/GroupBtn'
import { ProfileHeader } from '../..'
import { useProfileStore } from '@/store/userStore'

export default function Objective({ setValue,profile, setProfile }) {
    // const { loading, profile, setProfile } = useProfileStore()
    const [data, setData] = useState('')

    const handlePrev = () => {
        setValue('name')
    }
    const handleNext =() => {
        // console.log(data)
        setProfile({...profile, objective: data})
        setValue('contact')
    }
    useEffect(() => {
        console.log(profile);
    }, [profile])
    return (
        <div>
            <ProfileHeader title={'Title or Occupation'} />
            <div className='mb-10'>
                <ProfileTextArea label={'objective'} name={'objective'} isStar={false} style={'profileInput p-3 h-24'} change={(e) => setData(e.target.value)} />
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}
