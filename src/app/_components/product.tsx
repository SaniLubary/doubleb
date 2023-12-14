'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'
import React, { useLayoutEffect } from 'react'

const Product = ({ product, width = 300, height = 400 }: { product: { title: string, price: number, image: string, prevPrice: number }, width?: number, height?: number }) => {
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            ScrollTrigger.batch(`.product`, {
				onEnter: (batch) => gsap.to(batch,{
					scrollTrigger: {
						trigger: batch,
						scrub: 3,
						start: '100px 100%',
						end: '100px 100%',
					},
					opacity: 1,
				})
			})
        }, 'main')

        return () => ctx.revert()
    },[])
    
    return (
        <Link href={'/product/tituloRemera?category=shirt&season=summer'} className='product opacity-0 flex flex-col items-center'>
            <Image alt='shirt image' width={width} height={height} src={product.image} />
            <h6 className='base-style text-dark text-center md:text-left'>{product.title}</h6>
            <div className='flex items-center flex-col md:flex-row justify-center'>
                <span className='text-xl md:mr-2 font-semibold'>${product.price}</span>
                <span className='line-through'>${product.prevPrice}</span>
            </div>
        </Link>
    )
}

export default Product