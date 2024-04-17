'use client'
import React, { useEffect } from 'react'
import { ProfileHeader } from '../..'
import ProfileTextArea from '../../share/ProfileTextArea'
import GroupBtn from '../../share/GroupBtn'

export default function CompanyProducts({ setValue, company, setCompany }) {
    const [data, setData] = React.useState('')

    useEffect(() => {
        if (company) {
            setData(company?.services)
        }
    }, [company])

    const handlePrev = () => {
        setValue('location')
    }
    const handleNext = () => {
        setCompany({ ...company, services: data })
        setValue('market')
    }
    return (
        <div>
            <ProfileHeader title={'Products or Services'} />
            <div className='mb-10'>
                <ProfileTextArea type={'text'} name={'services'} value={data} change={(e) => setData(e.target.value)} label={'Services'} isStar={false} style={'profileInput h-28'} />
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}
