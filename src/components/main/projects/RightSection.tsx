import Image from "next/image"

import nestjs from "@/assets/images-skills/NestJS.png";
import nextjs from "@/assets/images-skills/Next.js.png";
import react from "@/assets/images-skills/React.png";
import docker from "@/assets/images-skills/Docker.png";

export const RightSection = () => {
  return (
    <div className="flex flex-1 basis-2/5 min-w-60 max-md:min-w-full my-2">
      <div className="flex flex-col flex-1 ml-4 max-md:ml-0">
        <div className="flex flex-1 max-h-20 min-h-20 justify-center items-center rounded-t-3xl bg-6200EA">
          <span className="text-lg font-bold tracking-widest max-md:text-base">TECNOLOGIAS</span>
        </div>
        <div className="flex flex-1 min-h-80 justify-center items-center bg-white max-md:min-h-60">
          <div className="flex justify-around flex-wrap min-w-60">
            <Image
              style={ { margin: "5px", } }
              src={ nestjs }
              width={ 40 }
              height={ 40 }
              alt=""
            />
            <Image
              style={ { margin: "5px" } }
              src={ nextjs }
              width={ 40 }
              height={ 40 }
              alt=""
            />
            <Image
              style={ { margin: "5px" } }
              src={ react }
              width={ 40 }
              height={ 40 }
              alt=""
            />
            <Image
              style={ { margin: "5px" } }
              src={ docker }
              width={ 40 }
              height={ 40 }
              alt=""
            />
            
          </div>
        </div>
        <div className="flex  flex-1 flex-col">
          <button className="flex-1 min-h-12 bg-6200EA mb-1 text-lg tracking-widest font-bold max-md:text-base">GITHUB</button>
          <button className="flex-1 min-h-12 rounded-b-3xl bg-6200EA text-lg tracking-widest font-bold max-md:text-base">DEMO</button>
        </div>
      </div>
    </div>
  )
}
