'use client'
import React, { useEffect } from 'react'
import { ProfileHeader } from '../..';
import ProfileInput from '../../share/ProfileInput';
import ProfileLinkInput from '../../share/ProfileLinkInput';
import { Instagram, Linkedin, LogoMark, Twitter, Youtube } from '@/assets/images';
import GroupBtn from '../../share/GroupBtn';
import { axiosBase } from '@/hooks/axiosSecure';
import { jsonToFormData } from '@/lib/utils';

export default function CompanyContact({ setValue, company, setCompany, userId }) {
    const [data, setData] = React.useState({
        street: '',
        // house: '',
        city: '',
        state: '',
        postalCode: '',
        country: '',
        mobileNumber: '',
        email: '',
        website: '',
        facebook: '',
        twitter: '',
        linkedin: '',
        instagram: '',
        youtube: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        const onChange = { ...data };
        onChange[name] = value
        setData(onChange)
    }

    const handlePrev = () => {
        setValue('goals')
    }
    const handleNext = async () => {
        const values = { ...company, contact: data };
        console.log(values);
        const formData = jsonToFormData(values);
        const res = await axiosBase.post("/companies", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        console.log(res);
        if(res.data.statusCode === 200){
            toast.success(res.data.message, {
                action: {
                    label: 'X',
                    onClick: () => console.log('Undo')
                },
            })
            setCompany(res.data.data)
            // window.location.reload()
            setValue('name')

        }
    }

    useEffect(() => {
        if (company) {
            setData(company?.contact)
        }
    }, [company])
    return (
        <div >
            <ProfileHeader title={'Contact Information'} />
            <div className='mb-5'>
                <h2 className='text-xl text-gray-400 font-bold mb-5'>Address</h2>
                <div className='formGap'>
                    <div className='doubleInput'>
                        <ProfileInput type={'text'}  label={'Street'} name={'street'} isStar={true} style={'profileInput h-12'} change={ handleChange} />
                        {/* <ProfileInput type={'text'} label={'House'} name={'house'} isStar={true} style={'profileInput h-12'} change={ handleChange} /> */}
                    </div>
                    <div className='doubleInput'>
                        <ProfileInput type={'text'} label={'City'} name={'city'} isStar={true} style={'profileInput h-12'} change={ handleChange} />
                        <ProfileInput type={'text'} label={'State'} name={'state'} isStar={true} style={'profileInput h-12'} change={ handleChange} />
                    </div>
                    <div className='doubleInput'>
                        <ProfileInput type={'text'} label={'Postal Code'} name={'postalCode'} isStar={true} style={'profileInput h-12'} change={ handleChange} />
                        <ProfileInput type={'text'} label={'Country'} name={'country'} isStar={true} style={'profileInput h-12'} change={ handleChange} />
                    </div>
                    <div className='doubleInput'>
                        <ProfileInput type={'number'} label={'Mobile Number'} name={'mobileNumber'} isStar={true} style={'profileInput h-12'} change={ handleChange} />
                        <ProfileInput type={'email'} label={'Email'} name={'email'} isStar={true} style={'profileInput h-12'} change={ handleChange} />
                    </div>
                    <ProfileInput type={'text'} label={'Website'} name={'website'} isStar={true} style={'profileInput h-12'} change={ handleChange} />
                </div>
            </div>
            <div className='mb-10'>
                <h2 className='text-xl text-gray-400 font-bold mb-5'>Social Link</h2>
                <div className='formGap'>
                    <ProfileLinkInput image={LogoMark} name={'facebook'} change={ handleChange} />
                    <ProfileLinkInput image={Twitter} name={'twitter'} change={ handleChange} />
                    <ProfileLinkInput image={Linkedin} name={'linkedin'} change={ handleChange} />
                    <ProfileLinkInput image={Instagram} name={'instagram'} change={ handleChange} />
                    <ProfileLinkInput image={Youtube} name={'youtube'} change={ handleChange} />
                </div>
            </div>

            {/* <p>{JSON.stringify(data)}</p> */}
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}