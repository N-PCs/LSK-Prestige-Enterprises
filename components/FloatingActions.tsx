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

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Right side floating actions */}
      <div className="fixed bottom-8 right-4 flex flex-col gap-5 z-[100]">
        <div
          className="bg-secondary text-white w-12 h-12 sm:w-16 sm:h-16 rounded-full shadow-2xl flex items-center justify-center cursor-pointer hover:scale-110 active:scale-90 transition-all relative group"
          onClick={scrollToContact}
        >
          <span className="material-icons-outlined text-lg sm:text-2xl">phone</span>
          <div className="absolute right-full mr-4 bg-white dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-lg shadow-xl text-sm sm:text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-gray-100 dark:border-gray-700 pointer-events-none">
            Enquire 
          </div>
        </div>

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
