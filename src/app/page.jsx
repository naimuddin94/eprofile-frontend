

import { Home1 } from '@/assets/images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MapPin, Search } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

export default function Home() {
  // "background-image: url('your-image.jpg'); background-size: auto; background-position: center;"
  return (
    <main className=''>
      <section className={`relative bg-image w-full bg-cover h-[80vh] object-contain`}>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className='w-[90%] mx-auto py-10'>
          <div className='w-[50%]'>
            <h1 className='text-4xl font-bold my-10'>Lorem ipsum dolor sit amet consectetur. Elementum vulputate </h1>
            <p>Lorem ipsum dolor sit amet consectetur. Volutpat at mus ut viverra. Pharetra vulputate nunc nam ultricies tortor sed tellus. Elementum lorem diam duis aliquam id ullamcorper est aliquet imperdiet. Et tortor sit interdum eget.
              In orci lacus dui integer. <Link href={'#'} className='text-primary'>Read more</Link></p>
            <div className='flex gap-3 mt-5 '>
              <div className='relative'>
                <Search className='absolute top-1/2 left-1 -translate-y-1/2' />
                <Input placeholder='What are you looking for?' className='rounded-lg pl-9' />
              </div>
              <div className='relative'>

                <MapPin className='absolute top-1/2 left-1 -translate-y-1/2' />
                <Input placeholder='Add Location' className='rounded-lg pl-9' />
              </div>


              <Button className='hover:bg-[#FF6702]/40 z-50'>Find</Button>
            </div>
          </div>
        </div>
      </section>
      <section className=''>
        <div className='w-[90%] mx-auto py-10'>
          <div className='text-center '>
            <h1 className='text-2xl font-bold '>Lorem ipsum dolor sit amet consectetur.</h1>
            <p className='w-[70%] mx-auto py-5'>Lorem ipsum dolor sit amet consectetur. Volutpat at mus ut viverra. Pharetra vulputate nunc nam ultricies tortor sed tellus.</p>
            <div className='flex justify-between'>
              <Card className="w-[350px]">
                <CardHeader>
                  <CardTitle className='text-start text-[18px]'>Development</CardTitle>

                </CardHeader>
                <CardContent className='text-start pl-16'>
                  <p>Mobile App Development</p>
                  <p>Software Development</p>
                  <p>Web Development</p>
                  <p>AR/VR</p>
                  <p>Artificial Intelligence</p>
                  <p>Blockchain</p>
                </CardContent>

              </Card>
              <Card className="w-[350px]">
                <CardHeader>
                  <CardTitle className='text-start text-[18px]'>Design & Production</CardTitle>

                </CardHeader>
                <CardContent className='text-start pl-16'>
                  <p>Web Design</p>
                  <p>User Experience Design</p>
                  <p>Logo Design</p>
                  <p>Graphic Design</p>
                  <p>Design</p>
                  <p>Digital Design</p>
                </CardContent>

              </Card>
              <Card className="w-[350px]">
                <CardHeader>
                  <CardTitle className='text-start text-[18px]'>Marketing</CardTitle>

                </CardHeader>
                <CardContent className='text-start pl-16'>
                  <p>Digital Marketing</p>
                  <p>SEO</p>
                  <p>Social Media Marketing</p>
                  <p>Mobile Marketing</p>
                  <p>Content Marketing</p>
                  <p>Search Marketing</p>
                </CardContent>

              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
