import Image, { StaticImageData } from "next/image";

interface Props {
    name: string
    imagen: StaticImageData[]
}

export const Cards = ({ name, imagen } : Props) => {
  return (
    <div className="flex flex-1 w-3/4 min-w-60 min-h-36 my-4 max-md:min-h-24 max-md:my-3 max-md:w-full">
        <div className="flex flex-1 max-w-350-px justify-center items-center bg-6200EA rounded-tl-3xl max-md:max-w-36">
            <span className="text-xl font-semibold text-white max-md:text-sm">{ name }</span>
        </div>
        <div className="flex flex-1 items-center justify-between flex-wrap bg-white shadow-2xl rounded-br-3xl px-6 py-5 max-md:p-3 max-md:justify-around">
            {
                imagen.map(imagen => (
                    <Image
                        className="max-md:max-w-7 max-md:max-h-7"
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
