'use client'
import { Character2, Logo1 } from '@/assets/images'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function ResetPasswordPage() {
  const route = useRouter()
  return (
    <div className='flex items-center h-[90vh] w-full '>
      <div className='flex xl:w-[70%] w-[90%]  mx-auto  '>
        <div className='md:w-[50%] w-full'>
          <div className='w-[90%] mx-auto'>
            <Image src={Logo1} alt='logo1' width={150} height={20} className='mx-auto mb-5' />
            <Card className="pb-10">
              <CardHeader className='text-center'>
                <CardTitle className='text-2xl'>ReSet Password</CardTitle>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Input id="name" placeholder="Email" className='border-[1px] rounded-md  px-3 py-1 h-12' />
                    </div>
                    <Button  className='h-12 hover:bg-[#FF6702]/40'>Continue</Button>
                  </div>
                </form>
              </CardContent>


            </Card>
          </div>
        </div>
        <div className='md:flex hidden md:items-end  w-[50%]'>
          <Image src={Character2} alt='character' className='w-[80%] mx-auto ' />
        </div>
      </div>
    </div>
  )
}
