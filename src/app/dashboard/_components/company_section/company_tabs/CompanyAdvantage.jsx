'use client'
import React from 'react'
import { ProfileHeader } from '../..'
import ProfileTextArea from '../../share/ProfileTextArea'
import GroupBtn from '../../share/GroupBtn'

export default function CompanyAdvantage({ setValue }) {
    const [data, setData] = React.useState({
        objective: ''
    })

    const handlePrev = () => {
        setValue('market')
    }
    const handleNext = () => {
        setValue('overview')
    }
    return (
        <div>
            <ProfileHeader title={'Competitive Advantage'} />
            <div className='mb-10'>
                <ProfileTextArea type={'text'} label={'Advantage'} isStar={false} style={'profileInput h-28'} />
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}

