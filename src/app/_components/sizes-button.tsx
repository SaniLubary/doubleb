import React from 'react'

const SizesButton = ({size, className}: {size: string, className?: string}) => {
  return (
    <div className={`bg-white rounded text-dark px-4 py-1 cursor-pointer ${className}`}>{size}</div>
  )
}

export default SizesButton