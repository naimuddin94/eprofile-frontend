'use client'
import React, { useEffect } from 'react'
import GroupBtn from '../../share/GroupBtn'
import ProfileInput from '../../share/ProfileInput'
import ProfileSelect from '../../share/ProfileSelect'
import { ProfileHeader } from '../..'
import CustomBtn from '@/components/share/CustomBtn'
const items = [
    {
        id: 1,
        title: 'Beginning',
        value: 'beg'
    },
    {
        id: 2,
        title: 'Intermediate',
        value: 'inter'
    },
    {
        id: 3,
        title: 'Expart',
        value: 'expart'
    },

]

export default function Languages({ setValue, profile, setProfile }) {
    // profile?.language || 
    const [data, setData] = React.useState([{
        name: '',
        variant: ''
    }])
    const handleClick = () => {
        setData([...data, {
            name: '',
            variant: ''
        }])
    }

    const handleChange = (e, i) => {
        const { name, value } = e.target;
        const onChangeVal = [...data];
        onChangeVal[i][name] = value;
        setData(onChangeVal)
    }
    const handleDelete = (i) => {
        const deleteData = [...data];
        deleteData.splice(i, 1)
        setData(deleteData)
    }

    const handlePrev = () => {
        setValue('member')
    }
    const handleNext = () => {
        setProfile({ ...profile, language: data })
        setValue('volunteer')
    }
    useEffect(() => {
        if (profile?.language) setData(profile?.language)
        else setData([{
            name: '',
            variant: ''
        }])
    }, [profile])
    return (
        <div>
            <ProfileHeader title={'Languages'} />
            {data?.map((val, i) => <div key={i} className='space-y-4 mb-5 border-[1px] border-gray-300 px-5 py-10 rounded-lg relative'>
                <div className='flex gap-5'>
                    <div className='w-[60%]'>
                        <ProfileInput type={'text'} name={'name'} value={val.name} isStar={false} style={'profileInput h-12'} change={(e) => handleChange(e, i)} />
                    </div>
                    <div className='w-[40%]'>
                        <ProfileSelect label={'proficiency'} name={'variant'} value={val.variant} items={items} change={(e) => handleChange(e, i)} />
                    </div>
                </div>
                <CustomBtn style={'p-0 w-8 rounded-full h-8 absolute -top-2 right-2'} title={'X'} click={() => handleDelete(i)} />
            </div>)}
            <div className='md:mt-8 mt-10 md:flex md:justify-start  ' >
                <CustomBtn style={'w-min text-2xl font-bold'} title={'+'} click={handleClick} />
            </div>


            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}
