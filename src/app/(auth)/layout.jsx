import SideBar from '@/components/share/SideBar'
import React from 'react'

export default function Layout({ children }) {
  return (
    <section className='flex '>
      <SideBar />
      <div className='w-[calc(100%_-_300px)]'>
        {children}
      </div>
    </section>
  )
}
