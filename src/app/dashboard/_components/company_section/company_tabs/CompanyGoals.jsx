'use client'
import React from 'react'
import { ProfileHeader } from '../..'
import ProfileTextArea from '../../share/ProfileTextArea'
import GroupBtn from '../../share/GroupBtn'

export default function CompanyGoals({ setValue }) {
    const [data, setData] = React.useState({
        objective: ''
    })

    const handlePrev = () => {
        setValue('responsibility')
    }
    const handleNext = () => {
        setValue('contact')
    }
    return (
        <div>
            <ProfileHeader title={'Future Goals and Outlook'} />
            <div className='mb-10'>
                <ProfileTextArea type={'text'} label={'Future Goals'} isStar={false} style={'profileInput h-28'} />
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}
