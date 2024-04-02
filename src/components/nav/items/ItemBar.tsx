import Link from "next/link"

interface Props {
  path: string,
  name: string,
}

interface NavBar {
  items: Props[]
}

export const ItemBar = ( { items } : NavBar ) => {
  return (
    <ul className="flex flex-1 flex-wrap min-w-60 justify-between max-md:py-2">
      {
        items.map(item => (
          <li key={ item.path }>
            <Link className="font-semibold text-lg max-md:text-sm" href={ item.path }>{ item.name }</Link>
          </li>
        ))
      }
    </ul>
  )
}
