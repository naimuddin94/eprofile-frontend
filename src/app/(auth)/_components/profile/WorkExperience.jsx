import React from 'react'
import GroupBtn from '../share/GroupBtn'
import ProfileInput from '../share/ProfileInput'

export default function WorkExperience({setValue}) {
    const [data, setData] = React.useState({
        objective: ''
    })

    const handlePrev = () => {
        setValue('education')
    }
    const handleNext = () => {
        console.log(data)
        setValue('skills')
    }
    return (
        <div>
            <h1 className='text-2xl font-bold '>Work Experience</h1>
            <div className='mb-5 space-y-4'>
                <ProfileInput type={'text'} label={'Company Name'} isStar={false} style={'profileInput h-12'}  />
                <ProfileInput type={'text'} label={'Job Title'} isStar={false} style={'profileInput h-12'}  />
                <ProfileInput type={'text'} label={'Dates Of Employment'} isStar={false} style={'profileInput h-12'}  />
                <ProfileInput type={'text'} label={'responsibilities'} isStar={false} style={'profileInput h-12'}  />
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}
