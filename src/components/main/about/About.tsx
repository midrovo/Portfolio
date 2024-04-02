import { LeftSection } from "./LeftSection"
import { RightSection } from "./RightSection"

export const About = () => {
  return (
    <div className="flex flex-1 items-center flex-wrap justify-between my-7">
      <LeftSection/>
      <RightSection/>
    </div>
  )
}
