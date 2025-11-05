import { useState, useEffect } from "react"

export default function Navbar() {
    const [active, setActive] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setActive(true);
            } else {
                setActive(false);
            }
        };

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className="navbar flex items-center justify-between py-2 relative z-50">
            <div className="logo">
                {/* <h1 className="text-3xl font-bold bg-white text-black p-1 md:bg-transparent md:text-white">Christian</h1> */}
                <h1 className="text-3xl font-bold p-1 bg-linear-to-br from-blue-600/90 via-blue-700/90 to-violet-600/90 bg-clip-text text-transparent md:bg-transparent md:text-white animate-pulse">Christian</h1>
            </div>
            <ul className={`menu flex items-center sm:gap-10 gap-4 md:static fixed left-1/2 -translate-x-1/2 md:translate-x-0 md:opacity-100 bg-linear-to-br from-blue-600 via-blue-700 to-violet-600 backdrop-blur-md p-4 my-2 rounded-full md:bg-transparent md:bg-none md:backdrop-blur-none transition-all duration-500 ease-in-out md:transition-none ${active ? "bottom-0 opacity-100" : "-bottom-10 opacity-0"}`}>
                <li><a href="" className="sm:text-lg text-base font-medium">Beranda</a></li>
                <li><a href="" className="sm:text-lg text-base font-medium">Tentang</a></li>
                <li><a href="" className="sm:text-lg text-base font-medium">Project</a></li>
                <li><a href="" className="sm:text-lg text-base font-medium">Contact</a></li>
            </ul>
        </div>
    )
}