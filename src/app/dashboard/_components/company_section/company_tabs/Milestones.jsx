'use client'
import React from 'react'
import { ProfileHeader } from '../..'
import ProfileTextArea from '../../share/ProfileTextArea'
import GroupBtn from '../../share/GroupBtn'

export default function Milestones({ setValue }) {
    const [data, setData] = React.useState({
        objective: ''
    })

    const handlePrev = () => {
        setValue('overview')
    }
    const handleNext = () => {
        setValue('partnerships')
    }
    return (
        <div>
            <ProfileHeader title={'Milestones and Achievements'} />
            <div className='mb-10'>
                <ProfileTextArea type={'text'} label={'Achievements'} isStar={false} style={'profileInput h-28'} />
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}

