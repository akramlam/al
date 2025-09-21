'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { InlineWidget, PopupWidget } from 'react-calendly';
import { Button } from '@/components/ui/Button';

export default function CalendlySection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="meet" className="py-24 relative">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-headline font-bold text-white mb-6">
            Réservez un Call Découverte
          </h2>
          <p className="text-subhead max-w-3xl mx-auto mb-8">
            En 15 minutes, découvrons ensemble comment nous pouvons transformer vos idées en contenu vidéo percutant
          </p>
        </motion.div>

        {/* Centered Calendly Card */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="glass-strong rounded-3xl p-8 border border-white/10 shadow-2xl shadow-cyan-500/5">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                Choisissez votre créneau
              </h3>
              <p className="text-body">
                Disponible du lundi au vendredi, 9h-18h
              </p>
            </div>
            
            {/* Calendly Inline Widget */}
            <div className="calendly-inline-widget" style={{ minWidth: '320px', height: '600px' }}>
              <InlineWidget
                url="https://calendly.com/YOUR_USERNAME/15min"
                styles={{
                  height: '600px',
                  width: '100%'
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            {
              icon: '🎯',
              title: 'Conseil personnalisé gratuit',
              description: 'Analyse de vos besoins et opportunités de création'
            },
            {
              icon: '💰',
              title: 'Estimation transparente',
              description: 'Budget clair et adapté à vos objectifs'
            },
            {
              icon: '👥',
              title: 'Découverte du collectif',
              description: 'Rencontrez notre équipe de créateurs talentueux'
            }
          ].map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-2xl flex items-center justify-center border border-cyan-400/20">
                <span className="text-2xl">{benefit.icon}</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-body">
                {benefit.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Popup Widget for mobile */}
        <div className="lg:hidden mt-8 text-center">
          <Button
            onClick={() => setIsOpen(true)}
            variant="default"
            size="lg"
          >
            Réserver maintenant
          </Button>
        </div>

        {/* Calendly Popup */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
              <motion.div
                className="relative bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              >
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center"
                >
                  ×
                </button>
                <PopupWidget
                  url="https://calendly.com/YOUR_USERNAME/15min"
                  rootElement={document.getElementById("__next") || document.body}
                  text="Réserver maintenant"
                  textColor="#ffffff"
                  color="#00aee5"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
