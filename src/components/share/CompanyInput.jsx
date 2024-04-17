import React from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'

export default function CompanyInput({ form, name, type, label, style, isStar }) {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => {
                // console.log(field)
                return (
                    <FormItem>
                        <FormLabel>{label} {isStar && <span className='text-primary'>*</span>}</FormLabel>
                        <FormControl>
                            {type !== 'file' ? <Input type={type}  {...field} className={style} value={field?.value || ''} /> : <Input type={type} accept="image/*" onChange={(event) =>
                                field.onChange(event.target.files && event.target.files[0])
                            }  {...field} className={''} />}
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )
            }}
        />
    )
}
