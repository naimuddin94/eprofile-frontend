'use client'
import React from 'react'
import { Button } from '../ui/button'

export default function CustomBtn({style, title, click, icon, isRight}) {
  return (
    <Button className={`${style} hover:bg-[#FF6702]/40`} onClick={click}>
      {!isRight && icon}  {title} {isRight && icon}
    </Button>
  )
}
