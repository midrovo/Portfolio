import Image, { StaticImageData } from "next/image"

interface Props {
  imagen?: StaticImageData,
  title: string,
}

export const Logo = ({ imagen, title } : Props) => {
  return (
    <div className="flex items-center">
      { imagen != null && <Image src={ imagen } width={ 70 } height={ 70 } alt="logo"/> }
      <h1 className="text-4xl tracking-widest font-bold">{ title }</h1>
    </div>
  )
}
