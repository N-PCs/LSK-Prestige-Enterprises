import React from 'react';
import { motion } from "framer-motion";
import { Building2, Home, Store, Heart, Target, Shield } from "lucide-react";

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white dark:bg-[#0a0a0a] overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        {/* Image Grid with Framer Motion - Made more compact */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:w-1/2 grid grid-cols-2 gap-4 relative"
        >
          {/* Decorative backdrop element */}
          <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
          
          <div className="space-y-4">
            <img
              alt="Luxury Skyscraper"
              className="rounded-sm shadow-xl aspect-[3/4] object-cover w-full hover:scale-[1.02] transition-transform duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCR4LDTFMeD5AkA-S74sD3NHtGF30172FLdZhk4-GfnfBiuCMTz2FHQiV-bjeczVHP9Cy7m2sZynkidVdIyCc8I7Xp9SaTza3njTh4TfBMyU8XNb6O1iih48XUf3K8h1BU64mQyhzBQ5htx5j14kNmTiuCk5CmjFIR086dLAQsFyDik08_NVocB3noo-wSOW8ADkj9fl_Aa-zrp6p_CuJR7DkEIu_U2gw5bPWoUNTL2C1q_tOorg30qVLmDY7xj8tXYAk0sVOkvPyCu"
            />
            <img
              alt="Real Estate Interior"
              className="rounded-sm shadow-xl aspect-square object-cover w-full hover:scale-[1.02] transition-transform duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnC-KC0oyLE2hE8Vax82HO6FIyyPIKeR-NSscD0j7tkN1RaHrvEynpXFvXZ1YWQfGc-zPDyvsJqBSDSlIl7qgpKLwXwhbstajV6NGeMy1rBADenliokSQION8OonvWpmTjs5Eawd0kfbafRP0e-1gi48GzoZaDCI103nC-Ojbp60ooUuni4hHFAoTliNALM5_rXiGaB6Pih0bIpFQk1IiwZchEzvQMSE8fqbgy_Mg8SQvTLTmkOAZPV2fGUGetnKs3iN7muJIrGuT5"
            />
          </div>
          <div className="space-y-4 pt-12">
            <img
              alt="Modern House"
              className="rounded-sm shadow-xl aspect-square object-cover w-full hover:scale-[1.02] transition-transform duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKaqB_hTOaC4Bm8IFFESQrvg3Lf7jmBUu7LL3vlLVZIKliv6zji8rPIvAp30iAQEdhMRvLBNChAVY8yMFrcR0Y_JUisl-VkuOlPCdDPqfXpfmI7TOOV4cDWHgL7WHFAQGku09PzwVQVfrwsUbrG0ro2MuOZswACH3QGhpONTdPqPdf33RFQsOF5XWfuhxDy-dlkMbg72IqlOneNhbsu5UGgCYd58CQr2Ah2sfWn3UwErNdRvxDXzihcSOufyw5RZSEZb-sRk_PKhLq"
            />
            <img
              alt="Residential Detail"
              className="rounded-sm shadow-xl aspect-[3/4] object-cover w-full hover:scale-[1.02] transition-transform duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4nY3iSZsjeymKARfrW8KIBidK7Lbp1bBD0v3qu-FRjSP6lpgKLYDmDqd6krjk2aY9TM75I63XxWMa_3C72tZKjkuqZQ_tHWBue7jKJbpNP6qhtG3j2ht9EmjwxJysMtZxrxVmEDgB6SxVR5UjCkPRkbCyvXC02dqkYbLIdtRTuOt2_9Elpomn3o11kULkXMjRsZztaVwXxei8awyuF9Odh7Zf7NfGmb9kENQCTfC0QmtQNLjSM2QUghbMVUmZC4itPUa6jDOcW7u7"
            />
          </div>
        </motion.div>

        {/* Content with Framer Motion */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          {/* Legacy of Excellence Section */}
          <div>
            <span className="text-primary font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block">Legacy of Excellence</span>
            <h2 className="font-display text-4xl md:text-5xl mt-2 mb-6 text-black dark:text-white leading-[1.1] italic font-medium">
              Luxury Homes & <br/> <span className="text-primary">Flat</span> around the world
            </h2>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8 text-sm font-light italic">
              Born from a family's shared dream, LSK Prestige began shaping homes in 2018 and officially laid its cornerstones in 2022. With five villas completed and a sixth rising under the Goan sun, our story is one of craft, legacy, and belonging.
              What started as a father's vision has grown into a living tribute — every wall we build carries his passion for honest design, enduring strength, and soulful architecture.
              We believe homes should not just shelter life but celebrate it – grounded in heritage, open to light, and faithful to quality.
            </p>
          </div>

          {/* Property Types Grid - Made more compact */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            <div className="text-center group cursor-pointer">
              <div className="w-12 h-12 bg-secondary/5 text-secondary rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 group-hover:text-black dark:group-hover:text-white transition-colors">Apartment</span>
            </div>
            
            <div className="text-center group cursor-pointer">
              <div className="w-12 h-12 bg-black/5 dark:bg-white/5 text-black dark:text-white rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all duration-300">
                <Home className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 group-hover:text-black dark:group-hover:text-white transition-colors">House</span>
            </div>

            <div className="text-center group cursor-pointer">
              <div className="w-12 h-12 bg-secondary/5 text-secondary rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                <Store className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 group-hover:text-black dark:group-hover:text-white transition-colors">Commercial</span>
            </div>
          </div>

          {/* Philosophy & Values Section - Combined into single column */}
          <div className="border-t border-gray-100 dark:border-gray-800 pt-8">
            <span className="text-secondary font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block">Philosophy / Values</span>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6 text-sm font-light italic">
              Our philosophy is rooted in the belief that every home tells a story — of those who dreamt it, built it, and live within it.
              Each villa stands as a dialogue between art and structure, inspired by Goan warmth and guided by integrity.
            </p>

            {/* Values Icons Grid - Made more compact */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center group">
                <div className="w-10 h-10 bg-secondary/5 text-secondary rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  <Heart className="w-4 h-4" />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-500 group-hover:text-black dark:group-hover:text-white transition-colors">Integrity</span>
              </div>
              
              <div className="text-center group">
                <div className="w-10 h-10 bg-secondary/5 text-secondary rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  <Target className="w-4 h-4" />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-500 group-hover:text-black dark:group-hover:text-white transition-colors">Craftsmanship</span>
              </div>

              <div className="text-center group">
                <div className="w-10 h-10 bg-secondary/5 text-secondary rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  <Shield className="w-4 h-4" />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-500 group-hover:text-black dark:group-hover:text-white transition-colors">Transparency</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;