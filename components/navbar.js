import Image from "next/image"
import { useEffect } from "react"

export default function Navbar({page}) {
  useEffect(() => {
    console.log(page)
  })
  return (
    <nav
      id="site-menu"
      className="flex flex-col sm:flex-row w-full justify-between items-center py-1 shadow sm:shadow-none"
    >
      <div className="w-full self-start sm:self-center flex flex-row flex-no-wrap justify-between items-center">
        <a href="/">
          <Image
            className="h-8 w-8 mr-2"
            src="/images/CS_photgraphy_transparent-white.png"
            alt="Cornelia Schulz Photography Logo"
            width={290}
            height={95}
          />
        </a>
        <button
          id="menuBtn"
          className="hamburger block sm:hidden focus:outline-none"
          type="button"
          onClick={page}
        >
          <span className="hamburger__top-bun"></span>
          <span className="hamburger__bottom-bun"></span>
        </button>
        <ul
          id="menu"
          className="w-full sm:w-auto self-end sm:self-center sm:flex flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0 hidden"
        >
          <li>
            <a
              href="/"
              className={`text-white w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1 sm:pt-2 hover:text-orange hover:underline ${page === "home" ? "text-orange" : ""}`}
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="text-white w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1 sm:pt-2 hover:text-orange hover:underline"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="text-white w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1 sm:pt-2 hover:text-orange hover:underline"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
