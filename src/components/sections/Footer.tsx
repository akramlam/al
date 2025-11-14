'use client';

import { motion } from 'framer-motion';
import { socialLinks } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-cyan-400/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              ALJ <span className="text-cyan-400">Creative</span>
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Réunir les créateurs de contenu pour scaler vos projets vidéo les plus ambitieux. 
              Notre collectif de talents vous accompagne de la conception à la diffusion.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-cyan-400/10 border border-cyan-400/20 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <span className="text-lg">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
            {['Scripting & Concept', 'Production Vidéo', 'Montage & Post-Prod', 'Stratégie Marketing', 'Community Management'].map((service) => (
              <li key={service}>
                <a href="#services" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  {service}
                </a>
              </li>
            ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-2">
              <p className="text-gray-300">
                <a href="mailto:contact@aljcreativestudio.com" className="hover:text-cyan-400 transition-colors">
                  contact@aljcreativestudio.com
                </a>
              </p>
              <p className="text-gray-300">
                <a href="tel:+33123456789" className="hover:text-cyan-400 transition-colors">
                  +33 1 23 45 67 89
                </a>
              </p>
              <p className="text-gray-300">
                Paris, France
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-cyan-400/20 pt-8 text-center"
        >
          <p className="text-gray-400">
            © 2024 ALJ Creative Studio. Tous droits réservés.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
