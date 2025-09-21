'use client';

import { motion } from 'framer-motion';
import { faqs } from '@/lib/data';
import Accordion from '@/components/ui/Accordion';

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-[#0B1220]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Questions Fréquentes
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Trouvez les réponses aux questions les plus courantes sur nos services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion items={faqs} />
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-white mb-4">
              Vous avez d&apos;autres questions ?
            </h3>
            <p className="text-gray-300 mb-6">
              Notre équipe est là pour vous accompagner. N&apos;hésitez pas à nous contacter.
            </p>
            <a
              href="#meet"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200"
            >
              Réserver un call découverte
              <motion.span
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
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
