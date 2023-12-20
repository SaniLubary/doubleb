import React from 'react'
import CartIcon from './cart-icon'

const Button = ({ text, onClick, variant = 'white' }: { text: string, onClick: () => void, variant?: 'dark' | 'white' | 'yellow' }) => {
  const classname = {
    'dark': 'bg-dark text-white',
    'white': 'bg-white text-dark',
    'yellow': 'bg-yellow text-dark py-4 px-6' 
  }

  return (
    <button onClick={onClick} className={`${classname[variant]} px-4 py-2 rounded`}>{variant === 'yellow' && <CartIcon fill='black' />}&nbsp;&nbsp;{text}</button>
  )
}

export default Button