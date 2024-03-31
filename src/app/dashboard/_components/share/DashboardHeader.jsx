import CustomBtn from '@/components/share/CustomBtn'
import React from 'react'

export default function DashboardHeader({title, btnTitle}) {
  return (
    <div className='w-full py-5 px-4 bg-pLight rounded-lg bCenter'>
        <h3 className='lg:text-2xl sm:text-xl text-[16px] font-bold'>{title}</h3>
        <CustomBtn title={btnTitle} style={'border-[1px] border-primary rounded-lg bg-transparent hover:text-white text-primary text-[14px] py-1 '}/>
    </div>
  )
}
