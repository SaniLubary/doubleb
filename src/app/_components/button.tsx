import React from 'react'

const Button = ({ text, onClick, variant = 'white' }: { text: string, onClick: () => void, variant?: 'dark' | 'white' }) => {
  const classname = {
    'dark': 'bg-dark text-white',
    'white': 'bg-white text-dark' 
  }

  return (
    <button onClick={onClick} className={`${classname[variant]} px-4 py-2 rounded`}>{text}</button>
  )
}

export default Button