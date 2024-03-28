'use client'
import React, { useState } from 'react'
import GroupBtn from '../share/GroupBtn'
import ProfileInput from '../share/ProfileInput'

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
            <h1 className='text-2xl font-bold mb-5'>Professional Memberships or Affiliations</h1>

            <div>
                <ProfileInput type={'text'} label={'Member'} isStar={false} style={'profileInput h-12'} />
            </div>

            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}
