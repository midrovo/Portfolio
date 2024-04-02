import Image, { StaticImageData } from "next/image"

interface Props {
  imagen?: StaticImageData,
  title: string,
}

export const Logo = ({ imagen, title } : Props) => {
  return (
    <div className="flex min-w-60 flex-1 items-center max-md:justify-center max-md:py-2">
      { imagen != null && <Image src={ imagen } width={ 70 } height={ 70 } alt="logo"/> }
      <h1 className="text-4xl tracking-widest font-bold max-md:text-3xl">{ title }</h1>
    </div>
  )
}
