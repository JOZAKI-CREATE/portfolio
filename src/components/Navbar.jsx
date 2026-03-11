const Navbar = () => {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur shadow-sm z-50">
      
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="font-bold text-[#6b5e4f]">
          Nanami
        </h1>

        <nav className="flex gap-6 text-sm">

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

      </div>

    </header>
  );
};

export default Navbar;