import React, { useState, useEffect } from 'react';

const FloatingActions: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className="fixed bottom-8 right-4 flex flex-col gap-5 z-[100]">
        <a
          href="https://wa.me/919503411509?text=Hi%20LSK%20Prestige,%20I'm%20interested%20in%20your%20private%20villas."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-secondary text-white w-12 h-12 sm:w-16 sm:h-16 rounded-full shadow-2xl flex items-center justify-center cursor-pointer hover:scale-110 active:scale-90 transition-all relative group"
        >
<svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-7 sm:h-7">
  <path d="M12.012 2c-5.508 0-9.988 4.479-9.988 9.987 0 1.758.455 3.414 1.324 4.872L2 22l5.28-1.354c1.417.771 3.014 1.18 4.73 1.18 5.51 0 9.99-4.478 9.99-9.986S17.522 2 12.012 2zm6.604 14.168c-.273.766-1.352 1.397-2.185 1.577-.565.122-1.306.22-3.805-.813-3.195-1.32-5.253-4.57-5.413-4.784-.16-.214-1.28-1.704-1.28-3.253 0-1.549.813-2.31 1.106-2.617.293-.307.64-.384.853-.384.213 0 .427.004.614.013.193.01.454-.073.71.54.267.639.907 2.212.986 2.372.079.16.133.347.027.56-.107.213-.16.347-.32.533-.16.186-.337.413-.48.56-.16.16-.328.334-.142.653.187.32.83 1.36 1.777 2.203.118.105.215.158.33.158.114 0 .227-.053.341-.144.25-.198 1.092-1.28 1.385-1.68.293-.4.587-.333.987-.187.4.146 2.534 1.196 2.667 1.263.133.066.222.099.253.153.031.053.031.307-.08.673z"/>
</svg>
          <div className="absolute right-full mr-4 bg-white dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-lg shadow-xl text-sm sm:text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-gray-100 dark:border-gray-700 pointer-events-none">
            WhatsApp
          </div>
        </a>

        {isVisible && (
          <div
            className="bg-primary text-white w-12 h-12 sm:w-16 sm:h-16 rounded-full shadow-2xl flex items-center justify-center cursor-pointer hover:scale-110 active:scale-90 transition-all group"
            onClick={scrollToTop}
          >
            <span className="material-icons-outlined text-lg sm:text-2xl group-hover:-translate-y-1 transition-transform">
              keyboard_double_arrow_up
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default FloatingActions;
