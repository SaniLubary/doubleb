'use client'

import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../_components/button";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
    const router = useRouter()

    return <>
        <div className="hero-gradiant col-span-12 grid grid-cols-6 gap-6">
            <div className="col-start-4 text-center flex items-center col-end-7 mt-24 mb-6 md:col-start-2 md:col-end-6 md:mt-32 md:mb-0">
                <h1 className="text-2xl md:text-6xl font-bold">SOBRE NOSOTROS</h1>
            </div>
            <div className="mb-12 col-start-1 col-end-4 row-start-1 mt-24 md:mt-0 md:row-start-2 md:col-start-1 md:col-end-4 ">
                <Image src={'/assets/colorful-blob.png'} width={577} height={696} alt="colorful blob" />
            </div>
            <div className="mb-12 row-start-2 col-start-2 col-end-6 md:row-start-2 md:col-start-4 md:col-end-6 text-grey">
                <p className="mb-6">Somos más que una marca de X. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda repellendus quo optio excepturi, quidem itaque vitae dolorum debitis rerum? Vitae reiciendis non facilis velit odio placeat deserunt cumque repellendus consequuntur.</p>
                <p className="mb-6">Assumenda repellendus quo optio excepturi, quidem itaque vitae dolorum debitis rerum? Vitae reiciendis non facilis velit odio placeat deserunt cumque repellendus consequuntur.</p>
                <p className="mb-6">Vitae reiciendis non facilis velit odio placeat deserunt cumque repellendus consequuntur.</p>
                <Button text="Ver Productos" variant="white" onClick={() => router.push('/')} />
            </div>
        </div>
        <div className="col-span-12 bg-grey grid grid-cols-6 pt-6 lg:pt-16">
            <div className="flex flex-col col-start-2 col-end-6 lg:col-end-4">
                <label htmlFor="emailBoletin" className='text-xl'>Unete a nuestro boletin informativo!</label>
                <div className='flex flex-col'>
                    <input className="py-2 px-4 rounded my-4" type="email" name="emailBoletin" id="emailBoletin" placeholder='Email' />
                    <Button text='Agregame!' onClick={() => console.log('submit')} />
                </div>
            </div>
            <div className="mt-12 lg:mt-0 row-start-2 col-start-2 col-end-6 lg:col-start-4 lg:row-start-1">
                <Image src={'/assets/subscription-image.png'} width={500} height={700} alt="Shirts and a girl posing" />
            </div>
        </div>
    </>
}