import React, { useState } from 'react'
import GroupBtn from '../share/GroupBtn'
import CustomBtn from '@/components/share/CustomBtn'
import ProfileInput from '../share/ProfileInput'

export default function Education({setValue}) {
    const [data, setData] = useState({
        objective: ''
    })

    const handlePrev = () => {
        setValue('contact')
    }
    const handleNext = () => {
        console.log(data)
        setValue('work')
    }
    return (
        <div>
            <h1 className='text-2xl font-bold mb-5'>Education</h1>
            <div className='mb-5'>

                <div className='space-y-4  border-[1px] border-gray-300 p-5 rounded-lg relative'>
                    <div className='flex gap-5'>
                        <div className='w-[70%] space-y-4'>
                            <ProfileInput type={'text'} name={'name'} label={'University Name'} isStar={true} style={'profileInput h-12'} />
                            <div className='w-[200px]'>
                                <ProfileInput type={'text'} name={'name'} label={'CGPA (Optional)'} isStar={false} style={'profileInput h-12'} />
                            </div>
                        </div>
                        <div className='w-[30%] space-y-4'>
                            <ProfileInput type={'date'} name={'name'} label={'Passing Year'} isStar={true} style={'profileInput h-12'} />
                            <div>
                                <ProfileInput type={'text'} name={'name'} label={'Duration'} isStar={true} style={'profileInput h-12'} />
                            </div>
                        </div>
                    </div>
                    <CustomBtn style={'p-0 w-8 rounded-full h-8 absolute -top-2 right-2'} title={'X'} click={() => handleDelete(i)} />
                </div>



                <div className='md:mt-8 mt-5 md:flex md:justify-start  ' >
                    <CustomBtn style={'w-min text-2xl font-bold'} title={'+'} />
                </div>
            </div>
            <h1 className='text-2xl font-bold mb-5'>Other Qualification</h1>
            <div className='mb-5'>

                <div className='space-y-4  border-[1px] border-gray-300 p-5 rounded-lg relative'>
                    <div className='flex gap-5'>
                        <div className='w-[70%] space-y-4'>
                            <ProfileInput type={'text'} name={'name'} label={'University Name'} isStar={true} style={'profileInput h-12'} />
                            <div className='w-[200px]'>
                                <ProfileInput type={'text'} name={'name'} label={'CGPA (Optional)'} isStar={false} style={'profileInput h-12'} />
                            </div>
                        </div>
                        <div className='w-[30%] space-y-4'>
                            <ProfileInput type={'date'} name={'name'} label={'Passing Year'} isStar={true} style={'profileInput h-12'} />
                            <div>
                                <ProfileInput type={'text'} name={'name'} label={'Duration'} isStar={true} style={'profileInput h-12'} />
                            </div>
                        </div>
                    </div>
                    <CustomBtn style={'p-0 w-8 rounded-full h-8 absolute -top-2 right-2'} title={'X'} click={() => handleDelete(i)} />
                </div>



                <div className='md:mt-8 mt-5 md:flex md:justify-start  ' >
                    <CustomBtn style={'w-min text-2xl font-bold'} title={'+'} />
                </div>
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}
