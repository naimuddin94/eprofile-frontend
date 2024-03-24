import React from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'

export default function CustomInput({form,name, type, label}) {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>

                    <FormControl >
                        <div className="relative">
                            <Input type={type} className='input' {...field} />
                            <FormLabel className='placeholder'>{label}</FormLabel>
                        </div>

                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}
