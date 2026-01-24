
import React from 'react';
import { PROPERTIES } from '../constants';
import { Property } from '../types';

const PropertyCard: React.FC<{ property: Property }> = ({ property }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden custom-shadow group hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700">
    <div className="relative overflow-hidden">
      <img 
        alt={property.title} 
        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-1000" 
        src={property.image}
      />
      <div className="absolute top-5 right-5 bg-white/90 dark:bg-black/80 backdrop-blur-sm p-2.5 rounded-full shadow-lg cursor-pointer hover:bg-secondary hover:text-white transition-all text-secondary">
        <span className="material-icons-outlined text-lg">favorite_border</span>
      </div>
      <div className="absolute top-5 left-5 bg-black/80 backdrop-blur-sm text-white text-[9px] font-bold px-4 py-1.5 rounded-sm uppercase tracking-[0.2em]">
        New Listing
      </div>
    </div>
    
    <div className="p-8">
      <div className="flex justify-between items-start mb-6">
        <div className="flex-1">
          <h3 className="font-display text-2xl font-bold text-black dark:text-white group-hover:text-primary transition-colors leading-tight mb-2">
            {property.title}
          </h3>
          <p className="text-gray-400 text-xs flex items-center gap-1.5 uppercase tracking-widest font-semibold">
            <span className="material-icons-outlined text-sm text-primary">location_on</span> {property.location}
          </p>
        </div>
        <div className="text-right">
          <div className="text-primary font-display font-bold text-2xl leading-none mb-1">{property.price}</div>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Starting At</span>
        </div>
      </div>
      
      <div className="flex justify-between items-center py-6 border-y border-gray-50 dark:border-gray-700/50">
        <div className="flex flex-col items-center gap-1">
          <span className="material-icons-outlined text-gray-300 text-xl">bed</span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">{property.beds} Bed</span>
        </div>
        <div className="h-8 w-[1px] bg-gray-100 dark:bg-gray-700/50"></div>
        <div className="flex flex-col items-center gap-1">
          <span className="material-icons-outlined text-gray-300 text-xl">bathtub</span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">{property.baths} Bath</span>
        </div>
        <div className="h-8 w-[1px] bg-gray-100 dark:bg-gray-700/50"></div>
        <div className="flex flex-col items-center gap-1">
          <span className="material-icons-outlined text-gray-300 text-xl">square_foot</span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">{property.sqft} Sqft</span>
        </div>
      </div>
      
      <div className="mt-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-gray-100 overflow-hidden border border-gray-200 dark:border-gray-700">
            <img alt={property.agent.name} src={property.agent.avatar} className="object-cover w-full h-full" />
          </div>
          <div>
            <span className="text-xs font-bold block text-black dark:text-white uppercase tracking-wider">{property.agent.name}</span>
            <span className="text-[9px] text-gray-400 uppercase tracking-widest font-medium">Sr. Developer</span>
          </div>
        </div>
        <button className="text-xs font-bold uppercase tracking-widest text-primary border-b border-primary hover:border-black dark:hover:border-white transition-all pb-0.5">
          View Detail
        </button>
      </div>
    </div>
  </div>
);

const PropertiesSection: React.FC = () => {
  return (
    <section className="py-28 bg-white dark:bg-[#0a0a0a]" id="properties">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-primary font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block">Portfolio</span>
          <h2 className="font-display text-4xl md:text-6xl text-black dark:text-white font-medium italic">Exclusive Properties</h2>
          <div className="w-16 h-[1px] bg-primary mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {PROPERTIES.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        
        <div className="flex justify-center mt-20 gap-8">
          <button className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-800 flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
            <span className="material-icons-outlined text-sm">arrow_back</span>
          </button>
          <button className="w-12 h-12 rounded-full bg-secondary dark:bg-primary text-white flex items-center justify-center hover:opacity-90 transition-all shadow-xl shadow-secondary/20 dark:shadow-primary/20">
            <span className="material-icons-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
