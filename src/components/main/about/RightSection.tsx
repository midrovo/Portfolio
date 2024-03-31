import { Hexagon } from "./Hexagon"

export const RightSection = () => {
  return (
    <div className="flex flex-1 flex-col justify-between min-h-screen max-w-490-px">
        <Hexagon/>
        <div className='flex items-center self-center flex-1 mt-5'>
          <button className="bg-6200EA w-52 h-14 rounded-xl text-xl shadow-2xl font-semibold">Descargar CV</button>
        </div>
    </div>
  )
}
