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
      className="w-full py-1 shadow sm:shadow-none"
    >
      <div className="w-full">
        <Link href="/" className="mx-auto">
          <Image
            className="h-8 w-7 mx-auto"
            src="/images/CS_photgraphy_transparent-white.png"
            alt="Cornelia Schulz Photography Logo"
            width={290}
            height={95}
          />
        </Link>
        <ul
          id="menu"
          className="w-full sm:w-auto self-end sm:self-center sm:flex flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0 hidden"
        >
          <li>
            <Link
              href="/"
              className={`text-white w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1 sm:pt-2 hover:text-orange hover:underline ${page === "home" ? "text-orange" : ""}`}
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-white w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1 sm:pt-2 hover:text-orange hover:underline"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-white w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1 sm:pt-2 hover:text-orange hover:underline"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
