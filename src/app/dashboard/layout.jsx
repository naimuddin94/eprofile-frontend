'use client'
import { useAuthStore } from "@/store/userStore"
import SideBar from "./_components/share/SideBar"
import { useRouter } from "next/navigation"

const Layout = ({ children }) => {
  const {isLogin} = useAuthStore()
  const router = useRouter()
  if(!isLogin){
    router.push('/')
    return null
  }
  return (

      <div className='flex ' suppressHydrationWarning={true}>
        <SideBar />
        <div className='lg:w-[calc(100%_-_300px)] md:w-[calc(100%_-_220px)] w-full'>
          {children}
          
        </div>
      </div>

  )

}

export default Layout
