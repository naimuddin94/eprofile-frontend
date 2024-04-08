'use client'
import React from 'react'
import CustomBtn from './CustomBtn'
import { User } from 'lucide-react'
import { useAuthStore } from '@/store/userStore'
import Link from 'next/link'

export default function LoginBtn() {
  const { user, logout } = useAuthStore()
  // console.log(user)
  return (
    <>
      {user ?
        <div className='flex gap-4'>

          <Link href={'/dashboard'} className='text-white bg-primary p-2 rounded-lg'>Dashboard</Link>
          <CustomBtn style={'flex gap-2'} title={'Logout'} click={() => {
            logout()
            window.location.href = '/'
          }} />
        </div>


        : <CustomBtn style={'flex gap-2'} title={'Sign In'} icon={<User />} isRight={true} click={() => window.location.href = '/sign-in'} />}
    </>
  )
}
