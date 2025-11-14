'use client';

import { motion } from 'framer-motion';

export default function CalendlySection() {
  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Prêt à <span className="text-cyan-400">collaborer</span> ?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Réservez un appel gratuit pour discuter de votre projet et découvrir comment nous pouvons vous aider
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-3xl">📅</div>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Planifiez votre consultation gratuite
              </h3>
              <p className="text-gray-300 mb-6">
                Choisissez un créneau qui vous convient pour échanger sur votre projet
              </p>
            </div>

            {/* Placeholder for Calendly widget */}
            <div className="bg-slate-700/50 rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">📅</div>
              <p className="text-gray-300 mb-4">
                Widget Calendly à intégrer ici
              </p>
              <p className="text-sm text-gray-400">
                Remplacez cette section par le widget Calendly avec votre nom d&apos;utilisateur
              </p>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-400 text-sm">
                Ou contactez-nous directement par email :{' '}
                <a 
                  href="mailto:contact@aljcreativestudio.com" 
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  contact@aljcreativestudio.com
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
