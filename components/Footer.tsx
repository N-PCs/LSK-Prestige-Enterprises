import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f5f5f5] dark:bg-[#0a0a0a] text-gray-800 dark:text-gray-200 border-t border-gray-100 dark:border-gray-900 pt-16 pb-12" id="contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-12">
        
        {/* Column 1: Brand Info */}
        <div className="flex flex-col gap-6 text-left">
          <div className="flex items-center gap-3.5">
            <img
              className="h-11 w-auto object-contain dark:brightness-200"
              src="/images/new-logo-removebg.png"
              alt="LSK Prestige Logo"
            />
            <span className="font-display text-lg tracking-[0.2em] font-semibold text-black dark:text-white uppercase">
              LSK PRESTIGE
            </span>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm leading-relaxed font-light max-w-xs">
            Architectural curators specializing in the acquisition and stewardship of the world's most significant real estate.
          </p>
        </div>

        {/* Column 2: Sitemap */}
        <div className="text-left">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 block mb-6">
            SITEMAP
          </span>
          <ul className="space-y-3 text-xs font-medium uppercase tracking-[0.15em] text-gray-500 dark:text-gray-400">
            <li>
              <a href="/#projects-gallery" className="hover:text-black dark:hover:text-white transition-colors">
                Portfolio
              </a>
            </li>
            <li>
              <a href="/#properties" className="hover:text-black dark:hover:text-white transition-colors">
                Collections
              </a>
            </li>
            <li>
              <a href="/#about" className="hover:text-black dark:hover:text-white transition-colors">
                Architectural Vision
              </a>
            </li>
            <li>
              <a href="/#services" className="hover:text-black dark:hover:text-white transition-colors">
                Services
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Journal & Socials */}
        <div className="text-left">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 block mb-6">
            JOURNAL
          </span>
          <ul className="space-y-3 text-xs font-medium uppercase tracking-[0.15em] text-gray-500 dark:text-gray-400">
            <li>
              <a href="/#contact" className="hover:text-black dark:hover:text-white transition-colors">
                Newsletter
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Information (Keeps all original data intact) */}
        <div className="text-left flex flex-col gap-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 block mb-2">
            CONTACT
          </span>
          <ul className="space-y-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-light">
            <li className="flex items-start gap-2.5">
              <span className="material-icons-outlined text-[#E06A55] text-base mt-0.5">mail</span>
              <a href="mailto:lskrealestatedevelopers@gmail.com" className="hover:text-black dark:hover:text-white transition-colors break-all">
                lskrealestatedevelopers@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="material-icons-outlined text-[#E06A55] text-base mt-0.5">call</span>
              <a href="tel:+919503411509" className="hover:text-black dark:hover:text-white transition-colors">
                +91 95034 11509
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="material-icons-outlined text-[#E06A55] text-base mt-0.5">location_on</span>
              <span className="leading-relaxed">
                LSK PRESTIGE SHOP NO 3 FIRST FLOOR MIDAS TOUCH BUILDING SPDA GROUND MARGAO, Goa, India
              </span>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright Footer Bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8 mt-8 border-t border-gray-200/50 dark:border-gray-900/50 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-400 dark:text-gray-500 text-[10px] font-medium uppercase tracking-[0.2em]">
        <span>© {new Date().getFullYear()} LSK PRESTIGE. ARCHITECTURAL CURATORS.</span>
        <span>Crafted for Excellence.</span>
      </div>
    </footer>
  );
};

export default Footer;
