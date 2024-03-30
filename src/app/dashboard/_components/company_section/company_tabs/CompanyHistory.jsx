'use client'
import React from 'react'
import { ProfileHeader } from '../..'
import ProfileTextArea from '../../share/ProfileTextArea'
import GroupBtn from '../../share/GroupBtn'

export default function CompanyHistory({setValue}) {
    const [data, setData] = React.useState({
        objective: ''
    })

    const handlePrev = () => {
        setValue('mission')
    }
    const handleNext = () => {
        setValue('executives')
    }
    return (
        <div>
            <ProfileHeader title={'History'} />
            <div className='mb-10'>
                <ProfileTextArea type={'text'} label={'History'} isStar={false} style={'profileInput h-28'} />
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}
