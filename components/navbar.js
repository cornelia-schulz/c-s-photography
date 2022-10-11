import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Navbar({page}) {
  const menuItems = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'About',
      link: '/about'
    },
    {
      name: 'Photographs',
      link: '/gallery'
    },
    {
      name: 'Contact',
      link: '/contact'
    }
  ]

  useEffect(() => {
    console.log(page)
  })
  return (
    <nav
      id="site-menu"
      className="w-full shadow sm:shadow-none"
    >
      <div className="flex flex-col items-center">
        <Link href="/">
          <Image
            src="/images/CS_photgraphy_transparent-white.png"
            alt="Cornelia Schulz Photography Logo"
            width={250}
            height={80}
          />
        </Link>
        <ul
          id="menu"
          className="w-full sm:w-auto sm:flex flex-col sm:flex-row items-center justify-center h-full pb-5"
        >
          {menuItems.map((menuItem, index) => (
            <li key={index} className="py-2 sm-py-5 px-3 text-center">
              <Link
                href={menuItem.link}
                aria-current="page"
              >
                <a
                  className={`text-white w-full no-underline sm:w-auto 2 hover:text-orange hover:underline ${page === "home" ? "text-orange" : ""}`}
                >
                  {menuItem.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
