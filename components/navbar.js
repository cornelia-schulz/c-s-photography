import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar({page}) {
  const menuItems = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'Photographs',
      link: '/gallery'
    },
    {
      name: 'About',
      link: '/about'
    },
    {
      name: 'Prints',
      link: '/prints'
    },
    {
      name: 'Contact',
      link: '/contact'
    }
  ]
  const [menuShow, setMenuShow] = useState(false)

  return (
    <nav className="w-full">
      <div className="flex flex-col items-center">
        <Link href="/">
          <Image
            src="/images/CS_photgraphy_transparent-white.png"
            alt="Cornelia Schulz Photography Logo"
            className="w-auto"
            width={190}
            height={80}
          />
        </Link>
        <button
         className="sm:hidden text-center"
         onClick={() => {
            setMenuShow(!menuShow)
          }}>Menu</button>
        <ul
          className={`${menuShow ? "h-auto" : "invisible h-0"} sm:mr-8 mt-2 peer-checked:h-auto sm:h-auto w-full sm:visible sm:w-auto sm:flex flex-col sm:flex-row items-center justify-center pb-5`}
        >
          {menuItems && menuItems.map((menuItem, index) => (
            <li key={index} className="py-2 sm-py-5 px-3 text-center">
              <Link
                className={`w-full no-underline sm:w-auto hover:text-orange hover:underline ${page.toLowerCase() === menuItem.name.toLowerCase() ? "text-orange" : "text-white"}`}
                href={menuItem.link}
                aria-current="page"
              >
                {menuItem.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
