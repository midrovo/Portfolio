import Image from "next/image"
import style from "./style/carruselStyle.module.css"

interface Props {
    image:string

}

export const ImageSection = ({ image } : Props ) => {
  return (
    <section className={ style['section-image'] }>
        <Image
            src={ image }
            alt=""
            width={500}
            height={400}
            className={ style.imagen }
            
        />
    </section>
  )
}
