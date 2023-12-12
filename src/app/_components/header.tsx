import React, { useState } from 'react'
import CartIcon from './cart-icon'
import Link from 'next/link';
import HamburgerMenu from './hamburger-menu';
import Sidenav from './sidenav';

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
            <Sidenav hamburgerOpen={hamburgerOpen} handleHamburgerClick={handleHamburgerClick} />
        </div>

    )
}

export default Header