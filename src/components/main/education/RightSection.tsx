import { CardCertificado } from "./CardCertificado"

const list = Array.from({ length: 15 })

export const RightSection = () => {
  return (
    <div className="flex flex-1 flex-col min-h-80 min-w-60 ml-4 max-md:ml-0 max-md:min-w-full rounded-b-3xl my-2">
        <div className="flex items-center justify-center bg-6200EA min-h-20 rounded-t-3xl">
            <span className="text-lg font-bold tracking-widest max-md:text-base">CERTIFICADOS</span>
        </div>
        <div className="flex flex-1 max-h-440-px flex-col overflow-hidden transition-all overflow-y-scroll px-5 py-3 bg-white bg-opacity-20 rounded-b-3xl max-md:max-h-60">

          {
            list.map((element, index) => (
              <CardCertificado key={ index } valor={ index + 1 }/>
            ))
          }            

        </div>
    </div>
  )
}
