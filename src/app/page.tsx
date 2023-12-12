"use client"
import Image from 'next/image'
import Header from './_components/header';
import Button from './_components/button';
import Product from './_components/product';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

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

  return (
    <main className="grid grid-cols-12 overflow-hidden">
      <Header />
      <div className="col-span-12 bg-dark text-white grid grid-cols-6 relative overflow-hidden">
        <div className="col-start-2 col-end-6 md:col-end-4 mt-32 mb-36">
          <h1 className='md:text-6xl text-3xl break-words font-bold transition-all' onMouseEnter={changeState}>RED<span className={`${animateMirror && 'animate-mirror'} transition-all inline-block`}>E</span>FINI<span className={`${animateMirror && 'animate-mirror'} transition-all inline-block`}>MO</span>S EL <span className={`${animateMirror && 'animate-mirror'} transition-all inline-block`}>R</span>UBRO</h1>
          <h3 className='mt-4'>Tu tienda llega para redefinir tu rubro con tus productos increibles</h3>
          <div className="mt-4">
            <Button text='Ver Productos' onClick={() => router.push('/products')} />
          </div>
          <div className='flex mt-4 items-center'>
            <div className='mr-4'><Image width={32} height={32} alt='instagram logo' src={'/assets/instagram.png'} /></div>
            <div className='mr-4 bg-white p-1 rounded'><Image width={32} height={32} alt='instagram logo' src={'/assets/x.png'} /></div>
            <div><Image width={32} height={32} alt='instagram logo' src={'/assets/facebook.png'} /></div>
          </div>
        </div>
        <div className="absolute flex items-center top-64 left-36 sm:scale-100 sm:max-md:right-40 sm:max-md:top-48 sm:left-80 md:left-0 md:right-0 md:scale-100 md:row-start-1 md:top-16 md:col-start-4 md:col-end-6 overflow-hidden md:relative md:justify-center">
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
      <div className="col-span-12 bg-dark grid grid-cols-6 text-grey gap-6 py-6">
        <div className="flex flex-col col-start-2 col-end-3">
          <h1 className='text-2xl'>Tu Empresa</h1>
          <h6>Location</h6>
          <h6>Argentina, Provincia, Ciudad</h6>
          <h6>Calle 123</h6>
        </div>
        <div className="flex flex-col col-start-3 col-end-4">
          <h6 className='text-xl'>Contacto</h6>
          <h6>+54 123 123123</h6>
          <h6>hola@empresa.com</h6>
          <div className='flex mt-4 items-center'>
            <div className='mr-4'><Image width={24} height={24} alt='instagram logo' src={'/assets/instagram.png'} /></div>
            <div className='mr-4 bg-white p-1 rounded'><Image width={24} height={24} alt='instagram logo' src={'/assets/x.png'} /></div>
            <div><Image width={24} height={24} alt='instagram logo' src={'/assets/facebook.png'} /></div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-end col-start-4 col-end-6">
            <label htmlFor="emailBoletin" className='text-xl'>Unete a nuestro boletin informativo!</label>
            <div className='flex flex-row'>
              <input type="email" name="emailBoletin" id="emailBoletin" placeholder='Email' />
              <div className="ml-6">
                <Button text='Agregame!' onClick={() => console.log('submit')} />
              </div>
            </div>
        </div>
      </div>
    </main>
  )
}
