'use client'
import React, { useState } from 'react'
import GroupBtn from '../../share/GroupBtn'
import CustomBtn from '@/components/share/CustomBtn'
import ProfileInput from '../../share/ProfileInput'
import { ProfileHeader } from '../..'


export default function Education({ setValue }) {
    const [data, setData] = useState({
        educations: [{
            name: '',
            cgpa: '',
            year: '',
            duration: ''
        }],
        otherQualification: [{
            name: '',
            cgpa: '',
            year: '',
            duration: ''
        }]
    })

    // add new 
    const handleClick = (isEdu) => {
        if (isEdu) {
            setData({
                ...data,
                educations: [
                    ...data.educations,
                    {
                        name: '',
                        cgpa: '',
                        year: '',
                        duration: ''
                    }
                ]
            })
        } else {
            setData({
                ...data,
                otherQualification: [
                    ...data.otherQualification,
                    {
                        name: '',
                        cgpa: '',
                        year: '',
                        duration: ''
                    }
                ]
            })
        }
    }

    const handleChange = (e, i, isEdu) => {
        const { name, value } = e.target;
        const onChangeVal = { ...data };
        if (isEdu) {
            onChangeVal.educations[i][name] = value;
        }else{
            onChangeVal.otherQualification[i][name] = value;
        }
        setData(onChangeVal)
    }

    // delete item
    const handleDelete = (i, isEdu) => {
        const deleteData = { ...data }
        if (isEdu) {
            deleteData.educations.splice(i, 1)
        } else {
            deleteData.otherQualification.splice(i, 1)
        }
        setData(deleteData)
    }
    const handlePrev = () => {
        setValue('contact')
    }
    const handleNext = () => {
        console.log(data)
        setValue('work')
    }
    return (
        <div>
            <ProfileHeader title={'Education'} />
            <div className='w-full mb-5'>

                {data.educations.map((val, i) => <div key={i} className='space-y-4  border-[1px] mb-5 border-gray-300 p-5 rounded-lg relative'>
                    <div className='flex gap-5'>
                        <div className='w-[70%] space-y-4'>
                            <ProfileInput type={'text'} name={'name'}
                                value={val.name}
                                label={'Institute Name'} isStar={true} style={'profileInput h-12'} change={(e) => handleChange(e,i,true)}/>
                            <div className='w-[200px]'>
                                <ProfileInput type={'text'} value={val.cgpa} name={'cgpa'} label={'CGPA (Optional)'} isStar={false} style={'profileInput h-12'} change={(e) => handleChange(e,i,true)}/>
                            </div>
                        </div>
                        <div className='w-[30%] space-y-4'>
                            <ProfileInput type={'date'} value={val.year} name={'year'} label={'Passing Year'} isStar={true} style={'profileInput h-12'} change={(e) => handleChange(e,i,true)}/>
                            <div>
                                <ProfileInput type={'text'} value={val.duration} name={'duration'} label={'Duration'} isStar={true} style={'profileInput h-12'} change={(e) => handleChange(e,i,true)}/>
                            </div>
                        </div>
                    </div>
                    <CustomBtn style={'p-0 w-8 rounded-full h-8 absolute -top-2 right-2'} title={'X'} click={() => handleDelete(i, true)} />
                </div>)}



                <div className='md:mt-8 mt-5 md:flex md:justify-start  ' >
                    <CustomBtn style={'w-min text-2xl font-bold'} title={'+'} click={() => handleClick(true)} />
                </div>
            </div>

            <ProfileHeader title={'Other Qualification'} />
            <div className='w-full mb-5'>

                {data.otherQualification.map((val, i) => <div key={i} className='space-y-4  border-[1px] mb-5  border-gray-300 p-5 rounded-lg relative'>
                    <div className='flex gap-5'>
                        <div className='w-[70%] space-y-4'>
                            <ProfileInput type={'text'} value={val.name} name={'name'} label={'Course Name'} isStar={true} style={'profileInput h-12'} change={(e) => handleChange(e,i,false)}/>
                            <div className='w-[200px]'>
                                <ProfileInput type={'text'} value={val.cgpa} name={'cgpa'} label={'CGPA (Optional)'} isStar={false} style={'profileInput h-12'} change={(e) => handleChange(e,i,false)}/>
                            </div>
                        </div>
                        <div className='w-[30%] space-y-4'>
                            <ProfileInput type={'date'} value={val.year} name={'year'} label={'Passing Year'} isStar={true} style={'profileInput h-12'} change={(e) => handleChange(e,i,false)}/>
                            <div>
                                <ProfileInput type={'text'} value={val.duration} name={'duration'} label={'Duration'} isStar={true} style={'profileInput h-12'} change={(e) => handleChange(e,i,false)}/>
                            </div>
                        </div>
                    </div>
                    <CustomBtn style={'p-0 w-8 rounded-full h-8 absolute -top-2 right-2'} title={'X'} click={() => handleDelete(i, false)} />
                </div>)}



                <div className='md:mt-8 mt-10 md:flex md:justify-start  ' >
                    <CustomBtn style={'w-min text-2xl font-bold'} title={'+'} click={() => handleClick(false)} />
                </div>
            </div>

            {/* <p>{JSON.stringify(data)}</p> */}
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}
