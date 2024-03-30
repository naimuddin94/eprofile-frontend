import { Company1 } from '@/assets/images'
import CustomBtn from '@/components/share/CustomBtn'
import { Eye, FilePenLine, Globe, Mail, Phone, Star, Trash2 } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function Companies() {

    return (
        <div className=' w-[90%] mx-auto my-16'>
            <div className='mb-4 flex justify-end'>
                <CustomBtn style={''} title={'Add New'} />
            </div>
            {/* companies details */}
            <div className='flex flex-col gap-5 '>
                <div className=''>
                    <div className='border-[1px] flex md:flex-row flex-col rounded-lg'>
                        <div className='flex md:w-1/2 w-full'>
                            <div className='border-r-[1px] flex items-center w-36'>
                                <Image src={Company1} alt='company1' width={130} height={100} />
                            </div>
                            <div className='w-full px-5 flex items-center py-4 border-r-[1px]'>
                                <div>
                                    <h3 className='2xl:text-2xl text-xl font-bold mb-2'>Softronixs System Ltd.</h3>
                                    <p className='text-gray-400 mb-2 text-[12px]'>Leading USA App Development Company</p>
                                    <div className='flex gap-2'>
                                        <p className='flex items-center'><Star size={20} className='mr-2 text-yellow-400' /> 5.0</p>
                                        <p>(250+)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='md:w-1/2 w-full flex md:border-t-0 border-t-[1px]'>
                            <div className='px-5 border-r-[1px] w-1/2 py-3 text-[12px] center flex-col gap-3'>
                                <div className='flex gap-2'>
                                    <Phone size={20} />
                                    <p>+8801700-000000</p>
                                </div>
                                <div className='flex gap-2'>
                                    <Mail size={20} />
                                    <p>Info@eprofiles.net</p>
                                </div>
                                <div className='flex gap-2'>
                                    <Globe  size={20}/>
                                    <p>www.eprofiles.net</p>
                                </div>
                            </div>
                            <div className='w-1/4 center border-r-[1px]'>
                                <h3 className='text-[16px] font-bold'>Published</h3>
                            </div>
                            <div className='w-1/4  flex items-center justify-between gap-3 px-2'>
                                <Eye size={20}/>
                                <FilePenLine size={20}/>
                                <Trash2 size={20}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='border-[1px] flex md:flex-row flex-col'>
                        <div className='flex md:w-1/2 w-full'>
                            <div className='border-r-[1px] flex items-center w-36'>
                                <Image src={Company1} alt='company1' width={130} height={100} />
                            </div>
                            <div className='w-full px-5 flex items-center py-4 border-r-[1px]'>
                                <div>
                                    <h3 className='2xl:text-2xl text-xl font-bold mb-2'>Softronixs System Ltd.</h3>
                                    <p className='text-gray-400 mb-2 text-[12px]'>Leading USA App Development Company</p>
                                    <div className='flex gap-2'>
                                        <p className='flex items-center'><Star size={20} className='mr-2 text-yellow-400' /> 5.0</p>
                                        <p>(250+)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='md:w-1/2 w-full flex md:border-t-0 border-t-[1px]'>
                            <div className='px-5 border-r-[1px] w-1/2 py-3 text-[12px] center flex-col gap-3'>
                                <div className='flex gap-2'>
                                    <Phone size={20} />
                                    <p>+8801700-000000</p>
                                </div>
                                <div className='flex gap-2'>
                                    <Mail size={20} />
                                    <p>Info@eprofiles.net</p>
                                </div>
                                <div className='flex gap-2'>
                                    <Globe  size={20}/>
                                    <p>www.eprofiles.net</p>
                                </div>
                            </div>
                            <div className='w-1/4 center border-r-[1px]'>
                                <h3 className='text-[16px] font-bold'>Published</h3>
                            </div>
                            <div className='w-1/4  flex items-center justify-between gap-3 px-2'>
                                <Eye size={20}/>
                                <FilePenLine size={20}/>
                                <Trash2 size={20}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='border-[1px] flex md:flex-row flex-col'>
                        <div className='flex md:w-1/2 w-full'>
                            <div className='border-r-[1px] flex items-center w-36'>
                                <Image src={Company1} alt='company1' width={130} height={100} />
                            </div>
                            <div className='w-full px-5 flex items-center py-4 border-r-[1px]'>
                                <div>
                                    <h3 className='2xl:text-2xl text-xl font-bold mb-2'>Softronixs System Ltd.</h3>
                                    <p className='text-gray-400 mb-2 text-[12px]'>Leading USA App Development Company</p>
                                    <div className='flex gap-2'>
                                        <p className='flex items-center'><Star size={20} className='mr-2 text-yellow-400' /> 5.0</p>
                                        <p>(250+)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='md:w-1/2 w-full flex md:border-t-0 border-t-[1px]'>
                            <div className='px-5 border-r-[1px] w-1/2 py-3 text-[12px] center flex-col gap-3'>
                                <div className='flex gap-2'>
                                    <Phone size={20} />
                                    <p>+8801700-000000</p>
                                </div>
                                <div className='flex gap-2'>
                                    <Mail size={20} />
                                    <p>Info@eprofiles.net</p>
                                </div>
                                <div className='flex gap-2'>
                                    <Globe  size={20}/>
                                    <p>www.eprofiles.net</p>
                                </div>
                            </div>
                            <div className='w-1/4 center border-r-[1px]'>
                                <h3 className='text-[16px] font-bold'>Published</h3>
                            </div>
                            <div className='w-1/4  flex items-center justify-between gap-3 px-2'>
                                <Eye size={20}/>
                                <FilePenLine size={20}/>
                                <Trash2 size={20}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' '>
                    <div className='border-[1px] flex md:flex-row flex-col'>
                        <div className='flex md:w-1/2 w-full'>
                            <div className='border-r-[1px] flex items-center w-36'>
                                <Image src={Company1} alt='company1' width={130} height={100} />
                            </div>
                            <div className='w-full px-5 flex items-center py-4 border-r-[1px]'>
                                <div>
                                    <h3 className='2xl:text-2xl text-xl font-bold mb-2'>Softronixs System Ltd.</h3>
                                    <p className='text-gray-400 mb-2 text-[12px]'>Leading USA App Development Company</p>
                                    <div className='flex gap-2'>
                                        <p className='flex items-center'><Star size={20} className='mr-2 text-yellow-400' /> 5.0</p>
                                        <p>(250+)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='md:w-1/2 w-full flex md:border-t-0 border-t-[1px]'>
                            <div className='px-5 border-r-[1px] w-1/2 py-3 text-[12px] center flex-col gap-3'>
                                <div className='flex gap-2'>
                                    <Phone size={20} />
                                    <p>+8801700-000000</p>
                                </div>
                                <div className='flex gap-2'>
                                    <Mail size={20} />
                                    <p>Info@eprofiles.net</p>
                                </div>
                                <div className='flex gap-2'>
                                    <Globe  size={20}/>
                                    <p>www.eprofiles.net</p>
                                </div>
                            </div>
                            <div className='w-1/4 center border-r-[1px]'>
                                <h3 className='text-[16px] font-bold'>Published</h3>
                            </div>
                            <div className='w-1/4  flex items-center justify-between gap-3 px-2'>
                                <Eye size={20}/>
                                <FilePenLine size={20}/>
                                <Trash2 size={20}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' '>
                    <div className='border-[1px] flex md:flex-row flex-col'>
                        <div className='flex md:w-1/2 w-full'>
                            <div className='border-r-[1px] flex items-center w-36'>
                                <Image src={Company1} alt='company1' width={130} height={100} />
                            </div>
                            <div className='w-full px-5 flex items-center py-4 border-r-[1px]'>
                                <div>
                                    <h3 className='2xl:text-2xl text-xl font-bold mb-2'>Softronixs System Ltd.</h3>
                                    <p className='text-gray-400 mb-2 text-[12px]'>Leading USA App Development Company</p>
                                    <div className='flex gap-2'>
                                        <p className='flex items-center'><Star size={20} className='mr-2 text-yellow-400' /> 5.0</p>
                                        <p>(250+)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='md:w-1/2 w-full flex md:border-t-0 border-t-[1px]'>
                            <div className='px-5 border-r-[1px] w-1/2 py-3 text-[12px] center flex-col gap-3'>
                                <div className='flex gap-2'>
                                    <Phone size={20} />
                                    <p>+8801700-000000</p>
                                </div>
                                <div className='flex gap-2'>
                                    <Mail size={20} />
                                    <p>Info@eprofiles.net</p>
                                </div>
                                <div className='flex gap-2'>
                                    <Globe  size={20}/>
                                    <p>www.eprofiles.net</p>
                                </div>
                            </div>
                            <div className='w-1/4 center border-r-[1px]'>
                                <h3 className='text-[16px] font-bold'>Published</h3>
                            </div>
                            <div className='w-1/4  flex items-center justify-between gap-3 px-2'>
                                <Eye size={20}/>
                                <FilePenLine size={20}/>
                                <Trash2 size={20}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
