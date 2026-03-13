import { useEffect, useState } from "react";

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300
      ${scrolled ? "bg-white shadow-md" : "bg-transparent"}
      `}
        >

            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

                <h1 className="font-bold text-[#6b5e4f]">
                    JOZAKI CREATE
                </h1>

                <nav className="hidden md:flex gap-6 text-sm">

                    <a href="#about" className="hover:text-[#a67c52]">
                        About
                    </a>

                    <a href="#services" className="hover:text-[#a67c52]">
                        Services
                    </a>

                    <a href="#works" className="hover:text-[#a67c52]">
                        Works
                    </a>

                    <a href="#contact" className="hover:text-[#a67c52]">
                        Contact
                    </a>

                </nav>

                <button
                    className="md:hidden text-2xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? "✕" : "☰"}
                </button>

            </div>

            {menuOpen && (
                <nav className="md:hidden bg-white shadow-md flex flex-col text-sm text-[#6b5e4f]">

                    <a
                        href="#about"
                        onClick={() => setMenuOpen(false)}
                        className="px-5 py-5 rounded hover:bg-stone-100 transition"
                    >
                        About
                    </a>

                    <a href="#services" onClick={() => setMenuOpen(false)}
                        className="px-5 py-5 rounded hover:bg-stone-100 transition">
                        Services
                    </a>

                    <a href="#works" onClick={() => setMenuOpen(false)}
                        className="px-5 py-5 rounded hover:bg-stone-100 transition">
                        Works
                    </a>

                    <a href="#contact" onClick={() => setMenuOpen(false)}
                        className="px-5 py-5 rounded hover:bg-stone-100 transition">
                        Contact
                    </a>

                </nav>
            )}

        </header>
    );
};

export default Navbar;