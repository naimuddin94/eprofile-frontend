'use client'
import React, { useState } from 'react'
import GroupBtn from '../../share/GroupBtn'
import ProfileInput from '../../share/ProfileInput'
import { ProfileHeader } from '../..'

export default function Member({setValue}) {
    const [data, setData] = useState({
        objective: ''
    })

    const handlePrev = () => {
        setValue('skills')
    }
    const handleNext = () => {
        console.log(data)
        setValue('languages')
    }
    return (
        <div>
            <ProfileHeader title={'Professional Memberships or Affiliations'} />
            <div className='mb-10'>
                <ProfileInput type={'text'} label={'Member'} isStar={false} style={'profileInput h-12'} />
            </div>

            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}
