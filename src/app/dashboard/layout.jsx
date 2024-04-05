'use client'
import SideBar from "@/app/dashboard/_components/share/SideBar";
import { useAuthStore } from "@/store/userStore";
import { useRouter } from "next/navigation";


import { useEffect } from "react";






const Layout = ({ children }) => {
  const {isLogin} = useAuthStore()
  const router = useRouter()
  useEffect(() => {
    if (!isLogin) {
      router.push('/')
    }
  }, [isLogin])



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
