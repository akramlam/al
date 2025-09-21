'use client';

import { motion } from 'framer-motion';
import { timelineEvents } from '@/lib/data';

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 relative">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-headline font-bold text-white mb-6">
            Notre Histoire
          </h2>
          <p className="text-subhead max-w-3xl mx-auto">
            Un parcours marqué par l&apos;innovation et la croissance
          </p>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-400 rounded-full" />
          
          {/* Timeline Events */}
          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline Dot with Modern Design */}
                <div className="relative z-20 flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-cyan-500/25 border-4 border-slate-900">
                    {event.year}
                  </div>
                  {/* Pulse animation */}
                  <motion.div
                    className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  />
                </div>

                {/* Content Card */}
                <div className={`flex-1 ${
                  index % 2 === 0 ? 'ml-12 text-left' : 'mr-12 text-right'
                }`}>
                  <motion.div
                    className="glass-strong rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10"
                    whileHover={{ scale: 1.02 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {event.title}
                    </h3>
                    <p className="text-body leading-relaxed">
                      {event.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4">
              Rejoignez notre aventure
            </h3>
            <p className="text-body mb-6">
              Devenez partie intégrante de notre histoire en nous rejoignant pour créer l&apos;avenir du contenu vidéo.
            </p>
            <a
              href="#meet"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200 group"
            >
              Découvrir nos opportunités
              <motion.span
                className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
