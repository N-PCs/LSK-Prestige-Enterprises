
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
      {/* Right side floating actions */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-5 z-[100]">
        <div className="bg-secondary text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center cursor-pointer hover:scale-110 active:scale-90 transition-all relative group">
          <span className="material-icons-outlined text-2xl">phone</span>          
          <div className="absolute right-full mr-4 bg-white dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-lg shadow-xl text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-gray-100 dark:border-gray-700 pointer-events-none">
            Enquire
          </div>
        </div>
        
        {isVisible && (
          <div 
            className="bg-primary text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center cursor-pointer hover:scale-110 active:scale-90 transition-all group" 
            onClick={scrollToTop}
          >
            <span className="material-icons-outlined text-2xl group-hover:-translate-y-1 transition-transform">keyboard_double_arrow_up</span>
          </div>
        )}
      </div>

      {/* Left side language selector */}
      <div className="fixed bottom-8 left-8 z-[100] hidden sm:block">
        <div className="bg-white/80 dark:bg-black/80 backdrop-blur-md px-6 py-3 rounded-full border border-gray-200 dark:border-gray-800 flex items-center gap-3 cursor-pointer hover:bg-white hover:shadow-2xl transition-all shadow-xl group">
          <span className="material-icons-outlined text-primary text-xl">language</span>
          <span className="text-xs font-bold uppercase tracking-widest text-gray-700 dark:text-gray-300">Select Language</span>
          <span className="material-icons-outlined text-sm text-gray-400 group-hover:rotate-180 transition-transform">unfold_more</span>
        </div>
      </div>
    </>
  );
};

export default FloatingActions;
