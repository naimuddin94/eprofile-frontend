'use client'
import React from 'react'
import { ProfileHeader } from '../..'
import ProfileTextArea from '../../share/ProfileTextArea'
import GroupBtn from '../../share/GroupBtn'

export default function CompanyTargetMarket({ setValue }) {
    const [data, setData] = React.useState({
        objective: ''
    })

    const handlePrev = () => {
        setValue('product')
    }
    const handleNext = () => {
        setValue('advantage')
    }
    return (
        <div>
            <ProfileHeader title={'Target Market'} />
            <div className='mb-10'>
                <ProfileTextArea type={'text'} label={'Target Market'} isStar={false} style={'profileInput h-28'} />
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}
