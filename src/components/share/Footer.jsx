import { American, AppStore, GooglePlay, Instagram, Linkedin, Logo1, LogoMark, Master, Payoneer, Stripe, Twitter, Visa, Youtube } from '@/assets/images'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className='md:block hidden'>
            <div className='bg-black '>
                <div className='w-[90%] mx-auto flex lg:flex-row flex-col gap-20 justify-between items-center py-10 text-white'>
                    <div className='lg:w-1/5 w-full'>
                        <Image src={Logo1} alt='logo1' className='border-2 border-primary rounded-xl p-2' />
                        <div className=' mt-3'>
                            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur. Vitae proin eleifend risus turpis et dignissim etiam. Eget semper pellentesque sed eget.Lorem ipsum dolor sit amet consectetur. Vitae proin eleifend risus turpis et dignissim etiam. Eget semper pellentesque sed eget.Vitae proin eleifend risus turpis et dignissim etiam. Eget semper pellentesque sed eget.</p>
                        </div>
                    </div>
                    <div className='lg:w-4/5 w-full  flex justify-between'>
                        <div className='text-[18px] flex justify-between w-[55%]'>
                            <div>
                                <h1 className='font-bold'>links</h1>
                                <ul className='mt-4'>
                                    <li>{'>'}   Link 1</li>
                                    <li>{'>'}   Link 1</li>
                                    <li>{'>'}   Link 1</li>
                                    <li>{'>'}   Link 1</li>
                                    <li>{'>'}   Link 1</li>
                                    <li>{'>'}   Link 1</li>
                                    <li>{'>'}   Link 1</li>
                                </ul>
                            </div>
                            <div>
                                <h1 className='font-bold'>Services</h1>
                                <ul className='mt-4'>
                                    <li>{'>'}   Services 1</li>
                                    <li>{'>'}   Services 1</li>
                                    <li>{'>'}   Services 1</li>
                                    <li>{'>'}   Services 1</li>
                                    <li>{'>'}   Services 1</li>
                                    <li>{'>'}   Services 1</li>
                                    <li>{'>'}   Services 1</li>
                                </ul>
                            </div>
                            <div>
                                <h1 className='font-bold'>Services</h1>
                                <ul className='mt-4'>
                                    <li>{'>'}   Services 1</li>
                                    <li>{'>'}   Services 1</li>
                                    <li>{'>'}   Services 1</li>
                                    <li>{'>'}   Services 1</li>
                                    <li>{'>'}   Services 1</li>
                                    <li>{'>'}   Services 1</li>
                                    <li>{'>'}   Services 1</li>
                                </ul>
                            </div>

                        </div>
                        <div className='text-[18px]'>
                            <h1 className='mb-4 font-bold' >Connect with</h1>
                            <div>
                                <Image src={GooglePlay} alt='google store' />
                            </div>
                            <div className='mt-3 mb-4'>
                                <Image src={AppStore} alt='google store' />
                            </div>
                            <h1 className='font-bold'>Social Media</h1>
                            <div className='flex gap-2 mt-4'>
                                <div className='h-10 w-10 flex justify-center items-center bg-white rounded-full'>
                                    <Image src={Linkedin} alt='link' width={20} height={10} />
                                </div>
                                <div className='h-10 w-10 flex justify-center items-center bg-white rounded-full'>

                                    <Image src={Instagram} alt='instagram' width={20} height={10} />
                                </div>
                                <div className='h-10 w-10 flex justify-center items-center bg-white rounded-full'>

                                    <Image src={LogoMark} alt='Logo mark' width={10} height={10} />
                                </div>
                                <div className='h-10 w-10 flex justify-center items-center bg-white rounded-full'>

                                    <Image src={Twitter} alt='twitter' width={20} height={10} />
                                </div>
                                <div className='h-10 w-10 flex justify-center items-center bg-white rounded-full'>

                                    <Image src={Youtube} alt='youtube' width={20} height={10} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-secondary py-2'>
                <div className=' w-[90%] mx-auto flex justify-between items-center'>
                    <p>&copy; 2024 eProfiles</p>

                    <div className='flex gap-3 justify-center'>
                        <Image src={Visa} alt='visa1' width={40} height={10} />
                        <Image src={Master} alt='visa2' width={40} height={20} />
                        <Image src={American} alt='visa3' width={40} height={20} />
                        <Image src={Payoneer} alt='visa4' width={40} height={20} />
                        <Image src={Stripe} alt='visa5' width={40} height={20} />
                    </div>
                    <div className='flex gap-1'>
                        <Link href='#'>Terms & conditions</Link>
                        <Link href='#'>Private Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
