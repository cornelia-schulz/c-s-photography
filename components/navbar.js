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
      name: 'Shop',
      link: 'https://www.redbubble.com/people/firzhugh/shop?asc=u&ref=account-nav-dropdown'
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
          <a>
            <Image
              src="/images/CS_photgraphy_transparent-white.png"
              alt="Cornelia Schulz Photography Logo"
              width={250}
              height={80}
            />
          </a>
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
                href={menuItem.link}
                aria-current="page"
              >
                <a
                  className={`text-white w-full no-underline sm:w-auto hover:text-orange hover:underline ${page.toLowerCase() === menuItem.name.toLowerCase() ? "text-orange" : ""}`}
                  target={menuItem.name === "Shop"? "_blank" : ""}
                  rel="noreferrer"
                >
                  {menuItem.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
