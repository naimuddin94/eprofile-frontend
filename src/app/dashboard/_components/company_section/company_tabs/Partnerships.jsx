'use client'
import React from 'react'
import { ProfileHeader } from '../..'
import ProfileTextArea from '../../share/ProfileTextArea'
import GroupBtn from '../../share/GroupBtn'

export default function Partnerships({ setValue }) {
    const [data, setData] = React.useState({
        objective: ''
    })

    const handlePrev = () => {
        setValue('milestones')
    }
    const handleNext = () => {
        setValue('responsibility')
    }
    return (
        <div>
            <ProfileHeader title={'Partnerships or Affiliations'} />
            <div className='mb-10'>
                <ProfileTextArea type={'text'} label={'Affiliations'} isStar={false} style={'profileInput h-28'} />
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}

