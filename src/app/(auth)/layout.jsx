import SideBar from '@/components/share/SideBar'
import React from 'react'

export default function Layout({ children }) {
  return (
    <section className='flex '>
      <SideBar/>
      {children}
    </section>
  )
}
