import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(() => {
    const currentScrollY = window.scrollY;

    // Always show at the top
    if (currentScrollY < 80) {
      setIsVisible(true);
    }
    // Otherwise only update if visibility needs to change
    else if (!isMenuOpen) {
      setIsVisible(false);
    }

    setLastScrollY(currentScrollY);
  }, [isMenuOpen]);

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
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-3.5 group">
              <img
                className="h-10 w-auto object-contain dark:brightness-200 transition-transform duration-500 group-hover:scale-105"
                src="/images/new-logo-removebg.png"
                alt="LSK Prestige Logo"
              />
              <span className="font-display text-lg sm:text-xl font-semibold tracking-[0.2em] text-black dark:text-white">
                LSK PRESTIGE
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 lg:space-x-12 items-center">
            <a
              className="text-[12px] font-medium uppercase tracking-[0.2em] text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
              href="/#about"
            >
              Architectural Vision
            </a>
            <a
              className="text-[12px] font-medium uppercase tracking-[0.2em] text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
              href="/#leadership"
            >
              Leadership
            </a>
            <a
              className="text-[12px] font-medium uppercase tracking-[0.2em] text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
              href="/#properties"
            >
              Private Collection
            </a>
            <a
              className="text-[12px] font-medium uppercase tracking-[0.2em] text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
              href="/#projects-gallery"
            >
              Gallery
            </a>
            <a
              className="bg-[#D25442] hover:bg-[#b84433] text-white px-6 py-2.5 rounded-none text-[10px] uppercase tracking-[0.25em] font-semibold transition-colors duration-300 shadow-sm"
              href="/#contact"
            >
              INQUIRE
            </a>
          </div>

          {/* Mobile Phone + Menu */}
          <div className="md:hidden flex items-center gap-1">
            <a
              href="tel:+919503411509"
              className="text-gray-600 dark:text-gray-400 p-2 hover:text-black dark:hover:text-white transition-colors"
              aria-label="Call LSK Prestige"
            >
              <span className="material-icons-outlined text-2xl">phone</span>
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 dark:text-gray-400 p-2 focus:outline-none"
            >
              <span className="material-icons-outlined text-2xl">
                {isMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-[#0a0a0a] px-6 pb-6 space-y-4 overflow-hidden border-t border-gray-100 dark:border-gray-900"
          >
            <a
              className="block text-xs font-medium uppercase tracking-[0.2em] py-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              href="/#about"
              onClick={() => setIsMenuOpen(false)}
            >
              Architectural Vision
            </a>
                        <a
              className="block text-xs font-medium uppercase tracking-[0.2em] py-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              href="/#leadership"
              onClick={() => setIsMenuOpen(false)}
            >
              Leadership
            </a>
            <a
              className="block text-xs font-medium uppercase tracking-[0.2em] py-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              href="/#properties"
              onClick={() => setIsMenuOpen(false)}
            >
              Private Collection
            </a>
            <a
              className="block text-xs font-medium uppercase tracking-[0.2em] py-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              href="/#projects-gallery"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};


export default Navbar;
