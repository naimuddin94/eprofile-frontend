'use client'
import React, { useEffect } from 'react'
import { ProfileHeader } from '../..'
import ProfileTextArea from '../../share/ProfileTextArea'
import GroupBtn from '../../share/GroupBtn'

export default function CompanyTargetMarket({ setValue, company, setCompany }) {
    const [data, setData] = React.useState('')

    useEffect(() => {
        if (company) {
            setData(company?.targetMarket)
        }
    }, [company])

    const handlePrev = () => {
        setValue('product')
    }
    const handleNext = () => {
        setCompany({ ...company, targetMarket: data })
        setValue('advantage')
    }
    return (
        <div>
            <ProfileHeader title={'Target Market'} />
            <div className='mb-10'>
                <ProfileTextArea type={'text'} name={'targetMarket'} value={data} change={(e) => setData(e.target.value)} label={'Target Market'} isStar={false} style={'profileInput h-28'} />
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}
