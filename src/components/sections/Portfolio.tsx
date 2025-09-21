'use client';

import { motion } from 'framer-motion';
import { projects } from '@/lib/data';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 relative">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-headline font-bold text-white mb-6">
            Nos Projets
          </h2>
          <p className="text-subhead max-w-3xl mx-auto">
            Découvrez quelques-uns de nos projets récents et la qualité de notre travail
          </p>
        </motion.div>

        {/* Enhanced Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                type: "spring",
                stiffness: 80
              }}
              viewport={{ once: true }}
              className="group perspective-1000"
            >
              <motion.div
                className="relative overflow-hidden rounded-3xl glass-strong border border-white/10 hover:border-cyan-400/40 transition-all duration-700 hover:-translate-y-6 hover:shadow-2xl hover:shadow-cyan-500/25 group-hover:scale-[1.02] transform-gpu"
                whileHover={{ rotateY: 5, rotateX: -5 }}
              >
                {/* Enhanced Project Visual */}
                <div className="aspect-video relative overflow-hidden">
                  {/* Dynamic background gradients */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/25 via-blue-500/20 to-purple-500/25" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-400/10 to-blue-500/15" />

                  {/* Enhanced animated pattern */}
                  <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
                    <motion.div
                      className="absolute top-6 left-6 w-12 h-12 border-2 border-cyan-400/40 rounded-2xl"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                      className="absolute top-12 right-8 w-6 h-6 bg-blue-400/40 rounded-full"
                      animate={{ y: [0, -10, 0], scale: [1, 1.2, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <motion.div
                      className="absolute bottom-8 left-8 w-8 h-8 border-2 border-purple-400/40 rounded-full"
                      animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    />
                    <motion.div
                      className="absolute bottom-6 right-6 w-4 h-4 bg-cyan-400/50 rounded-full"
                      animate={{ rotate: [0, 180, 360] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                  </div>

                  {/* Enhanced hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Dynamic project icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="text-7xl opacity-50 group-hover:opacity-100 transition-all duration-500"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                    >
                      🎬
                    </motion.div>
                  </div>

                  {/* Enhanced tag display */}
                  <div className="absolute top-4 left-4">
                    <motion.span
                      className="px-4 py-2 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 backdrop-blur-md text-cyan-100 text-xs font-bold rounded-full border border-cyan-400/40 shadow-lg"
                      whileHover={{ scale: 1.05 }}
                    >
                      {project.tag}
                    </motion.span>
                  </div>

                  {/* Enhanced hover content */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700"
                    initial={{ y: "100%" }}
                    whileHover={{ y: 0 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-200 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Interactive CTA */}
                    <motion.div
                      className="flex items-center justify-between"
                      whileHover={{ scale: 1.02 }}
                    >
                      <span className="text-cyan-300 font-semibold text-sm">
                        Voir le projet →
                      </span>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}} />
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}} />
                      </div>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Enhanced default content */}
                <motion.div
                  className="p-8 group-hover:opacity-0 transition-opacity duration-500"
                  initial={{ opacity: 1 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 text-cyan-300 text-xs font-semibold rounded-full border border-cyan-400/30">
                      {project.tag}
                    </span>
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full flex items-center justify-center">
                      <span className="text-cyan-300 text-sm">→</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-body leading-relaxed">
                    {project.description}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4">
              Vous voulez voir plus de nos réalisations ?
            </h3>
            <p className="text-body mb-6">
              Découvrez notre portfolio complet et nos dernières créations.
            </p>
            <a
              href="#meet"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200 group"
            >
              Découvrir tous nos projets
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
