import Image from "next/image"
import midrovo from "@/assets/images/midrovo.jpg"
import java from "@/assets/images/Java.png"
import typescript from "@/assets/images/TypeScript.png"
import python from "@/assets/images/Python.png"
import csharp from "@/assets/images/Csharp.png"
import dart from "@/assets/images/Dart.png"
import kotlin from "@/assets/images/Kotlin.png"
import style from './style/hexagonStyle.module.css'


export const Hexagon = () => {
  return (
    <div className={ `${ style['contenedor-relativo'] }` }>
        <div className={ `${ style['copy-hexagon'] }` }>
            <div className={ `${ style.lineas } ${ style.center }` }>
                <div className={ `${ style.circle }` }>
                    <Image
                        className={ `${ style['rotate-image-0'] } -rotate-90` }
                        src={ typescript } width={ 40 } height={ 40 }
                        alt="TypeScript"/>
                </div>
                <div className={ `${ style.circle }` }>
                    <Image
                        className={ `${ style['rotate-image-0'] } -rotate-90` }
                        src={ dart } width={ 40 } height={ 40 }
                        alt="Dart"/>
                </div>
            </div>
            <div className={ `${ style.lineas } ${ style.left }` }>
                <div className={ `${ style.circle }` }>
                    <Image
                        className={ `${ style['rotate-image-1'] }` }
                        src={ csharp } width={ 40 } height={ 40 }
                        alt="C#"/>
                </div>
                <div className={ `${ style.circle }` }>
                    <Image
                        className={ `${ style['rotate-image-1'] }` }
                        src={ python } width={ 40 } height={ 40 }
                        alt="Python"/>
                </div>
            </div>
            <div className={ `${ style.lineas } ${ style.right }` }>
                <div className={ `${ style.circle }` }>
                    <Image
                        className={ `${ style['rotate-image-2'] }` }
                        src={ java } width={ 40 } height={ 40 }
                        alt="Java"/>
                </div>
                <div className={ `${ style.circle }` }>
                    <Image
                        className={ `${ style['rotate-image-2'] }` }
                        src={ kotlin } width={ 40 } height={ 40 }
                        alt="Kotlin"/>
                </div>
            </div>
        </div>
        <div className={ `${ style.hexagon }` }>
            <Image src={ midrovo } width={ 300 } height={ 300 } alt="Mauricio Idrovo Macias."/>
        </div>
    </div>
  )
}
