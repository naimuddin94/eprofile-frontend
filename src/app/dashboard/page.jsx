import React from 'react'
import { Card, div, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';
import CustomBtn from '@/components/share/CustomBtn';

export default function DashboardPage() {
    return (

        
        <div className='container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 '>
            <Card className=" bg-primary text-white">
                <CardHeader>
                    <CardTitle className=' text-[16px] text-center'>0</CardTitle>

                </CardHeader>
                <div className='flex flex-col justify-center items-center pb-5'>
                    <h1 className='font-bold'>There is a connection</h1>
                    <p className='text-center my-5'>each biodata requires 1 connection to
                        view contact information</p>
                    <Button className='border-[1px] rounded-full w-[80%] '>Send</Button>
                </div>


            </Card>
            <Card className="">
                <CardHeader>
                    <CardTitle className='text-primary text-[16px] text-center'>0</CardTitle>

                </CardHeader>
                <div className='flex flex-col justify-center items-center pb-5'>
                    <h1 className='font-bold text-primary'>Number of biodata visits</h1>
                    <p className='text-center my-5'>Number of times your biodata has been visited</p>
                    <div className='flex justify-between gap-3'>
                        <div>
                            <CustomBtn style={'smallBtn'} title={'Last 30 days'} />
                            <p className='text-center'>0</p>
                        </div>
                        <div>
                            <CustomBtn style={'smallBtn'} title={'Last 7 days'} />
                            <p className='text-center'>0</p>
                        </div>
                        <div>
                            <CustomBtn style={'smallBtn'} title={'Today'} />
                            <p className='text-center'>0</p>
                        </div>
                    </div>
                </div>

            </Card>
            <Card className="">
                <CardHeader>
                    <CardTitle className='text-primary text-[16px] text-center'>0</CardTitle>

                </CardHeader>
                <div className='flex flex-col justify-center items-center pb-5'>
                    <h1 className='font-bold text-primary'>Number of biodata visits</h1>
                    <p className='text-center my-5'>Number of times your biodata has been visited</p>
                </div>

            </Card>
            <Card className="">
                <CardHeader>
                    <CardTitle className='text-primary text-[16px] text-center'>0</CardTitle>

                </CardHeader>
                <div className='flex gap-3 pb-5 px-2'>
                    <div>
                        <ShoppingBag size={40} color='#FF6702' />
                    </div>
                    <div className='text-end'>
                        <h1 className='font-bold text-primary'>My Purchases</h1>
                        <p>All information regarding your purchase</p>
                    </div>
                </div>

            </Card>
        </div>

    )
}
