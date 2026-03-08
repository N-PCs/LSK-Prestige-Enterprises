import React from 'react';
import { SERVICES } from '../constants';

const ServicesSection: React.FC = () => {
  return (
    <section className="py-28 px-4 bg-gray-50 dark:bg-black" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-left max-w-2xl">
          <span className="text-primary font-bold tracking-[0.4em] text-[15px] uppercase mb-4 block">
            Services
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-black dark:text-white leading-tight italic">
            Exemplary Services For <br /> Discerning Clients
          </h2>
          <p className="mt-6 text-gray-500 dark:text-gray-400 font-light leading-relaxed">
            We provide a holistic approach to real estate, ensuring every detail
            of your journey is handled with professional precision and care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {SERVICES.map((service) => (
            <div key={service.id} className="group cursor-default relative">
              <div className="mb-10 w-20 h-20 bg-white dark:bg-gray-900 rounded-sm flex items-center justify-center border border-gray-100 dark:border-gray-800 transition-all duration-500 group-hover:border-primary group-hover:-translate-y-2 shadow-sm group-hover:shadow-xl">
                <span className="material-icons-outlined text-4xl text-primary">
                  {service.icon}
                </span>
              </div>
              <h3 className="font-display text-3xl font-medium mb-6 text-black dark:text-white transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-10 leading-relaxed text-sm tracking-wide">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
