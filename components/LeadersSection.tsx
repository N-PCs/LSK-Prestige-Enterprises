import React from 'react';
import { motion } from 'framer-motion';
import { LEADERS } from '../constants';

const LeadersSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 px-4 bg-white dark:bg-[#0a0a0a] overflow-hidden" id="leadership">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 md:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
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
              className="font-display text-3xl md:text-4xl lg:text-4xl text-black dark:text-white leading-tight italic font-medium"
            >
              Visionaries Behind the <br className="hidden md:block" /> LSK Prestige Legacy
            </motion.h2>
          </div>
        </div>

        {/* Global Grid Area for Desktop & Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 mt-12">
          {LEADERS.map((leader, index) => (
            <motion.div 
              key={leader.id || index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col gap-6"
            >
              {/* Leader Content - ABOVE IMAGE */}
              <div className="px-4 lg:px-0">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl lg:text-3xl text-black dark:text-white mb-2 leading-tight">
                    {leader.name}
                  </h3>
                  <div className="flex items-center gap-4">
                    <div className="h-[1px] w-8 bg-primary"></div>
                    <p className="text-secondary font-bold tracking-[0.2em] uppercase text-[9px] lg:text-[10px]">
                      {leader.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Leader Image */}
              <div className="w-full px-4 lg:px-0 mt-2">
                <div className="relative aspect-[4/5] w-full max-w-[320px] md:max-w-full mx-auto group">
                   {/* Top Accent Frame */}
                   <div className="absolute -top-3 -right-3 w-16 h-16 lg:w-24 lg:h-24 border-t-2 border-r-2 border-primary/20 -z-10 group-hover:-top-4 group-hover:-right-4 transition-all duration-500"></div>
                   
                   {/* Bottom Accent Frame */}
                   <div className="absolute -bottom-3 -left-3 w-16 h-16 lg:w-24 lg:h-24 border-b-2 border-l-2 border-secondary/20 -z-10 group-hover:-bottom-4 group-hover:-left-4 transition-all duration-500"></div>

                   <div className="absolute inset-0 bg-gray-100 dark:bg-gray-900 overflow-hidden rounded-sm shadow-xl lg:shadow-2xl">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-gray-300 dark:text-gray-700 font-display text-3xl opacity-50 uppercase tracking-widest">Portrait</span>
                      </div>
                      
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover relative z-10 transition-transform duration-700 lg:group-hover:scale-105"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                      
                      {/* Gradient Overlay for Desktop */}
                      <div className="hidden lg:block absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadersSection;
