'use client';

/**
 * Services Section - ALJ Studio Creative
 * Brand Book 2025 Compliant - REDESIGNED
 *
 * Premium services grid with dramatic visual design
 */

import { motion } from 'framer-motion';
import { services } from '@/lib/data';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { staggerContainer, cardReveal } from '@/lib/animations';

export default function Services() {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Dramatic Background */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-gradient-to-b from-midnight-navy/40 via-transparent to-black/60" />

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-saffron-orange/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-royal-blue/10 rounded-full blur-3xl" />

      <div className="container-site relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6"
          >
            <span className="px-6 py-2 rounded-full bg-gradient-to-r from-saffron-orange/20 to-amber/20 border border-saffron-orange/30 text-saffron-orange font-heading text-sm font-semibold backdrop-blur-sm">
              Nos Services
            </span>
          </motion.div>

          <Heading as="h2" variant="default" align="center" balance className="mb-6">
            Une gamme complète de services
            <br />
            <span className="gradient-text-orange">pour scaler vos projets</span>
          </Heading>

          <Text size="lg" color="secondary" align="center" className="max-w-3xl mx-auto">
            De la conception à la diffusion, notre équipe de créateurs vous accompagne
            à chaque étape de votre projet vidéo.
          </Text>
        </motion.div>

        {/* Services Grid - REDESIGNED */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardReveal}
              className="group"
            >
              <div className="relative h-full">
                {/* Card Background with Strong Glassmorphism */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/[0.02] rounded-3xl backdrop-blur-xl border border-white/10 group-hover:border-saffron-orange/50 transition-all duration-500" />

                {/* Glow on Hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-saffron-orange/10 to-amber/5 blur-xl -z-10" />

                {/* Card Content */}
                <div className="relative p-8 h-full flex flex-col">
                  {/* Icon with Gradient Background */}
                  <div className="mb-6 relative">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-saffron-orange/20 to-amber/20 border border-saffron-orange/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <span className="text-4xl filter drop-shadow-lg">{service.icon}</span>
                    </div>

                    {/* Number Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-saffron-orange to-amber flex items-center justify-center text-xs font-bold text-black shadow-lg">
                      {index + 1}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-saffron-orange transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-brand-grey leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center gap-2 text-saffron-orange font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                    <span className="text-sm">En savoir plus</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-saffron-orange via-amber to-saffron-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10">
            <Text size="lg" color="secondary">
              Un projet spécifique en tête ?
            </Text>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-saffron-orange to-amber text-black font-heading font-bold shadow-glow-orange-lg hover:shadow-glow-orange-xl transition-all duration-300"
            >
              Parlons de votre projet
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
