import React, { useState } from 'react'
import CartIcon from './cart-icon'
import Link from 'next/link';
import HamburgerMenu from './hamburger-menu';
import Button from './button';
import Product from './product';

const Header = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const handleHamburgerClick = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    return (
        <div className='z-10 fixed w-full grid grid-cols-6 text-white'>
            <div className="flex justify-between flex-row items-center my-6 col-start-2 col-end-6">
                <HamburgerMenu hamburgerOpen={hamburgerOpen} handleHamburgerClick={handleHamburgerClick} />
                <Link href={'/'}>
                    <h1 className='p-2 cursor-pointer'>tu tienda</h1>
                </Link>
                <Link className='p-2' href='/cart'>
                    <CartIcon />
                </Link>
            </div>
            <div className={`absolute flex p-8 flex-col bg-white w-1/3 h-screen text-dark transition-all ${hamburgerOpen && '-translate-x-full'}`}>
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
                    <Button variant='dark' text='Comprar Online' href='/products' />
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
        </div>

    )
}

export default Header