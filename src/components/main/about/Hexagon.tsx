import Image from "next/image"
import style from './style/hexagonStyle.module.css'

import midrovo from "@/assets/images/midrovo.jpg"
import java from "@/assets/images/Java.png"
import typescript from "@/assets/images/TypeScript.png"
import python from "@/assets/images/Python.png"
import csharp from "@/assets/images/Csharp.png"
import dart from "@/assets/images/Dart.png"
import kotlin from "@/assets/images/Kotlin.png"

export const Hexagon = () => {
  return (
    <div className={ `${ style['contenedor-relativo'] }` }>
        <div className={ `${ style['copy-hexagon'] }` }>
            <div className={ `${ style.lineas } ${ style.center }` }>
                <div className={ `${ style.circle }` }>
                    <Image
                        className={ `${ style['rotate-image-0'] } -rotate-90` }
                        src={ typescript }
                        alt="TypeScript"/>
                </div>
                <div className={ `${ style.circle }` }>
                    <Image
                        className={ `${ style['rotate-image-0'] } -rotate-90` }
                        src={ dart }
                        alt="Dart"/>
                </div>
            </div>
            <div className={ `${ style.lineas } ${ style.left }` }>
                <div className={ `${ style.circle }` }>
                    <Image
                        className={ `${ style['rotate-image-1'] }` }
                        src={ csharp }
                        alt="C#"/>
                </div>
                <div className={ `${ style.circle }` }>
                    <Image
                        className={ `${ style['rotate-image-1'] }` }
                        src={ python }
                        alt="Python"/>
                </div>
            </div>
            <div className={ `${ style.lineas } ${ style.right }` }>
                <div className={ `${ style.circle }` }>
                    <Image
                        className={ `${ style['rotate-image-2'] }` }
                        src={ java }
                        alt="Java"/>
                </div>
                <div className={ `${ style.circle }` }>
                    <Image
                        className={ `${ style['rotate-image-2'] }` }
                        src={ kotlin }
                        alt="Kotlin"/>
                </div>
            </div>
        </div>
        <div className={ style['contenedor-hexagon'] }>
            <Image
                className={ `${ style.hexagon }` }
                src={ midrovo }
                alt="Mauricio Idrovo Macias." />
        </div>
    </div>
  )
}
