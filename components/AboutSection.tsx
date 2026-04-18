import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Home, Store, Heart, Target, Shield } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section
      className="py-12 md:py-20 px-4 bg-white dark:bg-[#0a0a0a] overflow-hidden"
      id="about"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        {/* Image Grid with Framer Motion - Made more compact */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="lg:w-1/2 grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 relative"
        >
          {/* Decorative backdrop element */}
          <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>

          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            <img
              alt="Luxury Skyscraper"
              className="rounded-sm shadow-xl aspect-[3/4] object-cover w-full hover:scale-[1.02] transition-transform duration-500"
              src="/images/churchgoa.jpg"
            />
            <img
              alt="Real Estate Interior"
              className="rounded-sm shadow-xl aspect-square object-cover w-full hover:scale-[1.02] transition-transform duration-500"
              src="/images/vasco.jpg"
            />
          </div>
          <div className="space-y-2 sm:space-y-3 md:space-y-4 pt-6 sm:pt-8 md:pt-12">
            <img
              alt="Modern House"
              className="rounded-sm shadow-xl aspect-square object-cover w-full hover:scale-[1.02] transition-transform duration-500"
              src="/images/arambol.jpg"
            />
            <img
              alt="Residential Detail"
              className="rounded-sm shadow-xl aspect-[3/4] object-cover w-full hover:scale-[1.02] transition-transform duration-500"
              src="/images/vagator.jpg"
            />
          </div>
        </motion.div>

        {/* Content with Framer Motion */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          {/* Legacy of Excellence Section */}
          <div>
            <span className="text-primary font-bold tracking-[0.4em] text-[15px] uppercase mb-4 block">
              Legacy of Excellence
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 mb-4 sm:mb-6 text-black dark:text-white leading-[1.1] italic font-medium">
              Luxury Homes & <br /> <span className="text-primary">Villas</span>{' '}
              around Goa
            </h2>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6 text-sm font-light italic">
              Born from a family's shared dream, LSK Prestige began shaping
              homes in 2018 and officially laid its cornerstones in 2022. With
              five villas completed and a sixth rising under the Goan sun, our
              story is one of craft, legacy, and belonging. What started as a
              father's vision has grown into a living tribute — every wall we
              build carries his passion for honest design, enduring strength,
              and soulful architecture. We believe homes should not just shelter
              life but celebrate it – grounded in heritage, open to light, and
              faithful to quality.
            </p>
          </div>

          {/* Property Types Grid - Made more compact */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12">
            <div className="text-center group cursor-pointer">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-secondary/5 text-secondary rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-2.5 md:mb-3 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                <Building2 className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5" />
              </div>
              <span className="text-[8px] sm:text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 group-hover:text-black dark:group-hover:text-white transition-colors">
                Apartment
              </span>
            </div>

            <div className="text-center group cursor-pointer">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-black/5 dark:bg-white/5 text-black dark:text-white rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-2.5 md:mb-3 group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all duration-300">
                <Home className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 group-hover:text-black dark:group-hover:text-white transition-colors">
                House
              </span>
            </div>

            <div className="text-center group cursor-pointer">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-secondary/5 text-secondary rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-2.5 md:mb-3 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                <Store className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5" />
              </div>
              <span className="text-[8px] sm:text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 group-hover:text-black dark:group-hover:text-white transition-colors">
                Commercial
              </span>
            </div>
          </div>

          {/* Philosophy & Values Section - Combined into single column */}
          <div className="border-t border-gray-100 dark:border-gray-800 pt-8">
            <span className="text-secondary font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block">
              Philosophy / Values
            </span>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6 text-sm font-light italic">
              Our philosophy is rooted in the belief that every home tells a
              story — of those who dreamt it, built it, and live within it. Each
              villa stands as a dialogue between art and structure, inspired by
              Goan warmth and guided by integrity.
            </p>

            {/* Values Icons Grid - Made more compact */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
              <div className="text-center group">
                <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-black/5 text-black rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-1.5 md:mb-2 group-hover:bg-black group-hover:text-white transition-all duration-300">
                  <Heart className="w-3 sm:w-3.5 md:w-4 h-3 sm:h-3.5 md:h-4" />
                </div>
                <span className="text-[7px] sm:text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] text-gray-500 group-hover:text-black dark:group-hover:text-white transition-colors">
                  Integrity
                </span>
              </div>

              <div className="text-center group">
                <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-secondary/5 text-secondary rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-1.5 md:mb-2 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  <Target className="w-3 sm:w-3.5 md:w-4 h-3 sm:h-3.5 md:h-4" />
                </div>
                <span className="text-[7px] sm:text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] text-gray-500 group-hover:text-black dark:group-hover:text-white transition-colors">
                  Craftsmanship
                </span>
              </div>

              <div className="text-center group">
                <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-black/5 text-black rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-1.5 md:mb-2 group-hover:bg-black group-hover:text-white transition-all duration-300">
                  <Shield className="w-3 sm:w-3.5 md:w-4 h-3 sm:h-3.5 md:h-4" />
                </div>
                <span className="text-[7px] sm:text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] text-gray-500 group-hover:text-black dark:group-hover:text-white transition-colors">
                  Transparency
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
