import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Layout, Cpu, Palette, Zap, Smartphone } from 'lucide-react';
import { PERSONAL_DATA } from '../data/content';

export const Services: React.FC = () => {
  const getServiceIcon = (index: number) => {
    switch (index) {
      case 0: return <Globe className="w-6 h-6 text-zinc-200" />;
      case 1: return <Layout className="w-6 h-6 text-zinc-200" />;
      case 2: return <Cpu className="w-6 h-6 text-zinc-200" />;
      case 3: return <Palette className="w-6 h-6 text-zinc-200" />;
      case 4: return <Zap className="w-6 h-6 text-zinc-200" />;
      case 5: return <Smartphone className="w-6 h-6 text-zinc-200" />;
      default: return <Globe className="w-6 h-6 text-zinc-200" />;
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-[#09090b] border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">// SERVICES OFFERED</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase font-sans mt-2">
            What I can build for you.
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PERSONAL_DATA.services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="rounded-2xl bg-zinc-900/50 border border-zinc-800/80 p-8 hover:border-zinc-700 transition-all duration-300 backdrop-blur-md group flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="p-3.5 rounded-xl bg-zinc-800 border border-zinc-700/80 w-fit group-hover:scale-110 transition-transform duration-300">
                  {getServiceIcon(idx)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight font-sans">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mt-3 font-normal">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-500">
                <span>0{idx + 1} // SERVICE</span>
                <span className="group-hover:text-zinc-200 transition-colors">CUSTOM SOLUTIONS</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
