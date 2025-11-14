'use client';

import { motion } from 'framer-motion';
import { projects } from '@/lib/data';
import { ContainerScroll } from '../ui/container-scroll-animation';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-slate-900">
      <ContainerScroll
        titleComponent={
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Notre <span className="text-cyan-400">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Découvrez quelques-uns de nos projets les plus marquants
            </p>
          </div>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-2xl overflow-hidden hover:border-cyan-400/40 transition-all duration-300">
                <div className="relative h-64 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center">
                  <div className="text-6xl opacity-50">🎬</div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-cyan-400 text-sm font-semibold bg-cyan-400/10 px-3 py-1 rounded-full">
                      {project.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-full font-semibold hover:bg-cyan-400 hover:text-slate-950 transition-colors"
          >
            Voir tous nos projets
          </motion.button>
        </motion.div>
      </ContainerScroll>
    </section>
  );
}
