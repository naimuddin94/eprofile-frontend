'use client'
import React, { useEffect } from 'react'
import { ProfileHeader } from '../..'
import GroupBtn from '../../share/GroupBtn'
import ProfileTextArea from '../../share/ProfileTextArea'

export default function CompanyIntro({ setValue,company,setCompany }) {
    const [data, setData] = React.useState('')

    const handlePrev = () => {
        setValue('name')
    }
    const handleNext = () => {
        setCompany({...company, introduction: data})
        setValue('mission')
    }
    useEffect(() => {
       if(company){
        setData(company?.introduction)
       } 
    },[company])
    return (
        <div>
            <ProfileHeader title={'Introduction'} />
            <div className='mb-10'>
                <ProfileTextArea value={data} type={'text'} label={'Introduction'} isStar={false} style={'profileInput h-28'} change={(e) => setData(e.target.value)}/>
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}
