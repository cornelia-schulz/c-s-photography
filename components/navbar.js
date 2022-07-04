import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// function NavLink({to, children}) {
//     return <a href={to} className={`mx-4`}>
//         {children}
//     </a>
// }

// function MobileNav({open, setOpen}) {
//     return (
//         <div className={`absolute top-0 left-0 h-screen w-screen bg-black transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
//             <div className="flex items-center filter drop-shadow-md bg-white"> {/*logo container*/}
//                 <Link href="/" className="flex items-center">
//                     <Image
//                         src="/images/CS_photgraphy_transparent-white.png"
//                         alt="Cornelia Schulz Photography Logo"
//                         width={290}
//                         height={120}
//                     />
//                 </Link>
//             </div>
//             <div className="flex flex-col ml-4">
//                 <a className="text-xl font-medium my-4" href="/about" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
//                     About
//                 </a>
//                 <a className="text-xl font-normal my-4" href="/contact" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
//                     Contact
//                 </a>
//             </div>  
//         </div>
//     )
// }

// export default function Navbar() {

//     const [open, setOpen] = useState(false)
//     return (
//         <nav className="flex filter drop-shadow-md bg-white py-4 h-20 items-center">
//             <MobileNav open={open} setOpen={setOpen}/>
//             <div className={`${open ? "w-1/12" : "flex items-center"}`}>
//                 <Link href="/" className={`${open ? "hidden" : "flex items-center"}`}>
//                     <Image
//                         className="h-8 w-8 mr-2"
//                         src="/images/CS_photgraphy_transparent-white.png"
//                         alt="Cornelia Schulz Photography Logo"
//                         width={290}
//                         height={120}
//                     />
//                 </Link>
//             </div>
//             <div className={`${open ? "w-11/12 flex justify-end items-center" :"w-9/12 flex justify-end items-center"}`}>

//                 <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
//                     setOpen(!open)
//                 }}>
//                     {/* hamburger button */}
//                     <span className={`h-1 w-full bg-grey-light rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
//                     <span className={`h-1 w-full bg-grey-light rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
//                     <span className={`h-1 w-full bg-grey-light rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
//                 </div>

//                 <div className="hidden md:flex">
//                     <NavLink to="/contact">
//                         CONTACT
//                     </NavLink>
//                     <NavLink to="/about">
//                         ABOUT
//                     </NavLink>
//                 </div>
//             </div>
//         </nav>
//     )
// }

export default function Navbar() {
    return (
        <nav>
            <div className="container mx-auto flex flex-wrap items-center justify-between">
                <a href="/">
                    <Image
                        className="h-8 w-8 mr-2"
                        src="/images/CS_photgraphy_transparent-white.png"
                        alt="Cornelia Schulz Photography Logo"
                        width={290}
                        height={120}
                    />
                </a>
                <button data-collapse-toggle="mobile-menu" type="button" className="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
                <div className="hidden md:block w-full md:w-auto" id="mobile-menu">
                    <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <a href="/" className="bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded hover:text-orange hover:underline" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="/about" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:p-0 hover:text-orange hover:underline">About</a>
                        </li>
                        <li>
                            <a href="/contact" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:p-0 hover:text-orange hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}