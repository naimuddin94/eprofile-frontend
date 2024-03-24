import React from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

export default function CustomSelect({ form, name, label, items }) {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                            <div className='relative'>
                                <SelectTrigger  className='input bg-transparent'>
                                    <SelectValue  placeholder={label}/>
                                </SelectTrigger>
                                
                            </div>
                        </FormControl>
                        <SelectContent>
                            {items.map(item => <SelectItem key={item.id} value={item.value}>{item.title}</SelectItem>)}

                        </SelectContent>
                    </Select>

                    <FormMessage />
                </FormItem>
            )}
        />
    )
}
