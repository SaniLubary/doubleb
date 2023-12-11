import { useRouter } from 'next/navigation'
import React from 'react'

const Button = ({ text, href, variant = 'white' }: { text: string, href: string, variant?: 'dark' | 'white' }) => {
  const router = useRouter()
  const classname = {
    'dark': 'bg-dark text-white',
    'white': 'bg-white text-dark' 
  }

  return (
    <button onClick={() => router.push(href)} className={`${classname[variant]} px-4 py-2 rounded`}>{text}</button>
  )
}

export default Button