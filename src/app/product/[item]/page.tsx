'use client'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Breadcrumbs from "../../_components/breadcrumbs";
import Image from "next/image";
import Star from "@/app/_components/star";
import Circle from "@/app/_components/circle";
import SizesButton from "@/app/_components/sizes-button";
import Button from "@/app/_components/button";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
    return <div className="bg-dark text-white text-base py-24 col-span-12 grid grid-cols-6 gap-6">
        <Breadcrumbs />
        <div className="col-start-2 col-end-4">
            <Image className="rounded" alt='shirt image' width={500} height={500} src={'/assets/shirt.png'} />
            <div className="flex justify-between mt-4">
                {Array(4).fill(0).map((_v, i) => {
                    return <Image className="rounded" key={i + 'shirt_extra_images'} alt='shirt image' width={100} height={100} src={'/assets/shirt.png'} />
                })}
            </div>
        </div>
        <div className="col-start-4 col-end-6">
            <h1 className="text-3xl font-bold">Nombre de la remera</h1>
            <div className="flex items-center mt-4">
                <div className="pr-2 text-yellow">0,0</div>
                <Star stars={4} />
                <div className="pl-4 text-grey font-normal">0 Reviews</div>
            </div>
            <div className="flex items-center">
                <span className="text-grey line-through mr-2">$13999</span>
                <span className="font-bold mr-2 text-lg">$12999</span>
                <span className="text-red">-10%</span>
            </div>
            <div className="flex items-center mt-4">
                <span className="text-lg">Color</span>
                <Circle className="mx-2" color={'#78bb3d'} />
                <Circle className="mr-2" color={'#902525'} />
                <Circle className="mr-2" color={'#275281'} />
                <Circle className="mr-2" color={'#ccac43'} />
                <Circle color={'#d170c5'} />
            </div>
            <div className="flex items-center mt-4">
                <span className="text-lg">Talle</span>
                <SizesButton size="S" className="mx-2" />
                <SizesButton size="M" className="mr-2" />
                <SizesButton size="L" className="mr-2" />
                <SizesButton size="XL" />
            </div>
            <div className="flex font-bold text-lg flex-col mt-4">
                <span>-&gt;Envios gratis</span>
                <span>-&gt;Devolucion gratis</span>
            </div>
            <div className="mt-4">
                <Button text="Agregar al carrito" onClick={() => { }} variant="yellow" />
            </div>
        </div>

        <div className="col-start-2 col-end-6 mt-4">
            <div className="border-b-2">
                <span className="cursor-pointer mr-4 text-2xl border-b-2">Detalles</span>
                <span className="cursor-pointer mr-4 text-2xl">Envios</span>
                <span className="cursor-pointer text-2xl">Devoluciones</span>
            </div>
            <div className="mt-4">
                <p>Descripcion ssobre detallees de la remera</p>
                <p>Composicion, tips para el laavado, etc</p>
            </div>
        </div>

        <div className="col-start-2 col-end-6">
            <h1 className="text-3xl font-bold">Reviews</h1>
            {Array(5).fill(0).map((_v, i) => {
                return <div key={i+'review-card'} className="review-card-bg p-2 my-4 rounded flex flex-col">
                    <p className="mb-4">Review del producto que hizo alguna persona</p>
                    <div className="flex justify-between items-end">
                        <div className="flex items-center">
                            <Circle color="grey" />
                            <div className="ml-2 flex flex-col">
                                <span>Nombre de Usuario</span>
                                <div className="flex items-center">
                                    <span className="text-yellow mr-2   ">0,0</span>
                                    <Star className="scale-75" stars={4} />
                                </div>
                            </div>
                        </div>
                        <div>
                            03/03/2023
                        </div>
                    </div>
                </div>
            })}
        </div>
    </div>
}