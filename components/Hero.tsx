import React from 'react';

const Hero: React.FC = () => {
  return (
    <header
      className="relative w-full mt-20 min-h-[80vh] md:min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden cursor-default pt-20"
      id="home"
    >
      <img
        alt="Luxury Penthouse Overlooking Ocean"
        className="absolute inset-0 w-full h-full object-cover"
        src="/images/arambol.png"
      />
      {/* Subtle overlay to enhance text readability while maintaining bright, premium view */}
      <div className="absolute inset-0 bg-black/35 dark:bg-black/60"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center text-white">
        {/* Left Side: Editorial Serif Heading */}
        <div className="col-span-1 md:col-span-7">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight font-medium">
            Defining the <br />
            <span className="text-[#E06A58] italic font-normal">Legacy</span> of <br />
            Living.
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Hero;

