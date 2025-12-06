'use client';

/**
 * Hero Section - ALJ Studio Creative - REDESIGNED
 * Dramatic hero with cinematic animations and strong visual hierarchy
 */

import { motion } from 'framer-motion';
import AnimatedShaderBackground from '../animated-shader-background';
import { Button } from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Shader Background */}
      <AnimatedShaderBackground />

      {/* Strong Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-midnight-navy/50 to-black z-0" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/60 z-0" />

      {/* Glow Effects */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-saffron-orange/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-royal-blue/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Hero Content */}
      <div className="relative z-10 container-site text-center px-4">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-8"
          >
            <div className="px-6 py-3 rounded-full bg-gradient-to-r from-saffron-orange/20 to-amber/20 border border-saffron-orange/40 backdrop-blur-xl">
              <span className="text-saffron-orange font-heading font-bold text-sm">
                🎬 Studio Créatif N°1 en France
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-black mb-8 leading-none"
          >
            <span className="text-white">Réunir les </span>
            <br />
            <span className="bg-gradient-to-r from-saffron-orange via-amber to-saffron-orange bg-clip-text text-transparent animate-gradient">
              créateurs
            </span>
            <br />
            <span className="text-white">pour scaler</span>
            <br />
            <span className="text-white">vos projets</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-brand-grey leading-relaxed mb-12 max-w-4xl mx-auto"
          >
            De la <span className="text-white font-semibold">conception</span> à la <span className="text-white font-semibold">diffusion</span>,
            notre collectif de créateurs donne vie à vos projets vidéo les plus ambitieux.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button
              variant="primary"
              size="xl"
              onClick={() => window.open('#services', '_self')}
              className="min-w-[240px]"
            >
              Découvrir nos services
            </Button>

            <Button
              variant="outline"
              size="xl"
              onClick={() => window.open('#portfolio', '_self')}
              className="min-w-[240px]"
            >
              Voir le portfolio
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-8 lg:gap-12"
          >
            <div className="flex items-center gap-3 group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-saffron-orange/20 to-amber/20 border border-saffron-orange/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-saffron-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm text-brand-grey">Projets réalisés</div>
              </div>
            </div>

            <div className="flex items-center gap-3 group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-saffron-orange/20 to-amber/20 border border-saffron-orange/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-saffron-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-sm text-brand-grey">Satisfaction client</div>
              </div>
            </div>

            <div className="flex items-center gap-3 group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-saffron-orange/20 to-amber/20 border border-saffron-orange/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-saffron-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white">15+</div>
                <div className="text-sm text-brand-grey">Créateurs experts</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.button
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          className="flex flex-col items-center gap-2 group cursor-pointer"
        >
          <span className="text-xs text-brand-grey font-medium uppercase tracking-wider">Scroll</span>
          <div className="w-6 h-10 border-2 border-saffron-orange/50 rounded-full flex justify-center p-1 group-hover:border-saffron-orange transition-colors">
            <div className="w-1 h-2 bg-saffron-orange rounded-full" />
          </div>
        </motion.button>
      </motion.div>

      {/* Gradient animation for text */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}
