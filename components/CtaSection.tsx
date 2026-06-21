import React from 'react';

const CtaSection: React.FC = () => {
  return (
    <section className="relative py-24 md:py-32 bg-[#1A1110] dark:bg-[#120B0A] overflow-hidden text-center flex flex-col justify-center items-center px-6">
      {/* Background visual subtle gradient decoration */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#120B0A]/50 via-transparent to-[#E06A55]/5 opacity-30 pointer-events-none"></div>

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col gap-6 items-center">
        {/* Small Coral Tag */}
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.4em] text-[#E06A55]">
          BEGIN YOUR VILLA JOURNEY
        </span>

        {/* Heading */}
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white font-medium leading-tight">
          Ready to curate <br className="sm:hidden" /> your{' '}
          <span className="text-[#E06A55] italic font-normal">Villa?</span>
        </h2>

        {/* Description */}
        <p className="text-gray-400 font-light text-sm sm:text-base leading-relaxed max-w-lg mb-4">
          Experience our villas first-hand. Connect with our private advisory team to schedule an exclusive, curated walkthrough.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
          <a
            href="/#contact"
            className="bg-[#D25442] hover:bg-[#b84433] text-white px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition-colors rounded-none whitespace-nowrap shadow-md"
          >
            REQUEST A PRIVATE TOUR
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
