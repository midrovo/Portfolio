import Link from "next/link"
import { IoLogoGithub, IoLogoLinkedin, IoLogoWhatsapp, IoMailOutline } from "react-icons/io5"

export const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-45 shadow-2xl">
      <div className="flex flex-1 flex-col m-14 max-md:m-8">
        <div>
          <span className="text-2xl font-bold tracking-widest max-md:text-2xl">Contactos</span>
        </div>
        <div className="flex justify-center items-center h-28 max mt-5 max-md:h-20">
          <Link className="mx-4" href={'/'}>
            <IoLogoGithub size={ 35 }/>
          </Link>
          <Link className="mx-4" href={'/'}>
            <IoLogoLinkedin size={ 35 }/>
          </Link>
          <Link className="mx-4" href={'/'}>
            <IoLogoWhatsapp size={ 35 }/>
          </Link>
          <Link className="mx-4" href={'/'}>
            <IoMailOutline size={ 35 }/>
          </Link>
        </div>
        <div className="flex justify-center">
          <p>Copyright <span className="font-extrabold">&copy;</span> 2024 <Link className="text-6200EA font-extrabold" href={''}>MGI - DEV</Link></p>
        </div>
      </div>
    </footer>
  )
}
