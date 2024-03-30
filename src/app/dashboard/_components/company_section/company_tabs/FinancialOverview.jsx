'use client'
import React from 'react'
import { ProfileHeader } from '../..'
import ProfileTextArea from '../../share/ProfileTextArea'
import GroupBtn from '../../share/GroupBtn'

export default function FinancialOverview({ setValue }) {
    const [data, setData] = React.useState({
        objective: ''
    })

    const handlePrev = () => {
        setValue('advantage')
    }
    const handleNext = () => {
        setValue('milestones')
    }
    return (
        <div>
            <ProfileHeader title={'Financial Overview'} />
            <div className='mb-10'>
                <ProfileTextArea type={'text'} label={'Overview'} isStar={false} style={'profileInput h-28'} />
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}

