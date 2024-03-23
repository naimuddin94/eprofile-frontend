'use client'
import  { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { CalendarIcon } from 'lucide-react'
import { Calendar } from '../ui/calendar'
import { format } from "date-fns"
import { cn } from "@/lib/utils"

export default function DatePicker() {
    const [date, setDate] = useState()
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          
          className={cn(
            " flex justify-between text-left font-normal h-12 bg-transparent border-[1px] rounded-md  px-3 py-1",
            !date && "text-gray-400"
          )}
        >
          {date ? <span className='text-gray-400'>{format(date, "PPP")}</span> : <span className='text-gray-400'>Pick a date</span>}
          <CalendarIcon className="mr-2 h-4 w-4 text-gray-400" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
