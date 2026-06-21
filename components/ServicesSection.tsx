import React from 'react';
import { SERVICES } from '../constants';
import { Building2, Home, Wrench, CalendarCheck, Hammer, Sparkles, LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Home,
  Wrench,
  CalendarCheck,
  Hammer,
  Sparkles,
};

const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 px-6 lg:px-8 bg-gray-50 dark:bg-black" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16 text-left max-w-2xl ">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-[#E06A55] block mb-2">
            SERVICES
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-black dark:text-white font-medium leading-tight">
            Exemplary Services For <br />Our Clients
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 sm:gap-x-12 lg:gap-x-16">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            const isEven = index % 2 === 0;

            return (
              <div key={service.id} className="group cursor-default relative">
                <div
                  className={`mb-5 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-sm border ${
                    isEven
                      ? 'bg-black/5 dark:bg-white/10 text-black dark:text-white group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black border-black/5 dark:border-white/10'
                      : 'bg-primary/5 dark:bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white border-primary/10'
                  }`}
                >
                  {IconComponent && <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />}
                </div>
                <h3 className="font-display text-lg sm:text-xl font-medium mb-2 text-black dark:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4 leading-relaxed text-sm tracking-wide">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
};

export default ServicesSection;

