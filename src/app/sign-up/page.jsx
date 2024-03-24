'use client'
import { Character, Google, Linkedin, Logo2, LogoMark } from '@/assets/images'
import CustomBtn from '@/components/share/CustomBtn'
import DatePicker from '@/components/share/DatePicker'
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
    <div className='flex xl:w-[70%]  mx-auto z-50 '>
      <div className='md:w-[50%] w-full'>
        <div className='w-[90%] mx-auto '>
          <Image src={Logo2} alt='logo1' width={150} height={20} className='mx-auto mb-5' />
          <Card className="pb-10">
            <CardHeader>
              <CardTitle className='text-2xl text-center'>Sign Up</CardTitle>
            </CardHeader>
            <CardContent>
              <ThirdPartyLogin />
              <CustomBtn title={'Sign Up Email'} style={'h-12 w-full mt-2 mb-10'} click={() => setIsClick(!isClick)} />
            </CardContent>
            <div className="w-[70%] mx-auto">
              <p className='text-center'>Already registered? <Link href={'/sign-in'} className='text-primary font-bold'>Sign In</Link></p>
              <div className='flex items-center gap-5 py-1'>
                <hr className='h-0.5 bg-gray-700 w-full rounded-full' />
                <span className='text-md text-gray-500 '>or</span>
                <hr className='h-0.5 bg-gray-700 w-full rounded-full' />
              </div>
              <div className='flex justify-center pt-5'>
                <div className='flex gap-2'>
                  <div className='h-14 w-14 border-[1px] rounded-xl flex items-center justify-center cursor-pointer'>
                    <Image src={Google} alt='google' width={30} height={20} />
                  </div>
                  <div className='h-14 w-14 border-[1px] rounded-xl flex items-center justify-center cursor-pointer'>
                    <Image src={LogoMark} alt='google' width={20} height={10} />
                  </div>
                  <div className='h-14 w-14 border-[1px] rounded-xl flex items-center justify-center cursor-pointer'>
                    <Image src={Linkedin} alt='google' width={30} height={10} />
                  </div>
                </div>
              </div>
            </div>

          </Card>
        </div>
      </div>
      <div className='md:flex hidden md:items-end  w-[50%]'>
        <Image src={Character} alt='character' className='w-[100%] h-max mx-auto ' />
      </div>
    </div>
  )
}



{/* <form>
<div className="grid w-full items-center gap-4">
  <div className='flex gap-2'>
    <div className="flex flex-col space-y-1.5">
      <Input id="name" placeholder="First Name" className='border-[1px] rounded-md  px-3 py-1 h-12' />
    </div>
    <div className="flex flex-col space-y-1.5">
      <Input id="name" placeholder="Last Name" className='border-[1px] rounded-md  px-3 py-1 h-12' />
    </div>
  </div>
  <div className="flex flex-col space-y-1.5">
    <Input id="name" placeholder="Email" type={'email'} className='border-[1px] rounded-md px-3 h-12' />
  </div>
  <div className="flex flex-col space-y-1.5">
    {/* <Input id="name" placeholder="date" type={'date'} className='border-[1px] rounded-md px-3 h-12' /> */}
//     <DatePicker />
//   </div>
//   <div className="flex flex-col space-y-1.5">
//     <Select className=''>
//       <SelectTrigger id="framework" className='px-3 h-12 border-[1px] rounded-md bg-transparent text-md text-gray-400'>
//         <SelectValue placeholder="Choose your country" />
//       </SelectTrigger>
//       <SelectContent position="popper">
//         <SelectItem value="next">Bangladesh</SelectItem>
//         <SelectItem value="sveltekit">India</SelectItem>
//         <SelectItem value="astro">Pakistan</SelectItem>
//         <SelectItem value="nuxt">Nepal</SelectItem>
//       </SelectContent>
//     </Select>
//   </div>
//   <div className="flex flex-col space-y-1.5">
//     <Input id="name" placeholder="Password" type={'password'} className='border-[1px] rounded-md px-3 h-12' />
//   </div>
//   <div className="flex flex-col space-y-1.5">
//     <Input id="name" placeholder="Password" type={'password'} className='border-[1px] rounded-md px-3 h-12' />
//   </div>
//   <div className="flex items-center space-x-2">
//     <Checkbox id="terms" />
//     <label
//       htmlFor="terms"
//       className="text-sm font-medium text-gray-400"
//     >
//       Accept terms and conditions
//     </label>
//   </div>
//   <div className="flex items-center space-x-2">
//     <Checkbox id="terms" />
//     <label
//       htmlFor="terms"
//       className="text-sm font-medium text-gray-400"
//     >
//       Do you want subscription email?
//     </label>
//   </div>
//   <Button className='h-12 hover:bg-[#FF6702]/40'>Continue</Button>
// </div>
// </form> */}