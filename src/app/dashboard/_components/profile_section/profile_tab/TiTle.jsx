'use client'
import React, { memo, useEffect, useState } from 'react'
import ProfileInput from '../../share/ProfileInput'
import CustomBtn from '@/components/share/CustomBtn'
import ProfileTextArea from '../../share/ProfileTextArea'
import GroupBtn from '../../share/GroupBtn'
import { ProfileHeader } from '../..'
import { useProfileStore } from '@/store/userStore'



const Title = memo(
    function TiTle({ setValue, profile, setProfile }) {

        const [data, setData] = useState([])
        useEffect(() => {
            if (profile?.title) {
                setData(profile?.title)
            } else {
                setData([{ name: '', designation: '', startDate: '', endDate: '', responsibilities: '' }])
            }
        }, [profile])
        // console.log(data)
        const handleClick = () => {
            setData(prev => {
                return [...prev, { name: '', designation: '', startDate: '', endDate: '', responsibilities: '' }]
            })
        }

        const handleChange = (e, i) => {
            const { name, value } = e.target;
            console.log(i,name, typeof(value));
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
            setValue('name')
        }
        const handleNext = () => {
            // console.log(data)
            // formData.append('title', JSON.stringify(data))

            if (!profile?.title) {
                setProfile({ ...profile, title: data })
                setValue('objective')
            }
            else {
                console.log('close');
            }
        }

        // console.log(data)
        return (
            <div className=''>
                <ProfileHeader title={'Title or Occupation'} />
                <div className='w-full mb-5'>

                    {data?.map((val, i) => {
                        // console.log(val)
                        return <div key={i} className='space-y-4 mb-5 border-[1px] border-gray-300 p-5 rounded-lg relative'>
                            <div className='doubleInput '>
                                <ProfileInput type={'text'} value={val.name} name={'name'} label={'Name'} isStar={false} style={'profileInput h-12'} change={(e) => handleChange(e, i)} />
                                <ProfileInput type={'text'} value={val.designation} name={'designation'} label={'Designation'} isStar={false} style={'profileInput h-12'} change={(e) => handleChange(e, i)} />

                            </div>
                            <div className='doubleInput'>
                                <ProfileInput type={'date'} value={val.startDate} name={'startDate'} label={'Start date'} isStar={false} style={'profileInput h-12'} change={(e) => handleChange(e, i)} />
                                <ProfileInput type={'date'} value={val.endDate} name={'endDate'} label={'End date'} isStar={false} style={'profileInput h-12'} change={(e) => handleChange(e, i)} />
                            </div>
                            <ProfileTextArea label={'Responsibilities'} value={val.responsibilities} name={'responsibilities'} isStar={false} style={'profileInput p-3 h-24'} change={(e) => handleChange(e, i)} />
                            <CustomBtn style={'p-0 w-8 rounded-full h-8 absolute -top-2 right-2'} title={'X'} click={() => handleDelete(i)} />
                        </div>
                    }
                    )}

                    <div className='md:mt-8 mt-10 md:flex md:justify-start  ' >
                        <CustomBtn style={'w-min text-2xl font-bold'} title={'+'} click={handleClick} />
                    </div>
                    {/* <p>{JSON.stringify(data)}</p> */}
                    <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
                </div>
            </div>
        )
    }
)

export default Title
