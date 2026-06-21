import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section
      className="py-20 md:py-28 px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] overflow-hidden"
      id="about"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Side: Sage Green Room Image with Bronze Badge */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="col-span-1 lg:col-span-6 relative group"
        >
          <div className="relative aspect-square w-full overflow-hidden shadow-2xl">
            <img
              alt="Sage Green Room Interior"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              src="/images/green_room_vision.png"
            />
            {/* Elegant Bronze/Brown Badge */}
            <div className="absolute bottom-6 right-6 bg-[#8C6D4C] dark:bg-[#70553A] text-white px-5 py-3 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] shadow-lg">
              Est. 2018
            </div>
          </div>
        </motion.div>

        {/* Right Side: Editorial Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true }}
          className="col-span-1 lg:col-span-6 flex flex-col gap-6"
        >
          {/* Subheader */}
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-[#E06A55]">
            ARCHITECTURAL VISION
          </span>

          {/* Heading */}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-black dark:text-white leading-[1.15] font-medium">
            We don't just sell property; <br />
            we curate <span className="italic font-normal">emotions.</span>
          </h2>

          {/* Luxury Quote */}
          <div className="border-l border-[#E06A55] pl-6 my-2">
            <p className="text-gray-500 dark:text-gray-400 italic font-light text-base sm:text-lg leading-relaxed">
              "Luxury is the absence of noise, the presence of intention, and the luxury of infinite space."
            </p>
          </div>

          {/* Main Body Text (keeps original data intact) */}
          <p className="text-gray-500 dark:text-gray-400 font-light text-sm sm:text-base leading-relaxed max-w-xl">
            Born from a family's shared dream, LSK Prestige began shaping homes in 2018 and officially laid its cornerstones in 2022. With five villas completed and a sixth rising under the Goan sun, our story is one of craft, legacy, and belonging. What started as a father's vision has grown into a living tribute — every wall we build carries his passion for honest design, enduring strength, and soulful architecture.
          </p>

          <p className="text-gray-500 dark:text-gray-400 font-light text-sm sm:text-base leading-relaxed max-w-xl">
            We believe homes should not just shelter life but celebrate it – grounded in heritage, open to light, and faithful to quality.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
