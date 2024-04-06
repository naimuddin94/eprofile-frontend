'use client'
import ProtectedRoute from "@/components/auth/ProtectedRoute"
import SideBar from "./_components/share/SideBar"
import { Suspense } from "react"


const Layout = ({ children }) => {


  return (
    <ProtectedRoute>
      <Suspense fallback={<p>Loading</p>}>
        <div className='flex ' suppressHydrationWarning={true}>
          <SideBar />
          <div className='lg:w-[calc(100%_-_300px)] md:w-[calc(100%_-_220px)] w-full'>
            {children}

          </div>
        </div>
      </Suspense>
    </ProtectedRoute>

  )

}

export default Layout
