'use client';

import { motion } from 'framer-motion';
import { processSteps } from '@/lib/data';

export default function Process() {
  return (
    <section id="process" className="py-24 relative overflow-hidden">
      {/* Advanced background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-slate-850 to-slate-900" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5" />

      {/* Dynamic background elements */}
      <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/8 to-pink-500/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
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
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full border border-blue-400/30 mb-6"
          >
            <span className="text-sm font-semibold text-blue-300">⚙️ Méthodologie Prouvée</span>
          </motion.div>

          <h2 className="text-headline font-bold text-white mb-6">
            Notre <span className="gradient-text">Processus</span>
          </h2>
          <p className="text-subhead max-w-4xl mx-auto leading-relaxed">
            <span className="text-blue-300 font-semibold">5 étapes clés</span> et une méthodologie éprouvée
            pour garantir le succès et l&apos;impact de votre projet vidéo
          </p>
        </motion.div>

        {/* Fixed Process Timeline */}
        <div className="relative">
          {/* Simplified Connection Line for better layout */}
          <div className="hidden lg:block absolute top-12 left-10 right-10 h-0.5 z-0">
            <div className="h-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
            <motion.div
              className="absolute inset-0 h-full bg-gradient-to-r from-cyan-400/50 via-blue-500/50 to-purple-500/50"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  {/* Fixed Step Number */}
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl mx-auto mb-6 relative z-10 shadow-lg shadow-cyan-500/25 border-2 border-slate-800 group-hover:scale-105 transition-all duration-300">
                    <span className="text-2xl font-black">{step.step}</span>
                  </div>

                  {/* Fixed Content Card */}
                  <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-2xl p-6 hover:bg-slate-700/70 hover:border-cyan-400/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10 min-h-[140px] flex flex-col justify-center">
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Simplified Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-4">
              Prêt à commencer votre projet ?
            </h3>
            <p className="text-gray-300 mb-6">
              Suivons ensemble ces étapes pour créer un contenu vidéo qui marque les esprits.
            </p>
            <a
              href="#meet"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200 group"
            >
              Démarrer maintenant
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
