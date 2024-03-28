import CustomBtn from '@/components/share/CustomBtn'
import React from 'react'

export default function GroupBtn({handlePrev, handleNext}) {
    return (
        <div className='md:mt-16 flex md:justify-end justify-between md:relative fixed bottom-5 md:w-full w-[95%] ' >
            <CustomBtn style={'w-min md:hidden block'} title={'Previous'} click={handlePrev} />
            <CustomBtn style={'w-min'} title={'Save & Next'} click={handleNext} />
        </div>
    )
}
