import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import React from 'react'

export default function ProfileSelect({ label, items, value, change, name }) {
    let currentValue = value || "DEFAULT";
    return (
        <select name={name} value={value} defaultValue={"DEFAULT"} onChange={change} className="w-full h-12 rounded-lg mt-2  border-primary border-[1px] px-4 bg-white shadow-3xl">
            <option value={"DEFAULT"} >{label}</option>
            {items.map(item => (
                <option key={item.id} value={item.value}>{item.title}</option>
            ))}
        </select>
    )
}
