
import React from 'react';

const Hero: React.FC = () => {
  return (
    <header className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <img 
        alt="Luxury Modern Building" 
        className="absolute inset-0 w-full h-full object-cover scale-105 animate-[slow-zoom_20s_ease-in-out_infinite_alternate]" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpia1aUAzdGJ6wjsGIhjVapzY_-ftBk2y585-0dxf5SxMCXbl3cjX3R1hk3xyw14zgKEB4okTXKA2fjkIxw5F7qfHS0U3XguN4HjWouD85COMxGqaAK9Hjb0LHorgN267RdWY5plwHrOGLF51YNh2uv_rC7bMzO87C8inke-F_aegGIpzf16e7bSZC54mxHabjXRxE4ErLaD_uqG_taeQ3eBU8UFV0laO8vAowmr1gh2ZYwBenXGvwfZSTfIskP7Ih4BZPJO3WCIUA"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-[1.1] tracking-tight">
          Discover Modern And <br/>
          <span className="text-primary italic font-serif">Exquisite</span> Living
        </h1>
        <div className="w-20 h-[2px] bg-primary mx-auto mb-10"></div>
        <p className="text-white/80 text-lg md:text-xl mb-16 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
          Curating high-quality developments for the discerning lifestyle. Where architectural integrity meets refined elegance.
        </p>

        {/* Search Bar Component */}
        <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md p-2 rounded-xl shadow-2xl max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-2 items-center">
          <div className="px-4 py-2 text-left border-r border-gray-100 dark:border-gray-800">
            <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-1">Location</label>
            <div className="flex items-center gap-2">
              <span className="material-icons-outlined text-primary text-sm">location_on</span>
              <input 
                className="w-full p-0 bg-transparent border-none focus:ring-0 text-sm font-medium dark:text-white placeholder-gray-300" 
                placeholder="Where to?" 
                type="text"
              />
            </div>
          </div>
          
          <div className="px-4 py-2 text-left border-r border-gray-100 dark:border-gray-800">
            <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-1">Property Type</label>
            <select className="w-full p-0 bg-transparent border-none focus:ring-0 text-sm font-medium dark:text-white cursor-pointer appearance-none">
              <option>Apartment</option>
              <option>Villa</option>
              <option>Commercial</option>
              <option>Penthouse</option>
            </select>
          </div>
          
          <div className="px-4 py-2 text-left md:border-r border-gray-100 dark:border-gray-800">
            <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-1">Price Range</label>
            <select className="w-full p-0 bg-transparent border-none focus:ring-0 text-sm font-medium dark:text-white cursor-pointer appearance-none">
              <option>$100k - $500k</option>
              <option>$500k - $1M</option>
              <option>$1M - $5M</option>
              <option>$5M+</option>
            </select>
          </div>
          
          <button className="bg-secondary dark:bg-primary hover:opacity-90 dark:hover:bg-white dark:hover:text-black text-white font-bold py-4 px-6 rounded-lg transition-all flex items-center justify-center gap-3 uppercase text-[10px] tracking-[0.2em]">
            <span className="material-icons-outlined text-lg">search</span> Find Property
          </button>
        </div>
      </div>
      
      <style>{`
        @keyframes slow-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
      `}</style>
    </header>
  );
};

export default Hero;
