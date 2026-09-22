import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { PROPERTIES } from '../constants';

export interface GalleryPhoto {
  src: string;
  villaName: string;
  villaLocation: string;
  villaId: string;
  indexInVilla: number;
  totalInVilla: number;
}

export interface VillaGalleryGroup {
  id: string;
  name: string;
  location: string;
  status: string;
  propertyId: string;
  description: string;
  images: string[];
}

// Grounded directly in PROPERTIES from constants
const propVanelim = PROPERTIES.find((p) => p.id === '1');
const propColva = PROPERTIES.find((p) => p.id === '2');

export const TWO_VILLAS: VillaGalleryGroup[] = [
  {
    id: 'villa-colva',
    name: propColva?.title || 'Villa Colva',
    location: propColva?.location || 'Colva, Margao, South Goa',
    status: propColva?.projectStatus || 'Completed (sold out)',
    propertyId: '2',
    description:
      propColva?.description ||
      'Villa Colva offers luxury living in the peaceful coastal village of Colva, blending modern amenities with traditional Goan charm.',
    images: [
      '/images/villa 4.webp',
      '/images/APX08260.webp',
      '/images/1 (3).webp',
      '/images/1 (17).webp',
      '/images/APX08197.webp',
      '/images/APX08198.webp',
      '/images/APX08201.webp',
      '/images/APX08203.webp',
      '/images/APX08205.webp',
      '/images/APX08270.webp',
      '/images/1 (11).webp',
      '/images/1 (14).webp',
    ],
  },
  {
    id: 'villa-vanelim',
    name: propVanelim?.title || 'Villa Vanelim',
    location: propVanelim?.location || 'Vanelim-Colva, Salcete, South Goa',
    status: propVanelim?.projectStatus || 'Ready for Sale',
    propertyId: '1',
    description:
      propVanelim?.description ||
      'A masterpiece of neoclassical living in the heart of village Vanelim-Colva featuring monumental colonnades, private lawn, and plunge pool.',
    images: [
      '/images/Villa 5.webp',
      '/images/Villa 6(1).webp',
      '/images/Villa 6(2).webp',
      '/images/Villa 6(3).webp',
      '/images/Villa 6(4).webp',
      '/images/Villa 6(5).webp',
    ],
  },
];

interface LightboxProps {
  photos: GalleryPhoto[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

const LightboxModal: React.FC<LightboxProps> = ({
  photos,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const currentPhoto = photos[currentIndex];
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % photos.length);
      } else if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + photos.length) % photos.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, photos.length, onClose, onNavigate]);

  // Scroll active thumbnail into view
  useEffect(() => {
    const el = thumbnailRefs.current[currentIndex];
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [currentIndex]);

  const handlePrev = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      onNavigate((currentIndex - 1 + photos.length) % photos.length);
    },
    [currentIndex, photos.length, onNavigate],
  );

  const handleNext = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      onNavigate((currentIndex + 1) % photos.length);
    },
    [currentIndex, photos.length, onNavigate],
  );

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    setTouchStartX(null);
  };

  if (!currentPhoto) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery popup"
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-black/95 backdrop-blur-lg select-none"
      onClick={onClose}
    >
      {/* Top Header Bar */}
      <div
        className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 bg-gradient-to-b from-black/80 to-transparent z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#D25442]">
            {currentPhoto.villaName}
          </span>
          <span className="text-xs text-gray-400 font-light">
            {currentPhoto.villaLocation}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Index Counter */}
          <span className="px-3 py-1 bg-white/10 text-white/90 text-xs font-mono rounded-none tracking-widest border border-white/10">
            {currentPhoto.indexInVilla} / {currentPhoto.totalInVilla}
          </span>

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close gallery popup"
            className="w-10 h-10 flex items-center justify-center text-white/80 hover:text-white bg-white/10 hover:bg-[#D25442] transition-colors rounded-none border border-white/15 cursor-pointer"
          >
            <span className="material-icons-outlined text-lg">close</span>
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div
        className="relative flex-1 flex items-center justify-center px-4 sm:px-12 md:px-16 overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Previous Button */}
        {photos.length > 1 && (
          <button
            onClick={handlePrev}
            aria-label="Previous image"
            className="absolute left-2 sm:left-4 z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-black/60 hover:bg-[#D25442] text-white backdrop-blur-md transition-all border border-white/20 hover:scale-105 cursor-pointer shadow-2xl"
          >
            <span className="material-icons-outlined text-lg sm:text-xl">
              arrow_back
            </span>
          </button>
        )}

        {/* Center Image */}
        <div
          className="relative max-w-full max-h-full flex items-center justify-center p-2"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            key={currentPhoto.src}
            src={currentPhoto.src}
            alt={`${currentPhoto.villaName} - Photo ${currentPhoto.indexInVilla}`}
            className="max-h-[65vh] sm:max-h-[72vh] md:max-h-[78vh] w-auto max-w-[90vw] object-contain shadow-2xl transition-all duration-300 border border-white/10"
          />
        </div>

        {/* Next Button */}
        {photos.length > 1 && (
          <button
            onClick={handleNext}
            aria-label="Next image"
            className="absolute right-2 sm:right-4 z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-black/60 hover:bg-[#D25442] text-white backdrop-blur-md transition-all border border-white/20 hover:scale-105 cursor-pointer shadow-2xl"
          >
            <span className="material-icons-outlined text-lg sm:text-xl">
              arrow_forward
            </span>
          </button>
        )}
      </div>

      {/* Bottom Thumbnail Strip */}
      <div
        className="px-4 py-3 sm:py-4 bg-gradient-to-t from-black/90 via-black/70 to-transparent z-10 flex flex-col items-center gap-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex gap-2 sm:gap-3 overflow-x-auto max-w-full py-1 px-2 no-scrollbar justify-start sm:justify-center">
          {photos.map((photo, idx) => (
            <button
              key={idx}
              ref={(el) => (thumbnailRefs.current[idx] = el)}
              onClick={() => onNavigate(idx)}
              aria-label={`View photo ${photo.indexInVilla}`}
              className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 overflow-hidden border-2 transition-all cursor-pointer ${
                currentIndex === idx
                  ? 'border-[#D25442] scale-105 ring-2 ring-[#D25442]/40 shadow-lg'
                  : 'border-white/20 opacity-50 hover:opacity-100 hover:border-white/50'
              }`}
            >
              <img
                src={photo.src}
                alt={`${photo.villaName} thumbnail ${photo.indexInVilla}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
        <div className="hidden sm:block text-[11px] text-gray-400 font-light tracking-wide">
          Use{' '}
          <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-[10px]">←</kbd>{' '}
          <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-[10px]">→</kbd>{' '}
          keys to navigate,{' '}
          <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-[10px]">
            Esc
          </kbd>{' '}
          to close
        </div>
      </div>
    </div>
  );
};

export const ProjectsGallerySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    photos: GalleryPhoto[];
    currentIndex: number;
  }>({
    isOpen: false,
    photos: [],
    currentIndex: 0,
  });

  const allPhotos: GalleryPhoto[] = TWO_VILLAS.flatMap((villa) =>
    villa.images.map((src, i) => ({
      src,
      villaName: villa.name,
      villaLocation: villa.location,
      villaId: villa.id,
      indexInVilla: i + 1,
      totalInVilla: villa.images.length,
    })),
  );

  const openLightbox = (photos: GalleryPhoto[], index: number) => {
    setLightboxState({
      isOpen: true,
      photos,
      currentIndex: index,
    });
  };

  const closeLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  const navigateLightbox = (newIndex: number) => {
    setLightboxState((prev) => ({ ...prev, currentIndex: newIndex }));
  };

  const displayedVillas =
    activeTab === 'all'
      ? TWO_VILLAS
      : TWO_VILLAS.filter((v) => v.id === activeTab);

  return (
    <section
      id="projects-gallery"
      className="py-20 md:py-28 bg-white dark:bg-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-gray-100 dark:border-gray-900 pb-6 gap-6">
          <div className="text-left">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-[#D25442] block mb-2">
              THE ARCHIVE
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-black dark:text-white font-medium">
              Project Gallery
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mt-2 font-light">
              Explore our architectural gallery across our two private villa
              residences.
            </p>
          </div>

          {/* Villa Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition-all cursor-pointer border ${
                activeTab === 'all'
                  ? 'bg-black text-white dark:bg-white dark:text-black border-transparent shadow-md'
                  : 'bg-transparent text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white'
              }`}
            >
              All ({allPhotos.length})
            </button>
            {TWO_VILLAS.map((villa) => (
              <button
                key={villa.id}
                onClick={() => setActiveTab(villa.id)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition-all cursor-pointer border ${
                  activeTab === villa.id
                    ? 'bg-[#D25442] text-white border-[#D25442] shadow-md'
                    : 'bg-transparent text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white'
                }`}
              >
                {villa.name} ({villa.images.length})
              </button>
            ))}
          </div>
        </div>

        {/* Grouped Villa Galleries */}
        <div className="space-y-16">
          {displayedVillas.map((villa) => {
            const villaPhotos: GalleryPhoto[] = villa.images.map((src, i) => ({
              src,
              villaName: villa.name,
              villaLocation: villa.location,
              villaId: villa.id,
              indexInVilla: i + 1,
              totalInVilla: villa.images.length,
            }));

            return (
              <div
                key={villa.id}
                className="bg-gray-50/60 dark:bg-[#121212]/60 border border-gray-100 dark:border-gray-900 p-6 sm:p-8"
              >
                {/* Villa Group Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-gray-200 dark:border-gray-800 gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-display text-2xl md:text-3xl text-black dark:text-white font-medium">
                        {villa.name}
                      </h3>
                      <span className="text-[9px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 text-white bg-black/80 dark:bg-white/10 border border-black/10 dark:border-white/10">
                        {villa.status}
                      </span>
                    </div>
                    <p className="text-gray-400 dark:text-gray-500 text-[10px] tracking-[0.2em] uppercase font-medium">
                      {villa.location} • {villa.images.length}{' '}
                      {villa.images.length === 1 ? 'Photograph' : 'Photographs'}
                    </p>
                  </div>

                  {villa.propertyId && (
                    <Link
                      to={`/property/${villa.propertyId}`}
                      className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#D25442] hover:text-[#b84433] transition-colors border-b border-[#D25442]/30 pb-0.5 self-start sm:self-auto"
                    >
                      <span>View Property Details</span>
                      <span className="material-icons-outlined text-xs">
                        arrow_forward
                      </span>
                    </Link>
                  )}
                </div>

                {/* Images Grid for this Villa */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
                  {villa.images.map((src, imgIndex) => (
                    <div
                      key={imgIndex}
                      onClick={() => openLightbox(villaPhotos, imgIndex)}
                      className="group relative overflow-hidden bg-gray-200 dark:bg-gray-800 border border-gray-200 dark:border-gray-800 cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300"
                    >
                      <div className="relative w-full aspect-[4/3] overflow-hidden">
                        <img
                          src={src}
                          alt={`${villa.name} - Photo ${imgIndex + 1}`}
                          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                        />

                        {/* Subtle dark gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-300" />

                        {/* Expand Icon on Hover */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="w-9 h-9 flex items-center justify-center bg-black/70 text-white rounded-none border border-white/20 backdrop-blur-sm shadow-lg">
                            <span className="material-icons-outlined text-base">
                              zoom_in
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Popup Modal */}
      {lightboxState.isOpen && (
        <LightboxModal
          photos={lightboxState.photos}
          currentIndex={lightboxState.currentIndex}
          onClose={closeLightbox}
          onNavigate={navigateLightbox}
        />
      )}
    </section>
  );
};

const ProjectsGallery: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20 md:pt-24 min-h-screen bg-white dark:bg-[#0a0a0a]">
        <ProjectsGallerySection />
      </div>
      <Footer />
    </>
  );
};

export default ProjectsGallery;
