
import { Label } from '@/components/ui/label'
import React from 'react'


export default function ProfileInput({type, style, label, isStar, change, name, value}) {
    return (
        <div className='w-full'>
            <Label >{label} {isStar&&<span className='text-primary'>*</span>}</Label>
            <input name={name} value={value} type={type} className={style} onChange={change}/>
        </div>
    )
}
