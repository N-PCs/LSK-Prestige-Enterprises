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
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-1.106-.987-1.854-2.207-2.072-2.581-.217-.374-.023-.576.163-.762.164-.164.356-.404.534-.606.179-.202.239-.347.358-.578.119-.231.06-.432-.028-.632-.088-.2-.643-1.55-.88-2.133-.237-.583-.476-.539-.674-.549-.196-.01-.42-.012-.643-.012-.224 0-.588.084-.897.42-.31.336-1.183 1.157-1.183 2.822 0 1.664 1.22 3.272 1.389 3.497.169.225 2.394 3.68 5.805 4.511 3.408.831 3.408-.55 3.592-.86.184-.31.451-.612.573-.789.122-.177.184-.277.122-.462-.061-.185-.276-.295-.573-.444z"/>
            <path d="M12 2C6.477 2 2 6.477 2 12c0 1.88.538 3.636 1.466 5.128L2 22l5.056-1.426A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
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
