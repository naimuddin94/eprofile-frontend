'use client'


import { Name } from '@/components'
import { tabList } from '@/lib/data'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function Profile() {
  // let search =  useSearchParams()
  // search = search.get('tab')
  // console.log(search)
  const [value, setValue] = useState('name')
  useEffect(()=>{
    window.history.pushState(
      null,
      '',
      `?tab=${value}`
    )
  },[value])
  return (
    <section className='md:w-[95%] w-full md:mx-auto py-10 md:flex '>
      <div className='2xl:w-[30%] w-[37%] md:block hidden border-r-[1px] border-primary'>
        {tabList.map(item => <div onClick={() => setValue(item.value)} key={item.id} className='cursor-pointer relative mb-8'>
          <p className={` ${value === item.value ? 'text-primary font-bold' : 'text-gray-400'}`}>{item.title}</p>
          <div className={`absolute top-1/2 -translate-y-1/2 -right-3 w-6 h-6 border-[1px] center ${value === item.value ? 'border-primary ': 'border-gray-400 '} rounded-full`}>
            <div className={`w-4 h-4 ${value === item.value? 'bg-primary': 'bg-gray-400'} rounded-full`}/>
          </div>
        </div>)}
      </div>
      <div className='2xl:w-[70%] md:w-[63%] w-[95%] mx-auto flex justify-end'>
        <div className='md:w-[95%] w-full  '>
          {value === 'name' && <Name setValue={setValue}/>}
          {value === 'title' && <div className=' w-full '>
            <p>Title</p>
          </div>}
        </div>
      </div>
    </section>
  )
}
