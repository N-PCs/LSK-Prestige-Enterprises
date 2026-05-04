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
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-center">
          {projectsImages.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-2xl group relative shadow-2xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800 max-w-xs mx-auto w-full">
              <div className="relative w-full aspect-[4/3] md:aspect-[3/2] lg:aspect-[16/10]">
                <img
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
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
