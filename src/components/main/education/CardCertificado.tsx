import Link from "next/link"

interface Props {
  valor:number,
}

export const CardCertificado = ({ valor } : Props) => {
  return (
    <div className="flex bg-white items-center shadow-2xl rounded-3xl my-2 min-w-60">
      <span className="flex flex-1 items-center justify-center basis-80 text-black text-center font-semibold mx-5 max-md:text-sm">
          {`Certificado # ${ valor }`}
      </span>
      <Link className="flex flex-1 justify-center basis-20 text-white font-bold py-5 rounded-r-3xl shadow-2xl bg-6200EA max-md:text-sm" href={'/'}>Ver</Link>        
    </div>
  )
}
