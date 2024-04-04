import { LeftSection } from "./LeftSection"
import { RightSection } from "./RightSection"

export const Projects = () => {
  return (
    <div className="flex flex-1 flex-col my-7">
      <div className="flex flex-1 min-w-60 min-h-20 max-h-28">
        <span className="text-3xl font-extrabold tracking-widest max-md:text-2xl">Proyectos</span>
      </div>
      <div className="flex flex-1 flex-wrap my-3 py-2 justify-between max-md:py-1">
        <LeftSection/>
        <RightSection/>
      </div>
    </div>
  )
}
