'use client'

import { tabList } from '@/lib/data'
import React, { Suspense, useEffect, useState } from 'react'
import { Loading, ProfileTabContents, TabLists } from '../_components'
// import { useSearchParams } from 'next/navigation'
// export const dynamic = 'force-dynamic'


export default function Profile() {

  // let search = useSearchParams()
  // search = search.get('tab')
  // console.log(search)
  
  const [value, setValue] = useState(search || 'name')
  useEffect(() => {
    window.history.pushState(
      null,
      '',
      `?tab=${value}`
    )
  }, [value])
  return (
    <Suspense fallback={<Loading />}>
      <section className='md:w-[95%]  w-full md:mx-auto py-10 md:flex '>
        <TabLists data={tabList} value={value} setValue={setValue} />
        <div className='2xl:w-[70%] md:w-[63%] w-[95%]  mx-auto flex justify-end'>
          <div className='md:w-[95%] w-full  '>
            <ProfileTabContents value={value} setValue={setValue} />
          </div>
        </div>
      </section>
    </Suspense>
  )
}
