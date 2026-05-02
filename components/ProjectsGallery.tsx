import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const projectsImages = [
  '/images/1 (1).png',
  '/images/1 (3).png',
  '/images/1 (11).jpg.jpeg',
  '/images/1 (14).jpg.jpeg',
  '/images/1 (17).jpg.jpeg',
  '/images/APX08197.jpg.jpeg',
  '/images/APX08198.jpg.jpeg',
  '/images/APX08201.jpg.jpeg',
  '/images/APX08203.jpg.jpeg',
  '/images/APX08205.jpg.jpeg',
  '/images/APX08260.jpg.jpeg',
  '/images/APX08270.jpg.jpeg',
  '/images/Villa 5.png',
  '/images/Villa 6.png',
  '/images/villa 4.png',
];

export const ProjectsGallerySection: React.FC = () => {
  const scroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('gallery-slider');
    if (container) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects-gallery" className="py-12 md:py-16 bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <span className="text-primary font-bold tracking-[0.4em] text-[15px] uppercase mb-4 block">
            Gallery
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-black dark:text-white font-medium italic">
            Projects Gallery
          </h2>
          <div className="w-16 h-[1px] bg-primary mx-auto mt-6"></div>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mt-6 text-sm uppercase tracking-widest font-semibold">
            Explore our portfolio of premium properties and exclusive developments.
          </p>
        </div>

        <div 
          id="gallery-slider"
          className="flex overflow-x-auto gap-6 snap-x snap-mandatory scroll-smooth pb-8 no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} 
        >
          {projectsImages.map((src, index) => (
            <div key={index} className="min-w-[85%] sm:min-w-[400px] md:min-w-[450px] snap-center overflow-hidden rounded-sm group relative shadow-md">
              <img
                src={src}
                alt={`Project image ${index + 1}`}
                className="w-full h-64 sm:h-80 md:h-96 object-cover transform transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

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
