'use client'
import React from 'react'
import { ComingSoon, DashboardHeader } from '../_components'
import Image from 'next/image'
import { Frame } from '@/assets/images'
import { Button } from '@/components/ui/button'
import { Ellipsis } from 'lucide-react'

const tabList = [
  {
    id: 1,
    title: 'Active',
  },
  {
    id: 2,
    title: 'Reject',
  },
  {
    id: 3,
    title: 'Pending',
  },

]

export default function ServicesPage() {
  const [value, setValue] = React.useState('Active')
  return (
    // <ComingSoon/>
    <div className="container">
      <DashboardHeader title={'Services'} btnTitle={'New Service'} />
      <div className='mt-10'>
        <div className='flex '>
          {tabList.map(item => <div onClick={() => setValue(item.title)} key={item.id} className={`w-[80px] cursor-pointer  py-2 ${item.title === value && 'border-b-[1px] border-primary text-primary'}`}>
            <p className='text-[18px] font-semibold text-center'>{item.title}</p>
          </div>)}



        </div>
        <div className='mt-5'>
          {value === 'Active' && <div className='w-full p-3 bg-pLight rounded-lg bCenter'>
            <div className='bCenter w-full'>
              <div className='flex w-[75%] gap-2'>
                <div>
                  <Image src={Frame} alt='frame' className='w-[80px] h-[80px] rounded-lg' />
                </div>
                <div className='space-y-4'>
                  <p>I will be full stack web and software developer build applications</p>
                  <p>$500</p>
                </div>
              </div>
              <div className="w-[25%]  bCenter ">
                <div>
                  <p className={`py-2 bg-green-400  text-white text-md w-[140px] center rounded-full `}>Active</p>
                </div>
                <Button className="p-0 bg-transparent hover:bg-gray-200 h-min w-min text-md font-bold text-black ">
                  <Ellipsis />
                </Button>
              </div>
            </div>
          </div>}
        </div>
      </div>
    </div>
  )
}
