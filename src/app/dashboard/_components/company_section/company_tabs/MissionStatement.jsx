'use client'
import React from 'react'
import { ProfileHeader } from '../..'
import ProfileTextArea from '../../share/ProfileTextArea'
import GroupBtn from '../../share/GroupBtn'

export default function MissionStatement({ setValue }) {
    const [data, setData] = React.useState({
        objective: ''
    })

    const handlePrev = () => {
        setValue('intro')
    }
    const handleNext = () => {
        setValue('history')
    }
    return (
        <div>
            <ProfileHeader title={'Mission Statement'} />
            <div className='mb-10'>
                <ProfileTextArea type={'text'} label={'Mission Statement'} isStar={false} style={'profileInput h-28'} />
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}
