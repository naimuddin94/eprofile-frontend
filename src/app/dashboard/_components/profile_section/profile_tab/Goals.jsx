'use client'
import React, { useEffect, useState } from 'react'
import GroupBtn from '../../share/GroupBtn'
import ProfileInput from '../../share/ProfileInput'
import { ProfileHeader } from '../..'
import { axiosBase } from '@/hooks/axiosSecure'
import { jsonToFormData } from '@/lib/utils'

export default function Goals({ setValue, profile, setProfile }) {
    // const [data1, setData1] = useState(profile)
    const [data, setData] = React.useState('')
    const user = JSON.parse(localStorage.getItem('user'))

    // console.log(user.id)

    const handlePrev = () => {
        setValue("hobbies");
    };
    const handleNext = async () => {
        const values = { ...profile, careerGoals: data, createdBy: user?.id };
        const formData = jsonToFormData(values);
        const res = await axiosBase.post("/profile", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        console.log(res);
    };

    return (
        <div>
            <ProfileHeader title={'Career Goals or Aspirations'} />
            <div className='mb-10'>
                <ProfileInput type={'text'} label={'Goals'} isStar={false} style={'profileInput h-12'} change={(e) => setData(e.target.value)} />
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}
