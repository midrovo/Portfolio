import { ItemBar } from "./items/ItemBar"
import { Logo } from "./logo/Logo"

const itemsNav = [
  { path: "/sobre-mi", name: "Sobre mi" },
  { path: "/skills", name: "Skills" },
  { path: "/proyectos", name: "Proyectos" },
  { path: "/educacion", name: "Educación" },
  { path: "/contactos", name: "Contactos" },
]

export const NavBar = () => {

  return (
    <nav className="flex items-center bg-6200EA sticky top-0 z-50">
      <div className="flex flex-wrap flex-1 items-center justify-between mx-14 my-4">
        <Logo title="MGI - { DEV }"/>
        <div className="flex-1"></div>
        <ItemBar items={ itemsNav }/>
      </div>
    </nav>
  )
}
