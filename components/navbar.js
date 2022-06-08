import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

function NavLink({to, children}) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

function MobileNav({open, setOpen}) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-black transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center filter drop-shadow-md bg-white"> {/*logo container*/}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/images/CS_photgraphy_transparent-white.png"
                        alt="Cornelia Schulz Photography Logo"
                        width={290}
                        height={120}
                    />
                </Link>
            </div>
            <div className="flex flex-col ml-4">
                <a className="text-xl font-medium my-4" href="/about" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    About
                </a>
                <a className="text-xl font-normal my-4" href="/contact" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Contact
                </a>
            </div>  
        </div>
    )
}

export default function Navbar() {

    const [open, setOpen] = useState(false)
    return (
        <nav className="flex filter drop-shadow-md bg-white py-4 h-20 items-center">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className={`${open ? "w-1/12" : "flex items-center"}`}>
                <Link href="/" className={`${open ? "hidden" : "flex items-center"}`}>
                    <Image
                        className="h-8 w-8 mr-2"
                        src="/images/CS_photgraphy_transparent-white.png"
                        alt="Cornelia Schulz Photography Logo"
                        width={290}
                        height={120}
                    />
                </Link>
            </div>
            <div className={`${open ? "w-11/12 flex justify-end items-center" :"w-9/12 flex justify-end items-center"}`}>

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-grey-light rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-grey-light rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-grey-light rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden md:flex">
                    <NavLink to="/contact">
                        CONTACT
                    </NavLink>
                    <NavLink to="/about">
                        ABOUT
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}