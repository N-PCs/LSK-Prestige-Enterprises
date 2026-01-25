// PropertyInfo.tsx
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROPERTIES } from '../constants';
import { Property } from '../types';

const PropertyInfo: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Find the property by ID
  const property = PROPERTIES.find(p => p.id === id);
  
  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0a0a0a]">
        <div className="text-center">
          <h2 className="font-display text-2xl text-black dark:text-white mb-4">Property not found</h2>
          <Link to="/" className="text-primary hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.gallery.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.gallery.length) % property.gallery.length);
  };
  
  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
          >
            <span className="material-icons-outlined text-sm">arrow_back</span>
            Back to Properties
          </Link>
        </div>

        {/* Property Header */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-6">
            <div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-black dark:text-white font-medium italic mb-4">
                {property.title}
              </h1>
              <div className="flex items-center gap-2 text-gray-400">
                <span className="material-icons-outlined text-primary text-sm">location_on</span>
                <p className="text-lg">{property.location}</p>
              </div>
            </div>
            <div className="bg-primary/10 dark:bg-primary/20 px-6 py-4 rounded-lg">
              <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Starting At</div>
              <div className="text-primary font-display font-bold text-3xl">{property.price}</div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium">
              {property.type}
            </span>
            <span className="px-4 py-2 bg-secondary/10 text-secondary dark:bg-primary/20 dark:text-primary rounded-full text-sm font-medium">
              {property.projectStatus}
            </span>
          </div>
        </div>

        {/* Image Carousel */}
        <div className="mb-16">
          <div className="relative rounded-2xl overflow-hidden custom-shadow">
            <div className="relative h-[500px] md:h-[600px]">
              <img
                src={property.gallery[currentImageIndex]}
                alt={`${property.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/70 transition-all"
              >
                <span className="material-icons-outlined">chevron_left</span>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/70 transition-all"
              >
                <span className="material-icons-outlined">chevron_right</span>
              </button>
              
              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                {currentImageIndex + 1} / {property.gallery.length}
              </div>
            </div>
            
            {/* Thumbnail Strip */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
              <div className="flex gap-2 justify-center">
                {property.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      currentImageIndex === index 
                        ? 'border-primary scale-105' 
                        : 'border-transparent hover:border-white/50'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Property Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Description & Features */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <div>
              <h2 className="font-display text-3xl text-black dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-gray-800">
                Property Description
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                {property.description}
              </p>
            </div>

            {/* Features */}
            <div>
              <h2 className="font-display text-3xl text-black dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-gray-800">
                Amenities & Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <span className="material-icons-outlined text-primary">check_circle</span>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location Advantages */}
            <div>
              <h2 className="font-display text-3xl text-black dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-gray-800">
                Location Advantages
              </h2>
              <ul className="space-y-3">
                {property.locationAdvantages.map((advantage, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="material-icons-outlined text-primary text-sm mt-1">place</span>
                    <span className="text-gray-600 dark:text-gray-400">{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Info Cards */}
          <div className="space-y-8">
            {/* Property Type Card */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 custom-shadow">
              <h3 className="font-display text-xl text-black dark:text-white mb-4">Property Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-400">Property Type</span>
                  <span className="font-medium text-black dark:text-white">{property.propertyType}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-400">Project Status</span>
                  <span className="font-medium text-secondary dark:text-primary">{property.projectStatus}</span>
                </div>
              </div>
            </div>

            {/* Floor Plans */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 custom-shadow">
              <h3 className="font-display text-xl text-black dark:text-white mb-4">Floor Plans</h3>
              <div className="space-y-4">
                {property.floorPlans.map((plan, index) => (
                  <div key={index} className="p-4 bg-white dark:bg-gray-900 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold text-black dark:text-white">{plan.name}</h4>
                      <span className="text-primary font-bold">{plan.size}</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{plan.rooms}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-primary/10 dark:bg-primary/20 rounded-2xl p-6">
              <h3 className="font-display text-xl text-black dark:text-white mb-4">Interested in this property?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Contact us for a private viewing or more information about this exclusive property.
              </p>
              <div className="space-y-3">
                <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Schedule a Viewing
                </button>
                <button className="w-full border-2 border-primary text-primary py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyInfo;