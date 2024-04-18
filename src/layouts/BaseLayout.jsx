'use client'

import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import AuthLayout from './AuthLayout'
import Footer from '@/components/share/Footer'
import { useLoginStore, useProfileStore } from '@/store/userStore'
import Navbar from '@/components/share/Navbar'


export default function BaseLayout({ child }) {
    const path = usePathname()
    return (
        <div suppressHydrationWarning={true}>

            {path === '/sign-in' ||
                path === '/sign-up' ||
                path === '/forgot-password' ||
                path === '/reset-password' ?
                <AuthLayout child={child} path={path} /> :
                <div>
                    <Navbar  />
                    {child}

                    <Footer/>
                </div>
            }
        </div>
    )
}
