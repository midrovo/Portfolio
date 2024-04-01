import { LeftSection } from "./LeftSection"
import { RightSection } from "./RightSection"

export const Projects = () => {
  return (
    <div className="flex flex-wrap flex-col mb-5 max-h-full">
      <div className="flex min-h-20 pt-6">
        <span className="text-3xl font-bold tracking-widest">Proyectos</span>
      </div>
      <div className="flex items-center flex-wrap justify-between">
        <LeftSection/>
        <RightSection/>
      </div>
    </div>
  )
}
