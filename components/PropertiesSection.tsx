import React from 'react';
import { PROPERTIES } from '../constants';
import { Property } from './hooks/types';
import { Link } from 'react-router-dom';

const PropertyCard: React.FC<{ property: Property }> = ({ property }) => (
  /* Added 'min-w-[85%] sm:min-w-[400px] snap-center' for mobile carousel behavior */
  <div className="min-w-[85%] sm:min-w-[400px] md:min-w-0 snap-center bg-white dark:bg-gray-800 rounded-lg overflow-hidden custom-shadow group hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700">
    <div className="relative overflow-hidden">
      <img
        alt={property.title}
        className="w-full h-48 sm:h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-1000"
        src={property.image}
      />
      <div className="absolute top-5 left-5 bg-black/80 backdrop-blur-sm text-white text-[9px] font-bold px-4 py-1.5 rounded-sm uppercase tracking-[0.2em]">
        {property.badge || 'New Listing'}
      </div>
    </div>

    <div className="p-4 sm:p-6 md:p-8 text-left">
      <div className="flex flex-col">
        <div className="flex justify-between items-start gap-4 mb-6">
          <div className="flex-1">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-black dark:text-white group-hover:text-primary transition-colors leading-tight mb-2">
              {property.title}
            </h3>
            <p className="text-gray-400 text-[10px] sm:text-xs flex items-center gap-1.5 uppercase tracking-widest font-semibold">
              <span className="material-icons-outlined text-sm text-primary">location_on</span>
              {property.location}
            </p>
          </div>
          <div>
            {property.badge === "Completed" ? (
              <div className="bg-red-500 text-white font-display font-bold text-base sm:text-xl leading-none px-4 py-2.5 rounded whitespace-nowrap">
                Sold Out
              </div>
            ) : property.price ? (
              <div className="text-right">
                <div className="bg-primary text-white font-display font-bold text-base sm:text-xl leading-none mb-1 px-4 py-2.5 rounded inline-block whitespace-nowrap">
                  {property.price}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-700">
        <Link
          to={`/property/${property.id}`}
          className="inline-block px-6 py-3 bg-primary text-white font-bold uppercase tracking-widest text-sm sm:text-xs hover:bg-primary/90 transition-colors"
        >
          View Detail
        </Link>
      </div>
    </div>
  </div>
);

const PropertiesSection: React.FC = () => {
  // Navigation handler (Simple logic to scroll the container)
  const scroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('property-slider');
    if (container) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 md:py-16 bg-white dark:bg-[#0a0a0a]" id="properties">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <span className="text-primary font-bold tracking-[0.4em] text-[15px] uppercase mb-4 block">
            Properties
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-black dark:text-white font-medium italic">
            Exclusive Properties
          </h2>
          <div className="w-16 h-[1px] bg-primary mx-auto mt-6"></div>
        </div>

        {/* KEY CHANGES HERE:
            1. Added 'flex overflow-x-auto' for mobile.
            2. Added 'md:grid' to revert to grid on desktop.
            3. Added 'snap-x snap-mandatory' for the carousel feel.
            4. Added 'scrollbar-hide' (you may need a plugin or use custom CSS to hide scrollbars).
        */}
        <div 
          id="property-slider"
          className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 md:gap-12 snap-x snap-mandatory scroll-smooth pb-8 no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} 
        >
          {PROPERTIES.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* Arrows are now functional via the scroll function */}
        <div className="flex justify-center mt-6 md:mt-10 gap-4 sm:gap-8">
          <button 
            onClick={() => scroll('left')}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-200 dark:border-gray-800 flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
          >
            <span className="material-icons-outlined text-xs sm:text-sm">arrow_back</span>
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary dark:bg-primary text-white flex items-center justify-center hover:opacity-90 transition-all shadow-xl shadow-secondary/20 dark:shadow-primary/20"
          >
            <span className="material-icons-outlined text-xs sm:text-sm">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;