import React from 'react'
import GroupBtn from '../share/GroupBtn'
import ProfileInput from '../share/ProfileInput'

export default function Hobbies({setValue}) {
    const [data, setData] = React.useState({
        objective: ''
    })

    const handlePrev = () => {
        setValue('testimonials')
    }
    const handleNext = () => {
        console.log(data)
        setValue('goals')
    }
    return (
        <div>
            <h1 className='text-2xl font-bold mb-5'>Personal Interests or Hobbies (optional)</h1>
            <div>
                <ProfileInput type={'text'} label={'Hobbies'} isStar={false} style={'profileInput h-12'} />
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}
