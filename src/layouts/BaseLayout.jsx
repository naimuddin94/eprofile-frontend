'use client'
import Navbar from '@/components/share/Navbar'
import { usePathname } from 'next/navigation'
import React from 'react'
import AuthLayout from './AuthLayout'
import Footer from '@/components/share/Footer'
import { useLoginStore } from '@/store/userStore'


export default function BaseLayout({ child }) {
    const path = usePathname()
    const { logout, isLogin } = useLoginStore()
    return (
        <section>

            {path === '/sign-in' ||
                path === '/sign-up' ||
                path === '/forgot-password' ||
                path === '/reset-password' ?
                <AuthLayout child={child} path={path} /> :
                <>
                    {<Navbar isLogin={isLogin} logout={logout} />}
                    {child}

                    <Footer/>
                </>
            }
        </section>
    )
}
