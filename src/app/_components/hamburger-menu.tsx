import React from 'react'

const HamburgerMenu = ({hamburgerOpen, handleHamburgerClick}: {hamburgerOpen: boolean, handleHamburgerClick: () => void}) => {
    return (
        <div className='hamburger-menu flex flex-col cursor-pointer p-2' onClick={handleHamburgerClick}>
            <div className={`w-6 rounded transition-all mb-1 border-2 ${hamburgerOpen && '-rotate-45 translate-y-1'}`}></div>
            <div className={`w-6 rounded transition-all mb-1 border-2 ${hamburgerOpen && 'hidden'}`}></div>
            <div className={`w-6 rounded transition-all border-2 ${hamburgerOpen && 'rotate-45 -translate-y-1'}`}></div>
        </div>
    )
}

export default HamburgerMenu