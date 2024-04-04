'use client';
import Image from "next/image"
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5"
import style from "./style/carruselStyle.module.css"

import p1 from "@/assets/images-projects/p1.jpg";
import p2 from "@/assets/images-projects/p2.jpg";
import p3 from "@/assets/images-projects/p3.jpg";
import p4 from "@/assets/images-projects/p4.jpg";
import { useRef, useState } from "react";
import { ImageSection } from "./ImageSection";

const imagenes = [
    { id: 1, src: p1.src },
    { id: 2, src: p2.src },
    { id: 3, src: p3.src },
    { id: 4, src: p4.src },
]

export const LeftSection = () => {
    const carruseles = useRef<HTMLDivElement>(null);
    const [ tamano, setTamano ] = useState({ valor: 0, contador: 0, });

    const longitud = () => {
        return carruseles.current?.children ? carruseles.current?.children.length : 0;
    }

    const moveToRight = () => {
        const porcion = tamano.contador < longitud() - 1 ? tamano.valor + 100 / longitud() : 0;
        const count = tamano.contador < longitud() - 1 ? tamano.contador + 1 : 0;

        if(carruseles.current?.style) {
            carruseles.current.style.transform = `translateX(-${ porcion }%)`;
            carruseles.current.style.transition = tamano.contador < longitud() - 1 ? 'all ease-out 1s' : 'none';
        }

        setTamano({ ...tamano, valor: porcion, contador: count, });

    }

    const moveToLeft = () => {
        const porcion = tamano.contador == 0 ? (100 / longitud()) * (longitud() - 1) : tamano.valor - 100 / longitud();
        const count = tamano.contador == 0 ? longitud() - 1 : tamano.contador - 1;

        if(carruseles.current?.style) {
            carruseles.current.style.transform = `translateX(-${ porcion }%)`;
            carruseles.current.style.transition =  tamano.contador == 0 ? 'none' : 'all ease-out 1s';
        }

        setTamano({ ...tamano, valor: porcion, contador: count, });
    }
    
    return (
        <div className="flex flex-1 basis-3/5 flex-col min-w-60 my-2">
            <div className="relative flex flex-1 overflow-hidden rounded-t-3xl max-h-400-px">
                <div ref={ carruseles } className={ `${ style.carruseles }` }>
                    {
                        imagenes.map(imagen => (
                            <ImageSection key={ imagen.id } image={ imagen.src }/>
                        ))
                    }
                    
                </div>
                <div
                    onClick={ moveToLeft }
                    className="absolute flex items-center left-0 top-0 bottom-0 px-2 hover:cursor-pointer hover:bg-gray-800 hover:bg-opacity-50"
                >
                    <IoChevronBackOutline color="white" size={30}/>
                </div>
                <div
                    onClick={ moveToRight }
                    className="absolute flex items-center right-0 top-0 bottom-0 px-2 hover:cursor-pointer hover:bg-gray-800 hover:bg-opacity-50"
                >
                    <IoChevronForwardOutline color="white" size={30}/>
                </div>
            </div>
            <div className="bg-6200EA rounded-b-3xl">
                <div className="flex flex-col items-center justify-center mx-6 my-5">
                    <span className="text-lg font-bold tracking-widest mb-2 max-md:text-base">NOMBRE DEL PROYECTO</span>
                    <p className="text-base font-semibold text-center max-md:text-sm max-md:font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed fermentum, tortor sit amet rhoncus malesuada,sem velit eleifend nunc,
                        vel consequat turpis enim vel nisi.
                    </p>
                </div>
            </div>
        </div>
    )
}
