'use client';

/**
 * Footer Component - ALJ Studio Creative
 * Brand Book 2025 Compliant
 *
 * Site footer with links, social media, and contact info
 * Features: multi-column layout, animated social icons
 */

import { motion } from 'framer-motion';
import { socialLinks } from '@/lib/data';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { fadeInUp } from '@/lib/animations';

const footerLinks = {
  services: [
    { label: 'Scripting & Concept', href: '#services' },
    { label: 'Production Vidéo', href: '#services' },
    { label: 'Montage & Post-Prod', href: '#services' },
    { label: 'Stratégie Marketing', href: '#services' },
    { label: 'Community Management', href: '#services' },
  ],
  company: [
    { label: 'À propos', href: '#about' },
    { label: 'Notre équipe', href: '#creators' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Processus', href: '#process' },
    { label: 'FAQ', href: '#faq' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black border-t border-soft-steel-blue/20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight-navy/50 to-black -z-10" />

      <div className="container-site py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Heading as="h3" variant="default" className="mb-4">
              ALJ <span className="gradient-text-orange">Creative Studio</span>
            </Heading>
            <Text size="base" color="secondary" className="mb-6 max-w-md leading-relaxed">
              Réunir les créateurs de contenu pour scaler vos projets vidéo
              les plus ambitieux. Notre collectif de talents vous accompagne
              de la conception à la diffusion.
            </Text>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-saffron-orange/10 to-amber/10 border border-saffron-orange/20 flex items-center justify-center text-saffron-orange hover:bg-gradient-to-br hover:from-saffron-orange/20 hover:to-amber/20 hover:border-saffron-orange/40 hover:shadow-glow-orange transition-all duration-300"
                  aria-label={social.name}
                >
                  <span className="text-xl">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services Column */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-heading text-lg font-semibold text-brand-off-white mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-brand-grey hover:text-saffron-orange transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-saffron-orange to-amber group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-heading text-lg font-semibold text-brand-off-white mb-4">
              Entreprise
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-brand-grey hover:text-saffron-orange transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-saffron-orange to-amber group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Contact CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <div className="glass rounded-2xl p-8 lg:p-10 max-w-4xl mx-auto text-center">
            <Heading as="h3" variant="default" align="center" className="mb-3">
              Prêt à démarrer votre projet ?
            </Heading>
            <Text size="base" color="secondary" align="center" className="mb-6">
              Réservez un appel gratuit pour discuter de vos besoins
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-saffron-orange to-amber text-brand-black font-heading font-semibold px-8 py-3 rounded-xl shadow-glow-orange hover:shadow-glow-orange-lg transition-all duration-300"
              >
                Réserver un appel
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
              <a
                href="mailto:contact@aljcreativestudio.com"
                className="font-body text-brand-grey hover:text-saffron-orange transition-colors"
              >
                contact@aljcreativestudio.com
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-soft-steel-blue/20 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Text size="sm" color="muted">
              © {new Date().getFullYear()} ALJ Creative Studio. Tous droits réservés.
            </Text>

            <div className="flex gap-6">
              <a
                href="#"
                className="font-body text-sm text-brand-grey hover:text-saffron-orange transition-colors"
              >
                Mentions légales
              </a>
              <a
                href="#"
                className="font-body text-sm text-brand-grey hover:text-saffron-orange transition-colors"
              >
                Politique de confidentialité
              </a>
              <a
                href="#"
                className="font-body text-sm text-brand-grey hover:text-saffron-orange transition-colors"
              >
                CGV
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
