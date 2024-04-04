import React from 'react'
import CustomBtn from './CustomBtn'
import { User } from 'lucide-react'

export default function LoginBtn({isLogin,logout}) {
  return (
    <>
    {isLogin?
    <CustomBtn style={'flex gap-2'} title={'Logout'}  click={() => {
        logout()
        window.location.href = '/'
    }}/>
    :<CustomBtn style={'flex gap-2'} title={'Sign In'} icon={<User />} isRight={true} click={() => window.location.href = '/sign-in'} />}
    </>
  )
}
