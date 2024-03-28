'use client'


import { Name } from '@/components'
import TiTle from '@/app/(auth)/_components/profile/TiTle'
import { tabList } from '@/lib/data'
import React, { useEffect, useState } from 'react'
import Objective from '../_components/profile/Objective'
import ContactInfo from '../_components/profile/ContactInfo'
import Education from '../_components/profile/Education'
import WorkExperience from '../_components/profile/WorkExperience'
import Skills from '../_components/profile/Skills'
import Member from '../_components/profile/Member'
import Languages from '../_components/profile/Languages'
import Volunteer from '../_components/profile/Volunteer'
import Projects from '../_components/profile/Projects'
import Publications from '../_components/profile/Publications'
import Testimonials from '../_components/profile/Testimonials'
import Goals from '../_components/profile/Goals'
import Hobbies from '../_components/profile/Hobbies'

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
    <section className='md:w-[95%]  w-full md:mx-auto py-10 md:flex '>
      <div className='2xl:w-[30%] w-[37%] md:block hidden border-r-[1px] border-primary'>
        {tabList.map(item => <div onClick={() => setValue(item.value)} key={item.id} className='cursor-pointer relative mb-8'>
          <p className={` ${value === item.value ? 'text-primary font-bold' : 'text-gray-400'}`}>{item.title}</p>
          <div className={`absolute top-1/2 -translate-y-1/2 -right-3 w-6 h-6 border-[1px] center ${value === item.value ? 'border-primary ': 'border-gray-400 '} rounded-full`}>
            <div className={`w-4 h-4 ${value === item.value? 'bg-primary': 'bg-gray-400'} rounded-full`}/>
          </div>
        </div>)}
      </div>
      <div className='2xl:w-[70%] md:w-[63%] w-[95%]  mx-auto flex justify-end'>
        <div className='md:w-[95%] w-full  '>
          {value === 'name' && <Name setValue={setValue}/>}
          {value === 'title' && <TiTle setValue={setValue}/>}
          {value === 'objective' && <Objective setValue={setValue}/>}
          {value === 'contact' && <ContactInfo setValue={setValue}/>}
          {value === 'education' && <Education setValue={setValue}/>}
          {value === 'work' && <WorkExperience setValue={setValue}/>}
          {value === 'skills' && <Skills setValue={setValue}/>}
          {value === 'member' && <Member setValue={setValue}/>}
          {value === 'languages' && <Languages setValue={setValue}/>}
          {value === 'volunteer' && <Volunteer setValue={setValue}/>}
          {value === 'projects' && <Projects setValue={setValue}/>}
          {value === 'publications' && <Publications setValue={setValue}/>}
          {value === 'testimonials' && <Testimonials setValue={setValue}/>}
          {value === 'hobbies' && <Hobbies setValue={setValue}/>}
          {value === 'goals' && <Goals setValue={setValue}/>}
        </div>
      </div>
    </section>
  )
}
