'use client'
import ProtectedRoute from "@/components/auth/ProtectedRoute"
import SideBar from "./_components/share/SideBar"
import { Suspense } from "react"
import DashboardLayout from "@/layouts/DashboardLayout"


const Layout = ({ children }) => {


  return (
    <ProtectedRoute>

        <DashboardLayout child={children}/>

    </ProtectedRoute>

  )

}

export default Layout
