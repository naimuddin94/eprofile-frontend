import Link from 'next/link'
import React from 'react'

export default function Links({title,link}) {
  return (
    <Link href={link} >{title}</Link>
  )
}
