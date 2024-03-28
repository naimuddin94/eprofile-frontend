import React from 'react'
import GroupBtn from '../share/GroupBtn'
import ProfileInput from '../share/ProfileInput'
import ProfileSelect from '../share/ProfileSelect'

export default function Languages({setValue}) {
    const [data, setData] = React.useState({
        objective: ''
    })

    const handlePrev = () => {
        setValue('member')
    }
    const handleNext = () => {
        console.log(data)
        setValue('volunteer')
    }
    return (
        <div>
            <h1 className='text-2xl font-bold mb-5'>Languages</h1>

            <div className='space-y-4'>
                <div className='flex gap-5'>
                    <div className='w-[60%]'>
                        <ProfileInput type={'text'} isStar={false} style={'profileInput h-12'} />
                    </div>
                    <div className='w-[40%]'>
                        <ProfileSelect />
                    </div>
                </div>
                <div className='flex gap-5'>
                    <div className='w-[60%]'>
                        <ProfileInput type={'text'} isStar={false} style={'profileInput h-12'} />
                    </div>
                    <div className='w-[40%]'>
                        <ProfileSelect />
                    </div>
                </div>
            </div>

            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}
