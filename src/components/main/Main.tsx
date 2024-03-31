import { About } from "./about/About"
import { Education } from "./education/Education"
import { Projects } from "./projects/Projects"
import { Skills } from "./skills/Skills"

export const Main = () => {
  return (
    <main className="flex flex-1 justify-center">
      <div className="flex flex-1 flex-col m-14 flex-wrap">
        <About/>
        <Skills/>
        <Projects/>
        <Education/>
      </div>
    </main>
  )
}
