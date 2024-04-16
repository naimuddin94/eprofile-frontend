'use client'
import ProtectedRoute from "@/components/auth/ProtectedRoute"
import SideBar from "./_components/share/SideBar"
import { Suspense } from "react"


const Layout = ({ children }) => {


  return (
    <ProtectedRoute>

        <div className='flex ' suppressHydrationWarning={true}>
          <SideBar />
          <Suspense fallback={<p>Loading</p>}>
            <div className='lg:w-[calc(100%_-_300px)] md:w-[calc(100%_-_220px)] w-full'>
              {children}

            </div>
          </Suspense>

        </div>

    </ProtectedRoute>

  )

}

export default Layout
