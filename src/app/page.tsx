"use client"

import Image from 'next/image'
import Button from './_components/button';
import Product from './_components/product';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const products = new Array(20).fill({
  image: '/assets/shirt.png',
  title: 'Titulo',
  price: 14999,
  prevPrice: 17999,
})

export default function Page() {
  const [animateMirror, setAnimateMirror] = useState(false)
  const router = useRouter()

  const changeState = () => {
    setAnimateMirror(true)
    setTimeout(() => {
      setAnimateMirror(false); // Update state after 5 seconds
    }, 4000); // 5000 milliseconds = 5 seconds
  };

  useEffect(() => {
    changeState()
  }, [])

  return (
    <>
      <div className="hero-gradiant col-span-12 bg-dark text-white grid grid-cols-6 relative overflow-hidden gap-6">
        <div className="col-start-2 col-end-6 md:col-end-4 mt-32 mb-64 md:mb-24">
          <h1 className='break-normal lg:text-6xl text-2xl sm:max-md:w-1/2 sm:text-2xl md:text-3xl font-bold transition-all' onMouseEnter={changeState}>RED<span className={`${animateMirror && 'animate-mirror'} transition-all inline-block`}>E</span>FINI<span className={`${animateMirror && 'animate-mirror'} transition-all inline-block`}>MOS</span> EL <span className={`${animateMirror && 'animate-mirror'} transition-all inline-block`}>RUBRO</span></h1>
          <h3 className='mt-4 text-sm sm:max-md:w-1/2'>Tu tienda llega para redefinir tu rubro con tus productos increibles</h3>
          <div className="mt-4 text-sm">
            <Button text='Ver Productos' onClick={() => router.push('/products')} />
          </div>
          <div className='flex mt-4 items-center'>
            <div className='mr-4'><Image className='scale-75 sm:scale-100' width={32} height={32} alt='instagram logo' src={'/assets/instagram.png'} /></div>
            <div className='mr-4 bg-white p-1 rounded'><Image className='scale-75 sm:scale-100' width={32} height={32} alt='instagram logo' src={'/assets/x.png'} /></div>
            <div><Image className='scale-75 sm:scale-100' width={32} height={32} alt='instagram logo' src={'/assets/facebook.png'} /></div>
          </div>
        </div>
        <div className="absolute flex items-center top-80 left-48 scale-150 sm:scale-100 sm:max-md:right-40 sm:max-md:top-48 sm:left-80 md:left-0 md:right-0 md:scale-100 md:row-start-1 md:top-0 lg:top-16 md:col-start-4 md:col-end-6 overflow-hidden md:absolute md:justify-center">
          <Image className='md:top-16' src={'/assets/hero-bg-dude.png'} width={400} height={600} priority alt='Guy wearing store product' />
        </div>
      </div>
      <div className="col-span-12 bg-grey grid grid-cols-6 pb-16">
        <div className="col-start-2 col-end-6">
          <h1 className='text-dark base-style text-2xl my-9'>Mas vendidos</h1>
          <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-6">
            {products.map((product, i) => {
              return <Product key={product.title + i} product={product} />
            })}
          </div>
        </div>
      </div>
    </>
  )
}
