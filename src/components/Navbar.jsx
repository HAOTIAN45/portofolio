import { useState, useEffect } from "react"

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [activeMenu, setActiveMenu] = useState("hero")
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60)
            const sections = ["hero", "about", "project", "contact"]
            sections.forEach((id) => {
                const el = document.getElementById(id)
                if (el) {
                    const rect = el.getBoundingClientRect()
                    if (rect.top <= 150 && rect.bottom >= 150) setActiveMenu(id)
                }
            })
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
        setMenuOpen(false)
    }

    const menuItems = [
        { id: "hero", label: "Home" },
        { id: "about", label: "About" },
        { id: "project", label: "Projects" },
        { id: "contact", label: "Contact" },
    ]

    return (
        <>
            <style>{`
        .nav-logo { font-family: 'DM Serif Display', serif; }
        .nav-link-underline {
          position: relative;
          padding-bottom: 2px;
        }
        .nav-link-underline::after {
          content: '';
          position: absolute;
          left: 0; bottom: -2px;
          width: 0; height: 1px;
          background: #ffffff;
          transition: width 0.3s ease;
        }
        .nav-link-underline:hover::after,
        .nav-link-underline.active::after { width: 100%; }
        .ham-line {
          transition: transform 0.3s ease, opacity 0.3s ease;
          transform-origin: center;
        }
      `}</style>

            <nav
                className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 transition-all duration-300
          ${scrolled
                        ? "bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/60"
                        : "bg-transparent"
                    }`}
            >
                <div className="max-w-6xl mx-auto flex items-center justify-between h-16">

                    {/* Logo */}    
                    <button
                        onClick={() => scrollTo("hero")}
                        className="nav-logo text-white text-xl tracking-tight"
                    >
                        Christian<span className="italic text-zinc-500">.</span>
                    </button>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center gap-8">
                        {menuItems.map((item) => (
                            <li key={item.id}>
                                <button
                                    onClick={() => scrollTo(item.id)}
                                    className={`nav-link-underline text-xs tracking-widest uppercase transition-colors duration-200
                    ${activeMenu === item.id ? "text-white active" : "text-zinc-400 hover:text-white"}`}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                    <a href="#"
                        className="hidden md:flex items-center gap-2 text-xs font-mono tracking-widest uppercase
              border border-zinc-700 text-zinc-400 hover:border-zinc-400 hover:text-white
              px-4 py-2 transition-all duration-200"
                    >
                        Resume
                        <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                            <path d="M6 1v8M2 7l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>

                    {/* Hamburger — Mobile */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden flex flex-col items-center justify-center gap-1.5 w-8 h-8"
                        aria-label="Toggle menu"
                    >
                        <span className={`ham-line block h-px w-5 bg-white ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
                        <span className={`ham-line block h-px w-5 bg-white ${menuOpen ? "opacity-0" : ""}`} />
                        <span className={`ham-line block h-px w-5 bg-white ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
                    </button>
                </div>

                {/* Mobile Dropdown */}
                <div
                    className={`md:hidden border border-zinc-800 bg-zinc-950 overflow-hidden transition-all duration-300 ease-in-out
            ${menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
                >
                    <ul className="flex flex-col py-2">
                        {menuItems.map((item) => (
                            <li key={item.id}>
                                <button
                                    onClick={() => scrollTo(item.id)}
                                    className={`w-full text-left px-6 py-3 text-xs tracking-widest uppercase transition-colors duration-150
                    ${activeMenu === item.id ? "text-white" : "text-zinc-500 hover:text-white"}`}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                        <li className="border-t border-zinc-800 mt-1 px-6 py-3">

                            <a href="#"
                                className="text-xs tracking-widest uppercase text-zinc-500 hover:text-white transition-colors duration-150"
                            >
                                Resume ↓
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}