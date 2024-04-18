'use client'
import React, { useEffect } from 'react'
import { ProfileHeader } from '../..'
import ProfileTextArea from '../../share/ProfileTextArea'
import GroupBtn from '../../share/GroupBtn'

export default function FinancialOverview({ setValue, company, setCompany }) {
    const [data, setData] = React.useState('')
    useEffect(() => {
        if (company) {
            setData(company?.financial)
        }
    }, [company])

    const handlePrev = () => {
        setValue('advantage')
    }
    const handleNext = () => {
        setCompany({ ...company, financial: data })
        setValue('milestones')
    }
    return (
        <div>
            <ProfileHeader title={'Financial Overview'} />
            <div className='mb-10'>
                <ProfileTextArea type={'text'} name={'financial'} value={data} change={(e) => setData(e.target.value)} label={'Overview'} isStar={false} style={'profileInput h-28'} />
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}

