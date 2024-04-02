import { LeftSection } from "./LeftSection"
import { RightSection } from "./RightSection"

export const Projects = () => {
  return (
    <div className="flex flex-1 flex-col my-7">
      <div className="flex flex-1 min-w-60 min-h-20 max-h-28">
        <span className="text-3xl font-bold tracking-widest">Proyectos</span>
      </div>
      <div className="flex flex-1 h-full flex-wrap my-7 max-md:my-6">
        <LeftSection/>
        <RightSection/>
      </div>
    </div>
  )
}
