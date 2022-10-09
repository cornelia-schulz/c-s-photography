import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Navbar({page}) {
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
          className="w-full sm:w-auto sm:flex flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0"
        >
          <li className="sm-mr-5 text-center">
            <Link
              href="/"
              aria-current="page"
            >
              <a
                className={`text-white w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1 sm:pt-2 hover:text-orange hover:underline ${page === "home" ? "text-orange" : ""}`}
              >
                Home
              </a>
            </Link>
          </li>
          <li className="text-center">
            <Link
              href="/about"
            >
              <a
                className="text-white w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1 sm:pt-2 hover:text-orange hover:underline"
              >
                About
              </a>
              
            </Link>
          </li>
          <li className="sm-ml-5 text-center">
            <Link
              href="/contact"
            >
              <a
                className="text-white w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1 sm:pt-2 hover:text-orange hover:underline"
              >
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
