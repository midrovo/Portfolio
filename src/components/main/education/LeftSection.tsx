import Image from "next/image";

import titulo from "@/assets/images-projects/p2.jpg";
import Link from "next/link";

export const LeftSection = () => {
  return (
    <div className="flex flex-1 flex-col min-w-60 my-2">
        <div className="flex-1">
            <Image
                src={ titulo }
                width={ 500 }
                height={ 300 }
                alt=""
                style={ {
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderTopLeftRadius: "24px",
                    borderTopRightRadius: "24px",
                } }
            />
        </div>
        <div className="flex flex-col items-center py-4 bg-6200EA rounded-b-3xl">
            <span className="text-lg font-bold tracking-widest max-md:text-base max-md:text-center">INGENIERIA EN SISTEMAS DE INFORMACION</span>
            <span className="font-semibold max-md:text-sm mt-1">Inicio: dic, 2020. - Fin: dic, 2025.</span>
            <Link className="font-extrabold mt-3 max-md:text-sm tracking-widest" href={"/"}>VER REGISTRO</Link>
        </div>
    </div>
  )
}
