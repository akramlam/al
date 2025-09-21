'use client';

import { motion } from 'framer-motion';
import { services } from '@/lib/data';

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800" />
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5" />

      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-400/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full border border-cyan-400/30 mb-6"
          >
            <span className="text-sm font-semibold text-cyan-300">Services Premium</span>
          </motion.div>

          <h2 className="text-headline font-bold text-white mb-6">
            Nos <span className="gradient-text">Services</span>
          </h2>
          <p className="text-subhead max-w-4xl mx-auto leading-relaxed">
            Une approche complète et personnalisée pour transformer vos idées
            en <span className="text-cyan-300 font-semibold">contenu vidéo percutant</span> qui marque les esprits
          </p>
        </motion.div>

        {/* Enhanced Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1
              }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/70 hover:border-cyan-400/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden">
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-cyan-400/20">
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{service.icon}</span>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Hover indicator */}
                  <div className="flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
                      <span className="text-white text-sm">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="glass-strong border border-white/20 rounded-3xl p-10 max-w-3xl mx-auto relative overflow-hidden group hover:border-cyan-400/40 transition-all duration-500">
            {/* Background animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full border border-cyan-400/30 mb-6">
                <span className="text-sm font-semibold text-cyan-300">💡 Service Sur Mesure</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                Besoin d&apos;un service personnalisé ?
              </h3>
              <p className="text-subhead mb-8 leading-relaxed">
                Notre équipe de <span className="text-cyan-300 font-semibold">créatifs experts</span> peut concevoir
                une solution complètement sur mesure pour vos besoins spécifiques.
              </p>

              <motion.a
                href="#meet"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 hover:from-cyan-400/30 hover:to-blue-500/30 border border-cyan-400/40 hover:border-cyan-400/60 rounded-2xl text-cyan-300 hover:text-white font-semibold transition-all duration-300 group/btn"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-xl mr-2">💬</span>
                Discutons de votre projet
                <motion.span
                  className="ml-3 group-hover/btn:translate-x-1 transition-transform duration-200"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
