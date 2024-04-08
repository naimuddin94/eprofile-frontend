'use client'
import React, { useEffect, useState } from 'react'
import GroupBtn from '../../share/GroupBtn'
import ProfileInput from '../../share/ProfileInput'
import { ProfileHeader } from '../..'
import { axiosBase } from '@/hooks/axiosSecure'
import { jsonToFormData } from '@/lib/utils'
import { toast } from "sonner"
import { useProfileStore } from '@/store/userStore'

export default function Goals({ setValue, profile, userId }) {
    const {setProfile} = useProfileStore()

    const [data, setData] = React.useState(profile?.careerGoals || '')
    

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
        if(res.data.statusCode === 200){
            toast.success(res.data.message, {
                action: {
                    label: 'X',
                    onClick: () => console.log('Undo')
                },
            })
            setProfile(values)
            setValue('name')
        }
        // console.log(res);
    };

    return (
        <div>
            <ProfileHeader title={'Career Goals or Aspirations'} />
            <div className='mb-10'>
                <ProfileInput type={'text'} label={'Goals'} value={data} isStar={false} style={'profileInput h-12'} change={(e) => setData(e.target.value)} />
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}
