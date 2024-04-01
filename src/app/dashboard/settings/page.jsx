import React from 'react'
import { ComingSoon } from '../_components'
import SettingsHeader from '../_components/share/SettingsHeader'
import ProfileInput from '../_components/share/ProfileInput'
import CustomBtn from '@/components/share/CustomBtn'

export default function Settings() {
  return (
    // <ComingSoon/>
    <div className='container space-y-10'>
      <div className='space-y-7'>
        <SettingsHeader title={'Profile Username'} />
        <SettingsInput title={'Username'} name={'username'} type={'text'} />
        <div className='flex justify-end'>
          <CustomBtn title={'saved'} style={' '} />
        </div>
      </div>
      {/* email */}
      <div className='space-y-7'>
        <SettingsHeader title={'Change Email'} />
        <SettingsInput title={'Email'} name={'email'} type={'email'} />
        <div className='flex justify-end'>
          <CustomBtn title={'saved'} style={' '} />
        </div>
      </div>

      {/* password */}
      <div className='space-y-7'>
        <SettingsHeader title={'Password'} />
        <SettingsInput title={'New password'} name={'password'} type={'password'} />
        <SettingsInput title={'Confirm new password'} name={'confirmPassword'} type={'password'} />
        <div className='flex justify-end'>
          <CustomBtn title={'saved'} style={' '} />
        </div>
      </div>
      {/* payout */}
      <div className='space-y-7'>
        <SettingsHeader title={'Payout'} />
        <SettingsInput title={'PayPal'} name={'paypal'} type={'email'} />
        <SettingsInput title={'Payoneer'} name={'payoneer'} type={'email'} />
        <div className='flex justify-end'>
          <CustomBtn title={'saved'} style={' '} />
        </div>
      </div>

    </div>
  )
}


function SettingsInput({ title, name, type, change }) {
  return (
    <div className='bCenter'>
      <p className='text-black font-bold w-[50%]'>{title}</p>
      <div className='w-[50%] relative space-y-4'>
        <ProfileInput type={type} style={'border-[1px] border-gray-300 rounded-lg outline-none w-full h-10 px-4'} name={name} />
      </div>
    </div>
  )
}
