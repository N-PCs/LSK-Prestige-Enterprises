// PropertyInfo.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROPERTIES } from '../constants';
import Footer from './Footer';

const PropertyInfo: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Find the property by ID
  const property = PROPERTIES.find((p) => p.id === id);
  const isSoldOut = property?.badge === 'Completed (sold out)' || property?.price === 'Sold Out' || property?.projectStatus === 'Completed (sold out)';

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panX, setPanX] = useState(0);
  const [panY, setPanY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [imageAspectRatios, setImageAspectRatios] = useState<{ [key: string]: number }>({});

  // Preload gallery images to obtain their natural aspect ratios immediately
  useEffect(() => {
    if (!property?.gallery) return;
    property.gallery.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        if (img.naturalWidth && img.naturalHeight) {
          const ratio = img.naturalWidth / img.naturalHeight;
          setImageAspectRatios((prev) => (prev[src] === ratio ? prev : { ...prev, [src]: ratio }));
        }
      };
    });
  }, [property?.id]);

  const handleImageLoad = useCallback((src: string, e: React.SyntheticEvent<HTMLImageElement>) => {
    const { naturalWidth, naturalHeight } = e.currentTarget;
    if (naturalWidth && naturalHeight) {
      const ratio = naturalWidth / naturalHeight;
      setImageAspectRatios((prev) => (prev[src] === ratio ? prev : { ...prev, [src]: ratio }));
    }
  }, []);

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
              <div>
                {isSoldOut ? (
                  <div className="hidden md:block bg-red-500 text-white font-display font-bold text-lg sm:text-xl px-4 py-2.5 rounded whitespace-nowrap">
                    Sold Out
                  </div>
                ) : (
                  <>
                    <div className="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">
                      Starting At
                    </div>
                    <div className="bg-primary text-white font-display font-bold text-lg sm:text-xl px-4 py-2.5 rounded inline-block whitespace-nowrap">
                      {property.price}
                    </div>
                  </>
                )}
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
          <div className="mb-12 sm:mb-14 md:mb-16 flex flex-col items-center w-full">
            {/* Outer Stationary Stage Container - NO background box */}
            <div className="relative w-full h-[360px] sm:h-[480px] md:h-[560px] flex items-center justify-center overflow-hidden">
              
              {/* Centered Dynamic Image */}
              <div
                className="relative max-w-full max-h-full flex items-center justify-center overflow-hidden p-2 transition-all duration-300"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                style={{ cursor: zoomLevel > 1 && isDragging ? 'grabbing' : (zoomLevel > 1 ? 'grab' : 'auto') }}
              >
                <img
                  key={property.gallery[currentImageIndex]}
                  src={property.gallery[currentImageIndex]}
                  alt={`${property.title} - Image ${currentImageIndex + 1}`}
                  className="max-w-full max-h-[340px] sm:max-h-[460px] md:max-h-[540px] w-auto h-auto object-contain rounded-none shadow-2xl transition-transform duration-200 select-none block"
                  style={{
                    transform: `scale(${zoomLevel}) translate(${panX}px, ${panY}px)`,
                    userSelect: 'none',
                  }}
                  draggable={false}
                />
              </div>

              {/* Stationary Floating Previous Button */}
              <button
                onClick={prevImage}
                aria-label="Previous Image"
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md text-white flex items-center justify-center transition-all z-20 shadow-xl border border-white/10 hover:scale-110"
              >
                <span className="material-icons-outlined text-2xl">chevron_left</span>
              </button>

              {/* Stationary Floating Next Button */}
              <button
                onClick={nextImage}
                aria-label="Next Image"
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md text-white flex items-center justify-center transition-all z-20 shadow-xl border border-white/10 hover:scale-110"
              >
                <span className="material-icons-outlined text-2xl">chevron_right</span>
              </button>

              {/* Stationary Floating Counter Badge (Top-Left) */}
              <div className="absolute top-4 left-4 sm:left-6 bg-black/60 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-white/10 z-20 shadow-lg flex items-center gap-1.5">
                <span className="material-icons-outlined text-sm text-primary">collections</span>
                {currentImageIndex + 1} / {property.gallery.length}
              </div>

              {/* Stationary Floating Controls (Top-Right: AutoPlay & Zoom) */}
              <div className="absolute top-4 right-4 sm:right-6 flex items-center gap-2 z-20">
                {/* Zoom Level Indicator */}
                {zoomLevel > 1 && (
                  <div className="bg-black/60 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-medium border border-white/10 shadow-lg">
                    {Math.round(zoomLevel * 100)}%
                  </div>
                )}

                {/* Zoom Out Button */}
                <button
                  onClick={zoomOut}
                  disabled={zoomLevel <= 1}
                  aria-label="Zoom Out"
                  className="w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 disabled:opacity-40 backdrop-blur-md text-white flex items-center justify-center transition-all border border-white/10 shadow-lg"
                >
                  <span className="material-icons-outlined text-sm sm:text-base">remove</span>
                </button>

                {/* Zoom In Button */}
                <button
                  onClick={zoomIn}
                  disabled={zoomLevel >= 3}
                  aria-label="Zoom In"
                  className="w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 disabled:opacity-40 backdrop-blur-md text-white flex items-center justify-center hover:scale-105 transition-all border border-white/10 shadow-lg"
                >
                  <span className="material-icons-outlined text-sm sm:text-base">add</span>
                </button>

                {/* Play/Pause Autoplay Toggle */}
                <button
                  onClick={toggleAutoPlay}
                  aria-label={isAutoPlaying ? 'Pause Slideshow' : 'Play Slideshow'}
                  className="w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md text-white flex items-center justify-center transition-all border border-white/10 shadow-lg"
                >
                  <span className="material-icons-outlined text-sm sm:text-base">
                    {isAutoPlaying ? 'pause' : 'play_arrow'}
                  </span>
                </button>
              </div>
            </div>

            {/* Floating Thumbnail Strip */}
            <div className="mt-4 w-full flex justify-center px-4">
              <div className="flex gap-2.5 justify-center overflow-x-auto py-2 px-3 bg-gray-900/40 dark:bg-black/40 backdrop-blur-md rounded-none border border-white/10 shadow-xl max-w-full">
                {property.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-none overflow-hidden border-2 transition-all ${
                      currentImageIndex === index
                        ? 'border-primary scale-105 ring-2 ring-primary/40 shadow-lg'
                        : 'border-transparent opacity-60 hover:opacity-100 hover:border-white/30'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover rounded-none"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Property Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
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

            {/* Right Column */}
            <div className="space-y-8">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 custom-shadow">
                <h3 className="font-display text-xl text-black dark:text-white mb-4">Property Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                    <span className="text-gray-600 dark:text-gray-400">Project Status</span>
                    <span className="font-medium text-secondary dark:text-primary">{property.projectStatus}</span>
                  </div>
                </div>
              </div>

              {!isSoldOut && (
                <div className="bg-primary/10 dark:bg-primary/20 rounded-2xl p-6">
                  <h3 className="font-display text-xl text-black dark:text-white mb-4">Interested?</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">Contact us for a private viewing or more information.</p>
                  <a
                    href="#contact"
                    className="block w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-center"
                  >
                    Schedule a Viewing
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PropertyInfo;