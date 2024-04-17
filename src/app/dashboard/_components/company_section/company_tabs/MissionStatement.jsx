'use client'
import React, { useEffect } from 'react'
import { ProfileHeader } from '../..'
import ProfileTextArea from '../../share/ProfileTextArea'
import GroupBtn from '../../share/GroupBtn'

export default function MissionStatement({ setValue, company, setCompany }) {
    const [data, setData] = React.useState('')

    const handlePrev = () => {
        setValue('intro')
    }
    const handleNext = () => {
        setCompany({ ...company, mission: data })
        setValue('history')
    }

    useEffect(() => {
        if (company) {
            setData(company?.mission)}
    }, [company])
    return (
        <div>
            <ProfileHeader title={'Mission Statement'} />
            <div className='mb-10'>
                <ProfileTextArea value={data} type={'text'} label={'Mission Statement'} isStar={false} style={'profileInput h-28'} change={(e) => setData(e.target.value)} />
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}
