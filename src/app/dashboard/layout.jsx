'use client'

import { useAuthStore } from "@/store/userStore"
// import ProtectedRoute from "@/components/auth/ProtectedRoute"
import SideBar from "./_components/share/SideBar"
import { useRouter } from "next/navigation"
import { useEffect } from "react"


const Layout = ({ children }) => {
  const {user} = useAuthStore()
  const router = useRouter()
  useEffect(() => {
    if (!user) {
      if (!user) {
        router.push('/')
      }
    }
  }, [user, router])

  return (
    // <ProtectedRoute>
        <div className='flex ' suppressHydrationWarning={true}>
          <SideBar />
          <div className='lg:w-[calc(100%_-_300px)] md:w-[calc(100%_-_220px)] w-full'>
            {children}

          </div>
        </div>
    //  </ProtectedRoute>

  )

}

export default Layout
