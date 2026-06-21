import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(() => {
    const isDesktop = window.innerWidth >= 768;
    if (!isDesktop) {
      setIsVisible(true);
      return;
    }

    const currentScrollY = window.scrollY;
    // Show navbar when scrolling up or at top, hide when scrolling down (if menu not open)
    if (currentScrollY < 80) {
      setIsVisible(true);
    } else if (!isMenuOpen) {
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    }
    setLastScrollY(currentScrollY);
  }, [isMenuOpen, lastScrollY]);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          controlNavbar();
          ticking = false;
        });
        ticking = true;
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768) return;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          if (currentScrollY < 80) {
            setIsVisible(true);
          } else if (e.clientY < 100) {
            setIsVisible(true);
          } else if (!isMenuOpen) {
            setIsVisible(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);
    window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [controlNavbar, isMenuOpen]);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -140 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 md:top-4 left-0 right-0 z-50 px-4 flex justify-center pointer-events-none"
    >
      <div className="w-full max-w-7xl bg-white/90 dark:bg-black/90 backdrop-blur-md rounded-sm border border-gray-100 dark:border-gray-800 shadow-2xl pointer-events-auto overflow-hidden">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo Section */}
            <div className="flex items-center">
              <div className="flex items-center gap-3">
                <img
                  className="h-full max-h-[48px] w-auto object-contain"
                  src="/images/new-logo-removebg.png"
                  alt="Logo"
                />

                {/* Text stack - Fully Restored */}
                <div className="flex flex-col justify-center leading-none gap-[0px]">
                  <h1 className="m-0 text-[18px] font-bold text-black dark:text-white">
                    LSK
                  </h1>
                  <h2 className="m-0 text-[15px] font-semibold text-black dark:text-white">
                    PRESTIGE
                  </h2>
                  <h3 className="m-0 text-[12px] font-medium tracking-wide text-gray-500">
                    REAL ESTATE DEVELOPERS
                  </h3>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-10 items-center">
              <a
                className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-all text-black/70 dark:text-white/70"
                href="/"
              >
                Home
              </a>
              <a
                className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-all text-black/70 dark:text-white/70"
                href="/#about"
              >
                About Us
              </a>
              <a
                className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-all text-black/70 dark:text-white/70"
                href="/#properties"
              >
                Properties
              </a>
              <a
                className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-all text-black/70 dark:text-white/70"
                href="/#projects-gallery"
              >
                Projects Gallery
              </a>
              <a
                className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-all text-black/70 dark:text-white/70"
                href="/#services"
              >
                Services
              </a>

              <a
                className="bg-secondary dark:bg-primary text-white px-7 py-3 rounded-sm text-[10px] uppercase tracking-[0.2em] font-bold transition-all hover:opacity-90 dark:hover:bg-white dark:hover:text-black shadow-sm"
                href="/#contact"
              >
                Contact Us
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(prev => !prev)}
                className="text-gray-600 dark:text-gray-400 p-1.5 sm:p-2"
              >
                <span className="material-icons-outlined text-xl sm:text-2xl">
                  {isMenuOpen ? 'close' : 'menu'}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Integrated into floating container */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 dark:bg-black/95 px-6 py-6 space-y-4 overflow-hidden border-t border-gray-100 dark:border-gray-800"
            >
              <a
                className="block text-xs font-bold uppercase tracking-widest py-2 hover:text-primary transition-colors text-black dark:text-white"
                href="/"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                className="block text-xs font-bold uppercase tracking-widest py-2 hover:text-primary transition-colors text-black dark:text-white"
                href="/#about"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>
              <a
                className="block text-xs font-bold uppercase tracking-widest py-2 hover:text-primary transition-colors text-black dark:text-white"
                href="/#properties"
                onClick={() => setIsMenuOpen(false)}
              >
                Properties
              </a>
              <a
                className="block text-xs font-bold uppercase tracking-widest py-2 hover:text-primary transition-colors text-black dark:text-white"
                href="/#projects-gallery"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects Gallery
              </a>
              <a
                className="block text-xs font-bold uppercase tracking-widest py-2 hover:text-primary transition-colors text-black dark:text-white"
                href="/#services"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                className="block bg-secondary text-white px-4 py-3 rounded-sm text-xs uppercase tracking-widest font-bold text-center hover:opacity-90 transition-opacity mt-4"
                href="/#contact"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};


export default Navbar;
