'use client'
import { Character, Google, Linkedin, Logo2, LogoMark } from '@/assets/images'
import SignUp from '@/components/forms/SignUp'
import CustomBtn from '@/components/share/CustomBtn'
import DatePicker from '@/components/share/DatePicker'
import FormQns from '@/components/share/FormQns'
import ThirdPartyLogin from '@/components/share/ThirdPartyLogin'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function SignUpPage() {
  const [isClick, setIsClick] = useState(false)
  return (
    <div className={`flex xl:w-[70%]  mx-auto items-center  ${isClick?'h-max md:h-screen xl:h-max ]n py-10': 'h-screen'}`}>
      <div className='md:w-[50%] w-full'>
        <div className='w-[90%] mx-auto '>
          <Image src={Logo2} alt='logo1' width={150} height={20} className='mx-auto mb-5' />
          <Card className="pb-10">
            <CardHeader>
              <CardTitle className='text-2xl text-center'>Sign Up</CardTitle>
            </CardHeader>
            <CardContent>
              <ThirdPartyLogin />
              <CustomBtn title={'Sign Up Email'} style={`h-12 w-full mt-2 ${isClick?'mb-10':'mb-2'}`} click={() => setIsClick(!isClick)} />
              {isClick && <SignUp />}
              <FormQns qns={'Already registered?'} link={'/sign-in'} linkTitle={'Sign In'} />
            </CardContent>


          </Card>
        </div>
      </div>
      <div className='md:flex hidden md:items-end  w-[50%]'>
        <Image src={Character} alt='character' className='w-[100%] h-max mx-auto ' />
      </div>
    </div>
  )
}



