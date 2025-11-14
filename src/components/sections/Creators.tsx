'use client';

import { motion } from 'framer-motion';

export default function Creators() {
  return (
    <section id="about" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Notre <span className="text-cyan-400">Collectif</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Plus de 50 créateurs talentueux réunis pour donner vie à vos projets les plus ambitieux
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            { role: 'Réalisateurs', count: '15+', description: 'Spécialisés dans différents genres' },
            { role: 'Monteurs', count: '12+', description: 'Experts en post-production' },
            { role: 'Motion Designers', count: '8+', description: 'Créateurs d\'animations' },
            { role: 'Scénaristes', count: '10+', description: 'Maîtres de la narration' },
            { role: 'Producteurs', count: '6+', description: 'Gestion de projets complexes' },
            { role: 'Community Managers', count: '8+', description: 'Experts en stratégie digitale' }
          ].map((item, index) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 text-center"
            >
              <div className="text-4xl font-bold text-cyan-400 mb-2">
                {item.count}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {item.role}
              </h3>
              <p className="text-gray-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-400/10 to-blue-500/10 border border-cyan-400/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Une approche collaborative unique
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Notre collectif fonctionne comme un écosystème créatif où chaque talent apporte son expertise unique. 
              Nous sélectionnons la meilleure équipe pour chaque projet, garantissant une qualité exceptionnelle 
              et une créativité sans limites.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-cyan-400 text-slate-950 px-8 py-3 rounded-full font-semibold hover:bg-cyan-300 transition-colors"
            >
              Rejoindre notre collectif
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
