'use client';

/**
 * Process Timeline Section - ALJ Studio Creative - REDESIGNED
 * Clean, modern alternating timeline with better visual design
 */

import { motion } from 'framer-motion';
import { processSteps } from '@/lib/data';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';

export default function Process() {
  return (
    <section id="process" className="py-32 relative overflow-hidden bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-midnight-navy/20 to-black" />
      <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-saffron-orange/30 to-transparent" />

      <div className="container-site relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6"
          >
            <span className="px-6 py-2 rounded-full bg-gradient-to-r from-saffron-orange/20 to-amber/20 border border-saffron-orange/30 text-saffron-orange font-heading text-sm font-semibold backdrop-blur-sm">
              Notre Processus
            </span>
          </motion.div>

          <Heading as="h2" variant="default" align="center" balance className="mb-6">
            Un processus éprouvé en
            <br />
            <span className="gradient-text-orange">5 étapes simples</span>
          </Heading>

          <Text size="lg" color="secondary" align="center" className="max-w-3xl mx-auto">
            De la première rencontre à la diffusion finale, nous vous accompagnons
            à chaque étape pour garantir la réussite de votre projet.
          </Text>
        </motion.div>

        {/* Timeline - REDESIGNED */}
        <div className="max-w-6xl mx-auto">
          {processSteps.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center mb-20 last:mb-0 ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className="flex-1 lg:px-8">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="relative group"
                  >
                    {/* Card Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/[0.02] rounded-3xl backdrop-blur-xl border border-white/10 group-hover:border-saffron-orange/50 transition-all duration-500" />

                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-saffron-orange/10 to-amber/5 blur-xl -z-10" />

                    {/* Card Content */}
                    <div className="relative p-8 lg:p-10">
                      {/* Step Number Badge */}
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-saffron-orange to-amber text-black font-display font-black text-2xl mb-6 shadow-glow-orange-lg">
                        {step.step}
                      </div>

                      {/* Title */}
                      <h3 className="text-3xl font-heading font-bold text-white mb-4 group-hover:text-saffron-orange transition-colors duration-300">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-brand-grey text-lg leading-relaxed">
                        {step.description}
                      </p>

                      {/* Bottom Accent */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-saffron-orange via-amber to-saffron-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl" />
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Dot - Center */}
                <div className="hidden lg:flex items-center justify-center relative z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="relative"
                  >
                    {/* Outer Ring */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-saffron-orange to-amber flex items-center justify-center shadow-glow-orange-lg">
                      {/* Inner Dot */}
                      <div className="w-6 h-6 rounded-full bg-black" />
                    </div>

                    {/* Pulsing Glow */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-br from-saffron-orange to-amber opacity-30 blur-xl"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  </motion.div>
                </div>

                {/* Spacer for layout */}
                <div className="hidden lg:block flex-1" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 text-center"
        >
          <div className="inline-flex flex-col items-center gap-6 p-10 rounded-3xl bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl border border-white/10 max-w-3xl">
            <Heading as="h3" variant="default" align="center">
              Prêt à démarrer ?
            </Heading>
            <Text size="base" color="secondary" align="center" className="max-w-xl">
              Réservez un appel gratuit de 30 minutes pour discuter de votre projet
              et découvrir comment nous pouvons vous aider.
            </Text>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-gradient-to-r from-saffron-orange to-amber text-black font-heading font-bold text-lg shadow-glow-orange-lg hover:shadow-glow-orange-xl transition-all duration-300"
            >
              Réserver un appel gratuit
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
