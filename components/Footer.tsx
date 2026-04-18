import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-12 md:pt-16 pb-8 md:pb-12" id="contact">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 mb-12 md:mb-16">
        <div className="col-span-1">
          <div className="flex items-center h-20">
            <div className="flex items-center gap-3 h-full">
              {/* Logo */}
              <img
                className="h-full max-h-[56px] w-auto object-contain"
                src="/images/new-logo-removebg.png"
                alt="Logo"
              />

              {/* Text stack */}
              <div className="flex flex-col justify-center leading-none">
                <h1 className="m-0 text-lg font-bold">LSK</h1>
                <h2 className="m-0 text-md font-semibold">PRESTIGE</h2>
                <h3 className="m-0 text-sm font-medium tracking-wide">
                  REAL ESTATE DEVELOPERS
                </h3>
              </div>
            </div>
          </div>

          <p className="text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 md:mb-10 font-light">
            Architecting the future of luxury living through innovation,
            integrity, and timeless design. Your sanctuary, our legacy.
          </p>
        </div>
        <div>
          <h4 className="font-display text-base sm:text-lg md:text-lg italic text-primary mb-6 sm:mb-8 md:mb-10 tracking-widest">
            Navigation
          </h4>
          <ul className="space-y-4 text-sm sm:text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
            {[
              { label: 'Home', id: 'home' },
              { label: 'Properties', id: 'properties' },
              { label: 'Services', id: 'services' },
            ].map((link) => (
              <li key={link.id}>
                <a
                  className="hover:text-primary transition-all flex items-center gap-3 group"
                  href={`#${link.id}`}
                >
                  <span className="w-4 h-[1px] bg-gray-800 group-hover:bg-primary transition-all"></span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base sm:text-lg md:text-lg italic text-primary mb-6 sm:mb-8 md:mb-10 tracking-widest">
            Contact
          </h4>
          <ul className="space-y-4 sm:space-y-6 md:space-y-8 text-xs sm:text-sm text-gray-400 font-light">
            <li className="flex items-start gap-2 sm:gap-3 md:gap-4">
              <span className="material-icons-outlined text-primary text-sm sm:text-base md:text-xl">
                mail
              </span>
              <span className="hover:text-white transition-colors cursor-pointer text-xs sm:text-sm md:text-lg">
                lskrealestatedevelopers@gmail.com
              </span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3 md:gap-4">
              <span className="material-icons-outlined text-primary text-sm sm:text-base md:text-xl">
                call
              </span>
              <span className="hover:text-white transition-colors cursor-pointer text-xs sm:text-sm md:text-lg">
                +91 95034 11509
              </span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3 md:gap-4">
              <span className="material-icons-outlined text-primary text-sm sm:text-base md:text-xl">
                location_on
              </span>
              <span className="hover:text-white transition-colors text-xs sm:text-sm">
                LSK PRESTIGE SHOP NO 3 FIRST FLOOR MIDAS TOUCH BUILDING SPDA
                GROUND MARGAO <br />
                Goa, India
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-8 sm:pt-10 md:pt-12 border-t border-gray-900/50 flex flex-col items-center gap-6 sm:gap-8">
        <div className="text-[10px] text-gray-600 uppercase tracking-[0.3em] font-semibold text-center">
          © {new Date().getFullYear()} LSK Prestige Real Estate. Crafted for Excellence.
        </div>
      </div>
    </footer>
  );
};
export default Footer;
