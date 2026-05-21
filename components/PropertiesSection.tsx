import React from 'react';
import { PROPERTIES } from '../constants';
import { Property } from './hooks/types';
import { Link } from 'react-router-dom';

const PropertyCard: React.FC<{ property: Property }> = ({ property }) => {
  const isSoldOut = property.badge === 'Completed (sold out)' || property.price === 'Sold Out' || property.projectStatus === 'Completed (sold out)';

  return (
    <div className="min-w-[85%] sm:min-w-[400px] md:min-w-[380px] snap-center group cursor-pointer flex flex-col gap-4">
      {/* Link around the image for clean routing */}
      <Link to={`/property/${property.id}`} className="relative overflow-hidden aspect-[4/3] block bg-gray-100 dark:bg-gray-900">
        <img
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
          src={property.image}
        />

        {/* Mockup-style thin red badge */}
        <div className={`absolute top-4 left-4 text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 text-white ${isSoldOut ? 'bg-black/85 dark:bg-black/90' : 'bg-[#E06A55]'
          }`}>
          {isSoldOut ? 'SOLD OUT' : (property.projectStatus === 'Under Construction' ? 'UNDER CONSTRUCTION' : 'PRIVATE COLLECTION')}
        </div>
      </Link>

      {/* Card Typography */}
      <div className="text-left mt-2 flex flex-col gap-2">
        <Link to={`/property/${property.id}`} className="hover:text-[#E06A55] transition-colors">
          <h3 className="font-display text-xl md:text-2xl font-medium text-black dark:text-white leading-tight">
            {property.title}
          </h3>
        </Link>
        <p className="text-gray-400 dark:text-gray-500 text-[10px] tracking-[0.2em] uppercase font-medium mb-1">
          {property.location}
        </p>
        <div>
          <Link
            to={`/property/${property.id}`}
            className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-[#E06A55] hover:text-[#c4533e] transition-colors border-b border-[#E06A55]/30 pb-1"
          >
            VIEW DETAILS
          </Link>
        </div>
      </div>
    </div>
  );
};

const PropertiesSection: React.FC = () => {
  const scroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('property-slider');
    if (container) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#fafafa] dark:bg-[#0c0c0c]" id="properties">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header with Left-Aligned Title and Right-Aligned Buttons */}
        <div className="flex flex-row justify-between items-end mb-12 border-b border-gray-100 dark:border-gray-900 pb-6">
          <div className="text-left">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-gray-400 dark:text-gray-500 block mb-2">
              THE GALLERY
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-black dark:text-white font-medium">
              Private Collections
            </h2>
          </div>

          {/* Minimalist Arrow Navigation Controls */}
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 border border-gray-300 dark:border-gray-800 flex items-center justify-center text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
              aria-label="Previous property"
            >
              <span className="material-icons-outlined text-sm font-bold">arrow_back</span>
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 bg-black dark:bg-white flex items-center justify-center text-white dark:text-black hover:bg-[#E06A55] hover:text-white dark:hover:bg-[#E06A55] dark:hover:text-white transition-all"
              aria-label="Next property"
            >
              <span className="material-icons-outlined text-sm font-bold">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Scrollable Row */}
        <div
          id="property-slider"
          className="flex overflow-x-auto gap-8 snap-x snap-mandatory scroll-smooth pb-8 no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {PROPERTIES.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;