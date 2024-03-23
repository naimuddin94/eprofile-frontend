import { Blob1, Blob2, Blob3 } from '@/assets/images'
import AuthLayout from '@/layouts/AuthLayout'
import Image from 'next/image'
import React from 'react'

export default function Layout({ children }) {
    return (
        <>
            <AuthLayout child={children}/>
        </>
    )
}
