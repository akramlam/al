'use client';

import { motion } from 'framer-motion';
import { timelineEvents } from '@/lib/data';

export default function Timeline() {
  return (
    <section className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Notre <span className="text-cyan-400">Histoire</span>
          </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Un parcours marqué par l&apos;innovation et la croissance
            </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-cyan-600" />
          
          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-cyan-400 text-slate-950 rounded-full flex items-center justify-center font-bold text-xl mr-4">
                        {event.year}
                      </div>
                      <h3 className="text-2xl font-semibold text-white">
                        {event.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {event.description}
                    </p>
                  </motion.div>
                </div>
                
                {/* Timeline dot */}
                <div className="flex items-center justify-center w-8 h-8 bg-cyan-400 rounded-full border-4 border-slate-950 z-10">
                  <div className="w-2 h-2 bg-slate-950 rounded-full" />
                </div>
                
                <div className="w-full md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
