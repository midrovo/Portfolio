import Image, { StaticImageData } from "next/image";

interface Props {
    name: string
    imagen: StaticImageData[]
}

export const Cards = ({ name, imagen } : Props) => {
  return (
    <div className="flex w-full max-w-3xl items-center justify-center flex-wrap my-5">
        <div className="flex flex-1 min-w-72 min-h-28 justify-center items-center shadow-2xl bg-6200EA rounded-tl-3xl">
            <span className="text-xl font-semibold">{ name }</span>
        </div>
        <div className="flex flex-auto items-center min-h-28 justify-between flex-wrap px-5 py-4 shadow-2xl bg-white rounded-br-3xl">
            {
                imagen.map(imagen => (
                    <Image
                        className="p-2"
                        key={ imagen.src }
                        src={ imagen }
                        width={ 70 }
                        height={ 70 }
                        alt=""
                    />
                ))
            }
        </div>
    </div>
  )
}
