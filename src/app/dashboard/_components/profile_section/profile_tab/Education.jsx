'use client'
import React, { useState } from 'react'
import GroupBtn from '../../share/GroupBtn'
import CustomBtn from '@/components/share/CustomBtn'
import ProfileInput from '../../share/ProfileInput'
import { ProfileHeader } from '../..'


export default function Education({ setValue, profile, setProfile }) {
    // profile?.education || 
    const [data, setData] = useState(profile?.education || [{
            instituteName: '',
            cgpa: '',
            passingYear: '',
            duration: ''
        }])

    // add new 
    const handleClick = (isEdu) => {
        setData([...data,{
            instituteName: '',
            cgpa: '',
            passingYear: '',
            duration: ''
        }])
    }

    const handleChange =(e,i)=>{
        const {name, value} = e.target;
        const onChangeVal = [...data];
        onChangeVal[i][name] = value;
        setData(onChangeVal)
    }

    const handleDelete =(i)=>{
        const deleteData = [...data];
        deleteData.splice(i,1)
        setData(deleteData)
    }
    const handlePrev = () => {
        setValue('contact')
    }
    const handleNext = () => {
        // formData.append('education', JSON.stringify(data))
        setProfile({...profile, education: data})
        setValue('work')
    }
    return (
        <div>
            <ProfileHeader title={'Education'} />
            <div className='w-full mb-5'>

                {data.map((val, i) => <div key={i} className='space-y-4  border-[1px] mb-5 border-gray-300 p-5 rounded-lg relative'>
                    <div className='flex gap-5'>
                        <div className='w-[70%] space-y-4'>
                            <ProfileInput type={'text'} name={'instituteName'}
                                value={val.instituteName}
                                label={'Institute Name'} isStar={true} style={'profileInput h-12'} change={(e) => handleChange(e,i)}/>
                            <div className='w-[200px]'>
                                <ProfileInput type={'text'} value={val.cgpa} name={'cgpa'} label={'CGPA (Optional)'} isStar={false} style={'profileInput h-12'} change={(e) => handleChange(e,i)}/>
                            </div>
                        </div>
                        <div className='w-[30%] space-y-4'>
                            <ProfileInput type={'date'} value={val.passingYear} name={'passingYear'} label={'Passing Year'} isStar={true} style={'profileInput h-12'} change={(e) => handleChange(e,i)}/>
                            <div>
                                <ProfileInput type={'text'} value={val.duration} name={'duration'} label={'Duration'} isStar={true} style={'profileInput h-12'} change={(e) => handleChange(e,i)}/>
                            </div>
                        </div>
                    </div>
                    <CustomBtn style={'p-0 w-8 rounded-full h-8 absolute -top-2 right-2'} title={'X'} click={() => handleDelete(i)} />
                </div>)}



                <div className='md:mt-8 mt-5 md:flex md:justify-start  ' >
                    <CustomBtn style={'w-min text-2xl font-bold'} title={'+'} click={() => handleClick(true)} />
                </div>
            </div>

            {/* <ProfileHeader title={'Other Qualification'} />
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
            </div> */}

            {/* <p>{JSON.stringify(data)}</p> */}
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}
