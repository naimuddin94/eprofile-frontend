'use client'
import React, { Suspense } from 'react'
import { CompanyTabContents, Loading, ProfileTabContents, TabLists } from '../../_components'
import { addCompanyTabList } from '@/lib/data'
import { useSearchParams } from 'next/navigation'
// export const dynamic = 'force-dynamic'

export default function AddCompany() {
  // let search = useSearchParams()
  // search = search.get('tab') || null
  // console.log(search)
  const [value, setValue] = React.useState('name')
  React.useEffect(() => {
    window.history.pushState(
      null,
      '',
      `?tab=${value}`
    )
  }, [value])
  return (
    <section className='md:w-[95%]  w-full md:mx-auto py-10 md:flex '>
      <TabLists data={addCompanyTabList} value={value} setValue={setValue} />
      <div className='2xl:w-[70%] md:w-[63%] w-[95%]  mx-auto flex justify-end'>
        <div className='md:w-[95%] w-full  '>
          <CompanyTabContents value={value} setValue={setValue} />
        </div>
      </div>
    </section>

  )
}
