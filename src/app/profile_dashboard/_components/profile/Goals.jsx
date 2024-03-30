'use client'
import React from 'react'
import GroupBtn from '../share/GroupBtn'
import ProfileInput from '../share/ProfileInput'

export default function Goals({setValue}) {
    const [data, setData] = React.useState({
        objective: ''
    })

    const handlePrev = () => {
        setValue('hobbies')
    }
    const handleNext = () => {
        
    }
    return (
        <div>
            <h1 className='text-2xl font-bold mb-5'>Career Goals or Aspirations</h1>
            <div>
                <ProfileInput type={'text'} label={'Goals'} isStar={false} style={'profileInput h-12'} />
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}
