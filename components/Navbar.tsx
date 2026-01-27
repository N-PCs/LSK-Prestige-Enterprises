import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 border-b border-gray-100 dark:border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="flex items-center gap-3">
              <img
                className="h-full max-h-[56px] w-auto object-contain"
                src="/images/new-logo-removebg.png"
                alt="Logo"
              />

              {/* Text stack */}
              <div className="flex flex-col justify-center leading-none gap-[0px]">
                <h1 className="m-0 text-lg font-bold">LSK</h1>
                <h2 className="m-0 text-md font-semibold">PRESTIGE</h2>
                <h3 className="m-0 text-sm font-medium tracking-wide">
                  REAL ESTATE DEVELOPERS
                </h3>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10 items-center">
            <a
              className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-all text-black/70 dark:text-white/70"
              href="#"
            >
              Home
            </a>
            <a
              className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-all text-black/70 dark:text-white/70"
              href="#about"
            >
              About Us
            </a>
            <a
              className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-all text-black/70 dark:text-white/70"
              href="#properties"
            >
              Properties
            </a>
            <a
              className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-all text-black/70 dark:text-white/70"
              href="#services"
            >
              Services
            </a>

            <a
              className="bg-secondary dark:bg-primary text-white px-7 py-3 rounded-sm text-[10px] uppercase tracking-[0.2em] font-bold transition-all hover:opacity-90 dark:hover:bg-white dark:hover:text-black shadow-sm"
              href="#contact"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 dark:text-gray-400 p-2"
            >
              <span className="material-icons-outlined text-2xl">
                {isMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-black border-b border-gray-100 dark:border-gray-900 px-6 py-8 space-y-6 animate-in fade-in slide-in-from-top-4 duration-300">
          <a
            className="block text-xs font-bold uppercase tracking-widest py-2 hover:text-primary transition-colors"
            href="#"
          >
            Home
          </a>
          <a
            className="block text-xs font-bold uppercase tracking-widest py-2 hover:text-primary transition-colors"
            href="#about"
          >
            About Us
          </a>
          <a
            className="block text-xs font-bold uppercase tracking-widest py-2 hover:text-primary transition-colors"
            href="#properties"
          >
            Properties
          </a>
          <a
            className="block text-xs font-bold uppercase tracking-widest py-2 hover:text-primary transition-colors"
            href="#services"
          >
            Services
          </a>
          <a
            className="block bg-secondary text-white px-6 py-4 rounded text-xs uppercase tracking-widest font-bold text-center hover:opacity-90 transition-opacity mt-4"
            href="#contact"
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
