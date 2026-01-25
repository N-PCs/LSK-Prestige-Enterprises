
import React, { useState } from 'react';

interface NavbarProps {
  onToggleDarkMode: () => void;
  isDarkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleDarkMode, isDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 sticky-header border-b border-gray-100 dark:border-gray-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-20">
      <div className="flex items-center justify-center h-full"> {/* Added h-full */}
        <span className="font-display font-bold text-sm text-black dark:text-white">
          <img 
            className="h-12 w-auto" /* Changed to w-auto for proportional scaling */
            src="/images/removebglogo1.png"
            alt="Logo"
          />
        </span>
      </div>
          
          <div className="hidden md:flex space-x-10 items-center">
            {['Home', 'About Us', 'Properties', 'Services'].map((item) => (
              <a 
                key={item}
                className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-all text-black/70 dark:text-white/70" 
                href={`#${item.toLowerCase().replace(' ', '')}`}
              >
                {item}
              </a>
            ))}
            
            <button 
              onClick={onToggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              <span className="material-icons-outlined text-gray-600 dark:text-gray-400">
                {isDarkMode ? 'light_mode' : 'dark_mode'}
              </span>
            </button>

            <a className="bg-secondary dark:bg-primary text-white px-7 py-3 rounded-sm text-[10px] uppercase tracking-[0.2em] font-bold transition-all hover:opacity-90 dark:hover:bg-white dark:hover:text-black shadow-sm" href="#contact">
              Contact Us
            </a>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={onToggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <span className="material-icons-outlined text-gray-600 dark:text-gray-400">
                {isDarkMode ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 dark:text-gray-400"
            >
              <span className="material-icons-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-black border-b border-gray-100 dark:border-gray-900 p-6 space-y-6 animate-in fade-in slide-in-from-top-4 duration-300">
          <a className="block text-xs font-bold uppercase tracking-widest" href="#">Home</a>
          <a className="block text-xs font-bold uppercase tracking-widest" href="#about">About Us</a>
          <a className="block text-xs font-bold uppercase tracking-widest" href="#properties">Properties</a>
          <a className="block text-xs font-bold uppercase tracking-widest" href="#services">Services</a>
          <a className="block bg-secondary text-white px-6 py-3 rounded text-[10px] uppercase tracking-widest font-bold text-center" href="#contact">Contact Us</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
