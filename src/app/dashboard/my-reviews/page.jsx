import React from 'react'
import { ComingSoon, DashboardHeader } from '../_components'
import { Company1 } from '@/assets/images'
import Image from 'next/image'
import { Star } from 'lucide-react'


const data = [
  {
    id: 1,
    logo: Company1,
    name: 'Softronixs System Ltd.',
    review: 5,
    title: 'I will be full stack web and software developer build applications',
    desc: 'Thank you for your work, Ivan! Your speed will make us excellent partners. I have reviewed a top design and SEO-friendly website, and I am very satisfied. The site is lightweight and meets my expectations. I highly recommend this professional and reliable seller.',
    time: 'Sep 12, 2023 at 1:10 PM'
  },
  {
    id: 2,
    logo: Company1,
    name: 'Softronixs System Ltd.',
    review: 5,
    title: 'I will be full stack web and software developer build applications',
    desc: 'Thank you for your work, Ivan! Your speed will make us excellent partners. I have reviewed a top design and SEO-friendly website, and I am very satisfied. The site is lightweight and meets my expectations. I highly recommend this professional and reliable seller.',
    time: 'Sep 12, 2023 at 1:10 PM'
  },
  {
    id: 3,
    logo: Company1,
    name: 'Softronixs System Ltd.',
    review: 5,
    title: 'I will be full stack web and software developer build applications',
    desc: 'Thank you for your work, Ivan! Your speed will make us excellent partners. I have reviewed a top design and SEO-friendly website, and I am very satisfied. The site is lightweight and meets my expectations. I highly recommend this professional and reliable seller.',
    time: 'Sep 12, 2023 at 1:10 PM'
  },
  {
    id: 4,
    logo: Company1,
    name: 'Softronixs System Ltd.',
    review: 5,
    title: 'I will be full stack web and software developer build applications',
    desc: 'Thank you for your work, Ivan! Your speed will make us excellent partners. I have reviewed a top design and SEO-friendly website, and I am very satisfied. The site is lightweight and meets my expectations. I highly recommend this professional and reliable seller.',
    time: 'Sep 12, 2023 at 1:10 PM'
  },
]

export default function MyReviewsPage() {
  return (
    // <ComingSoon/>
    <div className='container'>
      <DashboardHeader title={'My Review'} btnTitle={'My Review'} isSearch={true} />
      <div className='mt-10'>
        {data.map(item => (
          <div key={item.id} className='space-y-3 py-3 border-b-[1px] border-primary'>
            {/* logo and company name */}
            <div className='flex gap-2 items-center'>
              <Image src={item.logo} alt={item.logo} className='w-10 h-10 border-[1px] object-cover rounded-full' />
              <h1 className='font-bold'>{item.name}</h1>
            </div>
            <div className='flex gap-2 items-center'>
              <svg width="15" height="15" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.673 10.2338C23.7437 9.42391 23.1709 7.71724 21.8284 7.71724H16.3459C15.732 7.71724 15.1897 7.31728 15.0084 6.73075L13.3375 1.32637C12.9309 0.0110528 11.0691 0.0110564 10.6625 1.32637L8.99165 6.73075C8.81032 7.31728 8.26802 7.71724 7.65411 7.71724H2.12961C0.791416 7.71724 0.215918 9.4148 1.27822 10.2286L5.86136 13.7396C6.32552 14.0952 6.51981 14.7018 6.34863 15.2609L4.64629 20.8207C4.24749 22.1232 5.755 23.1704 6.83634 22.342L11.1486 19.0384C11.651 18.6536 12.349 18.6536 12.8514 19.0384L17.1474 22.3295C18.2302 23.159 19.7392 22.1079 19.3363 20.8046L17.61 15.2206C17.4359 14.6577 17.633 14.046 18.1029 13.6906L22.673 10.2338Z" fill="#FFAD33" />
              </svg> {item.review}
            </div>
            <h1 className='font-bold'>{item.title}</h1>
            <p>{item.desc}</p>
            <p><small>{item.time}</small></p>
          </div>
        ))}
      </div>
    </div>
  )
}
