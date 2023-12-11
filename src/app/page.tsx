"use client"
import Image from 'next/image'
import Header from './_components/header';
import Button from './_components/button';
import Product from './_components/product';

const products = new Array(20).fill({
  image: '/assets/shirt.png',
  title: 'Titulo',
  price: 14999,
  prevPrice: 17999,
})

export default function Page() {
  return (
    <main className="grid grid-cols-12 overflow-hidden">
      <Header />
      <div className="col-span-12 bg-dark text-white grid grid-cols-6 overflow-hidden">
        <div className="row-start-2 col-start-2 col-end-4 mt-32 mb-36">
          <h1 className='text-6xl break-words font-bold'>REDEFINIMOS EL RUBRO</h1>
          <h3 className='mt-4'>Tu tienda llega para redefinir tu rubro con tus productos increibles</h3>
          <div className="mt-4">
            <Button text='Ver Productos' href='/products' />
          </div>
          <div className='flex mt-4 items-center'>
            <div className='mr-4'><Image width={32} height={32} alt='instagram logo' src={'/assets/instagram.png'} /></div>
            <div className='mr-4 bg-white p-1 rounded'><Image width={32} height={32} alt='instagram logo' src={'/assets/x.png'} /></div>
            <div><Image width={32} height={32} alt='instagram logo' src={'/assets/facebook.png'} /></div>
          </div>
        </div>
        <div className="row-start-2 col-start-4 col-end-6 overflow-hidden relative flex justify-center">
          <Image className='absolute' src={'/assets/hero-bg-dude.png'} width={400} height={600} priority alt='Black dude wearing store tshirt' />
        </div>
      </div>
      <div className="col-span-12 bg-grey grid grid-cols-6">
        <div className="col-start-2 col-end-6">
          <h1 className='text-dark base-style text-2xl my-9'>Mas vendidos</h1>
          <div className="grid grid-cols-5 gap-6">
            {products.map((product) => {
              return <Product key={product.title} product={product} />
            })}
          </div>
        </div>
      </div>
    </main>
  )
}
