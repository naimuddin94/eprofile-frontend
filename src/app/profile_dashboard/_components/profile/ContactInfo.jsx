'use client'
import React, { useState } from 'react'
import GroupBtn from '../share/GroupBtn'
import ProfileInput from '../share/ProfileInput'
import ProfileLinkInput from '../share/ProfileLinkInput'
import { Instagram, Linkedin, LogoMark, Twitter, Youtube } from '@/assets/images'

export default function ContactInfo({setValue}) {
    const [data, setData] = useState({
        address: {
            street: '',
            house: '',
            city: '',
            state: '',
            postal_code: '',
            country: '',
            mobile_number: '',
            email: '',
            website: ''
        }
    })

    const handleChange = (e, isAddress) => {
        const { name, value } = e.target;
        const onChange = { ...data };
        if (isAddress) {
            onChange.address[name] = value
        }
    }

    const handlePrev = () => {
        setValue('objective')
    }
    const handleNext = () => {
        console.log(data)
        setValue('education')
    }
    return (
        <div>
            <h1 className='text-2xl font-bold mb-5'>Contact Information</h1>
            <div className='mb-5'>
                <h2 className='text-xl text-gray-400 font-bold mb-5'>Address</h2>
                <div className='formGap'>
                    <div className='doubleInput'>
                        <ProfileInput type={'text'} label={'Street'} name={'street'} isStar={true} style={'profileInput h-12'} change={(e) => handleChange(e, true)} />
                        <ProfileInput type={'text'} label={'House'} name={'house'} isStar={true} style={'profileInput h-12'} change={(e) => handleChange(e, true)} />
                    </div>
                    <div className='doubleInput'>
                        <ProfileInput type={'text'} label={'City'} name={'city'} isStar={true} style={'profileInput h-12'} change={(e) => handleChange(e, true)} />
                        <ProfileInput type={'text'} label={'State'} name={'state'} isStar={true} style={'profileInput h-12'} change={(e) => handleChange(e, true)} />
                    </div>
                    <div className='doubleInput'>
                        <ProfileInput type={'text'} label={'Postal Code'} name={'postal_code'} isStar={true} style={'profileInput h-12'} change={(e) => handleChange(e, true)} />
                        <ProfileInput type={'text'} label={'Country'} name={'country'} isStar={true} style={'profileInput h-12'} change={(e) => handleChange(e, true)} />
                    </div>
                    <div className='doubleInput'>
                        <ProfileInput type={'number'} label={'Mobile Number'} name={'mobile_number'} isStar={true} style={'profileInput h-12'} change={(e) => handleChange(e, true)} />
                        <ProfileInput type={'email'} label={'Email'} name={'email'} isStar={true} style={'profileInput h-12'} change={(e) => handleChange(e, true)} />
                    </div>
                    <ProfileInput type={'text'} label={'Website'} name={'website'} isStar={true} style={'profileInput h-12'} change={(e) => handleChange(e, true)} />
                </div>
            </div>
            <div className='mb-10'>
                <h2 className='text-xl text-gray-400 font-bold mb-5'>Social Link</h2>
                <div className='formGap'>
                    <ProfileLinkInput image={LogoMark} name={'facebook'}/>
                    <ProfileLinkInput image={Twitter} name={'Twitter'}/>
                    <ProfileLinkInput image={Linkedin} name={'Linkedin'}/>
                    <ProfileLinkInput image={Instagram} name={'Instagram'}/>
                    <ProfileLinkInput image={Youtube} name={'Youtube'}/>
                </div>
            </div>

            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}
