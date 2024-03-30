'use client'
import React from 'react'
import { ProfileHeader } from '../..'
import GroupBtn from '../../share/GroupBtn'
import ProfileTextArea from '../../share/ProfileTextArea'

export default function CompanyIntro({ setValue }) {
    const [data, setData] = React.useState({
        objective: ''
    })

    const handlePrev = () => {
        setValue('name')
    }
    const handleNext = () => {
        setValue('mission')
    }
    return (
        <div>
            <ProfileHeader title={'Introduction'} />
            <div className='mb-10'>
                <ProfileTextArea type={'text'} label={'Introduction'} isStar={false} style={'profileInput h-28'} />
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}
