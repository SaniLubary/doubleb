import Link from 'next/link'
import React from 'react'
import CartIcon from './cart-icon'
import Button from './button'
import Product from './product'
import HamburgerMenu from './hamburger-menu'
import { useRouter } from 'next/navigation'

const Sidenav = ({ hamburgerOpen, handleHamburgerClick }: { hamburgerOpen: boolean, handleHamburgerClick: () => void }) => {
    const router = useRouter()
    return (
        <div className={`absolute flex p-8 flex-col bg-white lg:w-1/3 md:w-2/3 w-screen h-screen text-dark transition-all ${!hamburgerOpen && '-translate-x-full'}`}>
            <div className="w-fit">
                <HamburgerMenu hamburgerOpen={hamburgerOpen} handleHamburgerClick={handleHamburgerClick} />
            </div>
            <div className='flex flex-col mt-4'>
                <input name='search-button' placeholder='Busca un producto' id='search-button' className='bg-grey py-2 px-4 rounded' type="text" />
            </div>
            <div className="mt-4">
                Categorias
            </div>
            <div className="mt-4">
                Contacto
            </div>
            <div className="mt-4">
                Sobre Nosotros
            </div>
            <div className="mt-4">
                Preguntas Frecuentes
            </div>
            <div className="w-fit mt-4">
                <Link className='p-2' href='/cart'>
                    <CartIcon fill='black' />
                </Link>
            </div>
            <div className="mt-4">
                <Button variant='dark' text='Comprar Online' onClick={() => router.push('/products')} />
            </div>
            <div className="mt-4">
                <h3 className="text-2xl text-dark base-style">Ultimo Lanzamiento</h3>
                <Product width={200} height={300} product={{
                    image: '/assets/shirt.png',
                    title: 'Titulo',
                    price: 14999,
                    prevPrice: 17999,
                }} />
            </div>
        </div>
    )
}

export default Sidenav