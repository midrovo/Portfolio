import { LeftSection } from "./LeftSection"
import { RightSection } from "./RightSection"

export const About = () => {
  return (
    <div className="flex items-center flex-wrap justify-between mb-5">
      <LeftSection/>
      <RightSection/>
    </div>
  )
}
