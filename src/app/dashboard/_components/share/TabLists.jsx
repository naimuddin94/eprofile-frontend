
import React, { Suspense } from 'react'
import { Loading } from '..'

export default function TabLists({ data, value, setValue }) {
    return (
        <Suspense fallback={<Loading/>}>
            <div className='2xl:w-[30%] w-[37%] md:block hidden border-r-[1px] border-primary'>
                {data.map(item => <div onClick={() => setValue(item.value)} key={item.id} className='cursor-pointer relative mb-8'>
                    <p className={` ${value === item.value ? 'text-primary font-bold' : 'text-gray-400'}`}>{item.title}</p>
                    <div className={`absolute top-1/2 -translate-y-1/2 -right-3 w-6 h-6 border-[1px] center ${value === item.value ? 'border-primary ' : 'border-gray-400 '} rounded-full`}>
                        <div className={`w-4 h-4 ${value === item.value ? 'bg-primary' : 'bg-gray-400'} rounded-full`} />
                    </div>
                </div>)}
            </div>
        </Suspense>
    )
}
