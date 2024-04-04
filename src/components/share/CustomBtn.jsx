'use client'
import React from 'react'
import { Button } from '../ui/button'
import { Loader2 } from 'lucide-react'

export default function CustomBtn({ style, title, click, icon, isRight, loading }) {
  return (
    <>
      {loading ? <Button className={`${style} hover:bg-[#FF6702]/40`} onClick={click}>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Loading...
      </Button> :
        <Button className={`${style} hover:bg-[#FF6702]/40`} onClick={click}>
          {!isRight && icon}  {title} {isRight && icon}
        </Button>
      }
    </>
  )
}
