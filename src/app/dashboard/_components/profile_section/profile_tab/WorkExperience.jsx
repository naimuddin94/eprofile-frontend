import React from 'react'
import GroupBtn from '../../share/GroupBtn'
import ProfileInput from '../../share/ProfileInput'
import { ProfileHeader } from '../..'

export default function WorkExperience({setValue}) {
    const [data, setData] = React.useState({
        name: '',
        title: '',
        dates: '',
        responsibilities: ''
    })

    const handleChange = (e)=>{
        const {name, value} = e.target;
        const onChange = {...data}
        onChange[name] = value
        setData(onChange)
    }
    const handlePrev = () => {
        setValue('education')
    }
    const handleNext = () => {
        console.log(data)
        setValue('skills')
    }
    return (
        <div>
            <ProfileHeader title={'Work Experience'} />
            <div className='mb-10 space-y-4'>
                <ProfileInput type={'text'} name={'name'} label={'Company Name'} isStar={false} style={'profileInput h-12'}  change={handleChange}/>
                <ProfileInput type={'text'} name={'title'} label={'Job Title'} isStar={false} style={'profileInput h-12'}  change={handleChange}/>
                <ProfileInput type={'text'} name={'dates'} label={'Dates Of Employment'} isStar={false} style={'profileInput h-12'}  change={handleChange}/>
                <ProfileInput type={'text'} name={'responsibilities'} label={'Responsibilities'} isStar={false} style={'profileInput h-12'}  change={handleChange}/>
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}
