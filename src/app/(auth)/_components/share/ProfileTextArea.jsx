import { Label } from '@/components/ui/label'
import React from 'react'

export default function ProfileTextArea({ style, label, isStar, change, name, value}) {
    return (
        <div className='w-full'>
            <Label >{label} {isStar && <span className='text-primary'>*</span>}</Label>
            <textarea name={name} value={value} className={style} onChange={change} />
        </div>
    )
}
