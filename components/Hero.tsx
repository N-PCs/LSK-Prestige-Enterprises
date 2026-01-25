
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
