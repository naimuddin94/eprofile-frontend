'use client'
import React from 'react'
import { ProfileHeader } from '../..'
import ProfileTextArea from '../../share/ProfileTextArea'
import GroupBtn from '../../share/GroupBtn'

export default function CompanyProducts({ setValue }) {
    const [data, setData] = React.useState({
        objective: ''
    })

    const handlePrev = () => {
        setValue('location')
    }
    const handleNext = () => {
        setValue('market')
    }
    return (
        <div>
            <ProfileHeader title={'Products or Services'} />
            <div className='mb-10'>
                <ProfileTextArea type={'text'} label={'Services'} isStar={false} style={'profileInput h-28'} />
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}
