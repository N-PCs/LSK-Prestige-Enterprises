import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { LEADERS } from '../constants';

const LeadersSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const nextLeader = React.useCallback(() => {
    setActiveTab((prev) => (prev + 1) % LEADERS.length);
  }, []);

  const prevLeader = () => {
    setActiveTab((prev) => (prev - 1 + LEADERS.length) % LEADERS.length);
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      nextLeader();
    }, 5000);

    return () => clearInterval(timer);
  }, [nextLeader, activeTab]);


  return (
    <section className="py-24 px-4 bg-white dark:bg-[#0a0a0a] overflow-hidden" id="leadership">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="text-left">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold tracking-[0.4em] text-[15px] uppercase mb-4 block"
            >
              Our Leadership
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="font-display text-4xl md:text-5xl text-black dark:text-white leading-tight italic font-medium"
            >
              Visionaries Behind the <br className="hidden md:block" /> LSK Prestige Legacy
            </motion.h2>
          </div>

          {/* Simple Carousel Controls */}
          <div className="flex items-center gap-6">
            <div className="flex gap-2">
              <button 
                onClick={prevLeader}
                className="w-8 h-8 rounded-full border border-gray-100 dark:border-gray-800 flex items-center justify-center text-gray-400 hover:border-primary hover:text-primary transition-all duration-300"
                aria-label="Previous leader"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextLeader}
                className="w-8 h-8 rounded-full border border-gray-100 dark:border-gray-800 flex items-center justify-center text-gray-400 hover:border-primary hover:text-primary transition-all duration-300"
                aria-label="Next leader"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              {LEADERS.map((_, index) => (
                <div 
                  key={index}
                  className={`h-1 transition-all duration-500 rounded-full ${
                    activeTab === index ? 'w-8 bg-primary' : 'w-2 bg-gray-200 dark:bg-gray-800'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Content Area with Animation */}
        <div className="relative min-h-[400px] lg:min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col-reverse lg:items-center ${
                LEADERS[activeTab].imagePosition === 'right' ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-10 lg:gap-16`}
            >
              {/* Leader Content */}
              <div className="lg:w-1/2 space-y-6 lg:space-y-8">
                <div className="space-y-4">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="font-display text-3xl md:text-5xl text-black dark:text-white mb-2 leading-tight">
                      {LEADERS[activeTab].name}
                    </h3>
                    <div className="flex items-center gap-4">
                      <div className="h-[1px] w-8 bg-primary"></div>
                      <p className="text-secondary font-bold tracking-[0.2em] uppercase text-[9px] lg:text-[10px]">
                        {LEADERS[activeTab].role}
                      </p>
                    </div>
                  </motion.div>
                </div>
                
                <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.4 }}
                   className="relative"
                >
                  <span className="absolute -top-6 -left-6 lg:-top-8 lg:-left-8 text-6xl lg:text-8xl text-primary/10 font-serif overflow-hidden h-12 lg:h-20">"</span>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-base lg:text-lg font-light italic relative z-10">
                    {LEADERS[activeTab].description}
                  </p>
                </motion.div>

                <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.6 }}
                   className="pt-2 lg:pt-4"
                >
                  <button className="text-[9px] lg:text-[10px] font-bold uppercase tracking-[0.4em] text-primary hover:text-secondary transition-colors border-b border-primary/20 pb-2">
                    Connect on LinkedIn
                  </button>
                </motion.div>
              </div>

              {/* Leader Image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="lg:w-1/2 w-full px-4 lg:px-0"
              >
                <div className="relative aspect-[4/5] w-full max-w-[320px] lg:max-w-[450px] mx-auto group">
                   {/* Top Accent Frame */}
                   <div className="absolute -top-3 -right-3 lg:-top-4 lg:-right-4 w-24 h-24 lg:w-32 lg:h-32 border-t-2 border-r-2 border-primary/20 -z-10 group-hover:-top-5 group-hover:-right-5 transition-all duration-500"></div>
                   
                   {/* Bottom Accent Frame */}
                   <div className="absolute -bottom-3 -left-3 lg:-bottom-4 lg:-left-4 w-24 h-24 lg:w-32 lg:h-32 border-b-2 border-l-2 border-secondary/20 -z-10 group-hover:-bottom-5 group-hover:-left-5 transition-all duration-500"></div>

                   <div className="absolute inset-0 bg-gray-100 dark:bg-gray-900 overflow-hidden rounded-sm shadow-2xl">
                      {/* Placeholder UI */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-gray-300 dark:text-gray-700 font-display text-3xl lg:text-4xl opacity-50 uppercase tracking-widest">Portrait</span>
                      </div>
                      
                      <img
                        src={LEADERS[activeTab].image}
                        alt={LEADERS[activeTab].name}
                        className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
                   </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile Pagination Only */}
        <div className="flex sm:hidden justify-center items-center gap-2 mt-12">
          {LEADERS.map((_, index) => (
            <div 
              key={index}
              className={`h-1 transition-all duration-500 rounded-full ${
                activeTab === index ? 'w-8 bg-primary' : 'w-2 bg-gray-200 dark:bg-gray-800'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadersSection;
