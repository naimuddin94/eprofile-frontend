'use client'
import React, { useEffect } from 'react'
import { ProfileHeader } from '../..'
import ProfileTextArea from '../../share/ProfileTextArea'
import GroupBtn from '../../share/GroupBtn'

export default function CompanyHistory({setValue, company, setCompany}) {
    const [data, setData] = React.useState('')

    const handlePrev = () => {
        setValue('mission')
    }
    const handleNext = () => {
        setCompany({ ...company, history: data })
        setValue('executives')
    }

    useEffect(() => {
        if(company){
            setData(company?.history)
        }
    },[company])
        
    return (
        <div>
            <ProfileHeader title={'History'} />
            <div className='mb-10'>
                <ProfileTextArea value={data} type={'text'} label={'History'} isStar={false} style={'profileInput h-28'}   change={(e) => setData(e.target.value)} />
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}
