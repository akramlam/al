'use client';

import { motion } from 'framer-motion';
import {Card} from '@/components/ui/Card';
import {Button} from '@/components/ui/Button';

export default function Creators() {
  const perks = [
    {
      title: 'Projets Premium',
      description: 'Accès à des projets de grande envergure avec des budgets attractifs'
    },
    {
      title: 'Formation Continue',
      description: 'Ateliers et masterclasses pour développer vos compétences'
    },
    {
      title: 'Réseau Professionnel',
      description: 'Connexions avec d\'autres créateurs et professionnels du secteur'
    },
    {
      title: 'Support Technique',
      description: 'Accès à du matériel professionnel et support technique'
    }
  ];

  return (
    <section id="creators" className="py-20 bg-[#0B1220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Rejoignez Notre Collectif
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Plus de 50 créateurs talentueux travaillent déjà avec nous. 
            Découvrez les avantages de faire partie de notre réseau.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {perks.map((perk, index) => (
            <motion.div
              key={perk.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center">
                <h3 className="text-lg font-semibold text-white mb-3">
                  {perk.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {perk.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Prêt à nous rejoindre ?
            </h3>
            <p className="text-gray-300 mb-6">
              Envoyez-nous votre portfolio et découvrez comment intégrer notre collectif de créateurs.
            </p>
            <Button variant="default" size="lg">
              Candidater maintenant
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
