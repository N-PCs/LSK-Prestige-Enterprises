// PropertyInfo.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROPERTIES } from '../constants';
import Footer from './Footer';

const PropertyInfo: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panX, setPanX] = useState(0);
  const [panY, setPanY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Find the property by ID
  const property = PROPERTIES.find((p) => p.id === id);

  // Scroll to top when component mounts or property changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Auto slideshow timer
  useEffect(() => {
    if (!property || !isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % property.gallery.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [property, isAutoPlaying]);

  const nextImage = useCallback(() => {
    if (!property) return;
    setCurrentImageIndex((prev) => (prev + 1) % property.gallery.length);
    setZoomLevel(1); // Reset zoom when changing images
    setPanX(0);
    setPanY(0);
  }, [property]);

  const prevImage = useCallback(() => {
    if (!property) return;
    setCurrentImageIndex(
      (prev) => (prev - 1 + property.gallery.length) % property.gallery.length,
    );
    setZoomLevel(1); // Reset zoom when changing images
    setPanX(0);
    setPanY(0);
  }, [property]);

  const goToImage = useCallback((index: number) => {
    setCurrentImageIndex(index);
    setZoomLevel(1); // Reset zoom when changing images
    setPanX(0);
    setPanY(0);
    // Reset autoplay timer when user manually selects an image
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  }, []);

  const zoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.25, 3));
  };

  const zoomOut = () => {
    setZoomLevel((prev) => {
      const newZoom = Math.max(prev - 0.25, 1);
      if (newZoom === 1) {
        setPanX(0);
        setPanY(0);
      }
      return newZoom;
    });
  };

  const resetZoom = () => {
    setZoomLevel(1);
    setPanX(0);
    setPanY(0);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel <= 1) return; // Only allow dragging when zoomed
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const deltaX = e.clientX - dragStart.x;
    const deltaY = e.clientY - dragStart.y;

    const maxPan = 100; // Max pan distance in pixels
    setPanX((prev) => Math.max(-maxPan, Math.min(maxPan, prev + deltaX * 0.5)));
    setPanY((prev) => Math.max(-maxPan, Math.min(maxPan, prev + deltaY * 0.5)));

    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0a0a0a]">
        <div className="text-center">
          <h2 className="font-display text-2xl text-black dark:text-white mb-4">
            Property not found
          </h2>
          <Link to="/" className="text-primary hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
            >
              <span className="material-icons-outlined text-sm">
                arrow_back
              </span>
              Back to Properties
            </Link>
          </div>

          {/* Property Header */}
          <div className="mb-8 sm:mb-10 md:mb-12">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div>
                <h1 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-black dark:text-white font-medium italic mb-2 sm:mb-4">
                  {property.title}
                </h1>
                <div className="flex items-center gap-2 text-gray-400">
                  <span className="material-icons-outlined text-primary text-sm">
                    location_on
                  </span>
                  <p className="text-sm sm:text-base md:text-lg">{property.location}</p>
                </div>
              </div>
              <div className="bg-primary/10 dark:bg-primary/20 px-4 sm:px-6 py-3 sm:py-4 rounded-lg">
                <div className="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">
                  Starting At
                </div>
                <div className="text-primary font-display font-bold text-2xl sm:text-3xl">
                  {property.price}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-4">
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-xs sm:text-sm font-medium">
                {property.type}
              </span>
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-secondary/10 text-secondary dark:bg-primary/20 dark:text-primary rounded-full text-xs sm:text-sm font-medium">
                {property.projectStatus}
              </span>
            </div>
          </div>

          {/* Image Carousel */}
          <div className="mb-12 sm:mb-14 md:mb-16">
            <div className="relative rounded-2xl overflow-hidden custom-shadow bg-gray-100 dark:bg-gray-900">
              <div className="relative h-64 sm:h-80 md:h-[400px] lg:h-[500px]">
                {/* Main Image Container - Fixed aspect ratio */}
                <div
                  className="relative h-full flex items-center justify-center overflow-hidden flex-col"
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                  style={{ cursor: zoomLevel > 1 && isDragging ? 'grabbing' : (zoomLevel > 1 ? 'grab' : 'auto') }}
                >
                  <img
                    src={property.gallery[currentImageIndex]}
                    alt={`${property.title} - Image ${currentImageIndex + 1}`}
                    className="max-w-full max-h-full object-contain transition-transform duration-200 select-none"
                    style={{
                      width: 'auto',
                      height: 'auto',
                      transform: `scale(${zoomLevel}) translate(${panX}px, ${panY}px)`,
                      userSelect: 'none',
                    }}
                    draggable={false}
                  />
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/90 transition-all z-10"
                  aria-label="Previous image"
                >
                  <span className="material-icons-outlined">chevron_left</span>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/90 transition-all z-10"
                  aria-label="Next image"
                >
                  <span className="material-icons-outlined">chevron_right</span>
                </button>

                {/* Zoom Controls */}
                <div className="absolute right-2 sm:right-4 bottom-2 sm:bottom-4 flex flex-row gap-1.5 sm:gap-2 z-10">
                  <button
                    onClick={zoomIn}
                    disabled={zoomLevel >= 3}
                    className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-black/70 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Zoom in"
                    title="Zoom in"
                  >
                    <span className="material-icons-outlined text-sm sm:text-base">add</span>
                  </button>
                  <button
                    onClick={zoomOut}
                    disabled={zoomLevel <= 1}
                    className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-black/70 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Zoom out"
                    title="Zoom out"
                  >
                    <span className="material-icons-outlined text-sm sm:text-base">remove</span>
                  </button>
                </div>

                {/* Zoom Percentage Display */}
                {zoomLevel > 1 && (
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-black/70 backdrop-blur-sm text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium z-10">
                    Zoom: {Math.round(zoomLevel * 100)}%
                  </div>
                )}

                {/* Auto-play Toggle */}
                <button
                  onClick={toggleAutoPlay}
                  className="absolute top-2 sm:top-4 right-2 sm:right-4 w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-black/70 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/90 transition-all z-10"
                  aria-label={
                    isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'
                  }
                >
                  <span className="material-icons-outlined text-sm sm:text-base">
                    {isAutoPlaying ? 'pause' : 'play_arrow'}
                  </span>
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-black/70 backdrop-blur-sm text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium z-10">
                  {currentImageIndex + 1} / {property.gallery.length}
                </div>
              </div>

              {/* Thumbnail Strip */}
              <div className="p-2 sm:p-4 bg-gray-50 dark:bg-gray-800">
                <div className="flex gap-1.5 sm:gap-2 justify-center overflow-x-auto py-1.5 sm:py-2">
                  {property.gallery.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        currentImageIndex === index
                          ? 'border-primary scale-105 ring-2 ring-primary/30'
                          : 'border-transparent hover:border-gray-300 dark:hover:border-gray-600'
                      }`}
                      aria-label={`View image ${index + 1}`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      {currentImageIndex === index && (
                        <div className="absolute inset-0 bg-primary/20" />
                      )}
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
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    >
                      <span className="material-icons-outlined text-primary">
                        check_circle
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
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
                      <span className="material-icons-outlined text-primary text-sm mt-1">
                        place
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {advantage}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Info Cards */}
            <div className="space-y-8">
              {/* Property Type Card */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 custom-shadow">
                <h3 className="font-display text-xl text-black dark:text-white mb-4">
                  Property Details
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                    <span className="text-gray-600 dark:text-gray-400">
                      Project Status
                    </span>
                    <span className="font-medium text-secondary dark:text-primary">
                      {property.projectStatus}
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-primary/10 dark:bg-primary/20 rounded-2xl p-6">
                <h3 className="font-display text-xl text-black dark:text-white mb-4">
                  Interested in this property?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Contact us for a private viewing or more information about
                  this exclusive property.
                </p>
                <div className="space-y-3">
                  <a
                    href="#contact"
                    className="block w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-center"
                  >
                    Schedule a Viewing
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PropertyInfo;
