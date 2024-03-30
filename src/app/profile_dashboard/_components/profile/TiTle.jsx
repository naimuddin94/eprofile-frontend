'use client'
import React, { useState } from 'react'
import ProfileInput from '../share/ProfileInput'
import CustomBtn from '@/components/share/CustomBtn'
import ProfileTextArea from '../share/ProfileTextArea'
import GroupBtn from '../share/GroupBtn'


export default function TiTle({ setValue }) {
    const [data, setData] = useState([{
        name: '',
        designation: "",
        start_date: '',
        end_date: "",
        responsibilities: ''
    }])
    const handleClick = () => {
        setData([...data, {
            name: '',
            designation: "",
            start_date: '',
            end_date: "",
            responsibilities: ''
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

    const handlePrev = ()=>{
        setValue('name')
    }
    const handleNext = ()=>{
        setValue('objective')
    }
    return (
        <div className=''>
            <h1 className='text-2xl font-bold mb-5'>Title or Occupation</h1>
            <div className='w-full'>

                {data.map((val, i) =>
                    <div key={i} className='space-y-4 mb-5 border-[1px] border-gray-300 p-5 rounded-lg relative'>
                        <div className='doubleInput '>
                            <ProfileInput type={'text'} value={val.name}  name={'name'} label={'Name'} isStar={false} style={'profileInput h-12'} change={(e) => handleChange(e,i)} />
                            <ProfileInput type={'text'} value={val.designation}  name={'designation'} label={'Designation'} isStar={false} style={'profileInput h-12'} change={(e) => handleChange(e,i)} />

                        </div>
                        <div className='doubleInput'>
                            <ProfileInput type={'date'} value={val.start_date} name={'start_date'} label={'Start date'} isStar={false} style={'profileInput h-12'} change={(e) => handleChange(e,i)} />
                            <ProfileInput type={'date'} value={val.end_date} name={'end_date'} label={'End date'} isStar={false} style={'profileInput h-12'} change={(e) => handleChange(e,i)} />
                        </div>
                        <ProfileTextArea label={'Responsibilities'} value={val.responsibilities} name={'responsibilities'}  isStar={false} style={'profileInput p-3 h-24'} change={(e) => handleChange(e,i)} />
                        <CustomBtn style={'p-0 w-8 rounded-full h-8 absolute -top-2 right-2'} title={'X'} click={()=>handleDelete(i)} />
                    </div>
                )}

                <div className='md:mt-8 mt-5 md:flex md:justify-start  ' >
                    <CustomBtn style={'w-min text-2xl font-bold'} title={'+'} click={handleClick} />
                </div>
                {/* <p>{JSON.stringify(data)}</p> */}
                <GroupBtn handlePrev={handlePrev} handleNext={handleNext}/>
            </div>
        </div>
    )
}
