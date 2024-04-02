'use client';
import Image from "next/image"
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5"
import style from "./style/carruselStyle.module.css"

import p1 from "@/assets/images-projects/p1.jpg";
import p2 from "@/assets/images-projects/p2.jpg";
import p3 from "@/assets/images-projects/p3.jpg";
import p4 from "@/assets/images-projects/p4.jpg";
import { useRef, useState } from "react";

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
        <div className="flex flex-1 flex-col min-w-60 rounded-b-3xl shadow-2xl">
            <div className={ style['contenedor-carrusel'] }>
                <div ref={ carruseles } className={ `${ style.carruseles }` }>
                    
                    <section className={ style['section-image'] }>
                        <Image
                            className={ style.imagen }
                            src={ p1 }
                            width={ 0 }
                            height={ 0 }
                            alt=""
                        />
                    </section>
                    <section className={ style['section-image'] }>
                        <Image
                            className={ style.imagen }
                            src={ p2 }
                            width={ 0 }
                            height={ 0 }
                            alt=""
                        />
                    </section>
                    <section className={ style['section-image'] }>
                        <Image
                            className={ style.imagen }
                            src={ p3 }
                            width={ 0 }
                            height={ 0 }
                            alt=""
                        />
                    </section>
                    <section className={ style['section-image'] }>
                        <Image
                            className={ style.imagen }
                            src={ p4 }
                            width={ 0 }
                            height={ 0 }
                            alt=""
                        />
                    </section>
                </div>
                <div
                    onClick={ moveToLeft }
                    className="absolute px-2 flex items-center h-full left-0 hover:bg-opacity-25 hover:bg-gray-500 ease-out cursor-pointer transition-all"
                >
                    <IoChevronBackOutline color="white" size={30}/>
                </div>
                <div
                    onClick={ moveToRight }
                    className="absolute px-2 flex items-center h-full right-0 hover:bg-opacity-25 hover:bg-gray-500 ease-out cursor-pointer transition-all"
                >
                    <IoChevronForwardOutline color="white" size={30}/>
                </div>
            </div>
            <div className="flex flex-1 min-h-28 justify-center bg-6200EA rounded-b-3xl max-md:min-h-36">
                <div className="flex flex-col items-center mx-8 my-4">
                    <span className="text-2xl font-bold mb-1 max-md:text-xl">Nombre del Proyecto</span>
                    <p className="text-lg text-justify max-md:text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed fermentum, tortor sit amet rhoncus malesuada,sem velit eleifend nunc,
                        vel consequat turpis enim vel nisi.
                    </p>
                </div>
            </div>
        </div>
    )
}
