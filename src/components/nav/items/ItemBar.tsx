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
    <ul className="flex flex-1 flex-wrap justify-between">
      {
        items.map(item => (
          <li key={ item.path }>
            <Link className="font-semibold text-lg py-4" href={ item.path }>{ item.name }</Link>
          </li>
        ))
      }
    </ul>
  )
}
