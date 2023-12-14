'use client'

import Image from 'next/image'
import React from 'react'
import Button from './button'

const Footer = () => {
  return (
    <div className="col-span-12 bg-dark grid grid-cols-6 text-grey gap-6 py-6">
        <div className="flex flex-col col-span-6 items-center lg:items-start lg:col-span-1 lg:col-start-2 lg:col-end-3">
          <h1 className='text-2xl'>Tu Empresa</h1>
          <h6>Location</h6>
          <h6 className='text-center lg:text-start'>Argentina, Provincia, Ciudad</h6>
          <h6>Calle 123</h6>
        </div>
        <div className="flex flex-col col-span-6 items-center lg:items-start lg:col-span-1 lg:col-start-3 lg:col-end-4">
          <h6 className='text-xl'>Contacto</h6>
          <h6>+54 123 123123</h6>
          <h6>hola@empresa.com</h6>
          <div className='flex mt-4 items-center'>
            <div className='mr-4'><Image width={24} height={24} alt='instagram logo' src={'/assets/instagram.png'} /></div>
            <div className='mr-4 bg-white p-1 rounded'><Image width={24} height={24} alt='instagram logo' src={'/assets/x.png'} /></div>
            <div><Image width={24} height={24} alt='instagram logo' src={'/assets/facebook.png'} /></div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center col-span-6 lg:col-span-1 lg:col-start-4 lg:col-end-6">
            <label htmlFor="emailBoletin" className='text-xl'>Unete a nuestro boletin informativo!</label>
            <div className='flex flex-row'>
              <input type="email" name="emailBoletin" id="emailBoletin" placeholder='Email' />
              <div className="ml-6">
                <Button text='Agregame!' onClick={() => console.log('submit')} />
              </div>
            </div>
        </div>
      </div>
  )
}

export default Footer