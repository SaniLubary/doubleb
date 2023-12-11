import Image from 'next/image'
import React from 'react'

const Product = ({ product, width = 300, height = 400 }: { product: { title: string, price: number, image: string, prevPrice: number }, width?: number, height?: number }) => {
    return (
        <div className='flex flex-col'>
            <Image alt='shirt image' width={width} height={height} src={product.image} />
            <h6 className='base-style text-dark'>{product.title}</h6>
            <div className='flex items-center'>
                <span className='text-xl mr-2'>{product.price}</span>
                <span className='line-through'>{product.prevPrice}</span>
            </div>
        </div>
    )
}

export default Product