'use client'
import { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { CalendarIcon } from 'lucide-react'
import { Calendar } from '../ui/calendar'
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'

export default function DatePicker({form, name, label}) {
  const [date, setDate] = useState()
  return (


    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  className={cn(
                    "input bg-transparent text-gray-500",
                    !field.value && "text-gray-500"
                  )}
                >
                  {field.value ? (
                    format(field.value, "PPP")
                  ) : (
                    <span>{label}</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                disabled={(date) =>
                  date > new Date() || date < new Date("1900-01-01")
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>
         
          <FormMessage />
        </FormItem>
      )}
    />
  )
}


