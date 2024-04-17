'use client'
import React, { useEffect } from 'react'
import { ProfileHeader } from '../..'
import ProfileTextArea from '../../share/ProfileTextArea'
import GroupBtn from '../../share/GroupBtn'

export default function Milestones({ setValue, company, setCompany }) {
    const [data, setData] = React.useState('')

    useEffect(() => {
        if (company) {
            setCompany({ ...company, achievements: data })
        }
    }, [company])

    const handlePrev = () => {
        setValue('overview')
    }
    const handleNext = () => {
        setCompany({ ...company, achievements: data })
        setValue('partnerships')
    }
    return (
        <div>
            <ProfileHeader title={'Milestones and Achievements'} />
            <div className='mb-10'>
                <ProfileTextArea type={'text'} name={'achievements'} value={data} change={(e) => setData(e.target.value)} label={'Achievements'} isStar={false} style={'profileInput h-28'} />
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}

