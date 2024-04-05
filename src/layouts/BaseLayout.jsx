'use client'

import { usePathname } from 'next/navigation'
import React from 'react'
import AuthLayout from './AuthLayout'
import Footer from '@/components/share/Footer'
import { useLoginStore } from '@/store/userStore'
import Navbar from '@/components/share/Navbar'


export default function BaseLayout({ child }) {
    const path = usePathname()
    return (
        <section>

            {path === '/sign-in' ||
                path === '/sign-up' ||
                path === '/forgot-password' ||
                path === '/reset-password' ?
                <AuthLayout child={child} path={path} /> :
                <>
                    <Navbar  />
                    {child}

                    <Footer/>
                </>
            }
        </section>
    )
}
