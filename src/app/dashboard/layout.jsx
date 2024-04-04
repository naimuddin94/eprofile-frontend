'use client'
import SideBar from "@/app/dashboard/_components/share/SideBar";
import { redirect } from "next/navigation";

import { useEffect } from "react";






const Layout = ({ children }) => {
  useEffect(() => {
    const isLogin = window.localStorage.getItem('isLogin')
    if (!isLogin) {
      redirect('/')
    }
  }, [])



  return (

    <section className='flex '>
      <SideBar />
      <div className='lg:w-[calc(100%_-_300px)] md:w-[calc(100%_-_220px)] w-full'>
        {children}
      </div>
    </section>

  )

}

export default Layout
